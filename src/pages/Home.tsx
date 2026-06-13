import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import PageTransition from '../components/layout/PageTransition';
import Testimonials from '../components/home/Testimonials';
import { Users, ShoppingBag, Award, Clock } from 'lucide-react';

// Count up animation component
const StatItem = ({ end, label, icon: Icon, suffix = '+' }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center p-6 glass rounded-2xl border border-white/20 hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
      <Icon size={32} />
    </div>
    <div className="text-4xl font-extrabold text-dark mb-2">
      {end}{suffix}
    </div>
    <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">{label}</div>
  </motion.div>
);

const Home = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Akila Store - Premium Neighborhood Supermarket</title>
        <meta name="description" content="Fresh groceries, vegetables, fruits, dairy products, household essentials and daily needs at affordable prices." />
      </Helmet>
      
      <Hero />
      <Testimonials />

      {/* Premium Statistics Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem end="5000" label="Happy Customers" icon={Users} />
            <StatItem end="1000" label="Products" icon={ShoppingBag} />
            <StatItem end="10" label="Years Service" icon={Award} />
            <StatItem end="300" label="Daily Visitors" icon={Clock} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
