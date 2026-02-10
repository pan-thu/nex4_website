import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { Button } from '@/components/ui/button';
import { useCarousel } from '@/hooks/useCarousel';
import { testimonialData } from '@/data/testimonials';

export const TestimonialsSection = () => {
  const { currentIndex, goToNext, goToPrev, goToIndex, setIsPaused } = useCarousel({
    totalItems: testimonialData.length,
    autoPlay: true,
    autoPlayInterval: 7000,
  });

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-[#00A9E0]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#00C4FF]/5 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,169,224,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,169,224,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p className="text-sm font-semibold text-[#00A9E0] tracking-widest uppercase">Testimonials</p>
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a4f] mb-4">
            What Our{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                Clients Say
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Trusted by organizations across industries for innovative technology solutions
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Glow effect behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00A9E0]/10 to-[#00C4FF]/10 rounded-[2rem] blur-2xl" />

          {/* Testimonial Card with AnimatePresence for smooth transitions */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <TestimonialCard testimonial={currentTestimonial} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 hidden md:block"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="bg-white hover:bg-gradient-to-r hover:from-[#00A9E0] hover:to-[#00C4FF] hover:text-white text-[#00A9E0] border-[#00A9E0]/30 hover:border-transparent rounded-full shadow-lg hover:shadow-[0_10px_30px_rgba(0,169,224,0.3)] transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 hidden md:block"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="bg-white hover:bg-gradient-to-r hover:from-[#00A9E0] hover:to-[#00C4FF] hover:text-white text-[#00A9E0] border-[#00A9E0]/30 hover:border-transparent rounded-full shadow-lg hover:shadow-[0_10px_30px_rgba(0,169,224,0.3)] transition-all duration-300"
            >
              <ChevronRight size={24} />
            </Button>
          </motion.div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToIndex(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] w-8'
                    : 'bg-gray-300 w-2 hover:bg-[#00A9E0]/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00A9E0] to-[#00C4FF]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 7, ease: 'linear' }}
                key={currentIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
