import { motion } from "framer-motion";
import groomImg from "../assets/image/Groom.jpg";
import brideImg from "../assets/image/Bride.jpg";
import coupleImg from "../assets/image/Couple.jpg";

const groomBrideConfig = {
  id: "groom-bride-1",
  heading: "Groom & Bride",
  groom: {
    image: groomImg,
    name: "Kwan",
    role: "Groom",
    bio: "Kwan is a passionate photographer who captures life's beautiful moments. His calm demeanor and creative vision make him the perfect partner for this love story.",
  },
  bride: {
    image: brideImg,
    name: "Kiaraa",
    role: "Bride",
    bio: "Kiaraa is a talented graphic designer with a heart full of love and creativity. Her joyful spirit lights up every room she enters.",
  },
  coupleImage: {
    src: coupleImg,
    alt: "Couple",
  },
};

export default function GroomBride() {
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
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full py-20 bg-transparent">
      {/* Heading */}
      <motion.div
        className="text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-font font-bold italic text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          {groomBrideConfig.heading}
        </motion.h2>

        <motion.div
          className="flex items-center justify-center gap-4 mt-4"
          variants={headingVariants}
        >
          <motion.span
            className="w-16 sm:w-20 md:w-24 h-[1px] bg-gray-400"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.span
            className="text-2xl md:text-3xl lg:text-4xl text-red-400"
            variants={heartVariants}
            whileHover={{ scale: 1.4, rotate: 360 }}
            whileTap={{ scale: 0.8 }}
          >
            ♥
          </motion.span>
          <motion.span
            className="w-16 sm:w-20 md:w-24 h-[1px] bg-gray-400"
            initial={{ scaleX: 0, originX: 1 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Groom */}
        <ProfileCard
          image={groomBrideConfig.groom.image}
          name={groomBrideConfig.groom.name}
          role={groomBrideConfig.groom.role}
          groomBio={groomBrideConfig.groom.bio}
          brideBio=""
          delay={0}
        />

        {/* Center Image */}
        <motion.div
          className="flex justify-center lg:col-span-1"
          whileHover={{ y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={groomBrideConfig.coupleImage.src}
            alt={groomBrideConfig.coupleImage.alt}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover shadow-2xl rounded-2xl border-8 border-white/50 hover:border-rose-100/50"
            initial={{ scale: 0.8, rotateY: 15 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.6,
            }}
          />
        </motion.div>

        {/* Bride */}
        <ProfileCard
          image={groomBrideConfig.bride.image}
          name={groomBrideConfig.bride.name}
          role={groomBrideConfig.bride.role}
          groomBio=""
          brideBio={groomBrideConfig.bride.bio}
          delay={0.4}
        />
      </motion.div>
    </section>
  );
}

function ProfileCard({ image, name, role, groomBio, brideBio, delay = 0 }) {
  const cardVariants = {
    hidden: { opacity: 0, rotateX: -20, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm p-10 text-center rounded-2xl shadow-xl hover:shadow-2xl border border-white/50 hover:border-gray-200/50 group"
      variants={cardVariants}
      whileHover={{ y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex justify-center mb-8"
        variants={imageVariants}
        whileHover="hover"
      >
        <motion.img
          src={image}
          alt={name}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-white shadow-2xl group-hover:border-rose-100/60"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, delay: delay + 0.2 }}
        />
      </motion.div>

      <motion.h3
        className="text-3xl md:text-4xl font-['Playfair_Display'] italic text-gray-800 mb-3"
        whileHover={{ scale: 1.05, color: "#1f2937" }}
      >
        {name}
      </motion.h3>

      <motion.p
        className="uppercase tracking-widest text-sm md:text-base mt-2 text-rose-500 font-semibold mb-6"
        whileHover={{ scale: 1.05 }}
      >
        {role}
      </motion.p>

      {groomBio && (
        <motion.p
          className="text-gray-600 leading-relaxed text-sm md:text-base px-4 font-para mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.4 }}
        >
          {groomBio}
        </motion.p>
      )}

      {brideBio && (
        <motion.p
          className="text-gray-600 leading-relaxed text-sm md:text-base px-4 font-para"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          {brideBio}
        </motion.p>
      )}
    </motion.div>
  );
}
