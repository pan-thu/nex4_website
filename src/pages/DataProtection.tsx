import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { dataProtectionData } from '@/data/services/data-protection';

export const DataProtection = () => {
  return (
    <>
      <ServicePageHero hero={dataProtectionData.hero} />
      <SolutionsGrid solutions={dataProtectionData.solutions} />
      <ServicePartnersSection partners={dataProtectionData.partners} />
      <MissionsSection missions={dataProtectionData.missions} />
      {dataProtectionData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
