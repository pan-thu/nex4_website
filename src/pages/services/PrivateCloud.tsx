import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { privateCloudData } from '@/data/services/private-cloud';

export const PrivateCloud = () => {
  return (
    <>
      <ServicePageHero hero={privateCloudData.hero} />
      <CapabilitiesList capabilities={privateCloudData.capabilities} />
      <ServicePartnersSection partners={privateCloudData.partners} />
      <MissionsSection missions={privateCloudData.missions} />
      {privateCloudData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
