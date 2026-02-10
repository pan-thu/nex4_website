import type { HubPageData } from '@/types';

export const solutionsServicesData: HubPageData = {
  pageType: 'hub',
  slug: 'solutions-services',
  breadcrumb: 'Solutions & Services',
  hero: {
    title: 'OUR SOLUTIONS',
    titleHighlight: 'SOLUTIONS',
  },
  solutionCategories: [
    {
      category: 'SECURITY & OPERATION',
      items: [
        {
          title: 'ENTERPRISE SECURITY',
          link: '/enterprise-security',
        },
        {
          title: 'DC/ CORE SECURITY',
          link: '/dc-core-security',
        },
        {
          title: 'ITOPS & SECURITY',
          link: '/itops-security',
        },
      ],
    },
    {
      category: 'NETWORK INFRASTRUCTURE',
      items: [
        {
          title: 'ENTERPRISE NETWORK',
          link: '/enterprise-network',
        },
        {
          title: 'DC NETWORK',
          link: '/dc-network',
        },
        {
          title: 'NETWORK SERVICES',
          link: '/network-services',
        },
      ],
    },
    {
      category: 'SYSTEM & CLOUD',
      items: [
        {
          title: 'PRIVATE CLOUD',
          link: '/private-cloud',
        },
        {
          title: 'PUBLIC CLOUD',
          link: '/public-clouds',
        },
        {
          title: 'DATA PROTECTION',
          link: '/data-protection',
        },
      ],
    },
    {
      category: 'MODERN WORKSPACE',
      items: [
        {
          title: 'OFFICE 365/ MICROSOFT 365',
          link: '/o365-m365',
        },
        {
          title: 'UNIFIED COMMUNICTION/ VIDEO CONFERENCING',
          link: '/unified-com-video-conf',
        },
        {
          title: 'BUSINESS APPLICATIONS',
          link: '/business-applications',
        },
      ],
    },
  ],
  services: {
    sectionTitle: 'OUR SERVICES',
    items: [
      {
        icon: 'consultancy',
        title: 'CONSULTANCY',
        description: 'Solve problem, give advice and make suitable plan for each industries.',
        image: '/images/services/consultation-e1580119220877.png',
      },
      {
        icon: 'project-management',
        title: 'PROJECT MANAGEMENT',
        description: 'Plan resources to meet the project requirements and goals',
        image: '/images/services/project-management-e1580119210926.png',
      },
      {
        icon: 'professional-service',
        title: 'Professional Service Support',
        description: 'Provide profoundly professional service by the specialist.',
        image: '/images/services/network3-e1580119298429.png',
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
