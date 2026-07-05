import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { wafData } from '@/data/services/waf';

export const Waf = () => {
  return (
    <>
      <ServicePageHero hero={wafData.hero} />
      <CapabilitiesList capabilities={wafData.capabilities} />
      <ServicePartnersSection partners={wafData.partners} />
      <MissionsSection missions={wafData.missions} />
      {wafData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
