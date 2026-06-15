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
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'AWS', logo: '/images/partners/aws_advanced.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
      { name: 'Oracle', logo: '/images/partners/oracle.png' },
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
