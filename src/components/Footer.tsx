import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = {
  "Paquetes": ["América del Sur", "Europa", "Asia & Océano", "Aventura Extrema", "Luna de Miel"],
  "Empresa": ["Sobre Nosotros", "Nuestro Equipo", "Blog de Viajes", "Trabaja con Nosotros", "Términos"],
  "Ayuda": ["Preguntas Frecuentes", "Política de Cancelación", "Formas de Pago", "Seguro de Viaje", "Contacto"],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Wave top */}
      <div className="-mt-1">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--foreground))"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-4 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">LA FINCA TOURS</p>
                <p className="text-xs opacity-60">Agencia de Viajes</p>
              </div>
            </div>
            <p className="text-sm opacity-70 mb-5 leading-relaxed max-w-xs">
              Desde Costa Rica hacia cualquier destino. Llevamos más de 25 años creando experiencias de viaje únicas e inolvidables.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="mt-5 space-y-2 text-sm opacity-70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+506 2222-3333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@lafincatours.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>San José, Costa Rica</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-secondary">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm opacity-60">
          <p>© 2025 La Finca Tours. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacidad</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Términos</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
