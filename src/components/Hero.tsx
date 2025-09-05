"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                🌍 Trusted by 100K+ customers worldwide
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get Anything From
              <span className="text-blue-600 block">Anywhere</span>
              <span className="text-gray-900">In The World</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Connect with trusted service providers in 50+ countries. From fashion to electronics, 
              from skincare to specialty foods – we make international shopping safe, simple, and affordable.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link href="/request">Start Your Request</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Verified Providers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Buyer Protection</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Visual */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative z-10">
              <img 
                src="https://placehold.co/600x500?text=Happy+customers+shopping+internationally+with+packages+from+different+countries" 
                alt="Happy customers shopping internationally with packages from different countries"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Cards */}
            <Card className="absolute -top-6 -left-6 z-20 p-4 bg-white shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🇯🇵</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Tokyo Electronics</p>
                  <p className="text-sm text-gray-500">Delivered in 7 days</p>
                  <div className="flex text-xs text-yellow-500">★★★★★</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute -bottom-6 -right-6 z-20 p-4 bg-white shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">🇺🇸</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Fashion From NYC</p>
                  <p className="text-sm text-gray-500">Safe & Secure</p>
                  <div className="flex text-xs text-yellow-500">★★★★★</div>
                </div>
              </div>
            </Card>
            
            <Card className="absolute top-1/2 -right-8 z-20 p-3 bg-white shadow-lg hidden lg:block">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">98%</p>
                <p className="text-xs text-gray-500">Success Rate</p>
              </div>
            </Card>
            
            {/* Background Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900">100K+</p>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900">500K+</p>
              <p className="text-gray-600 mt-2">Orders Completed</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gray-900">98%</p>
              <p className="text-gray-600 mt-2">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;