import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  badge: string;
  heading: ReactNode;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ badge, heading, description, align = 'center' }: SectionHeaderProps) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                 bg-primary/10 dark:bg-primary/20
                 text-primary text-xs font-bold uppercase tracking-widest
                 border border-primary/20 mb-5"
    >
      {badge}
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className="text-4xl md:text-5xl font-display font-bold
                 text-gray-900 dark:text-white tracking-tight leading-tight"
    >
      {heading}
    </motion.h2>

    {description && (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`mt-4 text-lg text-gray-500 dark:text-slate-400 leading-relaxed ${
          align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'
        }`}
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;
