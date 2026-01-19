import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';

interface Props {
  requirements: {
    required: string[];
    preferred: string[];
  };
}

export const RequirementsSection = ({ requirements }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Requirements</h2>

      {/* Required Requirements */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-primary" size={22} />
          Required Qualifications
        </h3>
        <ul className="space-y-3">
          {requirements.required.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-start gap-3 text-gray-700"
            >
              <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Preferred Requirements */}
      {requirements.preferred.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="text-accent-blue" size={22} />
            Preferred Qualifications
          </h3>
          <ul className="space-y-3">
            {requirements.preferred.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <Star className="text-accent-blue flex-shrink-0 mt-1" size={18} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};
