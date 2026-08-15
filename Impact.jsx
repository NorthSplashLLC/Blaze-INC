import PageHero from '../components/PageHero'
import { impactItems } from '../content'

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="OUR IMPACT APPROACH"
        title="Strong communities are built when young people have more real options."
        text="B.L.A.Z.E. focuses on the conditions that help youth succeed over time: access, trusted relationships, experience, resources, leadership and belonging."
      />

      <section className="section container">
        <div className="impact-cards">
          {impactItems.map(([title, text], i) => (
            <article key={title}>
              <span>{String(i+1).padStart(2,'0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">COMMUNITY IN ACTION</p>
              <h2>What the work looks like on the ground.</h2>
            </div>
            <p>Past B.L.A.Z.E. activity has included community events, back-to-school support, networking, resume-building, youth recruitment and participation in local celebrations. Those examples inform the kind of practical, visible community presence the organization aims to keep building.</p>
          </div>
          <div className="timeline-grid">
            {[
              ['Workshops', 'Career-readiness, resume-building and educational sessions that help students strengthen practical skills.'],
              ['Community Events', 'Local events that connect families and youth with information, resources, vendors and organizations.'],
              ['Back-to-School Support', 'School-supply and resource-focused efforts that help students begin the year with stronger support.'],
              ['Youth Leadership', 'Opportunities for teens to join, contribute ideas, build skills and take on meaningful responsibility.']
            ].map(([t, d]) => <article key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>
    </>
  )
}
