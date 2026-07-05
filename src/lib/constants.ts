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
        category: 'Network Infrastructure',
        link: '/network-infrastructure',
        items: [
          { label: 'Enterprise LAN/WAN', href: '/enterprise-network' },
          { label: 'Wireless Networking', href: '/wireless-networking' },
          { label: 'SD-WAN', href: '/sd-wan' },
          { label: 'DC Network/SDN', href: '/dc-network' },
          { label: 'Network Services (DDI/NAC)', href: '/network-services' },
        ],
      },
      {
        category: 'Cybersecurity',
        link: '/cybersecurity',
        items: [
          { label: 'Next-Gen Firewall (NGFW)', href: '/ngfw' },
          { label: 'Web Application Firewall (WAF)', href: '/waf' },
          { label: 'Zero Trust & Identity Security', href: '/zero-trust-identity' },
          { label: 'Security Operations (SOC)', href: '/security-operations-soc' },
          { label: 'DDoS Protection', href: '/ddos-protection' },
        ],
      },
      {
        category: 'Data Center Modernization',
        link: '/data-center-modernization',
        items: [
          { label: 'Compute', href: '/compute' },
          { label: 'Storage', href: '/storage' },
          { label: 'Private Cloud & Modern Workloads', href: '/private-cloud-modern-workloads' },
          { label: 'Backup, DR & Cyber Resilience', href: '/backup-disaster-recovery' },
        ],
      },
      {
        category: 'Cloud & Hybrid Solutions',
        link: '/cloud-hybrid-solutions',
        items: [
          { label: 'Cloud Strategy & Migration', href: '/cloud-strategy-migration' },
          { label: 'Hybrid Cloud Architecture', href: '/hybrid-cloud-architecture' },
          { label: 'Private Cloud', href: '/private-cloud' },
          { label: 'Data & AI Services', href: '/data-ai-services' },
        ],
      },
      {
        category: 'Modern Workplace',
        link: '/modern-workplace',
        items: [
          { label: 'Microsoft 365 & Mail Migration', href: '/microsoft-365-mail-migration' },
          { label: 'Power Platform Development', href: '/power-platform-development' },
          { label: 'Microsoft Security', href: '/microsoft-security' },
        ],
      },
      {
        category: 'Managed Services & Support',
        link: '/managed-services-support',
        items: [
          { label: '24/7 NOC', href: '/noc-247' },
          { label: 'Managed Service Operations', href: '/managed-service-operations' },
          { label: 'Annual Premium Support', href: '/annual-premium-support' },
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
      { label: 'Japan', href: 'https://www.nex4.jp/', external: true },
    ],
  },
];

export const TEAM_STATS = {
  experience: '12+',
  satisfaction: '98%',
  availability: '24/7',
};
