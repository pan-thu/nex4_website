import { motion } from 'framer-motion';

interface Props {
  hero: {
    title: string;
    titleHighlight?: string;
    subtitle?: string;
  };
}

export const CareerHero = ({ hero }: Props) => {
  return (
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
            {hero.title}
          </h1>
          <div className="w-24 h-1 bg-[#00C4FF] mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
};
