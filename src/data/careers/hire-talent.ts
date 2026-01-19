import type { CareerPageData } from '@/types';

export const hireTalentData: CareerPageData = {
  pageType: 'career-listing',
  slug: 'hire-talent',
  meta: {
    title: 'Hire Talent - NEX4 ICT Solutions',
    description: 'Join NEX4 ICT Solutions and be part of our talented team',
  },
  hero: {
    title: 'Discover Exceptional Talent',
    titleHighlight: 'Talent',
    subtitle: 'Join our team of innovative IT professionals forging the future with innovation, expertise, and dedication.',
  },
  intro: {
    heading: 'Unlock Your Potential: Join NEX4 Company Limited - Where Innovation Meets Opportunity!',
    headingHighlight: 'Innovation Meets Opportunity',
    description:
      'NEX4 is the one-hub for Talent Across Leading Tools - Your Next Career Adventure Starts Here!',
  },
  openPositions: {
    sectionTitle: 'Open Positions',
    subtitle: 'Join our team of talented and make an impact',
    jobs: [
      {
        title: 'Project Manager',
        slug: 'project-manager',
        location: 'Yangon',
        type: 'Full-time, Permanent',
        department: 'Project Management',
        summary: 'Lead and manage IT infrastructure and project success from inception to completion',
      },
      {
        title: 'Security Engineer',
        slug: 'security-engineer-i',
        location: 'Yangon',
        type: 'Full-time, Permanent',
        department: 'Security',
        summary: 'Protect the digital infrastructure and ensure robust security and compliance',
      },
      {
        title: 'IT Helpdesk',
        slug: 'it-helpdesk',
        location: 'Yangon',
        type: 'Full-time, Permanent',
        department: 'IT Support',
        summary: 'Provide technical support and ensure smooth IT operations',
      },
      {
        title: 'Cloud Engineer',
        slug: 'clo',
        location: 'Yangon',
        type: 'Full-time, Permanent',
        department: 'Cloud Services',
        summary: 'Deploy and optimize scalable cloud solutions for modern infrastructure',
      },
    ],
  },
  whyJoin: {
    heading: 'Why Join NEX4?',
    benefits: [
      {
        icon: 'innovation',
        title: 'Innovation First',
        description:
          'Work with cutting-edge technologies and innovative solutions that push the boundaries of what\'s possible.',
      },
      {
        icon: 'team',
        title: 'Amazing Team',
        description:
          'Collaborate with talented professionals in a supportive environment where everyone\'s ideas are valued.',
      },
      {
        icon: 'growth',
        title: 'Career Growth',
        description:
          'Continuous learning and development opportunities to help you reach your full potential and advance your career.',
      },
    ],
  },
};
