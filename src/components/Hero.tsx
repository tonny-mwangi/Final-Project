
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-4/5 bg-gradient-to-br from-carjiji-green-light to-carjiji-green-light/10 clip-polygon"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-4 pt-24 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Drive <span className="text-carjiji-green">Green</span>, Live <span className="text-carjiji-green">Clean</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              Kenya's premier eco-friendly car rental service. Explore Nairobi in style with our premium hybrid and electric vehicles.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-carjiji-green hover:bg-carjiji-green-dark text-white">
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="border-carjiji-green text-carjiji-green hover:bg-carjiji-green hover:text-white">
                Explore Fleet <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-carjiji-green">30+</p>
                <p className="text-sm text-gray-600">Premium Vehicles</p>
              </div>
              <div className="h-12 border-l border-gray-300"></div>
              <div className="text-center">
                <p className="text-3xl font-bold text-carjiji-green">100%</p>
                <p className="text-sm text-gray-600">Eco-Friendly</p>
              </div>
              <div className="h-12 border-l border-gray-300 hidden sm:block"></div>
              <div className="text-center hidden sm:block">
                <p className="text-3xl font-bold text-carjiji-green">24/7</p>
                <p className="text-sm text-gray-600">Customer Support</p>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Electric car charging" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 text-carjiji-green font-medium">
                <span className="w-3 h-3 bg-carjiji-green rounded-full animate-pulse"></span>
                <span>Eco-Friendly Transportation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
