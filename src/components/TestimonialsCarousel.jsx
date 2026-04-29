import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Thomas V.',
    vehicle: 'BMW M3',
    service: 'Polissage + Céramique',
    text: 'Résultat absolument incroyable. Ma BMW M3 ressemble à une voiture neuve sortie du showroom. Le travail est méticuleux, chaque détail a été soigné. Je recommande vivement !',
    stars: 5,
  },
  {
    name: 'Sarah D.',
    vehicle: 'Audi A5',
    service: 'Nettoyage complet',
    text: 'Service impeccable, ponctuel et très professionnel. Mon Audi A5 n\'avait jamais été aussi propre. Le déplacement à domicile est un vrai plus, très pratique.',
    stars: 5,
  },
  {
    name: 'Nicolas M.',
    vehicle: 'Mercedes Classe C',
    service: 'Vitres teintées',
    text: 'Pose de vitres teintées réalisée avec une précision remarquable. Aucune bulle, aucun défaut. La garantie à vie est un gage de confiance. Excellent travail !',
    stars: 5,
  },
  {
    name: 'Laura F.',
    vehicle: 'Porsche Cayenne',
    service: 'Polissage 2 étapes',
    text: 'Mon Cayenne avait des micro-rayures partout après des années de lavage automatique. Après le polissage en 2 étapes, la peinture est parfaitement lisse et brillante. Bravo !',
    stars: 5,
  },
  {
    name: 'Julien K.',
    vehicle: 'Tesla Model 3',
    service: 'Revêtement céramique',
    text: 'Traitement céramique appliqué avec beaucoup de soin. Le résultat hydrophobe est impressionnant, l\'eau glisse parfaitement. Entretien facilité au quotidien. Je reviendrai !',
    stars: 5,
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-[#0d1117] px-6 py-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Ce que disent nos clients</p>
          <h2 className="font-montserrat font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Témoignages
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-card border border-border rounded-2xl p-8 sm:p-12"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-cyan fill-cyan" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8 italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-white font-bold text-sm">{testimonials[current].name}</div>
                  <div className="text-white/40 text-xs mt-0.5">{testimonials[current].vehicle}</div>
                </div>
                <div className="bg-cyan/10 border border-cyan/20 rounded-lg px-3 py-1.5">
                  <span className="text-cyan text-xs font-semibold tracking-wide">{testimonials[current].service}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-xl border border-border hover:border-cyan/50 flex items-center justify-center text-white/50 hover:text-cyan transition-all">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan w-6' : 'bg-white/20 hover:bg-white/40'}`}
                />
              ))}
            </div>

            <button onClick={next} className="w-10 h-10 rounded-xl border border-border hover:border-cyan/50 flex items-center justify-center text-white/50 hover:text-cyan transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}