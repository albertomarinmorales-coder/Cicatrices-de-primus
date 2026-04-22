import { useNavigate } from 'react-router-dom'
import { clasesData } from '../data/clases'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ClasePage({ slug }) {
  const navigate = useNavigate()
  const data = clasesData[slug]
  useScrollReveal(slug)

  if (!data) return null

  return (
    <div className="page active">
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ backgroundImage: `url('${data.avatarImg}')` }} />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate('/clases')}>
            Clases <span>/ {data.name}</span>
          </div>
          <h1>{data.name}</h1>
          {data.tag && <div className="detail-tag-modern">{data.tag}</div>}
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate('/clases')}>&#8592; Volver a Clases</span>

        <div
          className="detail-text"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </div>

      <Footer />
    </div>
  )
}
