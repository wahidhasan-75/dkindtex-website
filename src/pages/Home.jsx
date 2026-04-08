import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Globe, Package, Shield, Zap, Users, Award } from 'lucide-react'
import { FadeUp, FadeIn, StaggerChildren, staggerItem } from '../components/Animations'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '200+', label: 'Products Sourced' },
  { value: '15+', label: 'Global Buyers' },
  { value: '100%', label: 'Compliance Focus' },
]

const services = [
  { icon: Globe, title: 'Sourcing & Supplier Coordination', desc: 'Strategic identification and management of reliable manufacturer networks across Bangladesh.' },
  { icon: Package, title: 'Product Development', desc: 'From design concept to final sample, we coordinate every stage with precision and care.' },
  { icon: Zap, title: 'Merchandising Support', desc: 'Dedicated merchandising teams ensure your order flows seamlessly from placement to delivery.' },
  { icon: Shield, title: 'Quality Assurance', desc: 'Rigorous in-line and final inspections to maintain your standards at every production stage.' },
  { icon: Users, title: 'Production Follow-Up', desc: 'Real-time factory monitoring and proactive issue resolution to keep timelines intact.' },
  { icon: Award, title: 'Export Documentation', desc: 'Complete handling of shipping documentation, compliance checks, and logistics coordination.' },
]

const categories = [
  { name: "Men's Wear", img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80', desc: 'Formal, casual, and activewear for men' },
  { name: "Women's Wear", img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Contemporary and classic fashion for women' },
  { name: "Kids' Wear", img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80', desc: 'Safe, durable, and vibrant children\'s apparel' },
  { name: 'Knitwear', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80', desc: 'Premium knitted garments and essentials' },
  { name: 'Woven Wear', img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80', desc: 'Structured and refined woven apparel' },
  { name: 'Denim & Casualwear', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80', desc: 'Durable denim and everyday casual styles' },
]

const whyUs = [
  'Direct factory relationships with Bangladesh\'s leading manufacturers',
  'Dedicated account managers fluent in international buyer standards',
  'End-to-end supply chain visibility from order to shipment',
  'Flexible MOQs suited to growing and established brands alike',
  'Strict adherence to ethical sourcing and production practices',
  'Fast, transparent communication across every time zone',
]

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" style={{ left: '20%' }} />
        <div className="absolute top-0 left-0 w-px h-full bg-white/5" style={{ left: '80%' }} />

        <div className="relative container-max px-6 md:px-12 lg:px-20 pt-28">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium">Bangladesh's Trusted Buying House</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] max-w-3xl"
          >
            Precision Sourcing.{' '}
            <span className="text-navy-300">Global Standards.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-white/60 text-lg md:text-xl leading-relaxed max-w-xl"
          >
            DKIND TEX is a premier textile buying house and export-import company connecting international buyers with Bangladesh's finest garment manufacturers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-600 hover:bg-navy-500 text-white font-medium rounded transition-all duration-200"
            >
              Start a Conversation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/25 hover:border-white/50 text-white font-medium rounded transition-all duration-200"
            >
              Explore Products
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10"
          >
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl font-semibold text-white">{s.value}</div>
                <div className="text-white/40 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── COMPANY INTRO ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                About DKIND TEX
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-tight">
                Your Reliable Partner in Textile Sourcing
              </h2>
              <p className="mt-6 text-slate-500 leading-relaxed text-base md:text-lg">
                DKIND TEX is a Dhaka-based textile buying house and export-import firm dedicated to bridging international fashion brands with Bangladesh's world-class garment manufacturing ecosystem.
              </p>
              <p className="mt-4 text-slate-500 leading-relaxed">
                We manage the full lifecycle of apparel sourcing — from initial supplier identification and product development to quality inspection, export documentation, and timely delivery — ensuring every buyer receives exactly what they envisioned.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-navy-700 font-medium hover:text-navy-500 transition-colors"
                >
                  Learn more about us
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeUp>

            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&q=80"
                    alt="Textile factory"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-lg overflow-hidden aspect-[3/4] mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80"
                    alt="Quality garments"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <SectionHeader
            tag="Our Services"
            title="Full-Spectrum Sourcing Support"
            subtitle="From supplier selection to shipment, we provide end-to-end operational support that gives international buyers complete confidence in every order."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map(s => (
              <motion.div
                key={s.title}
                variants={staggerItem}
                className="bg-white rounded-xl p-7 border border-slate-100 hover:border-navy-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-navy-100 transition-colors">
                  <s.icon size={20} className="text-navy-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy-700 text-white font-medium rounded hover:bg-navy-800 transition-colors"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            tag="Product Categories"
            title="Apparel for Every Market"
            subtitle="We source and coordinate production across a comprehensive range of garment categories for men, women, and children."
          />

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.07}>
            {categories.map(cat => (
              <motion.div
                key={cat.name}
                variants={staggerItem}
                className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  style={{ '--tw-scale-x': 1.08, '--tw-scale-y': 1.08 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-white text-lg font-semibold">{cat.name}</h3>
                  <p className="text-white/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-navy-200 text-navy-700 font-medium rounded hover:bg-navy-50 transition-colors"
            >
              View All Categories <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="section-padding bg-navy-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-white/10 text-white/70">
                Why DKIND TEX
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                A Buying House That Works Like Your Own Team
              </h2>
              <p className="mt-6 text-white/50 leading-relaxed">
                We don't just connect buyers to factories. We become an extension of your sourcing and operations team — invested in your success, your brand standards, and your delivery timelines.
              </p>
              <ul className="mt-8 space-y-4">
                {whyUs.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-navy-300 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80"
                  alt="Quality control"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── QUALITY PREVIEW ─── */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=400&q=80"
                  alt="Inspection"
                  className="rounded-xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-700"
                />
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80"
                  alt="Garments"
                  className="rounded-xl w-full aspect-square object-cover mt-8 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>

            <FadeUp delay={0.1}>
              <span className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-navy-50 text-navy-600">
                Quality & Compliance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy-900 leading-tight">
                Built on Consistency. Driven by Standards.
              </h2>
              <p className="mt-5 text-slate-500 leading-relaxed">
                Quality is not a final step for DKIND TEX — it is embedded in every process. Our team conducts systematic production monitoring, inline inspections, and pre-shipment audits to ensure every order meets international buyer expectations.
              </p>
              <Link
                to="/quality"
                className="mt-8 inline-flex items-center gap-2 text-navy-700 font-medium hover:text-navy-500 transition-colors group"
              >
                Our quality approach
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-navy-950">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
              Ready to Source with Confidence?
            </h2>
            <p className="mt-5 text-white/50 text-lg max-w-xl mx-auto">
              Let's discuss your sourcing requirements. Our team is ready to deliver the quality, reliability, and responsiveness your business demands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-600 hover:bg-navy-500 text-white font-medium rounded transition-colors"
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+8801730477428"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded transition-colors"
              >
                Call Us Directly
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
