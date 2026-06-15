import type { ServicePageData } from '@/types';

export const dcNetworkData: ServicePageData = {
  pageType: 'service',
  slug: 'dc-network',
  breadcrumb: 'News',
  hero: {
    title: 'DC NETWORK',
    titleHighlight: 'NETWORK',
    description: 'Facilities that hold an organization\'s networked computers, data storage and other resources and interconnects all of the data center resources together. The network topology that has been adapted for the data centers.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Shot-of-Corridor-in-Working-Data-Center-Full-of-Rack-Servers-and-Supercomputers-with-High-Security-Level-Icon-Visualization.-1024x576-1-e1580120277603.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'sdn-sddc',
        title: 'Software-Defined-Network, Software-Defined-Data-Center',
        description: 'Bridge the divide between operations and information with IoT and embedded technology.',
        image: '/images/services/Software-Defined-Network-Software-Defined-Data-Center-e1580120762655-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'aci-nsx',
        title: 'Application Centric Infrastructure, VMware NSX',
        description: 'Power and enable your clouds to protect applications across your data center, multi-cloud, bare metal, and container infrastructure.',
        image: '/images/services/Application-Centric-Infrastructure-VMware-NSX-e1580120754834-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_networking.png' },
      { name: 'Dell EMC', logo: '/images/partners/dell.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
      { name: 'Broadcom', logo: '/images/partners/broadcom.png' },
      { name: 'F5', logo: '/images/partners/f5.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
