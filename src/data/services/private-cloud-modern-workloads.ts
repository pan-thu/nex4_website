import type { ServicePageData } from '@/types';

export const privateCloudModernWorkloadsData: ServicePageData = {
  pageType: 'service',
  slug: 'private-cloud-modern-workloads',
  breadcrumb: 'News',
  hero: {
    title: 'PRIVATE CLOUD & MODERN WORKLOAD PLATFORMS',
    titleHighlight: 'MODERN WORKLOADS',
    description: 'Deliver a unified infrastructure platform for VMs, containerized applications, and AI workloads. Enables organizations to build resilient, automated, and scalable private cloud environments.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/private-cloud-1024x678-1-e1580120232935.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Private Cloud Architecture & Deployment',
      'Virtual Machine infrastructure',
      'Kubernetes & Container Platforms',
      'AI-Ready Infrastructure & GPU Platforms',
      'Platform Lifecycle & Operations Management',
    ],
  },
  partners: {
    sectionTitle: 'Our Data Center Partners',
    logos: [
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'Red Hat', logo: '/images/partners/red-hat.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
