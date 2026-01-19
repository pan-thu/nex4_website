import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { unifiedComVideoConfData } from '@/data/services/unified-com-video-conf';

export const UnifiedComVideoConf = () => {
  return (
    <>
      <ServicePageHero hero={unifiedComVideoConfData.hero} />
      <SolutionsGrid solutions={unifiedComVideoConfData.solutions} />
      <ServicePartnersSection partners={unifiedComVideoConfData.partners} />
      <MissionsSection missions={unifiedComVideoConfData.missions} />
      {unifiedComVideoConfData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
