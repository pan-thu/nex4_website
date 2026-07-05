import type { ServicePageData } from '@/types';

export const dcNetworkData: ServicePageData = {
  pageType: 'service',
  slug: 'dc-network',
  breadcrumb: 'News',
  hero: {
    title: 'DC NETWORK / SDN',
    titleHighlight: 'SDN',
    description: 'NEX4 implements spine-leaf fabrics, Cisco ACI and VMware NSX micro-segmentation — automating policy enforcement and reducing lateral threat exposure in multi-tenant DC environments.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Shot-of-Corridor-in-Working-Data-Center-Full-of-Rack-Servers-and-Supercomputers-with-High-Security-Level-Icon-Visualization.-1024x576-1-e1580120277603.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Spine-leaf fabric design (VXLAN/EVPN)',
      'Cisco ACI implementation',
      'Network micro-segmentation (NSX)',
      'Ansible/IaC network automation',
      'DC interconnect (DCI/OTV)',
      'DC fabric managed service',
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
