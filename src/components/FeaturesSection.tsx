import { Clock, DollarSign, Globe, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: "25+ Años",
    subtitle: "De experiencia en turismo",
    color: "from-primary to-primary/70",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Mejores Precios",
    subtitle: "Garantizamos las mejores tarifas",
    color: "from-accent to-accent/70",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Atención 24/7",
    subtitle: "Soporte durante todo tu viaje",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "50+ Destinos",
    subtitle: "Países disponibles para explorar",
    color: "from-primary to-secondary",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${f.color} text-white cursor-default`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-sm mt-1 text-white/85">{f.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
