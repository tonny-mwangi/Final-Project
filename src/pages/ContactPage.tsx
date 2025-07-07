
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us | Car Jiji";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast.success("Message sent! We'll get back to you soon.");
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
                Contact <span className="text-carjiji-green">Car Jiji</span>
              </h1>
              <p className="text-lg text-gray-700">
                Have questions about our services or need assistance? Our team is here to help you!
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Card - Email */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mx-auto bg-carjiji-green-light/30 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Mail className="h-8 w-8 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries and support
                </p>
                <a href="mailto:info@carjiji.co.ke" className="text-carjiji-green font-medium hover:underline">
                  info@carjiji.co.ke
                </a>
              </div>
              
              {/* Contact Card - Phone */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mx-auto bg-carjiji-green-light/30 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <Phone className="h-8 w-8 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Mon-Fri from 8am to 6pm
                </p>
                <a href="tel:+254712345678" className="text-carjiji-green font-medium hover:underline">
                  +254 712 345 678
                </a>
              </div>
              
              {/* Contact Card - Chat */}
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="mx-auto bg-carjiji-green-light/30 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  <MessageCircle className="h-8 w-8 text-carjiji-green" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our customer service team
                </p>
                <button className="text-carjiji-green font-medium hover:underline">
                  Start a chat
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
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
                          <FormLabel>Email</FormLabel>
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
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+254 712 345 678" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <textarea
                              placeholder="How can we help you?"
                              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-carjiji-green hover:bg-carjiji-green-dark">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
                <div className="rounded-lg overflow-hidden shadow-md mb-6 h-[400px] w-full bg-gray-200">
                  {/* An iframe would go here in a real implementation */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                    Google Maps Embed Would Go Here
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Headquarters</h3>
                  <p className="text-gray-600">123 Eco Drive, Westlands</p>
                  <p className="text-gray-600">Nairobi, Kenya</p>
                  <p className="text-gray-600 mt-2">
                    <strong>Hours:</strong> Mon-Fri 8am-6pm, Sat 9am-4pm, Closed Sun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How do I book a car?</h3>
                <p className="text-gray-600">
                  You can book a car through our website or mobile app. Simply select your preferred vehicle, 
                  pick-up and drop-off dates, and complete the booking form. Our team will confirm your reservation.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">What documents do I need to rent a car?</h3>
                <p className="text-gray-600">
                  To rent a car from Car Jiji, you need a valid driver's license, a national ID or passport, 
                  and a credit or debit card for the security deposit.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">How can I list my eco-friendly car on Car Jiji?</h3>
                <p className="text-gray-600">
                  Visit our "List Your Car" page and complete the registration form. Our team will review your 
                  application and contact you for more information. Only hybrid and electric vehicles are eligible.
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

export default ContactPage;
