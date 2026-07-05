import type { ServicePageData } from '@/types';

export const microsoft365MailMigrationData: ServicePageData = {
  pageType: 'service',
  slug: 'microsoft-365-mail-migration',
  breadcrumb: 'News',
  hero: {
    title: 'MICROSOFT 365 & MAIL MIGRATION',
    titleHighlight: 'MICROSOFT 365',
    description: 'Microsoft 365 is the productivity backbone for modern organisations. NEX4 handles licensing, tenant setup, mail migration and security hardening — ensuring a smooth transition to Exchange Online, Teams and SharePoint with zero data loss.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/o-365-m-365-copy.png',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'M365 licensing advisory & tenant setup',
      'Exchange Online mail migration',
      'SharePoint Online intranet deployment',
      'Microsoft Teams setup & governance',
      'M365 security baseline hardening',
      'M365 managed service & licence lifecycle',
    ],
  },
  partners: {
    sectionTitle: 'Our Workplace Partners',
    logos: [
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
