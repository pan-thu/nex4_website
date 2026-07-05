import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { dataAiServicesData } from '@/data/services/data-ai-services';

export const DataAiServices = () => {
  return (
    <>
      <ServicePageHero hero={dataAiServicesData.hero} />
      <CapabilitiesList capabilities={dataAiServicesData.capabilities} />
      <ServicePartnersSection partners={dataAiServicesData.partners} />
      <MissionsSection missions={dataAiServicesData.missions} />
      {dataAiServicesData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
