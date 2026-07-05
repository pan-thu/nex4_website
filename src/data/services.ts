import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description:
      'Design, deploy and manage enterprise-grade networks — from campus LAN to SD-WAN.',
    icon: 'Network',
    color: 'green',
    features: [
      'Enterprise LAN/WAN',
      'Wireless Networking',
      'SD-WAN',
      'DC Network/SDN',
    ],
    link: '/network-infrastructure',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description:
      'Protect users, data and infrastructure against evolving threats with layered security controls.',
    icon: 'Shield',
    color: 'red',
    features: [
      'Next-Gen Firewall (NGFW)',
      'Web Application Firewall (WAF)',
      'Zero Trust & Identity',
      'SOC & DDoS Protection',
    ],
    link: '/cybersecurity',
  },
  {
    id: 'data-center-modernization',
    title: 'Data Center Modernization',
    description:
      'Modernize your data center with secure, scalable, and resilient infrastructure — from core to edge.',
    icon: 'Server',
    color: 'blue',
    features: [
      'Compute',
      'Storage',
      'Private Cloud & Modern Workloads',
      'Backup & Disaster Recovery',
    ],
    link: '/data-center-modernization',
  },
  {
    id: 'cloud-hybrid-solutions',
    title: 'Cloud & Hybrid Solutions',
    description:
      'Migrate, optimise and govern workloads across AWS, Azure, Huawei Cloud and Alibaba Cloud.',
    icon: 'Cloud',
    color: 'blue',
    features: [
      'Cloud Strategy & Migration',
      'Hybrid Cloud Architecture',
      'Private Cloud',
      'Data & AI Services',
    ],
    link: '/cloud-hybrid-solutions',
  },
  {
    id: 'modern-workplace',
    title: 'Modern Workplace',
    description:
      'Empower employees with Microsoft 365, Power Platform and unified communications.',
    icon: 'Monitor',
    color: 'purple',
    features: [
      'Microsoft 365 & Mail Migration',
      'Power Platform Development',
      'Microsoft Security',
    ],
    link: '/modern-workplace',
  },
  {
    id: 'managed-services-support',
    title: 'Managed Services & Support',
    description:
      'Ongoing 24/7 operational support to keep your infrastructure running, secure and compliant.',
    icon: 'Headset',
    color: 'purple',
    features: [
      '24/7 NOC',
      'Managed Service Operations',
      'Annual Premium Support',
    ],
    link: '/managed-services-support',
  },
];
