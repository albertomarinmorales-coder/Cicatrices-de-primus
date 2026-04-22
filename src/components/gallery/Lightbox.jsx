import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { avatarUrl } from '../../lib/api'

export default function Lightbox({ photos, index, user, onClose, onDelete, onNav }) {
  const photo = photos[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft')  onNav(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  if (!photo) return null

  const av = photo.uploader ? avatarUrl({ id: photo.uploader_id, avatar: photo.uploader.avatar }) : null

  return createPortal(
    <div className="lb-overlay" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>

      {index > 0 && (
        <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); onNav(-1) }}>‹</button>
      )}
      {index < photos.length - 1 && (
        <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); onNav(1) }}>›</button>
      )}

      <div className="lb-content" onClick={e => e.stopPropagation()}>
        <img className="lb-img" src={photo.url} alt={photo.title || 'Foto'} />
        <div className="lb-info">
          {photo.title && <p className="lb-title">{photo.title}</p>}
          <div className="lb-meta">
            {av && <img className="lb-avatar" src={av} alt={photo.uploader?.username} />}
            {photo.uploader?.username && <span className="lb-username">{photo.uploader.username}</span>}
            {photo.category && <span className="lb-cat">{photo.category}</span>}
          </div>
        </div>
      </div>

      <div className="lb-counter">{index + 1} / {photos.length}</div>
    </div>,
    document.body
  )
}
