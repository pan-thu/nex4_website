import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import {
  Home,
  AboutUs,
  ContactUs,
  PrivacyPolicy,
  NetworkInfrastructure,
  EnterpriseNetwork,
  WirelessNetworking,
  SdWan,
  DcNetwork,
  NetworkServices,
  Cybersecurity,
  Ngfw,
  Waf,
  ZeroTrustIdentity,
  SecurityOperationsSoc,
  DdosProtection,
  DataCenterModernization,
  Compute,
  Storage,
  PrivateCloudModernWorkloads,
  BackupDisasterRecovery,
  CloudHybridSolutions,
  CloudStrategyMigration,
  HybridCloudArchitecture,
  PrivateCloud,
  DataAiServices,
  ModernWorkplace,
  Microsoft365MailMigration,
  PowerPlatformDevelopment,
  MicrosoftSecurity,
  ManagedServicesSupport,
  Noc247,
  ManagedServiceOperations,
  AnnualPremiumSupport,
  HireTalent,
  ProjectManager,
  ITHelpdesk,
  SecurityEngineer,
  CloudEngineer,
  CaseStudyAWS,
  SolutionsServices,
} from '@/pages';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Solutions & Services hub */}
          <Route path="/solutions-services" element={<SolutionsServices />} />

          {/* Network Infrastructure */}
          <Route path="/network-infrastructure" element={<NetworkInfrastructure />} />
          <Route path="/enterprise-network" element={<EnterpriseNetwork />} />
          <Route path="/wireless-networking" element={<WirelessNetworking />} />
          <Route path="/sd-wan" element={<SdWan />} />
          <Route path="/dc-network" element={<DcNetwork />} />
          <Route path="/network-services" element={<NetworkServices />} />

          {/* Cybersecurity */}
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/ngfw" element={<Ngfw />} />
          <Route path="/waf" element={<Waf />} />
          <Route path="/zero-trust-identity" element={<ZeroTrustIdentity />} />
          <Route path="/security-operations-soc" element={<SecurityOperationsSoc />} />
          <Route path="/ddos-protection" element={<DdosProtection />} />

          {/* Data Center Modernization */}
          <Route path="/data-center-modernization" element={<DataCenterModernization />} />
          <Route path="/compute" element={<Compute />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/private-cloud-modern-workloads" element={<PrivateCloudModernWorkloads />} />
          <Route path="/backup-disaster-recovery" element={<BackupDisasterRecovery />} />

          {/* Cloud & Hybrid Solutions */}
          <Route path="/cloud-hybrid-solutions" element={<CloudHybridSolutions />} />
          <Route path="/cloud-strategy-migration" element={<CloudStrategyMigration />} />
          <Route path="/hybrid-cloud-architecture" element={<HybridCloudArchitecture />} />
          <Route path="/private-cloud" element={<PrivateCloud />} />
          <Route path="/data-ai-services" element={<DataAiServices />} />

          {/* Modern Workplace */}
          <Route path="/modern-workplace" element={<ModernWorkplace />} />
          <Route path="/microsoft-365-mail-migration" element={<Microsoft365MailMigration />} />
          <Route path="/power-platform-development" element={<PowerPlatformDevelopment />} />
          <Route path="/microsoft-security" element={<MicrosoftSecurity />} />

          {/* Managed Services & Support */}
          <Route path="/managed-services-support" element={<ManagedServicesSupport />} />
          <Route path="/noc-247" element={<Noc247 />} />
          <Route path="/managed-service-operations" element={<ManagedServiceOperations />} />
          <Route path="/annual-premium-support" element={<AnnualPremiumSupport />} />

          {/* Career pages */}
          <Route path="/careers" element={<HireTalent />} />
          <Route path="/careers/project-manager" element={<ProjectManager />} />
          <Route path="/careers/it-helpdesk" element={<ITHelpdesk />} />
          <Route path="/careers/security-engineer-i" element={<SecurityEngineer />} />
          <Route path="/careers/clo" element={<CloudEngineer />} />

          {/* Misc pages */}
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
