import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { noc247Data } from '@/data/services/noc-247';

export const Noc247 = () => {
  return (
    <>
      <ServicePageHero hero={noc247Data.hero} />
      <CapabilitiesList capabilities={noc247Data.capabilities} />
      <ServicePartnersSection partners={noc247Data.partners} />
      <MissionsSection missions={noc247Data.missions} />
      {noc247Data.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
