import { motion } from 'framer-motion';
import { Leaf, DollarSign, CheckCircle, Smile } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Stock Daily',
    desc: 'Our vegetables and fruits are sourced every morning to guarantee crisp freshness and premium quality.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Prices',
    desc: 'We offer fair, competitive pricing on all daily essentials without ever compromising on quality.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Products',
    desc: 'Every item on our shelves is 100% genuine and strictly quality-checked before it reaches you.',
  },
  {
    icon: Smile,
    title: 'Friendly Service',
    desc: 'Experience a welcoming environment where our staff is always ready to assist with a smile.',
  },
];

const Features = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary-dark text-xs font-semibold uppercase tracking-wider mb-4">
            Akila Store Promise
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            We are committed to providing our neighbourhood with the best grocery shopping experience.
          </p>
        </motion.div>

        {/* 4 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 border border-gray-100">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
