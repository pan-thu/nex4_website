import type { ServicePageData } from '@/types';

export const unifiedComVideoConfData: ServicePageData = {
  pageType: 'service',
  slug: 'unified-com-video-conf',
  breadcrumb: 'News',
  hero: {
    title: 'UNIFIED COMMUNICATION',
    titleHighlight: 'COMMUNICATION',
    description: 'Framework for integrating various asynchronous and real-time communication tools with the goal of enhancing business communication, collaboration and productivity. UC provides access to all the tools your employees need on the same platform, while simultaneously allowing them to interact with the office from any location.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Communication-network-of-Germany.-1024x683-1-e1580119866303.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'video-conferencing',
        title: 'Video Conferencing',
        description: 'Stay connect to your important meetings no matter where you are.',
        image: '/images/services/Video-Conferencing-e1580120545912-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Workspace Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_services.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
