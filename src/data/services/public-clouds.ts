import type { ServicePageData } from '@/types';

export const publicCloudsData: ServicePageData = {
  pageType: 'service',
  slug: 'public-clouds',
  breadcrumb: 'News',
  hero: {
    title: 'PUBLIC CLOUDS',
    titleHighlight: 'CLOUDS',
    description: 'A type of computing in which a service provider makes resources available to the public via the network. The provisioning of storage and computational services to the public over the internet.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Businessman-using-mobile-smartphone-and-connecting-cloud-computing-service.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'iaas-paas-saas',
        title: 'IaaS, PaaS, SaaS',
        description: 'Focus on your business growth, not the hardware it runs on and get greater IT staff productivity across organization.',
        image: '/images/services/IaaS-PaaS-SaaS-e1580120621209-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'cloud-native',
        title: 'Cloud Native',
        description: 'Build and operate applications in a cloud-native fashion in order to market faster and respond sooner to customer demands.',
        image: '/images/services/Cloud-Native-e1580120615484-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'cicd-devops',
        title: 'CICD/ Development & Operations',
        description: 'Allow your team to dramatically speed up the process of testing new application code and readying it for production deployment.',
        image: '/images/services/CICD-Development-_-Operations-e1580120607993-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
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
  missions: [
    {
      number: '01',
      title: 'SECURITY',
    },
    {
      number: '02',
      title: 'SPEED',
    },
    {
      number: '03',
      title: 'RELIABILITY',
    },
    {
      number: '04',
      title: 'SATISFACTION',
    },
  ],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
