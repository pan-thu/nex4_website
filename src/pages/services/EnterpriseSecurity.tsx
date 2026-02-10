import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { ServicePartnersSection } from '@/components/service-page/ServicePartnersSection';
import { MissionsSection } from '@/components/service-page/MissionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { enterpriseSecurityData } from '@/data/services/enterprise-security';

export const EnterpriseSecurity = () => {
  return (
    <>
      <ServicePageHero hero={enterpriseSecurityData.hero} />
      <SolutionsGrid solutions={enterpriseSecurityData.solutions} />
      <ServicePartnersSection partners={enterpriseSecurityData.partners} />
      <MissionsSection missions={enterpriseSecurityData.missions} />
      {enterpriseSecurityData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
