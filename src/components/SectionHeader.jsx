import { FadeUp } from './Animations'

export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-16">
      <FadeUp>
        {tag && (
          <span className={`inline-block text-xs tracking-[0.22em] uppercase font-medium mb-4 px-3 py-1 rounded-full
            ${light
              ? 'bg-white/15 text-white/80'
              : 'bg-navy-50 text-navy-600'
            }`}>
            {tag}
          </span>
        )}
        <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight
          ${light ? 'text-white' : 'text-navy-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed
            ${light ? 'text-white/60' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        )}
      </FadeUp>
    </div>
  )
}
