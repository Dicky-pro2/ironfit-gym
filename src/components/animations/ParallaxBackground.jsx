import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxBackground = ({ image, speed = 0.5, children, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ 
          y,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;