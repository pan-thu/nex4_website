import type { ServiceCategoryPageData } from '@/types';

export const dataCenterModernizationData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'data-center-modernization',
  title: 'Data Center Modernization',
  description: 'Modernize your data center with secure, scalable, and resilient infrastructure — from core to edge.',
  icon: 'server',
  color: '#f59e0b',
  gradient: 'from-amber-500 to-orange-500',
  solutions: [
    {
      title: 'Compute',
      description: 'We design and deploy enterprise server infrastructure across rack servers, blade servers, and HCI to ensure reliability, scalability, and operational efficiency.',
      link: '/compute',
      icon: 'compute',
    },
    {
      title: 'Storage',
      description: 'Our storage solutions deliver high availability, optimized performance, and simplified management for mission-critical applications and enterprise workloads.',
      link: '/storage',
      icon: 'storage',
    },
    {
      title: 'Private Cloud & Modern Workload Platforms',
      description: 'A unified infrastructure platform for VMs, containerized applications, and AI workloads — enabling resilient, automated, and scalable private cloud environments.',
      link: '/private-cloud-modern-workloads',
      icon: 'private-cloud-modern-workloads',
    },
    {
      title: 'Backup, Disaster Recovery & Cyber Resilience',
      description: 'Minimize downtime, accelerate recovery, and strengthen cyber resilience through immutable backups, disaster recovery planning, and recovery validation.',
      link: '/backup-disaster-recovery',
      icon: 'backup-disaster-recovery',
    },
  ],
  partners: {
    sectionTitle: 'Our Data Center Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'Dell Technologies', logo: '/images/partners/dell-technologies.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'Synology', logo: '/images/partners/synology.jpeg' },
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'Red Hat', logo: '/images/partners/red-hat.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
      { name: 'Veritas', logo: '/images/partners/veritas.png' },
    ],
  },
};
