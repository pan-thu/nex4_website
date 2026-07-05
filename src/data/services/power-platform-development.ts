import type { ServicePageData } from '@/types';

export const powerPlatformDevelopmentData: ServicePageData = {
  pageType: 'service',
  slug: 'power-platform-development',
  breadcrumb: 'News',
  hero: {
    title: 'POWER PLATFORM DEVELOPMENT',
    titleHighlight: 'POWER PLATFORM',
    description: 'Digitise business processes without heavy custom development. NEX4 builds Power Apps, Power Automate flows and Power BI dashboards that connect to your data — reducing manual work and accelerating decision-making across the organisation.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/business-application-1024x618-1-e1580119774455.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Power Automate: approval & workflow automation',
      'Canvas & model-driven Power Apps dev',
      'Power BI dashboard & semantic layer',
      'Dataverse data model design',
      'Power Platform CoE & governance setup',
      'Power Platform integration (SAP/ERP/API)',
    ],
  },
  partners: {
    sectionTitle: 'Our Workplace Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
