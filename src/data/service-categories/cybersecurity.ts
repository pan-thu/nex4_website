import type { ServiceCategoryPageData } from '@/types';

export const cybersecurityData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'cybersecurity',
  title: 'Cybersecurity',
  description: 'Protect users, data and infrastructure against evolving threats with layered security controls.',
  icon: 'shield-lock',
  color: '#ef4444',
  gradient: 'from-red-500 to-orange-500',
  solutions: [
    {
      title: 'Next-Gen Firewall (NGFW)',
      description: 'NEX4 deploys and manages NGFW solutions from Fortinet, Cisco, Palo Alto and Check Point — providing application visibility, SSL inspection, IPS and centralised policy management.',
      link: '/ngfw',
      icon: 'ngfw',
    },
    {
      title: 'Web Application Firewall (WAF)',
      description: 'NEX4 implements F5 BIG-IP and Imperva WAF to defend against OWASP Top 10, SQL injection, XSS and layer-7 DDoS — protecting revenue and customer data at the application layer.',
      link: '/waf',
      icon: 'waf',
    },
    {
      title: 'Zero Trust & Identity Security',
      description: 'NEX4 helps organisations adopt a zero trust model — verifying every user, device and connection before granting access, with MFA, conditional access, PAM, EDR and ZTNA.',
      link: '/zero-trust-identity',
      icon: 'zero-trust-identity',
    },
    {
      title: 'Security Operations (SOC)',
      description: 'NEX4 deploys SIEM platforms and delivers SOC-as-a-service with 24/7 monitoring, threat hunting, incident response and vulnerability management — reducing dwell time and business impact.',
      link: '/security-operations-soc',
      icon: 'security-operations-soc',
    },
    {
      title: 'DDoS Protection',
      description: 'NEX4 delivers layered DDoS protection to detect, absorb and mitigate volumetric, protocol and application-layer attacks — maintaining service availability and business continuity.',
      link: '/ddos-protection',
      icon: 'ddos-protection',
    },
  ],
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Cisco ISE', logo: '/images/partners/cisco-ise.jpeg' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Palo Alto Networks', logo: '/images/partners/palo-alto-networks.png' },
      { name: 'Check Point', logo: '/images/partners/check_point-e1580119509168.png' },
      { name: 'F5', logo: '/images/partners/f5-plain.png' },
      { name: 'CyberArk', logo: '/images/partners/cyberark.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
      { name: 'Splunk', logo: '/images/partners/splunk-1-e1580121965592.png' },
      { name: 'Genie', logo: '/images/partners/genienetwork-e1580122040155.png' },
      { name: 'Arbor Networks', logo: '/images/partners/arbor-e1580119487847.png' },
      { name: 'Cloudflare', logo: '/images/partners/cloudflare.png' },
      { name: 'Akamai', logo: '/images/partners/akamai.png' },
    ],
  },
};
