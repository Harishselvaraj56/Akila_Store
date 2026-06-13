import { MessageCircle, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand */}
          <div>
            <a href="#home" className="text-2xl font-display font-bold text-white tracking-tight block mb-6">
              Akila<span className="text-primary">Store</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium groceries delivered fresh. Your trusted neighbourhood store for all daily essentials.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Column 3: Store Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6">Store Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Monday – Sunday</span>
                <span className="text-white">7:00 AM – 9:00 PM</span>
              </li>
              <li className="mt-4 pt-4 border-t border-gray-800">
                <span className="inline-block px-2 py-1 bg-green-900/50 text-green-400 text-xs font-semibold rounded">
                  Open Every Day
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="https://wa.me/919344384078" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageCircle size={18} />
                  <span>+91 9344384078</span>
                </a>
              </li>
              <li>
                <a href="tel:+919344384078" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={18} />
                  <span>Call Store</span>
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/U7UfcYZcNmEsTuui8" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors">
                  <MapPin size={18} className="shrink-0" />
                  <span>Vallioor, Tamil Nadu, India</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Akila Store. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
