import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ddosProtectionData } from '@/data/services/ddos-protection';

export const DdosProtection = () => {
  return (
    <>
      <ServicePageHero hero={ddosProtectionData.hero} />
      <CapabilitiesList capabilities={ddosProtectionData.capabilities} />
      <ServicePartnersSection partners={ddosProtectionData.partners} />
      <MissionsSection missions={ddosProtectionData.missions} />
      {ddosProtectionData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
