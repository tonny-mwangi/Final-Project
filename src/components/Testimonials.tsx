
const testimonials = [
  {
    id: 1,
    name: "James Omondi",
    role: "Business Traveler",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Car Jiji has transformed my business trips around Nairobi. The Tesla Model 3 was a joy to drive and the customer service was exceptional."
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    role: "Environmental Activist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "As someone passionate about environmental conservation, I appreciate Car Jiji's commitment to offering only eco-friendly vehicles. Will definitely rent from them again!"
  },
  {
    id: 3,
    name: "David Maina",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "The booking process was seamless and the hybrid car was in perfect condition. Car Jiji is helping Kenya move towards sustainable transportation."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-carjiji-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their eco-friendly rental experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-500 inline-block" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
