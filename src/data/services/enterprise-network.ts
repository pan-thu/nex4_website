import type { ServicePageData } from '@/types';

export const enterpriseNetworkData: ServicePageData = {
  pageType: 'service',
  slug: 'enterprise-network',
  breadcrumb: 'News',
  hero: {
    title: 'ENTERPRISE NETWORK',
    titleHighlight: 'NETWORK',
    description: 'Enterprise\'s communication backbone that helps connect computers and related devices across departments and workgroup networks, facilitating insight and data accessibility. Improve internal and external enterprise data management.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/enterprise-network-1024x683-1-e1580120290841.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'wireless-wired',
        title: 'Wireless / Wired',
        description: 'Get the most advanced telecommunication solutions at the highest quality and the lowest cost.',
        image: '/images/services/Wireless-Wired-e1580120805549-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'sda',
        title: 'Software Defined Access',
        description: 'Make your network more secure, and your user experience more consistent for automating user policy and device provisioning.',
        image: '/images/services/Software-Defined-Access-e1580120797128-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'vpn',
        title: 'Virtual Private Network/ Internet/ Externet',
        description: 'Experience the best VPN to secure your online activities and an enormous network of servers.',
        image: '/images/services/83914450_1002399200144762_4656956876397740032_n-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'sd-wan',
        title: 'Software Defined WAN',
        description: 'Increase application performance, resulting in enhanced user experience, increased business productivity and reduced costs for IT.',
        image: '/images/services/Software-Defined-WAN-e1580120772765-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco_networking.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'F5', logo: '/images/partners/f5.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox.png' },
      { name: 'Efficient IP', logo: '/images/partners/efficient_ip.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
