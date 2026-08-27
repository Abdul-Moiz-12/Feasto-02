export function InfoCard({ title, children, className = '' }) {
  return (
    <div className={`info-card ${className}`.trim()}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  )
}
