import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Προφίλ', href: '#about' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col">
          <span className={cn(
            'text-xl font-serif font-bold tracking-tight transition-colors',
            isScrolled ? 'text-navy' : 'text-navy'
          )}>
            ΓΟΡΙΔΑΡΗ ΜΑΡΙΑ
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
            & ΣΥΝΕΡΓΑΤΕΣ • ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-navy hover:text-gold transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+302310555555"
            className="flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold transition-all duration-300 shadow-lg shadow-navy/10"
          >
            <Phone size={16} />
            <span>ΚΛΗΣΗ</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-navy border-b border-gray-50 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+302310555555"
                className="flex items-center justify-center gap-2 bg-navy text-white py-4 rounded-xl text-lg font-medium"
              >
                <Phone size={20} />
                <span>Επικοινωνήστε Τώρα</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
