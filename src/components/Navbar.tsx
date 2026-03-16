"use client";

import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className={`font-bold text-lg leading-tight transition-colors ${scrolled ? "text-primary" : "text-white"}`}>
              LA FINCA TOURS
            </p>
            <p className={`text-xs transition-colors ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
              Agencia de Viajes
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${scrolled ? "text-foreground" : "text-white hover:bg-white/20 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="ml-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
          >
            Reservar Ahora
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 pb-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="mt-2 rounded-full bg-accent text-accent-foreground">
            Reservar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
}
