import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import Tilt3D from './animations/Tilt3D';
import Parallax from './animations/Parallax';

const Trainers = () => {
  const trainers = [
    {
      name: 'Michael Okonkwo',
      role: 'Head Coach | 10+ years experience',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400',
      specialty: 'Strength Training',
      bio: 'Former national champion with passion for helping others reach their peak.',
      social: { instagram: '@michael_fit', twitter: '@michaelcoach' }
    },
    {
      name: 'Adaobi Eze',
      role: 'Yoga & Wellness Specialist',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
      specialty: 'Yoga & Meditation',
      bio: 'Certified yoga instructor with 8 years of experience in holistic wellness.',
      social: { instagram: '@adaobi.yoga', twitter: '@adaobiwellness' }
    },
    {
      name: 'Emeka Nwosu',
      role: 'Strength & Conditioning Coach',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      specialty: 'Functional Training',
      bio: 'Expert in athletic performance and functional movement patterns.',
      social: { instagram: '@emeka_strength', twitter: '@emekafit' }
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <Parallax offset={30} direction="up">
                <Tilt3D 
                  tiltAngle={10} 
                  scale={1.02}
                  glare={true}
                  glareColor="rgba(255,107,53,0.15)"
                  transitionSpeed={0.4}
                >
                  <motion.div
                    className="bg-white rounded-2xl overflow-hidden shadow-xl group"
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="overflow-hidden relative">
                      <motion.img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-80 object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="text-white text-center">
                          <p className="text-sm mb-2">{trainer.bio}</p>
                          <div className="flex gap-3 justify-center mt-2">
                            <a href="#" className="hover:text-primary transition-colors">📷</a>
                            <a href="#" className="hover:text-primary transition-colors">🐦</a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {trainer.name}
                      </h3>
                      <p className="text-primary font-semibold mb-2">{trainer.role}</p>
                      <p className="text-gray-500 text-sm">{trainer.specialty}</p>
                      
                      {/* Social links */}
                      <div className="flex justify-center gap-4 mt-4">
                        <motion.a 
                          href="#" 
                          className="text-gray-400 hover:text-primary transition-colors text-sm"
                          whileHover={{ y: -2 }}
                        >
                          {trainer.social.instagram}
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </Tilt3D>
              </Parallax>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;