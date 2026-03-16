import { CheckCircle2, Plane, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  { icon: <Plane className="w-5 h-5" />, value: "25+", label: "Años de experiencia" },
  { icon: <Users className="w-5 h-5" />, value: "500+", label: "Clientes felices" },
  { icon: <Award className="w-5 h-5" />, value: "50+", label: "Destinos únicos" },
];

const benefits = [
  "Paquetes personalizados para cada viajero",
  "Guías certificados y bilingües",
  "Transporte cómodo y seguro incluido",
  "Seguro de viaje en todos los paquetes",
  "Soporte 24/7 durante tu viaje",
  "Garantía de precio más bajo",
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative animate-slideInLeft">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-125">
              <Image
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=700&q=80"
                alt="About La Finca Tours"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-2xl p-6 flex gap-6 border border-border">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-white mx-auto mb-1">
                    {s.icon}
                  </div>
                  <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-tight max-w-15">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full gradient-hero opacity-20 blur-3xl -z-10 animate-float" />
          </div>

          {/* Text side */}
          <div className="animate-slideInRight">
            <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
              🌿 ¿Por qué elegirnos?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Tu aventura perfecta{" "}
              <span className="text-gradient">nos importa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              En La Finca Tours llevamos más de 25 años diseñando experiencias de viaje
              únicas e inolvidables. Somos una agencia costarricense con presencia
              internacional, comprometida con ofrecerte el mejor servicio y los mejores precios.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="rounded-full gradient-hero text-primary-foreground font-bold shadow-xl hover:opacity-90 transition-opacity px-8"
              >
                Conoce Nuestro Equipo
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="rounded-full text-primary hover:bg-primary/10 font-semibold"
              >
                Ver Historia →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
