import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#151515] text-white pt-20 pb-10 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary w-8 h-8 flex items-center justify-center rounded text-secondary font-bold text-xl">B</div>
              <span className="text-2xl font-heading font-bold tracking-tight">BUILD<span className="text-primary">MAX</span></span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We provide the best construction services for your dream projects. Quality, Safety, and Trust are our core values.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-primary hover:text-secondary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-primary hover:text-secondary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-primary hover:text-secondary transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-primary hover:text-secondary transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Company</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Recent Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Building Construction</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Architecture Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">House Renovation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interior Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fixing & Support</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get latest news and updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-800 border-none text-white px-4 py-3 w-full focus:ring-1 focus:ring-primary outline-none"
              />
              <button className="bg-primary text-secondary px-4 py-3 font-bold hover:bg-white transition-colors">
                <ArrowUp className="rotate-45" size={20} />
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BuildMax. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop} 
        className="absolute bottom-8 right-8 bg-primary text-secondary p-3 rounded shadow-lg hover:bg-white hover:text-secondary transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
