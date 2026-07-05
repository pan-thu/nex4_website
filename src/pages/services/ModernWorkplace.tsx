import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { modernWorkplaceData } from '@/data/service-categories/modern-workplace';

export const ModernWorkplace = () => {
  return <ServiceCategoryPage data={modernWorkplaceData} />;
};
