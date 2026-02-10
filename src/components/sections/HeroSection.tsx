import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Rocket, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Floating shapes component
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circle */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#00C4FF]/20 to-transparent blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ top: '10%', right: '5%' }}
      />

      {/* Medium floating circle */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-[#00A9E0]/15 to-transparent blur-2xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ bottom: '20%', left: '10%' }}
      />

      {/* Small floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-[#00C4FF]/40"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
          style={{
            left: `${15 + i * 18}%`,
            bottom: '10%',
          }}
        />
      ))}

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#1A3A52] to-[#0a1628]" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/50" />
      </motion.div>

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
<motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-[1.1]"
          >
            Next-Gen{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-[#00C4FF] via-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                ICT Solutions
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00C4FF] to-[#00A9E0]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Empowering businesses with cutting-edge technology solutions
            for digital transformation and sustainable growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] text-white hover:brightness-110 text-base font-semibold px-8 py-6 rounded-full shadow-[0_10px_40px_rgba(0,169,224,0.4)] transition-all duration-300 flex items-center gap-2 group"
                onClick={scrollToServices}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Explore Services
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00A9E0]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base font-semibold px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300 flex items-center gap-2 group"
                onClick={() => navigate('/contact-us')}
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">500+</span>
              <span>Projects Delivered</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">150+</span>
              <span>Happy Clients</span>
            </div>
            <div className="w-px h-8 bg-white/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">10+</span>
              <span>Years Experience</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer text-white/50 hover:text-white/80 transition-colors"
          onClick={scrollToServices}
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};
