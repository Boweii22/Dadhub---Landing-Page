import React from 'react';
import { Star, ShoppingBag, Zap } from 'lucide-react';

const GiftIdeas = () => {
  const gifts = [
    {
      id: 1,
      title: "Premium Leather Wallet",
      price: "$89",
      image: "https://images.unsplash.com/photo-1675582122314-cabef1d757ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldCUyMGdpZnR8ZW58MHx8MHx8fDA%3D",
      tag: "Editor's Pick",
      popular: true
    },
    {
      id: 2,
      title: "BBQ Master Tool Set",
      price: "$124",
      image: "https://images.pexels.com/photos/16617574/pexels-photo-16617574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tag: "Popular",
      popular: true
    },
    {
      id: 3,
      title: "Vintage Watch Collection",
      price: "$199",
      image: "https://images.unsplash.com/photo-1730151147600-913125bd3700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHx2aW50YWdlJTIwd2F0Y2glMjBjb2xsZWN0aW9uJTIwZ2lmdHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Luxury"
    },
    {
      id: 4,
      title: "Craft Beer Brewing Kit",
      price: "$79",
      image: "https://images.unsplash.com/photo-1725908581947-5fea20a20d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3JhZnQlMjBCZWVyJTIwQnJld2luZyUyMEtpdHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Hobby"
    },
    {
      id: 5,
      title: "Professional Coffee Set",
      price: "$156",
      image: "https://images.unsplash.com/photo-1736798941210-061dd9f4643b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMGNvZmZlZSUyMHNldHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Daily Use"
    },
    {
      id: 6,
      title: "Tech Gadget Organizer",
      price: "$45",
      image: "https://images.pexels.com/photos/6214388/pexels-photo-6214388.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      tag: "Practical"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Curated Gifts for 
            <span className="text-yellow-500"> Dad</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked presents that show how much you care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift, index) => (
            <div 
              key={gift.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={gift.image} 
                  alt={gift.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Tag */}
                {gift.tag && (
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                    gift.tag === 'Editor\'s Pick' 
                      ? 'bg-yellow-400 text-slate-800' 
                      : gift.tag === 'Popular'
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-800 text-white'
                  }`}>
                    {gift.popular && <Star className="w-3 h-3 inline mr-1 fill-current" />}
                    {gift.tag}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg text-slate-800 group-hover:text-yellow-600 transition-colors duration-200">
                    {gift.title}
                  </h3>
                  <span className="font-bold text-xl text-yellow-600">
                    {gift.price}
                  </span>
                </div>

                <button className="w-full bg-slate-100 hover:bg-slate-800 text-slate-800 hover:text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  View Gift
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
            <ShoppingBag className="w-5 h-5" />
            View All Gifts
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftIdeas;