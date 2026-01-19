import type { Service } from '@/types';

export const servicesData: Service[] = [
  {
    id: 'security-operation',
    title: 'Security & Operation',
    description:
      'Advanced security solutions and operational excellence to protect your digital assets with 24/7 monitoring.',
    icon: 'Shield',
    color: 'red',
    features: [
      'Network Security',
      'Endpoint Protection',
      'Security Operations Center',
      'Incident Response',
    ],
    link: '/security-operation',
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    description:
      'Robust network infrastructure solutions designed to ensure reliable connectivity and seamless operations.',
    icon: 'Network',
    color: 'green',
    features: [
      'Network Design',
      'Implementation',
      'Management',
      'Optimization',
    ],
    link: '/network-infrastructure',
  },
  {
    id: 'system-cloud',
    title: 'System & Cloud',
    description:
      'Comprehensive system integration and cloud services for modern enterprises seeking digital transformation.',
    icon: 'Cloud',
    color: 'blue',
    features: [
      'Cloud Migration',
      'Hybrid Cloud Solutions',
      'System Integration',
      'Infrastructure as Code',
    ],
    link: '/system-cloud',
  },
  {
    id: 'modern-workspace',
    title: 'Modern Workspace',
    description:
      'Innovative workspace solutions that empower teams to collaborate efficiently in today\'s hybrid work environment.',
    icon: 'Monitor',
    color: 'purple',
    features: [
      'Collaboration Tools',
      'Remote Work Solutions',
      'Device Management',
      'User Experience',
    ],
    link: '/modern-workspace',
  },
];
