import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
{ title: 'Précision', desc: 'Chaque intervention est réalisée avec une attention minutieuse aux moindres détails.' },
{ title: 'Qualité', desc: 'Produits haut de gamme et matériel professionnel pour des résultats durables.' },
{ title: 'Expertise', desc: 'Techniques reconnues dans le domaine du detailing automobile professionnel.' },
{ title: 'Service', desc: 'Déplacement à domicile, nous nous adaptons à votre agenda et vos besoins.' }];


const services_list = [
'Le nettoyage intérieur et extérieur en profondeur',
'Le polissage de la peinture pour corriger les micro-rayures',
'L\'application de protections durables comme les revêtements céramiques',
'La pose de vitres teintées garantie à vie'];


export default function APropos() {
  return (
    <div className="bg-[#0d1117] text-foreground">
      {/* Hero — dark */}
      <section className="relative h-72 sm:h-96 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/e4f0533ad_Export_GlowDetails-26copie.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Notre histoire</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">À Propos</h1>
        </div>
      </section>

      {/* Intro — light */}
      <section className="bg-white px-6 py-24 rounded-3xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Qui sommes-nous</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              L'esthétique automobile,<br />
              <span className="text-cyan">c'est notre passion</span>
            </h2>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-6">
              Chez <strong className="text-[#0d1117]">Glow & Details</strong>, l'esthétique automobile est bien plus qu'un simple nettoyage : c'est un travail de précision où chaque détail compte.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-6">
              Chaque véhicule qui nous est confié bénéficie d'une attention minutieuse, d'un savoir-faire technique et de produits professionnels soigneusement sélectionnés. Notre objectif est de <strong className="text-[#0d1117]">sublimer votre véhicule, restaurer son éclat et préserver sa beauté dans le temps</strong>.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed">
              Nous sommes situés entre <strong className="text-[#0d1117]">Charleroi et Nivelles</strong> et intervenons dans la province du Hainaut, le Brabant wallon et la province de Namur.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <img src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/6726ed067_Export_GlowDetails-16copie.jpg" alt="Car detailing" className="w-full h-[500px] object-cover rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Values — dark */}
      <section className="py-20 px-6 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Nos valeurs</p>
            <h2 className="font-montserrat font-bold text-3xl text-white">Ce qui nous définit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 hover:border-cyan/40 transition-all">
              
                <div className="w-8 h-8 border border-cyan flex items-center justify-center mb-5">
                  <div className="w-2 h-2 bg-cyan"></div>
                </div>
                <h3 className="font-bold text-white text-sm tracking-wide mb-3">{v.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services overview — light */}
      <section className="bg-white px-6 py-24 rounded-3xl">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <img src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/d7b61f0a5_Export_GlowDetails-53copie.jpg" alt="Ceramic coating" className="w-full h-[400px] object-cover rounded-2xl" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Nos prestations</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Une approche complète<br />
              <span className="text-cyan">du detailing</span>
            </h2>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-8">
              Nous proposons une gamme complète de services dédiés à l'esthétique automobile, afin de répondre aux besoins de chaque véhicule et de chaque propriétaire.
            </p>
            <ul className="space-y-4">
              {services_list.map((s, i) =>
              <li key={i} className="flex items-start gap-3 text-sm text-[#0d1117]/75">
                  <CheckCircle size={15} className="text-cyan mt-0.5 flex-shrink-0" />
                  {s}
                </li>
              )}
            </ul>
            <p className="text-[#0d1117]/55 text-sm leading-relaxed mt-8 border-l-2 border-cyan pl-4 italic">
              Chaque prestation est réalisée dans un seul objectif : redonner à votre véhicule un niveau de finition proche de celui d'une voiture neuve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mercedes — dark */}
      <section className="py-20 px-6 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Partenariat officiel</p>
            <h2 className="font-montserrat font-bold text-white mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Collaboration <span className="text-cyan">Saga Mercedes Charleroi</span>
            </h2>
            <div className="bg-card border border-cyan/30 rounded-2xl p-10 text-left max-w-3xl mx-auto">
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Nous avons l'honneur d'accompagner <strong className="text-white">Saga Mercedes Charleroi</strong> dans la préparation esthétique de leurs véhicules neufs, destinés à une clientèle exigeante.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                Chaque intervention est réalisée avec une précision absolue et un souci du détail constant, afin de sublimer chaque véhicule et révéler pleinement son élégance. Dans le respect des standards d'excellence de Mercedes-Benz, nous apportons une attention particulière à chaque finition pour atteindre un niveau de présentation irréprochable.
              </p>
              <p className="text-white/90 text-sm leading-relaxed font-medium italic">
                "Cette collaboration reflète notre engagement pour l'excellence et la confiance accordée à notre savoir-faire."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion — light */}
      <section className="bg-white px-6 py-24 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-[#0d1117] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Un résultat à la hauteur<br />
            <span className="text-cyan">de votre véhicule</span>
          </h2>
          <p className="text-[#0d1117]/55 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            Que vous choisissiez un nettoyage complet, un polissage, un traitement céramique ou la pose de vitres teintées, votre véhicule vous sera restitué dans un état impeccable.
            Chez Glow & Details, notre objectif est simple : <strong className="text-[#0d1117]">vous permettre de redécouvrir votre voiture sous son meilleur jour.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="flex items-center gap-2 bg-[#0d1117] text-white px-8 py-4 text-xs tracking-[0.15em] font-bold uppercase hover:bg-[#0d1117]/80 transition-all group rounded-xl">
              Découvrir nos services <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 border border-[#0d1117]/30 text-[#0d1117] px-8 py-4 text-xs tracking-[0.15em] font-semibold uppercase hover:border-cyan hover:text-cyan transition-all rounded-xl">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>);

}