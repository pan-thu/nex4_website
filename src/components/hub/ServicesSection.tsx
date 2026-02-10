import { motion } from 'framer-motion';
import {
  TbMessageChatbot,
  TbClipboardList,
  TbHeadset,
} from 'react-icons/tb';
import type { Services } from '@/types';

interface ServicesSectionProps {
  services: Services;
}

// Map service icons
const iconMap: Record<string, React.ElementType> = {
  'consultancy': TbMessageChatbot,
  'project-management': TbClipboardList,
  'professional-service': TbHeadset,
};

export const ServicesSection = ({ services }: ServicesSectionProps) => {
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
            {services.sectionTitle}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Expert services to help you achieve your technology goals
          </p>
        </motion.div>

        {/* Services Cards - Centered */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon] || TbMessageChatbot;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[320px]"
              >
                <motion.div
                  className="group relative h-full"
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Background glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-2xl opacity-0 blur-lg"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.4 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col items-center text-center"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -10 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon with animated ring */}
                    <div className="relative mb-6">
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#00A9E0]/30"
                        variants={{
                          rest: { scale: 1, opacity: 0.3 },
                          hover: { scale: 1.3, opacity: 0 },
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e3a4f] to-[#2C5F7F] flex items-center justify-center shadow-xl"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.1 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="text-white" size={36} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1e3a4f] mb-4 group-hover:text-[#00A9E0] transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>

                    {/* Bottom accent */}
                    <motion.div
                      className="mt-6 w-12 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
                      variants={{
                        rest: { width: 48 },
                        hover: { width: 80 },
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Background decoration */}
                    <motion.div
                      className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-[#00A9E0]/5 to-[#00C4FF]/5 rounded-full"
                      variants={{
                        rest: { scale: 0, opacity: 0 },
                        hover: { scale: 1, opacity: 1 },
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
