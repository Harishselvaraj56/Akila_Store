import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { step: '01', title: 'Send Your List', desc: 'Message your grocery list to our WhatsApp number anytime.' },
  { step: '02', title: 'We Pack It',      desc: 'Our team picks and packs your order with care and speed.' },
  { step: '03', title: 'Pick Up Ready',  desc: 'Arrive at the store — your fresh groceries are waiting!' },
];

const WhatsAppOrder = () => (
  <section className="py-28 relative z-10 overflow-hidden">
    <div className="container mx-auto px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2.5rem] overflow-hidden
                   bg-primary shadow-[0_24px_64px_rgba(46,125,50,0.5)]"
      >
        {/* Background glows */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full
                          bg-secondary/25 blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full
                          bg-white/10 blur-[100px] animate-pulse [animation-delay:2s]" />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* Left: CTA */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                            bg-white/15 border border-white/25 text-white/90
                            text-xs font-bold uppercase tracking-widest w-fit">
              <MessageCircle size={13} /> WhatsApp Ordering
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-extrabold
                           text-white leading-tight mb-5">
              Order Your Groceries<br />
              <span className="text-secondary">Instantly</span>
            </h2>
            <p className="text-green-50/85 text-lg mb-10 max-w-md leading-relaxed">
              Skip the queue. Send your list, we'll pack it, and you pick it up fresh —
              all through a simple WhatsApp message.
            </p>

            <motion.a
              href="https://wa.me/919344384078"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04, x: 4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 self-start
                         px-9 py-5 rounded-2xl font-display font-bold text-lg
                         bg-white text-primary
                         hover:shadow-[0_0_40px_rgba(255,255,255,0.35)]
                         transition-all duration-300"
            >
              <MessageCircle size={22} />
              Start Ordering Now
              <ArrowRight size={18} />
            </motion.a>

            <p className="mt-5 text-green-100/60 text-xs">
              +91 9344384078 · Open daily 7 AM – 9 PM
            </p>
          </div>

          {/* Right: Steps */}
          <div className="p-10 md:p-16 border-t lg:border-t-0 lg:border-l border-white/10
                          flex flex-col justify-center gap-7">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">
              How It Works
            </p>
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl shrink-0
                                bg-white/10 border border-white/20
                                flex items-center justify-center
                                text-secondary font-display font-black text-lg">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">{s.title}</h4>
                  <p className="text-green-100/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex items-center gap-2 mt-4 pt-6 border-t border-white/10">
              <CheckCircle size={16} className="text-secondary shrink-0" />
              <span className="text-green-100/70 text-sm">
                Trusted by 5,000+ families across the neighbourhood
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default WhatsAppOrder;
