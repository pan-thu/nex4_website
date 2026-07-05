import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { backupDisasterRecoveryData } from '@/data/services/backup-disaster-recovery';

export const BackupDisasterRecovery = () => {
  return (
    <>
      <ServicePageHero hero={backupDisasterRecoveryData.hero} />
      <CapabilitiesList capabilities={backupDisasterRecoveryData.capabilities} />
      <ServicePartnersSection partners={backupDisasterRecoveryData.partners} />
      <MissionsSection missions={backupDisasterRecoveryData.missions} />
      {backupDisasterRecoveryData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
