
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-carjiji-green" />
              <span className="text-2xl font-bold text-carjiji-green">
                Car<span className="text-carjiji-green-dark">Jiji</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-carjiji-green font-medium">
              Home
            </Link>
            <Link to="/cars" className="text-gray-800 hover:text-carjiji-green font-medium">
              Our Fleet
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-carjiji-green font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-carjiji-green font-medium">
              Contact
            </Link>
            <Link to="/list-your-car" className="text-gray-800 hover:text-carjiji-green font-medium">
              List Your Car
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/cars">
              <Button className="bg-carjiji-green hover:bg-carjiji-green-dark text-white">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <Link 
              to="/" 
              className="block py-2 text-gray-800 hover:text-carjiji-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cars" 
              className="block py-2 text-gray-800 hover:text-carjiji-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Fleet
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-800 hover:text-carjiji-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-800 hover:text-carjiji-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/list-your-car" 
              className="block py-2 text-gray-800 hover:text-carjiji-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              List Your Car
            </Link>
            <div className="pt-2">
              <Link to="/cars" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-carjiji-green hover:bg-carjiji-green-dark text-white w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
