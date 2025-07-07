
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Car, Plus, Info } from "lucide-react";

const formSchema = z.object({
  ownerName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  carMake: z.string().min(2, { message: "Car make is required." }),
  carModel: z.string().min(2, { message: "Car model is required." }),
  year: z.string()
    .refine((val) => !isNaN(parseInt(val)), { message: "Year must be a number." })
    .refine((val) => parseInt(val) >= 2015, { message: "Car must be 2015 or newer." }),
  vehicleType: z.enum(["hybrid", "electric"], {
    required_error: "Please select a vehicle type.",
  }),
  licensePlate: z.string().min(1, { message: "License plate is required." }),
  seatingCapacity: z.string()
    .refine((val) => !isNaN(parseInt(val)), { message: "Seating capacity must be a number." })
    .refine((val) => parseInt(val) >= 2 && parseInt(val) <= 9, { message: "Seating capacity must be between 2 and 9." }),
  basePrice: z.string()
    .refine((val) => !isNaN(parseInt(val)), { message: "Price must be a number." })
    .refine((val) => parseInt(val) >= 1000, { message: "Minimum price is KES 1,000." }),
  carDescription: z.string().min(20, { message: "Please provide a detailed description (min 20 characters)." }),
});

type FormValues = z.infer<typeof formSchema>;

const ListYourCarPage = () => {
  useEffect(() => {
    document.title = "List Your Car | Car Jiji";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: "",
      email: "",
      phone: "",
      carMake: "",
      carModel: "",
      year: "",
      vehicleType: "hybrid",
      licensePlate: "",
      seatingCapacity: "",
      basePrice: "",
      carDescription: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.success("Your listing has been submitted for review!");
    form.reset();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-carjiji-green-light/20 py-20 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                List Your <span className="text-carjiji-green">Eco-Friendly</span> Car
              </h1>
              <p className="text-lg text-gray-700">
                Turn your hybrid or electric car into an income-generating asset by joining 
                Kenya's premier eco-friendly car rental marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              Why List Your Car With Us?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="h-14 w-14 rounded-full bg-carjiji-green-light/30 flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Earn Extra Income</h3>
                <p className="text-gray-600">
                  Turn your car into a revenue-generating asset. On average, car owners on our platform 
                  earn KES 30,000 to KES 60,000 per month.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="h-14 w-14 rounded-full bg-carjiji-green-light/30 flex items-center justify-center mb-4">
                  <Plus className="h-7 w-7 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">
                  You decide when your car is available for rent. Keep full control of your 
                  vehicle's availability through our easy-to-use calendar system.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="h-14 w-14 rounded-full bg-carjiji-green-light/30 flex items-center justify-center mb-4">
                  <Info className="h-7 w-7 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Full Insurance Coverage</h3>
                <p className="text-gray-600">
                  Rest easy knowing your vehicle is fully covered by our comprehensive insurance 
                  policy while being rented through our platform.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                How It Works
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-carjiji-green-light/50"></div>
                  
                  {/* Step 1 */}
                  <div className="md:flex items-center mb-12">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">List Your Car</h3>
                      <p className="text-gray-600">
                        Complete the form below with details about your hybrid or electric vehicle. 
                        Our team will review your submission.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="hidden md:block absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center">
                        1
                      </div>
                      <div className="md:hidden w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center mb-4">
                        1
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=2070" 
                        alt="Person using laptop" 
                        className="rounded-lg shadow-md w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="md:flex flex-row-reverse items-center mb-12">
                    <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Vehicle Inspection</h3>
                      <p className="text-gray-600">
                        After approval, our team will schedule a professional inspection of your 
                        vehicle to ensure it meets our quality and safety standards.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pr-12 relative">
                      <div className="hidden md:block absolute right-0 top-0 transform translate-x-1/2 w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center">
                        2
                      </div>
                      <div className="md:hidden w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center mb-4">
                        2
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1560170412-0f9292ffe4a7?auto=format&fit=crop&q=80&w=1974" 
                        alt="Car inspection" 
                        className="rounded-lg shadow-md w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Start Earning</h3>
                      <p className="text-gray-600">
                        Once approved, your car will be listed on our platform. You'll receive 
                        rental requests and earn money when customers book your vehicle.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 relative">
                      <div className="hidden md:block absolute left-0 top-0 transform -translate-x-1/2 w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center">
                        3
                      </div>
                      <div className="md:hidden w-8 h-8 rounded-full bg-carjiji-green text-white flex items-center justify-center mb-4">
                        3
                      </div>
                      <img 
                        src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&q=80&w=2070" 
                        alt="Person receiving money" 
                        className="rounded-lg shadow-md w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                Register Your Vehicle
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="border-b border-gray-200 pb-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Owner Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="ownerName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" type="email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+254 712 345 678" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Vehicle Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="carMake"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Car Make</FormLabel>
                              <FormControl>
                                <Input placeholder="Toyota" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="carModel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Car Model</FormLabel>
                              <FormControl>
                                <Input placeholder="Prius" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="year"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Year</FormLabel>
                              <FormControl>
                                <Input placeholder="2020" {...field} />
                              </FormControl>
                              <FormDescription>
                                Car must be 2015 or newer
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="vehicleType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Vehicle Type</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                  {...field}
                                >
                                  <option value="hybrid">Hybrid</option>
                                  <option value="electric">Electric</option>
                                </select>
                              </FormControl>
                              <FormDescription>
                                We only accept hybrid and electric vehicles
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="licensePlate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>License Plate</FormLabel>
                              <FormControl>
                                <Input placeholder="KBZ 123A" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="seatingCapacity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Seating Capacity</FormLabel>
                              <FormControl>
                                <Input placeholder="5" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Rental Details</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={form.control}
                          name="basePrice"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Base Daily Rate (KES)</FormLabel>
                              <FormControl>
                                <Input placeholder="5000" {...field} />
                              </FormControl>
                              <FormDescription>
                                Suggested price range: KES 3,000 - KES 10,000 per day
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="carDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Car Description</FormLabel>
                              <FormControl>
                                <textarea
                                  placeholder="Provide detailed information about your car including features, condition, etc."
                                  className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-500 text-sm mb-4">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                      <Button 
                        type="submit" 
                        className="bg-carjiji-green hover:bg-carjiji-green-dark w-full md:w-auto md:px-12"
                        size="lg"
                      >
                        Submit Your Listing
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
              What Car Owners Are Saying
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
                    alt="Testimonial author" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">James Kamau</h3>
                    <p className="text-gray-500 text-sm">Toyota Prius owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I've been listing my Prius with Car Jiji for 6 months now and it's been a great 
                  experience. I earn around KES 45,000 extra per month, and the team handles everything 
                  professionally."
                </p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1970" 
                    alt="Testimonial author" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">Amina Njeri</h3>
                    <p className="text-gray-500 text-sm">Nissan Leaf owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Car Jiji has helped me offset the cost of my electric vehicle. The insurance coverage 
                  gives me peace of mind, and the booking system is very flexible. Highly recommended!"
                </p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974" 
                    alt="Testimonial author" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">Daniel Omondi</h3>
                    <p className="text-gray-500 text-sm">Hyundai Ioniq owner</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I was hesitant at first, but Car Jiji's vetting process ensures that my car is rented 
                  by responsible drivers. The extra income has been significant, and their customer 
                  service is excellent."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListYourCarPage;
