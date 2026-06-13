import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center
                     bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsVisible(false)}
        >
          <motion.div
            initial={{ scale: 0.88, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.88, y: 24 }}
            transition={{ type: 'spring', stiffness: 280, damping: 24 }}
            className="relative max-w-sm w-full p-8 rounded-3xl text-center
                       bg-white dark:bg-slate-800
                       border border-gray-100 dark:border-slate-700
                       shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setIsVisible(false)}
              aria-label="Close"
              className="absolute top-4 right-4 p-1.5 rounded-full
                         text-gray-400 hover:text-gray-700 dark:hover:text-slate-200
                         hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="w-18 w-[72px] h-[72px] rounded-2xl mx-auto mb-6
                            bg-green-50 dark:bg-green-900/30
                            flex items-center justify-center">
              <MessageCircle size={38} className="text-[#25D366]" />
            </div>

            {/* Heading */}
            <h3 className="text-2xl font-display font-bold
                           text-gray-900 dark:text-white mb-3">
              Wait — Need Help?
            </h3>
            <p className="text-gray-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              Chat with Akila Store on WhatsApp. Our friendly team is ready to assist with your grocery list!
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/919344384078"
              target="_blank" rel="noopener noreferrer"
              className="block w-full py-4 rounded-full font-bold text-base
                         bg-[#25D366] text-white
                         hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]
                         transition-shadow"
            >
              Chat on WhatsApp
            </a>

            <button
              onClick={() => setIsVisible(false)}
              className="mt-4 text-xs text-gray-400 dark:text-slate-500
                         hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
            >
              No thanks, I'll keep browsing
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitPopup;
