import type { ServiceCategoryPageData } from '@/types';

export const modernWorkspaceData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'modern-workspace',
  title: 'Modern Workspace',
  description: 'Empower your workforce with modern productivity and collaboration tools. From Microsoft 365 to unified communications and business applications, we help you create a seamless digital workplace that enables productivity from anywhere.',
  icon: 'desktop',
  color: '#10b981',
  gradient: 'from-green-500 to-teal-500',
  solutions: [
    {
      title: 'Office 365 / Microsoft 365',
      description: 'O365 is the traditional cloud productivity suite with common Microsoft Office applications. M365 combines Office 365 features with Enterprise Mobility + Security (EMS) and Windows 10.',
      link: '/o365-m365',
      icon: 'microsoft-365',
    },
    {
      title: 'Unified Communication / Video Conferencing',
      description: 'Connect your teams with integrated voice, video, messaging, and collaboration solutions that work seamlessly across devices and locations.',
      link: '/unified-com-video-conf',
      icon: 'unified-communication',
    },
    {
      title: 'Business Applications',
      description: 'Custom and enterprise business applications designed to streamline your operations, improve efficiency, and drive digital transformation.',
      link: '/business-applications',
      icon: 'business-apps',
    },
  ],
  partners: {
    sectionTitle: 'Our Workspace Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/No.3-e1580118211447.png' },
      { name: 'Cisco', logo: '/images/partners/cisco-e1580119524886.png' },
      { name: 'VMware', logo: '/images/partners/No.4-e1580118255797.png' },
      { name: 'Zabbix', logo: '/images/partners/zabbix-e1580121944878.png' },
    ],
  },
};
