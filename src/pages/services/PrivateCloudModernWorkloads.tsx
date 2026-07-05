import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { CapabilitiesList } from '@/components/service-page/CapabilitiesList';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { privateCloudModernWorkloadsData } from '@/data/services/private-cloud-modern-workloads';

export const PrivateCloudModernWorkloads = () => {
  return (
    <>
      <ServicePageHero hero={privateCloudModernWorkloadsData.hero} />
      <CapabilitiesList capabilities={privateCloudModernWorkloadsData.capabilities} />
      <ServicePartnersSection partners={privateCloudModernWorkloadsData.partners} />
      <MissionsSection missions={privateCloudModernWorkloadsData.missions} />
      {privateCloudModernWorkloadsData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
