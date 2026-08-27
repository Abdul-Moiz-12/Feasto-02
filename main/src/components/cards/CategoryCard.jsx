export function CategoryCard({ label, onClick }) {
  return (
    <button type="button" className="category-card" onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}
