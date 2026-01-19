import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { networkInfrastructureData } from '@/data/service-categories/network-infrastructure';

export const NetworkInfrastructure = () => {
  return <ServiceCategoryPage data={networkInfrastructureData} />;
};
