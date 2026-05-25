import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ABOUT_IMG = "https://media.base44.com/images/public/6a0d4662c9c4980c9605fbd2/ec969a96d_generated_1b77fb9c.png";
const SECURITY_IMG = "https://media.base44.com/images/public/6a0d4662c9c4980c9605fbd2/f4773a24b_generated_cffdb469.png";

const highlights = [
  'Técnicos certificados y experimentados',
  'Servicio rápido a domicilio',
  'Garantía en todas las reparaciones',
  'Precios competitivos y transparentes',
  'Venta de bocinas, tinta, impresoras, monitores, audífonos y cables',
  'Atención personalizada al cliente',
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenedor de Imágenes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
              <img 
                src={ABOUT_IMG} 
                alt="Showroom de Acctecom con variedad de equipos tecnológicos" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:right-8 w-48 sm:w-56 rounded-xl overflow-hidden shadow-2xl border-4 border-card bg-muted">
              <img 
                src={SECURITY_IMG} 
                alt="Instalación de sistemas de cámaras de seguridad" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bloque de Contenido */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
              Tu aliado tecnológico
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              En acctecom Dominicana nos especializamos en brindar soluciones tecnológicas integrales. 
              Desde reparación de equipos hasta instalación de sistemas de seguridad, 
              nuestro compromiso es ofrecer un servicio de excelencia que supere tus expectativas.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}