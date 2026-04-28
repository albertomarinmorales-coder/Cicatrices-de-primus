import { useState, useEffect, useRef } from 'react'

const STORAGE_KEY = 'musicPromptData'
const EXPIRY_DAYS = 7

function hasValidDecision() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return false
  try {
    const { expiry } = JSON.parse(raw)
    if (Date.now() > expiry) { localStorage.removeItem(STORAGE_KEY); return false }
    return true
  } catch { return false }
}

function saveDecision() {
  const expiry = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ answered: true, expiry }))
}

export default function WelcomeModal() {
  const [visible, setVisible] = useState(false)
  const [show, setShow] = useState(false)
  const audioRef = useRef(null)
  const acceptButtonRef = useRef(null)

  useEffect(() => {
    if (!hasValidDecision()) {
      setVisible(true)
      document.body.classList.add('modal-active')
      setTimeout(() => setShow(true), 50)
    }
    audioRef.current = document.getElementById('bgMusic')
  }, [])

  useEffect(() => {
    if (!visible) return undefined

    const previousActiveElement = document.activeElement
    const focusTimer = setTimeout(() => acceptButtonRef.current?.focus(), 80)

    function onKeyDown(e) {
      if (e.key === 'Escape') close()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKeyDown)
      previousActiveElement?.focus?.()
    }
  }, [visible])

  function close() {
    setShow(false)
    document.body.classList.remove('modal-active')
    setTimeout(() => setVisible(false), 500)
    saveDecision()
  }

  function accept() {
    const audio = document.getElementById('bgMusic')
    if (audio) audio.play().catch(() => {})
    close()
  }

  if (!visible) return null

  return (
    <div
      id="welcomeModal"
      className={show ? 'show' : ''}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcomeModalTitle"
    >
      <div className="welcome-modal-box">
        <h2 id="welcomeModalTitle">Bienvenido a Primus</h2>
        <p>
          Este servidor tiene <span>música de ambiente</span>. ¿Deseas activarla para
          sumergirte en el mundo de Primus?
        </p>
        <p className="welcome-modal-note">Puedes cambiarla en cualquier momento con el botón de música.</p>
        <div className="welcome-modal-buttons">
          <button ref={acceptButtonRef} onClick={accept}>Activar música</button>
          <button onClick={close}>Continuar sin música</button>
        </div>
      </div>
    </div>
  )
}
