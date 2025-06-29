import { MessageSquare, Phone, Mail } from "lucide-react";
import { businessInfo } from "@/lib/constants";

export default function Footer() {
  const scrollToSection = (href: string) => {
    console.log('Footer: Scrolling to section:', href);
    const element = document.querySelector(href);
    if (element) {
      console.log('Footer: Element found, scrolling...');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Footer: Element not found:', href);
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 gradient-pink-gold rounded-full flex items-center justify-center">
                <span className="text-white">🪷</span>
              </div>
              <span className="text-xl font-bold">{businessInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted digital service provider. Legally registered and government-recognized for all your online needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
                className="w-10 h-10 bg-success-green rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${businessInfo.phone1}`} 
                className="w-10 h-10 bg-trust-blue rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${businessInfo.email}`} 
                className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Aadhaar & PAN</li>
              <li className="text-gray-300">Passport Services</li>
              <li className="text-gray-300">Bill Payments</li>
              <li className="text-gray-300">Printing & Scanning</li>
              <li className="text-gray-300">Online Applications</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 {businessInfo.name}. All rights reserved. | 
            <span className="text-primary-pink"> Legally Registered & Government Recognized</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
