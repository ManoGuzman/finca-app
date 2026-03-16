import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PackagesSection from "@/components/PackagesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PackagesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/50688889999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,38%)] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-float"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
