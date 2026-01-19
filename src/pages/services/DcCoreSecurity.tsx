import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { dcCoreSecurityData } from '@/data/services/dc-core-security';

export const DcCoreSecurity = () => {
  return (
    <>
      <ServicePageHero hero={dcCoreSecurityData.hero} />
      <SolutionsGrid solutions={dcCoreSecurityData.solutions} />
      <ServicePartnersSection partners={dcCoreSecurityData.partners} />
      <MissionsSection missions={dcCoreSecurityData.missions} />
      {dcCoreSecurityData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
