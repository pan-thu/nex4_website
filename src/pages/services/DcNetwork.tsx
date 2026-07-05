import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { dcNetworkData } from '@/data/services/dc-network';

export const DcNetwork = () => {
  return (
    <>
      <ServicePageHero hero={dcNetworkData.hero} />
      <CapabilitiesList capabilities={dcNetworkData.capabilities} />
      <ServicePartnersSection partners={dcNetworkData.partners} />
      <MissionsSection missions={dcNetworkData.missions} />
      {dcNetworkData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
