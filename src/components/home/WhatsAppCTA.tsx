import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background glow effects for the green section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-50 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(76, 175, 80, 0.4) 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/20">
            <MessageCircle size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Order Groceries Instantly
          </h2>
          <p className="text-green-50 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Skip the queue. Send your shopping list on WhatsApp, we'll pack it carefully, and it will be ready for you to pick up.
          </p>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/919344384078"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-primary font-bold text-lg shadow-xl shadow-green-900/20"
          >
            <MessageCircle size={24} />
            Message on WhatsApp
          </motion.a>
          <p className="mt-8 text-sm text-green-100/70 font-medium tracking-wide">
            We reply within minutes during store hours (6 AM – 10 PM)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppCTA;
