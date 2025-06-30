import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/918270487840" 
          className="bg-success-green text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}
