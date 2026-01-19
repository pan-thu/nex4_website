import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { networkServicesData } from '@/data/services/network-services';

export const NetworkServices = () => {
  return (
    <>
      <ServicePageHero hero={networkServicesData.hero} />
      <SolutionsGrid solutions={networkServicesData.solutions} />
      <ServicePartnersSection partners={networkServicesData.partners} />
      <MissionsSection missions={networkServicesData.missions} />
      {networkServicesData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
