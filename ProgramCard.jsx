import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProgramCard({ item, index }) {
  return (
    <article className="program-card">
      <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
      <p className="eyebrow">{item.eyebrow}</p>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <ul>{item.bullets.map(b => <li key={b}>{b}</li>)}</ul>
      <Link to="/get-involved">Support this work <ArrowUpRight size={16}/></Link>
    </article>
  )
}
