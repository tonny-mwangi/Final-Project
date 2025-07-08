import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CarCard } from "@/components/CarCard";
import CallToAction from "@/components/CallToAction";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
  {
    id: 5,
    name: "Toyota RAV4 Hybrid",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1633160847660-87506f1caa2d?q=80&w=766&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 8000,
    seats: 5,
    range: 750,
    transmission: "Automatic",
  },
  {
    id: 6,
    name: "BMW i3",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1656199133291-8bd65cc1369f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 9500,
    seats: 4,
    range: 330,
    transmission: "Automatic",
  },
  {
    id: 7,
    name: "Honda Insight",
    type: "Hybrid",
    image: "https://images.unsplash.com/photo-1540431657627-415fdd6c3cee?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 5800,
    seats: 5,
    range: 680,
    transmission: "Automatic",
  },
  {
    id: 8,
    name: "Kia Niro EV",
    type: "Electric",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=1974",
    price: 8200,
    seats: 5,
    range: 420,
    transmission: "Automatic",
  },
];

const CarsPage = () => {
  useEffect(() => {
    document.title = "Our Fleet | Car Jiji";
  }, []);

  // State for search and filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSeats, setSelectedSeats] = useState("");
  const [sortOption, setSortOption] = useState("featured");

  // Filter and sort cars based on search and filters
  const filteredCars = cars.filter((car) => {
    // Search term filter
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Vehicle type filter
    const matchesType = selectedType === "" || car.type.toLowerCase() === selectedType.toLowerCase();
    
    // Price range filter
    let matchesPrice = true;
    if (selectedPriceRange === "low") {
      matchesPrice = car.price <= 5000;
    } else if (selectedPriceRange === "medium") {
      matchesPrice = car.price > 5000 && car.price <= 8000;
    } else if (selectedPriceRange === "high") {
      matchesPrice = car.price > 8000;
    }
    
    // Seating capacity filter
    const matchesSeats = selectedSeats === "" || car.seats === parseInt(selectedSeats);
    
    return matchesSearch && matchesType && matchesPrice && matchesSeats;
  }).sort((a, b) => {
    // Sort options
    if (sortOption === "price-low") {
      return a.price - b.price;
    } else if (sortOption === "price-high") {
      return b.price - a.price;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    // Default is "featured" - keep original order
    return 0;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="bg-carjiji-green-light/20 py-20 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our <span className="text-carjiji-green">Eco-Friendly</span> Fleet
              </h1>
              <p className="text-lg text-gray-700">
                Browse our selection of premium hybrid and electric vehicles. Each car in our fleet is 
                chosen for its environmental impact, comfort, and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters Section */}
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-6 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by car name..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carjiji-green"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">All Types</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="electric">Electric</option>
                </select>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carjiji-green"
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                >
                  <option value="">Price Range</option>
                  <option value="low">₹ 1000 - ₹ 5000</option>
                  <option value="medium">₹ 5001 - ₹ 8000</option>
                  <option value="high">₹ 8001+</option>
                </select>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carjiji-green"
                  value={selectedSeats}
                  onChange={(e) => setSelectedSeats(e.target.value)}
                >
                  <option value="">Seating Capacity</option>
                  <option value="2">2 Seats</option>
                  <option value="4">4 Seats</option>
                  <option value="5">5 Seats</option>
                  <option value="7">7+ Seats</option>
                </select>
              </div>
              <div>
                <select 
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-carjiji-green"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Cars Grid Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            {filteredCars.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-medium text-gray-700 mb-4">No cars match your search criteria</h3>
                <p className="text-gray-500">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            )}
          </div>
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default CarsPage;
