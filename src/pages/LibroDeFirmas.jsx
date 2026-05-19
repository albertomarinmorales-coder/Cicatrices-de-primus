import { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import DiscordIcon from '../components/DiscordIcon'
import { api, avatarUrl } from '../lib/api'

const BASE = import.meta.env.VITE_API_URL || ''
const MAX_CHARS = 500
const ENTRIES_PER_PAGE = 12

/* ── Helpers ───────────────────────────────────────────────────── */
function timeAgo(dateStr) {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diff = Math.max(0, now - then)
  const s = Math.floor(diff / 1000)
  if (s < 60)   return 'hace un momento'
  const m = Math.floor(s / 60)
  if (m < 60)   return `hace ${m} min`
  const h = Math.floor(m / 60)
  if (h < 24)   return `hace ${h}h`
  const d = Math.floor(h / 24)
  if (d < 30)   return `hace ${d}d`
  const mo = Math.floor(d / 30)
  if (mo < 12)  return `hace ${mo} mes${mo > 1 ? 'es' : ''}`
  return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
}

function getEntryAvatar(entry) {
  // Prefer server-computed URL (resolves guild avatar correctly)
  if (entry.avatar_url) return entry.avatar_url
  if (entry.avatar) {
    return `https://cdn.discordapp.com/avatars/${entry.user_id}/${entry.avatar}.png?size=64`
  }
  try {
    return `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(entry.user_id) % 5n)}.png`
  } catch {
    return null
  }
}

/* ── Confirm delete modal ──────────────────────────────────────── */
function ConfirmModal({ message, onConfirm, onCancel, busy }) {
  return createPortal(
    <div className="upload-overlay" onClick={onCancel}>
      <div className="upload-modal confirm-modal" onClick={e => e.stopPropagation()}>
        <p className="confirm-msg">{message}</p>
        <div className="confirm-btns">
          <button className="confirm-btn-cancel" onClick={onCancel} disabled={busy}>Cancelar</button>
          <button className="confirm-btn-delete" onClick={onConfirm} disabled={busy}>
            {busy ? <>Borrando… <span className="upload-spinner" aria-hidden /></> : 'Borrar'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

/* ── Single entry card ─────────────────────────────────────────── */
function EntryCard({ entry, user, onDelete, index }) {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [deleting, setDeleting]       = useState(false)
  const canDelete = user && (user.is_admin || user.id === entry.user_id)
  const av = getEntryAvatar(entry)

  async function handleDelete() {
    setDeleting(true)
    try {
      await api.deleteGuestbook(entry.id)
      onDelete(entry.id)
    } catch (err) {
      alert(err.message)
    } finally {
      setDeleting(false)
      setConfirmOpen(false)
    }
  }

  return (
    <>
      <div
        className="guestbook-entry"
        style={{ animationDelay: `${index * 0.06}s` }}
      >
        <div className="guestbook-entry-header">
          <div className="guestbook-entry-avatar-wrap">
            {av
              ? <img className="guestbook-entry-avatar" src={av} alt={entry.username} />
              : <div className="guestbook-entry-avatar guestbook-entry-avatar--fallback">✦</div>
            }
          </div>
          <div className="guestbook-entry-meta">
            <span className="guestbook-entry-name">{entry.username}</span>
            <span className="guestbook-entry-time">{timeAgo(entry.created_at)}</span>
          </div>
          {canDelete && (
            <button
              className="guestbook-entry-delete"
              onClick={() => setConfirmOpen(true)}
              title="Borrar firma"
              aria-label="Borrar"
            >✕</button>
          )}
        </div>
        <div className="guestbook-entry-body">
          <span className="guestbook-quote-mark" aria-hidden>❝</span>
          <p className="guestbook-entry-message">{entry.message}</p>
        </div>
        <div className="guestbook-entry-decoration" aria-hidden />
      </div>

      {confirmOpen && (
        <ConfirmModal
          message="¿Borrar esta firma? Esta acción no se puede deshacer."
          onConfirm={handleDelete}
          onCancel={() => setConfirmOpen(false)}
          busy={deleting}
        />
      )}
    </>
  )
}

/* ── Main Page ─────────────────────────────────────────────────── */
export default function LibroDeFirmas() {
  const location = useLocation()
  const [user, setUser]       = useState(undefined)
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [posting, setPosting] = useState(false)
  const [postError, setPostError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const textRef = useRef(null)

  // Auth check
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
      window.history.replaceState(null, '', window.location.pathname + '#/libro-de-firmas')
    }
  }, [location])

  // Load entries
  useEffect(() => {
    setLoading(true)
    api.getGuestbook()
      .then(data => { setEntries(data); setCurrentPage(1) })
      .catch(() => setEntries([]))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = useCallback((id) => {
    setEntries(prev => prev.filter(e => e.id !== id))
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!message.trim() || posting) return
    setPosting(true)
    setPostError('')
    try {
      const newEntry = await api.postGuestbook(message.trim())
      setEntries(prev => [newEntry, ...prev])
      setMessage('')
      if (textRef.current) textRef.current.focus()
    } catch (err) {
      setPostError(err.message)
    } finally {
      setPosting(false)
    }
  }

  function discordLoginFromGuestbook() {
    window.location.href = `${BASE}/auth/discord?from=libro-de-firmas`
  }

  const av = user ? avatarUrl(user) : null
  const totalPages = Math.ceil(entries.length / ENTRIES_PER_PAGE)
  const paged = entries.slice(
    (currentPage - 1) * ENTRIES_PER_PAGE,
    currentPage * ENTRIES_PER_PAGE
  )

  return (
    <div className="page active" id="page-libro-firmas">
      {/* Hero */}
      <div className="guestbook-hero">
        <div className="guestbook-hero-bg" />
        <div className="guestbook-hero-overlay" />
        <div className="guestbook-hero-content">
          <h1 className="guestbook-hero-title">
            <span className="guestbook-hero-icon" aria-hidden>✦</span>
            Libro de Firmas
          </h1>
          <p className="guestbook-hero-sub">
            Deja tu huella en las páginas de Primus. Cada firma es un eco que perdura.
          </p>
        </div>
      </div>

      <div className="detail-body">
        {/* Write section */}
        <section className="guestbook-write-section">
          <h2 className="guestbook-write-title">Escribe tu dedicatoria</h2>
          <div className="guestbook-write-underline" />

          {user === undefined && (
            <div className="guestbook-auth-loading">
              <span className="galeria-spinner" aria-hidden /> Comprobando sesión…
            </div>
          )}

          {user === null && (
            <div className="guestbook-login-cta">
              <p className="guestbook-login-hint">
                Inicia sesión con Discord para dejar tu firma en el libro
              </p>
              <button
                type="button"
                className="equipo-discord-btn"
                onClick={discordLoginFromGuestbook}
              >
                <DiscordIcon className="equipo-discord-btn__icon" />
                Iniciar sesión
              </button>
            </div>
          )}

          {user && (
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <div className="guestbook-form-user">
                {av
                  ? <img className="guestbook-form-avatar" src={av} alt={user.username} />
                  : <div className="guestbook-form-avatar guestbook-form-avatar--fallback">✦</div>
                }
                <span className="guestbook-form-name">{user.username}</span>
              </div>
              <div className="guestbook-textarea-wrap">
                <textarea
                  ref={textRef}
                  className="guestbook-textarea"
                  placeholder="Tu mensaje, dedicatoria o recuerdo en Primus…"
                  value={message}
                  onChange={e => setMessage(e.target.value.slice(0, MAX_CHARS))}
                  rows={4}
                  maxLength={MAX_CHARS}
                />
                <span className={`guestbook-char-count${message.length >= MAX_CHARS ? ' guestbook-char-count--max' : ''}`}>
                  {message.length}/{MAX_CHARS}
                </span>
              </div>
              {postError && <p className="guestbook-error">{postError}</p>}
              <div className="guestbook-form-actions">
                <button
                  type="submit"
                  className="guestbook-submit-btn"
                  disabled={posting || !message.trim()}
                >
                  {posting
                    ? <><span className="upload-spinner" aria-hidden /> Firmando…</>
                    : <>✦ Firmar</>
                  }
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Entries */}
        <section className="guestbook-entries-section">
          <h2 className="guestbook-entries-title">
            Firmas
            {entries.length > 0 && <span className="guestbook-count">{entries.length}</span>}
          </h2>
          <div className="guestbook-write-underline" />

          {loading ? (
            <div className="guestbook-loading">
              <span className="galeria-spinner galeria-spinner--lg" aria-hidden /> Cargando firmas…
            </div>
          ) : entries.length === 0 ? (
            <div className="guestbook-empty">
              <span className="guestbook-empty-icon" aria-hidden>📜</span>
              <p>El libro aún está vacío. Sé el primero en dejar tu marca.</p>
            </div>
          ) : (
            <>
              <div className="guestbook-grid">
                {paged.map((entry, i) => (
                  <EntryCard
                    key={entry.id}
                    entry={entry}
                    user={user}
                    onDelete={handleDelete}
                    index={i}
                  />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="galeria-pagination">
                  <button
                    className="galeria-pagination-btn"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    aria-label="Página anterior"
                  >‹</button>
                  <div className="galeria-pagination-numbers">
                    {(() => {
                      const pages = []
                      let start = 1
                      if (totalPages > 3) start = Math.max(1, Math.min(currentPage, totalPages - 2))
                      const end = Math.min(start + 2, totalPages)
                      for (let p = start; p <= end; p++) {
                        pages.push(
                          <button
                            key={p}
                            className={`galeria-pagination-number${currentPage === p ? ' active' : ''}`}
                            onClick={() => setCurrentPage(p)}
                          >{p}</button>
                        )
                      }
                      return pages
                    })()}
                  </div>
                  <button
                    className="galeria-pagination-btn"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    aria-label="Página siguiente"
                  >›</button>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      <Footer />
    </div>
  )
}
