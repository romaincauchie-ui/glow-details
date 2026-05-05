import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceDetailModal from '../components/services/ServiceDetailModal';

const services = [
{
  id: 'domicile',
  label: 'Nettoyage à domicile',
  subtitle: 'Service mobile professionnel',
  description: "Vous n'avez pas le temps de laver ou d'entretenir votre véhicule vous-même ? Avec mon service de detailing mobile, je transforme votre véhicule devant votre porte, en m'adaptant à votre agenda. Qu'il s'agisse d'une voiture familiale, d'une voiture de société ou d'une voiture de luxe, je veille à ce que votre véhicule soit à nouveau propre, entretenu et protégé.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/6726ed067_Export_GlowDetails-16copie.jpg',
  extraImages: [
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/8c7a9189f_Servicemobile2.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/08cdd00f6_Export_GlowDetails-46copie.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/cfd7d8212_Export_GlowDetails-39copie.jpg',
  ],
  items: [
  { name: 'Entretien mensuel', price: 'À partir de 100€', features: ['Nettoyage extérieur', 'Aspiration intérieure', 'Traitement des plastiques', 'Vitres & écrans'] },
  { name: 'Intérieur + extérieur', price: 'À partir de 120€', features: ['Nettoyage complet extérieur', 'Nettoyage complet intérieur', 'Contours de portes', 'Finitions soignées'] }],

  note: 'Déplacement offert dans un rayon de 25km (0,60€/km au-delà)'
},
{
  id: 'interieur',
  label: 'Intérieur',
  subtitle: 'Nettoyage en profondeur',
  description: "Je redonne à votre habitacle toute sa propreté et sa fraîcheur. Sièges, tapis, moquettes, plastiques et zones difficiles d'accès. Chaque surface est traitée avec précision et des produits adaptés pour éliminer poussières, taches et impuretés. Votre intérieur ressort propre, sain et parfaitement entretenu.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/d7611521e_Interieur1.jpg',
  extraImages: [
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/a4385a2c9_Interieur2paysage.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/754f6dc0f_Interieur3.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/86d4128f1_Interieur4.jpg',
  ],
  items: [
  {
    name: 'Nettoyage intérieur', price: 'À partir de 85€',
    features: ['Aspiration complète', 'Nettoyage par extraction des tapis', 'Nettoyage des plastiques', 'Rénovation volant', 'Vitres & écrans', 'Contours de portes']
  },
  {
    name: 'Rénovation habitacle', price: 'À partir de 160€',
    features: ['Nettoyage intérieur approfondi', 'Extraction des sièges en tissus / nourrissage cuir', 'Traitement vapeur antibactérien', 'Neutralisation des odeurs']
  }],

  note: 'En cas de pollution grave ou présence de poils d\'animaux, des frais supplémentaires peuvent s\'appliquer.'
},
{
  id: 'exterieur',
  label: 'Extérieur',
  subtitle: 'Lavage à la main premium',
  description: "Je nettoie l'extérieur de votre véhicule selon des méthodes de lavage professionnelles permettant de nettoyer la carrosserie en profondeur tout en respectant les surfaces les plus sensibles. Chaque élément du véhicule est soigneusement traité afin d'éliminer le film routier, la saleté et les contaminants accumulés. Ce travail minutieux permet de restaurer la brillance naturelle du véhicule et d'obtenir une finition nette et soignée dans les moindres détails.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/ecb6bfc61_Exterieur1.jpg',
  extraImages: [
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/ecb6bfc61_Exterieur1.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/3a87955ff_Exterieur2.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/482f7d522_Traitementhydrophobepare-brise.jpg',
  ],
  items: [
  {
    name: 'Lavage à la main premium', price: 'À partir de 40€',
    features: ['Nettoyage en profondeur des jantes', 'Nettoyage des passages de roues', 'Pré-lavage', 'Lavage à la main', 'Séchage microfibre', 'Application d\'une cire', 'Finitions & contours de portes']
  }],

  options: ['Compartiment moteur — 50€', 'Traitement pare-brise hydrophobe — 30€', 'Décontamination carrosserie — 30€']
},
{
  id: 'polissage',
  label: 'Polissage',
  subtitle: 'Correction de peinture',
  description: "Le polissage est la solution idéale pour redonner toute sa brillance à votre véhicule. Ce procédé technique permet de corriger les défauts présents dans le vernis afin de restaurer la profondeur, la clarté et l'éclat de la carrosserie.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/1272a9209_Polissage.jpg',
  items: [
  {
    name: 'Polissage 1 étape', price: 'À partir de 300€',
    features: ['Lavage & décontamination complète', 'Polissage 1 étape (micro-rayures légères)', 'Rénovation plastiques extérieurs', 'Application d\'un scellant protecteur'],
    ideal: 'Véhicules neufs ou récents, légères micro-rayures'
  },
  {
    name: 'Polissage 2 étapes', price: 'À partir de 500€',
    features: ['Lavage & décontamination complète', 'Étape 1 : correction micro-rayures & tourbillons', 'Étape 2 : polissage de finition brillance profonde', 'Application d\'un scellant protecteur'],
    ideal: 'Véhicules avec peinture ternie, préparation vente'
  },
  {
    name: 'Polissage 3 étapes', price: 'Sur devis',
    features: ['Lavage & décontamination complète', 'Étape 1 : correction intensive', 'Étape 2 : polissage intermédiaire', 'Étape 3 : polissage de finition maximale', 'Application d\'un scellant protecteur'],
    ideal: 'Restauration intensive, showroom, vente premium'
  },
  {
    name: 'Polissage des phares', price: '45€/phare',
    features: ['Élimination de l\'oxydation', 'Polissage clarté & transparence', 'Application d\'une protection durable'],
    ideal: 'Phares ternis ou jaunis'
  }]

},
{
  id: 'ceramique',
  label: 'Revêtement céramique',
  subtitle: 'Protection longue durée',
  description: "Un revêtement céramique forme une barrière durable contre les agressions extérieures tout en améliorant la brillance et la profondeur de votre peinture. Un investissement durable pour votre véhicule.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/07299290e_Ceramique1.jpg',
  extraImages: [
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/438a3eee5_Ceramique2paysage.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/07d443c4a_Ceramique3.jpg',
    'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/84f5b423f_Ceramique4.jpg',
  ],
  items: [
  {
    name: 'Véhicule neuf', price: 'À partir de 800€',
    features: ['Lavage & décontamination minutieuse', 'Préparation de surface optimale', 'Application revêtement céramique', 'Brillance intense + effet hydrophobe'],
    ideal: 'Véhicules neufs ou très récents'
  },
  {
    name: 'Véhicule d\'occasion', price: 'À partir de 1 100€',
    features: ['Polissage de correction inclus', 'Lavage & décontamination', 'Application revêtement céramique', 'Protection et brillance maximales'],
    ideal: 'Véhicules avec micro-rayures ou perte de brillance'
  },
  {
    name: 'Véhicule mat / PPF', price: 'À partir de 800€',
    features: ['Produits adaptés peinture mate', 'Préservation de l\'aspect d\'origine', 'Protection contre les contaminants', 'Facilitation de l\'entretien'],
    ideal: 'Peintures mates et films de protection PPF'
  }]

},
{
  id: 'vitres',
  label: 'Vitres teintées',
  subtitle: 'Pose professionnelle — Garantie à vie',
  description: "La pose de vitres teintées améliore à la fois le confort, la protection et l'esthétique de votre véhicule. Des films de haute qualité, appliqués avec précision, assurent un rendu irréprochable et durable.",
  image: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/04ad1cf9d_Vitresteintees1.jpg',
  items: [
  { name: 'Face arrière — 3 vitres', price: 'À partir de 180€', features: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'] },
  { name: 'Face arrière — 5 vitres', price: 'À partir de 200€', features: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'] },
  { name: 'Face arrière — 7 vitres', price: 'À partir de 240€', features: ['Découpe sur mesure', 'Application sans bulles', 'Garantie à vie'] }],

  tints: [
  { pct: '95%', label: 'Très foncée', desc: 'Maximum d\'intimité et de protection solaire' },
  { pct: '85%', label: 'Foncée', desc: 'Très populaire, discrétion et protection efficace' },
  { pct: '65%', label: 'Moyenne', desc: 'Compromis esthétique et visibilité' },
  { pct: '30%', label: 'Légère', desc: 'Effet discret avec grande transparence' }],

  note: 'La pose de films teintés est garantie à vie.'
}];


export default function Services() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="bg-[#0d1117] text-foreground">
      <ServiceDetailModal
        serviceId={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        isLight={services.find((s) => s.id === selectedService) && services.findIndex((s) => s.id === selectedService) % 2 !== 0} />
      
      {/* Hero — dark */}
      <section className="relative h-64 sm:h-80 flex items-end pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/e4f0533ad_Export_GlowDetails-26copie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Glow & Details</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">Nos Services</h1>
        </div>
      </section>

      {/* Nav anchors */}
      <div className="z-40 bg-[#0d1117] border-b border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 py-3">
          {services.map((s) =>
          <a key={s.id} href={`#${s.id}`}
          className="text-xs tracking-widest uppercase text-white/50 hover:text-cyan transition-colors whitespace-nowrap font-semibold py-1">
              {s.label}
            </a>
          )}
        </div>
      </div>

      {/* Services sections — fond sombre uniforme, séparées par bordure */}
      {services.map((service, idx) => {
        const flip = idx % 2 !== 0;
        return (
          <section
            key={service.id}
            id={service.id}
            className="px-6 py-16 bg-[#0d1117] border-t border-white/8">

            <div className="max-w-6xl mx-auto">
              <div className={`grid lg:grid-cols-2 gap-20 items-center mb-20 ${flip ? 'lg:grid-flow-col' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: flip ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={flip ? 'lg:order-2' : ''}>
                  
                  <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <h2 className="font-montserrat font-bold mb-6 leading-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                    {service.label}
                  </h2>
                  <p className="text-base leading-loose mb-8 text-white/55">
                    {service.description}
                  </p>
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold tracking-widest uppercase hover:gap-3 transition-all group mb-8 bg-cyan/20 border border-cyan text-cyan hover:bg-cyan/30">
                    En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  {service.note &&
                  <div className="border-l-2 border-cyan pl-5 py-1 text-sm text-cyan/80 italic">{service.note}</div>
                  }
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: flip ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative ${flip ? 'lg:order-1' : ''}`}>
                  
                  <img src={service.image} alt={service.label} className="w-full aspect-[4/3] object-cover rounded-2xl" />
                  {service.extraImages && (
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {service.extraImages.map((img, i) => (
                        <img key={i} src={img} alt="" className="w-full aspect-square object-cover rounded-xl" />
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Cards */}
              <div className={`grid gap-8 ${service.items.length === 1 ? 'md:grid-cols-1 max-w-md' : service.items.length === 2 ? 'md:grid-cols-2' : service.items.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
                {service.items.map((item, i) => null
























                )}
              </div>

              {/* Options */}
              











              


            </div>
          </section>);

      })}

      {/* CTA — dark */}
      <section className="py-28 px-6 bg-[#0d1117] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-white mb-4">Demandez un devis gratuit</h2>
          <p className="text-white/45 mb-10 text-base leading-loose">Uniquement sur rendez-vous · Tous les tarifs s'entendent TTC</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan text-[#0d1117] px-8 py-4 text-xs tracking-[0.15em] font-black uppercase hover:bg-cyan/80 transition-colors group rounded-xl">
            Contact <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>);

}