export default function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="container page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </section>
  )
}
