import type { ServiceCategoryPageData } from '@/types';

export const networkInfrastructureData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'network-infrastructure',
  title: 'Network Infrastructure',
  description: 'Design, deploy and manage enterprise-grade networks — from campus LAN to SD-WAN.',
  icon: 'network',
  color: '#3b82f6',
  gradient: 'from-blue-500 to-cyan-500',
  solutions: [
    {
      title: 'Enterprise LAN/WAN',
      description: 'NEX4 designs and deploys campus, branch and DC LAN/WAN using Cisco and Huawei hardware — built for high availability, redundancy and end-to-end QoS across all tiers.',
      link: '/enterprise-network',
      icon: 'enterprise-lan-wan',
    },
    {
      title: 'Wireless Networking',
      description: 'From RF site survey to Wi-Fi 6/6E deployment and ongoing NOC monitoring — NEX4 delivers seamless enterprise wireless across indoor, outdoor and high-density environments.',
      link: '/wireless-networking',
      icon: 'wireless-networking',
    },
    {
      title: 'SD-WAN',
      description: 'Replace costly MPLS with intelligent SD-WAN. NEX4 handles everything from WAN assessment to phased branch rollout, QoS policy and SASE-ready security at the branch edge.',
      link: '/sd-wan',
      icon: 'sd-wan',
    },
    {
      title: 'DC Network / SDN',
      description: 'NEX4 implements spine-leaf fabrics, Cisco ACI and VMware NSX micro-segmentation — automating policy enforcement and reducing lateral threat exposure in multi-tenant DC environments.',
      link: '/dc-network',
      icon: 'dc-network-sdn',
    },
    {
      title: 'Network Services (DDI/NAC)',
      description: 'Centralise DNS/DHCP/IPAM with Infoblox and enforce 802.1X NAC via Cisco ISE — ensuring only compliant, authenticated devices reach your corporate network.',
      link: '/network-services',
      icon: 'network-services-ddi-nac',
    },
  ],
  partners: {
    sectionTitle: 'Our Network Partners',
    logos: [
      { name: 'Cisco', logo: '/images/partners/cisco.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'EfficientIP', logo: '/images/partners/efficient_ip.png' },
      { name: 'Cisco ISE', logo: '/images/partners/cisco-ise.jpeg' },
      { name: 'Fortinet', logo: '/images/partners/fortinet.png' },
      { name: 'Infoblox', logo: '/images/partners/infoblox-e1580122007488.png' },
    ],
  },
};
