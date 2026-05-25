import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Años de Experiencia', sub: 'en el mercado dominicano' },
  { value: '5,000+', label: 'Equipos Reparados', sub: 'con satisfacción garantizada' },
  { value: '48h', label: 'Tiempo de Respuesta', sub: 'en servicio técnico' },
  { value: '100%', label: 'Compromiso', sub: 'con la calidad' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="text-center lg:text-left">
              <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base font-heading font-medium text-primary-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-primary-foreground/40 font-body">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}