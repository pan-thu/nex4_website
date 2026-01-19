import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { dcNetworkData } from '@/data/services/dc-network';

export const DcNetwork = () => {
  return (
    <>
      <ServicePageHero hero={dcNetworkData.hero} />
      <SolutionsGrid solutions={dcNetworkData.solutions} />
      <ServicePartnersSection partners={dcNetworkData.partners} />
      <MissionsSection missions={dcNetworkData.missions} />
      {dcNetworkData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
