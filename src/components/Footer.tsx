import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">J</span>
              </div>
              <span className="text-xl font-bold">JastipGlobal</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted international shopping service connecting buyers with verified service providers worldwide. 
              Safe, secure, and affordable access to products from over 50 countries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 rounded border border-gray-400 flex items-center justify-center text-xs font-bold">f</div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 rounded border border-gray-400 flex items-center justify-center text-xs font-bold">t</div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-6 h-6 rounded border border-gray-400 flex items-center justify-center text-xs font-bold">ig</div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 rounded border border-gray-400 flex items-center justify-center text-xs font-bold">in</div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/request" className="text-gray-300 hover:text-white transition-colors">Make Request</Link></li>
              <li><Link href="/tracking" className="text-gray-300 hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="/providers" className="text-gray-300 hover:text-white transition-colors">Find Providers</Link></li>
              <li><Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">Browse Destinations</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-white transition-colors">Safety & Security</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Get the App</h4>
              <p className="text-gray-300 text-sm mb-4">Download our mobile app for easier access and real-time notifications</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">📱</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                    <span className="text-black text-xs font-bold">🤖</span>
                  </div>
                  <div className="text-sm">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="w-full md:w-auto">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">Get the latest updates and exclusive offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 flex-1 min-w-0"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 JastipGlobal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;