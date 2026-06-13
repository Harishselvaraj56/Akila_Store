import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const faqs = [
  {
    q: 'What are your store timings?',
    a: 'We are open every day from 7:00 AM to 9:00 PM to serve you with fresh groceries and daily essentials.',
  },
  {
    q: 'Do you restock fresh produce daily?',
    a: 'Yes! Our vegetables and fruits are sourced and restocked every morning to guarantee the best quality and freshness for our customers.',
  },
  {
    q: 'Can I place grocery orders through WhatsApp?',
    a: 'Absolutely. Just send your grocery list to +91 9344384078 on WhatsApp and our team will pack everything and have it ready for pickup.',
  },
  {
    q: 'Where exactly is Akila Store located?',
    a: 'We are centrally located in the neighbourhood. Use the map in our Contact section or click "Open Directions" to navigate via Google Maps.',
  },
  {
    q: 'What types of products do you carry?',
    a: 'We stock fresh vegetables, fruits, dairy, rice & grains, snacks, beverages, household cleaning supplies, personal care items, and more premium organic goods.',
  },
  {
    q: 'Do you offer any discounts or loyalty offers?',
    a: 'Yes! We run weekly promotions, weekend sales, and festival specials. Follow our WhatsApp channel or visit the Offers section for the latest deals.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Two-column on desktop: heading left, accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left: heading + help note */}
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              badge="FAQ"
              heading={<>Got <span className="text-primary">Questions?</span></>}
              description="Everything you need to know about shopping at Akila Store."
              align="left"
            />

            {/* Contact nudge */}
            <div className="mt-8 p-5 rounded-2xl
                            bg-primary/5 dark:bg-primary/10
                            border border-primary/15 dark:border-primary/25">
              <div className="flex items-start gap-3">
                <HelpCircle size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    Still have questions?
                  </p>
                  <p className="text-gray-500 dark:text-slate-400 text-xs leading-relaxed mb-3">
                    Our team is happy to help with any query — just message us on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919344384078"
                    target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold text-primary hover:underline"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = open === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className={`rounded-2xl border overflow-hidden
                              transition-all duration-300 ${
                    isOpen
                      ? 'border-primary/40 shadow-[0_4px_24px_rgba(46,125,50,0.14)]'
                      : 'border-gray-200 dark:border-slate-700 hover:border-primary/25'
                  } bg-white dark:bg-slate-800`}
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between
                               px-6 py-5 text-left gap-5
                               focus-visible:outline-none focus-visible:ring-2
                               focus-visible:ring-primary focus-visible:ring-inset"
                  >
                    <span className={`text-base font-display font-semibold transition-colors ${
                      isOpen ? 'text-primary' : 'text-gray-900 dark:text-white'
                    }`}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center
                                  transition-colors ${
                        isOpen
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400'
                      }`}
                    >
                      <ChevronDown size={17} />
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1
                                        border-t border-gray-100 dark:border-slate-700">
                          <p className="pt-4 text-gray-600 dark:text-slate-400
                                        text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
