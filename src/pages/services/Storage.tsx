import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { storageData } from '@/data/services/storage';

export const Storage = () => {
  return (
    <>
      <ServicePageHero hero={storageData.hero} />
      <CapabilitiesList capabilities={storageData.capabilities} />
      <ServicePartnersSection partners={storageData.partners} />
      <MissionsSection missions={storageData.missions} />
      {storageData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
