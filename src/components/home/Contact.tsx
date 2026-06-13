import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="location" className="py-24 relative z-10">
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
            Visit Akila Store, Vallioor
          </h2>
          <p className="text-gray-600 text-lg">
            Conveniently located in Vallioor, serving the local community with fresh groceries and daily essentials.
          </p>
        </motion.div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
          >
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto text-[#25D366] mb-5 border border-green-100">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp Us</h3>
            <p className="text-gray-500 mb-4 text-sm">Send your list anytime.</p>
            <a href="https://wa.me/919344384078" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold text-sm hover:underline">
              +91 9344384078
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary mb-5 border border-primary/10">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-500 mb-4 text-sm">Speak with our friendly team.</p>
            <a href="tel:+919344384078" className="text-primary font-semibold text-sm hover:underline">
              +91 9344384078
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow"
          >
            <div className="w-14 h-14 bg-secondary/5 rounded-full flex items-center justify-center mx-auto text-secondary-dark mb-5 border border-secondary/20">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-500 mb-4 text-sm">Get directions to Akila Store.</p>
            <a href="https://maps.app.goo.gl/U7UfcYZcNmEsTuui8" target="_blank" rel="noopener noreferrer" className="text-secondary-dark font-semibold text-sm hover:underline">
              Open Google Maps
            </a>
          </motion.div>
        </div>

        {/* Map and Address */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1 bg-white/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">Akila Store</h3>
            <div className="text-gray-600 space-y-6 text-sm leading-relaxed mb-10">
              <div>
                <strong className="block text-gray-900 mb-1">Location:</strong>
                Vallioor, Tamil Nadu<br />
                India
              </div>
              <div>
                <strong className="block text-gray-900 mb-1">Store Timings:</strong>
                Monday – Sunday<br />
                7:00 AM – 9:00 PM<br />
                <span className="text-primary font-semibold mt-1 inline-block">Open Every Day for Your Convenience</span>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/U7UfcYZcNmEsTuui8"
              target="_blank" rel="noopener noreferrer"
              className="inline-block text-center w-full px-6 py-4 rounded-xl bg-gray-900 text-white font-semibold shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-colors"
            >
              Get Directions
            </motion.a>
          </div>
          <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden border border-gray-100 bg-gray-100 shadow-xl shadow-gray-200/40 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0689973216896!2d77.6105!3d8.3846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04c8c7f766e4cd%3A0xc6fb04212ed6d46a!2sVallioor%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Akila Store Location"
              className="absolute inset-0"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
