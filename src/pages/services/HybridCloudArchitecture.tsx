import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { hybridCloudArchitectureData } from '@/data/services/hybrid-cloud-architecture';

export const HybridCloudArchitecture = () => {
  return (
    <>
      <ServicePageHero hero={hybridCloudArchitectureData.hero} />
      <CapabilitiesList capabilities={hybridCloudArchitectureData.capabilities} />
      <ServicePartnersSection partners={hybridCloudArchitectureData.partners} />
      <MissionsSection missions={hybridCloudArchitectureData.missions} />
      {hybridCloudArchitectureData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
