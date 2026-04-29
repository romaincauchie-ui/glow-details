import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const photos = [
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/e59225627_Export_GlowDetails-16copie.jpg', category: 'Mobile', label: 'Nettoyage jante à domicile' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/98f067463_Export_GlowDetails-18copie.jpg', category: 'Mobile', label: 'Lavage extérieur mobile' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/0b44878c1_Export_GlowDetails-29copie.jpg', category: 'Mobile', label: 'Application mousse active' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/fc071f82a_Export_GlowDetails-39copie.jpg', category: 'Mobile', label: 'Nettoyage pare-brise' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/b85d06447_Export_GlowDetails-46copie.jpg', category: 'Mobile', label: 'Préparation matériel' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/7e7928dd1_Export_GlowDetails-47copie.jpg', category: 'Mobile', label: 'Finitions plastiques' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/01ebd0c6b_Export_GlowDetails-40copie.jpg', category: 'Intérieur', label: 'Nettoyage vitre' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4419c497f_Export_GlowDetails-42copie.jpg', category: 'Intérieur', label: 'Détail porte intérieure' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/e4493d8ff_Export_GlowDetails-43copie.jpg', category: 'Intérieur', label: 'Traitement panneau de porte' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/a5f88a562_Export_GlowDetails-44copie.jpg', category: 'Intérieur', label: 'Nettoyage volant' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/ee83125a1_Export_GlowDetails-45copie.jpg', category: 'Intérieur', label: 'Aspiration & nettoyage' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/64ea58e38_IMG_4466.jpg', category: 'Intérieur', label: 'Habitacle AMG' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/a01f843f4_Export_GlowDetails-14copie.jpg', category: 'Extérieur', label: 'Nettoyage jante' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/db0eadf98_Export_GlowDetails-15copie.jpg', category: 'Extérieur', label: 'Brossage jante' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/2b10cac8f_Export_GlowDetails-17copie.jpg', category: 'Extérieur', label: 'Décontamination roue' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4c3f7452a_Export_GlowDetails-25copie.jpg', category: 'Extérieur', label: 'Lavage carrosserie' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/153ebbbbd_Export_GlowDetails-26copie.jpg', category: 'Extérieur', label: 'Rinçage haute pression' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/ffd470784_Export_GlowDetails-51copie.jpg', category: 'Extérieur', label: 'Séchage microfibre' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/089317162_Export_GlowDetails-53copie.jpg', category: 'Polissage', label: 'Machine de polissage' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/8fc774410_Export_GlowDetails-54copie.jpg', category: 'Polissage', label: 'Correction de peinture' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/d5764f4ec_IMG_7542.jpg', category: 'Céramique', label: 'Application céramique' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/d2a8b1b26_IMG_7543.jpg', category: 'Céramique', label: 'Détail Mercedes' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/63131e11e_IMG_7554.jpg', category: 'Céramique', label: 'Finition céramique' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/642619965_IMG_5100.jpg', category: 'Céramique', label: 'Produit CARPRO CQ.UK 3.0' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/2610c0c83_IMG_5121.jpg', category: 'Céramique', label: 'Kit céramique' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/1cef2f810_A45Scopie.jpg', category: 'Véhicules', label: 'Mercedes A45 S AMG' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4f8f2121e_ClasseGcopie.jpg', category: 'Véhicules', label: 'Mercedes Classe G noir' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/bcf07304d_ClasseGgrismontagnecopie.jpg', category: 'Véhicules', label: 'Mercedes Classe G gris montagne' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/241b51cb2_CLEcopie.jpg', category: 'Véhicules', label: 'Mercedes CLE rouge' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/5ecae0b74_CLE53copie.jpg', category: 'Véhicules', label: 'Mercedes CLE 53 AMG bleu mat' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/50117e37f_E53copie.jpg', category: 'Véhicules', label: 'Mercedes E53 AMG noir' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/0f0668a97_IMG_0940copie.jpg', category: 'Véhicules', label: 'Badge AMG Affalterbach' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/22ad989ec_IMG_1132copie2.jpg', category: 'Véhicules', label: 'CLA 45 S AMG blanc' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/46539f613_IMG_1364copie2.jpg', category: 'Véhicules', label: 'AMG GT 63 blanc' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/5e2f3ee25_IMG_2058copie.jpg', category: 'Véhicules', label: 'Brabus G-Class' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/15cf0a579_IMG_4800copie2.jpg', category: 'Véhicules', label: 'Classe G gris — face avant' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/afa1d2e20_IMG_4800copie.jpg', category: 'Véhicules', label: 'Classe G gris — détail phare' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/86ad1bf0e_IMG_5705copie.jpg', category: 'Véhicules', label: 'Étoile Mercedes' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/6a3b44467_IMG_6838copie.jpg', category: 'Véhicules', label: 'Jante AMG' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/18437f0df_IMG_6923copie3.jpg', category: 'Véhicules', label: 'Siège AMG' },
  { src: 'https://media.base44.com/images/public/69c2aed943bbaa851541e30d/748081a2b_X5copie.jpg', category: 'Véhicules', label: 'BMW X5 noir' },
];

const categories = ['Tous', 'Mobile', 'Intérieur', 'Extérieur', 'Polissage', 'Céramique'];

export default function Galerie() {
  const [active, setActive] = useState('Tous');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'Tous' ? photos : photos.filter(p => p.category === active);

  return (
    <div className="bg-[#0d1117] text-foreground">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end pb-10 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4f8f2121e_ClasseGcopie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Nos réalisations</p>
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
              {filtered.map((photo, i) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <div className="text-cyan text-xs tracking-widest uppercase font-semibold mb-0.5">{photo.category}</div>
                      <div className="text-white text-sm font-bold">{photo.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
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