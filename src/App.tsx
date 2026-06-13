import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import Testimonials from './components/home/Testimonials';
import WhatsAppCTA from './components/home/WhatsAppCTA';
import Contact from './components/home/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-white overflow-hidden">
      
      {/* Premium Background Grid */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none" />
      
      {/* Floating Gradient Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob z-0 pointer-events-none" />
      <div className="fixed top-[20%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-2000 z-0 pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-primary-light/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          <Hero />
          <Products />
          <Features />
          <Testimonials />
          <WhatsAppCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
