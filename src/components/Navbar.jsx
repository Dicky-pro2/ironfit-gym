import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Schedule", href: "#schedule" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-white ${
        scrolled ? "bg-dark/95 backdrop-blur-md shadow-lg" : "bg-dark"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">
            Iron<span className="text-primary">Fit</span>
          </a>

          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <motion.ul
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          {navLinks.map((link) => (
            <li key={link.name} className="py-2">
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
