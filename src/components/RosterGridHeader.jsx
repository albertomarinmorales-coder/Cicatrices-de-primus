export default function RosterGridHeader({ title, subtitle }) {
  return (
    <div className="roster-grid-header">
      <div className="roster-grid-header-pattern" aria-hidden="true" />
      <div className="roster-grid-overlay">
        <div className="page-header-content">
          <h1>{title}</h1>
          {subtitle != null && subtitle !== '' && <p>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
