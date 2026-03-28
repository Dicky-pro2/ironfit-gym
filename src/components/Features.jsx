import { motion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from './animations/StaggerChildren';
import Tilt3D from './animations/Tilt3D';
import Parallax from './animations/Parallax';

const Features = () => {
  const features = [
    { 
      icon: '🏋️', 
      title: 'Modern Equipment', 
      desc: 'Latest machines and free weights for all fitness levels.',
      gradient: 'from-orange-500 to-red-500'
    },
    { 
      icon: '👨‍🏫', 
      title: 'Expert Trainers', 
      desc: 'Certified professionals to guide your fitness journey.',
      gradient: 'from-blue-500 to-purple-500'
    },
    { 
      icon: '🕐', 
      title: '24/7 Access', 
      desc: 'Work out anytime, day or night.',
      gradient: 'from-green-500 to-teal-500'
    },
    { 
      icon: '🧘', 
      title: 'Group Classes', 
      desc: 'Yoga, HIIT, Spin, and more for every interest.',
      gradient: 'from-pink-500 to-rose-500'
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 relative overflow-hidden">
      <Parallax offset={30} direction="right" className="absolute top-20 right-10 opacity-10">
        <div className="text-9xl">💪</div>
      </Parallax>
      
      <Parallax offset={40} direction="left" className="absolute bottom-20 left-10 opacity-10">
        <div className="text-9xl">🏃</div>
      </Parallax>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose <span className="text-primary">Us</span>
        </motion.h2>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Tilt3D 
                tiltAngle={12} 
                scale={1.05}
                glare={true}
                glareColor="rgba(255,107,53,0.2)"
                transitionSpeed={0.4}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="p-6 text-center">
                    <motion.div
                      className={`text-6xl mb-4 inline-block bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                    
                    {/* Decorative element */}
                    <motion.div 
                      className="w-12 h-1 bg-primary/30 mx-auto mt-4 rounded-full"
                      whileHover={{ width: 24, backgroundColor: '#ff6b35' }}
                    />
                  </div>
                </div>
              </Tilt3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Features;