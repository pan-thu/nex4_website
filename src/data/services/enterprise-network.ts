import type { ServicePageData } from '@/types';

export const enterpriseNetworkData: ServicePageData = {
  pageType: 'service',
  slug: 'enterprise-network',
  breadcrumb: 'News',
  hero: {
    title: 'ENTERPRISE LAN/WAN',
    titleHighlight: 'LAN/WAN',
    description: 'NEX4 designs and deploys campus, branch and DC LAN/WAN using Cisco and Huawei hardware — built for high availability, redundancy and end-to-end QoS across all tiers.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/enterprise-network-1024x683-1-e1580120290841.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Network assessment & HLD/LLD design',
      'Core/distribution/access switching',
      'WAN routing & dual-ISP redundancy',
      'Network refresh & migration',
      'NMS deployment (Cisco DNA/SolarWinds)',
      'As-built documentation & IP register',
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
