import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CallToAction = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Start Shopping
            <span className="block text-blue-200">The World Today</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust JastipGlobal for their international shopping needs. 
            Safe, secure, and affordable access to products from over 50 countries.
          </p>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 text-lg font-semibold rounded-lg shadow-lg">
              Make Your First Request
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-4 text-lg font-semibold rounded-lg"
            >
              Browse Providers
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>No upfront payment required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>100% money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Free to request quotes</span>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center text-white">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Quick Start</h3>
            <p className="text-blue-100 mb-6">
              Create your request in under 2 minutes. Describe what you want and get matched with providers instantly.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full">
              Get Started
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center text-white">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-bold mb-3">Expert Help</h3>
            <p className="text-blue-100 mb-6">
              Chat directly with verified providers who know the local markets and can find exactly what you need.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full">
              Find Providers
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-center text-white">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-3">Track Everything</h3>
            <p className="text-blue-100 mb-6">
              Monitor your order from purchase to delivery with real-time updates and photo confirmations.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full">
              Track Orders
            </Button>
          </Card>
        </div>

        {/* App Download Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Get the JastipGlobal App
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Download our mobile app for the fastest way to make requests, chat with providers, 
                and track your orders on the go. Available for iOS and Android.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a 
                  href="#" 
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black text-sm font-bold">📱</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-75">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black text-sm font-bold">🤖</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-75">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>

              {/* App Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Instant notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Secure in-app payments</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Real-time chat</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Photo confirmations</span>
                </div>
              </div>
            </div>
            
            {/* App Screenshot */}
            <div className="text-center">
              <img 
                src="https://placehold.co/300x600?text=JastipGlobal+mobile+app+interface+showing+request+form+and+provider+chat" 
                alt="JastipGlobal mobile app interface showing request form and provider chat"
                className="rounded-3xl shadow-2xl mx-auto max-w-xs border-8 border-white/20"
              />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our customer support team is available 24/7 to help you with any questions about 
              the process, safety, or finding the right provider for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
              >
                Contact Support
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold"
              >
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;