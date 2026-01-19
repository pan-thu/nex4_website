import { CareerHero } from '@/components/career-page/CareerHero';
import { CareerIntro } from '@/components/career-page/CareerIntro';
import { JobListingsSection } from '@/components/career-page/JobListingsSection';
import { BenefitsSection } from '@/components/career-page/BenefitsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { hireTalentData } from '@/data/careers/hire-talent';

export const HireTalent = () => {
  return (
    <>
      <CareerHero hero={hireTalentData.hero} />
      <CareerIntro intro={hireTalentData.intro} />
      <JobListingsSection openPositions={hireTalentData.openPositions} />
      <BenefitsSection whyJoin={hireTalentData.whyJoin} />
      <ContactSection />
    </>
  );
};
