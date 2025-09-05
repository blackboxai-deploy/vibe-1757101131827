import React from 'react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: "Make Your Request",
      description: "Tell us what you want to buy and from which country. Upload photos, links, or detailed descriptions.",
      details: ["Describe your desired item", "Set your budget and timeline", "Choose preferred country/store"],
      icon: "📝"
    },
    {
      step: 2,
      title: "Get Matched with Providers",
      description: "Our verified service providers in your target country will offer to fulfill your request.",
      details: ["Receive multiple offers", "Compare prices and ratings", "Chat with providers directly"],
      icon: "🤝"
    },
    {
      step: 3,
      title: "Secure Payment & Purchase",
      description: "Pay securely through our platform. Your provider purchases the item and sends confirmation.",
      details: ["Protected payment system", "Real purchase receipts", "Item verification photos"],
      icon: "💳"
    },
    {
      step: 4,
      title: "Track & Receive",
      description: "Monitor your order's progress from purchase to your doorstep with real-time updates.",
      details: ["Live tracking updates", "Customs handling included", "Delivery confirmation"],
      icon: "📦"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Simple & Secure Process
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How Jastip Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting products from anywhere in the world is easier than you think. 
            Our proven 4-step process ensures a safe and smooth experience every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent -z-10" />
              )}
              
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 relative group">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-lg font-bold mb-4 group-hover:bg-blue-700 transition-colors">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-3xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Visualization */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Our Process?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">End-to-End Protection</p>
                    <p className="text-gray-600 text-sm">Your money is protected until you receive and approve your order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Verified Providers Only</p>
                    <p className="text-gray-600 text-sm">All service providers are background-checked and rated by real customers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Transparent Pricing</p>
                    <p className="text-gray-600 text-sm">No hidden fees - see all costs upfront including shipping and taxes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-0.5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">24/7 Customer Support</p>
                    <p className="text-gray-600 text-sm">Get help anytime with our multilingual customer support team</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://placehold.co/500x400?text=Interactive+process+flow+diagram+showing+secure+jastip+shopping+steps" 
                alt="Interactive process flow diagram showing secure jastip shopping steps"
                className="rounded-xl shadow-lg w-full max-w-md mx-auto"
              />
              <p className="text-sm text-gray-500 mt-4">
                Average completion time: 5-14 days
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us with their international shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Request
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;