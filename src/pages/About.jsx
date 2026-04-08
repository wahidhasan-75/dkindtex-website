import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FadeUp, FadeIn, StaggerChildren, staggerItem } from '../components/Animations'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'

const values = [
  { title: 'Integrity', desc: 'We operate with complete transparency in every buyer relationship, factory engagement, and business transaction.' },
  { title: 'Precision', desc: 'From sample development to final shipment, we execute with meticulous attention to detail and process discipline.' },
  { title: 'Partnership', desc: 'We see every client as a long-term partner. Your growth and success is the measure of our own performance.' },
  { title: 'Reliability', desc: 'Consistent communication, realistic timelines, and proactive problem-solving define how we work every day.' },
]

const team = [
  { role: 'Proprietor', name: 'DKIND TEX', desc: 'Leading the company\'s strategic vision, buyer relationships, and supplier network with over a decade of textile industry expertise.' },
  { role: 'Merchandising', name: 'Operations Team', desc: 'Experienced merchandisers who manage order flow, factory coordination, and buyer communication from placement to delivery.' },
  { role: 'Quality Control', name: 'QC Division', desc: 'Dedicated inspection professionals ensuring every production stage meets international garment quality standards.' },
]

export default function About() {
  return (
    <main>
      <PageHero
        tag="About Us"
        title="Built on Trust, Driven by Excellence"
        subtitle="A Dhaka-based textile buying house with global ambitions and a commitment to professional, transparent sourcing."
        image="https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=1400&q=80"
      />

      {/* ─── INTRO ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                Who We Are
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 leading-tight">
                A Professional Buying House at the Heart of Bangladesh's Apparel Industry
              </h2>
              <p className="mt-6 text-slate-500 leading-relaxed">
                DKIND TEX was established with a singular purpose: to provide international fashion brands and retailers with a knowledgeable, dependable, and professionally managed gateway into Bangladesh's world-class garment manufacturing ecosystem.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Operating from Dhaka — the center of Bangladesh's export-ready apparel industry — we leverage deep manufacturer relationships, robust operational processes, and an experienced team to deliver sourcing solutions that consistently meet and exceed buyer expectations.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                Whether you are a growing fashion label placing your first international order or an established retailer diversifying your supply chain, DKIND TEX provides the structure, professionalism, and accountability you need.
              </p>
            </FadeUp>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80"
                    alt="DKIND TEX operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-navy-800 text-white rounded-xl p-6 shadow-xl w-52">
                  <div className="font-display text-3xl font-semibold">10+</div>
                  <div className="text-white/60 text-sm mt-1">Years in the textile industry</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section className="section-padding bg-navy-950">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                <div className="w-10 h-px bg-navy-400 mb-6" />
                <h3 className="font-display text-2xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-white/55 leading-relaxed">
                  To provide international buyers with a trusted, professional, and operationally strong sourcing partner in Bangladesh — reducing complexity, minimizing risk, and delivering consistent quality across every category of apparel.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
                <div className="w-10 h-px bg-navy-400 mb-6" />
                <h3 className="font-display text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-white/55 leading-relaxed">
                  To be recognized among Bangladesh's most respected textile buying houses — known for integrity, competence, and the ability to consistently bridge the gap between global buyer ambitions and local manufacturing excellence.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                Our Values
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900">
                The Principles That Guide Everything We Do
              </h2>
            </FadeUp>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="bg-white rounded-xl p-7 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="font-display text-4xl text-navy-100 font-bold mb-4">0{i + 1}</div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                Our People
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900">
                Experience You Can Rely On
              </h2>
            </FadeUp>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(t => (
              <motion.div
                key={t.role}
                variants={staggerItem}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-navy-100 mx-auto mb-5 flex items-center justify-center">
                  <span className="font-display text-navy-600 text-2xl font-semibold">{t.name[0]}</span>
                </div>
                <div className="text-xs tracking-widest uppercase text-navy-500 font-medium mb-1">{t.role}</div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">{t.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-navy-800">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              Let's Build a Partnership That Lasts
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              Reach out to discuss your sourcing needs. We're ready to listen, advise, and deliver.
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
