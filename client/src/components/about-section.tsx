import { Card } from "@/components/ui/card";
import { features, facilities } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            🌟 Welcome to Lakshmi Online Center 🌟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Digital Buddy for Everyday Services! We are proud to operate with full legal authorization, 
            ensuring every service is backed by trust, transparency, and proper compliance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Customer service representative helping client" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">🛠️ What Makes Us Different?</h3>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Shop Facilities */}
        <Card className="gradient-light-pink p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🛠️ Shop Facilities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className={`fas ${facility.icon} text-primary-pink text-2xl`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{facility.title}</h4>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
