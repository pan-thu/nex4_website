import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { itopsSecurityData } from '@/data/services/itops-security';

export const ITOpsSecurity = () => {
  return (
    <>
      <ServicePageHero hero={itopsSecurityData.hero} />
      <SolutionsGrid solutions={itopsSecurityData.solutions} />
      <ServicePartnersSection partners={itopsSecurityData.partners} />
      <MissionsSection missions={itopsSecurityData.missions} />
      {itopsSecurityData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
