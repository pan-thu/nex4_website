import { motion, AnimatePresence } from 'framer-motion';
import { TeamMemberCard } from '@/components/common/TeamMemberCard';
import { useCarousel } from '@/hooks/useCarousel';
import { leadershipData } from '@/data/leadership';

export const ManagementTeamSection = () => {
  const { currentIndex, goToIndex, setIsPaused } = useCarousel({
    totalItems: leadershipData.length,
    autoPlay: true,
    autoPlayInterval: 5000,
  });

  const itemsPerView = 3;
  const visibleMembers = leadershipData.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // Handle wrapping for continuous carousel
  if (visibleMembers.length < itemsPerView) {
    const remaining = itemsPerView - visibleMembers.length;
    visibleMembers.push(...leadershipData.slice(0, remaining));
  }

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#00A9E0]/5 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00C4FF]/5 to-transparent rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[3px] w-16 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF]"></div>
              <p className="text-sm uppercase tracking-widest text-[#00A9E0] font-semibold">Leadership</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a4f] mb-4 leading-tight">
              Our{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">Management</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
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
              className="text-lg text-gray-600 leading-relaxed"
            >
              Led by industry veterans with decades of combined experience in enterprise technology solutions, our management team drives innovation and excellence in every project we undertake.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-8 mt-8"
            >
              {[
                { value: '50+', label: 'Years Combined' },
                { value: '200+', label: 'Projects Led' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring' }}
                >
                  <div className="text-3xl font-bold font-heading bg-gradient-to-r from-[#1e3a4f] to-[#00A9E0] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
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
            {/* Glow effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00A9E0]/10 to-[#00C4FF]/10 rounded-[2rem] blur-2xl" />

            <div
              className="relative bg-white rounded-3xl py-6 px-4 shadow-xl border border-gray-100"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative overflow-hidden min-h-[180px]">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="flex flex-wrap justify-evenly gap-y-4 absolute w-full"
                  >
                    {visibleMembers.map((member, index) => (
                      <TeamMemberCard
                        key={`${member.id}-${index}`}
                        member={member}
                        showSocial={false}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {leadershipData.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] w-8'
                        : 'bg-gray-300 w-2 hover:bg-[#00A9E0]/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
