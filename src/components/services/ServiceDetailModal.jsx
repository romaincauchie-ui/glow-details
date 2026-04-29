import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const serviceDetails = {
  domicile: {
    title: 'Nettoyage à domicile',
    subtitle: 'Service mobile professionnel',
    sections: [
      {
        heading: 'Faites nettoyer votre véhicule à la maison',
        content: 'Vous n\'avez pas le temps de laver ou d\'entretenir votre véhicule vous-même ? Avec notre service de detailing mobile, nous transformons votre véhicule devant votre porte, en nous adaptant à votre agenda. Qu\'il s\'agisse d\'une voiture familiale quotidienne, d\'une voiture de société ou d\'une voiture de luxe, nous veillons à ce que votre véhicule soit à nouveau propre, entretenue et protégée.'
      },
      {
        heading: 'Que faisons-nous exactement ?',
        content: 'Avec notre service de detailing mobile, nous venons à votre domicile et donnons à votre véhicule un nettoyage professionnel - à l\'intérieur et à l\'extérieur. Selon l\'état du véhicule, vous choisissez un entretien ou un nettoyage en profondeur.'
      },
      {
        heading: 'Plan d\'entretien',
        content: 'Pour nos clients qui choisissent la commodité et le confort, nous élaborons un plan d\'entretien avantageux et personnalisé pour toujours garder le véhicule en parfait état. Que vous souhaitiez faire nettoyer votre véhicule toutes les deux semaines, tous les mois ou tous les deux mois à la maison, nous verrons ensemble ce qui fonctionne le mieux pour vous.'
      },
      {
        heading: 'FAQ',
        faqs: [
          {
            q: 'Qu\'est-ce qu\'un service de detailing mobile signifie exactement ?',
            a: 'Le nettoyage de véhicule à domicile signifie que nous nettoyons entièrement votre voiture sur place, sans que vous ayez à vous déplacer. Nous venons à votre domicile, votre travail ou votre entreprise avec du matériel professionnel, et effectuons un nettoyage extérieur et/ou intérieur en profondeur.'
          },
          {
            q: 'Dois-je fournir quelque chose moi-même ?',
            a: 'Pour nettoyer votre véhicule à la maison, nous ne demandons que l\'accès à l\'eau et à l\'électricité. Nous apportons nous-mêmes tout le matériel, les produits et les outils. Vous n\'avez donc rien à préparer - nous faisons le reste.'
          },
          {
            q: 'Le service de detailing mobile est-il sans danger pour ma peinture et mon intérieur ?',
            a: 'Oui, notre service de detailing mobile est totalement sûr. Nous travaillons avec des shampooings au pH neutre, des méthodes de lavage sûres, des microfibres professionnelles et des produits adaptés à la peinture et à l\'intérieur. Contrairement aux lave-autos automatiques, notre service évite les micro-rayures, les tourbillons et les dommages aux matériaux sensibles. Le résultat est un nettoyage plus propre, plus sûr et plus durable de votre véhicule.'
          },
          {
            q: 'Pourquoi choisir le service de detailing mobile ?',
            a: 'Un service de detailing mobile combine commodité, qualité et soins professionnels de votre véhicule. Au lieu de perdre du temps avec des déplacements ou des temps d\'attente, votre voiture est simplement nettoyée chez vous ou au travail. Le service de detailing à domicile est idéal pour les personnes qui ont peu de temps, veulent faire nettoyer leur véhicule de manière professionnelle, n\'ont pas envie de passer par des carwash fréquentés, et attachent de l\'importance à un nettoyage sûr et sans rayures.'
          }
        ]
      }
    ]
  },
  interieur: {
    title: 'Nettoyage Intérieur',
    subtitle: 'Nettoyage en profondeur',
    sections: [
      {
        heading: 'Nettoyage Intérieur',
        content: 'Le nettoyage intérieur consiste à redonner à l\'habitacle toute sa propreté et sa fraîcheur. Les sièges, tapis, moquettes, plastiques et zones difficiles d\'accès sont nettoyés avec précision afin d\'éliminer poussières, taches et impuretés. Chaque surface est traitée avec des produits adaptés pour préserver les matériaux et retrouver un habitacle propre, sain et parfaitement entretenu.'
      },
      {
        heading: 'Services Inclus',
        list: [
          'Aspiration complète',
          'Nettoyage par extraction des tapis',
          'Nettoyage des plastiques',
          'Rénovation volant',
          'Vitres & écrans',
          'Contours de portes'
        ]
      },
      {
        heading: 'Rénovation Habitacle',
        list: [
          'Nettoyage intérieur approfondi',
          'Nettoyage par extraction des sièges en tissus ou nettoyage et nourrissage des sièges en cuir',
          'Traitement vapeur antibactérien',
          'Neutralisation des odeurs'
        ]
      },
      {
        heading: 'Note importante',
        content: 'En cas de pollution grave ou la présence de poils de chien/chat, des frais supplémentaires peuvent être facturés. Demandez un devis sans engagement en nous contactant par e-mail ou par téléphone.'
      }
    ]
  },
  exterieur: {
    title: 'Nettoyage Extérieur',
    subtitle: 'Lavage à la main premium',
    sections: [
      {
        heading: 'Lavage à la main premium',
        content: 'Le nettoyage extérieur est réalisé selon des méthodes de lavage professionnelles permettant de nettoyer la carrosserie en profondeur tout en respectant les surfaces les plus sensibles. Chaque élément du véhicule est soigneusement traité afin d\'éliminer le film routier, la saleté et les contaminants accumulés. Ce travail minutieux permet de restaurer la brillance naturelle du véhicule et d\'obtenir une finition nette et soignée dans les moindres détails.'
      },
      {
        heading: 'Services Inclus',
        list: [
          'Nettoyage en profondeur des jantes',
          'Nettoyage en profondeur des passages de roues',
          'Pré-lavage',
          'Lavage à la main',
          'Séchage',
          'Application d\'une cire',
          'Finitions & contours de portes'
        ]
      },
      {
        heading: 'Options Disponibles',
        list: [
          'Compartiment moteur - 50€',
          'Traitement pare-brise hydrophobe - 30€',
          'Décontamination carrosserie - 30€'
        ]
      },
      {
        heading: 'FAQ - Décontamination',
        content: 'Même après un lavage, de nombreuses impuretés restent incrustées dans la peinture. La décontamination permet d\'éliminer les particules métalliques, résidus de goudron, pollution routière, sève d\'arbres et autres contaminations invisibles qui altèrent l\'aspect et la douceur de la carrosserie. Grâce à ce processus, la surface retrouve une finition parfaitement lisse, préparant idéalement le véhicule pour un polissage ou l\'application d\'une protection. Nous recommandons une décontamination 1 à 2 fois par an.'
      },
      {
        heading: 'FAQ - Traitement hydrophobe pour le pare-brise',
        content: 'Le traitement hydrophobe pour pare-brise est une protection appliquée sur la surface du verre qui permet de repousser l\'eau et les impuretés. Grâce à ce traitement, l\'eau ne reste plus étalée sur le pare-brise mais forme des gouttes qui glissent facilement. À partir d\'une certaine vitesse, l\'eau est évacuée naturellement par le flux d\'air, ce qui améliore la visibilité par temps de pluie et réduit l\'utilisation des essuie-glaces. Ce traitement permet également de limiter l\'adhérence de la saleté et de faciliter l\'entretien du pare-brise comme notamment les traces d\'insectes.'
      }
    ]
  },
  polissage: {
    title: 'Polissage',
    subtitle: 'Correction de peinture',
    sections: [
      {
        heading: 'Pourquoi faire polir votre voiture ?',
        content: 'Avec le temps, la carrosserie d\'un véhicule perd de son éclat. Les micro-rayures, les traces de lavage et l\'usure générale peuvent ternir la peinture et diminuer l\'aspect esthétique de la voiture. Le polissage est la solution idéale pour redonner toute sa brillance à votre véhicule. Ce procédé technique permet de corriger les défauts présents dans le vernis, comme les micro-rayures ou la peinture ternie, afin de restaurer la profondeur, la clarté et l\'éclat de la carrosserie. Chez Glow & Details, chaque véhicule est soigneusement analysé afin d\'appliquer la correction la plus adaptée, allant d\'un simple rafraîchissement à une correction plus approfondie de la peinture. Grâce à l\'utilisation de produits haut de gamme, d\'un matériel professionnel et d\'un véritable savoir-faire technique, nous redonnons à votre carrosserie une finition proche du neuf.'
      },
      {
        heading: 'Polissage en 1 étape',
        content: 'Ce traitement est idéal pour les véhicules en bon état ou récents, présentant de légères micro-rayures ou un vernis légèrement terni. Le polissage en 1 étape permet de raviver la brillance et d\'améliorer l\'apparence générale de la carrosserie sans correction intensive. Ce service comprend: Lavage et décontamination complète de la carrosserie, Polissage en 1 étape pour réduire les micro-rayures et améliorer la brillance de la peinture, Nettoyage et rénovation des plastiques extérieurs, Inspection des phares (polissage possible en option), Application d\'un scellant pour protéger la peinture.'
      },
      {
        heading: 'Polissage en 2 étapes',
        content: 'Ce traitement s\'adresse aux véhicules présentant des micro-rayures, tourbillons ou défauts modérés dans la peinture. Le polissage en 2 étapes permet de corriger efficacement les imperfections et de restaurer une brillance plus profonde. Ce service comprend: Lavage et décontamination complète, Étape 1 : correction des micro-rayures, tourbillons, traces d\'oxydation et défauts plus marqués, Étape 2 : polissage de finition afin d\'obtenir une brillance profonde et une surface parfaitement lisse, Nettoyage et rénovation des plastiques extérieurs, Inspection des phares, Application d\'un scellant pour protéger la peinture.'
      },
      {
        heading: 'Polissage en 3 étapes',
        content: 'Ce traitement est destiné aux véhicules présentant des défauts importants dans la peinture. Grâce à un processus de correction approfondi en trois étapes, nous travaillons la surface du vernis afin d\'éliminer un maximum de rayures et de restaurer la profondeur, la clarté et la brillance de la carrosserie. Ce service comprend: Lavage et décontamination complète, Étape 1 : correction intensive pour réduire les rayures plus profondes et les défauts marqués, Étape 2 : polissage intermédiaire afin d\'affiner la surface et corriger les traces laissées par la première étape, Étape 3 : polissage de finition pour obtenir une brillance maximale et une surface parfaitement lisse, Nettoyage et rénovation des plastiques extérieurs, Inspection des phares, Application d\'un scellant pour protéger la peinture.'
      },
      {
        heading: 'Polissage des phares',
        content: 'Avec le temps, les phares peuvent devenir ternes ou jaunis, ce qui donne un aspect plus vieilli au véhicule et peut réduire la qualité de l\'éclairage. Grâce à notre traitement de rénovation, nous éliminons l\'oxydation présente en surface par un ponçage contrôlé, puis nous polissons les phares afin de leur redonner clarté et transparence. Une protection est ensuite appliquée pour préserver le résultat dans le temps. Le résultat : une meilleure visibilité de nuit, une esthétique améliorée et des phares protégés plus durablement.'
      },
      {
        heading: 'FAQ - Durée du polissage',
        faqs: [
          {
            q: 'Combien de temps dure un polissage en 1 étape ?',
            a: 'Ce traitement prend généralement entre 5 et 6 heures. Il permet principalement de raviver la brillance de la carrosserie et de réduire les micro-rayures légères.'
          },
          {
            q: 'Combien de temps dure un polissage en 2 étapes ?',
            a: 'Ce processus plus approfondi nécessite généralement entre 10 et 14 heures de travail. L\'objectif est de corriger un maximum de défauts présents dans la peinture tout en obtenant une brillance plus profonde et une finition plus nette. Pour ce type de traitement, le véhicule doit généralement rester 1 à 2 jours.'
          },
          {
            q: 'Combien de temps dure un polissage en 3 étapes ?',
            a: 'Il s\'agit du traitement le plus complet, pouvant nécessiter jusqu\'à 3 jours de travail. Ce processus comprend plusieurs phases de correction : un polissage plus abrasif pour réduire les défauts importants, suivi d\'étapes plus fines afin d\'affiner la surface et de restaurer une brillance intense et une finition proche du neuf.'
          }
        ]
      },
      {
        heading: 'FAQ - Élimination des rayures',
        content: 'Lors d\'un polissage, notre objectif est d\'éliminer le maximum de défauts présents dans la peinture, tels que les micro-rayures, les tourbillons et autres irrégularités. Avec un polissage en plusieurs étapes, une grande partie de ces imperfections peut être fortement réduite, voire complètement supprimée. Cependant, certaines rayures profondes, qui ont traversé le vernis et atteint les couches inférieures de la peinture, peuvent être plus difficiles à corriger. Dans ces cas-là, il n\'est pas toujours possible de les éliminer totalement sans intervention de peinture. Notre priorité est toujours d\'obtenir le meilleur résultat possible, tout en préservant l\'épaisseur et l\'intégrité du vernis. Le polissage permettra ainsi d\'améliorer considérablement l\'aspect de votre carrosserie.'
      }
    ]
  },
  ceramique: {
    title: 'Revêtement Céramique',
    subtitle: 'Protection longue durée',
    sections: [
      {
        heading: 'Qu\'est-ce qu\'un revêtement céramique ?',
        content: 'Un revêtement céramique est bien plus qu\'une simple couche de finition : il s\'agit d\'une protection avancée qui préserve la peinture de votre véhicule tout en améliorant sa brillance et sa profondeur. Appliqué sur une carrosserie parfaitement préparée, il forme une barrière durable contre de nombreux facteurs qui peuvent altérer l\'aspect et la durabilité de la peinture.'
      },
      {
        heading: 'Contre quoi protège un revêtement en céramique ?',
        content: '1. Protection chimique: Le revêtement crée une couche dure et chimiquement résistante sur la peinture, la protégeant des substances agressives telles que les pluies acides, les fientes d\'oiseaux, les traces d\'insectes, les dépôts de pollution et les résidus de goudron.\n\n2. Résistance aux intempéries et aux UV: Le soleil et les conditions climatiques peuvent ternir, oxyder ou dégrader le vernis avec le temps. Le traitement céramique protège contre les rayons UV et les agressions climatiques, réduisant la décoloration et le vieillissement prématuré de la peinture.\n\n3. Résistance aux rayures légères: Bien qu\'un revêtement céramique ne rende pas la peinture indestructible, il aide à prévenir les micro-rayures et les marques de tourbillon causées par les lavages ou l\'entretien régulier.\n\n4. Effet hydrophobe: Le revêtement rend la surface extrêmement repoussante à l\'eau et aux contaminants. L\'eau glisse facilement sur la carrosserie, emportant saletés et poussières, ce qui facilite le nettoyage et réduit l\'apparition de traces de calcaire ou de dépôts de saleté.\n\n5. Brillance et profondeur accrues: Au-delà de la protection, le revêtement céramique apporte une profondeur et un éclat exceptionnel à la peinture, donnant à votre véhicule un aspect frais et comme neuf pendant des années.'
      },
      {
        heading: 'Pourquoi choisir un traitement céramique ?',
        content: 'En plus de préserver l\'esthétique de votre véhicule, le traitement céramique simplifie l\'entretien quotidien, protège la valeur du véhicule et prolonge la durée de vie de la peinture. C\'est un investissement durable pour tous ceux qui souhaitent combiner esthétique, protection et facilité d\'entretien.'
      },
      {
        heading: 'Véhicule neuf',
        content: 'Cette formule est destinée aux véhicules neufs ou très récents dont la peinture est encore en excellent état. Après un lavage et une décontamination minutieuse, nous préparons la surface afin d\'appliquer le revêtement céramique dans des conditions optimales. Le traitement permet de protéger durablement la peinture contre les agressions extérieures, tout en apportant une brillance intense et un effet hydrophobe qui facilite l\'entretien du véhicule au quotidien.'
      },
      {
        heading: 'Véhicule d\'occasion (avec correction de peinture)',
        content: 'Avec le temps et les lavages, la peinture d\'un véhicule peut présenter des micro-rayures, des tourbillons ou une perte de brillance. Avant l\'application du revêtement céramique, nous réalisons un polissage de correction afin de restaurer l\'éclat et d\'améliorer l\'aspect général de la carrosserie. Une fois la peinture corrigée et parfaitement préparée, le traitement céramique est appliqué pour protéger durablement la surface et révéler toute la profondeur et la brillance de la peinture.'
      },
      {
        heading: 'Véhicule mat ou avec un PPF',
        content: 'Les peintures mates et les films de protection (PPF) nécessitent des produits et techniques spécifiques afin de préserver leur aspect d\'origine. Le revêtement céramique appliqué sur ces surfaces permet de faciliter l\'entretien, protéger contre les contaminants et limiter l\'adhérence des saletés, tout en conservant l\'aspect mat ou la finition du film sans modifier son rendu.'
      },
      {
        heading: 'FAQ',
        faqs: [
          {
            q: 'Combien de temps dure un traitement céramique ?',
            a: 'La durée dépend du type de revêtement appliqué et de l\'entretien du véhicule. En moyenne, un traitement céramique peut offrir une protection de plusieurs années lorsqu\'il est correctement entretenu.'
          },
          {
            q: 'Le traitement céramique protège-t-il contre les rayures ?',
            a: 'Un revêtement céramique ne rend pas la peinture totalement résistante aux rayures. En revanche, il peut réduire l\'apparition de micro-rayures et des marques de lavage, tout en apportant une protection supplémentaire à la peinture.'
          },
          {
            q: 'Est-ce que la voiture restera propre plus longtemps ?',
            a: 'Oui. Grâce à son effet hydrophobe, l\'eau, la poussière et les saletés adhèrent beaucoup moins à la surface. Le véhicule se salit donc moins vite et le lavage devient plus simple et plus rapide.'
          }
        ]
      }
    ]
  },
  vitres: {
    title: 'Vitres Teintées',
    subtitle: 'Pose professionnelle — Garantie à vie',
    sections: [
      {
        heading: 'Confort, protection et esthétique',
        content: 'La pose de vitres teintées est une solution idéale pour améliorer à la fois le confort, la protection et l\'esthétique de votre véhicule. Grâce à des films teintés de haute qualité, votre voiture bénéficie d\'une protection efficace contre la chaleur, les rayons UV et les regards extérieurs, tout en apportant une finition élégante et moderne.'
      },
      {
        heading: 'Les avantages',
        content: 'Réduction de la chaleur: Les films solaires permettent de réduire significativement la chaleur dans l\'habitacle, améliorant ainsi le confort lors des journées ensoleillées.\n\nProtection contre les UV: Les vitres teintées bloquent jusqu\'à 99 % des rayons UV, protégeant ainsi l\'intérieur du véhicule (cuirs, plastiques, tissus) contre la décoloration et le vieillissement.\n\nPlus d\'intimité: Les vitres teintées limitent la visibilité depuis l\'extérieur, offrant plus de discrétion et de sécurité pour les passagers et les objets présents dans l\'habitacle.\n\nEsthétique améliorée: En plus de leurs avantages pratiques, les vitres teintées apportent une touche esthétique plus sportive et élégante à votre véhicule.'
      },
      {
        heading: 'Une pose professionnelle',
        content: 'La pose de films teintés demande précision, expérience et savoir-faire. Chez Glow & Details, nous utilisons des films de qualité professionnelle et des techniques de pose adaptées afin d\'obtenir un résultat parfaitement propre et durable. Chaque film est découpé et appliqué avec soin pour garantir: une application sans bulles ni défauts, une découpe parfaitement adaptée à chaque vitre, une finition nette et discrète. Chaque véhicule est traité avec la plus grande attention afin d\'assurer un résultat à la hauteur de vos attentes. Pour vous garantir une tranquillité totale, la pose de nos films teintés est garantie à vie, vous assurant une tenue durable sans décollement ni défaut prématuré.'
      },
      {
        heading: 'Teintes disponibles',
        tints: [
          {
            pct: '95%',
            name: 'Très foncée',
            desc: 'Idéale pour les vitres arrière, cette teinte offre un maximum d\'intimité et de protection solaire. Elle est souvent choisie pour un look très sombre et élégant tout en limitant fortement la visibilité depuis l\'extérieur.'
          },
          {
            pct: '85%',
            name: 'Foncée',
            desc: 'Une teinte très populaire qui apporte beaucoup de discrétion et une protection efficace contre la chaleur et l\'éblouissement, tout en conservant une bonne visibilité depuis l\'intérieur.'
          },
          {
            pct: '65%',
            name: 'Moyenne',
            desc: 'Un excellent compromis entre esthétique et visibilité. Cette teinte apporte un effet légèrement fumé, améliore le confort thermique et reste relativement discrète.'
          },
          {
            pct: '30%',
            name: 'Légère',
            desc: 'Cette teinte est très légère et permet de réduire légèrement l\'éblouissement et la chaleur, tout en conservant une grande transparence. Elle est idéale pour ceux qui souhaitent un effet discret.'
          }
        ]
      },
      {
        heading: 'FAQ',
        faqs: [
          {
            q: 'Les vitres teintées sont-elles légales ?',
            a: 'Oui, mais certaines règles doivent être respectées. En Belgique, les vitres avant doivent laisser passer suffisamment de lumière afin de garantir la visibilité du conducteur. Les vitres arrière peuvent généralement être plus foncées. Nous vous conseillons toujours une solution conforme à la législation.'
          },
          {
            q: 'Combien de temps dure la pose ?',
            a: 'La pose de vitres teintées prend généralement entre 2 et 4 heures, selon le véhicule et le nombre de vitres à traiter.'
          },
          {
            q: 'Combien de temps faut-il attendre avant de baisser les vitres ?',
            a: 'Après la pose, il est recommandé d\'attendre environ 48 heures avant de baisser les vitres afin de permettre au film d\'adhérer correctement.'
          },
          {
            q: 'Les films teintés peuvent-ils se décoller avec le temps ?',
            a: 'Non, lorsque les films sont posés correctement avec des produits de qualité, ils sont conçus pour durer de nombreuses années sans se décoller ni se décolorer.'
          },
          {
            q: 'Peut-on laver la voiture après la pose ?',
            a: 'Oui, mais il est conseillé d\'attendre quelques jours avant de nettoyer les vitres pour laisser le temps au film de sécher complètement.'
          },
          {
            q: 'Les vitres teintées réduisent-elles vraiment la chaleur ?',
            a: 'Oui. Les films solaires permettent de réduire significativement la chaleur dans l\'habitacle, ce qui améliore le confort de conduite, surtout en été.'
          }
        ]
      }
    ]
  }
};

export default function ServiceDetailModal({ serviceId, isOpen, onClose, isLight }) {
  const service = serviceDetails[serviceId];
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-2xl ${
              isLight ? 'bg-white' : 'bg-card'
            }`}
          >
            {/* Header */}
            <div className={`sticky top-0 ${isLight ? 'bg-white border-b border-gray-200' : 'bg-card border-b border-white/10'} px-8 py-6 flex justify-between items-start`}>
              <div>
                <p className="text-cyan text-xs tracking-[0.3em] uppercase font-semibold mb-2">
                  {service.subtitle}
                </p>
                <h2 className={`font-montserrat font-bold text-2xl ${isLight ? 'text-[#0d1117]' : 'text-white'}`}>
                  {service.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${
                  isLight ? 'hover:bg-gray-100 text-[#0d1117]' : 'hover:bg-white/10 text-white'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className={`px-8 py-8 space-y-8 ${isLight ? 'text-[#0d1117]' : 'text-white'}`}>
              {service.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className={`font-bold text-lg ${isLight ? 'text-[#0d1117]' : 'text-white'}`}>
                    {section.heading}
                  </h3>

                  {section.content && (
                    <p className={`text-sm leading-relaxed whitespace-pre-line ${isLight ? 'text-[#0d1117]/70' : 'text-white/60'}`}>
                      {section.content}
                    </p>
                  )}

                  {section.list && (
                    <ul className="space-y-2 ml-4">
                      {section.list.map((item, i) => (
                        <li key={i} className={`text-sm flex gap-3 ${isLight ? 'text-[#0d1117]/70' : 'text-white/60'}`}>
                          <span className="text-cyan flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.faqs && (
                    <div className="space-y-4 mt-4">
                      {section.faqs.map((faq, i) => (
                        <div key={i} className={`p-4 rounded-lg ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                          <p className="font-semibold text-sm mb-2 text-cyan">{faq.q}</p>
                          <p className={`text-sm leading-relaxed ${isLight ? 'text-[#0d1117]/70' : 'text-white/60'}`}>
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.tints && (
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {section.tints.map((tint, i) => (
                        <div key={i} className={`p-4 rounded-lg ${isLight ? 'bg-gray-50' : 'bg-white/5'}`}>
                          <p className="text-cyan font-bold text-lg mb-1">{tint.pct}</p>
                          <p className="font-semibold text-sm mb-1">{tint.name}</p>
                          <p className={`text-xs leading-relaxed ${isLight ? 'text-[#0d1117]/70' : 'text-white/60'}`}>
                            {tint.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}