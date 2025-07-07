
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarFront } from "lucide-react";

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  price: number;
  seats: number;
  range: number;
  transmission: string;
}

export const CarCard = ({
  name,
  type,
  image,
  price,
  seats,
  range,
  transmission,
}: CarCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-carjiji-green text-white text-xs font-semibold px-2 py-1 rounded-full">
          {type}
        </div>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
            <div className="flex items-center text-carjiji-green mt-1">
              <CarFront className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{transmission}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-carjiji-green">
              Ksh {price.toLocaleString()}/day
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm">{seats} Seats</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm">{range} km</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-5 py-3">
        <Button className="w-full bg-carjiji-green hover:bg-carjiji-green-dark">
          Reserve Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
