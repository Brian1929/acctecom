import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HERO_IMG = "https://media.base44.com/images/public/6a0d4662c9c4980c9605fbd2/c49422802_Gemini_Generated_Image_bf6jrpbf6jrpbf6j.png";

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 sm:pt-48 pb-20 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block font-mono text-xs tracking-widest uppercase text-primary-foreground/60 mb-6">
              Santiago de los Caballeros, R.D.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-[1.05] mb-6">
              Tecnología<br /><span className="text-primary">sin límites</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-lg">
              Soporte técnico especializado, venta de equipos y accesorios esenciales para el día a día. Protegemos y optimizamos tu hogar o empresa con soluciones avanzadas de seguridad electrónica.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollTo('#servicios')} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-medium group">
              Explorar Servicios <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => scrollTo('#contacto')} size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Contactar
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="overflow-hidden py-4">
          <div className="flex animate-ticker whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                {['Reparación PC', 'Laptops', 'Bocinas', 'Tinta', 'Impresoras', 'Monitores', 'Audífonos', 'Cables', 'Cámaras de Seguridad', 'Servicio a Domicilio'].map((s) => (
                  <span key={s + i} className="flex items-center gap-3 text-sm font-mono text-primary-foreground/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />{s}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40" />
      </motion.div>
    </section>
  );
}