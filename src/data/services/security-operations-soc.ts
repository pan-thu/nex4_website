import type { ServicePageData } from '@/types';

export const securityOperationsSocData: ServicePageData = {
  pageType: 'service',
  slug: 'security-operations-soc',
  breadcrumb: 'News',
  hero: {
    title: 'SECURITY OPERATIONS (SOC)',
    titleHighlight: 'SOC',
    description: 'Threats that evade prevention require rapid detection and response. NEX4 deploys SIEM platforms and delivers SOC-as-a-service with 24/7 monitoring, threat hunting, incident response and vulnerability management — reducing dwell time and business impact.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'SIEM deployment & use-case tuning',
      'SOC-as-a-service (MDR 24/7)',
      'Incident response retainer',
      'Vulnerability management programme',
      'Penetration test coordination',
      'Security awareness & phishing sim',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
      { name: 'Splunk', logo: '/images/partners/splunk-1-e1580121965592.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
