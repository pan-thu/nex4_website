import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { microsoft365MailMigrationData } from '@/data/services/microsoft-365-mail-migration';

export const Microsoft365MailMigration = () => {
  return (
    <>
      <ServicePageHero hero={microsoft365MailMigrationData.hero} />
      <CapabilitiesList capabilities={microsoft365MailMigrationData.capabilities} />
      <ServicePartnersSection partners={microsoft365MailMigrationData.partners} />
      <MissionsSection missions={microsoft365MailMigrationData.missions} />
      {microsoft365MailMigrationData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
