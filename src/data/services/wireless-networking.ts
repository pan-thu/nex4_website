import type { ServicePageData } from '@/types';

export const wirelessNetworkingData: ServicePageData = {
  pageType: 'service',
  slug: 'wireless-networking',
  breadcrumb: 'News',
  hero: {
    title: 'WIRELESS NETWORKING',
    titleHighlight: 'WIRELESS',
    description: 'From RF site survey to Wi-Fi 6/6E deployment and ongoing NOC monitoring — NEX4 delivers seamless enterprise wireless across indoor, outdoor and high-density environments.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Communication-network-of-Germany.-1024x683-1-e1580119866303.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'RF site survey (passive & active)',
      'Wi-Fi 6/6E AP deployment',
      'Guest & IoT VLAN segmentation',
      'High-density & outdoor Wi-Fi',
      'Post-deployment validation (Ekahau)',
      'Wireless managed service 24/7',
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
