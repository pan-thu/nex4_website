import { motion, AnimatePresence } from 'framer-motion';
import { TeamMemberCard } from '@/components/common/TeamMemberCard';
import { useCarousel } from '@/hooks/useCarousel';
import { employeeData } from '@/data/employees';

export const EmployeeTeamSection = () => {
  const { currentIndex, goToIndex, setIsPaused } = useCarousel({
    totalItems: Math.ceil(employeeData.length / 2),
    autoPlay: true,
    autoPlayInterval: 5000,
  });

  const itemsPerPage = 2;
  const startIndex = currentIndex * itemsPerPage;
  const visibleEmployees = employeeData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(employeeData.length / itemsPerPage);

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#0a1628] via-[#1A3A52] to-[#0a1628] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large floating circles */}
        <motion.div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00A9E0]/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 50, -100],
            y: [-100, 50, -100],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00C4FF]/10 rounded-full blur-3xl"
          animate={{
            x: [100, -50, 100],
            y: [100, -50, 100],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-[2px] w-12 bg-[#00C4FF]"></div>
              <p className="text-xs uppercase tracking-widest text-[#00C4FF] font-semibold">The Team</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00C4FF] to-[#00A9E0] bg-clip-text text-transparent">Awesome</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#00C4FF] to-[#00A9E0] rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{ originX: 0 }}
                />
              </span>
              <br />Team
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-white/80 mb-10 leading-relaxed"
            >
              Our diverse team of technical experts, project managers, and consultants work collaboratively to deliver exceptional results for our clients across various industries.
            </motion.p>

            {/* Team Stats with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-8"
            >
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '100%', label: 'Success Rate' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring' }}
                  className="group"
                >
                  <motion.div
                    className="text-3xl font-bold text-white mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/60 text-xs group-hover:text-[#00C4FF] transition-colors">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Team Members */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00C4FF]/20 to-[#00A9E0]/20 rounded-[2rem] blur-2xl" />

            <div
              className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Carousel Container */}
              <div className="relative overflow-hidden min-h-[200px] flex items-center justify-center">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -300, opacity: 0, scale: 0.9 }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 }
                    }}
                    className="flex gap-6 absolute"
                  >
                    {visibleEmployees.map((employee) => (
                      <TeamMemberCard
                        key={employee.id}
                        member={employee}
                        showSocial={false}
                        variant="dark"
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToIndex(index)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-gradient-to-r from-[#00C4FF] to-white w-6'
                          : 'bg-white/30 w-2 hover:bg-white/60'
                      }`}
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
