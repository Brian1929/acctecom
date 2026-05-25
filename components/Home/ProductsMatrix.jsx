import React from 'react';
import { motion } from 'framer-motion';
import { Speaker, Droplets, Printer, Monitor, Headphones, Cable } from 'lucide-react';

const products = [
  { 
    icon: Speaker, 
    title: 'Audio y Sonido', 
    desc: 'Bocinas y sistemas de audio multimedia para el hogar, oficinas y conferencias con máxima claridad y potencia.', 
    accent: 'from-violet-500/20 to-violet-600/5' 
  },
  { 
    icon: Droplets, 
    title: 'Tintas y Toners', 
    desc: 'Suministros originales y compatibles de alto rendimiento para las principales marcas de impresión del mercado.', 
    accent: 'from-cyan-500/20 to-cyan-600/5' 
  },
  { 
    icon: Printer, 
    title: 'Impresoras y Equipos', 
    desc: 'Equipos de inyección, sistemas de tinta continua y tecnología láser listos para optimizar el flujo de trabajo.', 
    accent: 'from-slate-500/20 to-slate-600/5' 
  },
  { 
    icon: Monitor, 
    title: 'Monitores y Pantallas', 
    desc: 'Monitores LED de alta resolución ideales para productividad de oficina, diseño profesional y estaciones gaming.', 
    accent: 'from-blue-500/20 to-blue-600/5' 
  },
  { 
    icon: Headphones, 
    title: 'Periféricos y Audio Personal', 
    desc: 'Audífonos inalámbricos y alámbricos equipados con cancelación de ruido y micrófonos para llamadas claras.', 
    accent: 'from-rose-500/20 to-rose-600/5' 
  },
  { 
    icon: Cable, 
    title: 'Conectividad y Cables', 
    desc: 'Cables HDMI de alta velocidad, adaptadores, cableado de red estructural y cargadores certificados.', 
    accent: 'from-amber-500/20 to-amber-600/5' 
  },
];

export default function ProductsMatrix() {
  return (
    <section id="productos" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">Suministros</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
            Componentes y accesorios tecnológicos.
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">
            Suministramos periféricos y equipos esenciales respaldados por garantía directa y asesoría especializada para asegurar la compatibilidad exacta que necesitas.
          </p>
        </div>

        {/* Grid simétrico perfectamente alineado en alturas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between h-full cursor-default"
            >
              {/* Efecto Glow en Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}