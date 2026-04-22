import { useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { api, CATEGORIES } from '../../lib/api'

const IMAGE_MAX_MB = 10
const VIDEO_MAX_MB = 100
const IMAGE_MAX_B  = IMAGE_MAX_MB * 1024 * 1024
const VIDEO_MAX_B  = VIDEO_MAX_MB * 1024 * 1024

export default function UploadModal({ onClose, onUploaded }) {
  const [file, setFile]         = useState(null)
  const [preview, setPreview]   = useState(null)
  const [isVideo, setIsVideo]   = useState(false)
  const [title, setTitle]       = useState('')
  const [category, setCategory] = useState('general')
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const inputRef = useRef()

  const pick = useCallback((f) => {
    if (!f) return
    const fileIsVideo = f.type.startsWith('video/')
    const fileIsImage = f.type.startsWith('image/')
    if (!fileIsImage && !fileIsVideo) {
      setError('Solo se permiten imágenes (JPG, PNG, WEBP) o vídeos (MP4, WEBM)')
      inputRef.current && (inputRef.current.value = '')
      return
    }
    const maxB = fileIsVideo ? VIDEO_MAX_B : IMAGE_MAX_B
    const maxMB = fileIsVideo ? VIDEO_MAX_MB : IMAGE_MAX_MB
    if (f.size > maxB) {
      setError(`El archivo supera el máximo permitido (${maxMB} MB). Selecciona otro.`)
      inputRef.current && (inputRef.current.value = '')
      return
    }
    setFile(f)
    setIsVideo(fileIsVideo)
    setPreview(URL.createObjectURL(f))
    setError('')
  }, [])

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false)
    pick(e.dataTransfer.files[0])
  }

  async function submit(e) {
    e.preventDefault()
    if (!file)         return setError('Selecciona un archivo primero')
    if (!title.trim()) return setError('El título es obligatorio')
    setLoading(true); setError('')
    try {
      const result = await api.uploadPhoto(file, title, category)
      onUploaded(result)
      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const cats = CATEGORIES.filter(c => c.id !== 'all')

  return createPortal(
    <div className="upload-overlay" onClick={onClose}>
      <div className="upload-modal" onClick={e => e.stopPropagation()}>
        <button className="upload-close" onClick={onClose}>✕</button>
        <h2 className="upload-title">Subir Imagen o Vídeo</h2>

        <form onSubmit={submit}>
          <div
            className={`upload-drop${dragging ? ' dragging' : ''}${preview ? ' has-preview' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => !preview && inputRef.current?.click()}
          >
            {preview
              ? isVideo
                ? <video className="upload-preview" src={preview} controls muted />
                : <img className="upload-preview" src={preview} alt="preview" />
              : <>
                  <i className="fa-solid fa-cloud-arrow-up upload-drop-icon" />
                  <p>Arrastra un archivo o haz clic para seleccionar</p>
                  <span className="upload-drop-hint">
                    Imágenes (JPG, PNG, WEBP) — máx. {IMAGE_MAX_MB} MB<br />
                    Vídeos (MP4, WEBM) — máx. {VIDEO_MAX_MB} MB
                  </span>
                </>
            }
            {preview && (
              <button
                type="button"
                className="upload-change-file"
                onClick={e => { e.stopPropagation(); setFile(null); setPreview(null); setIsVideo(false); inputRef.current && (inputRef.current.value = '') }}
              >
                <i className="fa-solid fa-rotate" /> Cambiar archivo
              </button>
            )}
            <input
              ref={inputRef}
              type="file"
              accept="image/*,video/*"
              hidden
              onChange={e => pick(e.target.files[0])}
            />
          </div>

          <div className="upload-fields">
            <input
              className="upload-input"
              type="text"
              placeholder="Título (obligatorio)"
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength={120}
              required
            />

            <div className="upload-cats">
              {cats.map(c => (
                <button
                  key={c.id}
                  type="button"
                  className={`upload-cat-btn${category === c.id ? ' active' : ''}`}
                  onClick={() => setCategory(c.id)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="upload-error">{error}</p>}

          <button className="upload-submit" type="submit" disabled={loading || !file || !title.trim()}>
            {loading
              ? <><i className="fa-solid fa-spinner fa-spin" /> Subiendo…</>
              : <><i className="fa-solid fa-upload" /> Publicar</>
            }
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
