import { SolutionCategoriesSection } from '@/components/hub/SolutionCategoriesSection';
import { ServicesSection } from '@/components/hub/ServicesSection';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { solutionsServicesData } from '@/data/solutions-services';
import { PageHeader } from '@/components/common/PageHeader';

export const SolutionsServices = () => {
  return (
    <>
      <PageHeader title="Solutions & Services" />

      {/* Solution Categories */}
      <SolutionCategoriesSection categories={solutionsServicesData.solutionCategories} />

      {/* Services */}
      <ServicesSection services={solutionsServicesData.services} />

      {/* Partners */}
      <ServicePartnersSection partners={solutionsServicesData.partners} />

      {/* Contact */}
      {solutionsServicesData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
