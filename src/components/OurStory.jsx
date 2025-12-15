// src/components/OurStory.jsx
// src/components/OurStory.jsx
import { motion } from 'framer-motion';

const OurStory = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
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
    <section className="flex items-center justify-center py-16 px-6 bg-transparent">
      <motion.div 
        className="max-w-5xl text-center text-gray-800 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h2 
          className="mb-4 text-4xl md:text-5xl lg:text-6xl font-font font-bold tracking-wide"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            color: "#4f46e5"
          }}
        >
          Our Story
        </motion.h2>

        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={itemVariants}
        >
          <motion.span 
            className="h-px w-20 sm:w-24 md:w-32 bg-gray-400 mr-4"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.span 
            className="text-2xl md:text-3xl lg:text-4xl"
            variants={heartVariants}
            whileHover={{ 
              scale: 1.4, 
              rotate: 360,
              color: "#ef4444"
            }}
            whileTap={{ scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            ♥
          </motion.span>
          <motion.span 
            className="h-px w-20 sm:w-24 md:w-32 bg-gray-400 ml-4"
            initial={{ scaleX: 0, originX: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4 font-para"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dicta, explicabo, fugiat animi eius vel vero ex voluptate corporis
          recusandae sunt dolorum optio doloribus dolores. Beatae perferendis
          vero tenetur repellat? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum itaque doloremque quidem dolores perspiciatis
          dolore exercitationem animi, eaque, harum minima omnis esse
          consequatur illo debitis deserunt et? Aspernatur, aliquam praesentium.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OurStory;
