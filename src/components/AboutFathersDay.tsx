import React, { useState } from 'react';
import { Heart, Star, Gift } from 'lucide-react';
import CelebrationModal from './CelebrationModal';

const AboutFathersDay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="about-fathers-day" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Celebrating 
            <span className="text-yellow-500"> Father's Day</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the history and significance of this special day dedicated to dads around the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Static Card Example / Info Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Card Header */}
              <div className="relative mb-6">
                <div 
                  className="w-full h-48 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.3), rgba(30, 41, 59, 0.3)), url("https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="text-center text-white">
                    <p className="text-lg font-semibold">A Tribute to Dads</p>
                  </div>
                </div>
                
                {/* Badge */}
                <div className="absolute -bottom-3 left-4">
                  <div className="bg-yellow-400 text-slate-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Our Heroes
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Heart className="w-4 h-4 fill-current text-red-500" />
                  <span className="font-medium">A Message for All Dads</span>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "To all the fathers, grandfathers, stepfathers, and father figures, thank you for your endless love, guidance, and support. Your impact shapes generations."
                </p>
                <div className="text-right">
                  <p className="text-sm text-gray-500">— The Celebration Team</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce-gentle">
              <Gift className="w-6 h-6 text-slate-800" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-800 rounded-full p-3 shadow-lg animate-bounce-gentle animation-delay-1000">
              <Heart className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-yellow-500" />
                The History of Father's Day
              </h3>
              <p className="text-gray-700 mb-4">
                Father's Day was first celebrated in the United States on June 19, 1910, in the state of Washington. However, it wasn't until 1972 that it became a nationwide holiday in the U.S. by President Richard Nixon.
              </p>
              <p className="text-gray-700 mb-4">
                The idea for Father's Day is attributed to Sonora Smart Dodd, who, while listening to a Mother's Day sermon in 1909, realized the need for a similar holiday to honor fathers.
              </p>
              <p className="text-gray-700">
                Today, Father's Day is celebrated worldwide to recognize the contribution that fathers and father figures make to the lives of their children. It's a day to express gratitude and appreciation for their love, support, and guidance.
              </p>
            </div>
            <button 
              onClick={openModal} 
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Explore More Ways to Celebrate
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <CelebrationModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default AboutFathersDay;