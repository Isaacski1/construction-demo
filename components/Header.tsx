import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Search,
} from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full z-40">
      {/* Top Bar - Hidden on mobile for cleaner look, similar to reference */}
      <div className="bg-primary py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-secondary font-medium text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail size={16} /> info@buildmax.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={16} /> +233 123 456 789
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-wider font-bold text-xs">
              Follow Us:
            </span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 bg-white shadow-md py-3"
            : "relative bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-primary w-10 h-10 flex items-center justify-center rounded text-secondary font-bold text-2xl">
                B
              </div>
              <span className="text-2xl font-heading font-bold text-secondary tracking-tight">
                BUILD<span className="text-primary">MAX</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary font-heading font-medium hover:text-primary transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <button className="text-secondary hover:text-primary transition-colors">
                <Search size={20} />
              </button>
              <a
                href="#quote"
                className="bg-primary text-secondary px-6 py-3 font-heading font-bold uppercase text-xs tracking-wider hover:bg-secondary hover:text-white transition-colors"
              >
                Get a Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-white pt-24 px-6 pb-6">
          <button
            className="absolute top-6 right-6 text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary font-heading font-bold text-xl uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="bg-primary text-secondary w-full text-center py-4 font-heading font-bold uppercase text-sm mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
