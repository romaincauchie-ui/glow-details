import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Camille Robert',
    stars: 5,
    text: "Service au top ! Très professionnel, sérieux et efficace. Je transporte régulièrement mon chien dans ma voiture, elle était vraiment sale… elle est ressortie comme neuve ! Nettoyage intérieur impeccable, odeurs disparues et finitions parfaites ! Merci encore pour ce super travail !",
  },
  {
    name: 'Luc Wargnies',
    stars: 5,
    text: "Je ne m'attendais pas à ce résultat ! En récupérant mon véhicule, j'ai eu du mal à le reconnaître ! Je voulais un simple nettoyage intérieur et extérieur et je suis reparti avec une voiture neuve. L'extérieur est nickel, l'intérieur sent bon et chaque recoin a été traité. Pas de travail bâclé, on sent que Louis prend le temps de bien faire les choses. Je recommande vraiment, c'est le genre de prestation où le résultat parle de lui-même !",
  },
  {
    name: 'Brian Dutrieux',
    stars: 5,
    text: "Un travail de pro, traitement de roi, voiture totalement impeccable, communications au top, une personne incroyable je recommande à 100%, ça ne donne pas envie de rouler pour ne pas la salir tellement que c'est une beautée",
  },
  {
    name: 'Nathalie De Vléminck',
    stars: 5,
    text: "Résultat impeccable ! Le avant/après c'est le jour et la nuit ! On retrouve un véhicule neuf directement à la maison !",
  },
  {
    name: 'Dorothée Haine',
    stars: 5,
    text: "Service impeccable ! Nettoyage intérieur et extérieur réalisé avec beaucoup de soin et de professionnalisme. Ma voiture est comme neuve, je suis vraiment satisfait du résultat. Je recommande sans hésiter !",
  },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  return (
    <section className="bg-white px-6 py-20 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Ce que disent nos clients</p>
          <h2 className="font-montserrat font-bold text-[#0d1117] mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Avis Google
          </h2>
          {/* Google rating badge */}
          <div className="inline-flex items-center gap-3 bg-[#0d1117]/5 border border-[#0d1117]/10 rounded-xl px-5 py-3">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-[#0d1117] font-bold text-sm">5,0</span>

          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-[#0d1117]/3 border border-[#0d1117]/10 rounded-2xl p-8 sm:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(reviews[current].stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0d1117]/70 text-sm sm:text-base leading-relaxed mb-8 italic">
                "{reviews[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-cyan/20 flex items-center justify-center">
                  <span className="text-cyan font-bold text-sm">{reviews[current].name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-[#0d1117] font-bold text-sm">{reviews[current].name}</div>
                  <div className="flex items-center gap-1 text-xs text-[#0d1117]/40 mt-0.5">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-3 h-3" />
                    Avis Google vérifié
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-xl border border-[#0d1117]/15 hover:border-cyan/50 flex items-center justify-center text-[#0d1117]/40 hover:text-cyan transition-all">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan w-6' : 'bg-[#0d1117]/20 w-2 hover:bg-[#0d1117]/40'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-xl border border-[#0d1117]/15 hover:border-cyan/50 flex items-center justify-center text-[#0d1117]/40 hover:text-cyan transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}