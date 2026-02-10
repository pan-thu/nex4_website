import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TbShieldLock,
  TbNetwork,
  TbCloud,
  TbDeviceDesktop,
  TbArrowRight,
} from 'react-icons/tb';
import type { SolutionCategory } from '@/types';

interface SolutionCategoriesSectionProps {
  categories: SolutionCategory[];
}

// Category icons, colors, and links
const categoryConfig: Record<string, { icon: React.ElementType; color: string; gradient: string; link: string }> = {
  'SECURITY & OPERATION': {
    icon: TbShieldLock,
    color: '#ef4444',
    gradient: 'from-red-500 to-orange-500',
    link: '/security-operation',
  },
  'NETWORK INFRASTRUCTURE': {
    icon: TbNetwork,
    color: '#3b82f6',
    gradient: 'from-blue-500 to-cyan-500',
    link: '/network-infrastructure',
  },
  'SYSTEM & CLOUD': {
    icon: TbCloud,
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-pink-500',
    link: '/system-cloud',
  },
  'MODERN WORKSPACE': {
    icon: TbDeviceDesktop,
    color: '#10b981',
    gradient: 'from-green-500 to-teal-500',
    link: '/modern-workspace',
  },
};

export const SolutionCategoriesSection = ({ categories }: SolutionCategoriesSectionProps) => {
  return (
    <section className="py-20 bg-white">
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
            Our Solutions
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => {
            const config = categoryConfig[category.category] || {
              icon: TbShieldLock,
              color: '#00A9E0',
              gradient: 'from-cyan-500 to-blue-500',
            };
            const Icon = config.icon;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative h-full"
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Background glow */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${config.gradient} rounded-2xl opacity-0 blur-lg`}
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.3 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden h-full"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -5 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top gradient bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`} />

                    {/* Header */}
                    <Link
                      to={config.link}
                      className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100 group/header"
                    >
                      <motion.div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}
                        variants={{
                          rest: { scale: 1, rotate: 0 },
                          hover: { scale: 1.1, rotate: 5 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                      <div className="flex items-center gap-2 flex-1">
                        <h3 className="text-xl font-bold text-[#1e3a4f] group-hover/header:text-[#00A9E0] transition-colors">
                          {category.category}
                        </h3>
                        <TbArrowRight className="text-gray-300 group-hover/header:text-[#00A9E0] group-hover/header:translate-x-1 transition-all" size={20} />
                      </div>
                    </Link>

                    {/* Links */}
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={item.link}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        >
                          <Link
                            to={item.link}
                            className="group/link flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-all duration-300"
                          >
                            <span className="text-gray-700 group-hover/link:text-[#00A9E0] font-medium transition-colors">
                              {item.title}
                            </span>
                            <motion.div
                              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 group-hover/link:bg-[#00A9E0] transition-colors"
                              whileHover={{ x: 3 }}
                            >
                              <TbArrowRight className="text-gray-400 group-hover/link:text-white transition-colors" size={18} />
                            </motion.div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative corner */}
                    <motion.div
                      className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${config.gradient} rounded-full opacity-5`}
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
