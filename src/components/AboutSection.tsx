
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-carjiji-gray-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1731348594245-65d9828da87a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Car Jiji eco-friendly fleet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-carjiji-green/20 rounded-full hidden lg:block"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-carjiji-green/10 rounded-full hidden lg:block"></div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-carjiji-green font-medium">About Car Jiji</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Kenya's Premier Eco-Friendly Car Rental Service
              </h2>
            </div>

            <p className="text-gray-700">
              Founded in 2023, Car Jiji has quickly established itself as the leading provider of 
              eco-friendly car rentals in Nairobi, Kenya. Our mission is to promote sustainable transportation 
              options without compromising on comfort, style, or convenience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-carjiji-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">100% Hybrid & Electric</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Our entire fleet consists of eco-friendly vehicles
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-carjiji-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Fast Charging Network</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Access to charging stations across Nairobi
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-carjiji-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Transparent Pricing</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    No hidden fees, all-inclusive rates
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-carjiji-green/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-carjiji-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-800">Lower Fuel Costs</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Save money with efficient vehicles
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-carjiji-green hover:bg-carjiji-green-dark text-white">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
