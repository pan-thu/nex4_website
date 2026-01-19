import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { businessApplicationsData } from '@/data/services/business-applications';

export const BusinessApplications = () => {
  return (
    <>
      <ServicePageHero hero={businessApplicationsData.hero} />
      <SolutionsGrid solutions={businessApplicationsData.solutions} />
      <ServicePartnersSection partners={businessApplicationsData.partners} />
      <MissionsSection missions={businessApplicationsData.missions} />
      {businessApplicationsData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
