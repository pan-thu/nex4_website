import type { ServiceCategoryPageData } from '@/types';

export const networkInfrastructureData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'network-infrastructure',
  title: 'Network Infrastructure',
  description: "Enterprise's communication backbone that helps connect computers and related devices across departments and workgroup networks, facilitating insight and data accessibility. Improve internal and external enterprise data management with our comprehensive network solutions.",
  icon: 'network',
  color: '#3b82f6',
  gradient: 'from-blue-500 to-cyan-500',
  solutions: [
    {
      title: 'Enterprise Network',
      description: "Build a robust communication backbone connecting computers and devices across departments and workgroup networks, facilitating insight and data accessibility.",
      link: '/enterprise-network',
      icon: 'enterprise-network',
    },
    {
      title: 'DC Network',
      description: 'Design and implement high-performance data center networks that provide the foundation for your critical business applications.',
      link: '/dc-network',
      icon: 'dc-network',
    },
    {
      title: 'Network Services',
      description: 'Comprehensive network services including DNS, DHCP, IPAM, and network automation to streamline your infrastructure management.',
      link: '/network-services',
      icon: 'network-services',
    },
  ],
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco-e1580119524886.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox-e1580122007488.png' },
      { name: 'Arbor Networks', logo: '/images/partners/arbor-e1580119487847.png' },
      { name: 'Genie Networks', logo: '/images/partners/genienetwork-e1580122040155.png' },
      { name: 'F5', logo: '/images/partners/No.2-e1580118292784.png' },
      { name: 'Palo Alto Networks', logo: '/images/partners/No.7-e1580118303711.png' },
    ],
  },
};
