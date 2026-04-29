import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={`transition-all duration-300 ${
      scrolled ? 'bg-[#0d1117]/95 backdrop-blur-sm shadow-lg' : 'bg-[#0d1117]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="https://media.base44.com/images/public/69c2aed943bbaa851541e30d/961b2523c_Plandetravail8copie92x-8.png"
            alt="Glow & Details"
            className="h-28 w-auto invert group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-cyan'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="https://detailr.co/book/glowanddetails"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-[#0d1117] text-xs font-black tracking-[0.15em] uppercase px-5 py-2.5 hover:bg-cyan/80 transition-colors duration-200 rounded-xl"
          >
            Réserver votre prestation
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path}
              className={`text-sm font-semibold uppercase tracking-widest ${
                location.pathname === link.path ? 'text-cyan' : 'text-white/70'
              }`}>
              {link.label}
            </Link>
          ))}
          <a href="https://detailr.co/book/glowanddetails"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-[#0d1117] text-xs font-black tracking-widest uppercase px-5 py-3 text-center w-fit rounded-xl">
            Réserver votre prestation
          </a>
        </div>
      )}
    </nav>
  );
}