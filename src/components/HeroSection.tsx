import React from 'react';
import { Heart, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToBuilder = () => {
    const builderSection = document.getElementById('builder-preview');
    builderSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.5)), url("https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-slate-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce-gentle">
            <Heart className="w-4 h-4 fill-current" />
            Father's Day Special
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
            Celebrate the Man
            <br />
            <span className="text-yellow-400">Who Raised You</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Build a tribute, share a memory, or find the perfect gift for your everyday hero.
          </p>
          
          <button 
            onClick={scrollToBuilder}
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-800 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in-up animation-delay-600"
          >
            Build Your Tribute
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;