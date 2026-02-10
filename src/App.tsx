import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import {
  Home,
  AboutUs,
  ContactUs,
  PrivacyPolicy,
  EnterpriseSecurity,
  ITOpsSecurity,
  BusinessApplications,
  O365M365,
  PublicClouds,
  PrivateCloud,
  AwsWellArchitectProgram,
  EnterpriseNetwork,
  NetworkServices,
  DcNetwork,
  DcCoreSecurity,
  UnifiedComVideoConf,
  HireTalent,
  ProjectManager,
  ITHelpdesk,
  SecurityEngineer,
  CloudEngineer,
  DataProtection,
  CaseStudyAWS,
  SolutionsServices,
  SecurityOperation,
  NetworkInfrastructure,
  SystemCloud,
  ModernWorkspace,
} from '@/pages';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Service pages */}
          <Route path="/enterprise-security" element={<EnterpriseSecurity />} />
          <Route path="/itops-security" element={<ITOpsSecurity />} />
          <Route path="/business-applications" element={<BusinessApplications />} />
          <Route path="/o365-m365" element={<O365M365 />} />

          {/* Cloud services */}
          <Route path="/public-clouds" element={<PublicClouds />} />
          <Route path="/private-cloud" element={<PrivateCloud />} />
          <Route path="/aws-well-architect-program" element={<AwsWellArchitectProgram />} />

          {/* Network infrastructure */}
          <Route path="/enterprise-network" element={<EnterpriseNetwork />} />
          <Route path="/network-services" element={<NetworkServices />} />
          <Route path="/dc-network" element={<DcNetwork />} />
          <Route path="/dc-core-security" element={<DcCoreSecurity />} />
          <Route path="/unified-com-video-conf" element={<UnifiedComVideoConf />} />

          {/* Career pages */}
          <Route path="/careers" element={<HireTalent />} />
          <Route path="/careers/project-manager" element={<ProjectManager />} />
          <Route path="/careers/it-helpdesk" element={<ITHelpdesk />} />
          <Route path="/careers/security-engineer-i" element={<SecurityEngineer />} />
          <Route path="/careers/clo" element={<CloudEngineer />} />

          {/* Service category pages */}
          <Route path="/security-operation" element={<SecurityOperation />} />
          <Route path="/network-infrastructure" element={<NetworkInfrastructure />} />
          <Route path="/system-cloud" element={<SystemCloud />} />
          <Route path="/modern-workspace" element={<ModernWorkspace />} />

          {/* Misc pages */}
          <Route path="/solutions-services" element={<SolutionsServices />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route
            path="/enhanced-business-critical-applications-security-on-public-cloud-case-study"
            element={<CaseStudyAWS />}
          />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
