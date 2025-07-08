
import { CarCard } from "./CarCard";

const cars = [
  {
    id: 1,
    name: "Toyota Prius",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5500,
    seats: 5,
    range: 700,
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Tesla Model 3",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=2071",
    price: 9000,
    seats: 5,
    range: 400,
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "Hyundai Ioniq",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1694676518921-e1d84d27625c?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 6200,
    seats: 5,
    range: 650,
    transmission: "Automatic",
  },
  {
    id: 4,
    name: "Nissan Leaf",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1720121898986-ce744b1a899f?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 7000,
    seats: 5,
    range: 380,
    transmission: "Automatic",
  },
];

const FeaturedCars = () => {
  return (
    <section id="featured-cars" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Eco-Friendly Vehicles</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our premium selection of hybrid and electric vehicles. 
            Reduce your carbon footprint while enjoying a premium driving experience in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/cars" 
            className="inline-flex items-center text-carjiji-green hover:text-carjiji-green-dark font-medium transition-colors"
          >
            View all vehicles
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
