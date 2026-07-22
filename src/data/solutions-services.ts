import type { HubPageData } from '@/types';

export const solutionsServicesData: HubPageData = {
  pageType: 'hub',
  slug: 'solutions-services',
  breadcrumb: 'Solutions & Services',
  hero: {
    title: 'SOLUTIONS & SERVICES',
    titleHighlight: 'SERVICES',
  },
  solutionCategories: [
    {
      category: 'Network Infrastructure',
      items: [
        { title: 'Enterprise LAN/WAN', link: '/enterprise-network' },
        { title: 'Wireless Networking', link: '/wireless-networking' },
        { title: 'SD-WAN', link: '/sd-wan' },
        { title: 'DC Network/SDN', link: '/dc-network' },
        { title: 'Network Services (DDI/NAC)', link: '/network-services' },
      ],
    },
    {
      category: 'Cybersecurity',
      items: [
        { title: 'Next-Gen Firewall (NGFW)', link: '/ngfw' },
        { title: 'Web Application Firewall (WAF)', link: '/waf' },
        { title: 'Zero Trust & Identity Security', link: '/zero-trust-identity' },
        { title: 'Security Operations (SOC)', link: '/security-operations-soc' },
        { title: 'DDoS Protection', link: '/ddos-protection' },
      ],
    },
    {
      category: 'Data Center Modernization',
      items: [
        { title: 'Compute', link: '/compute' },
        { title: 'Storage', link: '/storage' },
        { title: 'Private Cloud & Modern Workload Platforms', link: '/private-cloud-modern-workloads' },
        { title: 'Backup, Disaster Recovery & Cyber Resilience', link: '/backup-disaster-recovery' },
      ],
    },
    {
      category: 'Cloud & Hybrid Solutions',
      items: [
        { title: 'Cloud Strategy & Migration', link: '/cloud-strategy-migration' },
        { title: 'Hybrid Cloud Architecture', link: '/hybrid-cloud-architecture' },
        { title: 'Private Cloud', link: '/private-cloud' },
        { title: 'Data & AI Services', link: '/data-ai-services' },
      ],
    },
    {
      category: 'Modern Workplace',
      items: [
        { title: 'Microsoft 365 & Mail Migration', link: '/microsoft-365-mail-migration' },
        { title: 'Power Platform Development', link: '/power-platform-development' },
        { title: 'Microsoft Security', link: '/microsoft-security' },
      ],
    },
    {
      category: 'Managed Services & Support',
      items: [
        { title: '24/7 NOC — Continuous Monitoring', link: '/noc-247' },
        { title: 'Managed Service (Day to Day Operations)', link: '/managed-service-operations' },
        { title: 'Annual Premium Support', link: '/annual-premium-support' },
      ],
    },
  ],
  services: {
    sectionTitle: 'OUR SERVICES',
    items: [
      {
        icon: 'consultancy',
        title: 'CONSULTANCY',
        description: 'Solve problem, give advice and make suitable plan for each industries.',
        image: '/images/services/consultation-e1580119220877.png',
      },
      {
        icon: 'project-management',
        title: 'PROJECT MANAGEMENT',
        description: 'Plan resources to meet the project requirements and goals',
        image: '/images/services/project-management-e1580119210926.png',
      },
      {
        icon: 'professional-service',
        title: 'Professional Service Support',
        description: 'Provide profoundly professional service by the specialist.',
        image: '/images/services/network3-e1580119298429.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Palo Alto Networks', logo: '/images/partners/palo-alto-networks.png' },
      { name: 'Check Point', logo: '/images/partners/check_point-e1580119509168.png' },
      { name: 'F5', logo: '/images/partners/f5-plain.png' },
      { name: 'CyberArk', logo: '/images/partners/cyberark.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
      { name: 'Splunk', logo: '/images/partners/splunk-1-e1580121965592.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox-e1580122007488.png' },
      { name: 'EfficientIP', logo: '/images/partners/efficient_ip.png' },
      { name: 'Dell Technologies', logo: '/images/partners/dell-technologies.png' },
      { name: 'Red Hat', logo: '/images/partners/red-hat.png' },
      { name: 'Nutanix', logo: '/images/partners/nutanix.png' },
      { name: 'Veritas', logo: '/images/partners/veritas.png' },
      { name: 'AWS', logo: '/images/partners/aws.png' },
      { name: 'Microsoft Azure', logo: '/images/partners/microsoft-azure.png' },
      { name: 'Alibaba.com', logo: '/images/partners/alibaba.png' },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
