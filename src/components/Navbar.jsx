// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "story", label: "Story" },
    { id: "events", label: "Events" },
    { id: "invite", label: "Invite" },
    { id: "shoot", label: "Shoot" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 right-0 z-50 w-full">
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-end px-16 pt-8 text-white">
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`px-6 py-3 rounded-full text-lg tracking-wide font-medium relative transition-all ${
                activeSection === item.id
                  ? "bg-white/20 backdrop-blur-sm shadow-lg"
                  : "hover:bg-white/10 text-white/90"
              }`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-sm -z-10"
                  layoutId="activeNav"
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-end px-6 pt-6">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-lg"
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden absolute top-20 right-4 w-56 bg-white/15 backdrop-blur-xl rounded-2xl shadow-2xl p-4"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`px-5 py-3 rounded-xl text-base text-white tracking-wide text-left ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-rose-400/50 to-pink-400/50"
                      : "hover:bg-white/10"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
