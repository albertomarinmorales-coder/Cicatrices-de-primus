import { useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { api, CATEGORIES } from '../../lib/api'

const MODES = [
  { id: 'foto',  label: 'Foto',  icon: 'mirror',  accept: 'image/*', maxMB: 10,  maxB: 10  * 1024 * 1024, hint: 'JPG, PNG, WEBP' },
  { id: 'video', label: 'Vídeo', icon: 'telescope',   accept: 'video/*', maxMB: 100, maxB: 100 * 1024 * 1024, hint: 'MP4, WEBM, MOV' },
]

export default function UploadModal({ onClose, onUploaded }) {
  const [mode, setMode]         = useState('foto')
  const [file, setFile]         = useState(null)
  const [preview, setPreview]   = useState(null)
  const [title, setTitle]       = useState('')
  const [category, setCategory] = useState('general')
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const inputRef = useRef()

  const currentMode = MODES.find(m => m.id === mode)

  function switchMode(newMode) {
    if (newMode === mode) return
    setMode(newMode)
    setFile(null)
    setPreview(null)
    setError('')
    inputRef.current && (inputRef.current.value = '')
  }

  const pick = useCallback((f, modeObj) => {
    if (!f) return
    const isImage = f.type.startsWith('image/')
    const isVideo = f.type.startsWith('video/')
    if (modeObj.id === 'foto'  && !isImage) return setError('Selecciona una imagen (JPG, PNG, WEBP…)')
    if (modeObj.id === 'video' && !isVideo) return setError('Selecciona un vídeo (MP4, WEBM, MOV…)')
    if (f.size > modeObj.maxB) {
      setError(`El archivo supera el máximo de ${modeObj.maxMB} MB. Selecciona otro.`)
      inputRef.current && (inputRef.current.value = '')
      return
    }
    setFile(f)
    setPreview(URL.createObjectURL(f))
    setError('')
  }, [])

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false)
    pick(e.dataTransfer.files[0], currentMode)
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
        <h2 className="upload-title">Subir Contenido</h2>

        {/* ── Tabs ── */}
        <div className="upload-tabs">
          {MODES.map(m => (
            <button
              key={m.id}
              type="button"
              className={`upload-tab${mode === m.id ? ' active' : ''}`}
              onClick={() => switchMode(m.id)}
            >
              <i className={`ra ra-${m.icon}`} aria-hidden />
              {m.label}
            </button>
          ))}
        </div>

        <form onSubmit={submit}>
          <div
            className={`upload-drop${dragging ? ' dragging' : ''}${preview ? ' has-preview' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => { if (!preview) inputRef.current?.click() }}
          >
            {preview
              ? <div className="upload-preview-wrap">
                  {mode === 'video'
                    ? <video className="upload-preview" src={preview} controls muted />
                    : <img   className="upload-preview" src={preview} alt="preview" />
                  }
                  <button
                    type="button"
                    className="upload-preview-delete"
                    onClick={e => { e.stopPropagation(); setFile(null); setPreview(null); inputRef.current && (inputRef.current.value = '') }}
                    title="Quitar archivo"
                  >
                    <i className="ra ra-demolish" aria-hidden />
                  </button>
                </div>
              : <>
                  <i className={`ra ra-${currentMode.icon} upload-drop-icon`} aria-hidden />
                  <p>Arrastra {mode === 'foto' ? 'una imagen' : 'un vídeo'} o haz clic para seleccionar</p>
                  <span className="upload-drop-hint">
                    {currentMode.hint} — máx. {currentMode.maxMB} MB
                  </span>
                </>
            }
            <input
              ref={inputRef}
              type="file"
              accept={currentMode.accept}
              hidden
              onChange={e => pick(e.target.files[0], currentMode)}
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
              ? <><i className="ra ra-load ra-spin" aria-hidden /> Subiendo…</>
              : <><i className="ra ra-splash" aria-hidden /> Publicar</>
            }
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
