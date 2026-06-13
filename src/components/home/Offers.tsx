import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const offers = [
  {
    title: 'Weekend Super Sale',
    subtitle: 'Save big on all organic vegetables this weekend only.',
    discount: '20% OFF',
    cta: 'Shop Vegetables',
    img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-[#1b5e20] to-[#2E7D32]',
    accent: '#4CAF50',
    glow: 'hover:shadow-[0_24px_48px_rgba(46,125,50,0.45)]',
  },
  {
    title: 'Fresh Fruits Special',
    subtitle: 'Buy any premium fruit and take home another free.',
    discount: 'Buy 1 Get 1',
    cta: 'Shop Fruits',
    img: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-[#e65100] to-[#FFB300]',
    accent: '#FFB300',
    glow: 'hover:shadow-[0_24px_48px_rgba(255,179,0,0.45)]',
  },
  {
    title: 'Festival Special',
    subtitle: 'Celebrate with premium sweets, snacks & gifting packs.',
    discount: 'Flat ₹200 OFF',
    cta: 'Shop Festival',
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
    gradient: 'from-[#4a148c] to-[#e91e8c]',
    accent: '#e91e8c',
    glow: 'hover:shadow-[0_24px_48px_rgba(233,30,140,0.45)]',
  },
];

const Offers = () => (
  <section id="offers" className="py-28 relative z-10">
    <div className="container mx-auto px-6 max-w-7xl">

      <SectionHeader
        badge="Live Deals"
        heading={<>Today's <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">Best Offers</span></>}
        description="Exclusive deals updated every week — grab them before they're gone!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {offers.map((offer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.12, type: 'spring', stiffness: 160, damping: 22 }}
            className={`relative overflow-hidden rounded-3xl
                        bg-slate-900 border border-white/10
                        hover:-translate-y-3 transition-all duration-500 group
                        ${offer.glow}`}
          >
            {/* ── Background gradient wash ── */}
            <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient}
                             opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />

            {/* ── Product image (right side) ── */}
            <div className="absolute right-0 top-0 bottom-0 w-[52%] overflow-hidden">
              <motion.img
                src={offer.img}
                alt=""
                aria-hidden
                className="w-full h-full object-cover object-center opacity-70
                           group-hover:opacity-90 group-hover:scale-105
                           transition-all duration-700"
              />
              {/* Fade-out toward left so text stays readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
            </div>

            {/* ── Text content (left side) ── */}
            <div className="relative z-10 p-8 pr-4 w-[55%]">
              {/* Discount badge */}
              <div className="inline-block px-4 py-2 rounded-xl mb-6
                              bg-white text-gray-900
                              text-sm font-display font-black tracking-wider
                              shadow-lg -rotate-1 group-hover:rotate-0
                              transition-transform duration-300">
                {offer.discount}
              </div>

              <h3 className="text-2xl font-display font-extrabold text-white
                             leading-tight mb-3">
                {offer.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                {offer.subtitle}
              </p>

              <motion.a
                href="https://wa.me/919344384078"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-bold
                           text-white/90 hover:text-white transition-colors"
              >
                <MessageCircle size={15} /> {offer.cta} <ArrowRight size={14} />
              </motion.a>
            </div>

            {/* Bottom highlight bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 opacity-60
                         group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(90deg, ${offer.accent}, transparent)` }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Offers;
