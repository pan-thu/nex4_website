import type { JobDetailData } from '@/types';

export const itHelpdeskData: JobDetailData = {
  pageType: 'job-posting',
  slug: 'it-helpdesk',
  meta: {
    title: 'IT Helpdesk - NEX4 ICT Solutions',
    description: 'Join NEX4 as an IT Helpdesk professional to provide technical support',
  },
  breadcrumb: 'Careers',
  jobInfo: {
    title: 'IT Helpdesk',
    location: 'Yangon',
    type: 'Full-time, Permanent',
    department: 'IT Support',
    experienceLevel: 'Entry to Mid Level',
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
    'Provide first-line technical support to end users via phone, email, and in-person',
    'Troubleshoot and resolve hardware, software, and network issues',
    'Install, configure, and maintain desktop computers, laptops, and peripherals',
    'Set up and manage user accounts, permissions, and access rights',
    'Document all support requests and resolutions in the ticketing system',
    'Escalate complex issues to senior technical staff when necessary',
    'Maintain inventory of IT equipment and software licenses',
    'Assist with onboarding new employees and IT orientation',
    'Perform routine maintenance and updates on systems',
    'Contribute to knowledge base and user documentation',
  ],
  requirements: {
    required: [
      'Bachelor\'s degree in Computer Science, Information Technology, or related field (or equivalent experience)',
      '1-3 years of experience in IT helpdesk or technical support role',
      'Strong knowledge of Windows and macOS operating systems',
      'Understanding of basic networking concepts (TCP/IP, DNS, DHCP)',
      'Familiarity with Microsoft Office 365 and common business applications',
      'Excellent customer service and communication skills',
      'Good problem-solving abilities and attention to detail',
      'Ability to work independently and as part of a team',
      'Proficiency in English and Myanmar languages',
      'Commitment to long-term professional growth with the organization',
    ],
    preferred: [
      'CompTIA A+, Network+, or similar certifications',
      'Experience with Active Directory and Group Policy',
      'Knowledge of mobile device management (MDM)',
      'Familiarity with ticketing systems (ServiceNow, Jira, etc.)',
      'Basic scripting knowledge (PowerShell, Bash)',
      'Experience with remote support tools',
    ],
  },
  benefits: [
    'Competitive salary package',
    'Professional development and certification opportunities',
    'Work with diverse technologies',
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
