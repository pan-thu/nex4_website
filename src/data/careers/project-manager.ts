import type { JobDetailData } from '@/types';

export const projectManagerData: JobDetailData = {
  pageType: 'job-posting',
  slug: 'project-manager',
  meta: {
    title: 'Project Manager - NEX4 ICT Solutions',
    description: 'Join NEX4 as a Project Manager to lead IT infrastructure projects',
  },
  breadcrumb: 'Careers',
  jobInfo: {
    title: 'Project Manager',
    location: 'Yangon',
    type: 'Full-time, Permanent',
    department: 'Project Management',
    experienceLevel: 'Mid to Senior Level',
    salary: {
      currency: 'MMK',
      range: 'Competitive',
      negotiable: true,
    },
  },
  aboutCompany: {
    description:
      'NEX4 ICT Solutions is a leading IT solutions provider in Myanmar, specializing in enterprise security, network infrastructure, cloud services, and modern workspace solutions. We work with cutting-edge technologies to deliver innovative solutions to our clients.',
    culture:
      'We foster a collaborative environment where innovation and continuous learning are valued. Our team works on challenging projects that make a real impact.',
    size: '51-200 employees',
    industry: 'Information Technology & Services',
  },
  responsibilities: [
    'Lead and manage IT infrastructure projects from inception to completion',
    'Coordinate with cross-functional teams including technical teams, clients, and stakeholders',
    'Develop detailed project plans, timelines, and resource allocation strategies',
    'Monitor project progress and ensure deliverables meet quality standards and deadlines',
    'Manage project budgets and identify cost-saving opportunities',
    'Conduct risk assessments and develop mitigation strategies',
    'Facilitate communication between technical teams and non-technical stakeholders',
    'Prepare and present project status reports to senior management',
    'Ensure projects comply with company standards and best practices',
    'Mentor junior team members and contribute to process improvements',
  ],
  requirements: {
    required: [
      'Bachelor\'s degree in Computer Science, Information Technology, Engineering, or related field',
      'Minimum 3-5 years of experience in IT project management',
      'Strong understanding of IT infrastructure, networking, and security concepts',
      'Proven track record of successfully delivering complex IT projects',
      'Excellent communication and interpersonal skills in English and Myanmar',
      'Strong leadership and team management capabilities',
      'Proficiency in project management tools and methodologies (Agile, Waterfall, etc.)',
      'Ability to manage multiple projects simultaneously',
      'Strong problem-solving and decision-making skills',
      'Commitment to long-term professional growth with the organization',
    ],
    preferred: [
      'PMP (Project Management Professional) or PRINCE2 certification',
      'Experience with infrastructure projects (network, security, cloud)',
      'Knowledge of ITIL framework',
      'Experience working with international clients or vendors',
      'Familiarity with cloud platforms (AWS, Azure, GCP)',
    ],
  },
  benefits: [
    'Competitive salary package',
    'Professional development and certification opportunities',
    'Work with cutting-edge technologies',
    'Collaborative team environment',
    'Health insurance',
    'Career growth opportunities',
  ],
  applicationInstructions: {
    howToApply: 'Please submit your resume and cover letter to info@nex4.net',
    deadline: '23rd March 2024',
    requiredDocuments: ['Updated CV/Resume', 'Cover letter'],
    contactEmail: 'info@nex4.net',
  },
};
