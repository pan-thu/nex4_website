import { ServicePageHero } from '@/components/service-page/ServicePageHero';
import { SolutionsGrid } from '@/components/service-page/SolutionsGrid';
import { CaseStudyDownloadSection } from '@/components/service-page/CaseStudyDownloadSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { awsWellArchitectProgramData } from '@/data/services/aws-well-architect-program';

export const AwsWellArchitectProgram = () => {
  return (
    <>
      <ServicePageHero hero={awsWellArchitectProgramData.hero} />
      <SolutionsGrid solutions={awsWellArchitectProgramData.solutions} />
      <CaseStudyDownloadSection
        title="AWS Well-Architected Framework"
        description="Download our comprehensive case study to learn how NEX4 helps organizations optimize their AWS infrastructure using the Well-Architected Framework. Discover best practices for security, reliability, performance efficiency, cost optimization, and operational excellence." 
        downloadUrl="/downloads/aws-well-architected-case-study.pdf"
        downloadLabel="Download Case Study"
      />
      {awsWellArchitectProgramData.contactSection.showContactForm && <ContactSection />}
    </>
  );
};
