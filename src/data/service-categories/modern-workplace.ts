import type { ServiceCategoryPageData } from '@/types';

export const modernWorkplaceData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'modern-workplace',
  title: 'Modern Workplace',
  description: 'Empower employees with Microsoft 365, Power Platform and unified communications.',
  icon: 'device-desktop',
  color: '#10b981',
  gradient: 'from-green-500 to-teal-500',
  solutions: [
    {
      title: 'Microsoft 365 & Mail Migration',
      description: 'NEX4 handles licensing, tenant setup, mail migration and security hardening — ensuring a smooth transition to Exchange Online, Teams and SharePoint with zero data loss.',
      link: '/microsoft-365-mail-migration',
      icon: 'microsoft-365-mail-migration',
    },
    {
      title: 'Power Platform Development',
      description: 'NEX4 builds Power Apps, Power Automate flows and Power BI dashboards that connect to your data — reducing manual work and accelerating decision-making.',
      link: '/power-platform-development',
      icon: 'power-platform-development',
    },
    {
      title: 'Microsoft Security',
      description: 'NEX4 deploys and manages Defender for Endpoint, Purview, Entra ID and Intune — improving your Microsoft Secure Score and reducing the attack surface.',
      link: '/microsoft-security',
      icon: 'microsoft-security',
    },
  ],
  partners: {
    sectionTitle: 'Our Workplace Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
    ],
  },
};
