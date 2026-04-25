import { useNavigate } from 'react-router-dom'
import { clasesData } from '../data/clases'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ClasePage({ slug }) {
  const navigate = useNavigate()
  const data = clasesData[slug]
  useScrollReveal(slug)

  if (!data) return null

  const isVelumSenda = slug === 'velum-caedis' || slug === 'velum-cantoris'
  const backTo = isVelumSenda ? '/clase-velums' : '/clases'
  const backLabel = isVelumSenda ? 'Volver a Velums' : 'Volver a Clases'
  const breadcrumbRoot = isVelumSenda ? 'Velums' : 'Clases'

  return (
    <div className="page active" id={`page-${slug}`}>
      <div className="detail-hero">
        <div className="detail-hero-bg clase-hero-placeholder" aria-hidden="true" />
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <div className="breadcrumb" onClick={() => navigate(backTo)}>
            {breadcrumbRoot} <span>/ {data.name}</span>
          </div>
          <h1>{data.name}</h1>
          {data.tag && <span className="detail-tag">{data.tag}</span>}
        </div>
      </div>

      <div className="detail-body">
        <span className="back-btn" onClick={() => navigate(backTo)}>&#8592; {backLabel}</span>

        {data.chapterTitle && (
          <header className="velums-chapter-head">
            <span className="velums-chapter-ornament" aria-hidden>✦</span>
            <h2 className="velums-elegant-title">{data.chapterTitle}</h2>
            <span className="velums-chapter-ornament" aria-hidden>✦</span>
          </header>
        )}

        <div
          className="detail-text clase-codex"
          dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        />
      </div>

      <Footer />
    </div>
  )
}
