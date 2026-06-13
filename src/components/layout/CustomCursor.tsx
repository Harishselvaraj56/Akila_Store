import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth out the movement using spring physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = () => setIsHovered(true);
    const handleElementLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Attach hover listeners to specific elements dynamically
    const attachListeners = () => {
      const hoverElements = document.querySelectorAll('a, button, input, select, textarea, .hover-target');
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', handleElementHover);
        el.addEventListener('mouseleave', handleElementLeave);
      });
      return hoverElements;
    };

    let elements = attachListeners();

    // Re-attach listeners using mutation observer in case elements are added dynamically
    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
      elements = attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementHover);
        el.removeEventListener('mouseleave', handleElementLeave);
      });
    };
  }, [cursorX, cursorY, isVisible]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" style={{ opacity: isVisible ? 1 : 0 }}>
      <motion.div
        className="absolute top-0 left-0 w-8 h-8 -ml-4 -mt-4 border-2 border-primary rounded-full mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(46, 204, 113, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(46, 204, 113, 0.5)' : '#2ecc71',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-primary rounded-full shadow-[0_0_10px_rgba(46,204,113,0.8)]"
        style={{ x: cursorX, y: cursorY }} // Use raw value for the dot so it's instantly responsive
        animate={{
          scale: isHovered ? 0 : 1, // Hide dot when hovering
          opacity: isHovered ? 0 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
