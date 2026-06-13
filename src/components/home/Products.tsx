import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Fresh Vegetables',
    desc: 'Farm-picked daily leafy greens, roots & gourds.',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Fresh Fruits',
    desc: 'Seasonal & tropical fruits sourced from the finest farms.',
    img: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Rice & Grains',
    desc: 'Premium quality rice, pulses, lentils & whole grains.',
    img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Dairy Products',
    desc: 'Fresh milk, curd, paneer, butter & daily essentials.',
    img: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Snacks & Beverages',
    desc: 'Branded snacks, juices, soft drinks & more.',
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Household Care',
    desc: 'Cleaning supplies, detergents & home care.',
    img: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Personal Care',
    desc: 'Soaps, shampoos, skincare and hygiene products.',
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Daily Needs',
    desc: 'Eggs, bread, noodles & everything for busy days.',
    img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600',
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Available Today
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our wide range of daily essentials, restocked every morning for maximum freshness.
          </p>
        </motion.div>

        {/* 8 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{cat.desc}</p>
                <a 
                  href="https://wa.me/919344384078" 
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-semibold text-sm group-hover:text-primary-dark transition-colors"
                >
                  Order Now <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
