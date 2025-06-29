import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { businessInfo } from "@/lib/constants";

export default function NavigationHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-pink-gold rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🪷</span>
            </div>
            <span className="text-xl font-bold text-gray-800">{businessInfo.name}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-700 hover:text-primary-pink transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${businessInfo.phone1}`}
              className="hidden sm:flex items-center space-x-2 text-primary-pink hover:text-pink-700"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">Call Now</span>
            </a>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-gray-700 hover:text-primary-pink transition-colors duration-200 py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t">
                    <a 
                      href={`tel:${businessInfo.phone1}`}
                      className="flex items-center space-x-2 text-primary-pink hover:text-pink-700"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
