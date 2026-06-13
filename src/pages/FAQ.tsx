import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What are your store timings?',
    a: 'We are open every day from 6:00 AM to 10:00 PM to serve you with fresh groceries and daily essentials.'
  },
  {
    q: 'Do you restock fresh vegetables and fruits daily?',
    a: 'Yes! We receive fresh stock of organic vegetables and fruits every morning to ensure our customers get the best quality.'
  },
  {
    q: 'Can I order groceries through WhatsApp?',
    a: 'Absolutely! You can message us your grocery list on WhatsApp at +91 9344384078, and we will keep your order packed and ready for pickup.'
  },
  {
    q: 'Where is Akila Store located?',
    a: 'We are conveniently located in the neighborhood center. You can find our exact location and get directions from the Contact page.'
  },
  {
    q: 'What range of products do you sell?',
    a: 'We offer a wide range of products including fresh produce, dairy, rice & grains, household essentials, personal care items, snacks, beverages, and premium organic goods.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageTransition>
      <Helmet>
        <title>Frequently Asked Questions | Akila Store</title>
        <meta name="description" content="Find answers to common questions about Akila Store timings, products, and WhatsApp ordering." />
      </Helmet>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-dark tracking-tight mb-6"
            >
              Have <span className="text-gradient">Questions?</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500"
            >
              Everything you need to know about shopping at Akila Store.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`glass border transition-colors duration-300 rounded-2xl overflow-hidden ${
                  openIndex === idx ? 'border-primary shadow-[0_10px_30px_rgba(46,204,113,0.1)]' : 'border-white/40 hover:border-primary/30'
                }`}
              >
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className={`text-xl font-semibold transition-colors ${openIndex === idx ? 'text-primary' : 'text-dark'}`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      openIndex === idx ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 text-slate-600 text-lg leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default FAQ;
