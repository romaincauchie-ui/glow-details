import { useState } from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await base44.entities.ContactRequest.create(form);
    setSent(true);
  };

  return (
    <div className="bg-[#0d1117] text-foreground">
      {/* Hero — dark */}
      <section className="relative h-72 sm:h-96 flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1493238792000-8113da705763?w=1920&q=80')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d1117]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-3">Réservation & devis</p>
          <h1 className="font-montserrat font-bold text-5xl sm:text-6xl text-white">Contact</h1>
        </div>
      </section>

      {/* Main — light */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-cyan text-xs tracking-[0.4em] uppercase font-semibold mb-5">Prendre contact</p>
            <h2 className="font-montserrat font-bold text-[#0d1117] leading-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Discutons de votre<br />
              <span className="text-cyan">projet detailing</span>
            </h2>
            <p className="text-[#0d1117]/55 text-sm leading-relaxed mb-10">
              Uniquement sur rendez-vous. Contactez-nous pour obtenir un devis personnalisé ou pour planifier une intervention à votre domicile.
            </p>

            <div className="space-y-6">
              <a href="tel:0472010390" className="flex items-center gap-5 group hidden">
                <div className="w-12 h-12 border border-cyan/50 flex items-center justify-center group-hover:bg-cyan group-hover:border-cyan transition-all">
                  <Phone size={16} className="text-cyan group-hover:text-[#0d1117] transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-0.5">Téléphone</div>
                  <div className="text-[#0d1117] font-semibold text-sm">0472/01.03.90</div>
                </div>
              </a>

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

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-xs text-[#0d1117]/40 tracking-widest uppercase mb-4">Suivez-nous</div>
              <div className="flex items-center gap-4">
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
            <div className="bg-gray-50 border border-cyan/30 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-cyan/10 border border-cyan flex items-center justify-center mb-6">
                  <CheckCircle size={28} className="text-cyan" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#0d1117] mb-4">Message envoyé !</h3>
                <p className="text-[#0d1117]/55 text-sm leading-relaxed max-w-sm">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais pour convenir d'un rendez-vous.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5">
                <h3 className="font-bold text-[#0d1117] text-sm tracking-[0.15em] uppercase mb-6">Demande de rendez-vous</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Nom *</label>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/30"
                  placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Téléphone</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/30"
                  placeholder="0472/..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/30"
                placeholder="votre@email.com" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Véhicule</label>
                  <input value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors placeholder:text-[#0d1117]/30"
                placeholder="Marque, modèle, année" />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Service souhaité</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors">
                    <option value="">Sélectionnez un service</option>
                    <option value="domicile">Nettoyage à domicile</option>
                    <option value="interieur">Nettoyage intérieur</option>
                    <option value="exterieur">Nettoyage extérieur</option>
                    <option value="formule-complete">Formule complète</option>
                    <option value="polissage">Polissage</option>
                    <option value="ceramique">Revêtement céramique</option>
                    <option value="vitres">Vitres teintées</option>
                    <option value="autre">Autre / Devis personnalisé</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#0d1117]/45 mb-2">Message</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white border border-gray-200 rounded-xl text-[#0d1117] text-sm px-4 py-3 focus:border-cyan focus:outline-none transition-colors resize-none placeholder:text-[#0d1117]/30"
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
      </section>
    </div>);

}