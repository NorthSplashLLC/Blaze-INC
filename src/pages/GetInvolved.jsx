import PageHero from '../components/PageHero'
import { ArrowUpRight, Users, HeartHandshake, Building2, GraduationCap } from 'lucide-react'

export default function GetInvolved() {
  const options = [
    [Users, 'Youth Members', 'For teens who want to become more active in their community, build leadership skills and gain access to resources and opportunities.'],
    [HeartHandshake, 'Mentors & Volunteers', 'Support workshops, events, student guidance, career exploration and other youth-centered programming.'],
    [Building2, 'Community & Employer Partners', 'Offer internships, career exposure, event support, sponsorship, meeting space, workshops or resource connections.'],
    [GraduationCap, 'Schools & Educators', 'Connect students to B.L.A.Z.E., collaborate on programs and help identify needs that community support can address.'],
  ]

  return (
    <>
      <PageHero
        eyebrow="GET INVOLVED"
        title="There is more than one way to help build opportunity."
        text="B.L.A.Z.E. grows through students, families, mentors, educators, employers, community partners and supporters who believe young people deserve access to more."
      />

      <section className="section container">
        <div className="involve-grid">
          {options.map(([Icon, title, text]) => (
            <article className="involve-card" key={title}>
              <Icon size={28}/>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="mailto:blazefoundation.4success@gmail.com">Start a conversation <ArrowUpRight size={16}/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="cta-panel">
          <div>
            <p className="eyebrow">READY TO CONNECT?</p>
            <h2>Tell us how you want to be involved.</h2>
            <p>Email B.L.A.Z.E. with your name, organization (if applicable), and whether you are interested in youth membership, volunteering, mentorship, partnerships, internships, sponsorship or community resources.</p>
          </div>
          <a className="button button-light" href="mailto:blazefoundation.4success@gmail.com">Email B.L.A.Z.E. <ArrowUpRight size={18}/></a>
        </div>
      </section>
    </>
  )
}
