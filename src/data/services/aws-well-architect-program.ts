import type { ServicePageData } from '@/types';

export const awsWellArchitectProgramData: ServicePageData = {
  pageType: 'service',
  slug: 'aws-well-architect-program',
  breadcrumb: 'News',
  hero: {
    title: 'AWS WELL ARCHITECT PROGRAM',
    titleHighlight: 'ARCHITECT PROGRAM',
    description: 'Welcome to NEX4, an Advanced Tier Partner in the AWS Partner Network (APN). As an AWS Well-Architected Partner, we take pride in delivering top-notch cloud solutions to our clients. With a track record of supporting 100+ customers for both professional and managed services, we are ready to help your organization optimize its AWS infrastructure and achieve excellence in architecture.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/well-architected-framework.jpg',
  },
  solutions: {
    sectionTitle: 'OUR APPROACH',
    items: [
      {
        icon: 'assessment',
        title: 'Assessment',
        description: 'Our AWS-certified architects conduct a comprehensive assessment of your current AWS infrastructure, identifying areas for improvement. Focus on your business growth, not the hardware it runs on and get greater IT staff productivity across organization.',
        image: '/images/services/IaaS-PaaS-SaaS-e1580120621209-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chota8byrg.png',
      },
      {
        icon: 'recommendations',
        title: 'Recommendations',
        description: 'Based on the assessment, we provide detailed recommendations and a roadmap for enhancing your architecture.',
        image: '/images/services/Cloud-Native-e1580120615484-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chota8byrg.png',
      },
      {
        icon: 'implementation',
        title: 'Implementation',
        description: 'With your approval, we implement the recommended changes, ensuring smooth transitions and minimal disruptions.',
        image: '/images/services/CICD-Development-_-Operations-e1580120607993-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chota8byrg.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'AWS Advanced Tier Partner',
    logos: [],
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
