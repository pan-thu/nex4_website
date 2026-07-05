import { motion } from 'framer-motion';
import type { Partners } from '@/types';

interface Props {
  partners: Partners;
}

export const ServicePartnersSection = ({ partners }: Props) => {
  if (partners.logos.length === 0) {
    return null;
  }

  // Below this count, a static row reads better than a looping marquee
  const isStatic = partners.logos.length <= 4;
  const duplicatedLogos = isStatic ? partners.logos : [...partners.logos, ...partners.logos];

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

        {isStatic ? (
          <div className="flex flex-wrap justify-center gap-8">
            {partners.logos.map((partner) => (
              <div
                key={partner.name}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Infinite scrolling container */
          <div className="relative overflow-hidden">
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
                  className="flex-shrink-0 w-48 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-3 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
