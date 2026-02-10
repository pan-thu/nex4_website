import { motion } from 'framer-motion';
import { StatCard } from '@/components/common/StatCard';
import { statsData } from '@/data/stats';

export const StatsSection = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A9E0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C4FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] mx-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a4f] mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering excellence and driving digital transformation across industries
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
