import type { ServicePageData } from '@/types';

export const ngfwData: ServicePageData = {
  pageType: 'service',
  slug: 'ngfw',
  breadcrumb: 'News',
  hero: {
    title: 'NEXT-GEN FIREWALL (NGFW)',
    titleHighlight: 'NGFW',
    description: 'Organisations face increasingly sophisticated threats at the network perimeter. NEX4 deploys and manages NGFW solutions from Fortinet, Cisco, Palo Alto and Check Point — providing application visibility, SSL inspection, IPS and centralised policy management.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Firewall architecture & zone design',
      'NGFW deployment & policy migration',
      'Firewall rule review & cleanup',
      'Centralised management (FortiManager/FMC)',
      'SSL inspection & IPS tuning',
      'Firewall managed service & SLA',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Cisco ISE', logo: '/images/partners/cisco-ise.jpeg' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Palo Alto Networks', logo: '/images/partners/palo-alto-networks.png' },
      { name: 'Check Point', logo: '/images/partners/check_point-e1580119509168.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
