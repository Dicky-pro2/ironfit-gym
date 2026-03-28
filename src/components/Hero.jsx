import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')",
          y: backgroundY,
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]),
        }}
      />

      {/* Foreground Content with Parallax */}
      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ y: textY, opacity }}
      >
        <FadeIn delay={0.2}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            Build Your <span className="text-primary">Best Self</span>
          </motion.h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            State-of-the-art equipment, expert trainers, and a community that pushes you to be better.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <motion.a
            href="#pricing"
            className="inline-block bg-primary hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
              transition: { repeat: Infinity, duration: 2, repeatDelay: 1 }
            }}
          >
            Join Now →
          </motion.a>
        </FadeIn>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-white rounded-full mt-2"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;