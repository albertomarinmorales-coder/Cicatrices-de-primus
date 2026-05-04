import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { claseFichas, clasesData } from '../data/clases'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FICHA_FIELDS = [
  ['Descripción', 'descripcion'],
  ['Función', 'funcion'],
  ['Modo de combate', 'modoCombate'],
  ['Origen', 'origen'],
  ['Mentalidad', 'mentalidad'],
  ['Objetivo', 'objetivo'],
  ['Rol de combate', 'rolCombate'],
]

const ROMAN_NUMERALS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

function splitClaseSections(contentHtml) {
  if (typeof document === 'undefined') return [contentHtml]

  const template = document.createElement('template')
  template.innerHTML = contentHtml
  const rows = Array.from(template.content.children).filter((child) =>
    child.classList.contains('clase-feature-row')
  )

  return rows.length > 0 ? rows.map((row) => row.outerHTML) : [contentHtml]
}

function ClaseFicha({ ficha }) {
  if (!ficha) return null

  const fichaBlocks = FICHA_FIELDS.filter(([, key]) => key !== 'rolCombate')

  return (
    <section
      className="gremio-aventuras-card clase-ficha-card"
      aria-labelledby="clase-ficha-title"
      style={{ maxWidth: '960px', marginBottom: '3.5rem' }}
    >
      <div className="gremio-aventuras-card__head">
        <i className="ra ra-scroll-unfurled" aria-hidden />
        <span id="clase-ficha-title">Ficha de clase</span>
      </div>
      <div className="gremio-aventuras-card__inner">
        <div className="clase-ficha-hero">
          <span>Guía rápida de interpretación</span>
          <strong>{ficha.rolCombate}</strong>
        </div>

        <div className="clase-ficha-grid">
          {fichaBlocks.map(([label, key]) => (
            <article key={key} className={`clase-ficha-field${key === 'descripcion' ? ' clase-ficha-field--wide' : ''}`}>
              <h3>{label}</h3>
              <p>{ficha[key]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HabilidadesProximamente() {
  return (
    <section
      className="gremio-aventuras-card"
      aria-labelledby="clase-habilidades-title"
      style={{ maxWidth: '960px', marginTop: 0 }}
    >
      <div className="gremio-aventuras-card__head">
        <i className="ra ra-book" aria-hidden />
        <span id="clase-habilidades-title">Tabla de habilidades</span>
      </div>
      <div className="gremio-aventuras-card__inner">
        <div className="detail-text" style={{ lineHeight: 1.65 }}>
          <p style={{ marginBottom: '1rem' }}>
            Las habilidades adquiribles se publicarán próximamente.
          </p>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.78rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            <thead>
              <tr>
                <th style={{ border: '1px solid var(--border)', color: 'var(--gold)', padding: '0.85rem', textAlign: 'left' }}>
                  Habilidad
                </th>
                <th style={{ border: '1px solid var(--border)', color: 'var(--gold)', padding: '0.85rem', textAlign: 'left' }}>
                  Efecto
                </th>
              </tr>
            </thead>
            <tbody />
          </table>
        </div>
      </div>
    </section>
  )
}

function ClaseTextTabs({ chapterTitle, contentHtml }) {
  const [activeSection, setActiveSection] = useState(0)
  const sections = useMemo(() => splitClaseSections(contentHtml), [contentHtml])
  const currentSection = sections[activeSection] || sections[0]

  useEffect(() => {
    setActiveSection(0)
  }, [contentHtml])

  return (
    <section className="clase-detail-panel clase-text-panel">
      <div className="gremio-aventuras-card__head">
        <i className="ra ra-scroll-unfurled" aria-hidden />
        <span>Textos de clase</span>
      </div>

      {chapterTitle && (
        <header className="velums-chapter-head">
          <span className="velums-chapter-ornament" aria-hidden>✦</span>
          <h2 className="velums-elegant-title">{chapterTitle}</h2>
          <span className="velums-chapter-ornament" aria-hidden>✦</span>
        </header>
      )}

      {sections.length > 1 && (
        <div className="tier-tabs clase-section-tabs" role="tablist" aria-label="Secciones de la clase">
          {sections.map((_, index) => (
            <button
              key={ROMAN_NUMERALS[index] || index}
              type="button"
              className={`tier-tab${activeSection === index ? ' active' : ''}`}
              role="tab"
              aria-selected={activeSection === index}
              onClick={() => setActiveSection(index)}
            >
              <span className="tier-num">{ROMAN_NUMERALS[index] || index + 1}</span>
            </button>
          ))}
        </div>
      )}

      <div
        className="detail-text clase-codex clase-codex--tabbed"
        style={{ counterReset: `clase-sec ${activeSection}` }}
        dangerouslySetInnerHTML={{ __html: currentSection }}
      />
    </section>
  )
}

export default function ClasePage({ slug }) {
  const navigate = useNavigate()
  const data = clasesData[slug]
  const ficha = claseFichas[slug]
  useScrollReveal(slug)

  if (!data) return null

  const backTo = '/clases'
  const backLabel = 'Volver a Clases'
  const breadcrumbRoot = 'Clases'

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

        <ClaseFicha ficha={ficha} />

        <ClaseTextTabs chapterTitle={data.chapterTitle} contentHtml={data.contentHtml} />

        <HabilidadesProximamente />
      </div>

      <Footer />
    </div>
  )
}
