import { motion } from 'motion/react';
import { FileText, Home, Scale, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Συνταξιοδοτικά',
    description: 'Ολοκληρωμένη υποστήριξη για την έκδοση συντάξεων, καταμέτρηση ενσήμων και νομική καθοδήγηση σε ασφαλιστικά θέματα.',
    icon: FileText,
    features: ['Έκδοση Συντάξεων', 'Καταμέτρηση Ενσήμων', 'Αιτήσεις ΕΦΚΑ', 'Νομικές Συμβουλές'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Αστικό Δίκαιο & Ακίνητα',
    description: 'Εξειδίκευση σε αγοραπωλησίες ακινήτων, ελέγχους τίτλων στο Κτηματολόγιο και διαχείριση μισθώσεων.',
    icon: Home,
    features: ['Κτηματολόγιο', 'Αγοραπωλησίες', 'Μισθώσεις', 'Έλεγχος Τίτλων'],
    color: 'bg-gold/10',
    iconColor: 'text-gold'
  },
  {
    title: 'Διαμεσολάβηση',
    description: 'Εναλλακτική επίλυση διαφορών με στόχο την ταχύτερη και οικονομικότερη διευθέτηση νομικών ζητημάτων.',
    icon: Scale,
    features: ['Οικογενειακές Διαφορές', 'Εμπορικές Διαφορές', 'Εξωδικαστικός Συμβιβασμός', 'Πιστοποιημένη Διαμεσολάβηση'],
    color: 'bg-navy/5',
    iconColor: 'text-navy'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-gold uppercase mb-4">Εξειδικεύσεις</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-navy mb-6">Υπηρεσίες Υψηλού Επιπέδου</h3>
          <p className="text-navy/60 leading-relaxed">
            Παρέχουμε εξειδικευμένες νομικές συμβουλές και εκπροσώπηση, εστιάζοντας στις προσωπικές ανάγκες κάθε πελάτη με επαγγελματισμό και εχεμύθεια.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-8 rounded-3xl border border-navy/5 bg-paper hover:bg-white hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={service.iconColor} size={32} />
              </div>
              
              <h4 className="text-2xl font-serif text-navy mb-4">{service.title}</h4>
              <p className="text-navy/60 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-navy/80">
                    <CheckCircle2 size={16} className="text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
