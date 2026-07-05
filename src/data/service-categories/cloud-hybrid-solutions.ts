import type { ServiceCategoryPageData } from '@/types';

export const cloudHybridSolutionsData: ServiceCategoryPageData = {
  pageType: 'service-category',
  slug: 'cloud-hybrid-solutions',
  title: 'Cloud & Hybrid Solutions',
  description: 'Migrate, optimise and govern workloads across AWS, Azure, Huawei Cloud and Alibaba Cloud.',
  icon: 'cloud',
  color: '#8b5cf6',
  gradient: 'from-purple-500 to-pink-500',
  solutions: [
    {
      title: 'Cloud Strategy & Migration',
      description: 'NEX4 assesses workload readiness, builds a secure landing zone and executes phased migrations to AWS, Azure, Huawei or Alibaba Cloud — with FinOps governance from day one.',
      link: '/cloud-strategy-migration',
      icon: 'cloud-strategy-migration',
    },
    {
      title: 'Hybrid Cloud Architecture',
      description: 'NEX4 designs and deploys AWS Direct Connect and Azure ExpressRoute hybrid architectures — with unified routing, failover and 24/7 NOC visibility.',
      link: '/hybrid-cloud-architecture',
      icon: 'hybrid-cloud-architecture',
    },
    {
      title: 'Private Cloud',
      description: 'NEX4 builds VMware Cloud Foundation, Red Hat OpenShift and Huawei Cloud Stack private clouds — delivering self-service provisioning and automated lifecycle management.',
      link: '/private-cloud',
      icon: 'private-cloud',
    },
    {
      title: 'Data & AI Services',
      description: 'NEX4 builds modern data platforms and integrates Azure OpenAI and AWS Bedrock AI services into business workflows — with PDPA-compliant governance.',
      link: '/data-ai-services',
      icon: 'data-ai-services',
    },
  ],
  partners: {
    sectionTitle: 'Our Cloud Partners',
    logos: [
      { name: 'AWS', logo: '/images/partners/aws.jpeg' },
      { name: 'Microsoft Azure', logo: '/images/partners/microsoft-azure.png' },
      { name: 'Huawei', logo: '/images/partners/huawei-plain.png' },
      { name: 'Alibaba.com', logo: '/images/partners/alibaba.png' },
      { name: 'VMware by Broadcom', logo: '/images/partners/vmware-broadcom.png' },
      { name: 'Red Hat', logo: '/images/partners/red-hat.png' },
      { name: 'Microsoft', logo: '/images/partners/microsoft-plain.png' },
    ],
  },
};
