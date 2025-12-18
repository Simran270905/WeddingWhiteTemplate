import { motion } from "framer-motion";
import videoSrc from "../assets/video/prewedding.mp4";
import { useRef } from "react"; 

export default function PreWeddingShoot() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 15 },
    },
  };

  const videoRef = useRef(null);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Heading - UNCHANGED */}
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
          <span className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-rose-400 rounded-full" />
          <motion.span
            className="text-3xl text-rose-400"
            variants={heartVariants}
            whileHover={{ scale: 1.5, rotate: 360 }}
          >
            ♥
          </motion.span>
          <span className="w-20 h-[2px] bg-gradient-to-l from-gray-400 to-rose-400 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Video Section - UNCHANGED except external mute button removed */}
      <motion.div
        className="max-w-6xl mx-auto px-6"
        //whileHover={{ y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        >
          {/* Decorative layers - UNCHANGED */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 via-transparent to-pink-500/5 rounded-3xl blur-xl -z-10 pointer-events-none" />
          <div className="absolute inset-4 bg-gradient-to-r from-white via-rose-50/30 to-white rounded-3xl shadow-2xl -z-10 pointer-events-none" />

          {/* Video with native controls only */}
          <motion.video
            ref={videoRef}
            src={videoSrc}
            controls
            controlsList="nodownload"
            preload="metadata"
            playsInline
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
            className="relative z-0 w-full h-[70vh] md:h-[80vh] lg:h-[85vh] object-contain rounded-2xl shadow-inner "
          />

          {/* Corner decorations - UNCHANGED */}
          <div className="pointer-events-none absolute top-4 left-4 w-12 h-12 bg-rose-100/80 border-2 border-rose-200 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-rose-400 text-lg">♥</span>
          </div>

          <div className="pointer-events-none absolute bottom-4 right-4 w-12 h-12 bg-pink-100/80 border-2 border-pink-200 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-pink-400 text-lg">♥</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
