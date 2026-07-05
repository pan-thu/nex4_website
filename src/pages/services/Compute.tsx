import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { computeData } from '@/data/services/compute';

export const Compute = () => {
  return (
    <>
      <ServicePageHero hero={computeData.hero} />
      <CapabilitiesList capabilities={computeData.capabilities} />
      <ServicePartnersSection partners={computeData.partners} />
      <MissionsSection missions={computeData.missions} />
      {computeData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
