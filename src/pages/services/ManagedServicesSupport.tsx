import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { managedServicesSupportData } from '@/data/service-categories/managed-services-support';

export const ManagedServicesSupport = () => {
  return <ServiceCategoryPage data={managedServicesSupportData} />;
};
