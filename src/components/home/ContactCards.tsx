import { motion, type Variants } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const ContactCards = () => {
  const cards = [
    {
      title: 'WhatsApp Us',
      icon: MessageCircle,
      buttonText: 'Chat Now',
      link: 'https://wa.me/919344384078',
      color: 'text-[#25D366]',
      iconBg: 'bg-green-50 dark:bg-green-900/20',
      bgGlow: 'group-hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]',
      borderGlow: 'group-hover:border-[#25D366]/50'
    },
    {
      title: 'Call Us',
      icon: Phone,
      buttonText: 'Call Now',
      link: 'tel:+919344384078',
      color: 'text-primary',
      iconBg: 'bg-green-50 dark:bg-green-900/20',
      bgGlow: 'group-hover:shadow-[0_0_30px_rgba(46,125,50,0.3)]',
      borderGlow: 'group-hover:border-primary/50'
    },
    {
      title: 'Visit Store',
      icon: MapPin,
      buttonText: 'Open Maps',
      link: 'https://maps.app.goo.gl/U7UfcYZcNmEsTuui8',
      color: 'text-secondary',
      iconBg: 'bg-amber-50 dark:bg-amber-900/20',
      bgGlow: 'group-hover:shadow-[0_0_30px_rgba(255,179,0,0.3)]',
      borderGlow: 'group-hover:border-secondary/50'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto"
          >
            We're here to help! Reach out to us for orders, inquiries, or just to say hello.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block h-full p-8 rounded-3xl glass-card transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 ${card.bgGlow} ${card.borderGlow}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${card.iconBg} shadow-inner ${card.color} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-8">Click below to connect with our team instantly.</p>

                  <div className="flex items-center text-gray-800 dark:text-gray-200 font-medium group-hover:pl-2 transition-all duration-300">
                    {card.buttonText}
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCards;
