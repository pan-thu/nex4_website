import type { ServiceCategoryPageData } from '@/types';

export const systemCloudData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'system-cloud',
  title: 'System & Cloud',
  description: 'Transform your infrastructure with our cloud computing solutions. Whether you need private cloud for dedicated resources, public cloud for scalability, or hybrid solutions for flexibility, we provide comprehensive cloud services tailored to your business needs.',
  icon: 'cloud',
  color: '#8b5cf6',
  gradient: 'from-purple-500 to-pink-500',
  solutions: [
    {
      title: 'Private Cloud',
      description: 'A model of cloud computing over private IT infrastructure. Dedicated to the needs and goals of a single organization, best for businesses with dynamic or unpredictable computing needs.',
      link: '/private-cloud',
      icon: 'private-cloud',
    },
    {
      title: 'Public Cloud',
      description: 'Leverage the power of leading cloud providers including AWS, Azure, and Google Cloud for scalable, cost-effective infrastructure solutions.',
      link: '/public-clouds',
      icon: 'public-cloud',
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and backup solutions to ensure your critical business data is safe, recoverable, and compliant.',
      link: '/data-protection',
      icon: 'data-protection',
    },
  ],
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'VMware', logo: '/images/partners/No.4-e1580118255797.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix-e1580121998753.png' },
      { name: 'Dell EMC', logo: '/images/partners/No.6-e1580118282880.png' },
      { name: 'Microsoft', logo: '/images/partners/No.3-e1580118211447.png' },
      { name: 'Oracle', logo: '/images/partners/No.5-e1580118269989.png' },
    ],
  },
};
