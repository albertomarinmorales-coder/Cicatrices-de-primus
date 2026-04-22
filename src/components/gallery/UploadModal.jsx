import { useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { api, CATEGORIES } from '../../lib/api'

export default function UploadModal({ onClose, onUploaded }) {
  const [file, setFile]         = useState(null)
  const [preview, setPreview]   = useState(null)
  const [title, setTitle]       = useState('')
  const [category, setCategory] = useState('general')
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')
  const inputRef = useRef()

  const pick = useCallback((f) => {
    if (!f || !f.type.startsWith('image/')) return
    setFile(f)
    setPreview(URL.createObjectURL(f))
    setError('')
  }, [])

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false)
    pick(e.dataTransfer.files[0])
  }

  async function submit(e) {
    e.preventDefault()
    if (!file) return setError('Selecciona una imagen primero')
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
        <h2 className="upload-title">Subir Imagen</h2>

        <form onSubmit={submit}>
          <div
            className={`upload-drop${dragging ? ' dragging' : ''}${preview ? ' has-preview' : ''}`}
            onDragOver={e => { e.preventDefault(); setDragging(true) }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
          >
            {preview
              ? <img className="upload-preview" src={preview} alt="preview" />
              : <>
                  <i className="fa-solid fa-cloud-arrow-up upload-drop-icon" />
                  <p>Arrastra una imagen o haz clic para seleccionar</p>
                  <span className="upload-drop-hint">JPG, PNG, WEBP — máx. 10 MB</span>
                </>
            }
            <input ref={inputRef} type="file" accept="image/*" hidden onChange={e => pick(e.target.files[0])} />
          </div>

          <div className="upload-fields">
            <input
              className="upload-input"
              type="text"
              placeholder="Título (opcional)"
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

          <button className="upload-submit" type="submit" disabled={loading || !file}>
            {loading ? <><i className="fa-solid fa-spinner fa-spin" /> Subiendo…</> : <>
              <i className="fa-solid fa-upload" /> Publicar
            </>}
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
