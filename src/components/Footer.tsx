export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-paper border-t border-navy/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-serif font-bold tracking-tight text-navy">
              ΓΟΡΙΔΑΡΗ ΜΑΡΙΑ
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
              & ΣΥΝΕΡΓΑΤΕΣ • ΔΙΚΗΓΟΡΙΚΟ ΓΡΑΦΕΙΟ
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium text-navy/60">
            <a href="#" className="hover:text-gold transition-colors">Αρχική</a>
            <a href="#services" className="hover:text-gold transition-colors">Υπηρεσίες</a>
            <a href="#about" className="hover:text-gold transition-colors">Προφίλ</a>
            <a href="#contact" className="hover:text-gold transition-colors">Επικοινωνία</a>
          </div>
          
          <div className="text-sm text-navy/40">
            © {currentYear} • Σχεδιασμός & Ανάπτυξη
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-navy/5 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-navy/30 font-bold">
            ΔΙΚΗΓΟΡΟΣ ΘΕΣΣΑΛΟΝΙΚΗ • ΕΚΔΟΣΗ ΣΥΝΤΑΞΕΩΝ • ΝΟΜΙΚΗ ΔΙΑΜΕΣΟΛΑΒΗΣΗ • ΑΚΙΝΗΤΑ ΚΤΗΜΑΤΟΛΟΓΙΟ
          </p>
        </div>
      </div>
    </footer>
  );
}
