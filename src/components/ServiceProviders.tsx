import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServiceProviders = () => {
  const featuredProviders = [
    {
      name: "Sarah Chen",
      location: "Tokyo, Japan",
      flag: "🇯🇵",
      rating: 4.9,
      totalOrders: 1250,
      specialty: ["Electronics", "Skincare", "Fashion"],
      responseTime: "< 2 hours",
      languages: ["English", "Japanese", "Chinese"],
      verified: true,
      profileImage: "https://placehold.co/100x100?text=Professional+Asian+woman+smiling+in+Tokyo+shopping+district",
      successRate: 99
    },
    {
      name: "Michael Park",
      location: "Seoul, South Korea",
      flag: "🇰🇷",
      rating: 4.8,
      totalOrders: 980,
      specialty: ["K-Beauty", "K-pop Merch", "Fashion"],
      responseTime: "< 1 hour",
      languages: ["English", "Korean"],
      verified: true,
      profileImage: "https://placehold.co/100x100?text=Young+Korean+man+in+Myeongdong+shopping+area+Seoul",
      successRate: 98
    },
    {
      name: "Emma Rodriguez",
      location: "New York, USA",
      flag: "🇺🇸",
      rating: 4.9,
      totalOrders: 2100,
      specialty: ["Fashion", "Supplements", "Gadgets"],
      responseTime: "< 3 hours",
      languages: ["English", "Spanish"],
      verified: true,
      profileImage: "https://placehold.co/100x100?text=Professional+Latina+woman+in+Manhattan+shopping+district",
      successRate: 99
    },
    {
      name: "James Wilson",
      location: "London, UK",
      flag: "🇬🇧",
      rating: 4.7,
      totalOrders: 750,
      specialty: ["Luxury Goods", "Books", "Tea"],
      responseTime: "< 4 hours",
      languages: ["English", "French"],
      verified: true,
      profileImage: "https://placehold.co/100x100?text=British+gentleman+in+London+Oxford+Street+shopping+area",
      successRate: 97
    }
  ];

  const verificationFeatures = [
    {
      title: "Identity Verified",
      description: "Government ID and address verification completed",
      icon: "🆔"
    },
    {
      title: "Background Checked",
      description: "Comprehensive background screening process",
      icon: "🔍"
    },
    {
      title: "Payment Secured",
      description: "All transactions protected by our escrow system",
      icon: "🔐"
    },
    {
      title: "Performance Monitored",
      description: "Continuous quality assessment and customer feedback",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            ✨ Trusted & Verified Network
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Meet Our Top Service Providers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our community of verified providers has successfully completed over 500K orders worldwide. 
            Each provider goes through rigorous screening to ensure quality and reliability.
          </p>
        </div>

        {/* Featured Providers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featuredProviders.map((provider, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-blue-100 group-hover:border-blue-200 transition-colors">
                  <img 
                    src={provider.profileImage}
                    alt={`${provider.name} - Verified service provider in ${provider.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {provider.verified && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>

              {/* Provider Info */}
              <h3 className="font-bold text-gray-900 text-lg mb-1">{provider.name}</h3>
              <p className="text-gray-600 text-sm mb-3 flex items-center justify-center gap-1">
                <span className="text-lg">{provider.flag}</span>
                {provider.location}
              </p>

              {/* Rating & Orders */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-yellow-400">★</span>
                    <span className="font-bold text-gray-900">{provider.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{provider.totalOrders.toLocaleString()}+</p>
                  <p className="text-xs text-gray-500">Orders</p>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-1">
                  {provider.specialty.slice(0, 2).map((spec, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                  {provider.specialty.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{provider.specialty.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Response Time */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">Response Time</p>
                <p className="font-semibold text-green-600">{provider.responseTime}</p>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                View Profile
              </button>
            </Card>
          ))}
        </div>

        {/* Verification Process */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              How We Ensure Provider Quality
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Every service provider goes through our comprehensive verification process 
              to ensure you get the best service and complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {verificationFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <p className="text-4xl font-bold text-blue-600 mb-2">5K+</p>
            <p className="text-gray-600">Active Providers</p>
            <p className="text-sm text-gray-500 mt-2">Across 50+ countries</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <p className="text-4xl font-bold text-green-600 mb-2">98.5%</p>
            <p className="text-gray-600">Success Rate</p>
            <p className="text-sm text-gray-500 mt-2">Orders completed successfully</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <p className="text-4xl font-bold text-purple-600 mb-2">4.8⭐</p>
            <p className="text-gray-600">Average Rating</p>
            <p className="text-sm text-gray-500 mt-2">From verified customers</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to Become a Service Provider?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our network of trusted providers and start earning by helping people access products from your country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Become a Provider
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProviders;