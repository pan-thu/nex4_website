import type { ServicePageData } from '@/types';

export const itopsSecurityData: ServicePageData = {
  pageType: 'service',
  slug: 'itops-security',
  breadcrumb: 'News',
  hero: {
    title: 'ITOPS & SECURITY',
    titleHighlight: 'SECURITY',
    description: 'Information technology operations can seem to cover anything IT-related. ITOps often refers to three areas: Network Infrastructure, Computer Operations and help desk, and Server and Device Management. Security Operations never-ending mission is to secure the business and maintain compliance.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'noc-soc-siem',
        title: 'Network Operations Center, Mini-Security Operations Center, Security Operations Center, SIEM',
        description: 'Deploy a next generation NOC/SOC which is fast, efficient and future-proofed against new technologies.',
        image: '/images/services/Network-Operations-Center-Mini-Security-Operations-Center-Security-Operations-Center-SIEM-e1580121656136-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'pci-dss',
        title: 'Payment Card Industry Data Security Standard',
        description: 'Keep your systems secure, and customers can trust you with their sensitive payment card.',
        image: '/images/services/Payment-Card-Industry-Data-Security-Standard-e1580121617698-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'policies-procedure',
        title: 'Policies & Procedure',
        description: 'Define policies which are drawn from the organization\'s existing cultural and structural framework to support the continuity of good productivity and innovation.',
        image: '/images/services/Policies-_-Procedure-e1580120812272-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_security.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Splunk', logo: '/images/partners/splunk-1-e1580121965592.png' },
      { name: 'Rapid7', logo: '/images/partners/rapid_1.png' },
      { name: 'Zabbix', logo: '/images/partners/zabbix.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
