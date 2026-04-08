import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-paper">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-navy/5 -skew-x-12 transform translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            ΘΕΣΣΑΛΟΝΙΚΗ
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif text-navy leading-[1.1] mb-6 text-balance">
            Νομική Υποστήριξη με <span className="italic">Ανθρώπινο</span> Πρόσωπο
          </h1>
          
          <p className="text-lg text-navy/70 mb-10 max-w-lg leading-relaxed">
            Εξειδικευμένες υπηρεσίες στην έκδοση συντάξεων, το αστικό δίκαιο και τη διαμεσολάβηση. Δεσμευόμαστε για την αποτελεσματική προάσπιση των συμφερόντων σας.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+302310555555"
              className="group flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gold transition-all duration-300 shadow-xl shadow-navy/20"
            >
              <Phone size={20} />
              <span>Κλείστε Ραντεβού</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-8 py-4 rounded-full text-lg font-medium text-navy border border-navy/20 hover:bg-navy/5 transition-colors"
            >
              Οι Υπηρεσίες μας
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-navy/10 pt-8">
            <div>
              <div className="text-2xl font-serif text-navy">20+</div>
              <div className="text-xs uppercase tracking-wider text-navy/50 font-bold">Χρόνια Εμπειρίας</div>
            </div>
            <div className="w-px h-8 bg-navy/10" />
            <div>
              <div className="text-2xl font-serif text-navy">1000+</div>
              <div className="text-xs uppercase tracking-wider text-navy/50 font-bold">Υποθέσεις</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
