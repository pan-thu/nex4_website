import type { ServiceCategoryPageData } from '@/types';

export const securityOperationData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'security-operation',
  title: 'Security & Operation',
  description: 'Comprehensive security solutions to protect your organization from modern threats. Our security and operation services encompass Information Security, Business Security, Physical Security, and Operational Risk Management to ensure your enterprise stays safe and compliant.',
  icon: 'shield',
  color: '#ef4444',
  gradient: 'from-red-500 to-orange-500',
  solutions: [
    {
      title: 'Enterprise Security',
      description: 'Organization must now focus much more on information and data understanding where it is and how it is managed both within and outside the enterprise boundary.',
      link: '/enterprise-security',
      icon: 'enterprise-security',
    },
    {
      title: 'DC/ Core Security',
      description: 'Protect your data center with advanced security solutions designed for critical infrastructure and core business operations.',
      link: '/dc-core-security',
      icon: 'dc-security',
    },
    {
      title: 'ITOps & Security',
      description: 'Integrate security into your IT operations with comprehensive monitoring, management, and threat detection capabilities.',
      link: '/itops-security',
      icon: 'itops-security',
    },
  ],
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Palo Alto Networks', logo: '/images/partners/No.7-e1580118303711.png' },
      { name: 'Check Point', logo: '/images/partners/check_point-e1580119509168.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet-e1580122030279.png' },
      { name: 'Trend Micro', logo: '/images/partners/trend-e1580121953708.png' },
      { name: 'Rapid7', logo: '/images/partners/rapid-e1580121973852.png' },
      { name: 'Splunk', logo: '/images/partners/splunk-1-e1580121965592.png' },
      { name: 'Imperva', logo: '/images/partners/imperva-e1580122020987.png' },
    ],
  },
};
