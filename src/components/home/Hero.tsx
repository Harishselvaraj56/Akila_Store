import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const stats = [
  { value: '5000+', label: 'Happy Customers' },
  { value: '1000+', label: 'Products' },
  { value: '10+', label: 'Years Experience' },
  { value: '300+', label: 'Daily Visitors' },
];

const Hero = () => {
  return (
    <section id="home" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Soft gradient background specific to Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-40 z-0 pointer-events-none" style={{ background: 'radial-gradient(circle at top center, rgba(46, 125, 50, 0.1) 0%, rgba(255, 179, 0, 0.05) 50%, transparent 100%)' }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="max-w-xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6"
            >
              Premium Groceries, <br />
              <span className="text-primary">Delivered Fresh.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-gray-600 mb-10 leading-relaxed"
            >
              Conveniently located in Vallioor, serving the local community with fresh groceries and daily essentials.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919344384078"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
              >
                <MessageCircle size={20} />
                WhatsApp Order
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919344384078"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Phone size={20} />
                Call Store
              </motion.a>
            </motion.div>

            {/* Trust Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-100/60"
            >
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-white"
            >
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
                alt="Fresh groceries in a paper bag" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Subtle floating glow behind image */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-full -z-10" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
