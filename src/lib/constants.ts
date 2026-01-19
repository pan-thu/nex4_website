export const CONTACT_INFO = {
  phone: '+95 (1) 2305190',
  email: 'info@nex4.net',
  hours: 'Mon — Fri: 9AM — 6PM',
  address: 'Bldg 18 #212-214, MICT Park, Hlaing, Yangon, Myanmar',
};

// Company social media links (from current website)
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/nex4ict/',
  twitter: 'https://twitter.com/nex4ict?s=09',
  linkedin: 'https://www.linkedin.com/company/nex4ict',
  youtube: 'https://www.youtube.com/channel/UCwcOIHDbgoaKzGM3LG-ACRg',
};

type SubMenuItem = {
  label: string;
  href: string;
  external?: boolean;
};

type MenuCategory = {
  category: string;
  link?: string;
  items: SubMenuItem[];
};

type NavLink = {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: MenuCategory[];
  simpleDropdown?: SubMenuItem[];
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Solutions & Services',
    href: '/solutions-services',
    dropdown: [
      {
        category: 'Security & Operation',
        link: '/security-operation',
        items: [
          { label: 'Enterprise Security', href: '/enterprise-security' },
          { label: 'DC/Core Security', href: '/dc-core-security' },
          { label: 'ITOps & Security', href: '/itops-security' },
        ],
      },
      {
        category: 'Network Infrastructure',
        link: '/network-infrastructure',
        items: [
          { label: 'Enterprise Network', href: '/enterprise-network' },
          { label: 'DC Network', href: '/dc-network' },
          { label: 'Network Services', href: '/network-services' },
        ],
      },
      {
        category: 'System & Cloud',
        link: '/system-cloud',
        items: [
          { label: 'Private Cloud', href: '/private-cloud' },
          { label: 'Public Clouds', href: '/public-clouds' },
          { label: 'AWS Well-Architected', href: '/aws-well-architect-program' },
          { label: 'Data Protection', href: '/data-protection' },
        ],
      },
      {
        category: 'Modern Workspace',
        link: '/modern-workspace',
        items: [
          { label: 'Business Applications', href: '/business-applications' },
          { label: 'O365/M365', href: '/o365-m365' },
          { label: 'Unified Communications', href: '/unified-com-video-conf' },
        ],
      },
    ],
  },
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: 'https://nex4.blog', external: true },
  { label: 'Careers', href: '/careers' },
  {
    label: 'Our Entities',
    href: '#',
    simpleDropdown: [
      { label: 'NEXSA', href: 'https://nexsa.nex4.net/', external: true },
      { label: '.Japan', href: '#' },
    ],
  },
];

export const TEAM_STATS = {
  experience: '18+',
  satisfaction: '98%',
  availability: '24/7',
};
