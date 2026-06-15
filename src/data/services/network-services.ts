import type { ServicePageData } from '@/types';

export const networkServicesData: ServicePageData = {
  pageType: 'service',
  slug: 'network-services',
  breadcrumb: 'News',
  hero: {
    title: 'NETWORK SERVICES',
    titleHighlight: 'SERVICES',
    description: 'Monitor for growth and fluctuations of systems and assist when upgrades and updates are required. Provide a full time or part time services with utilities to monitor data storage, manipulation, presentation, communication or other capabilities.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/network-services-1024x474-1-e1580120245334.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'dns-dhcp',
        title: 'Domain Name System/ Dynamic Host Configuration Protocol',
        description: 'Reduce manual workload and simplify the life of the IT admin.',
        image: '/images/services/Domain-Name-System-Dynamic-Host-Configuration-Protocol-e1580120683432-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'adc',
        title: 'Application Delivery Control (LTM/ GTM)',
        description: 'Help sites direct user traffic to remove the excess load from servers.',
        image: '/images/services/Application-Delivery-Control--e1580120669476-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_networking.png' },
      { name: 'F5', logo: '/images/partners/f5.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox.png' },
      { name: 'Efficient IP', logo: '/images/partners/efficient_ip.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
