import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { powerPlatformDevelopmentData } from '@/data/services/power-platform-development';

export const PowerPlatformDevelopment = () => {
  return (
    <>
      <ServicePageHero hero={powerPlatformDevelopmentData.hero} />
      <CapabilitiesList capabilities={powerPlatformDevelopmentData.capabilities} />
      <ServicePartnersSection partners={powerPlatformDevelopmentData.partners} />
      <MissionsSection missions={powerPlatformDevelopmentData.missions} />
      {powerPlatformDevelopmentData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
