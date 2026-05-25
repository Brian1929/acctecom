import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Laptop, Home, Camera, ShoppingBag } from 'lucide-react';

const services = [
  { icon: Monitor, title: 'Reparación de PC', desc: 'Diagnóstico y reparación completa de hardware y software para equipos de escritorio.', accent: 'from-blue-500/20 to-blue-600/5' },
  { icon: Laptop, title: 'Reparación de Laptops', desc: 'Servicio rápido y de calidad para todo tipo de portátiles, a precios justos.', accent: 'from-indigo-500/20 to-indigo-600/5' },
  { icon: Camera, title: 'Cámaras de Seguridad', desc: 'Instalación y configuración de sistemas de videovigilancia profesional.', accent: 'from-amber-500/20 to-amber-600/5' },
  { icon: ShoppingBag, title: 'Venta de Equipos', desc: 'Equipos tecnológicos de alta calidad con garantía y soporte técnico.', accent: 'from-rose-500/20 to-rose-600/5' },
  { icon: Home, title: 'Servicio a Domicilio', desc: 'Nuestro equipo profesional te visita en tu casa u oficina.', accent: 'from-teal-500/20 to-teal-600/5' },
];

export default function ServiceMatrix() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">Nuestros Servicios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4">Tu aliado estratégico en tecnología y soporte integral.</h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed">Desde mantenimiento especializado y venta de equipos hasta soluciones avanzadas en seguridad electrónica. Mantenemos tu hogar y empresa siempre conectados y protegidos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`group relative flex h-full flex-col p-6 rounded-2xl border border-border/60 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default sm:col-span-1 lg:col-span-2 ${
                idx === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}