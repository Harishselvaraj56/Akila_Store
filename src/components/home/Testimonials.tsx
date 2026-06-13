import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Denica Shelus',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    text: "The freshest vegetables in town, every single time. WhatsApp ordering has made my weekly shopping effortless. Highly recommended!",
  },
  {
    name: 'Jessinth Eben',
    role: 'Local Resident',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80',
    text: "A very clean store with incredibly helpful staff. They always have exactly what I need, and the quality of their organic produce is exceptional.",
  },
  {
    name: 'Mathi Nishanth',
    role: 'Loyal Customer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    text: "Best dairy products in the area. I've been shopping here for years and the quality never dips. My go-to destination for all grocery needs.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 relative z-10 border-t border-gray-100/50">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. See what our local community says about shopping at Akila Store.
          </p>
        </motion.div>

        {/* 3 Cards, No Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed flex-grow mb-8">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover bg-gray-100 border border-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-500 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
