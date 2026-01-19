export interface Leader {
  id: string;
  name: string;
  position: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Employee {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  testimonial: string;
  image?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: 'red' | 'green' | 'blue' | 'purple';
  features: string[];
  link: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export * from './service';
export * from './career';
export * from './blog';
