import type { JobDetailData } from '@/types';

export const cloudEngineerData: JobDetailData = {
  pageType: 'job-posting',
  slug: 'clo',
  meta: {
    title: 'Cloud Engineer - NEX4 ICT Solutions',
    description: 'Join NEX4 as a Cloud Engineer to deploy and optimize cloud applications',
  },
  breadcrumb: 'Careers',
  jobInfo: {
    title: 'Cloud Engineer',
    location: 'Yangon',
    type: 'Full-time, Permanent',
    department: 'Cloud Services',
    experienceLevel: 'Mid Level',
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
    'Deploying, configuring, and optimizing dynamically scalable, highly available, fault-tolerant, and secure applications on various cloud platforms, including AWS, Azure, and other public cloud providers',
    'Collaborating with cross-functional teams to gather customer requirements, and effectively provisioning and managing cloud deployments to meet those requirements',
    'Leading and executing the migration of on-premises workloads to cloud service providers, ensuring smooth and efficient transitions while minimizing downtime and disruptions',
    'Implementing and maintaining cloud environments, adhering to best practices recommended by respective vendors, to ensure optimal performance, security, and cost-efficiency',
    'Monitoring, troubleshooting, and resolving issues related to cloud deployments, performance, and availability, utilizing appropriate tools and techniques to maintain the reliability of applications and services',
    'Staying updated with the latest advancements and trends in cloud technologies, and actively identifying opportunities to leverage new features and services to enhance the efficiency and effectiveness of cloud deployments',
  ],
  requirements: {
    required: [
      'Proficiency in English at a conversational and above level',
      'Demonstrated ability to learn quickly and adapt to new technologies',
      'Strong communication skills, both verbal and written, with the ability to convey ideas effectively',
      'A strong motivation to work as a Cloud Engineer, driven by a genuine interest in the field',
      'Proficient understanding of key features and services offered by major cloud service providers, including AWS, Azure, and others',
      'Basic experience working with Linux/UNIX systems and a solid understanding of container tools used in development processes, such as Docker and Kubernetes',
      'Familiarity with source control tools like Git',
      'Commitment to a long-term professional journey with the organization',
    ],
    preferred: [
      'Possession of AWS Solution Architect Associate certification is advantageous',
      'Azure certifications (AZ-104, AZ-305)',
      'Experience with Infrastructure as Code (Terraform, CloudFormation)',
      'Knowledge of CI/CD pipelines and DevOps practices',
      'Experience with monitoring and logging tools (CloudWatch, Azure Monitor, Prometheus, Grafana)',
      'Understanding of networking concepts in cloud environments',
    ],
  },
  benefits: [
    'Competitive salary package',
    'Professional development and certification opportunities',
    'Work with cutting-edge cloud technologies',
    'Hands-on experience with AWS, Azure, and other cloud platforms',
    'Health insurance',
    'Career growth opportunities in cloud computing',
  ],
  applicationInstructions: {
    howToApply: 'Please submit your resume and cover letter to info@nex4.net',
    deadline: '23rd March 2024',
    requiredDocuments: ['Updated CV/Resume', 'Cover letter'],
    contactEmail: 'info@nex4.net',
  },
};
