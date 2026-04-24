import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

// Cinzel – pesos usados en el proyecto
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/cinzel/900.css'

// Cinzel Decorative
import '@fontsource/cinzel-decorative/400.css'
import '@fontsource/cinzel-decorative/700.css'

// EB Garamond
import '@fontsource/eb-garamond/400.css'
import '@fontsource/eb-garamond/400-italic.css'
import '@fontsource/eb-garamond/500.css'

// Cormorant Garamond
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/600.css'

// Prevent browser from restoring scroll position on refresh
history.scrollRestoration = 'manual'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
