import type { ServicePageData } from '@/types';

export const dcCoreSecurityData: ServicePageData = {
  pageType: 'service',
  slug: 'dc-core-security',
  breadcrumb: 'News',
  hero: {
    title: 'DC/ CORE SECURITY',
    titleHighlight: 'SECURITY',
    description: 'Protect data centers against unintentional, unforeseen and accidental events that may affect continuity of service or smooth operation. Implement solutions to protect data centers against intentional and malicious acts and events.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Close-up-of-hands-technician-working-on-laptop-in-data-center.Administrator-working-in-data-center-configure-.-1024x683-1-e1580120347880.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'api-web',
        title: 'Application Program Interface/ WEB',
        description: 'Simplify programming by abstracting the underlying implementation and only exposing objects or actions the developer needs.',
        image: '/images/services/Application-Program-InterfaceWEB-e1580121750655-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'database-security',
        title: 'Database Security',
        description: 'Protect and secure the database from illegitimate use and malicious threats and attacks.',
        image: '/images/services/Database-Security-e1580121677262-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'flow-analysis',
        title: 'Flow Analysis',
        description: 'Determine the existence and accuracy of data classification.',
        image: '/images/services/Flow-Analysis-e1580121670723-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'ddos',
        title: 'Distributed Denial of Service',
        description: 'Protect your network against the most sophisticated DDoS attacks.',
        image: '/images/services/Distributed-Denial-Of-Service-e1580121664787-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_security.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Palo Alto Networks', logo: '/images/partners/palo_alto.png' },
      { name: 'F5', logo: '/images/partners/f5.png' },
      { name: 'Imperva', logo: '/images/partners/imperva.png' },
      { name: 'Check Point', logo: '/images/partners/check_point.png' },
      { name: 'Arbor Networks', logo: '/images/partners/arbor-e1580119487847.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
