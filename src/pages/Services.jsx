import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Package, Zap, Shield, Users, FileText, Search, Truck } from 'lucide-react'
import { FadeUp, StaggerChildren, staggerItem } from '../components/Animations'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Globe,
    title: 'Sourcing & Supplier Coordination',
    desc: `DKIND TEX maintains an established network of vetted garment factories across Bangladesh, covering a broad spectrum of product categories. We match your specific requirements — capacity, compliance standards, price range, and lead time — with the most suitable manufacturers.

Our sourcing process is systematic and transparent, providing buyers with clear comparisons, factory profiles, and capacity assessments before any commitment is made.`,
    highlights: ['Factory vetting and profile assessment', 'Capacity and lead time analysis', 'Competitive costing and negotiation', 'MOQ flexibility for varied buyer sizes'],
  },
  {
    icon: Package,
    title: 'Product Development',
    desc: `From initial design concept to approved production sample, DKIND TEX coordinates every step of the product development process. We work closely with design teams, fabric mills, and garment factories to translate buyer vision into precise, production-ready prototypes.

We manage fit comments, revisions, lab dip approvals, and tech pack alignment to minimize development cycles and maximize first-time approval rates.`,
    highlights: ['Tech pack review and factory briefing', 'Fit sample and size-set coordination', 'Fabric and trims sourcing', 'Lab dip and color approval management'],
  },
  {
    icon: Zap,
    title: 'Merchandising Support',
    desc: `Our experienced merchandising team serves as the operational backbone of every order — acting as the communication bridge between buyers and manufacturers throughout the production cycle.

From order placement and bulk raw material confirmation to production milestone tracking and delivery planning, our merchandisers ensure nothing falls through the gaps.`,
    highlights: ['Order placement and factory briefing', 'Raw material booking follow-up', 'Production milestone tracking', 'Proactive buyer communication'],
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    desc: `Quality at DKIND TEX is embedded in process, not treated as a final step. We deploy a structured inspection framework across inline checks, mid-production audits, and pre-shipment final inspections to maintain consistency and buyer standards throughout.

Our QC team works to international benchmarks, applying AQL standards where applicable, and ensuring that garments are presentation-ready before any shipment is approved.`,
    highlights: ['Inline production inspections', 'Mid-production quality audits', 'Pre-shipment final inspection', 'AQL-based defect measurement'],
  },
  {
    icon: Users,
    title: 'Production Follow-Up',
    desc: `Production follow-up is where many sourcing relationships fall short — and where DKIND TEX consistently delivers value. Our team conducts regular factory visits, tracks daily output against targets, and escalates issues early enough to resolve them without compromising delivery.

We keep buyers informed with structured updates, minimizing surprises and maximizing on-time performance.`,
    highlights: ['Regular factory floor monitoring', 'Daily production output tracking', 'Risk identification and escalation', 'Structured buyer status reporting'],
  },
  {
    icon: FileText,
    title: 'Export Documentation & Logistics',
    desc: `DKIND TEX manages the complete documentation and export compliance process to ensure smooth customs clearance and on-schedule shipment. From commercial invoices and packing lists to certificate of origin and compliance paperwork, we handle it with precision.

We also coordinate with freight forwarders, shipping lines, and local logistics partners to ensure cargo readiness and timely handover.`,
    highlights: ['Commercial invoice and packing list preparation', 'Certificate of origin coordination', 'Freight forwarder liaison', 'Shipping timeline management'],
  },
]

export default function Services() {
  return (
    <main>
      <PageHero
        tag="Services"
        title="End-to-End Sourcing Management"
        subtitle="Every service we offer is designed to reduce buyer risk, increase operational efficiency, and deliver consistent results."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-24">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={0.05}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                        <s.icon size={22} className="text-navy-600" />
                      </div>
                      <div className="text-xs tracking-widest text-navy-500 uppercase font-medium">0{i + 1}</div>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-900 mb-5">{s.title}</h2>
                    {s.desc.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-slate-500 leading-relaxed mb-4">{para}</p>
                    ))}
                  </div>

                  <div className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h4 className="text-xs tracking-widest uppercase text-navy-500 font-medium mb-5">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {s.highlights.map(h => (
                        <li key={h} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 shrink-0" />
                          <span className="text-navy-800 text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-950">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">
              Discuss Your Sourcing Requirements
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto">
              Our team is ready to understand your needs and propose a sourcing structure that works for your business.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-navy-600 text-white font-medium rounded hover:bg-navy-500 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
