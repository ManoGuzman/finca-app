"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "María González",
    location: "San José, Costa Rica",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    date: "Marzo, 2025",
    text: "¡Experiencia increíble! La Finca Tours organizó todo perfectamente. El tour a Medellín superó todas nuestras expectativas. Los guías fueron excepcionales y el hotel de primera categoría.",
    trip: "Medellín Vibrante",
  },
  {
    name: "Carlos Rodríguez",
    location: "Alajuela, Costa Rica",
    avatar: "https://i.pravatar.cc/80?img=12",
    rating: 5,
    date: "Febrero, 2025",
    text: "Llevé a mi familia al Ártico y fue el viaje de nuestras vidas. Las auroras boreales fueron mágicas. Todo el equipo de La Finca Tours estuvo pendiente de nosotros en todo momento.",
    trip: "Excursión del Ártico",
  },
  {
    name: "Ana Vargas",
    location: "Heredia, Costa Rica",
    avatar: "https://i.pravatar.cc/80?img=23",
    rating: 5,
    date: "Enero, 2025",
    text: "Mi viaje a Machu Picchu fue perfecto. La atención fue excelente, los precios realmente competitivos y el itinerario fue perfecto. ¡Ya estoy planeando mi próximo viaje con ellos!",
    trip: "Machu Picchu",
  },
  {
    name: "Jorge Méndez",
    location: "Cartago, Costa Rica",
    avatar: "https://i.pravatar.cc/80?img=33",
    rating: 5,
    date: "Diciembre, 2024",
    text: "Viajé solo a Bali y me sentí acompañado en todo momento gracias al equipo. Hoteles fantásticos, tours organizados a la perfección. 100% recomendados.",
    trip: "Bali Paraíso",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, [auto]);

  return (
    <section id="testimonios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-5" />
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="hsl(var(--muted) / 0.3)" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent/10 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
            ⭐ Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
        </div>

        {/* Main testimonial */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-primary/10" />

            <div className="flex items-center gap-4 mb-6">
              <Image
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover ring-4 ring-primary/20"
              />
              <div>
                <p className="font-bold text-lg">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].location}</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className="ml-auto text-right">
                <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  ✈️ {testimonials[current].trip}
                </span>
                <p className="text-xs text-muted-foreground mt-1">{testimonials[current].date}</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => { setAuto(false); setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length); }}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAuto(false); setCurrent(i); }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button
              onClick={() => { setAuto(false); setCurrent((c) => (c + 1) % testimonials.length); }}
              className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => { setAuto(false); setCurrent(i); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 text-sm ${i === current
                ? "border-primary bg-primary/10 text-primary font-semibold"
                : "border-border text-muted-foreground hover:border-primary/50"
                }`}
            >
              <Image src={t.avatar} alt={t.name} width={24} height={24} className="w-6 h-6 rounded-full" />
              <span className="hidden sm:inline">{t.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
