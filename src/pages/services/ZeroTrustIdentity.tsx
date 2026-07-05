import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { zeroTrustIdentityData } from '@/data/services/zero-trust-identity';

export const ZeroTrustIdentity = () => {
  return (
    <>
      <ServicePageHero hero={zeroTrustIdentityData.hero} />
      <CapabilitiesList capabilities={zeroTrustIdentityData.capabilities} />
      <ServicePartnersSection partners={zeroTrustIdentityData.partners} />
      <MissionsSection missions={zeroTrustIdentityData.missions} />
      {zeroTrustIdentityData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
