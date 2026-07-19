import type { ServicePageData } from '@/types';

export const zeroTrustIdentityData: ServicePageData = {
  pageType: 'service',
  slug: 'zero-trust-identity',
  breadcrumb: 'News',
  hero: {
    title: 'ZERO TRUST & IDENTITY SECURITY',
    titleHighlight: 'ZERO TRUST',
    description: 'The perimeter is gone. NEX4 helps organisations adopt a zero trust model — verifying every user, device and connection before granting access. We implement MFA, conditional access, PAM, EDR, XDR and ZTNA to eliminate implicit trust.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/enterprise-security-1024x683-1-e1580120361975.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Zero trust architecture design',
      'IAM, MFA, SSO, conditional access',
      'Privileged access management (PAM)',
      'Endpoint detection & response (EDR)',
      'Zero trust network access (ZTNA)',
      'Identity posture assessment',
    ],
  },
  partners: {
    sectionTitle: 'Our Security Partners',
    logos: [
      { name: 'Cisco ISE', logo: '/images/partners/cisco-ise.jpeg' },
      { name: 'CyberArk', logo: '/images/partners/cyberark.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Trend Micro', logo: '/images/partners/trend_micro.png' },
      { name: 'Check Point Harmony', logo: '/images/partners/check_point.png' },
      { name: 'CrowdStrike', logo: '/images/partners/crowdstrike.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
