import { ServiceCategoryPage } from '@/components/service-category/ServiceCategoryPage';
import { modernWorkspaceData } from '@/data/service-categories/modern-workspace';

export const ModernWorkspace = () => {
  return <ServiceCategoryPage data={modernWorkspaceData} />;
};
