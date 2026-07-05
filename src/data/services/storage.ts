import type { ServicePageData } from '@/types';

export const storageData: ServicePageData = {
  pageType: 'service',
  slug: 'storage',
  breadcrumb: 'News',
  hero: {
    title: 'STORAGE',
    titleHighlight: 'STORAGE',
    description: 'Protect and optimize your critical business data with scalable storage infrastructure. Our storage solutions deliver high availability, optimized performance, and simplified management for mission-critical applications and enterprise workloads.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Close-up-of-hands-technician-working-on-laptop-in-data-center.Administrator-working-in-data-center-configure-.-1024x683-1-e1580120347880.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Enterprise storage architecture & design',
      'SAN (FC/iSCSI) and NAS implementation',
      'Storage performance optimization & capacity planning',
      'LUN provisioning & storage virtualization',
      'Online storage migration with minimal downtime',
      'Storage health checks & proactive monitoring',
    ],
  },
  partners: {
    sectionTitle: 'Our Data Center Partners',
    logos: [
      { name: 'Dell Technologies', logo: '/images/partners/dell-technologies.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'Synology', logo: '/images/partners/synology.jpeg' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
