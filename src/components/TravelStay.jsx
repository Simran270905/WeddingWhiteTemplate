import { motion } from 'framer-motion';
import hotelImg from "../assets/image/hotel.jpg";

export default function TravelStay() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Content */}
        <motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-font font-bold text-gray-800 mb-8 leading-tight"
            variants={headingVariants}
            whileHover={{ scale: 1.03, color: "#4f46e5" }}
          >
            Travel & Stay
          </motion.h2>

          <motion.p 
            className="text-gray-700 leading-relaxed font-para mb-8 text-lg md:text-xl max-w-lg"
            variants={listItemVariants}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We have arranged comfortable accommodation for our guests. Below are 
            the travel and stay details to make your journey smooth and memorable.
          </motion.p>

          <motion.ul 
            className="space-y-6 text-gray-700 max-w-lg"
            variants={containerVariants}
          >
            <motion.li 
              className="group flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white hover:border-rose-200 transition-all duration-300 cursor-pointer"
              variants={listItemVariants}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4 shadow-md group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-gray-900 font-semibold text-lg block">Hotel:</strong>
                <span className="text-gray-700 font-medium">Grand Palace Hotel</span>
              </div>
            </motion.li>

            <motion.li 
              className="group flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white hover:border-rose-200 transition-all duration-300 cursor-pointer"
              variants={listItemVariants}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4 shadow-md group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-gray-900 font-semibold text-lg block">Address:</strong>
                <span className="text-gray-700 font-medium">Mumbai, Maharashtra</span>
              </div>
            </motion.li>

            <motion.li 
              className="group flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white hover:border-rose-200 transition-all duration-300 cursor-pointer"
              variants={listItemVariants}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4 shadow-md group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-gray-900 font-semibold text-lg block">Check-in:</strong>
                <span className="text-rose-600 font-semibold">14 November 2025</span>
              </div>
            </motion.li>

            <motion.li 
              className="group flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white hover:border-rose-200 transition-all duration-300 cursor-pointer"
              variants={listItemVariants}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4 shadow-md group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-gray-900 font-semibold text-lg block">Check-out:</strong>
                <span className="text-rose-600 font-semibold">16 November 2025</span>
              </div>
            </motion.li>

            <motion.li 
              className="group flex items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:bg-white hover:border-rose-200 transition-all duration-300 cursor-pointer"
              variants={listItemVariants}
            >
              <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full mr-4 shadow-md group-hover:scale-125 transition-transform" />
              <div>
                <strong className="text-gray-900 font-semibold text-lg block">Contact:</strong>
                <span className="text-blue-600 font-semibold hover:text-blue-700">+91 98765 43210</span>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="flex justify-center"
          whileHover={{ y: -15, scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 1 
            }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/10 via-transparent to-pink-500/10 rounded-3xl blur-xl" />
            <div className="absolute inset-0 border-8 border-white/60 rounded-3xl shadow-2xl group-hover:shadow-3xl bg-gradient-to-br from-white/90 to-rose-50/50 backdrop-blur-sm" />
            
            <img
              src={hotelImg}
              alt="Grand Palace Hotel"
              className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-cover rounded-3xl shadow-2xl relative z-10"
            />
            
            {/* Corner hearts */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-rose-100/90 border-2 border-rose-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-rose-400 text-xl font-bold">♥</span>
            </div>
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-pink-100/90 border-2 border-pink-200 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-pink-400 text-xl font-bold">♥</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
