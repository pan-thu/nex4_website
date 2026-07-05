import type { ServicePageData } from '@/types';

export const dataAiServicesData: ServicePageData = {
  pageType: 'service',
  slug: 'data-ai-services',
  breadcrumb: 'News',
  hero: {
    title: 'DATA & AI SERVICES',
    titleHighlight: 'AI SERVICES',
    description: 'Data is only valuable when it can be accessed, analysed and acted upon. NEX4 builds modern data platforms and integrates Azure OpenAI and AWS Bedrock AI services into business workflows — with PDPA-compliant governance.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/well-architected-framework.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Data platform design (lake/warehouse)',
      'ETL pipeline (AWS Glue / Azure Data Factory)',
      'Power BI / QuickSight BI deployment',
      'Azure OpenAI / AWS Bedrock integration',
      'AI/ML solution integration into workflows',
      'Data governance & PDPA compliance',
    ],
  },
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'AWS', logo: '/images/partners/aws.jpeg' },
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
