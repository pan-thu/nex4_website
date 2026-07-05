import type { ServicePageData } from '@/types';

export const cloudStrategyMigrationData: ServicePageData = {
  pageType: 'service',
  slug: 'cloud-strategy-migration',
  breadcrumb: 'News',
  hero: {
    title: 'CLOUD STRATEGY & MIGRATION',
    titleHighlight: 'MIGRATION',
    description: 'Moving to cloud requires more than lift-and-shift. NEX4 assesses workload readiness, builds a secure landing zone and executes phased migrations to AWS, Azure, Huawei or Alibaba Cloud — with FinOps governance from day one.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Businessman-using-mobile-smartphone-and-connecting-cloud-computing-service.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Cloud readiness & TCO assessment',
      'Workload classification (lift/replatform/refactor)',
      'Server & database migration execution',
      'Cloud landing zone design & deployment',
      'FinOps: right-sizing & reserved instances',
      'Cloud cost governance & tagging policy',
    ],
  },
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'AWS', logo: '/images/partners/aws.jpeg' },
      { name: 'Microsoft Azure', logo: '/images/partners/microsoft-azure.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'Alibaba.com', logo: '/images/partners/alibaba.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
