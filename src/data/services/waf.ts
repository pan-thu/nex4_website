import type { ServicePageData } from '@/types';

export const wafData: ServicePageData = {
  pageType: 'service',
  slug: 'waf',
  breadcrumb: 'News',
  hero: {
    title: 'WEB APPLICATION FIREWALL (WAF)',
    titleHighlight: 'WAF',
    description: 'Web-facing applications are a primary target for cyberattacks. NEX4 delivers F5 BIG-IP, Fortinet FortiWeb, and Imperva Web Application Firewall solutions to protect business-critical applications, revenue, and customer data against OWASP Top 10 vulnerabilities, SQL injection, cross-site scripting (XSS), application-layer attacks, bots, and Layer-7 DDoS threats.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'WAF deployment using F5 BIG-IP, Fortinet FortiWeb, or Imperva',
      'Application security assessment and policy design',
      'OWASP Top 10 protection and policy configuration',
      'SQL injection and XSS prevention',
      'Bot management and application-layer DDoS protection',
      'SSL/TLS certificate management and traffic inspection',
      'Virtual patching for application vulnerabilities',
      'API security and application traffic monitoring',
      'Managed WAF services, policy tuning, and signature updates',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'F5', logo: '/images/partners/f5-plain.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Imperva', logo: '/images/partners/imperva.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
