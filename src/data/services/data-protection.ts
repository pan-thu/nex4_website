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
    sectionTitle: 'Our partners',
    logos: [
      {
        name: 'Palo Alto Networks',
        logo: '/images/partners/No.7-e1580118303711.png',
      },
      {
        name: 'F5',
        logo: '/images/partners/No.2-e1580118292784.png',
      },
      {
        name: 'Microsoft',
        logo: '/images/partners/No.3-e1580118211447.png',
      },
      {
        name: 'Arbor Networks',
        logo: '/images/partners/arbor-e1580119487847.png',
      },
      {
        name: 'Check Point',
        logo: '/images/partners/check_point-e1580119509168.png',
      },
      {
        name: 'Cisco',
        logo: '/images/partners/cisco-e1580119524886.png',
      },
      {
        name: 'Fortinet',
        logo: '/images/partners/fortinet-e1580122030279.png',
      },
      {
        name: 'VMware',
        logo: '/images/partners/No.4-e1580118255797.png',
      },
      {
        name: 'Infoblox',
        logo: '/images/partners/infoblox-e1580122007488.png',
      },
      {
        name: 'Genie Networks',
        logo: '/images/partners/genienetwork-e1580122040155.png',
      },
      {
        name: 'Dell EMC',
        logo: '/images/partners/No.6-e1580118282880.png',
      },
      {
        name: 'Imperva',
        logo: '/images/partners/imperva-e1580122020987.png',
      },
      {
        name: 'Nutanix',
        logo: '/images/partners/nutanix-e1580121998753.png',
      },
      {
        name: 'Rapid7',
        logo: '/images/partners/rapid-e1580121973852.png',
      },
      {
        name: 'Splunk',
        logo: '/images/partners/splunk-1-e1580121965592.png',
      },
      {
        name: 'Trend Micro',
        logo: '/images/partners/trend-e1580121953708.png',
      },
      {
        name: 'Oracle',
        logo: '/images/partners/No.5-e1580118269989.png',
      },
      {
        name: 'Zabbix',
        logo: '/images/partners/zabbix-e1580121944878.png',
      },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
