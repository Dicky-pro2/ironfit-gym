import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
  };

  const initial = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initial }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...initial }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;