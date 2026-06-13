import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const actions = [
  {
    id: 'whatsapp',
    icon: MessageCircle,
    link: 'https://wa.me/919344384078',
    label: 'WhatsApp Us',
    bg: 'bg-[#25D366]',
    glow: 'shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.7)]',
  },
  {
    id: 'phone',
    icon: Phone,
    link: 'tel:+919344384078',
    label: 'Call Us',
    bg: 'bg-primary',
    glow: 'shadow-[0_4px_20px_rgba(46,125,50,0.5)] hover:shadow-[0_8px_28px_rgba(46,125,50,0.7)]',
  },
  {
    id: 'maps',
    icon: MapPin,
    link: 'https://maps.app.goo.gl/U7UfcYZcNmEsTuui8',
    label: 'Get Directions',
    bg: 'bg-secondary',
    glow: 'shadow-[0_4px_20px_rgba(255,179,0,0.5)] hover:shadow-[0_8px_28px_rgba(255,179,0,0.7)]',
  },
];

const FloatingActions = () => (
  <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3.5">
    {actions.map(({ id, icon: Icon, link, label, bg, glow }, idx) => (
      <motion.a
        key={id}
        href={link}
        target={id !== 'phone' ? '_blank' : undefined}
        rel={id !== 'phone' ? 'noopener noreferrer' : undefined}
        aria-label={label}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22, delay: 1 + idx * 0.1 }}
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.92 }}
        className={`w-13 h-13 w-[52px] h-[52px] rounded-full flex items-center justify-center
                    text-white ${bg} ${glow}
                    transition-all duration-300`}
      >
        <Icon size={22} strokeWidth={2.2} />
      </motion.a>
    ))}
  </div>
);

export default FloatingActions;
