import { useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeUp, StaggerChildren, staggerItem } from '../components/Animations'
import PageHero from '../components/PageHero'
import SectionHeader from '../components/SectionHeader'

const categories = [
  {
    name: "Men's Wear",
    img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80',
    desc: 'A comprehensive range of menswear spanning formal shirts and trousers, casual polos and tees, outerwear, and activewear. Produced across woven and knit constructions to international standards.',
    items: ['Formal Shirts & Trousers', 'Polo Shirts & T-Shirts', 'Casual & Smart Casual Wear', 'Outerwear & Jackets', 'Activewear & Sportswear', 'Denim & Bottoms'],
    tag: 'Men',
  },
  {
    name: "Women's Wear",
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    desc: 'Contemporary and classic women\'s fashion across blouses, dresses, coordinates, knitwear, and outerwear. Trend-responsive production with meticulous attention to cut, fit, and finish.',
    items: ['Blouses & Tops', 'Dresses & Skirts', 'Knitwear & Jumpers', 'Trousers & Leggings', 'Outerwear & Coats', 'Casual & Loungewear'],
    tag: 'Women',
  },
  {
    name: "Kids' Wear",
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80',
    desc: 'Safe, durable, and vibrant children\'s apparel for infants, toddlers, and older children. Produced with child-safe trims, tested dyes, and construction standards suited to active young wear.',
    items: ['Infant & Toddler Sets', 'Boys\' Casual & Formal', 'Girls\' Dresses & Tops', 'Kids\' Outerwear', 'School & Uniform Wear', 'Nightwear & Loungewear'],
    tag: 'Kids',
  },
  {
    name: 'Knitwear',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&q=80',
    desc: 'Premium knitted garments in cotton, poly-cotton, and blended fabrics. Covering t-shirts, polo shirts, sweaters, and knitted dresses across jersey, rib, and interlock constructions.',
    items: ['Jersey T-Shirts', 'Polo Shirts', 'Rib & Interlock Tops', 'Knitted Dresses', 'Fleece & Sweatwear', 'Henley & Long Sleeve Tops'],
    tag: 'Knitwear',
  },
  {
    name: 'Woven Wear',
    img: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80',
    desc: 'Structured woven garments in a variety of fabric constructions including poplin, twill, oxford, and chambray. Suitable for formal, business, and smart-casual ranges for men and women.',
    items: ['Poplin & Twill Shirts', 'Oxford & Chambray Shirts', 'Woven Trousers & Chinos', 'Formal Blouses', 'Woven Dresses', 'Utility & Workwear'],
    tag: 'Woven',
  },
  {
    name: 'Denim & Casualwear',
    img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    desc: 'Durable denim fabrications and everyday casual styles across jeans, jackets, shorts, and casual coordinates. Available in standard and stretch constructions for men, women, and children.',
    items: ['Jeans & Denim Trousers', 'Denim Jackets & Shirts', 'Shorts & Bermudas', 'Casual Coordinates', 'Stretch Denim', 'Washed & Treated Denim'],
    tag: 'Denim',
  },
  {
    name: 'Sweaters & Outerwear',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&q=80',
    desc: 'Full-fashioned and cut-and-sewn sweaters, cardigans, and outerwear in acrylic, wool blend, cotton, and mixed yarn compositions. Produced for European and international cold-weather markets.',
    items: ['Crewneck & V-Neck Sweaters', 'Cardigans & Button-Up Knits', 'Hoodies & Sweatshirts', 'Windbreakers & Light Jackets', 'Padded & Quilted Jackets', 'Fleece Outerwear'],
    tag: 'Outerwear',
  },
]

export default function Products() {
  const [selected, setSelected] = useState(null)

  return (
    <main>
      <PageHero
        tag="Products"
        title="Apparel Categories We Source"
        subtitle="A comprehensive portfolio of garment categories for men, women, and children — produced to international quality standards."
        image="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            tag="Our Categories"
            title="Built for International Buyers"
            subtitle="We source across a broad apparel spectrum, giving buyers the flexibility to consolidate orders through a single, trusted partner."
          />

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            {categories.map(cat => (
              <motion.div
                key={cat.name}
                variants={staggerItem}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 hover:border-navy-200 hover:shadow-xl transition-all duration-300"
                onClick={() => setSelected(cat)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.thumb}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-navy-900">{cat.name}</h3>
                    <span className="text-xs bg-navy-50 text-navy-600 px-2.5 py-1 rounded-full font-medium">{cat.tag}</span>
                  </div>
                  <p className="text-slate-500 text-sm mt-3 leading-relaxed line-clamp-2">{cat.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-navy-600 text-sm font-medium group-hover:gap-3 transition-all">
                    View details <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* NOTE section */}
      <section className="py-16 bg-slate-50">
        <div className="container-max px-6 md:px-12 lg:px-20">
          <FadeUp>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-slate-500 text-base leading-relaxed">
                DKIND TEX operates as a buying house, not a manufacturer. We coordinate production through our network of vetted partner factories. All categories listed represent active sourcing capabilities. Contact us to discuss specific product requirements, available capacity, and pricing.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-navy-700 text-white font-medium rounded hover:bg-navy-800 transition-colors"
              >
                Inquire About a Category <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-[16/7] overflow-hidden rounded-t-2xl">
                <img src={selected.img} alt={selected.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-xs bg-navy-50 text-navy-600 px-2.5 py-1 rounded-full font-medium">{selected.tag}</span>
                    <h2 className="font-display text-2xl md:text-3xl font-semibold text-navy-900 mt-3">{selected.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-slate-400 hover:text-slate-600 p-1 mt-1 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-slate-500 leading-relaxed mb-6">{selected.desc}</p>
                <h4 className="text-xs tracking-widest uppercase text-navy-500 font-medium mb-3">Subcategories We Source</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {selected.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-navy-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <Link
                    to="/contact"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-700 text-white font-medium rounded hover:bg-navy-800 transition-colors text-sm"
                  >
                    Inquire About This Category <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
