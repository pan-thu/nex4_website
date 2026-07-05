import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { annualPremiumSupportData } from '@/data/services/annual-premium-support';

export const AnnualPremiumSupport = () => {
  return (
    <>
      <ServicePageHero hero={annualPremiumSupportData.hero} />
      <CapabilitiesList capabilities={annualPremiumSupportData.capabilities} />
      <ServicePartnersSection partners={annualPremiumSupportData.partners} />
      <MissionsSection missions={annualPremiumSupportData.missions} />
      {annualPremiumSupportData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
