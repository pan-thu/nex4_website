import type { ServicePageData } from '@/types';

export const microsoftSecurityData: ServicePageData = {
  pageType: 'service',
  slug: 'microsoft-security',
  breadcrumb: 'News',
  hero: {
    title: 'MICROSOFT SECURITY',
    titleHighlight: 'SECURITY',
    description: "Microsoft's security stack covers endpoint, identity, data and cloud. NEX4 deploys and manages Defender for Endpoint, Purview, Entra ID and Intune — improving your Microsoft Secure Score and reducing the attack surface across all devices and identities.",
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-internet-security-concept.-cyber-security.-1024x683-1-e1580120323813.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Microsoft Defender for Endpoint (MDE)',
      'Purview: DLP, sensitivity labels & eDiscovery',
      'Entra ID: conditional access & PIM',
      'Intune MDM: Windows/iOS/Android',
      'Microsoft Secure Score improvement plan',
      'Microsoft security managed service',
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
