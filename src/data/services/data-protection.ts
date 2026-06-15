import type { ServicePageData } from '@/types';

export const dataProtectionData: ServicePageData = {
  pageType: 'service',
  slug: 'data-protection',
  breadcrumb: 'News',
  hero: {
    title: 'DATA PROTECTION',
    titleHighlight: 'PROTECTION',
    description: 'The process of safeguarding important information from corruption, compromise or loss. The importance of data protection increases as the amount of data created and stored continues to grow at unprecedented rates. Personal data is processed according to applicable lawful bases.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/data-protection-hero.png',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'high-availability',
        title: 'High Avail',
        description: 'Get high availability capabilities that seamlessly work together to help reduce both planned and unplanned downtime.',
        image: '/images/services/high-avail-icon.png',
      },
      {
        icon: 'disaster-recovery',
        title: 'Disaster Recovery',
        description: 'Effectively recover from natural or human-induced disasters, and ensure business continuity.',
        image: '/images/services/disaster-recovery-icon.png',
      },
      {
        icon: 'business-continuity',
        title: 'Business Continuity Planning',
        description: 'Ensure that personnel and assets are protected and are able to function quickly in the event of a disaster.',
        image: '/images/services/business-continuity-icon.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'Dell EMC', logo: '/images/partners/dell.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
      { name: 'Oracle', logo: '/images/partners/oracle.png' },
      { name: 'VMware', logo: '/images/partners/vmware.jpg' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
