
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const BookingForm = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  
  return (
    <section id="booking" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-carjiji-green p-6 text-white">
            <h2 className="text-2xl font-bold">Book Your Eco-Friendly Ride</h2>
            <p className="mt-2">Experience sustainable luxury with our premium hybrid and electric vehicles</p>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Pickup Location</label>
                <Select>
                  <SelectTrigger className="border-gray-300 w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Jomo Kenyatta International Airport</SelectItem>
                    <SelectItem value="downtown">Downtown Nairobi</SelectItem>
                    <SelectItem value="westlands">Westlands</SelectItem>
                    <SelectItem value="karen">Karen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Return Location</label>
                <Select>
                  <SelectTrigger className="border-gray-300 w-full">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Jomo Kenyatta International Airport</SelectItem>
                    <SelectItem value="downtown">Downtown Nairobi</SelectItem>
                    <SelectItem value="westlands">Westlands</SelectItem>
                    <SelectItem value="karen">Karen</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Pickup Date</label>
                <Input
                  type="date"
                  className="border-gray-300 w-full"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Return Date</label>
                <Input
                  type="date"
                  className="border-gray-300 w-full"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={pickupDate}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-3">Vehicle Type</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-carjiji-green transition-colors">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="vehicle-type" 
                      id="hybrid" 
                      className="text-carjiji-green focus:ring-carjiji-green" 
                    />
                    <label htmlFor="hybrid" className="ml-2 flex-grow cursor-pointer">
                      <span className="block font-medium text-gray-800">Hybrid</span>
                      <span className="block text-sm text-gray-600 mt-1">Fuel-efficient and eco-friendly</span>
                    </label>
                  </div>
                </div>
                
                <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-carjiji-green transition-colors">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      name="vehicle-type" 
                      id="electric" 
                      className="text-carjiji-green focus:ring-carjiji-green" 
                    />
                    <label htmlFor="electric" className="ml-2 flex-grow cursor-pointer">
                      <span className="block font-medium text-gray-800">Electric</span>
                      <span className="block text-sm text-gray-600 mt-1">Zero emissions, premium experience</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-carjiji-green hover:bg-carjiji-green-dark text-white">
              Check Availability
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
