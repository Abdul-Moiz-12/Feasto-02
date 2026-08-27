export function SectionHeading({ title, action, children }) {
  return (
    <div className="section-heading split-heading">
      <h2>{title}</h2>
      {action || children}
    </div>
  )
}
