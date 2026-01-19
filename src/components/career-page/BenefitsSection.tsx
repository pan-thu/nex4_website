import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Users, Heart } from 'lucide-react';
import type { Benefit } from '@/types';

interface Props {
  whyJoin: {
    heading: string;
    benefits: Benefit[];
  };
}

// Map icon strings to Lucide React icons
const iconMap: Record<string, React.ElementType> = {
  innovation: Lightbulb,
  growth: TrendingUp,
  team: Users,
  'work-life': Heart,
  default: Lightbulb,
};

const getIcon = (iconName: string) => {
  return iconMap[iconName] || iconMap.default;
};

export const BenefitsSection = ({ whyJoin }: Props) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#00A9E0]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C4FF]/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(#00A9E0 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p className="text-sm font-semibold text-[#00A9E0] tracking-widest uppercase">
              Why Join Us
            </p>
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a4f] mb-4">
            {whyJoin.heading.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                {whyJoin.heading.split(' ').slice(-1)[0]}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the benefits that make NEX4 an exceptional place to grow your career
          </p>
        </motion.div>

        {/* Benefits Grid - Dynamically Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {whyJoin.benefits.map((benefit, index) => {
            const Icon = getIcon(benefit.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <motion.div
                  className="relative h-full"
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Background glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-2xl opacity-0 blur-lg"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.3 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 overflow-hidden h-full"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -5 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF]" />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.1, rotate: 5 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1e3a4f] mb-3 group-hover:text-[#00A9E0] transition-colors">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Decorative corner */}
                    <motion.div
                      className="absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-full opacity-5"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.5 },
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
