import React from 'react';
import { motion } from 'framer-motion';

const LAPTOP_IMG = "https://media.base44.com/images/public/6a0d4662c9c4980c9605fbd2/4c04974a4_generated_143a62d9.png";

const features = [
  {
    metric: '98%',
    label: 'Tasa de Reparación Exitosa',
    desc: 'Nuestros técnicos resuelven casi todos los problemas que llegan a nuestro taller.',
  },
  {
    metric: '48h',
    label: 'Entrega Promedio',
    desc: 'La mayoría de reparaciones se completan en menos de 48 horas.',
  },
  {
    metric: '6 meses',
    label: 'Garantía Estándar',
    desc: 'Todas nuestras reparaciones incluyen garantía de servicio.',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Proof cards */}
          <div className="order-2 lg:order-1">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">
              Resultados Reales
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight mb-10">
              Calidad que habla por sí misma
            </h2>
            <div className="space-y-6">
              {features.map((f, idx) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-6 p-5 rounded-xl bg-card border border-border/60 hover:border-primary/20 transition-colors"
                >
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-primary whitespace-nowrap">
                    {f.metric}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">{f.label}</h4>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={LAPTOP_IMG} alt="Reparación de laptop" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
 