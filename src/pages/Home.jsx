import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Flame } from 'lucide-react'
import ProgramCard from '../components/ProgramCard'
import { programs, impactItems } from '../content'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">BLACK LEADERS ADVOCATING FOR ZEALOUS EQUITY</p>
            <div className="slogan-pill"><Flame size={16}/> For The youth By the Youth.</div>
            <h1>Empowering youth to <span>lead boldly</span> and build what comes next.</h1>
            <p className="lead">
              B.L.A.Z.E. Incorporated LLC connects young people and underserved communities across Northeast Ohio with education, mentorship, career exposure, essential resources and opportunities to lead.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/get-involved">Get involved <ArrowRight size={18}/></Link>
              <Link className="button button-ghost" to="/programs">Explore programs</Link>
            </div>
            <div className="hero-trust">
              <span><Sparkles size={16}/> For The youth By the Youth.</span>
              <span>Akron • Summit County • Northeast Ohio</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-logo-panel">
              <img src="/assets/blaze-logo.jpeg" alt="B.L.A.Z.E. logo" />
            </div>
            <div className="hero-stat stat-one"><strong>5</strong><span>core areas of support</span></div>
            <div className="hero-stat stat-two"><strong>13–19</strong><span>youth leadership focus</span></div>
          </div>
        </div>
      </section>

      <section className="mission-strip">
        <div className="container mission-strip-inner">
          <span>Scholarships</span><i/>
          <span>Mentorship</span><i/>
          <span>Internships</span><i/>
          <span>Resources</span><i/>
          <span>Advocacy</span>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Opportunity should not depend on your starting point.</h2>
          </div>
          <p>Our work helps students move from potential to practical opportunity through educational support, trusted relationships, real-world experience and community resources.</p>
        </div>
        <div className="program-grid">
          {programs.map((p, i) => <ProgramCard key={p.key} item={p} index={i}/>)}
        </div>
      </section>

      <section className="section dark-band parallax-band parallax-mission">
        <div className="container impact-layout">
          <div className="impact-intro">
            <p className="eyebrow">WHY B.L.A.Z.E.</p>
            <h2>Built around the whole student — not just one moment.</h2>
            <p>Academic success, career readiness, confidence, stability and community all connect. B.L.A.Z.E. brings those pieces together so young people can see and reach more possibilities.</p>
            <Link className="text-link" to="/impact">See our impact approach <ArrowRight size={17}/></Link>
          </div>
          <div className="impact-list">
            {impactItems.map(([title, text], i) => (
              <article key={title}>
                <span>{String(i+1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section parallax-break parallax-programs">
        <div className="container">
          <div className="slogan-feature">
            <p className="eyebrow">OUR SLOGAN</p>
            <h2>For The Youth<br/><span>By The Youth.</span></h2>
            <p>B.L.A.Z.E. is built around youth voice, youth leadership and the belief that young people should help shape the programs and opportunities created for them.</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">JOIN THE MOVEMENT</p>
            <h2>Young leaders belong at the table.</h2>
            <p>Whether you are a student, parent, mentor, school, employer, community partner or supporter, there is a way to help build the next opportunity.</p>
          </div>
          <Link className="button button-light" to="/get-involved">Find your role <ArrowRight size={18}/></Link>
        </div>
      </section>
    </>
  )
}
