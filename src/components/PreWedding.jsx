import { motion } from 'framer-motion';
import videoSrc from "../assets/video/prewedding.mp4";

export default function PreWeddingShoot() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      }
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Heading */}
      <motion.div 
        className="text-center mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-['Playfair_Display'] italic text-gray-800 leading-tight"
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          Pre-wedding
          <br />
          <span className="text-rose-500">PhotoShoot</span>
        </motion.h2>

        <motion.div 
          className="flex items-center justify-center gap-4 mt-6"
          variants={headingVariants}
        >
          <motion.span 
            className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-gray-400 to-rose-400 rounded-full"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.span 
            className="text-2xl md:text-3xl lg:text-4xl text-rose-400 drop-shadow-lg"
            variants={heartVariants}
            whileHover={{ scale: 1.5, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            ♥
          </motion.span>
          <motion.span 
            className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-l from-gray-400 to-rose-400 rounded-full"
            initial={{ scaleX: 0, originX: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Video with cinematic frame - FIXED */}
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div 
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        >
          {/* Decorative background glows */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-pink-500/5 rounded-3xl blur-xl -z-10 scale-105" />
          
          {/* Outer frame */}
          <div className="absolute inset-4 bg-gradient-to-r from-white via-rose-50/30 to-white rounded-3xl shadow-2xl -z-10" />
          
          {/* Video container - NO OVERLAYS ON VIDEO */}
          <div className="relative bg-black/10 backdrop-blur-sm rounded-3xl p-8 border-8 border-white/70 shadow-2xl hover:shadow-[0_50px_100px_-20px_rgba(244,63,94,0.25)] overflow-hidden">
            <motion.video
              src={videoSrc}
              controls
              controlsList="nodownload" // Prevents right-click download
              className="w-full h-[70vh] md:h-[80vh] lg:h-[85vh] object-cover rounded-2xl shadow-inner cursor-pointer"
              poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
              preload="metadata"
              muted // Important for autoplay if needed later
              playsInline // iOS compatibility
              initial={{ filter: "brightness(0.8) contrast(0.9)" }}
              animate={{ filter: "brightness(1) contrast(1)" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* Subtle corner decorations - OUTSIDE video bounds */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-rose-100/80 border-2 border-rose-200 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-rose-400 text-lg">♥</span>
            </div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-pink-100/80 border-2 border-pink-200 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-pink-400 text-lg">♥</span>
            </div>
            
            {/* Bottom gradient - ABOVE video but BELOW controls */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-b-2xl pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
