import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <svg width="38" height="38" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="60,6 114,104 6,104" fill="#4a7abf"/>
                <polygon points="60,22 100,96 20,96" fill="#0d1f3c"/>
                <polygon points="60,36 94,96 26,96" fill="#cc2200"/>
                <rect x="34" y="74" width="52" height="10" fill="#0d1f3c"/>
              </svg>
              <div>
                <div className="font-sans font-bold text-lg text-white leading-none tracking-widest">DKIND TEX</div>
                <div className="text-[10px] tracking-[0.20em] text-[#7aaae0] uppercase font-medium">Export &amp; Import</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A premier textile buying house and export-import company committed to quality sourcing, reliable execution, and long-term partnerships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white/90 font-semibold mb-5 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Products', to: '/products' },
                { label: 'Quality & Compliance', to: '/quality' },
                { label: 'Contact', to: '/contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white/90 font-semibold mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {[
                'Sourcing & Supplier Coordination',
                'Product Development',
                'Merchandising Support',
                'Quality Assurance',
                'Production Follow-Up',
                'Export Documentation',
              ].map(s => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white/90 font-semibold mb-5 text-sm tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-navy-300 mt-0.5 shrink-0" />
                <a href="tel:+8801730477428" className="text-white/60 hover:text-white text-sm transition-colors">
                  +88 01730477428
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-navy-300 mt-0.5 shrink-0" />
                <a href="mailto:orangylemon@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors break-all">
                  orangylemon@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-navy-300 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">
                  Plot# 05, Shere-E-Bangla Avenue,<br />
                  Block# B, Dalipara, Turag,<br />
                  Dhaka-1230, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {year} DKIND TEX Export & Import. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  )
}
