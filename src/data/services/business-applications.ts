import type { ServicePageData } from '@/types';

export const businessApplicationsData: ServicePageData = {
  pageType: 'service',
  slug: 'business-applications',
  breadcrumb: 'News',
  hero: {
    title: 'BUSINESS APPLICATIONS',
    titleHighlight: 'APPLICATIONS',
    description: 'A collection of components that provides a business functionality that can use internally, externally or with other business applications. Software or set of computer programs used by business users to perform various business functions.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/business-application-1024x618-1-e1580119774455.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'bi-ba-usecase',
        title: 'BI & BA, Use Case',
        description: 'Analyze your data to empower people for making better decisions and transform the way they do business.',
        image: '/images/services/BI-_-BA-Use-Case-e1580120492851-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Workspace Partners',
    logos: [
      { name: 'Oracle', logo: '/images/partners/oracle.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
