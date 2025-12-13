// src/components/Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Story' },
    { id: 'events', label: 'Events' },
    { id: 'invite', label: 'Invite' },
    { id: 'shoot', label: 'Shoot' },  // Changed from 'wishes' to 'shoot'
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="relative z-50 flex justify-end px-16 pt-8 text-white">
      <nav className="flex space-x-2">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`px-6 py-3 rounded-full text-lg tracking-wide font-medium transition-all duration-300 relative group ${
              activeSection === item.id
                ? 'bg-white/20 backdrop-blur-sm shadow-lg text-white'
                : 'hover:bg-white/10 text-white/90 hover:text-white'
            }`}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ 
              scale: 1.1, 
              y: -4,
              backgroundColor: '#ffffff20'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="relative z-10">{item.label}</span>
            {activeSection === item.id && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-sm -z-10"
                layoutId="activeNav"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            )}
          </motion.button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
