import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, FadeIn } from '../components/Animations'
import PageHero from '../components/PageHero'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+88 01730477428',
    href: 'tel:+8801730477428',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'orangylemon@gmail.com',
    href: 'mailto:orangylemon@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Plot# 05, Shere-E-Bangla Avenue, Block# B, Dalipara, Turag, Dhaka-1230, Bangladesh',
    href: null,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', category: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <main>
      <PageHero
        tag="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Reach out to discuss your sourcing requirements. Our team typically responds within one business day."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">
                  Whether you have a specific sourcing requirement, want to explore what DKIND TEX can offer, or simply want to introduce your brand — we'd love to hear from you.
                </p>

                <div className="space-y-8">
                  {contactInfo.map(c => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0 mt-0.5">
                        <c.icon size={17} className="text-navy-600" />
                      </div>
                      <div>
                        <div className="text-xs tracking-widest uppercase text-slate-400 font-medium mb-1">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-navy-800 hover:text-navy-600 transition-colors font-medium text-sm leading-relaxed">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-navy-800 font-medium text-sm leading-relaxed">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-slate-100">
                  <div className="text-xs tracking-widest uppercase text-slate-400 font-medium mb-3">Business Hours</div>
                  <p className="text-navy-800 text-sm font-medium">Sunday – Thursday</p>
                  <p className="text-slate-500 text-sm">9:00 AM – 6:00 PM (BST, UTC+6)</p>
                  <p className="text-navy-800 text-sm font-medium mt-3">Friday – Saturday</p>
                  <p className="text-slate-500 text-sm">Closed (Available by prior arrangement)</p>
                </div>
              </FadeUp>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center text-center py-16"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                          <CheckCircle2 size={28} className="text-green-500" />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">Message Received</h3>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                          Thank you for reaching out to DKIND TEX. A member of our team will be in touch within one business day.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                      >
                        <h3 className="font-display text-xl font-semibold text-navy-900 mb-6">Send an Inquiry</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Full Name *</label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={form.name}
                              onChange={handleChange}
                              placeholder="Your full name"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Company</label>
                            <input
                              type="text"
                              name="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Email Address *</label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+1 234 567 890"
                              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Product Category of Interest</label>
                          <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all"
                          >
                            <option value="">Select a category (optional)</option>
                            <option>Men's Wear</option>
                            <option>Women's Wear</option>
                            <option>Kids' Wear</option>
                            <option>Knitwear</option>
                            <option>Woven Wear</option>
                            <option>Denim & Casualwear</option>
                            <option>Sweaters & Outerwear</option>
                            <option>Multiple / General Inquiry</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs tracking-widest uppercase text-slate-500 font-medium mb-2">Message *</label>
                          <textarea
                            name="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell us about your sourcing requirements, target quantity, timeline, or any other details..."
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-navy-900 placeholder-slate-300 focus:outline-none focus:border-navy-400 focus:ring-1 focus:ring-navy-200 transition-all resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 px-7 py-4 bg-navy-700 text-white font-medium rounded-lg hover:bg-navy-800 transition-all duration-200 disabled:opacity-60"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              />
                              Sending...
                            </span>
                          ) : (
                            <>
                              Send Inquiry <Send size={15} />
                            </>
                          )}
                        </button>

                        <p className="text-slate-400 text-xs text-center">
                          We respond to all inquiries within one business day.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-slate-50 py-0">
        <div className="w-full h-80 bg-navy-100 relative overflow-hidden">
          <iframe
            title="DKIND TEX Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4!2d90.3738!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjInMjYuNyJF!5e0!3m2!1sen!2sbd!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%) contrast(95%)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50/80 to-transparent h-16 pointer-events-none" />
        </div>
      </section>
    </main>
  )
}
