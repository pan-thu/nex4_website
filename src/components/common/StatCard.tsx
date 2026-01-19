import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { useCounter } from '@/hooks/useCounter';
import type { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export const StatCard = ({ stat, index }: StatCardProps) => {
  const numericValue = parseInt(stat.value.replace(/\D/g, ''));
  const { ref, count } = useCounter(numericValue);
  const Icon = Icons[stat.icon as keyof typeof Icons] as any;

  const suffix = stat.value.includes('+') ? '+' : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="flex flex-col items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl"
        whileHover={{ y: -5 }}
      >
        {/* Icon with animated background */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-[#00A9E0]/20"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ scale: 1.3, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00A9E0]/25">
            {Icon && <Icon className="text-white" size={28} />}
          </div>
        </motion.div>

        {/* Counter */}
        <div className="text-center">
          <motion.div
            className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-[#1e3a4f] to-[#2C5F7F] bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
          >
            {count}{suffix}
          </motion.div>
          <p className="text-gray-500 text-sm mt-2 font-medium group-hover:text-[#00A9E0] transition-colors">
            {stat.label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
