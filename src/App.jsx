import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import AudioPlayer from './components/AudioPlayer'
import WelcomeModal from './components/WelcomeModal'
import Particles from './components/Particles'
import Inicio from './pages/Inicio'
import Lore from './pages/Lore'
import Historia from './pages/Historia'
import Deidades from './pages/Deidades'
import Razas from './pages/Razas'
import RazaPage from './pages/RazaPage'
import Clases from './pages/Clases'
import ClasePage from './pages/ClasePage'
import Profesiones from './pages/Profesiones'
import OficioPage from './pages/OficioPage'
import Facciones from './pages/Facciones'
import Politica from './pages/Politica'
import Gremios from './pages/Gremios'
import GremioAventuras from './pages/GremioAventuras'
import Normativa from './pages/Normativa'
import Galeria from './pages/Galeria'
import Equipo from './pages/Equipo'
import { useTheme } from './hooks/useTheme'
import { useLocation } from 'react-router-dom'
import { useCardGlow } from './hooks/useScrollReveal'
import RouteImagePreload from './components/RouteImagePreload'

function CardGlowGlobal() {
  const { pathname } = useLocation()
  useCardGlow(pathname)
  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useTheme()

  return (
    <>
      <Particles />
      <Nav />
      <AudioPlayer />
      <WelcomeModal />
      <ScrollToTop />
      <CardGlowGlobal />
      <RouteImagePreload />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/deidades" element={<Deidades />} />
        <Route path="/razas" element={<Razas />} />
        <Route path="/raza-gen-elfos" element={<RazaPage slug="elfos" />} />
        <Route path="/raza-gen-enanos" element={<RazaPage slug="enanos" />} />
        <Route path="/raza-gen-humanos" element={<RazaPage slug="humanos" />} />
        <Route path="/raza-gen-malvakari" element={<RazaPage slug="malvakari" />} />
        <Route path="/raza-gen-mestizos" element={<RazaPage slug="mestizos" />} />
        <Route path="/raza-gen-nhek-thal" element={<RazaPage slug="nhek-thal" />} />
        <Route path="/raza-gen-ossalyth" element={<RazaPage slug="ossalyth" />} />
        <Route path="/raza-gen-rosaveld" element={<RazaPage slug="rosaveld" />} />
        <Route path="/raza-gen-shazari" element={<RazaPage slug="shazari" />} />
        <Route path="/raza-gen-thae-tir" element={<RazaPage slug="thae-tir" />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="/clase-ciudadano" element={<ClasePage slug="ciudadano" />} />
        <Route path="/clase-vhark-hul" element={<ClasePage slug="vhark-hul" />} />
        <Route path="/clase-argent-praetor" element={<ClasePage slug="argent-praetor" />} />
        <Route path="/clase-dualhar" element={<ClasePage slug="dualhar" />} />
        <Route path="/clase-luminari-vox" element={<ClasePage slug="luminari-vox" />} />
        <Route path="/clase-noc-thar" element={<ClasePage slug="noc-thar" />} />
        <Route path="/clase-stormheilm" element={<ClasePage slug="stormheilm" />} />
        <Route path="/clase-velums" element={<Navigate to="/clase-velum-caedis" replace />} />
        <Route path="/clase-velum-caedis" element={<ClasePage slug="velum-caedis" />} />
        <Route path="/clase-velum-cantoris" element={<ClasePage slug="velum-cantoris" />} />
        <Route path="/clase-zereth-mor" element={<ClasePage slug="zereth-mor" />} />
        <Route path="/clase-magharyn" element={<ClasePage slug="magharyn" />} />
        <Route path="/clase-desconocido" element={<ClasePage slug="desconocido" />} />
        <Route path="/profesiones" element={<Profesiones />} />
        <Route path="/oficio-gen-alquimista" element={<OficioPage slug="alquimista" />} />
        <Route path="/oficio-gen-artifices-del-velo-y-del-brillo" element={<OficioPage slug="artifices-del-velo-y-del-brillo" />} />
        <Route path="/oficio-gen-cazador" element={<OficioPage slug="cazador" />} />
        <Route path="/oficio-gen-forjador" element={<OficioPage slug="forjador" />} />
        <Route path="/oficio-gen-galeno" element={<OficioPage slug="galeno" />} />
        <Route path="/oficio-gen-granjero" element={<OficioPage slug="granjero" />} />
        <Route path="/oficio-gen-guardia" element={<OficioPage slug="guardia" />} />
        <Route path="/oficio-gen-minero" element={<OficioPage slug="minero" />} />
        <Route path="/oficio-gen-seeker" element={<OficioPage slug="seeker" />} />
        <Route path="/oficio-gen-tabernero" element={<OficioPage slug="tabernero" />} />
        <Route path="/mundo" element={<Facciones />} />
        <Route path="/facciones" element={<Navigate to="/mundo" replace />} />
        <Route path="/politica" element={<Politica />} />
        <Route path="/gremios" element={<Gremios />} />
        <Route path="/gremio-aventuras" element={<GremioAventuras />} />
        <Route path="/sistema" element={<Navigate to="/normativa" replace />} />
        <Route path="/normativa" element={<Normativa />} />
        <Route path="/norm-tutorial" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-general" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-concepto" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-ic" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-construccion" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-heridas" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-combate" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-esclavitud" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-robo" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-mazmorra" element={<Navigate to="/normativa" replace />} />
        <Route path="/norm-housing" element={<Navigate to="/normativa" replace />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
