import type { ServicePageData } from '@/types';

export const annualPremiumSupportData: ServicePageData = {
  pageType: 'service',
  slug: 'annual-premium-support',
  breadcrumb: 'News',
  hero: {
    title: 'ANNUAL PREMIUM SUPPORT',
    titleHighlight: 'PREMIUM SUPPORT',
    description: "Structured SLA-backed support gives your team a certified partner to call. NEX4 support contracts cover break-fix response, minor configuration changes, product advisory and annual health checks — with multi-vendor coverage under a single agreement.",
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-General-Data-Protection-Regulation-GDPR-1024x681-1-e1580120217709.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'SLA-backed break-fix support',
      'Minor configuration changes under SLA',
      'Product knowledge & advisory access',
      'Annual infrastructure health check',
      'Vendor TAC case management',
      'Compliance & ISO 27001 audit support',
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
