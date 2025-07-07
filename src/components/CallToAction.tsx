
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-carjiji-green relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mt-24 -mr-24"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -mb-20 -ml-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join The Green Movement Today
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Experience the future of transportation with our eco-friendly fleet. 
            Reduce your carbon footprint while enjoying premium comfort and style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-carjiji-green hover:bg-gray-100">
              Book Your Ride Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
