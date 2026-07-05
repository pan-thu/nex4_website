import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { securityOperationsSocData } from '@/data/services/security-operations-soc';

export const SecurityOperationsSoc = () => {
  return (
    <>
      <ServicePageHero hero={securityOperationsSocData.hero} />
      <CapabilitiesList capabilities={securityOperationsSocData.capabilities} />
      <ServicePartnersSection partners={securityOperationsSocData.partners} />
      <MissionsSection missions={securityOperationsSocData.missions} />
      {securityOperationsSocData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
