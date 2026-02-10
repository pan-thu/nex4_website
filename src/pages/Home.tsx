import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ManagementTeamSection } from '@/components/sections/ManagementTeamSection';
import { EmployeeTeamSection } from '@/components/sections/EmployeeTeamSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ManagementTeamSection />
      <EmployeeTeamSection />
      <PartnersSection />
      <TestimonialsSection />
    </>
  );
};
