import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import BeforeAfterSlider from '@/components/galerie/BeforeAfterSlider';

const categories = ['Avant/Après', 'Mobile', 'Intérieur', 'Extérieur', 'Polissage', 'Céramique', 'Véhicules'];

export default function Galerie() {
  const [active, setActive] = useState('Avant/Après');
  const [lightbox, setLightbox] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [avantApres, setAvantApres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      base44.entities.GaleriePhoto.list('order', 200),
      base44.entities.AvantApres.list('order', 200),
    ]).then(([p, aa]) => {
      setPhotos(p);
      setAvantApres(aa);
      setLoading(false);
    });
  }, []);

  const filteredPhotos = active === 'Avant/Après' ? [] : photos.filter(p => p.category === active);
  const filteredAA = active === 'Avant/Après' ? avantApres : [];

  if (loading) return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-cyan/20 border-t-cyan rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="bg-[#0d1117] text-foreground">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4f8f2121e_ClasseGcopie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Réalisations</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">Galerie</h1>
        </div>
      </section>

      {/* Filtres */}
      <div className="bg-[#0d1117] border-b border-white/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 py-3">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`text-xs tracking-widest uppercase font-semibold py-1 whitespace-nowrap transition-colors ${
                active === cat ? 'text-cyan' : 'text-white/40 hover:text-white/70'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <AnimatePresence>
              {/* Sliders avant/après */}
              {filteredAA.map((item) => (
                <motion.div
                  key={`aa-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <BeforeAfterSlider avant={item.avant} apres={item.apres} label={item.label} />
                </motion.div>
              ))}

              {/* Photos classiques */}
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(photo)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square">
                  <img src={photo.src} alt={photo.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPhotos.length === 0 && filteredAA.length === 0 && (
            <div className="text-center py-24 text-white/30 text-sm">Aucune photo dans cette catégorie</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full">
              <img src={lightbox.src} alt={lightbox.label} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              <div className="mt-4 text-center">
                <span className="text-cyan text-xs tracking-widest uppercase font-semibold">{lightbox.category}</span>
                <span className="text-white/50 mx-2">·</span>
                <span className="text-white text-sm">{lightbox.label}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}