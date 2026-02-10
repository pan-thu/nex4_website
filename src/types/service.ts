export interface ServicePageHero {
  title: string;
  titleHighlight: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

export interface SolutionItem {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface Solutions {
  sectionTitle: string;
  items: SolutionItem[];
}

export interface PartnerLogo {
  name: string;
  logo: string;
}

export interface Partners {
  sectionTitle: string;
  logos: PartnerLogo[];
}

export interface Mission {
  number: string;
  title: string;
}

export interface ContactSection {
  title: string;
  showContactForm: boolean;
}

export interface ServicePageData {
  pageType: 'service';
  slug: string;
  breadcrumb: string;
  hero: ServicePageHero;
  solutions: Solutions;
  partners: Partners;
  missions: Mission[];
  contactSection: ContactSection;
}

// Hub page types
export interface CategoryItem {
  title: string;
  link: string;
}

export interface SolutionCategory {
  category: string;
  items: CategoryItem[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface Services {
  sectionTitle: string;
  items: ServiceItem[];
}

export interface HubPageData {
  pageType: 'hub';
  slug: string;
  breadcrumb: string;
  hero: {
    title: string;
    titleHighlight: string;
  };
  solutionCategories: SolutionCategory[];
  services: Services;
  partners: Partners;
  missions: Mission[];
  contactSection: ContactSection;
}

// Service Category Page types
export interface ServiceCategorySolution {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export interface ServiceCategoryPageData {
  pageType: 'service-category';
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  solutions: ServiceCategorySolution[];
  partners: Partners;
}
