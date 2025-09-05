import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PopularDestinations = () => {
  const destinations = [
    {
      country: "Japan",
      flag: "🇯🇵",
      city: "Tokyo & Osaka",
      popularItems: ["Electronics", "Skincare", "Anime Merchandise", "Fashion"],
      avgDelivery: "7-10 days",
      providerCount: "150+",
      image: "https://placehold.co/400x300?text=Modern+Tokyo+street+with+electronics+stores+and+shopping+districts",
      priceRange: "$15-50",
      trending: true
    },
    {
      country: "South Korea",
      flag: "🇰🇷",
      city: "Seoul",
      popularItems: ["K-Beauty", "Fashion", "Snacks", "K-pop Merchandise"],
      avgDelivery: "5-8 days",
      providerCount: "120+",
      image: "https://placehold.co/400x300?text=Seoul+Myeongdong+shopping+district+with+beauty+stores+and+fashion+outlets",
      priceRange: "$10-40",
      trending: true
    },
    {
      country: "United States",
      flag: "🇺🇸",
      city: "New York & LA",
      popularItems: ["Fashion", "Supplements", "Gadgets", "Branded Items"],
      avgDelivery: "10-14 days",
      providerCount: "200+",
      image: "https://placehold.co/400x300?text=Fifth+Avenue+luxury+shopping+street+with+flagship+stores+and+boutiques",
      priceRange: "$20-80",
      trending: false
    },
    {
      country: "Thailand",
      flag: "🇹🇭",
      city: "Bangkok",
      popularItems: ["Local Snacks", "Handcrafts", "Herbal Products", "Clothing"],
      avgDelivery: "3-5 days",
      providerCount: "80+",
      image: "https://placehold.co/400x300?text=Bangkok+Chatuchak+weekend+market+with+local+products+and+handcrafts",
      priceRange: "$5-25",
      trending: false
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      city: "Sydney & Melbourne",
      popularItems: ["Health Products", "Local Brands", "UGG Boots", "Skincare"],
      avgDelivery: "8-12 days",
      providerCount: "90+",
      image: "https://placehold.co/400x300?text=Sydney+premium+shopping+center+with+Australian+brand+stores+and+health+products",
      priceRange: "$25-60",
      trending: false
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      city: "London",
      popularItems: ["Luxury Goods", "Tea & Biscuits", "Fashion", "Books"],
      avgDelivery: "12-16 days",
      providerCount: "110+",
      image: "https://placehold.co/400x300?text=London+Oxford+Street+shopping+area+with+luxury+boutiques+and+department+stores",
      priceRange: "$20-70",
      trending: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
            🌍 50+ Countries Available
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover trending products from the world's top shopping destinations. 
            Our verified providers are ready to help you get authentic items at great prices.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={`Shopping in ${destination.country} - ${destination.city}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {destination.trending && (
                  <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    Trending
                  </Badge>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-2xl mr-2">{destination.flag}</span>
                  <span className="font-semibold text-gray-900">{destination.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{destination.city}</h3>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Service Providers</p>
                    <p className="font-bold text-blue-600">{destination.providerCount}</p>
                  </div>
                </div>

                {/* Popular Items */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Popular Items:</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.popularItems.map((item, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-500">Avg. Delivery</p>
                    <p className="font-semibold text-gray-900">{destination.avgDelivery}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Fee</p>
                    <p className="font-semibold text-green-600">{destination.priceRange}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Browse Providers
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Countries */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            And Many More Countries...
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Can't find your desired destination? We're expanding our network globally. 
            Request any country and we'll connect you with trusted local providers.
          </p>
          
          {/* Country Flags */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {["🇨🇳", "🇫🇷", "🇩🇪", "🇮🇹", "🇪🇸", "🇨🇦", "🇧🇷", "🇮🇳", "🇸🇬", "🇭🇰", "🇵🇭", "🇲🇾"].map((flag, idx) => (
              <div key={idx} className="text-3xl hover:scale-110 transition-transform cursor-pointer">
                {flag}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Request New Country
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Destinations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;