import { motion } from 'framer-motion';
import type { Partners } from '@/types';

interface Props {
  partners: Partners;
}

export const ServicePartnersSection = ({ partners }: Props) => {
  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...partners.logos, ...partners.logos];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
            {partners.sectionTitle}
          </h2>
        </motion.div>

        {/* Infinite scrolling container */}
        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -(192 + 32) * partners.logos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
