import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Sarah Johnson",
      location: "New York, NY",
      story: "My dad taught me that strength isn't about never falling down, but about getting back up every time. He's been my rock through everything.",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Michael Chen",
      location: "San Francisco, CA",
      story: "Every Sunday morning, dad and I would work on cars together. Those weren't just lessons about engines - they were lessons about life, patience, and perseverance.",
      likes: 31,
      comments: 12
    },
    {
      id: 3,
      avatar: "https://images.pexels.com/photos/1547971/pexels-photo-1547971.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Emily Rodriguez",
      location: "Austin, TX", 
      story: "Dad always said 'You're braver than you believe, stronger than you seem.' Whenever I doubt myself, I hear his voice cheering me on.",
      likes: 18,
      comments: 5
    },
    {
      id: 4,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "David Kim",
      location: "Seattle, WA",
      story: "My father immigrated here with nothing but dreams. His sacrifices gave me opportunities he never had. I'm forever grateful for his courage and love.",
      likes: 45,
      comments: 16
    },
    {
      id: 5,
      avatar: "https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      name: "Jessica Martinez",
      location: "Miami, FL",
      story: "Dad's bedtime stories weren't from books - they were adventures he made up on the spot. He taught me that imagination is the greatest gift we can give.",
      likes: 27,
      comments: 9
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, stories.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, stories.length - 2)) % Math.max(1, stories.length - 2));
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Stories.
            <span className="text-yellow-400"> Real Dads.</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Heartfelt tributes from children celebrating their fathers
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Stories Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {stories.map((story, index) => (
                <div 
                  key={story.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={story.avatar} 
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-400"
                      />
                      <div>
                        <h4 className="font-semibold text-slate-800">{story.name}</h4>
                        <p className="text-sm text-gray-500">{story.location}</p>
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{story.story}"
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{story.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{story.comments}</span>
                        </button>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, stories.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5" />
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;