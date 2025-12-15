// src/pages/HomePage.jsx
import { motion } from 'framer-motion';
import { useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Invite from "../components/Invite";
import CountdownSection from "../components/CountdownSection";
import Couple from "../components/Couple";
import TravelStay from "../components/TravelStay";
import PreWedding from "../components/PreWedding";
import Footer from "../components/Footer";
import WeddingEvents from "../components/WeddingEvents";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth 3D transforms
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), { stiffness: 100, damping: 30 });
  const depthZ = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const floatScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  
  return (
    <div className="relative overflow-hidden">
      {/* 3D Floating Background Layers */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5 -z-10"
        style={{ scale: floatScale, rotateX }}
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      {/* Home Section */}
      <motion.section
        id="home"
        className="relative min-h-screen bg-cover bg-center bg-no-repeat scroll-mt-20"
        style={{ 
          backgroundImage: "url('/src/assets/image/bg2.jpg')",
          y: parallaxY,
          z: depthZ
        }}
        initial={{ rotateY: 180, scale: 0.8 }}
        animate={{ rotateY: 0, scale: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
        
        {/* Orbital Hearts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/50 text-3xl lg:text-5xl"
            style={{
              left: `${15 + i * 13}%`,
              top: `${25 + i * 12}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ♥
          </motion.div>
        ))}
        
        <Navbar />
        <motion.div style={{ transformStyle: 'preserve-3d' }}>
          <motion.div
            style={{ rotateX: -3 }}
            whileHover={{ rotateX: -8, rotateY: 5 }}
            transition={{ type: "spring" }}
          >
            <Hero />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Layered 3D Sections */}
      <motion.div 
        style={{ 
          transformStyle: 'preserve-3d',
          rotateX: useTransform(scrollYProgress, [0, 0.9], [0, 8])
        }}
      >
        {/* Story Section */}
        <motion.section 
          id="story" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.1, 0.5], [50, 0]),
            y: useTransform(scrollYProgress, [0.1, 0.5], [0, -30])
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <OurStory />
        </motion.section>

        {/* Couple Section (after Story) */}
        <motion.section 
          id="gallery" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.2, 0.6], [40, -10]),
            rotateY: useTransform(scrollYProgress, [0.2, 0.6], [2, -2])
          }}
        >
          <Couple />
        </motion.section>

        {/* Events Section */}
        <motion.section 
          id="events" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.3, 0.7], [-30, 40]),
            rotateY: useTransform(scrollYProgress, [0.3, 0.7], [0, -5])
          }}
        >
          <WeddingEvents />
          <CountdownSection />
        </motion.section>

        {/* Shoot Section - PreWedding */}
        <motion.section 
          id="shoot" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.6, 1], [30, -30]),
            rotateY: useTransform(scrollYProgress, [0.6, 1], [5, -3])
          }}
        >
          <PreWedding />
        </motion.section>

        {/* Invite Section (new placement) */}
        <motion.section 
          id="invite" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.7, 1], [20, 0]),
            scale: useTransform(scrollYProgress, [0.7, 1], [1, 0.99])
          }}
        >
          <Invite />
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="scroll-mt-20"
          style={{
            z: useTransform(scrollYProgress, [0.85, 1], [0, 20]),
            scale: useTransform(scrollYProgress, [0.85, 1], [1, 0.98])
          }}
        >
          <TravelStay />
        </motion.section>

        <motion.footer 
          id="footer"
          style={{
            z: useTransform(scrollYProgress, [0.95, 1], [-20, 0]),
            rotateX: useTransform(scrollYProgress, [0.95, 1], [2, 0])
          }}
        >
          <Footer />
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default HomePage;