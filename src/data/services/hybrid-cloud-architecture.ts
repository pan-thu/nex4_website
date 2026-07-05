import type { ServicePageData } from '@/types';

export const hybridCloudArchitectureData: ServicePageData = {
  pageType: 'service',
  slug: 'hybrid-cloud-architecture',
  breadcrumb: 'News',
  hero: {
    title: 'HYBRID CLOUD ARCHITECTURE',
    titleHighlight: 'HYBRID',
    description: 'Most enterprises need cloud connectivity that feels like an extension of their data centre. NEX4 designs and deploys AWS Direct Connect and Azure ExpressRoute hybrid architectures — with unified routing, failover and 24/7 NOC visibility.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Businessman-using-mobile-smartphone-and-connecting-cloud-computing-service.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Hybrid connectivity design (DC to cloud)',
      'AWS Direct Connect / Azure ExpressRoute',
      'Transit VPC/VNET & multi-cloud networking',
      'Cloud-based DR (Zerto / CloudEndure)',
      'VM mobility between on-prem & cloud',
      'Hybrid cloud NOC monitoring',
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
