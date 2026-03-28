import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, className = '', tiltAngle = 15, scale = 1.05 }) => {
  return (
    <Tilt
      tiltMaxAngleX={tiltAngle}
      tiltMaxAngleY={tiltAngle}
      perspective={1000}
      scale={scale}
      transitionSpeed={300}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="all"
      className={className}
    >
      {children}
    </Tilt>
  );
};

export default TiltCard;