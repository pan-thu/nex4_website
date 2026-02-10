import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { publicCloudsData } from '@/data/services/public-clouds';

export const PublicClouds = () => {
  return (
    <>
      <ServicePageHero hero={publicCloudsData.hero} />
      <SolutionsGrid solutions={publicCloudsData.solutions} />
      <ServicePartnersSection partners={publicCloudsData.partners} />
      <MissionsSection missions={publicCloudsData.missions} />
      {publicCloudsData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
