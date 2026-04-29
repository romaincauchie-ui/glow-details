import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const sections = [
  {
    label: 'Nettoyage',
    subtitle: 'Service mobile à domicile',
    note: 'Déplacement offert dans un rayon de 25km · 0,60€/km au-delà',
    categories: [
      {
        title: 'Entretien mensuel',
        price: 'À partir de 80€',
        items: ['Nettoyage extérieur', 'Aspiration intérieure', 'Traitement des plastiques', 'Vitres & écrans'],
        note: 'Citadine / Berline / SUV',
      },
      {
        title: 'Intérieur',
        price: 'À partir de 85€',
        items: ['Aspiration complète', 'Nettoyage tapis par extraction', 'Nettoyage des plastiques', 'Rénovation volant', 'Vitres & écrans'],
        note: 'Citadine / 95€ Berline / 110€ SUV',
      },
      {
        title: 'Rénovation habitacle',
        price: 'À partir de 160€',
        items: ['Nettoyage intérieur approfondi', 'Extraction sièges / nourrissage cuir', 'Traitement vapeur antibactérien', 'Neutralisation des odeurs'],
        note: '180€ Berline / 200€ SUV',
      },
      {
        title: 'Extérieur (lavage main)',
        price: 'À partir de 40€',
        items: ['Nettoyage jantes & passages de roues', 'Pré-lavage + lavage à la main', 'Séchage microfibre', 'Application cire', 'Finitions & contours de portes'],
        note: '50€ Berline / 60€ SUV',
      },
      {
        title: 'Formule complète',
        price: 'À partir de 120€',
        items: ['Intérieur + Extérieur complet', 'Contours de portes', 'Finitions soignées'],
        note: '140€ Berline / 160€ SUV',
        highlight: true,
      },
    ],
  },
  {
    label: 'Polissage',
    subtitle: 'Correction de peinture',
    note: null,
    categories: [
      {
        title: 'Polissage 1 étape',
        price: 'À partir de 300€',
        items: ['Lavage & décontamination', 'Correction micro-rayures légères', 'Rénovation plastiques extérieurs', 'Application scellant protecteur'],
        note: '5–6 heures de travail',
      },
      {
        title: 'Polissage 2 étapes',
        price: 'À partir de 500€',
        items: ['Lavage & décontamination', 'Correction micro-rayures & tourbillons', 'Polissage finition haute brillance', 'Application scellant protecteur'],
        note: '10–14 heures / 1–2 jours',
      },
      {
        title: 'Polissage 3 étapes',
        price: 'Sur devis',
        items: ['Lavage & décontamination', 'Correction intensive', 'Polissage intermédiaire', 'Polissage finition maximale', 'Application scellant protecteur'],
        note: 'Jusqu\'à 3 jours de travail',
      },
      {
        title: 'Polissage des phares',
        price: '45€ / phare',
        items: ['Élimination de l\'oxydation', 'Polissage clarté & transparence', 'Application protection durable'],
        note: 'Phares ternis ou jaunis',
      },
    ],
  },
  {
    label: 'Céramique',
    subtitle: 'Protection longue durée',
    note: null,
    categories: [
      {
        title: 'Véhicule neuf',
        price: 'À partir de 500€',
        items: ['Lavage & décontamination minutieuse', 'Préparation de surface optimale', 'Application revêtement céramique', 'Brillance intense + effet hydrophobe'],
        note: 'Véhicules neufs ou très récents',
      },
      {
        title: 'Véhicule d\'occasion',
        price: 'À partir de 1 100€',
        items: ['Polissage de correction inclus', 'Lavage & décontamination', 'Application revêtement céramique', 'Protection et brillance maximales'],
        note: 'Avec correction de peinture',
      },
      {
        title: 'Véhicule mat / PPF',
        price: 'À partir de 500€',
        items: ['Produits adaptés peinture mate', 'Préservation de l\'aspect d\'origine', 'Protection contre les contaminants', 'Facilitation de l\'entretien'],
        note: 'Peintures mates et films PPF',
      },
    ],
  },
  {
    label: 'Vitres teintées',
    subtitle: 'Pose professionnelle — Garantie à vie',
    note: 'Garantie à vie sur la pose · Film haute qualité',
    categories: [
      {
        title: 'Face arrière — 3 vitres',
        price: 'À partir de 180€',
        items: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'],
        note: null,
      },
      {
        title: 'Face arrière — 5 vitres',
        price: 'À partir de 200€',
        items: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'],
        note: null,
      },
      {
        title: 'Face arrière — 7 vitres',
        price: 'À partir de 240€',
        items: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'],
        note: null,
      },
    ],
    tints: [
      { pct: '95%', label: 'Très foncée' },
      { pct: '85%', label: 'Foncée' },
      { pct: '65%', label: 'Moyenne' },
      { pct: '30%', label: 'Légère' },
    ],
  },
];

const extras = [
  { label: 'Shampooing des sièges', price: '80€' },
  { label: 'Nettoyage toile décapotable', price: '40€' },
  { label: 'Compartiment moteur', price: '50€' },
  { label: 'Traitement pare-brise hydrophobe', price: '30€' },
  { label: 'Décontamination carrosserie', price: '30€' },
];

function PriceCard({ category, isLight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`rounded-2xl p-7 flex flex-col gap-4 border transition-all duration-300 ${
        category.highlight
          ? 'border-cyan bg-cyan/5'
          : isLight
          ? 'bg-white border-gray-200 hover:border-cyan/50 shadow-sm'
          : 'bg-card border-border hover:border-cyan/40'
      }`}
    >
      <div>
        <h3 className={`font-bold text-base mb-1 ${isLight ? 'text-[#0d1117]' : 'text-white'}`}>{category.title}</h3>
        <div className="text-2xl font-black text-cyan">{category.price}</div>
        {category.note && <p className={`text-xs mt-1 ${isLight ? 'text-[#0d1117]/40' : 'text-white/40'}`}>{category.note}</p>}
      </div>
      <ul className="space-y-2 flex-1">
        {category.items.map((f, i) => (
          <li key={i} className={`flex items-start gap-2 text-sm ${isLight ? 'text-[#0d1117]/60' : 'text-white/55'}`}>
            <Check size={13} className="text-cyan mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Tarifs() {
  return (
    <div className="bg-[#0d1117] text-foreground">

      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/ec8d947e0_Export_GlowDetails-45copie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Glow & Details</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">Tarifs</h1>
        </div>
      </section>

      {/* Sections — fond sombre uniforme, séparées par bordure */}
      {sections.map((section, idx) => (
          <section
            key={idx}
            className="px-6 py-24 bg-[#0d1117] border-t border-white/8"
          >
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">{section.subtitle}</p>
                <h2 className="font-montserrat font-bold mb-3 text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
                  {section.label}
                </h2>
                {section.note && (
                  <p className="text-sm border-l-2 border-cyan pl-4 italic text-white/50">{section.note}</p>
                )}
              </motion.div>

              <div className={`grid gap-6 ${
                section.categories.length <= 2 ? 'sm:grid-cols-2' :
                section.categories.length === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' :
                'sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {section.categories.map((cat, i) => (
                  <PriceCard key={i} category={cat} isLight={false} />
                ))}
              </div>

              {/* Teintes */}
              {section.tints && (
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {section.tints.map((t, i) => (
                    <div key={i} className="rounded-xl p-5 text-center border bg-card border-border">
                      <div className="text-2xl font-black text-cyan mb-1">{t.pct}</div>
                      <div className="text-sm font-semibold text-white">{t.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
      ))}

      {/* Options + Supercars — light */}
      <section className="px-6 py-24 bg-white rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-12">
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">À la carte</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>Options & Supercars</h2>
          </motion.div>

          {/* Supercars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}
            className="mb-8 rounded-2xl border border-cyan bg-cyan/5 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-cyan font-black text-xl tracking-widest uppercase mb-2">🏎️ Supercars</h3>
              <p className="text-[#0d1117]/55 text-sm">Traitement spécialisé pour les véhicules haut de gamme et de prestige</p>
            </div>
            <div className="text-center flex-shrink-0">
              <div className="text-[#0d1117] font-black text-2xl mb-1">Sur devis</div>
              <Link to="/contact" className="text-cyan text-xs tracking-widest uppercase hover:underline flex items-center gap-1">
                Nous contacter <ArrowRight size={11} />
              </Link>
            </div>
          </motion.div>

          {/* Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }} viewport={{ once: true }}
                className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-cyan/50 transition-colors shadow-sm"
              >
                <div className="flex items-center gap-3 text-sm text-[#0d1117]/75">
                  <span className="w-1.5 h-1.5 bg-cyan rounded-full flex-shrink-0" />
                  {opt.label}
                </div>
                <span className="text-cyan font-bold text-sm">{opt.price}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-[#0d1117]/35 mt-10">
            Tous nos prix s'entendent HTVA · Un supplément est applicable si le véhicule est particulièrement sale ou non vidé.
          </p>
        </div>
      </section>

      {/* CTA — dark */}
      <section className="py-28 px-6 bg-[#0d1117]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">Besoin d'un devis personnalisé ?</h2>
          <p className="text-white/45 mb-10 text-base leading-loose">Contactez-nous pour tout véhicule utilitaire, supercar ou besoin spécifique</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan text-[#0d1117] px-8 py-4 text-xs tracking-[0.15em] font-black uppercase hover:bg-cyan/80 transition-colors group rounded-xl">
            Demander un devis <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}