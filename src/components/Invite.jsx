// src/components/InvitationPage.jsx
import { motion } from "framer-motion";
import Invite from "../assets/image/invite.jpg";

const invitationConfig = {
  id: "wedding-invitation-1",
  image: {
    src: Invite,
    alt: "Wedding couple",
  },
  subtitle1: "JOIN US TO CELEBRATE",
  subtitle2: "THE WEDDING DAY OF",
  coupleNames: "Kwan & Kiaraa",
  subtitle3: "WHICH IS CELEBRATION ON",
  weddingDate: "DEC | 25 | 2023",
  timeStart: "STARTING AT 3:00",
  timePeriod: "IN THE AFTERNOON",
  venueName: "XYZ Palace",
  venueCity: "Jaipur",
};

const InvitationPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const leftImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const dateVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-transparent">
      {/* Card */}
      <motion.div
        className="
          w-full max-w-6xl
          flex flex-col lg:flex-row
          bg-white shadow-2xl border border-gray-200
          rounded-2xl overflow-hidden
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image Section */}
        <motion.div
          className="
            w-full lg:w-1/2
            flex items-center justify-center
            bg-gradient-to-br from-white to-gray-50
            p-4 sm:p-6 md:p-8
          "
          variants={leftImageVariants}
        >
          <motion.div
            className="
              bg-white border-4 border-gray-200 shadow-xl
              rounded-xl p-3 sm:p-4 md:p-6
              w-full
            "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={invitationConfig.image.src}
              alt={invitationConfig.image.alt}
              className="
                w-full object-cover rounded-lg
                h-[280px] sm:h-[380px] md:h-[500px] lg:h-[80vh]
              "
              initial={{ filter: "brightness(0.8) blur(1px)" }}
              animate={{ filter: "brightness(1) blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="
            w-full lg:w-1/2
            flex items-center justify-center
            px-6 sm:px-8 md:px-10
            py-10 md:py-12
            text-center text-gray-800
          "
          variants={textItemVariants}
        >
          <div className="space-y-6 sm:space-y-8 w-full">
            <motion.p
              className="
                tracking-[0.18em] sm:tracking-[0.2em]
                text-xs sm:text-sm uppercase font-light
              "
              variants={textItemVariants}
            >
              {invitationConfig.subtitle1}
              <br />
              {invitationConfig.subtitle2}
            </motion.p>

            <motion.h2
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                tracking-wide font-invite font-bold text-gray-900
              "
              variants={textItemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {invitationConfig.coupleNames}
            </motion.h2>

            <motion.p
              className="
                text-xs sm:text-sm tracking-[0.14em] sm:tracking-[0.15em]
                uppercase font-light
              "
              variants={textItemVariants}
            >
              {invitationConfig.subtitle3}
            </motion.p>

            <motion.p
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                tracking-[0.25em] sm:tracking-[0.35em]
                font-bold text-gray-900
              "
              variants={dateVariants}
              whileHover={{ scale: 1.1, color: "#ef4444" }}
            >
              {invitationConfig.weddingDate}
            </motion.p>

            <motion.div
              className="
                space-y-1 text-xs sm:text-sm
                tracking-[0.16em] sm:tracking-[0.18em]
                uppercase font-light
              "
              variants={textItemVariants}
            >
              <p>{invitationConfig.timeStart}</p>
              <p>{invitationConfig.timePeriod}</p>
            </motion.div>

            <motion.div
              className="
                space-y-1 text-xs sm:text-sm
                tracking-[0.16em] sm:tracking-[0.18em]
                uppercase font-semibold text-gray-700
              "
              variants={textItemVariants}
            >
              <p>{invitationConfig.venueName}</p>
              <p>{invitationConfig.venueCity}</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvitationPage;
