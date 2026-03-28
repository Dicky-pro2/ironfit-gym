import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import HoverScale from './animations/HoverScale';
import Parallax from './animations/Parallax';

const Schedule = () => {
  const classes = [
    { day: 'Monday', classes: 'HIIT - 6am, 6pm', time: 'Morning & Evening' },
    { day: 'Tuesday', classes: 'Yoga - 7am, 5pm', time: 'Morning & Evening' },
    { day: 'Wednesday', classes: 'Spin - 6am, 7pm', time: 'Morning & Evening' },
    { day: 'Thursday', classes: 'Strength - 7am, 6pm', time: 'Morning & Evening' },
    { day: 'Friday', classes: 'Boxing - 6am, 5pm', time: 'Morning & Evening' },
    { day: 'Saturday', classes: 'Bootcamp - 9am', time: 'Morning' },
    { day: 'Sunday', classes: 'Rest & Recovery', time: 'Closed' },
  ];

  return (
    <section id="schedule" className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Class <span className="text-primary">Schedule</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {classes.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <Parallax offset={20} direction="up">
                <HoverScale scale={1.03}>
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center hover:bg-primary/20 transition-all duration-300 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">{item.day}</h3>
                    <p className="text-gray-300 font-semibold">{item.classes}</p>
                    <p className="text-gray-400 text-sm mt-2">{item.time}</p>
                  </div>
                </HoverScale>
              </Parallax>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;