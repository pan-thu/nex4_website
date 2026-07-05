import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { cloudHybridSolutionsData } from '@/data/service-categories/cloud-hybrid-solutions';

export const CloudHybridSolutions = () => {
  return <ServiceCategoryPage data={cloudHybridSolutionsData} />;
};
