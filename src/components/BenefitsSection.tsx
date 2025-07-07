
import { ArrowDown } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="hidden lg:block absolute right-0 top-0 w-64 h-64 bg-carjiji-green/5 rounded-full -mr-32 -mt-10"></div>
      <div className="hidden lg:block absolute left-0 bottom-0 w-80 h-80 bg-carjiji-green/5 rounded-full -ml-40 -mb-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Eco-Friendly Rentals?</h2>
          <p className="text-gray-600">
            Discover the benefits of choosing hybrid and electric vehicles for your journeys in Nairobi and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-carjiji-green/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Reduce Carbon Footprint</h3>
            <p className="text-gray-600">
              Our hybrid and electric vehicles produce significantly fewer emissions compared to conventional cars, helping to combat climate change.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-carjiji-green/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Lower Fuel Costs</h3>
            <p className="text-gray-600">
              Enjoy significant savings on fuel costs with our energy-efficient vehicles, putting more money back in your pocket.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-carjiji-green/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Latest Technology</h3>
            <p className="text-gray-600">
              Experience cutting-edge automotive technology with advanced features like regenerative braking and intelligent energy management.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#booking" className="inline-flex flex-col items-center text-carjiji-green hover:text-carjiji-green-dark transition-colors">
            <span className="font-medium mb-2">Ready to book your eco-friendly ride?</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
