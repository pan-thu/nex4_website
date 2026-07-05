import type { ServicePageData } from '@/types';

export const ddosProtectionData: ServicePageData = {
  pageType: 'service',
  slug: 'ddos-protection',
  breadcrumb: 'News',
  hero: {
    title: 'DDOS PROTECTION',
    titleHighlight: 'DDOS',
    description: 'Distributed denial-of-service (DDoS) attacks can disrupt digital services and damage customer trust. NEX4 delivers layered DDoS protection to detect, absorb and mitigate volumetric, protocol and application-layer attacks — helping organisations maintain service availability and business continuity.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'DDoS assessment & protection architecture',
      'On-prem and cloud scrubbing integration',
      'Volumetric, protocol & L7 attack mitigation',
      'Traffic visibility, baselining & alerting',
      'Always-on / on-demand mitigation design',
      'Managed DDoS protection service',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Genie', logo: '/images/partners/genienetwork-e1580122040155.png' },
      { name: 'Arbor Networks', logo: '/images/partners/arbor-e1580119487847.png' },
      { name: 'Cloudflare', logo: '/images/partners/cloudflare.png' },
      { name: 'Akamai', logo: '/images/partners/akamai.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
