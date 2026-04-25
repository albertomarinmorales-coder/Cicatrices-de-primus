import { ROSTER_IMGS } from '../data/rosterImgs'

export default function RosterGridHeader({ title, subtitle }) {
  return (
    <div className="roster-grid-header">
      {ROSTER_IMGS.map((r, i) => (
        r.split ? (
          <div key="roster-velums" className="roster-grid-item roster-grid-item--velums-split">
            <img
              className="roster-velums-half"
              src={r.left}
              alt=""
              fetchPriority="low"
              decoding="async"
            />
            <img
              className="roster-velums-half"
              src={r.right}
              alt=""
              fetchPriority="low"
              decoding="async"
            />
          </div>
        ) : (
          <div key={r.alt} className="roster-grid-item">
            <img
              src={r.src}
              alt={r.alt}
              fetchPriority={i < 4 ? 'high' : 'low'}
              decoding="async"
            />
          </div>
        )
      ))}
      <div className="roster-grid-overlay">
        <div className="page-header-content">
          <h1>{title}</h1>
          {subtitle != null && subtitle !== '' && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
