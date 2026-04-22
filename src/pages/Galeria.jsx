import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Lightbox from '../components/gallery/Lightbox'
import UploadModal from '../components/gallery/UploadModal'
import { api, avatarUrl, isVideoUrl, CATEGORIES } from '../lib/api'

// ── Carousel ──────────────────────────────────────────────────────
const SLIDES = [
  { label: 'Mundo',      desc: 'Territorios vastos, ruinas y misterios sin nombre',    img: '/sources/Carrusel/ciudad.png',   stripeA: '#0a0f18', stripeB: '#4a7ab5' },
  { label: 'Razas',      desc: 'Cada pueblo, una historia forjada en cicatrices',       img: null,                             stripeA: '#120a0a', stripeB: '#b01010' },
  { label: 'Clases',     desc: 'Caminos de poder marcados por la sangre',               img: null,                             stripeA: '#110a14', stripeB: '#7c4ba8' },
  { label: 'Profesiones',desc: 'Los que forjan, curan y sostienen el mundo',            img: '/sources/Carrusel/Artifice.png', stripeA: '#0f0e08', stripeB: '#a87c2a' },
  { label: 'Gremios',    desc: 'Alianzas que mueven los hilos del poder',               img: null,                             stripeA: '#0d1209', stripeB: '#4a8c3f' },
  { label: 'Eventos',    desc: 'Momentos que cambiaron el curso de la historia',        img: null,                             stripeA: '#140a0a', stripeB: '#8c2020' },
]

function GaleriaCarousel() {
  const [idx, setIdx]     = useState(0)
  const [anim, setAnim]   = useState(true)
  const timerRef          = useRef(null)

  function goTo(n) {
    setAnim(true)
    setIdx((n + SLIDES.length) % SLIDES.length)
  }

  useEffect(() => {
    timerRef.current = setInterval(() => goTo(idx + 1), 4500)
    return () => clearInterval(timerRef.current)
  }, [idx])

  return (
    <div className="galeria-carousel-wrap">
      <div
        className="galeria-carousel"
        style={{ transform: `translateX(-${idx * 100}%)`, transition: anim ? 'transform 0.55s cubic-bezier(0.4,0,0.2,1)' : 'none' }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="galeria-slide"
            style={{ '--stripe-a': s.stripeA, '--stripe-b': s.stripeB, width: '100%' }}
          >
            <div
              className="galeria-slide-ph"
              style={s.img ? { backgroundImage: `url('${s.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
            />
            <div className="galeria-slide-caption">
              <span className="galeria-slide-label">{s.label}</span>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="galeria-carousel-prev" onClick={() => goTo(idx - 1)}>
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button className="galeria-carousel-next" onClick={() => goTo(idx + 1)}>
        <i className="fa-solid fa-chevron-right" />
      </button>

      <div className="galeria-carousel-dots">
        {SLIDES.map((_, i) => (
          <div key={i} className={`galeria-dot${i === idx ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  )
}

const PRANK_MSGS = [
  '¡Las sombras de Primus te han visto!',
  '¡Segundo intento fallido! El Consejo de las Cicatrices ha registrado tu osadía.',
  '¡INTRUSO DETECTADO! Tu alma ha sido catalogada en los archivos del Cuervo.',
  '¿Sigues intentándolo? Los espías del Cuervo ya están en camino...',
  'En serio. Para. Ya saben dónde vives.',
]

// ── Admin secret login modal ──────────────────────────────────────
function AdminLoginModal({ onClose, onSuccess }) {
  const [pw, setPw]         = useState('')
  const [err, setErr]       = useState('')
  const [busy, setBusy]     = useState(false)
  const [shake, setShake]   = useState(false)
  const [prank, setPrank]   = useState(false)
  const failCount           = useRef(0)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose])

  async function submit(e) {
    e.preventDefault()
    setBusy(true); setErr('')
    try {
      const { user } = await api.adminLogin(pw)
      onSuccess(user)
    } catch (error) {
      failCount.current += 1
      const msg = PRANK_MSGS[Math.min(failCount.current - 1, PRANK_MSGS.length - 1)]
      setErr(failCount.current === 1 ? error.message : msg)
      setShake(true)
      setTimeout(() => setShake(false), 600)
      if (failCount.current >= 2) setPrank(true)
      setPw('')
    } finally {
      setBusy(false)
    }
  }

  return createPortal(
    <div className="upload-overlay" onClick={onClose}>
      <div className={`upload-modal admin-login-modal${shake ? ' modal-shake' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="upload-close" onClick={onClose}>✕</button>

        {prank ? (
          <div className="admin-prank">
            <div className="admin-prank-eye">👁️</div>
            <h3 className="admin-prank-title">⚠ ACCESO DENEGADO ⚠</h3>
            <p className="admin-prank-msg">{err}</p>
            <p className="admin-prank-sub">Tus movimientos han sido registrados en los archivos del Cuervo.</p>
            <input
              className="upload-input"
              type="password"
              placeholder="...¿de verdad lo intentas otra vez?"
              value={pw}
              onChange={e => setPw(e.target.value)}
              style={{ marginTop: '1rem', opacity: 0.6 }}
            />
            <button className="upload-submit" onClick={submit} disabled={busy || !pw} style={{ marginTop: '0.5rem', background: '#4a0000' }}>
              {busy ? 'Verificando...' : 'Tentar al destino otra vez'}
            </button>
          </div>
        ) : (
          <>
            <h2 className="upload-title">Acceso Administrador</h2>
            <form onSubmit={submit}>
              <input
                className="upload-input"
                type="password"
                placeholder="Contraseña secreta"
                value={pw}
                onChange={e => setPw(e.target.value)}
                autoFocus
              />
              {err && <p className="upload-error">{err}</p>}
              <button className="upload-submit" type="submit" disabled={busy || !pw}>
                {busy ? 'Verificando...' : 'Entrar'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}

// ── User chip (logged-in state) ───────────────────────────────────
function UserChip({ user, av, onLogout, onUpload, adminSession }) {
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
          {adminSession && <span className="galeria-chip-admin-dot" title="Administrador" />}
        </div>
        <div className="galeria-chip-info">
          <span className="galeria-chip-name">{user.username}</span>
          {adminSession && <span className="galeria-chip-role">Administrador</span>}
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

// ── Photo / Video card ────────────────────────────────────────────
function PhotoCard({ photo, user, onClick, onDelete }) {
  const canDelete = user && (user.is_admin || user.id === photo.uploader_id)
  const isVid = isVideoUrl(photo.url)

  async function handleDelete(e) {
    e.stopPropagation()
    if (!confirm('Borrar este archivo?')) return
    try {
      await api.deletePhoto(photo.id)
      onDelete(photo.id)
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="galeria-card" onClick={onClick}>
      {isVid
        ? <video className="galeria-card-img" src={photo.url} muted preload="metadata" />
        : <img   className="galeria-card-img" src={photo.url} alt={photo.title || 'Foto'} loading="lazy" />
      }
      {isVid && (
        <div className="galeria-card-video-badge">
          <i className="fa-solid fa-circle-play" />
        </div>
      )}
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
  const [adminSession, setAdminSession] = useState(false)
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
    setAdminSession(false)
  }

  const av = user ? avatarUrl(user) : null

  return (
    <div className="page active">
      <GaleriaCarousel />

      <div className="detail-body">
        <div className="galeria-header-row">
          <h2 className="section-title" onClick={handleTitleClick} style={{ cursor: 'default', userSelect: 'none' }}>Galería</h2>
          <div className="section-underline" />
        </div>

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
              adminSession={adminSession}
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
          onSuccess={u => { setUser(u); setAdminSession(true); setShowAdmin(false) }}
        />
      )}
    </div>
  )
}
