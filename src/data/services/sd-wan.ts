import type { ServicePageData } from '@/types';

export const sdWanData: ServicePageData = {
  pageType: 'service',
  slug: 'sd-wan',
  breadcrumb: 'News',
  hero: {
    title: 'SD-WAN',
    titleHighlight: 'SD-WAN',
    description: 'Replace costly MPLS with intelligent SD-WAN. NEX4 handles everything from WAN assessment to phased branch rollout, QoS policy and SASE-ready security at the branch edge.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Communication-network-of-Germany.-1024x683-1-e1580119866303.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'WAN readiness assessment',
      'SD-WAN architecture design',
      'Phased branch site rollout',
      'App-aware QoS & path steering',
      'Secure SD-WAN / SASE readiness',
      'SD-WAN NOC managed operations',
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
