import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import ContactCards from '../components/home/ContactCards';
import LocationMap from '../components/home/LocationMap';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Akila Store</title>
        <meta name="description" content="Get in touch with Akila Store. Call us, chat on WhatsApp, or visit our grocery store in person." />
      </Helmet>

      {/* Reusing the beautiful contact sections */}
      <div className="pt-12">
        <ContactCards />
        <LocationMap />
      </div>

      {/* Premium Newsletter Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[3rem] glass-dark border border-white/10 p-12 md:p-20 text-center shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
          >
            {/* Animated Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Join the <span className="text-primary">Akila Family</span>
              </motion.h2>
              <p className="text-lg text-slate-300 mb-12">
                Subscribe to our newsletter to get exclusive festival offers, weekend sale alerts, and fresh arrival updates directly in your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address..." 
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors hover-target"
                  required
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="px-8 py-4 rounded-full bg-primary text-white font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(46,204,113,0.3)] hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] transition-shadow"
                >
                  Subscribe
                  <Send size={18} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
