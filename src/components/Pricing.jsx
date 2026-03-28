import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import Tilt3D from './animations/Tilt3D';
import Parallax from './animations/Parallax';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₦15,000',
      period: '/month',
      features: ['Gym access (6am-10pm)', 'Locker room access', '1 free training session'],
      color: 'from-gray-600 to-gray-800',
      popular: false,
    },
    {
      name: 'Premium',
      price: '₦25,000',
      period: '/month',
      features: ['24/7 Gym access', 'All classes included', '4 personal training sessions', 'Nutrition guide'],
      color: 'from-primary to-orange-600',
      popular: true,
    },
    {
      name: 'Annual',
      price: '₦250,000',
      period: '/year',
      features: ['All Premium benefits', '2 months free', 'Exclusive merchandise', 'Guest passes (2/month)'],
      color: 'from-purple-600 to-pink-600',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 relative overflow-hidden">
      <Parallax offset={50} direction="right" className="absolute top-1/4 right-0 opacity-5">
        <div className="text-8xl">💰</div>
      </Parallax>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Membership <span className="text-primary">Plans</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 0.2} direction="up">
              <Tilt3D 
                tiltAngle={8} 
                scale={1.03}
                glare={plan.popular}
                glareColor="rgba(255,107,53,0.3)"
                transitionSpeed={0.3}
              >
                <div className={`bg-white rounded-xl overflow-hidden shadow-lg ${
                  plan.popular ? 'ring-2 ring-primary relative' : ''
                }`}>
                  {plan.popular && (
                    <motion.div
                      className="bg-gradient-to-r from-primary to-orange-600 text-white text-center py-2 text-sm font-semibold"
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      🔥 MOST POPULAR 🔥
                    </motion.div>
                  )}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="text-gray-600 flex items-center justify-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-primary">✓</span> {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.a
                      href="#contact"
                      className={`inline-block w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-orange-600 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </motion.a>
                  </div>
                </div>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;