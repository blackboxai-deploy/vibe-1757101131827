import React from 'react';
import { Card } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lisa Wang",
      location: "Singapore",
      flag: "🇸🇬",
      rating: 5,
      content: "I wanted some specific Japanese skincare products that weren't available here. Sarah from Tokyo helped me get everything I needed, including some limited edition items! The whole process was smooth and transparent. Highly recommended!",
      order: "Japanese Skincare Set",
      country: "Japan",
      image: "https://placehold.co/80x80?text=Happy+Asian+woman+holding+Japanese+skincare+products",
      verified: true
    },
    {
      name: "David Miller",
      location: "Canada",
      flag: "🇨🇦",
      rating: 5,
      content: "Needed some tech gadgets from the US that would cost double here. Emma made it so easy and saved me over $300! She even sent me photos before shipping to confirm everything was perfect. Amazing service!",
      order: "Gaming Setup Components",
      country: "USA",
      image: "https://placehold.co/80x80?text=Satisfied+Canadian+man+with+gaming+equipment+from+USA",
      verified: true
    },
    {
      name: "Maria Santos",
      location: "Philippines",
      flag: "🇵🇭",
      rating: 5,
      content: "My daughter is a huge K-pop fan and I wanted to surprise her with authentic merchandise from Seoul. Michael was incredibly helpful and patient with all my questions. She was over the moon with her gifts!",
      order: "K-pop Merchandise Bundle",
      country: "South Korea",
      image: "https://placehold.co/80x80?text=Filipino+mother+and+daughter+with+Korean+pop+merchandise",
      verified: true
    },
    {
      name: "Ahmed Hassan",
      location: "UAE",
      flag: "🇦🇪",
      rating: 5,
      content: "I collect vintage books and found some rare editions only available in London bookshops. James helped me secure three books I'd been searching for years! Professional service and careful packaging.",
      order: "Rare Vintage Books",
      country: "United Kingdom",
      image: "https://placehold.co/80x80?text=Middle+Eastern+man+reading+vintage+books+from+London",
      verified: true
    },
    {
      name: "Sophie Laurent",
      location: "France",
      flag: "🇫🇷",
      rating: 5,
      content: "Australian organic skincare products are amazing but so expensive to import officially. My provider helped me get a 6-month supply at half the price. The quality is exactly what I expected!",
      order: "Organic Skincare Products",
      country: "Australia",
      image: "https://placehold.co/80x80?text=French+woman+using+Australian+organic+skincare+products",
      verified: true
    },
    {
      name: "Carlos Rodriguez",
      location: "Mexico",
      flag: "🇲🇽",
      rating: 5,
      content: "My business needed some specialized tools only available in Germany. The provider handled everything including customs paperwork. Delivered on time and exactly as described. Will definitely use again!",
      order: "Professional Tools",
      country: "Germany",
      image: "https://placehold.co/80x80?text=Mexican+businessman+with+German+professional+tools",
      verified: true
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium mb-6">
            ⭐ 4.9/5 Average Rating
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join over 100,000 satisfied customers who trust us with their international shopping needs. 
            Read real stories from people who've successfully received items from around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-white">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image}
                      alt={`${testimonial.name} from ${testimonial.location}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span>{testimonial.flag}</span>
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Order Info */}
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-gray-500 mb-1">Order:</p>
                <p className="font-semibold text-gray-900">{testimonial.order}</p>
                <p className="text-sm text-blue-600">from {testimonial.country}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">100% Protected</h3>
              <p className="text-gray-600 text-sm">Money-back guarantee on all orders</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">Average provider response under 2 hours</p>
            </div>
            <div>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Real-time Updates</h3>
              <p className="text-gray-600 text-sm">Track your order every step of the way</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Global Network</h3>
              <p className="text-gray-600 text-sm">Verified providers in 50+ countries</p>
            </div>
          </div>
        </div>

        {/* Video Testimonial Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            See Real Customer Stories
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Watch how JastipGlobal helped customers from around the world get the products they love, 
            safely and affordably.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center">
              <img 
                src="https://placehold.co/640x360?text=Customer+testimonial+video+compilation+showing+successful+international+shopping+stories" 
                alt="Customer testimonial video compilation showing successful international shopping stories"
                className="rounded-xl w-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              Watch Stories
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Share Your Story
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Customers?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your international shopping journey today and discover why thousands trust us 
            with their most important purchases.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors">
            Start Your Request Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;