import { motion } from 'framer-motion';
import type { ServicePageHero as ServicePageHeroProps } from '@/types';

interface Props {
  hero: ServicePageHeroProps;
}

export const ServicePageHero = ({ hero }: Props) => {
  return (
    <>
      {/* Page Header - "News" */}
      <section className="relative bg-[#1e3a4f] pt-32 pb-16 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2C5F7F] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00A9E0] rounded-full opacity-20 -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
              News
            </h1>
            <div className="w-24 h-1 bg-[#00C4FF] mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Service Intro Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Accent line */}
              <div className="w-16 h-1 bg-[#00A9E0] mb-6"></div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1e3a4f] mb-6 uppercase tracking-wide">
                {hero.title}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                {hero.description}
              </p>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src={hero.image}
                  alt={hero.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400/1A3A52/00A9E0?text=${encodeURIComponent(hero.title)}`;
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
