import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { enterpriseNetworkData } from '@/data/services/enterprise-network';

export const EnterpriseNetwork = () => {
  return (
    <>
      <ServicePageHero hero={enterpriseNetworkData.hero} />
      <SolutionsGrid solutions={enterpriseNetworkData.solutions} />
      <ServicePartnersSection partners={enterpriseNetworkData.partners} />
      <MissionsSection missions={enterpriseNetworkData.missions} />
      {enterpriseNetworkData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
