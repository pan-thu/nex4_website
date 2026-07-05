import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { cybersecurityData } from '@/data/service-categories/cybersecurity';

export const Cybersecurity = () => {
  return <ServiceCategoryPage data={cybersecurityData} />;
};
