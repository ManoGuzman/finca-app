"use client";

import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Teléfono",
    value: "+506 2222-3333",
    href: "tel:+50622223333",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "info@lafincatours.com",
    href: "mailto:info@lafincatours.com",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Dirección",
    value: "San José, Costa Rica",
    href: "#",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    value: "+506 8888-9999",
    href: "https://wa.me/50688889999",
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            📬 Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            ¿Listo para tu próxima{" "}
            <span className="text-gradient">aventura?</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-lg">
            Nuestro equipo está disponible 24/7 para ayudarte a planificar el viaje de tus sueños.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((c, i) => (
              <a
                key={i}
                href={c.href}
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-40 bg-muted flex items-center justify-center border border-border">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">San José, Costa Rica</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
            <h3 className="text-2xl font-bold mb-6">Solicitar Información</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Nombre</label>
                  <Input placeholder="Tu nombre" className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Apellido</label>
                  <Input placeholder="Tu apellido" className="rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <Input type="email" placeholder="tu@email.com" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Destino de interés</label>
                <Input placeholder="¿A dónde quieres ir?" className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu viaje ideal..."
                  className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                />
              </div>
              <Button
                size="lg"
                className="w-full rounded-xl gradient-hero text-primary-foreground font-bold hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar Solicitud
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
