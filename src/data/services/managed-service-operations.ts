import type { ServicePageData } from '@/types';

export const managedServiceOperationsData: ServicePageData = {
  pageType: 'service',
  slug: 'managed-service-operations',
  breadcrumb: 'News',
  hero: {
    title: 'MANAGED SERVICE (DAY TO DAY OPERATIONS)',
    titleHighlight: 'OPERATIONS',
    description: 'Provide daily managed infrastructure operation support to ensure systems are stable, secure, and available. The service includes continuous monitoring of infrastructure health, availability, capacity, logs. Our team handles incident response, basic troubleshooting, fault isolation, vendor coordination, and SLA-based service restoration.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Close-up-of-hands-technician-working-on-laptop-in-data-center.Administrator-working-in-data-center-configure-.-1024x683-1-e1580120347880.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Day-to-day operation support: monitoring, incident handling, basic troubleshooting, performance checking',
      'Daily security event & SIEM review',
      'Monitor infrastructure health, availability, capacity, logs, alerts and KPIs',
      'Incident response, fault isolation, vendor coordination & SLA-based restoration',
      'Performance review, bottleneck identification & optimisation recommendations',
    ],
  },
  partners: {
    sectionTitle: 'Our Support Partners',
    logos: [],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
