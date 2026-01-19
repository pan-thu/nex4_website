import type { ServicePageData } from '@/types';

export const privateCloudData: ServicePageData = {
  pageType: 'service',
  slug: 'private-cloud',
  breadcrumb: 'News',
  hero: {
    title: 'PRIVATE CLOUD',
    titleHighlight: 'CLOUD',
    description: 'A model of cloud computing over private IT infrastructure. Dedicated to the needs and goals of a single organization. Best for businesses with dynamic or unpredictable computing needs.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/private-cloud-1024x678-1-e1580120232935.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'compute',
        title: 'Compute',
        description: 'Grow your business with our powerful compute providing the elasticity and cost savings of the public cloud.',
        image: '/images/services/Compute-e1580120663905-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'storage',
        title: 'Storage',
        description: 'Customize the cloud environment of the organization to meet specific needs of your business.',
        image: '/images/services/Storage-e1580120652859-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'automation',
        title: 'Automation',
        description: 'Make it easy and efficient for IT and developers to get what they need to build and deploy applications.',
        image: '/images/services/Automation-e1580120644397-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'billing',
        title: 'Billing',
        description: 'Simplify and streamline invoicing and billing across your private cloud.',
        image: '/images/services/Billing-e1580120636664-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'devops',
        title: 'Development & Operations',
        description: 'Run your cloud-based system without the need to take part or all of an application out of service.',
        image: '/images/services/Development-_-Operations-e1580120628817-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
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
