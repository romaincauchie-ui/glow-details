import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/dc04e5608_Fichier24x-8.png"
                alt="Glow & Details"
                className="h-16 w-auto invert"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-xs tracking-[0.25em] uppercase font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:0472010390" className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                <Phone size={12} className="text-cyan" />
                0472/01.03.90
              </a>
              <a href="mailto:glowdetails.lj@gmail.com" className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                <Mail size={12} className="text-cyan" />
                glowdetails.lj@gmail.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white/40 text-xs tracking-[0.25em] uppercase font-semibold mb-4">Réseaux sociaux</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/glow.and.details" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                <Instagram size={13} className="text-cyan" /> Instagram
              </a>
              <a href="https://www.facebook.com/GlowDetails" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
                <Facebook size={13} className="text-cyan" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">© {new Date().getFullYear()} Glow & Details. Tous droits réservés.</p>
          <p className="text-xs text-white/30">Tous les tarifs s'entendent hors TVA (HTVA)</p>
        </div>
      </div>
    </footer>);

}