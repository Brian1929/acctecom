import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import {
  ACCTECOM_PHONE_DISPLAY,
  ACCTECOM_EMAIL,
  acctecomTelHref,
  acctecomMailHref,
  acctecomWhatsAppHref,
} from '@/lib/contact';

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: ACCTECOM_PHONE_DISPLAY, href: acctecomTelHref },
  { icon: Mail, label: 'Email', value: ACCTECOM_EMAIL, href: acctecomMailHref },
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Franco Bidó, No. 265, Nibaje, Santiago de los Caballeros, R.D.',
    href: 'https://maps.google.com/?q=AVENIDA+FRANCO+BIDO,+No.+265,+NIBAJE,+SANTIAGO+DE+LOS+CABALLEROS,+R.D',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lunes a Viernes: 8:00 AM - 6:00 PM | Sábado: 9:00 AM - 1:00 PM',
  },
];

const opcionesServicios = [
  'Reparación de PC',
  'Reparación de Laptop',
  'Venta de Equipos',
  'Cámaras de Seguridad',
  'Servicio a Domicilio',
  'Bocinas',
  'Tinta',
  'Impresoras',
  'Monitores',
  'Audífonos',
  'Cables',
  'Otro',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('¡Mensaje enviado con éxito!');
      setFormData({ nombre: '', telefono: '', servicio: '', mensaje: '' });
    }, 1000);
  };

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-muted/30 scroll-mt-36 sm:scroll-mt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground leading-tight mb-6">
              Estamos para servirte
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-10">
              ¿Tienes un equipo que necesita reparación? ¿Buscas equipos tecnológicos de calidad?
              Contáctanos y recibe atención personalizada.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href="https://www.facebook.com/acctecomrd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/acctecomrd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={acctecomWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl border border-border/60 p-6 sm:p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Envíanos un mensaje
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Completa tus datos y te responderemos en breve.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder={`Ej. ${ACCTECOM_PHONE_DISPLAY}`}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="servicio" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    ¿Qué necesitas? *
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <option value="" disabled>
                      Selecciona un servicio o producto
                    </option>
                    {opcionesServicios.map((opcion) => (
                      <option key={opcion} value={opcion}>
                        {opcion}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensaje" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Detalles de tu solicitud
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                    className="w-full p-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
                >
                  {loading ? 'Enviando...' : (
                    <>
                      Enviar Solicitud
                      <Send className="w-4 h-4 ml-2 inline" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
