import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ClipboardCheck, Eye, RefreshCw, Handshake, BarChart3 } from 'lucide-react'
import { FadeUp, FadeIn, StaggerChildren, staggerItem } from '../components/Animations'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'

const pillars = [
  {
    icon: ClipboardCheck,
    title: 'Systematic Inspection Framework',
    desc: 'Our quality process operates at three critical stages: pre-production review, inline inspection during bulk production, and final pre-shipment audit. Each stage has defined checkpoints aligned to buyer specifications.',
  },
  {
    icon: Eye,
    title: 'In-Line Production Monitoring',
    desc: 'DKIND TEX team members conduct regular in-factory visits throughout production, monitoring workmanship, construction methods, and output consistency to catch and resolve issues before they compound.',
  },
  {
    icon: BarChart3,
    title: 'AQL-Based Measurement Standards',
    desc: 'Our pre-shipment inspections are conducted using internationally recognized AQL (Acceptable Quality Level) sampling methodologies, ensuring objective, measurable quality evaluation on every shipment.',
  },
  {
    icon: RefreshCw,
    title: 'Continuous Process Improvement',
    desc: 'Inspection findings are systematically documented and fed back into factory production briefings. We track recurring issues and work with manufacturer partners to implement lasting corrective actions.',
  },
  {
    icon: Handshake,
    title: 'Responsible Sourcing Approach',
    desc: 'We are committed to working with manufacturing partners who operate responsibly — maintaining fair working conditions, complying with local labor standards, and operating facilities that meet basic environmental practices.',
  },
  {
    icon: CheckCircle2,
    title: 'Buyer-Aligned Documentation',
    desc: 'All quality reports, inspection records, and compliance documentation are prepared in formats aligned to buyer requirements and are available to buyers at each milestone for full visibility.',
  },
]

const process = [
  { step: '01', title: 'Pre-Production Review', desc: 'Confirming materials, trims, approved samples, and production plan before bulk cutting begins.' },
  { step: '02', title: 'Inline Inspection', desc: 'Factory floor checks during production to identify workmanship issues and ensure consistent output.' },
  { step: '03', title: 'Mid-Production Audit', desc: 'A deeper audit at the midpoint of production to assess full-line consistency and packaging compliance.' },
  { step: '04', title: 'Pre-Shipment Final Inspection', desc: 'AQL-based sampling of finished goods before shipment approval is issued.' },
  { step: '05', title: 'Defect Resolution', desc: 'Any identified issues are logged, escalated to the factory, and resolved before shipment clearance.' },
  { step: '06', title: 'Shipment Clearance', desc: 'Final export documentation reviewed and shipment confirmed only after all quality criteria are satisfied.' },
]

export default function Quality() {
  return (
    <main>
      <PageHero
        tag="Quality & Compliance"
        title="Where Standards Meet Execution"
        subtitle="Quality at DKIND TEX is embedded in every stage of the sourcing and production process — not treated as an afterthought."
        image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1400&q=80"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 leading-tight">
                Quality Is Not a Final Step — It Is a Process
              </h2>
              <p className="mt-6 text-slate-500 leading-relaxed">
                At DKIND TEX, we believe that consistent, reliable quality does not emerge from a single inspection — it is the result of systematic oversight, proactive communication, and a genuine commitment to buyer standards at every production stage.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Our quality assurance approach is structured, transparent, and buyer-aligned. We provide regular reporting at each milestone, and every inspection finding is documented and actioned — not filed away. This approach has allowed us to maintain strong relationships with buyers who demand predictable, high-standard results.
              </p>
            </FadeUp>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=700&q=80"
                  alt="Quality control"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeader
            tag="Our Approach"
            title="Six Pillars of Our Quality Practice"
            subtitle="Each element of our quality framework is designed to protect buyer investment and ensure delivery of exactly what was approved."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {pillars.map(p => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="bg-white rounded-xl p-7 border border-slate-100 hover:shadow-md hover:border-navy-100 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center mb-5">
                  <p.icon size={20} className="text-navy-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <SectionHeader
            tag="Quality Process"
            title="From Order to Shipment Clearance"
            subtitle="A structured six-stage quality process that ensures every order meets buyer standards before leaving Bangladesh."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.08}>
                <div className="border border-white/10 rounded-xl p-7 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                  <div className="font-display text-4xl font-bold text-navy-700 mb-4">{p.step}</div>
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{p.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="w-12 h-px bg-navy-200 mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-3xl text-navy-900 leading-relaxed font-medium">
              "We do not ship a single order until we are satisfied it meets the standards our buyer approved. That commitment is non-negotiable."
            </blockquote>
            <div className="mt-6 text-slate-400 text-sm">— DKIND TEX, Proprietor</div>
            <div className="w-12 h-px bg-navy-200 mx-auto mt-8" />
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-800">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              Speak With Our Quality Team
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              We're happy to walk through our inspection process, share sample reports, and discuss how we align with your specific quality requirements.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-800 font-medium rounded hover:bg-slate-100 transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
