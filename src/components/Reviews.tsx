import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Γιώργος Παπαδόπουλος',
    role: 'Συνταξιούχος',
    content: 'Εξαιρετική επαγγελματίας. Με βοήθησε στην έκδοση της σύνταξής μου γρήγορα και αποτελεσματικά, λύνοντας κάθε απορία μου.',
    rating: 5
  },
  {
    name: 'Ελένη Κωνσταντίνου',
    role: 'Ιδιοκτήτρια Ακινήτου',
    content: 'Άψογη συνεργασία στον έλεγχο τίτλων και τη μεταβίβαση του ακινήτου μου. Εμπιστοσύνη και συνέπεια σε όλα τα στάδια.',
    rating: 5
  },
  {
    name: 'Νίκος Δημητρίου',
    role: 'Επιχειρηματίας',
    content: 'Η διαμεσολάβηση ήταν η καλύτερη επιλογή για την επίλυση της διαφοράς μας. Η κ. Γοριδάρη ήταν καταλυτική στην εξεύρεση λύσης.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-navy text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Μαρτυρίες</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6">Τι Λένε οι Πελάτες μας</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-8 text-gold/20" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              
              <p className="text-white/80 mb-8 italic leading-relaxed">
                "{review.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full border border-white/10">
            <span className="text-gold font-bold">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-white/60 ml-2">Βασισμένο σε κριτικές Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
