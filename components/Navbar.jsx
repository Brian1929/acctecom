import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ACCTECOM_PHONE_DISPLAY,
  ACCTECOM_EMAIL,
  acctecomTelHref,
  acctecomMailHref,
} from '@/lib/contact';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 50) setMobileOpen(false);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Productos', href: '#productos' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;

    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight ?? 140;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  const onHero = !scrolled;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}>
        
        {/* Barra de Contacto Superior */}
        <div className={`transition-all duration-300 overflow-hidden bg-black/10 backdrop-blur-sm ${scrolled ? 'h-0' : 'h-10'}`}>
          <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-end gap-6 text-sm">
            <a
              href={acctecomTelHref}
              className={`flex items-center gap-1.5 transition-colors duration-300 ${
                onHero ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono text-xs tracking-wide">{ACCTECOM_PHONE_DISPLAY}</span>
            </a>
            <a
              href={acctecomMailHref}
              className={`flex items-center gap-1.5 transition-colors duration-300 ${
                onHero ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="font-mono text-xs tracking-wide">{ACCTECOM_EMAIL}</span>
            </a>
          </div>
        </div>

        {/* Contenedor Principal */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-28' : 'h-32 sm:h-36'
        }`}>
          
          {/* Botón del Logo */}
          <button
            onClick={() => scrollToSection('#inicio')}
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Ir al inicio"
          >
            <img
              src="https://0201.nccdn.net/4_2/000/000/06b/a1b/logo-completo-transparente.png"
              alt="AccTecom Dominicana"
              className={`h-[6rem] sm:h-[7rem] w-auto object-contain transition-all duration-300 ${
                onHero ? 'brightness-0 invert opacity-95' : ''
              }`}
            />
          </button>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  onHero
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contacto')}
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-md shadow-primary/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Cotizar Ahora
            </Button>
          </nav>

          {/* Menú Móvil Botón */}
          <button
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              onHero ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-accent'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Menú Móvil Desplegable */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`fixed inset-x-0 z-40 bg-card/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden transition-all duration-300 ${
              scrolled ? 'top-28' : 'top-32 sm:top-36'
            }`}
          >
            <nav className="flex flex-col p-6 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-base font-medium text-foreground hover:bg-accent rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-base font-semibold shadow-lg shadow-primary/10"
              >
                Cotizar Ahora
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}