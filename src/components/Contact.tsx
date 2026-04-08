import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Επικοινωνία</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy mb-8">Είμαστε στη Διάθεσή σας</h3>
            
            <p className="text-navy/60 mb-12 text-lg leading-relaxed">
              Επισκεφθείτε μας στα γραφεία μας στη Θεσσαλονίκη ή επικοινωνήστε μαζί μας τηλεφωνικά για να προγραμματίσουμε μια συνάντηση.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Διεύθυνση</h4>
                  <p className="text-navy/60">Φράγκων 1 & Πολυτεχνείου 51, Θεσσαλονίκη</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Τηλέφωνα</h4>
                  <p className="text-navy/60">Σταθερό: 2310 555555</p>
                  <p className="text-navy/60">Κινητό: 6900 000000</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-navy" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Ωράριο Λειτουργίας</h4>
                  <p className="text-navy/60">Δευτέρα - Παρασκευή: 09:00 - 20:00</p>
                  <p className="text-navy/60">Σάββατο: Κατόπιν Ραντεβού</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-paper rounded-2xl border border-gold/20">
              <h4 className="font-serif text-xl text-navy mb-2">Χρειάζεστε άμεση βοήθεια;</h4>
              <p className="text-navy/60 text-sm mb-4">Καλέστε μας τώρα για μια πρώτη εκτίμηση της υπόθεσής σας.</p>
              <a href="tel:+302310555555" className="text-gold font-bold text-lg hover:underline">
                +30 2310 555555
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-paper relative"
          >
            {/* Map Placeholder - In a real app, use Google Maps Embed */}
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center p-12 text-center">
              <MapPin size={48} className="text-gold mb-4 opacity-20" />
              <p className="text-navy/40 font-medium">
                Εδώ θα εμφανίζεται ο χάρτης Google Maps<br/>
                (Φράγκων 1, Θεσσαλονίκη)
              </p>
              <div className="mt-8 w-full h-full bg-navy/5 rounded-xl border border-navy/10 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map View" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
