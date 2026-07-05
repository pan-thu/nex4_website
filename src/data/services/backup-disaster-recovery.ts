import type { ServicePageData } from '@/types';

export const backupDisasterRecoveryData: ServicePageData = {
  pageType: 'service',
  slug: 'backup-disaster-recovery',
  breadcrumb: 'News',
  hero: {
    title: 'BACKUP, DISASTER RECOVERY & CYBER RESILIENCE',
    titleHighlight: 'CYBER RESILIENCE',
    description: 'Protect business-critical data with modern backup and recovery solutions. Our solutions minimize downtime, accelerate recovery, and strengthen cyber resilience through immutable backups, disaster recovery planning, and recovery validation.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-General-Data-Protection-Regulation-GDPR-1024x681-1-e1580120217709.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Backup & Disaster Recovery architecture design',
      'RPO and RTO planning',
      'Immutable backup & ransomware protection',
      'Backup monitoring & reporting',
      'Disaster Recovery orchestration',
      'Restore validation & compliance reporting',
    ],
  },
  partners: {
    sectionTitle: 'Our Data Center Partners',
    logos: [
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'Dell Technologies', logo: '/images/partners/dell-technologies.png' },
      { name: 'Veritas', logo: '/images/partners/veritas.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
