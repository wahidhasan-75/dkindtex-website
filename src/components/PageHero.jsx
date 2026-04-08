import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image, tag }) {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-navy-950">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-900/40" />

      <div className="relative container-max px-6 md:px-12 lg:px-20 pb-16 pt-32">
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full bg-white/15 text-white/80"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-2xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 text-white/60 text-base md:text-lg max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
