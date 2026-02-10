import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { o365M365Data } from '@/data/services/o365-m365';

export const O365M365 = () => {
  return (
    <>
      <ServicePageHero hero={o365M365Data.hero} />
      <SolutionsGrid solutions={o365M365Data.solutions} />
      <ServicePartnersSection partners={o365M365Data.partners} />
      <MissionsSection missions={o365M365Data.missions} />
      {o365M365Data.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
