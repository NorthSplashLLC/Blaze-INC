import PageHero from '../components/PageHero'
import ProgramCard from '../components/ProgramCard'
import { programs } from '../content'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="PROGRAMS & SUPPORT"
        title="Five connected ways to help young people move forward."
        text="B.L.A.Z.E. combines education, guidance, experience, resources and youth voice so students can build momentum in more than one part of life."
      />
      <section className="section container">
        <div className="program-grid program-grid-full">
          {programs.map((p, i) => <ProgramCard key={p.key} item={p} index={i}/>)}
        </div>
      </section>

      <section className="section dark-band">
        <div className="container simple-callout">
          <p className="eyebrow">HOW SUPPORT CAN LOOK</p>
          <h2>From a first conversation to a real opportunity.</h2>
          <p>Support may include a scholarship lead, a mentor connection, a resume workshop, an internship introduction, tutoring resources, housing-resource referrals, peer support, career exposure or a place for young people to use their voice.</p>
        </div>
      </section>
    </>
  )
}
