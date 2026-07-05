import type { ServicePageData } from '@/types';

export const computeData: ServicePageData = {
  pageType: 'service',
  slug: 'compute',
  breadcrumb: 'News',
  hero: {
    title: 'COMPUTE',
    titleHighlight: 'COMPUTE',
    description: 'Deliver a high-performance compute platform designed for mission-critical workloads. We design and deploy enterprise server infrastructure across rack servers, blade servers, and HCI to ensure reliability, scalability, and operational efficiency while simplifying lifecycle management.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Shot-of-Corridor-in-Working-Data-Center-Full-of-Rack-Servers-and-Supercomputers-with-High-Security-Level-Icon-Visualization.-1024x576-1-e1580120277603.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Infrastructure assessment & server sizing',
      'Deployment of rack, blade, and HCI server platforms',
      'Hyperconverged infrastructure design and implementation',
      'Firmware & driver lifecycle management',
      'Server health checks and proactive monitoring',
    ],
  },
  partners: {
    sectionTitle: 'Our Data Center Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'Dell Technologies', logo: '/images/partners/dell-technologies.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
