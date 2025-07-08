
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Car Jiji";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-carjiji-green-light/20 py-20 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About <span className="text-carjiji-green">Car Jiji</span>
              </h1>
              <p className="text-lg text-gray-700">
                Kenya's premier eco-friendly car rental service, committed to reducing carbon emissions 
                and promoting sustainable transportation options.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At Car Jiji, our mission is to transform Kenya's transportation landscape by providing 
                  environmentally-friendly vehicle rental options that reduce carbon emissions while 
                  offering exceptional service and value to our customers.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that sustainable mobility shouldn't come at the expense of convenience, 
                  comfort, or affordability. By specializing exclusively in hybrid and electric vehicles, 
                  we're committed to making eco-friendly transportation accessible to everyone.
                </p>
                <p className="text-gray-600">
                  Our goal is to eliminate over 500 tons of CO₂ emissions annually by 2027 through our 
                  growing fleet of low and zero-emission vehicles.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team photo" 
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-carjiji-green text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">500+ Tons</p>
                  <p className="text-sm">CO₂ reduction goal by 2027</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative pl-8 pb-12 border-l-2 border-carjiji-green">
                <div className="absolute w-4 h-4 bg-carjiji-green rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">2018: The Beginning</h3>
                <p className="text-gray-600">
                  Car Jiji was founded by three friends who recognized the need for more sustainable 
                  transportation options in Kenya. Starting with just 5 hybrid vehicles, our founders 
                  operated from a small office in Westlands, Nairobi.
                </p>
              </div>
              
              <div className="relative pl-8 pb-12 border-l-2 border-carjiji-green">
                <div className="absolute w-4 h-4 bg-carjiji-green rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">2020: Expansion</h3>
                <p className="text-gray-600">
                  Despite the challenges of the global pandemic, we expanded our fleet to include 
                  15 vehicles, including our first fully electric cars. We also launched our mobile 
                  app, making it easier for customers to book and manage their rentals.
                </p>
              </div>
              
              <div className="relative pl-8 pb-12 border-l-2 border-carjiji-green">
                <div className="absolute w-4 h-4 bg-carjiji-green rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">2022: Growth & Recognition</h3>
                <p className="text-gray-600">
                  Car Jiji was recognized as one of Kenya's most innovative green businesses. 
                  Our fleet grew to 30 vehicles, and we established partnerships with hotels and 
                  corporate clients across Nairobi.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-carjiji-green">
                <div className="absolute w-4 h-4 bg-carjiji-green rounded-full -left-[9px] top-0"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Today</h3>
                <p className="text-gray-600">
                  Today, Car Jiji operates a fleet of over 50 eco-friendly vehicles and has served 
                  more than 10,000 satisfied customers. We continue to lead the way in sustainable 
                  transportation solutions in Kenya, with plans to expand to other major cities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1738750908048-14200459c3c9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Tonny Mwangi - CEO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800">Tonny Mwangi</h3>
                  <p className="text-carjiji-green font-medium">CEO & Co-Founder</p>
                  <p className="text-gray-600 mt-2">
                    David has over 15 years of experience in the automotive industry and is passionate about 
                    sustainable transportation solutions.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633419798503-0b0c628f267c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Sarah Omondi - COO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800">Sarah Omondi</h3>
                  <p className="text-carjiji-green font-medium">COO & Co-Founder</p>
                  <p className="text-gray-600 mt-2">
                    Sarah oversees the day-to-day operations of Car Jiji, ensuring that our service 
                    meets the highest standards of quality and efficiency.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974" 
                  alt="Michael Kiptoo - CTO" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800">Michael Kiptoo</h3>
                  <p className="text-carjiji-green font-medium">CTO & Co-Founder</p>
                  <p className="text-gray-600 mt-2">
                    Michael leads our technology initiatives, from our booking platform to our vehicle 
                    tracking systems, ensuring a seamless experience for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-carjiji-green-light/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the Green Movement</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're renting a vehicle or listing your eco-friendly car with us, 
              you're contributing to a more sustainable future for Kenya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-carjiji-green hover:bg-carjiji-green-dark">
                <Link to="/cars">Rent a Car</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-carjiji-green text-carjiji-green hover:bg-carjiji-green/10">
                <Link to="/list-your-car">List Your Car</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
