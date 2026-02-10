import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

interface Props {
  benefits: string[];
}

export const BenefitsListSection = ({ benefits }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Gift className="text-primary" size={28} />
        Benefits & Perks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center gap-3 bg-gray-50 rounded-lg p-4"
          >
            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
            <span className="text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
