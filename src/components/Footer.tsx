
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand to-brand-light rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">📦</span>
              </div>
              <span className="font-aclonica text-2xl text-white font-bold">InTheBox</span>
            </div>
            <p className="font-lato text-gray-300 mb-4 max-w-md">
              Packaging that speaks before the product does. We create unique unboxing experiences 
              that elevate your brand and delight your customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-brand transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block font-lato text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block font-lato text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="block font-lato text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link to="/contact" className="block font-lato text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Services</h3>
            <div className="space-y-2">
              <p className="font-lato text-gray-300">Packaging Design</p>
              <p className="font-lato text-gray-300">Rebranding</p>
              <p className="font-lato text-gray-300">Custom Boxes</p>
              <p className="font-lato text-gray-300">Consulting</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-lato text-gray-400">
            © 2024 InTheBox. All rights reserved. Packaging that speaks before the product does.
          </p>
        </div>
      </div>
    </footer>
  );
};
