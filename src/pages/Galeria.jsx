import { useState, useEffect, useCallback, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Lightbox from '../components/gallery/Lightbox'
import UploadModal from '../components/gallery/UploadModal'
import { api, avatarUrl, CATEGORIES } from '../lib/api'

// ── Admin secret login modal ──────────────────────────────────────
function AdminLoginModal({ onClose, onSuccess }) {
  const [pw, setPw]     = useState('')
  const [err, setErr]   = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true); setErr('')
    try {
      const { user } = await api.adminLogin(pw)
      onSuccess(user)
    } catch (error) {
      setErr(error.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="upload-overlay" onClick={onClose}>
      <div className="upload-modal admin-login-modal" onClick={e => e.stopPropagation()}>
        <button className="upload-close" onClick={onClose}>✕</button>
        <h2 className="upload-title">Acceso Administrador</h2>
        <form onSubmit={submit}>
          <input
            className="upload-input"
            type="password"
            placeholder="Contrasena secreta"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autoFocus
          />
          {err && <p className="upload-error">{err}</p>}
          <button className="upload-submit" type="submit" disabled={busy || !pw}>
            {busy ? 'Verificando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}

// ── User chip (logged-in state) ───────────────────────────────────
function UserChip({ user, av, onLogout, onUpload }) {
  const [open, setOpen] = useState(false)
  const chipRef = useRef(null)

  useEffect(() => {
    if (!open) return
    function onOutside(e) {
      if (chipRef.current && !chipRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [open])

  return (
    <div className="galeria-user-chip" ref={chipRef}>
      <div className="galeria-chip-left" onClick={() => setOpen(v => !v)}>
        <div className="galeria-chip-avatar-wrap">
          {av
            ? <img className="galeria-chip-avatar" src={av} alt={user.username} />
            : <div className="galeria-chip-avatar galeria-chip-avatar--fallback"><i className="fa-solid fa-user" /></div>
          }
          {user.is_admin && <span className="galeria-chip-admin-dot" title="Administrador" />}
        </div>
        <div className="galeria-chip-info">
          <span className="galeria-chip-name">{user.username}</span>
          {user.is_admin && <span className="galeria-chip-role">Administrador</span>}
        </div>
        <i className={`fa-solid fa-chevron-down galeria-chip-arrow${open ? ' open' : ''}`} />
      </div>

      <button className="galeria-upload-fab" onClick={onUpload} title="Subir foto">
        <i className="fa-solid fa-plus" />
        <span>Subir</span>
      </button>

      {open && (
        <div className="galeria-chip-dropdown">
          <button className="galeria-chip-logout" onClick={() => { onLogout(); setOpen(false) }}>
            <i className="fa-solid fa-right-from-bracket" />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  )
}

// ── Photo card ────────────────────────────────────────────────────
function PhotoCard({ photo, user, onClick, onDelete }) {
  const canDelete = user && (user.is_admin || user.id === photo.uploader_id)

  async function handleDelete(e) {
    e.stopPropagation()
    if (!confirm('Borrar esta foto?')) return
    try {
      await api.deletePhoto(photo.id)
      onDelete(photo.id)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="galeria-card" onClick={onClick}>
      <img className="galeria-card-img" src={photo.url} alt={photo.title || 'Foto'} loading="lazy" />
      <div className="galeria-card-overlay">
        {photo.title && <span className="galeria-card-title">{photo.title}</span>}
        <span className="galeria-card-cat">{photo.category}</span>
        {canDelete && (
          <button className="galeria-card-delete" onClick={handleDelete} title="Borrar">
            <i className="fa-solid fa-trash" />
          </button>
        )}
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────
export default function Galeria() {
  const location = useLocation()
  const [user, setUser]             = useState(undefined) // undefined = loading
  const [photos, setPhotos]         = useState([])
  const [category, setCategory]     = useState('all')
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const [showUpload, setShowUpload] = useState(false)
  const [showAdmin, setShowAdmin]   = useState(false)
  const [photosLoading, setPhotosLoading] = useState(true)
  const titleClickCount = useRef(0)
  const titleClickTimer = useRef(null)

  // Check auth on mount + handle Discord callback
  useEffect(() => {
    api.getMe()
      .then(({ user: u }) => setUser(u || null))
      .catch(() => setUser(null))
  }, [])

  // Handle Discord ?login=ok in hash
  useEffect(() => {
    const hash = location.hash || window.location.hash
    if (hash.includes('login=ok')) {
      api.getMe().then(({ user: u }) => setUser(u || null)).catch(() => {})
      window.history.replaceState(null, '', window.location.pathname + '#/galeria')
    }
  }, [location])

  // Load photos when category changes
  useEffect(() => {
    setPhotosLoading(true)
    api.getPhotos(category)
      .then(data => setPhotos(data))
      .catch(() => setPhotos([]))
      .finally(() => setPhotosLoading(false))
  }, [category])

  // Triple-click on title -> admin modal
  function handleTitleClick() {
    titleClickCount.current += 1
    clearTimeout(titleClickTimer.current)
    if (titleClickCount.current >= 3) {
      titleClickCount.current = 0
      setShowAdmin(true)
      return
    }
    titleClickTimer.current = setTimeout(() => { titleClickCount.current = 0 }, 600)
  }

  const handleDelete = useCallback((id) => {
    setPhotos(prev => prev.filter(p => p.id !== id))
    setLightboxIdx(null)
  }, [])

  const handleUploaded = useCallback(() => {
    api.getPhotos(category).then(setPhotos).catch(() => {})
  }, [category])

  async function logout() {
    await api.logout().catch(() => {})
    setUser(null)
  }

  const av = user ? avatarUrl(user) : null

  return (
    <div className="page active">
      {/* Hero */}
      <div className="page-header">
        <div className="page-header-bg" style={{ backgroundImage: "url('/images/938f05_21021a0aa69c4a3d8b01cf06a38b12c5~mv2.png')" }} />
        <div className="page-header-overlay" />
        <div className="page-header-content">
          <h1 onClick={handleTitleClick} style={{ cursor: 'default', userSelect: 'none' }}>Galeria</h1>
          <p>Los momentos de Primus</p>
        </div>
      </div>

      <div className="detail-body">

        {/* Auth bar */}
        <div className="galeria-auth-bar">
          {user === undefined && (
            <span className="galeria-auth-loading"><i className="fa-solid fa-spinner fa-spin" /> Comprobando sesión...</span>
          )}
          {user === null && (
            <button className="galeria-login-btn" onClick={api.discordLogin}>
              <i className="fa-brands fa-discord" /> Iniciar sesión con Discord
            </button>
          )}
          {user && (
            <UserChip
              user={user}
              av={av}
              onLogout={logout}
              onUpload={() => setShowUpload(true)}
            />
          )}
        </div>

        {/* Category filters */}
        <div className="galeria-filters">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`galeria-filter-btn${category === c.id ? ' active' : ''}`}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {photosLoading ? (
          <div className="galeria-loading">
            <i className="fa-solid fa-spinner fa-spin" /> Cargando...
          </div>
        ) : photos.length === 0 ? (
          <div className="galeria-empty">
            <i className="fa-solid fa-images" />
            <p>No hay fotos en esta categoria todavia.</p>
            {user && <button className="galeria-upload-btn" onClick={() => setShowUpload(true)}>
              Ser el primero en subir una
            </button>}
          </div>
        ) : (
          <div className="galeria-grid">
            {photos.map((photo, i) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                user={user}
                onClick={() => setLightboxIdx(i)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIdx}
          user={user}
          onClose={() => setLightboxIdx(null)}
          onDelete={handleDelete}
          onNav={dir => setLightboxIdx(i => Math.max(0, Math.min(photos.length - 1, i + dir)))}
        />
      )}

      {/* Upload modal */}
      {showUpload && (
        <UploadModal
          onClose={() => setShowUpload(false)}
          onUploaded={handleUploaded}
        />
      )}

      {/* Admin secret login */}
      {showAdmin && (
        <AdminLoginModal
          onClose={() => setShowAdmin(false)}
          onSuccess={u => { setUser(u); setShowAdmin(false) }}
        />
      )}
    </div>
  )
}
