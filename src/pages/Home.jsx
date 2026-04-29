import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import GoogleReviews from '@/components/GoogleReviews';
import { base44 } from '@/api/base44Client';

const services = [
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5" /><circle cx="16" cy="17" r="2" /><circle cx="9" cy="17" r="2" /><path d="M13 17H11m-2 0H5" /><path d="M3 9h13" />
      </svg>,

  title: 'Nettoyage complet',
  desc: 'Intérieur & extérieur à domicile',
  path: '/services#domicile'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>,

  title: 'Polissage',
  desc: 'Correction de peinture',
  path: '/services#polissage'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>,

  title: 'Céramique',
  desc: 'Protection longue durée',
  path: '/services#ceramique'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>,

  title: 'Vitres teintées',
  desc: 'Garantie à vie',
  path: '/services#vitres'
}];


const qualityPoints = [
{
  title: 'Exigence & précision',
  desc: 'Je traite chaque véhicule comme s\'il m\'appartenait. Pas de raccourcis, pas de zones négligées. Juste le niveau d\'exigence que j\'attendrais moi-même pour ma propre voiture.'
},
{
  title: 'Produits & matériel professionnel',
  desc: 'Les produits et équipements que j\'utilise ont été testés et choisis pour préserver les matériaux de votre véhicule tout en garantissant un résultat optimal. Rien n\'est laissé au hasard.'
}];


function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await base44.entities.ContactRequest.create(form);
    setSent(true);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-12">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Réservation & devis</p>
          <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
            Discutons de votre<br /><span className="text-cyan">projet detailing</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-[#0d1117]/55 text-sm leading-relaxed mb-10">
              Uniquement sur rendez-vous. Contactez-nous pour obtenir un devis personnalisé ou pour planifier une intervention à votre domicile.
            </p>

            <div className="space-y-6">
              <a href="mailto:glowdetails.lj@gmail.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 border border-cyan/50 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                  <Mail size={16} className="text-cyan group-hover:text-[#0d1117] transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-0.5">Email</div>
                  <div className="text-[#0d1117] font-semibold text-sm">glowdetails.lj@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.me/32472010390" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-12 h-12 border-2 border-cyan flex items-center justify-center bg-cyan/10 group-hover:bg-cyan transition-all">
                  <MessageCircle size={16} className="text-cyan group-hover:text-[#0d1117] transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-0.5">WhatsApp <span className="text-cyan font-bold">— Privilégié</span></div>
                  <div className="text-[#0d1117] font-semibold text-sm">0472/01.03.90</div>
                  <div className="text-xs text-cyan/80">Réponse rapide garantie</div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-cyan/50 flex items-center justify-center">
                  <MapPin size={16} className="text-cyan" />
                </div>
                <div>
                  <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-0.5">Zone d'intervention</div>
                  <div className="text-[#0d1117] font-semibold text-sm">Toute la Wallonie</div>
                  <div className="text-xs text-[#0d1117]/45">Hainaut · Brabant wallon · Namur</div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-cyan/50 flex items-center justify-center">
                  <Clock size={16} className="text-cyan" />
                </div>
                <div>
                  <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-0.5">Déplacement</div>
                  <div className="text-[#0d1117] font-semibold text-sm">Offert dans un rayon de 25km</div>
                  <div className="text-xs text-[#0d1117]/45">0,60€/km au-delà</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://detailr.co/book/glowanddetails"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-cyan text-[#0d1117] px-6 py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-cyan/80 transition-colors rounded-xl w-full justify-center"
              >
                Réserver votre prestation
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-[#0d1117]/10">
              <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-4">Suivez-nous</div>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="https://www.instagram.com/glow.and.details" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan/40 text-cyan px-4 py-2 text-xs tracking-widest uppercase hover:bg-cyan hover:text-[#0d1117] transition-all rounded-xl">
                  <Instagram size={13} /> Instagram
                </a>
                <a href="https://www.facebook.com/GlowDetails" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-cyan/40 text-cyan px-4 py-2 text-xs tracking-widest uppercase hover:bg-cyan hover:text-[#0d1117] transition-all rounded-xl">
                  <Facebook size={13} /> Facebook
                </a>
                <a href="https://wa.me/32472010390" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan text-[#0d1117] px-4 py-2 text-xs tracking-widest uppercase font-bold hover:bg-cyan/80 transition-all rounded-xl">
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            {sent ?
            <div className="bg-gray-50 border border-cyan/30 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 bg-cyan/10 border border-cyan rounded-xl flex items-center justify-center">
                  <CheckCircle size={26} className="text-cyan" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#0d1117]">Message envoyé !</h3>
                <p className="text-[#0d1117]/55 text-sm leading-relaxed max-w-sm">Merci, nous vous répondrons dans les plus brefs délais.</p>
              </div> :

            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5">
                <h3 className="font-bold text-[#0d1117] text-sm tracking-[0.15em] uppercase mb-2">Demande de rendez-vous</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Nom *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/25"
                  placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Téléphone</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/25"
                  placeholder="0472/..." />
                  </div>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/25"
                placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Véhicule</label>
                  <input value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/25"
                placeholder="Marque, modèle, année" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Service souhaité</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors">
                    <option value="">Sélectionnez un service</option>
                    <option value="domicile">Nettoyage à domicile</option>
                    <option value="polissage">Polissage</option>
                    <option value="ceramique">Revêtement céramique</option>
                    <option value="vitres">Vitres teintées</option>
                    <option value="autre">Autre / Devis personnalisé</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Message</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors resize-none placeholder:text-[#0d1117]/25"
                placeholder="Décrivez votre besoin, l'état de votre véhicule..." />
                </div>
                <p className="text-xs text-[#0d1117]/40">Tous les prix s'entendent HTVA.</p>
                <button type="submit"
              className="w-full bg-[#0d1117] text-white py-4 text-xs tracking-[0.2em] font-black uppercase hover:bg-[#0d1117]/80 transition-all duration-300 rounded-xl">
                  Envoyer la demande
                </button>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}

export default function Home() {
  return (
    <div className="bg-[#0d1117] text-foreground">

      {/* ── HERO ── dark */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('https://media.base44.com/images/public/69c2aed943bbaa851541e30d/6b794c595_IMG_4436.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/85 to-[#0d1117]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/50 via-transparent to-[#0d1117]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-xl">
            
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-5">
              Excellence automobile
            </p>
            <h1 className="font-montserrat font-bold text-white mb-2 leading-tight" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
              La passion
            </h1>
            <h1 className="font-montserrat font-bold mb-8 leading-tight" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
              <span className="text-cyan">du détail</span>
            </h1>
            <p className="text-white/65 text-sm leading-relaxed mb-10 max-w-sm">
              Chez Glow & Details, l'esthétique automobile est bien plus qu'un simple nettoyage : c'est un travail de précision où chaque détail compte.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/services"
              className="bg-white text-[#0d1117] text-xs font-black tracking-[0.15em] uppercase px-6 py-3 hover:bg-white/90 transition-colors flex items-center gap-2 group rounded-xl">
                Découvrir nos services
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/contact"
              className="border border-white/30 text-white text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:border-cyan hover:text-cyan transition-colors rounded-xl">
                Prendre rendez-vous
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── light */}
      <section className="bg-white px-6 py-20 rounded-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Notre approche</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-5" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Une approche complète<br />du detailing
            </h2>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-4">
              Chaque véhicule qui nous est confié bénéficie d'une attention minutieuse. Notre objectif est de sublimer votre véhicule, restaurer son éclat et préserver sa beauté dans le temps.
            </p>
            <p className="text-[#0d1117]/60 text-sm leading-relaxed mb-8">
              Nous utilisons exclusivement des produits haut de gamme et des techniques de pointe pour garantir un résultat sans compromis, dépassant les standards industriels.
            </p>
            <Link to="/a-propos"
            className="inline-flex items-center gap-2 text-cyan text-xs font-semibold tracking-widest uppercase hover:gap-3 transition-all group">
              En savoir plus <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            
            <img src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4c66f4c68_Export_Glow_Details-42_copie.jpg"

            alt="Detailing professionnel" className="w-full h-72 sm:h-80 object-cover rounded-2xl" />
            
            
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ICONS ── dark */}
      <section className="bg-[#0d1117] px-6 py-14 rounded-3xl border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {services.map((s, i) =>
            <Link key={i} to={s.path}
            className="group bg-[#0d1117] hover:bg-[#0f1318] p-8 flex flex-col items-start gap-3 transition-colors">
                <div className="text-cyan group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <div>
                  <div className="text-white text-xs font-bold tracking-wide uppercase mb-1 group-hover:text-cyan transition-colors">{s.title}</div>
                  <div className="text-white/40 text-xs">{s.desc}</div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── QUALITY ── light */}
      <section className="bg-white px-6 py-20 rounded-3xl">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative">
            
            <img src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/2a8afb107_Export_Glow_Details-39_copie.jpg"

            alt="Voiture premium" className="w-full h-80 sm:h-96 object-cover rounded-2xl" />
            
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              La qualité{' '}
              <span className="text-cyan">sans compromis</span>
            </h2>
            <div className="space-y-7">
              {qualityPoints.map((p, i) =>
              <div key={i} className="flex gap-4">
                  <span className="text-cyan font-black text-lg flex-shrink-0 mt-0.5">—</span>
                  <div>
                    <div className="text-[#0d1117] font-bold text-sm mb-1">{p.title}</div>
                    <div className="text-[#0d1117]/50 text-xs leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── dark */}
      <section className="bg-[#0d1117] px-6 py-14 rounded-3xl border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
            { num: '2000+', label: 'Véhicules traités' },
            { num: '2 ans', label: "D'expérience" },
            { num: '∞', label: 'Garantie vitres teintées' },
            { num: '25km', label: 'Déplacement offert' }].
            map((stat, i) =>
            <div key={i} className="bg-[#0d1117] px-8 py-10 flex flex-col gap-2">
                <div className="font-montserrat font-black text-cyan" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>{stat.num}</div>
                <div className="text-white/50 text-xs tracking-wide uppercase">{stat.label}</div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── AVIS GOOGLE ── light */}
      <GoogleReviews />

      {/* ── COLLABORATION SAGA MERCEDES ── dark */}
      <section className="bg-[#0d1117] rounded-3xl px-6 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}>
              <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-4">Partenariat officiel</p>
              <h2 className="font-montserrat font-bold text-white leading-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
                Collaboration<br /><span className="text-cyan">Saga Mercedes Charleroi</span>
              </h2>
              <p className="text-white/55 text-sm leading-loose mb-5">
                Nous avons l'honneur d'accompagner Saga Mercedes Charleroi dans la préparation esthétique de leurs véhicules neufs, destinés à une clientèle exigeante.
              </p>
              <p className="text-white/55 text-sm leading-loose mb-5">
                Chaque intervention est réalisée avec une précision absolue et un souci du détail constant, afin de sublimer chaque véhicule et révéler pleinement son élégance. Dans le respect des standards d'excellence de Mercedes-Benz, nous apportons une attention particulière à chaque finition pour atteindre un niveau de présentation irréprochable.
              </p>
              <p className="text-white/55 text-sm leading-loose">
                Au-delà de la préparation, notre démarche s'inscrit dans la création d'une véritable expérience : celle de découvrir son véhicule dans un état parfait, à la hauteur de son prestige.
              </p>
              <div className="mt-8 border-l-2 border-cyan pl-5 py-1 text-sm text-cyan/80 italic">
                Cette collaboration reflète notre engagement pour l'excellence et la confiance accordée à notre savoir-faire.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative">
              <img
                src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/4f8f2121e_ClasseGcopie.jpg"
                alt="Saga Mercedes Charleroi"
                className="w-full aspect-[4/3] object-cover rounded-2xl" />
              <div className="absolute bottom-5 left-5 bg-[#0d1117]/90 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3">
                <div className="text-white/40 text-xs tracking-widest uppercase mb-0.5">Partenaire officiel</div>
                <div className="text-white font-bold text-sm">Saga Mercedes Charleroi</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── light */}
      <ContactSection />

    </div>);

}