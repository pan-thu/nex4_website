import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ngfwData } from '@/data/services/ngfw';

export const Ngfw = () => {
  return (
    <>
      <ServicePageHero hero={ngfwData.hero} />
      <CapabilitiesList capabilities={ngfwData.capabilities} />
      <ServicePartnersSection partners={ngfwData.partners} />
      <MissionsSection missions={ngfwData.missions} />
      {ngfwData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
