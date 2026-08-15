import PageHero from '../components/PageHero'
import { Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Connect with B.L.A.Z.E."
        text="Reach out about youth membership, partnerships, mentorship, internships, community resources, events or general questions."
      />
      <section className="section container contact-grid">
        <div className="contact-card">
          <Mail size={26}/>
          <p className="eyebrow">EMAIL</p>
          <h3>blazefoundation.4success@gmail.com</h3>
          <a href="mailto:blazefoundation.4success@gmail.com">Send an email <ArrowUpRight size={16}/></a>
        </div>
        <div className="contact-card">
          <Instagram size={26}/>
          <p className="eyebrow">INSTAGRAM</p>
          <h3>@b.l.a.z.e_foundation</h3>
          <a href="https://www.instagram.com/b.l.a.z.e_foundation/" target="_blank" rel="noreferrer">Open Instagram <ArrowUpRight size={16}/></a>
        </div>
        <div className="contact-card">
          <MapPin size={26}/>
          <p className="eyebrow">COMMUNITY</p>
          <h3>Akron & Summit County, Ohio</h3>
          <p>Serving youth and communities across Northeast Ohio.</p>
        </div>
      </section>
    </>
  )
}
