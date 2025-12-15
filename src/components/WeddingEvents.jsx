import { motion } from 'framer-motion';
import eventImg from "../assets/image/events.jpg";

export default function WeddingEvents() {
  const events = [
    {
      title: "Ceremony",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem, id cum maxime necessitatibus, reiciendis suscipit, eius facilis recusandae.",
    },
    {
      title: "Toast & Dinner",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem, id cum maxime necessitatibus, reiciendis suscipit, eius facilis recusandae.",
    },
    {
      title: "Wedding Cake",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem, id cum maxime necessitatibus, reiciendis suscipit, eius facilis recusandae.",
    },
    {
      title: "Photography",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure autem, id cum maxime necessitatibus, reiciendis suscipit, eius facilis recusandae.",
    },
  ];

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
    <section className="w-full py-20 bg-gradient-to-b from-[#fafafa] to-white">
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* LEFT CONTENT */}
        <motion.div>
          {/* Heading */}
          <motion.div 
            className="mb-12"
            variants={headingVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-font font-bold italic text-gray-800 text-center lg:text-left leading-tight"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              Wedding Events
            </motion.h2>

            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4 mt-4"
              variants={headingVariants}
            >
              <motion.span 
                className="w-16 sm:w-20 md:w-24 h-[2px] bg-gradient-to-r from-gray-400 to-rose-400 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span 
                className="text-2xl md:text-3xl lg:text-4xl text-rose-400 drop-shadow-sm"
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

          {/* Events Timeline */}
          <div className="space-y-10 relative pl-6 lg:pl-10">
            <motion.div 
              className="absolute left-3 lg:left-5 top-0 bottom-0 w-[3px] bg-gradient-to-t from-rose-400 via-gray-300 to-rose-400 rounded-full shadow-sm"
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />

            {events.map((event, index) => (
              <motion.div 
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              >
                {/* Animated Timeline Dot */}
                <motion.span 
                  className="absolute -left-2 lg:-left-3 top-4 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-400 border-4 border-white shadow-lg rounded-full group-hover:scale-125 z-10"
                  initial={{ scale: 0, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  whileHover={{ 
                    scale: 1.3, 
                    y: -5,
                    boxShadow: "0 0 25px rgba(244, 63, 94, 0.7)"
                  }}
                  transition={{ type: "spring", stiffness: 400, delay: 1 + index * 0.2 }}
                />

                <motion.h3 
                  className="text-xl md:text-2xl font-font font-semibold uppercase tracking-wide ml-8 lg:ml-12 text-gray-800 mb-3 pl-2 pr-4 py-2 rounded-lg group-hover:text-rose-600 group-hover:bg-rose-50/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {event.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 mt-3 leading-relaxed ml-8 lg:ml-12 max-w-md pl-2 font-para"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 + index * 0.2 }}
                >
                  {event.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          className="flex justify-center"
          whileHover={{ y: -15 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={eventImg}
            alt="Wedding Events"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-cover shadow-2xl rounded-3xl border-8 border-white/70 hover:border-rose-100/70 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:brightness-110 transition-all duration-500"
            initial={{ scale: 0.9, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              delay: 1.2 
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
