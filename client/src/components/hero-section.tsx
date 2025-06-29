import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Heart, Shield } from "lucide-react";
import { businessInfo } from "@/lib/constants";

export default function HeroSection() {
  const scrollToServices = () => {
    console.log('Hero: Scrolling to services section');
    const element = document.querySelector("#services");
    if (element) {
      console.log('Hero: Services section found, scrolling...');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('Hero: Services section not found');
    }
  };

  return (
    <section id="home" className="relative gradient-pink-gold min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-accent-gold" />
              <span className="text-white font-medium">Legally Registered & Government Recognized</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {businessInfo.tagline.split(' ').slice(0, 3).join(' ')}<br />
              <span className="text-accent-gold">{businessInfo.tagline.split(' ').slice(3).join(' ')}</span>
            </h1>
            
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-lg">
              "{businessInfo.slogan}" - Your trusted digital buddy for fast, reliable, and affordable online services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToServices}
                className="bg-white text-primary-pink px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                size="lg"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                asChild
                className="bg-success-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                size="lg"
              >
                <a href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp Us
                </a>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0 p-4">
                <Zap className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-white font-semibold">Fast</div>
              </Card>
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0 p-4">
                <Heart className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-white font-semibold">Easy</div>
              </Card>
              <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-0 p-4">
                <Shield className="h-8 w-8 text-accent-gold mx-auto mb-2" />
                <div className="text-white font-semibold">Reliable</div>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern digital services office" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <Card className="absolute -bottom-6 -left-6 bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success-green rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">5000+ Services Completed</div>
                  <div className="text-sm text-gray-600">Trusted by locals</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
