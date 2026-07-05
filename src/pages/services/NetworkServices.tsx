import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { networkServicesData } from '@/data/services/network-services';

export const NetworkServices = () => {
  return (
    <>
      <ServicePageHero hero={networkServicesData.hero} />
      <CapabilitiesList capabilities={networkServicesData.capabilities} />
      <ServicePartnersSection partners={networkServicesData.partners} />
      <MissionsSection missions={networkServicesData.missions} />
      {networkServicesData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
