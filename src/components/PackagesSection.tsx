"use client";

import { useState } from "react";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["Todos", "América", "Europa", "Aventura", "Exóticos"];

const packages = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",
    badge: "🔥 Popular",
    category: "Exóticos",
    title: "Excursión del Ártico",
    description: "Un viaje por el ártico para ver las auroras boreales en todo su esplendor.",
    location: "Islandia, Noruega",
    price: 3600,
    duration: "10 días",
    rating: 4.9,
    reviews: 48,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
    badge: "⭐ Destacado",
    category: "América",
    title: "Bogotá Cultural",
    description: "Bogotá, una ciudad que combina historia, cultura y modernidad. Recorre sus calles llenas de arte.",
    location: "Bogotá, Colombia",
    price: 765,
    duration: "5 días",
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80",
    badge: "🌟 Nuevo",
    category: "América",
    title: "Medellín Vibrante",
    description: "Adrenalina y cultura en la ciudad de la eterna primavera. Tours, gastronomía y más.",
    location: "Medellín, Colombia",
    price: 520,
    duration: "4 días",
    rating: 4.9,
    reviews: 95,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
    badge: "💎 Premium",
    category: "Europa",
    title: "París Romántico",
    description: "La ciudad del amor te espera. Torre Eiffel, Louvre, y gastronomía de primer nivel.",
    location: "París, Francia",
    price: 2100,
    duration: "7 días",
    rating: 4.7,
    reviews: 210,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?w=600&q=80",
    badge: "🏔️ Aventura",
    category: "Aventura",
    title: "Machu Picchu",
    description: "Camina por el Camino Inca y descubre la maravilla del mundo entre las nubes.",
    location: "Cusco, Perú",
    price: 890,
    duration: "6 días",
    rating: 5.0,
    reviews: 180,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    badge: "🌺 Exótico",
    category: "Exóticos",
    title: "Bali Paraíso",
    description: "Templos milenarios, arrozales en terrazas y playas de arena blanca en la Isla de los Dioses.",
    location: "Bali, Indonesia",
    price: 1850,
    duration: "9 días",
    rating: 4.9,
    reviews: 156,
  },
];

export default function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  return (
    <section id="paquetes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
            ✈️ Nuestros Destinos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Paquetes{" "}
            <span className="text-gradient">Destacados</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Descubre nuestros paquetes más populares y experiencias únicas
            seleccionadas especialmente para ti.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-background text-muted-foreground border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((pkg, i) => (
            <div
              key={pkg.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 rounded-full shadow">
                  {pkg.badge}
                </span>
                <span className="absolute top-3 right-3 bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {pkg.category}
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{pkg.location}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-medium text-foreground">{pkg.rating}</span>
                    <span>({pkg.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Desde</p>
                    <p className="text-2xl font-extrabold text-primary">
                      ${pkg.price.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold group/btn"
                  >
                    Ver Detalles
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 font-bold transition-all"
          >
            Ver Todos los Paquetes
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
