import { motion } from 'framer-motion';
import { TbCircleCheck } from 'react-icons/tb';
import type { CapabilityList as CapabilityListProps } from '@/types';

interface Props {
  capabilities: CapabilityListProps;
}

export const CapabilitiesList = ({ capabilities }: Props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-1 bg-[#00A9E0] mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a4f] uppercase tracking-wide">
            {capabilities.sectionTitle}
          </h2>
        </motion.div>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 max-w-4xl mx-auto">
          {capabilities.items.map((item, index) => {
            const isLastOdd =
              capabilities.items.length % 2 === 1 && index === capabilities.items.length - 1;

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 ${
                  isLastOdd ? 'md:col-span-2 md:max-w-[calc(50%-1.25rem)] md:mx-auto' : ''
                }`}
              >
                <TbCircleCheck className="text-[#00A9E0] flex-shrink-0 mt-0.5" size={22} />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
