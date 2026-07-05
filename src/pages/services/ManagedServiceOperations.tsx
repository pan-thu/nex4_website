import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { managedServiceOperationsData } from '@/data/services/managed-service-operations';

export const ManagedServiceOperations = () => {
  return (
    <>
      <ServicePageHero hero={managedServiceOperationsData.hero} />
      <CapabilitiesList capabilities={managedServiceOperationsData.capabilities} />
      <ServicePartnersSection partners={managedServiceOperationsData.partners} />
      <MissionsSection missions={managedServiceOperationsData.missions} />
      {managedServiceOperationsData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
