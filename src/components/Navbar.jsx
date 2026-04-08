import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Quality', to: '/quality' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = isHome
    ? scrolled
      ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      : 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'

  const textColor = isHome && !scrolled ? 'text-white' : 'text-navy-900'
  const logoColor = isHome && !scrolled ? 'filter brightness-0 invert' : ''

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="container-max px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={`flex items-center gap-2 transition-all duration-300`}>
              {/* SVG Logo replicated from brand */}
              <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer navy A-shape (filled, forms the border) */}
                <polygon points="60,6 114,104 6,104" fill={isHome && !scrolled ? '#ffffff' : '#1a3a6e'}/>
                {/* White inner cutout to create hollow A */}
                <polygon points="60,22 100,96 20,96" fill={isHome && !scrolled ? '#0f2249' : '#ffffff'}/>
                {/* Red solid triangle fill — the core brand mark */}
                <polygon points="60,36 94,96 26,96" fill={isHome && !scrolled ? '#e8f0fe' : '#cc2200'}/>
                {/* White horizontal bar across the A (crossbar) */}
                <rect x="34" y="74" width="52" height="10" fill={isHome && !scrolled ? '#0f2249' : '#ffffff'}/>
              </svg>
              <div>
                <div className={`font-sans font-bold text-xl leading-none tracking-widest transition-colors duration-300 ${isHome && !scrolled ? 'text-white' : 'text-[#1a3a6e]'}`}>
                  DKIND TEX
                </div>
                <div className={`text-[10px] font-sans tracking-[0.20em] uppercase font-medium transition-colors duration-300 ${isHome && !scrolled ? 'text-white/80' : 'text-[#3a6ab8]'}`}>
                  Export &amp; Import
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide transition-all duration-200 relative group ${textColor}
                  ${location.pathname === link.to ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-300
                  ${location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className={`ml-2 px-5 py-2.5 text-sm font-medium rounded transition-all duration-200
                ${isHome && !scrolled
                  ? 'border border-white/50 text-white hover:bg-white hover:text-navy-800'
                  : 'bg-navy-700 text-white hover:bg-navy-800'
                }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 transition-colors ${textColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3 text-sm font-medium border-b border-slate-50 text-navy-800 hover:text-navy-600
                    ${location.pathname === link.to ? 'text-navy-600' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 px-5 py-3 bg-navy-700 text-white text-sm font-medium rounded text-center hover:bg-navy-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
