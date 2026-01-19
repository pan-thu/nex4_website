import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { systemCloudData } from '@/data/service-categories/system-cloud';

export const SystemCloud = () => {
  return <ServiceCategoryPage data={systemCloudData} />;
};
