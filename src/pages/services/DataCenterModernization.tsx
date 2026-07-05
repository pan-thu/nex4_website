import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { dataCenterModernizationData } from '@/data/service-categories/data-center-modernization';

export const DataCenterModernization = () => {
  return <ServiceCategoryPage data={dataCenterModernizationData} />;
};
