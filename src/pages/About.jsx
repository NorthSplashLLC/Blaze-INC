import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT B.L.A.Z.E."
        title="A youth-centered organization built to open doors."
        text="B.L.A.Z.E. stands for Black Leaders Advocating for Zealous Equity. Our purpose is to help young people and underserved communities access the relationships, resources and opportunities that make long-term success possible."
      />

      <section className="section container two-col">
        <div>
          <p className="eyebrow">OUR MISSION</p>
          <h2>Education. Opportunity. Equity. Community.</h2>
        </div>
        <div className="prose">
          <p>B.L.A.Z.E. empowers youth and underserved communities in Northeast Ohio by addressing educational and social barriers through scholarships, mentorships, internships, essential resources, advocacy and education.</p>
          <p>Our work is designed to create lasting opportunity — not just one-time assistance. We focus on helping students build confidence, stronger networks, practical experience and clear next steps toward their goals.</p>
        </div>
      </section>

      <section className="section soft-band">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">OUR VALUES</p>
            <h2>The principles behind the work.</h2>
          </div>
          <div className="value-grid">
            {[
              ['Youth Voice', 'Young people deserve meaningful input in the programs, spaces and decisions that shape their future.'],
              ['Equity', 'We work to reduce barriers and expand access to education, career exposure and community support.'],
              ['Leadership', 'Leadership grows through responsibility, mentorship, service and opportunities to practice.'],
              ['Community', 'Students thrive when families, schools, employers, mentors and local organizations work together.'],
              ['Action', 'We turn support into practical next steps: resources, connections, workshops, internships and opportunities.'],
              ['Possibility', 'We want every young person we serve to see a future with more options than they had before.']
            ].map(([title, text], i) => (
              <article className="value-card" key={title}>
                <span>{String(i+1).padStart(2,'0')}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="story-panel">
          <div className="story-logo"><img src="/assets/blaze-logo.jpeg" alt="B.L.A.Z.E. logo" /></div>
          <div>
            <p className="eyebrow">ROOTED IN NORTHEAST OHIO</p>
            <h2>Local relationships. Long-term impact.</h2>
            <p>B.L.A.Z.E. has participated in community events, back-to-school initiatives, workshops and youth engagement efforts around Akron and Summit County. As the organization grows, the goal stays the same: help students access stronger pathways to education, work, leadership and community support.</p>
            <Link className="text-link" to="/get-involved">Partner with B.L.A.Z.E. <ArrowRight size={17}/></Link>
          </div>
        </div>
      </section>
    </>
  )
}
