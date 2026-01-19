import type { JobDetailData } from '@/types';

export const securityEngineerData: JobDetailData = {
  pageType: 'job-posting',
  slug: 'security-engineer-i',
  meta: {
    title: 'Security Engineer - NEX4 ICT Solutions',
    description: 'Join NEX4 as a Security Engineer to protect and secure IT infrastructure',
  },
  breadcrumb: 'Careers',
  jobInfo: {
    title: 'Security Engineer',
    location: 'Yangon',
    type: 'Full-time, Permanent',
    department: 'Security',
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
    'Handling network security devices (Next Generation Firewall, WAF, End Point Security)',
    'Assist in the implementation and maintenance of foundational security measures to protect the organization\'s IT infrastructure',
    'Collaborate with the security team to monitor and analyse security alerts and incidents',
    'Participate in vulnerability assessments and assist in the remediation of identified vulnerabilities',
    'Contribute to security awareness programs and training initiatives for employees',
    'Work with senior security professionals to enhance the organization\'s overall security posture',
    'Support incident response efforts and learn best practices in handling security incidents',
  ],
  requirements: {
    required: [
      'Strong understanding of foundational security concepts and principles',
      'Demonstrated eagerness to learn and grow in the field of cybersecurity',
      'Effective communication skills and ability to work collaboratively in a team',
      'Enthusiastic about building a career in cybersecurity',
      'Commitment to a long-term professional journey with the organization',
      'Basic understanding of networking and system administration',
      'Familiarity with security tools and technologies',
    ],
    preferred: [
      'Relevant certifications such as CompTIA Security+, CEH, or equivalent (not mandatory but a plus)',
      'Experience with Next Generation Firewalls',
      'Knowledge of Web Application Firewalls (WAF)',
      'Familiarity with Endpoint Security solutions',
      'Understanding of security frameworks and best practices',
    ],
  },
  benefits: [
    'Competitive salary package',
    'Professional development and certification opportunities',
    'Work with cutting-edge security technologies',
    'Mentorship from experienced security professionals',
    'Health insurance',
    'Career growth opportunities in cybersecurity',
  ],
  applicationInstructions: {
    howToApply: 'Please submit your resume and cover letter to info@nex4.net',
    deadline: '23rd March 2024',
    requiredDocuments: ['Updated CV/Resume', 'Cover letter'],
    contactEmail: 'info@nex4.net',
  },
};
