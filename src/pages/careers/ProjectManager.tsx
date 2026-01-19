import { JobDetailHero } from '@/components/job-detail/JobDetailHero';
import { AboutCompanySection } from '@/components/job-detail/AboutCompanySection';
import { ResponsibilitiesSection } from '@/components/job-detail/ResponsibilitiesSection';
import { RequirementsSection } from '@/components/job-detail/RequirementsSection';
import { ApplicationSection } from '@/components/job-detail/ApplicationSection';
import { projectManagerData } from '@/data/careers/project-manager';

export const ProjectManager = () => {
  return (
    <>
      <JobDetailHero title={projectManagerData.jobInfo.title} />

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-0">
              <ResponsibilitiesSection responsibilities={projectManagerData.responsibilities} />
              <RequirementsSection requirements={projectManagerData.requirements} />
              <ApplicationSection
                applicationInstructions={projectManagerData.applicationInstructions}
                jobTitle={projectManagerData.jobInfo.title}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <AboutCompanySection aboutCompany={projectManagerData.aboutCompany} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
