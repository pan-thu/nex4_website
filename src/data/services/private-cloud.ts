import type { ServicePageData } from '@/types';

export const privateCloudData: ServicePageData = {
  pageType: 'service',
  slug: 'private-cloud',
  breadcrumb: 'News',
  hero: {
    title: 'PRIVATE CLOUD',
    titleHighlight: 'CLOUD',
    description: 'For organisations requiring cloud agility with on-premise control. NEX4 builds VMware Cloud Foundation, Red Hat OpenShift and Huawei Cloud Stack private clouds — delivering self-service provisioning and automated lifecycle management.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/private-cloud-1024x678-1-e1580120232935.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'VMware Cloud Foundation (VCF) deployment',
      'Red Hat OpenShift private cloud',
      'Huawei Cloud Stack on-premise',
      'Self-service provisioning portal',
      'Private cloud capacity management',
      'On-prem to private cloud migration',
    ],
  },
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'Red Hat', logo: '/images/partners/red-hat.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
