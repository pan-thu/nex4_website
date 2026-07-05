import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { cloudStrategyMigrationData } from '@/data/services/cloud-strategy-migration';

export const CloudStrategyMigration = () => {
  return (
    <>
      <ServicePageHero hero={cloudStrategyMigrationData.hero} />
      <CapabilitiesList capabilities={cloudStrategyMigrationData.capabilities} />
      <ServicePartnersSection partners={cloudStrategyMigrationData.partners} />
      <MissionsSection missions={cloudStrategyMigrationData.missions} />
      {cloudStrategyMigrationData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
