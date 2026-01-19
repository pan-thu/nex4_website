import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { securityOperationData } from '@/data/service-categories/security-operation';

export const SecurityOperation = () => {
  return <ServiceCategoryPage data={securityOperationData} />;
};
