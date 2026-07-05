import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { microsoftSecurityData } from '@/data/services/microsoft-security';

export const MicrosoftSecurity = () => {
  return (
    <>
      <ServicePageHero hero={microsoftSecurityData.hero} />
      <CapabilitiesList capabilities={microsoftSecurityData.capabilities} />
      <ServicePartnersSection partners={microsoftSecurityData.partners} />
      <MissionsSection missions={microsoftSecurityData.missions} />
      {microsoftSecurityData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
