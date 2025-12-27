// src/components/Hero.jsx
import { motion, AnimatePresence } from 'framer-motion';

const heroConfig = {
  id: "wedding-hero-1",
  subtitle: "THE WEDDING OF",
  coupleNames: "Kwan & Kiaraa",
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen">
      <motion.div
        className="text-center text-white px-4 w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-[0.25em] mb-2"
          variants={itemVariants}
        >
          {heroConfig.subtitle}
        </motion.p>

        <motion.div
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="h-px w-16 sm:w-20 md:w-24 bg-white mr-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.span
            className="text-3xl md:text-4xl"
            variants={heartVariants}
            whileHover={{ scale: 1.3, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            ♥
          </motion.span>
          <motion.span
            className="h-px w-16 sm:w-20 md:w-24 bg-white ml-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        <motion.h1
          className="font-head text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wide leading-tight"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
          }}
          transition={{ duration: 0.3 }}
          dangerouslySetInnerHTML={{ __html: heroConfig.coupleNames.replace('&', '&amp;') }}
        />
      </motion.div>
    </main>
  );
};

export default Hero;
