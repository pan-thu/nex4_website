import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { wirelessNetworkingData } from '@/data/services/wireless-networking';

export const WirelessNetworking = () => {
  return (
    <>
      <ServicePageHero hero={wirelessNetworkingData.hero} />
      <CapabilitiesList capabilities={wirelessNetworkingData.capabilities} />
      <ServicePartnersSection partners={wirelessNetworkingData.partners} />
      <MissionsSection missions={wirelessNetworkingData.missions} />
      {wirelessNetworkingData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
