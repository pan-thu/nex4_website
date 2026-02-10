import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { privateCloudData } from '@/data/services/private-cloud';

export const PrivateCloud = () => {
  return (
    <>
      <ServicePageHero hero={privateCloudData.hero} />
      <SolutionsGrid solutions={privateCloudData.solutions} />
      <ServicePartnersSection partners={privateCloudData.partners} />
      <MissionsSection missions={privateCloudData.missions} />
      {privateCloudData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
