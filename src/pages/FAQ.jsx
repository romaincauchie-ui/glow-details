import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqCategories = [
  {
    category: 'Le detailing',
    questions: [
      { q: "Qu'est-ce que le detailing automobile ?", a: "Le detailing automobile est un ensemble de techniques professionnelles visant à nettoyer, corriger et protéger un véhicule en profondeur. Contrairement à un simple lavage, le detailing traite chaque élément du véhicule avec précision afin de restaurer son apparence et préserver son état dans le temps." },
      { q: "Quelle est la différence entre un lavage classique et le detailing ?", a: "Un lavage classique enlève principalement la saleté visible. Le detailing va beaucoup plus loin : il comprend un nettoyage minutieux, la décontamination de la peinture, le polissage pour corriger les défauts et l'application de protections durables." },
      { q: "Pourquoi faire un detailing sur sa voiture ?", a: "Le detailing permet de restaurer l'apparence du véhicule, protéger la peinture et préserver sa valeur dans le temps. C'est également une excellente solution pour redonner de l'éclat à une voiture ou préparer un véhicule à la vente." },
      { q: "Peut-on faire un detailing sur une voiture neuve ?", a: "Oui, et c'est même recommandé. Un detailing sur un véhicule neuf permet de corriger les micro-défauts d'usine et d'appliquer une protection durable dès le départ." },
      { q: "Le detailing augmente-t-il la valeur d'un véhicule ?", a: "Oui. Un véhicule bien entretenu, avec une peinture corrigée et protégée, conserve un meilleur aspect esthétique et une valeur de revente plus élevée." },
      { q: "À quelle fréquence faut-il faire un detailing ?", a: "Cela dépend de l'utilisation du véhicule et de son entretien. Un entretien régulier permet de maintenir la propreté, la brillance et la protection du véhicule tout au long de l'année." },
      { q: "Combien de temps dure une prestation de detailing ?", a: "La durée dépend du service réalisé. Un nettoyage complet peut prendre plusieurs heures, tandis qu'un polissage ou un traitement céramique peut nécessiter un ou plusieurs jours de travail afin d'obtenir un résultat optimal." },
    ]
  },
  {
    category: 'Service à domicile',
    questions: [
      { q: "Vous déplacez-vous à domicile ?", a: "Oui, Glow & Details se déplace directement à votre domicile ou sur votre lieu de travail pour effectuer les prestations. Nous sommes situés entre Charleroi et Nivelles et intervenons partout dans la province du Hainaut, le Brabant wallon et la province de Namur. Le déplacement est offert dans un rayon de 25km (0,60€/km au-delà)." },
      { q: "Dois-je fournir quelque chose moi-même ?", a: "Pour nettoyer votre véhicule à la maison, nous ne demandons que l'accès à l'eau et à l'électricité. Nous apportons nous-mêmes tout le matériel, les produits et les outils. Vous n'avez donc rien à préparer." },
      { q: "Le service de detailing mobile est-il sans danger pour ma peinture ?", a: "Oui, notre service de detailing mobile est totalement sûr. Nous travaillons avec des shampooings au pH neutre, des méthodes de lavage sûres, des microfibres professionnelles et des produits adaptés. Contrairement aux lave-autos automatiques, notre service évite les micro-rayures, tourbillons et dommages aux matériaux sensibles." },
    ]
  },
  {
    category: 'Polissage',
    questions: [
      { q: "Combien de temps dure un polissage ?", a: "Le polissage en 1 étape prend généralement entre 5 et 6 heures. Le polissage en 2 étapes nécessite entre 10 et 14 heures (1 à 2 jours). Le polissage en 3 étapes peut nécessiter jusqu'à 3 jours de travail. Chaque véhicule étant différent, le temps peut varier selon l'état de la peinture." },
      { q: "Toutes les rayures peuvent-elles être éliminées ?", a: "Lors d'un polissage, notre objectif est d'éliminer le maximum de défauts présents dans la peinture. Avec un polissage en plusieurs étapes, une grande partie des imperfections peut être fortement réduite, voire complètement supprimée. Cependant, certaines rayures profondes peuvent être plus difficiles à corriger sans intervention de peinture." },
    ]
  },
  {
    category: 'Revêtement céramique',
    questions: [
      { q: "Qu'est-ce qu'un traitement céramique ?", a: "Un traitement céramique est une protection durable appliquée sur la peinture du véhicule. Il forme une couche protectrice invisible qui protège la carrosserie contre les agressions extérieures tout en apportant brillance, profondeur et effet hydrophobe." },
      { q: "Combien de temps dure un traitement céramique ?", a: "La durée dépend du type de revêtement appliqué et de l'entretien du véhicule. En moyenne, un traitement céramique peut offrir une protection de plusieurs années lorsqu'il est correctement entretenu." },
      { q: "Le traitement céramique protège-t-il contre les rayures ?", a: "Un revêtement céramique ne rend pas la peinture totalement résistante aux rayures. En revanche, il peut réduire l'apparition de micro-rayures et des marques de lavage, tout en apportant une protection supplémentaire à la peinture." },
      { q: "Est-ce que la voiture restera propre plus longtemps ?", a: "Oui. Grâce à son effet hydrophobe, l'eau, la poussière et les saletés adhèrent beaucoup moins à la surface. Le véhicule se salit donc moins vite et le lavage devient plus simple et plus rapide." },
      { q: "Faut-il polir la voiture avant un traitement céramique ?", a: "Dans la majorité des cas, oui. Avant l'application du revêtement, la peinture est lavée, décontaminée et souvent polie afin d'éliminer les défauts et de préparer la surface. Cela permet d'obtenir un résultat optimal et durable." },
    ]
  },
  {
    category: 'Vitres teintées',
    questions: [
      { q: "Les vitres teintées sont-elles légales ?", a: "Oui, mais certaines règles doivent être respectées. En Belgique, les vitres avant doivent laisser passer suffisamment de lumière afin de garantir la visibilité du conducteur. Les vitres arrière peuvent généralement être plus foncées. Nous vous conseillons toujours une solution conforme à la législation." },
      { q: "Combien de temps dure la pose ?", a: "La pose de vitres teintées prend généralement entre 2 et 4 heures, selon le véhicule et le nombre de vitres à traiter." },
      { q: "Combien de temps faut-il attendre avant de baisser les vitres ?", a: "Après la pose, il est recommandé d'attendre environ 48 heures avant de baisser les vitres afin de permettre au film d'adhérer correctement." },
      { q: "Les films teintés peuvent-ils se décoller avec le temps ?", a: "Non, lorsque les films sont posés correctement avec des produits de qualité, ils sont conçus pour durer de nombreuses années sans se décoller ni se décolorer. Nos films sont garantis à vie." },
      { q: "Les vitres teintées réduisent-elles vraiment la chaleur ?", a: "Oui. Les films solaires permettent de réduire significativement la chaleur dans l'habitacle, ce qui améliore le confort de conduite, surtout en été." },
    ]
  },
  {
    category: 'Informations générales',
    questions: [
      { q: "Dois-je prendre rendez-vous ?", a: "Oui. Les prestations de detailing demandent du temps et de la précision. Les services sont donc réalisés uniquement sur rendez-vous afin de garantir un travail de qualité pour chaque véhicule." },
      { q: "Travaillez-vous sur tous types de véhicules ?", a: "Oui. Les prestations peuvent être réalisées sur tous types de véhicules : citadines, berlines, SUV, voitures de sport ou véhicules utilitaires." },
      { q: "Est-ce que le detailing protège la peinture ?", a: "Oui. Certaines prestations comme le polissage, la cire ou le traitement céramique permettent de protéger la peinture contre les agressions extérieures telles que les UV, la pollution ou les contaminants routiers." },
    ]
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left gap-4 group">
        <span className={`text-sm font-medium transition-colors ${open ? 'text-cyan' : 'text-[#0d1117]/80 group-hover:text-[#0d1117]'}`}>
          {question}
        </span>
        <ChevronDown size={16} className={`text-cyan flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="text-sm leading-relaxed pb-5 text-[#0d1117]/55">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="bg-white text-[#0d1117]">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/d2524d64a_Export_GlowDetails-47copie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Besoin d'informations</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">FAQ</h1>
        </div>
      </section>

      {/* Category tabs */}
      <div className="bg-white py-8 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3">
          {faqCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`text-xs tracking-widest uppercase font-semibold px-4 py-2 border transition-all duration-200 ${
                activeCategory === i
                  ? 'bg-cyan text-[#0d1117] border-cyan'
                  : 'border-gray-300 text-[#0d1117]/50 hover:border-cyan/60 hover:text-[#0d1117]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Questions */}
      <motion.section
        key={activeCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="py-16 px-6 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat font-bold text-2xl mb-8 text-[#0d1117]">
            {faqCategories[activeCategory].category}
          </h2>
          <div>
            {faqCategories[activeCategory].questions.map((item, i) => (
              <FAQItem key={i} question={item.q} answer={item.a} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 border border-gray-200 bg-gray-50 p-8 text-center rounded-2xl">
            <h3 className="font-bold text-lg mb-3 text-[#0d1117]">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-sm mb-6 text-[#0d1117]/55">N'hésitez pas à nous contacter directement, nous vous répondrons dans les plus brefs délais.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-cyan text-[#0d1117] px-7 py-3 text-xs tracking-[0.15em] font-black uppercase hover:bg-cyan/80 transition-colors group rounded-xl">
              Nous contacter <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}