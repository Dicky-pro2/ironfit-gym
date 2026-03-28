import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const Tilt3D = ({ 
  children, 
  className = '', 
  tiltAngle = 15,
  perspective = 1000,
  scale = 1.05,
  glare = true,
  glareColor = 'rgba(255,255,255,0.3)',
  transitionSpeed = 0.3
}) => {
  const ref = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for smooth tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring for smooth animation
  const springConfig = { damping: 15, stiffness: 200 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltAngle, -tiltAngle]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltAngle, tiltAngle]), springConfig);
  
  // Glare effect
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (-0.5 to 0.5 range)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale: isHovering ? scale : 1,
          transition: `transform ${transitionSpeed}s ease-out`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        
        {/* Glare Effect */}
        {glare && isHovering && (
          <motion.div
            className="absolute inset-0 rounded-inherit pointer-events-none overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor}, transparent 80%)`,
              borderRadius: 'inherit',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Tilt3D;