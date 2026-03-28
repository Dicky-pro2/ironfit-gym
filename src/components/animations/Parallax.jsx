import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = ({ children, offset = 50, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const directions = {
    up: useTransform(scrollYProgress, [0, 1], [offset, -offset]),
    down: useTransform(scrollYProgress, [0, 1], [-offset, offset]),
    left: useTransform(scrollYProgress, [0, 1], [offset, -offset]),
    right: useTransform(scrollYProgress, [0, 1], [-offset, offset]),
  };

  const y = directions[direction] || directions.up;
  const x = direction === 'left' || direction === 'right' ? y : 0;

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;