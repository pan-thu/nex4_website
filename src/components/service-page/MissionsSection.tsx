import { motion } from 'framer-motion';
import type { Mission } from '@/types';

interface Props {
  missions: Mission[];
}

export const MissionsSection = ({ missions }: Props) => {
  // Don't render if no missions
  if (!missions || missions.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Our Missions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-primary mb-4">
                {mission.number}
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {mission.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
