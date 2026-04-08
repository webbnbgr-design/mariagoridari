import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Το Προφίλ μας</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-navy mb-8">Μαρία Γοριδάρη</h3>
            
            <div className="space-y-6 text-navy/70 leading-relaxed text-lg">
              <p>
                Με πολυετή εμπειρία στο χώρο της νομικής επιστήμης, η κ. Μαρία Γοριδάρη ίδρυσε το γραφείο στη Θεσσαλονίκη με όραμα την παροχή εξειδικευμένων νομικών υπηρεσιών που συνδυάζουν την επιστημονική αρτιότητα με την προσωπική ενασχόληση.
              </p>
              <p>
                Πιστεύουμε ότι κάθε υπόθεση είναι μοναδική. Γι' αυτό το λόγο, δίνουμε έμφαση στην άμεση επικοινωνία και την οικοδόμηση σχέσεων εμπιστοσύνης με τους εντολείς μας, διασφαλίζοντας ότι κάθε βήμα της διαδικασίας είναι κατανοητό και διαφανές.
              </p>
              <p className="font-serif italic text-navy/90">
                "Στόχος μας δεν είναι απλώς η διεκπεραίωση μιας υπόθεσης, αλλά η εξεύρεση της βέλτιστης λύσης που θα προσφέρει ηρεμία και ασφάλεια στον πελάτη μας."
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-navy font-bold mb-2">Εξειδίκευση</h4>
                <p className="text-sm text-navy/60">Συνταξιοδοτικά & Αστικό Δίκαιο</p>
              </div>
              <div>
                <h4 className="text-navy font-bold mb-2">Πιστοποίηση</h4>
                <p className="text-sm text-navy/60">Διαπιστευμένη Διαμεσολαβήτρια</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
