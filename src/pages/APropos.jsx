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
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Qui suis-je ?</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Chaque détail compte,<br />
              <span className="text-cyan">c'est ma façon de travailler</span>
            </h2>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-6">
              Glow & Details, c'est une reconversion qui a commencé dans mon propre garage. J'ai toujours pris un soin particulier à entretenir ma voiture — chaque détail, chaque surface, sans jamais bâcler. Ce que d'autres faisaient en vingt minutes, je le faisais en deux heures, et j'aimais ça. C'est là que j'ai compris que ce niveau d'exigence pouvait devenir un métier.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-6">
              Diplômé de l'École Hôtelière Provinciale de Namur et formé dans des environnements où l'excellence était la norme, j'ai appris que la rigueur n'est pas une option — c'est une façon de travailler. J'ai transposé cette même exigence au detailing.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-6">
              Ce qui me plaît dans ce métier, c'est la liberté de prendre le temps qu'il faut pour que chaque véhicule soit traité comme il se doit — sans compromis, sans regarder l'horloge. Et la possibilité de continuer à apprendre, à développer des projets, à faire grandir quelque chose qui m'appartient vraiment.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed">
              Aujourd'hui j'interviens entre <strong className="text-[#0d1117]">Charleroi et Nivelles</strong>, dans la province du Hainaut, le Brabant wallon et la province de Namur. Chaque véhicule que je traite reçoit la même attention que le mien — rien de moins.
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
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Mes valeurs</p>
            <h2 className="font-montserrat font-bold text-3xl text-white">Ce qui me définit</h2>
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


      {/* Conclusion — light */}
      <section className="bg-white px-6 py-24 rounded-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-[#0d1117] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Un résultat à la hauteur<br />
            <span className="text-cyan">de votre véhicule</span>
          </h2>
          <p className="text-[#0d1117]/55 text-sm leading-relaxed mb-10 max-w-2xl mx-auto">
            Que vous choisissiez un nettoyage complet, un polissage, un traitement céramique ou la pose de vitres teintées, votre véhicule vous sera restitué dans un état impeccable.
            Mon objectif est simple : <strong className="text-[#0d1117]">vous permettre de redécouvrir votre voiture sous son meilleur jour.</strong>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="flex items-center gap-2 bg-[#0d1117] text-white px-8 py-4 text-xs tracking-[0.15em] font-bold uppercase hover:bg-[#0d1117]/80 transition-all group rounded-xl">
              Découvrir nos services <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="flex items-center gap-2 border border-[#0d1117]/30 text-[#0d1117] px-8 py-4 text-xs tracking-[0.15em] font-semibold uppercase hover:border-cyan hover:text-cyan transition-all rounded-xl">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>);

}