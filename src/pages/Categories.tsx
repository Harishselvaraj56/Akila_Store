import { Helmet } from 'react-helmet-async';
import { motion, type Variants } from 'framer-motion';
import PageTransition from '../components/layout/PageTransition';
import { ArrowRight } from 'lucide-react';

const categories = [
  { name: 'Fresh Vegetables', img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800' },
  { name: 'Fresh Fruits', img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800' },
  { name: 'Rice & Grains', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Dairy Products', img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=800' },
  { name: 'Snacks & Beverages', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800' },
  { name: 'Household Essentials', img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Personal Care', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800' },
  { name: 'Daily Needs', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=800' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Categories = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Shop Categories | Akila Store</title>
        <meta name="description" content="Explore our wide range of premium categories from fresh vegetables to household essentials." />
      </Helmet>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-extrabold text-dark tracking-tight mb-6"
            >
              Shop by <span className="text-gradient">Category</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-500 max-w-2xl mx-auto"
            >
              Discover premium quality products handpicked for your daily needs.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {categories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group h-full">
                <div className="relative h-80 rounded-[2rem] overflow-hidden glass p-2 border border-white/40 shadow-sm transition-all duration-500 hover:shadow-[0_0_40px_rgba(46,204,113,0.3)] hover:-translate-y-2 hover:border-primary/50 cursor-pointer">
                  
                  <div className="absolute inset-2 rounded-[1.5rem] overflow-hidden">
                    <img 
                      src={category.img} 
                      alt={category.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent"></div>
                  </div>

                  <div className="absolute inset-x-6 bottom-8 z-10 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">{category.name}</h3>
                    
                    <button className="flex items-center gap-2 text-primary font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore 
                      <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Categories;
