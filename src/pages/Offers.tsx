import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { Tag } from 'lucide-react';

const offers = [
  {
    title: 'Weekend Super Sale',
    subtitle: 'On all organic vegetables',
    discount: '20% OFF',
    img: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-400 to-primary-dark',
    shadow: 'hover:shadow-[0_20px_40px_rgba(46,204,113,0.3)]'
  },
  {
    title: 'Fresh Fruits Special',
    subtitle: 'Selected premium fruits',
    discount: 'Buy 1 Get 1',
    img: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-400 to-red-500',
    shadow: 'hover:shadow-[0_20px_40px_rgba(249,115,22,0.3)]'
  },
  {
    title: 'Dairy Essentials',
    subtitle: 'Milk, Cheese & Butter',
    discount: '15% OFF',
    img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-400 to-indigo-500',
    shadow: 'hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)]'
  },
  {
    title: 'Festival Offers',
    subtitle: 'Sweets & Snacks',
    discount: 'Flat ₹200 OFF',
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-400 to-pink-500',
    shadow: 'hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)]'
  }
];

const Offers = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Special Offers | Akila Store</title>
        <meta name="description" content="Check out the latest deals, discounts, and festival offers at Akila Store." />
      </Helmet>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-500 font-semibold text-sm mb-6 border border-red-100"
            >
              <Tag size={16} /> Live Deals
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-dark tracking-tight mb-6"
            >
              Today's <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Best Deals</span>
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {offers.map((offer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                className={`relative overflow-hidden rounded-[2.5rem] glass-dark border border-white/10 transition-all duration-500 ${offer.shadow} group h-[300px] md:h-[350px] flex items-center`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500 z-0`}></div>
                
                <div className="relative z-10 p-8 md:p-12 w-full md:w-3/5">
                  <div className="inline-block px-4 py-2 rounded-full bg-white text-dark font-bold text-sm tracking-wider shadow-lg mb-6 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    {offer.discount}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    {offer.subtitle}
                  </p>
                  <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-[0_0_20px_rgba(46,204,113,0.4)]">
                    Shop Deal
                  </button>
                </div>

                <motion.img 
                  src={offer.img} 
                  alt={offer.title} 
                  className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[120%] object-contain drop-shadow-2xl opacity-90 transition-transform duration-700"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Offers;
