import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { toast } from "sonner";

const serviceOptions = [
  { value: 'reparacion_pc', label: 'Reparación de PC' },
  { value: 'reparacion_laptop', label: 'Reparación de Laptop' },
  { value: 'venta_equipos', label: 'Venta de Equipos' },
  { value: 'camaras_seguridad', label: 'Cámaras de Seguridad' },
  { value: 'servicio_domicilio', label: 'Servicio a Domicilio' },
  { value: 'bocinas', label: 'Bocinas' },
  { value: 'tinta', label: 'Tinta' },
  { value: 'impresoras', label: 'Impresoras' },
  { value: 'monitores', label: 'Monitores' },
  { value: 'audifonos', label: 'Audífonos' },
  { value: 'cables', label: 'Cables' },
  { value: 'otro', label: 'Otro' },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service_type: '', message: ''
  });

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setSending(true);
    await base44.entities.ContactInquiry.create(form);
    setSending(false);
    setSubmitted(true);
    toast.success('¡Mensaje enviado con éxito!');
  };

  const canNext = () => {
    if (step === 0) return form.service_type;
    if (step === 1) return form.name && form.phone;
    return true;
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
          ¡Gracias por contactarnos!
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Hemos recibido tu solicitud. Un miembro de nuestro equipo te contactará pronto.
        </p>
        <Button 
          variant="outline" 
          className="mt-8 rounded-full"
          onClick={() => { setSubmitted(false); setStep(0); setForm({ name: '', email: '', phone: '', service_type: '', message: '' }); }}
        >
          Enviar otra consulta
        </Button>
      </motion.div>
    );
  }

  const steps = [
    // Step 1: Service
    <div key="step0" className="space-y-4">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        ¿Qué necesitas?
      </h3>
      <p className="text-sm text-muted-foreground mb-6">Selecciona un servicio o producto de tu interés</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {serviceOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => updateField('service_type', opt.value)}
            className={`p-4 rounded-xl border text-sm font-medium text-left transition-all ${
              form.service_type === opt.value 
                ? 'border-primary bg-primary/5 text-primary' 
                : 'border-border hover:border-primary/30 text-foreground'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>,

    // Step 2: Info
    <div key="step1" className="space-y-4">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        ¿Cómo te contactamos?
      </h3>
      <p className="text-sm text-muted-foreground mb-6">Déjanos tus datos y te responderemos pronto</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <Input 
          placeholder="Tu nombre *" 
          value={form.name} 
          onChange={(e) => updateField('name', e.target.value)}
          className="rounded-xl h-12"
        />
        <Input 
          placeholder="Teléfono *" 
          value={form.phone} 
          onChange={(e) => updateField('phone', e.target.value)}
          className="rounded-xl h-12"
        />
      </div>
      <Input 
        placeholder="Email (opcional)" 
        type="email"
        value={form.email} 
        onChange={(e) => updateField('email', e.target.value)}
        className="rounded-xl h-12"
      />
    </div>,

    // Step 3: Message
    <div key="step2" className="space-y-4">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        Cuéntanos más
      </h3>
      <p className="text-sm text-muted-foreground mb-6">Describe el problema o lo que necesitas</p>
      <Textarea 
        placeholder="Describe tu situación o lo que necesitas..." 
        value={form.message}
        onChange={(e) => updateField('message', e.target.value)}
        className="rounded-xl min-h-[140px] resize-none"
      />
    </div>,
  ];

  return (
    <div>
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[0, 1, 2].map((s) => (
          <div
            key={s}
            className={`h-1 rounded-full flex-1 transition-colors duration-300 ${
              s <= step ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Button
          variant="ghost"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Atrás
        </Button>
        {step < 2 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canNext()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            Siguiente
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={sending || !canNext()}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
          >
            {sending ? 'Enviando...' : 'Enviar Consulta'}
            <Send className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}