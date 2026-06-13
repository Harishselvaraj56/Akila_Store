import { motion } from 'framer-motion';

// Grid pattern using inline style — never use SVG data URLs inside Tailwind className
const gridStyle: React.CSSProperties = {
  backgroundImage: `
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

const AnimatedBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden
                 bg-[#F8FAF8] dark:bg-[#0F172A]
                 transition-colors duration-500"
    >
      {/* ── Blob 1: top-right ── */}
      <motion.div
        animate={{
          scale:  [1, 1.2, 1],
          rotate: [0, 60, 0],
          x:      [0, 40, 0],
          y:      [0, -40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full
                   bg-gradient-to-br from-primary/[0.08] to-secondary/[0.04]
                   dark:from-primary/[0.12] dark:to-secondary/[0.06]
                   blur-[120px]"
      />

      {/* ── Blob 2: bottom-left ── */}
      <motion.div
        animate={{
          scale:  [1, 1.4, 1],
          rotate: [0, -60, 0],
          x:      [0, -40, 0],
          y:      [0, 40, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full
                   bg-gradient-to-tr from-secondary/[0.05] to-primary/[0.08]
                   dark:from-secondary/[0.08] dark:to-primary/[0.12]
                   blur-[100px]"
      />

      {/* ── Subtle grid overlay (light mode only) ── */}
      {/* Uses inline style — Tailwind cannot handle SVG data URLs in arbitrary values */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-0 transition-opacity duration-500"
        style={gridStyle}
      />
    </div>
  );
};

export default AnimatedBackground;
