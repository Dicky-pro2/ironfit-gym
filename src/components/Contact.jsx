import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    hover: { scale: 1.01, transition: { duration: 0.2 } },
  };

  return (
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact <span className="text-primary">Us</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
              />
              <motion.textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                variants={inputVariants}
                whileHover="hover"
                whileFocus="focus"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary text-white"
              ></motion.textarea>
              <motion.button
                type="submit"
                className="w-full bg-primary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 text-center space-y-2">
              <p>📍 123 Ahmadu Bello Way, Victoria Island, Lagos</p>
              <p>📞 +234 812 345 6789</p>
              <p>📧 info@ironfit.ng</p>
              <div className="flex justify-center space-x-4 mt-4">
                {['Instagram', 'Facebook', 'Twitter'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;