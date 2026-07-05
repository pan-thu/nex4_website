import type { ServicePageData } from '@/types';

export const networkServicesData: ServicePageData = {
  pageType: 'service',
  slug: 'network-services',
  breadcrumb: 'News',
  hero: {
    title: 'NETWORK SERVICES (DDI/NAC)',
    titleHighlight: 'DDI/NAC',
    description: 'Centralise DNS/DHCP/IPAM with Infoblox and enforce 802.1X NAC via Cisco ISE — ensuring only compliant, authenticated devices reach your corporate network.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/network-services-1024x474-1-e1580120245334.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'DNS/DHCP/IPAM centralisation (DDI)',
      'DNS security (RPZ + threat intel)',
      '802.1X NAC deployment (Cisco ISE)',
      'ISE integration: AD / MDM / PKI',
      'Guest & BYOD self-service portal',
      'Endpoint profiling & visibility',
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'EfficientIP', logo: '/images/partners/efficient_ip.png' },
      { name: 'Cisco ISE', logo: '/images/partners/cisco-ise.jpeg' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox-e1580122007488.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
