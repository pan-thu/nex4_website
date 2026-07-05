import type { ServicePageData } from '@/types';

export const wafData: ServicePageData = {
  pageType: 'service',
  slug: 'waf',
  breadcrumb: 'News',
  hero: {
    title: 'WEB APPLICATION FIREWALL (WAF)',
    titleHighlight: 'WAF',
    description: 'Web-facing applications are a primary target for attackers. NEX4 implements F5 BIG-IP and Imperva WAF to defend against OWASP Top 10, SQL injection, XSS and layer-7 DDoS — protecting revenue and customer data at the application layer.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'WAF deployment (F5 BIG-IP / Imperva)',
      'Application attack surface assessment',
      'OWASP Top 10 policy configuration',
      'SSL offload & certificate management',
      'DDoS layer-7 protection',
      'WAF managed service (signature updates)',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'F5', logo: '/images/partners/f5-plain.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
