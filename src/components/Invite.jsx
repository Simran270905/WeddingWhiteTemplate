import { motion } from 'framer-motion';
import Invite from "../assets/image/invite.jpg";

const InvitationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };

  const leftImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const dateVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      {/* Card container */}
      <motion.div 
        className="w-full max-w-6xl flex bg-white shadow-2xl shadow-gray-200 border border-gray-200 rounded-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Left: framed image */}
        <motion.div 
          className="w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-gray-50"
          variants={leftImageVariants}
        >
          <motion.div 
            className="bg-white border-4 border-gray-200 shadow-xl rounded-xl p-6 hover:shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={Invite}
              alt="Wedding couple"
              className="h-[80vh] w-full object-cover rounded-lg"
              initial={{ filter: "brightness(0.8) blur(1px)" }}
              animate={{ filter: "brightness(1) blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Right: invitation text */}
        <motion.div 
          className="w-1/2 flex items-center justify-center px-10 py-12 text-center text-gray-800"
          variants={textItemVariants}
        >
          <div className="space-y-8 w-full">
            <motion.p 
              className="tracking-[0.2em] text-sm uppercase font-light"
              variants={textItemVariants}
            >
              JOIN US TO CELEBRATE
              <br />
              THE WEDDING DAY OF
            </motion.p>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide font-light text-gray-900"
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }} // Black only - no color change
              transition={{ duration: 0.3 }}
            >
              Kwan & Kiaraa
            </motion.h2>

            <motion.p 
              className="text-sm tracking-[0.15em] uppercase font-light"
              variants={textItemVariants}
            >
              WHICH IS CELEBRATION ON
            </motion.p>

            <motion.p 
              className="text-3xl md:text-4xl lg:text-5xl tracking-[0.35em] font-bold text-gray-900"
              variants={dateVariants}
              whileHover={{ scale: 1.1, color: "#ef4444" }}
            >
              DEC|25|2023
            </motion.p>

            <motion.div 
              className="space-y-1 text-sm tracking-[0.18em] uppercase font-light"
              variants={textItemVariants}
            >
              <p>STARTING AT 3:00</p>
              <p>IN THE AFTERNOON</p>
            </motion.div>

            <motion.div 
              className="space-y-1 text-sm tracking-[0.18em] uppercase font-semibold text-gray-700"
              variants={textItemVariants}
            >
              <p>SAINT THOMAS CHURCH</p>
              <p>SEOUL</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvitationPage;
