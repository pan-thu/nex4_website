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
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'VMware', logo: '/images/partners/vmware.jpg' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
      { name: 'Dell EMC', logo: '/images/partners/dell.png' },
      { name: 'Oracle', logo: '/images/partners/oracle.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
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
