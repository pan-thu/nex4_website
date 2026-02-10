export interface JobListing {
  title: string;
  slug: string;
  location: string;
  type: string;
  department: string;
  summary: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface CareerPageData {
  pageType: 'career-listing';
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  intro: {
    heading: string;
    headingHighlight?: string;
    description: string;
  };
  openPositions: {
    sectionTitle: string;
    subtitle: string;
    jobs: JobListing[];
  };
  whyJoin: {
    heading: string;
    benefits: Benefit[];
  };
}

export interface JobDetailData {
  pageType: 'job-posting';
  slug: string;
  breadcrumb: string;
  meta: {
    title: string;
    description: string;
  };
  jobInfo: {
    title: string;
    location: string;
    type: string;
    department: string;
    experienceLevel: string;
    salary: {
      currency: string;
      range: string;
      negotiable: boolean;
    };
  };
  aboutCompany: {
    description: string;
    culture: string;
    size: string;
    industry: string;
  };
  responsibilities: string[];
  requirements: {
    required: string[];
    preferred: string[];
  };
  benefits: string[];
  applicationInstructions: {
    howToApply: string;
    deadline: string;
    requiredDocuments: string[];
    contactEmail: string;
  };
}
