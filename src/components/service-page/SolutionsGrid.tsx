import { motion } from 'framer-motion';
import {
  TbShield,
  TbShieldLock,
  TbServerCog,
  TbDatabase,
  TbDatabaseCog,
  TbNetwork,
  TbRouter,
  TbWifi,
  TbCloud,
  TbCloudComputing,
  TbCloudLock,
  TbLock,
  TbFingerprint,
  TbAnalyze,
  TbChartBar,
  TbReportAnalytics,
  TbListCheck,
  TbClipboardCheck,
  TbFileAnalytics,
  TbVideo,
  TbUsers,
  TbDeviceDesktop,
  TbDeviceLaptop,
  TbCpu,
  TbBox,
  TbRefresh,
  TbArrowsTransferUp,
  TbWorldWww,
  TbApi,
  TbGitBranch,
  TbCode,
  TbSettings,
  TbSettingsAutomation,
  TbReceipt,
  TbBuildingSkyscraper,
  TbCloudDataConnection,
  TbTopologyRing,
} from 'react-icons/tb';
import type { Solutions } from '@/types';

interface Props {
  solutions: Solutions;
}

// Map icon strings to Tabler React icons
const iconMap: Record<string, React.ElementType> = {
  // Security
  'next-generation-firewall': TbShieldLock,
  'end-point-security': TbDeviceLaptop,
  'server-security': TbServerCog,
  'identity-authorization': TbFingerprint,
  'firewall-analyzer': TbAnalyze,
  'database-security': TbDatabaseCog,
  'api-web': TbApi,
  'flow-analysis': TbChartBar,
  'ddos': TbShield,
  'noc-soc-siem': TbReportAnalytics,
  'pci-dss': TbClipboardCheck,
  'policies-procedure': TbListCheck,

  // Network
  'wireless-wired': TbWifi,
  'sda': TbNetwork,
  'vpn': TbLock,
  'sd-wan': TbRouter,
  'sdn-sddc': TbCloudDataConnection,
  'aci-nsx': TbTopologyRing,
  'dns-dhcp': TbWorldWww,
  'adc': TbArrowsTransferUp,

  // Cloud & Infrastructure
  'iaas-paas-saas': TbCloud,
  'cloud-native': TbCloudComputing,
  'cicd-devops': TbGitBranch,
  'compute': TbCpu,
  'storage': TbDatabase,
  'automation': TbSettingsAutomation,
  'devops': TbCode,

  // Data Protection
  'high-availability': TbRefresh,
  'disaster-recovery': TbArrowsTransferUp,
  'business-continuity': TbBuildingSkyscraper,

  // AWS
  'assessment': TbFileAnalytics,
  'recommendations': TbClipboardCheck,
  'implementation': TbSettings,

  // Modern Workspace
  'ad-domain-os': TbDeviceDesktop,
  'aip-atp': TbCloudLock,
  'ems': TbDeviceDesktop,
  'teams': TbUsers,
  'video-conferencing': TbVideo,
  'billing': TbReceipt,

  // Business Apps
  'bi-ba-usecase': TbChartBar,

  // Default
  default: TbBox,
};

const getIcon = (iconName: string) => {
  return iconMap[iconName] || iconMap.default;
};

export const SolutionsGrid = ({ solutions }: Props) => {
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
            {solutions.sectionTitle}
          </h2>
        </motion.div>

        {/* Cards Grid - Centered dynamically */}
        <div className="flex flex-wrap justify-center gap-8">
          {solutions.items.map((solution, index) => {
            const Icon = getIcon(solution.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[380px]"
              >
                <motion.div
                  className="group relative h-full"
                  whileHover="hover"
                  initial="rest"
                >
                  {/* Animated border/glow effect */}
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-2xl opacity-0 blur-sm"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 0.6 },
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative h-full bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden"
                    variants={{
                      rest: { y: 0 },
                      hover: { y: -8 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top accent line that expands on hover */}
                    <motion.div
                      className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF]"
                      variants={{
                        rest: { width: '30%' },
                        hover: { width: '100%' },
                      }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#1e3a4f] to-[#2C5F7F] rounded-xl flex items-center justify-center mb-5 shadow-md"
                      variants={{
                        rest: { scale: 1, rotate: 0 },
                        hover: { scale: 1.1, rotate: 3 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1e3a4f] mb-3 group-hover:text-[#00A9E0] transition-colors duration-300">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {solution.description}
                    </p>

                    {/* Hover indicator arrow */}
                    <motion.div
                      className="mt-5 flex items-center text-[#00A9E0] font-semibold text-sm"
                      variants={{
                        rest: { opacity: 0, x: -10 },
                        hover: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn more</span>
                      <motion.span
                        className="ml-2"
                        variants={{
                          rest: { x: 0 },
                          hover: { x: 5 },
                        }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        →
                      </motion.span>
                    </motion.div>

                    {/* Background decoration on hover */}
                    <motion.div
                      className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#00A9E0]/10 to-[#00C4FF]/10 rounded-full"
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
