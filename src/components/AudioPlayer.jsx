import { useRef, useState } from 'react'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function play() {
    if (!audioRef.current) return
    audioRef.current.volume = 0.4
    audioRef.current.play()
      .then(() => setPlaying(true))
      .catch(() => {})
  }

  function pause() {
    if (!audioRef.current) return
    audioRef.current.pause()
    setPlaying(false)
  }

  function toggle(e) {
    e.stopPropagation()
    playing ? pause() : play()
  }

  return (
    <>
      <audio ref={audioRef} id="bgMusic" src="/audio/bg.mp3" loop preload="none" />
      <div
        id="audioPlayer"
        className={`audio-toggle${playing ? ' playing pulse-active' : ''}`}
        onClick={toggle}
        title={playing ? 'Pausar música' : 'Reproducir música'}
        style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 3010 }}
      >
        <i className={playing ? 'fa-solid fa-pause' : 'fa-solid fa-music'} />
      </div>
    </>
  )
}
