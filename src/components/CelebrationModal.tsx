import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { motion } from 'framer-motion';


interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const celebrationIdeas = [
    {
      title: "Surprise Family Dinner",
      description: "Plan a surprise dinner with all his favorite dishes.",
      image: "https://images.unsplash.com/photo-1606787364410-947e10173148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhbWlseSUyMGRpbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Favorite Activities",
      description: "Organize a day doing what he enjoys the most.",
      image: "https://images.unsplash.com/photo-1517554558809-9b4971b38f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhdGhlcnMlMjBkYXl8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Write a Letter",
      description: "Express your appreciation with a heartfelt note.",
      image: "https://images.unsplash.com/photo-1673915208918-89867353ecf0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZhdGhlcnMlMjBkYXklMjBsZXR0ZXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Personalized Gift",
      description: "Gift him something thoughtful like a mug or photo frame.",
      image: "https://images.unsplash.com/photo-1666722718088-05192e7ea03f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmF0aGVycyUyMGRheSUyMGdpZnR8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Quality Time",
      description: "Spend the day with him doing something he loves.",
      image: "https://images.unsplash.com/photo-1680562152817-91bf7a43dd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhdGhlcnMlMjBkYXklMjBxdWFsaXR5JTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D"
    },
  ];

const CelebrationModal: React.FC<CelebrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-xl p-6 max-w-3xl w-full mx-4 relative">
        <h2 className="text-2xl font-bold mb-6 text-center">Ways to Celebrate Father's Day</h2>

        <Swiper
          grabCursor={true}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-120%', 0, -500],
              rotate: [0, 0, -30],
            },
            next: {
              shadow: true,
              translate: ['120%', 0, -500],
              rotate: [0, 0, 30],
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[EffectCreative, Autoplay]}
          className="w-full h-[400px]"
        >
          {celebrationIdeas.map((idea, index) => (
       <SwiperSlide key={index}>
       <div className="relative group h-full w-full rounded-2xl overflow-hidden shadow-xl">
         <img
           src={idea.image}
           alt={idea.title}
           className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
         />
     
         <motion.div
           className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: 'easeOut' }}
         >
           <motion.h3
             className="text-xl font-bold drop-shadow"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             {idea.title}
           </motion.h3>
           <motion.p
             className="text-sm mt-1 text-white/90"
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.45 }}
           >
             {idea.description}
           </motion.p>
         </motion.div>
       </div>
     </SwiperSlide>
     
      
          ))}
        </Swiper>

        <button
          onClick={onClose}
          className="mt-6 bg-yellow-400 text-slate-800 px-6 py-2 rounded-full mx-auto block hover:scale-105 transition-transform"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CelebrationModal;
