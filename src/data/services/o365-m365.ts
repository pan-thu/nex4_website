import type { ServicePageData } from '@/types';

export const o365M365Data: ServicePageData = {
  pageType: 'service',
  slug: 'o365-m365',
  breadcrumb: 'News',
  hero: {
    title: 'OFFICE 365/ MICROSOFT 365',
    titleHighlight: 'MICROSOFT 365',
    description: 'O 365 is the traditional cloud productivity suite that comprises of common Microsoft Office applications like Outlook, Word, Excel and PowerPoint. M 365 was introduced in late 2017 as a new product bundle which combines the traditional Office. 365 features with Enterprise Mobility + Security (EMS) and Windows 10.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/o-365-m-365-copy.png',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'teams',
        title: 'Teams',
        description: 'Unleash the power of your team by integrating the people, content and tools to be more engaged and effective.',
        image: '/images/services/Teams-e1580120576685-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'aip-atp',
        title: 'Application Infrastructure Provider/ ATP',
        description: 'Safeguard your organization against malicious threats and save time with automated investigation and response.',
        image: '/images/services/Application-Infrastructure-Provider-e1580120569994-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'ad-domain-os',
        title: 'AD & Domain, Operating System',
        description: 'Provide a powerful, professional-looking platform through which businesses can build brand recognition and market their services.',
        image: '/images/services/AD-_-Domain-Operating-System-e1580120562133-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'ems',
        title: 'Enterprise Mobile Security',
        description: 'Stay secure and productive anywhere, on any device, with identity and intelligence-driven innovations.',
        image: '/images/services/Environmental-Management-Systems-e1580120554158-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Workspace Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
