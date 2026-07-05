import type { ServiceCategoryPageData } from '@/types';

export const managedServicesSupportData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'managed-services-support',
  title: 'Managed Services & Support',
  description: 'Ongoing 24/7 operational support to keep your infrastructure running, secure and compliant.',
  icon: 'headset',
  color: '#0ea5e9',
  gradient: 'from-sky-500 to-blue-500',
  solutions: [
    {
      title: '24/7 NOC — Continuous Monitoring',
      description: "NEX4's NOC monitors all network, server, storage and cloud endpoints 24/7 — classifying alerts by severity, resolving L1 faults immediately and escalating incidents within SLA windows.",
      link: '/noc-247',
      icon: 'noc-247',
    },
    {
      title: 'Managed Service (Day to Day Operations)',
      description: 'Daily managed infrastructure operation support covering monitoring, incident response, troubleshooting, fault isolation, vendor coordination and SLA-based service restoration.',
      link: '/managed-service-operations',
      icon: 'managed-service-operations',
    },
    {
      title: 'Annual Premium Support',
      description: 'Structured SLA-backed support contracts covering break-fix response, minor configuration changes, product advisory and annual health checks under a single agreement.',
      link: '/annual-premium-support',
      icon: 'annual-premium-support',
    },
  ],
  partners: {
    sectionTitle: 'Our Support Partners',
    logos: [],
  },
};
