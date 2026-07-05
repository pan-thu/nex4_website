import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { sdWanData } from '@/data/services/sd-wan';

export const SdWan = () => {
  return (
    <>
      <ServicePageHero hero={sdWanData.hero} />
      <CapabilitiesList capabilities={sdWanData.capabilities} />
      <ServicePartnersSection partners={sdWanData.partners} />
      <MissionsSection missions={sdWanData.missions} />
      {sdWanData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
