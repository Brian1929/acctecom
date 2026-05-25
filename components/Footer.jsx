import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import {
  ACCTECOM_PHONE_DISPLAY,
  ACCTECOM_EMAIL,
  acctecomTelHref,
  acctecomMailHref,
} from '@/lib/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img 
          src="https://0201.nccdn.net/4_2/000/000/06b/a1b/logo-completo-transparente.png" 
          alt="" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-start">
          
          {/* 1. Columna de Marca */}
        {/* 1. Columna de Marca */}
<div className="space-y-6">
  {/* AJUSTE: Subimos a h-18 y aumentamos opacidad a 95 para resaltar */}
  <img 
    src="https://0201.nccdn.net/4_2/000/000/06b/a1b/logo-completo-transparente.png" 
    alt="acctecom Dominicana" 
    className="h-[4.5rem] w-auto brightness-0 invert opacity-95 object-contain"
  />
  <p className="text-primary-foreground/50 font-body leading-relaxed text-sm max-w-sm">
    Proveedores de confianza en soporte técnico especializado, sistemas de seguridad electrónica y distribución de hardware corporativo, periféricos y consumibles.
  </p>
</div>
          {/* 2. Columna de Servicios */}
          <div className="md:pl-4">
            <h4 className="font-heading font-semibold text-primary-foreground/90 mb-5 text-sm uppercase tracking-wider">
              Servicios y productos
            </h4>
            <ul className="space-y-3">
              {['Reparación de PC', 'Reparación de Laptops', 'Cámaras de Seguridad', 'Bocinas / Audio', 'Impresoras y Suministros', 'Monitores y Cables'].map((s) => (
                <li key={s}>
                  <span className="text-sm text-primary-foreground/40 hover:text-primary transition-colors cursor-default block">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Columna de Contacto */}
          <div className="md:pl-4">
            <h4 className="font-heading font-semibold text-primary-foreground/90 mb-5 text-sm uppercase tracking-wider">
              Contacto
            </h4>
            <div className="space-y-4">
              <a href={acctecomTelHref} className="flex items-center gap-3 text-sm text-primary-foreground/40 hover:text-primary transition-colors group">
                <Phone className="w-4 h-4 text-primary-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="font-mono">{ACCTECOM_PHONE_DISPLAY}</span>
              </a>
              <a href={acctecomMailHref} className="flex items-center gap-3 text-sm text-primary-foreground/40 hover:text-primary transition-colors group">
                <Mail className="w-4 h-4 text-primary-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="break-all">{ACCTECOM_EMAIL}</span>
              </a>
              <a href="https://maps.google.com/?q=AVENIDA+FRANCO+BIDO,+No.+265,+NIBAJE,+SANTIAGO+DE+LOS+CABALLEROS,+R.D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-primary-foreground/40 hover:text-primary transition-colors group">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
                <span className="leading-relaxed">Av. Franco Bidó, No. 265, Nibaje, Santiago de los Caballeros, R.D.</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/30 font-mono">
            © {currentYear} Acctecom Dominicana. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            
          </div>
        </div>
      </div>
    </footer>
  );
}