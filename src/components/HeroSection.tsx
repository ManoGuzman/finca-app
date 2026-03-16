"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    badge: "🌿 Destino Natural",
    title: "Descubre el Mundo con",
    highlight: "La Finca Tours",
    subtitle: "Desde Costa Rica hacia cualquier destino. Experiencias únicas, aventuras inolvidables y los mejores precios del mercado.",
    cta: "Ver Paquetes",
    cta2: "Contáctanos",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80",
    badge: "🌎 Aventura Garantizada",
    title: "Viajes a Medida",
    highlight: "Para Ti y Tu Familia",
    subtitle: "25+ años de experiencia en turismo. Atención personalizada 24/7 para que tu viaje sea perfecto.",
    cta: "Ver Paquetes",
    cta2: "Saber Más",
  },
  {
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
    badge: "✈️ Mejores Precios",
    title: "Explora Más de",
    highlight: "50 Destinos Únicos",
    subtitle: "Garantizamos las mejores tarifas del mercado con paquetes que incluyen todo lo que necesitas.",
    cta: "Ver Paquetes",
    cta2: "Ver Destinos",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goto = (index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => goto(current + 1), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const slide = slides[current];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="Hero background"
          className={`w-full h-full object-cover transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}
        />
        <div className="absolute inset-0 gradient-hero opacity-75" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-24">
        <div
          className={`max-w-3xl transition-all duration-500 ${
            animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fadeInUp">
            {slide.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp delay-100">
            {slide.title}{" "}
            <span className="block text-secondary drop-shadow-lg">{slide.highlight}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 leading-relaxed animate-fadeInUp delay-200">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 animate-fadeInUp delay-300">
            <Button
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold shadow-2xl hover:scale-105 transition-transform px-8"
            >
              {slide.cta}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary font-semibold px-8 transition-all"
            >
              {slide.cta2}
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-4 mt-10 animate-fadeInUp delay-400">
            <div className="flex -space-x-2">
              {["🧑", "👩", "👨", "🧑"].map((e, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-sm border-2 border-white/50">
                  {e}
                </div>
              ))}
            </div>
            <div className="text-white text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white/80">+500 viajeros satisfechos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button
        onClick={() => goto(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => goto(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goto(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-8 h-3 bg-accent" : "w-3 h-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
