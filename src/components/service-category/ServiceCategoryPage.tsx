import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TbShieldLock,
  TbArrowRight,
  TbBuildingSkyscraper,
  TbServer,
  TbLock,
  TbNetwork,
  TbWifi,
  TbCloud,
  TbCloudComputing,
  TbDatabase,
  TbBrandOffice,
  TbVideo,
  TbApps,
} from 'react-icons/tb';
import { PageHeader } from '@/components/common/PageHeader';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { ContactSection } from '@/components/sections/ContactSection';
import type { ServiceCategoryPageData } from '@/types';

interface ServiceCategoryPageProps {
  data: ServiceCategoryPageData;
}

// Solution icons
const solutionIconMap: Record<string, React.ElementType> = {
  'enterprise-security': TbBuildingSkyscraper,
  'dc-security': TbServer,
  'itops-security': TbLock,
  'enterprise-network': TbNetwork,
  'dc-network': TbServer,
  'network-services': TbWifi,
  'private-cloud': TbCloud,
  'public-cloud': TbCloudComputing,
  'data-protection': TbDatabase,
  'microsoft-365': TbBrandOffice,
  'unified-communication': TbVideo,
  'business-apps': TbApps,
};

// Default brand colors
const defaultColor = '#00A9E0';
const defaultGradient = 'from-[#00A9E0] to-[#00C4FF]';

export const ServiceCategoryPage = ({ data }: ServiceCategoryPageProps) => {
  return (
    <>
      <PageHeader title="News" />

      {/* Intro Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className={`absolute top-10 right-20 w-96 h-96 bg-gradient-to-br ${defaultGradient} opacity-5 rounded-full blur-3xl`}
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className={`absolute bottom-10 left-20 w-72 h-72 bg-gradient-to-br ${defaultGradient} opacity-5 rounded-full blur-3xl`}
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `radial-gradient(${defaultColor} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a4f] mb-4">
              {data.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
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
              <p className="text-sm font-semibold tracking-widest uppercase text-[#00A9E0]">
                Our Solutions
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
              Explore Our{' '}
              <span className="relative">
                <span className={`bg-gradient-to-r ${defaultGradient} bg-clip-text text-transparent`}>
                  Solutions
                </span>
                <motion.span
                  className={`absolute -bottom-1 left-0 h-1 bg-gradient-to-r ${defaultGradient} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Comprehensive solutions designed to meet your specific business needs
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {data.solutions.map((solution, index) => {
              const SolutionIcon = solutionIconMap[solution.icon] || TbShieldLock;

              return (
                <motion.div
                  key={solution.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                >
                  <Link to={solution.link}>
                    <motion.div
                      className="group relative h-full"
                      whileHover="hover"
                      initial="rest"
                    >
                      {/* Background glow */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${defaultGradient} rounded-2xl opacity-0 blur-lg`}
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 0.3 },
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Card */}
                      <motion.div
                        className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full"
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -5 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Top gradient bar */}
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${defaultGradient}`} />

                        {/* Icon */}
                        <motion.div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${defaultGradient} flex items-center justify-center shadow-lg mb-4`}
                          variants={{
                            rest: { scale: 1, rotate: 0 },
                            hover: { scale: 1.1, rotate: 5 },
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <SolutionIcon className="text-white" size={28} />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-[#1e3a4f] mb-3 group-hover:text-[#00A9E0] transition-colors">
                          {solution.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                          {solution.description}
                        </p>

                        {/* Link */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#00A9E0]">
                          <span>Learn More</span>
                          <motion.div
                            variants={{
                              rest: { x: 0 },
                              hover: { x: 5 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <TbArrowRight size={18} />
                          </motion.div>
                        </div>

                        {/* Decorative corner */}
                        <motion.div
                          className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${defaultGradient} rounded-full opacity-5`}
                          variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.5 },
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partners */}
      <ServicePartnersSection partners={data.partners} />

      {/* Contact */}
      <ContactSection />
    </>
  );
};
