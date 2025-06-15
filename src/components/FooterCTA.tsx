import React from 'react';
import { Heart, Share2, Facebook, Twitter, Instagram } from 'lucide-react';

const FooterCTA = () => {
  const scrollToAboutFathersDay = () => {
    const aboutFathersDaySection = document.getElementById('about-fathers-day');
    aboutFathersDaySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Make Dad's Day
            <span className="text-yellow-500"> Memorable</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore ways to celebrate and honor the incredible father in your life
          </p>
          <button 
            onClick={scrollToAboutFathersDay}
            className="inline-flex items-center gap-3 bg-slate-800 hover:bg-slate-900 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <Heart className="w-5 h-5 fill-current" />
            Discover More
          </button>
        </div>

        {/* Social Sharing */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Share the Love</h3>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Facebook className="w-5 h-5 fill-current" />
            </button>
            <button className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Twitter className="w-5 h-5 fill-current" />
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Instagram className="w-5 h-5 fill-current" />
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-yellow-500 fill-current" />
              <span className="font-serif text-xl font-bold text-slate-800">DadHub</span>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-slate-800 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-800 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-800 transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>© 2025 DadHub. Made with ❤️ for amazing fathers everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;