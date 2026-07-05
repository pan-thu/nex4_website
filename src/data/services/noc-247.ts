import type { ServicePageData } from '@/types';

export const noc247Data: ServicePageData = {
  pageType: 'service',
  slug: 'noc-247',
  breadcrumb: 'News',
  hero: {
    title: '24/7 NOC — CONTINUOUS MONITORING',
    titleHighlight: '24/7 NOC',
    description: "Round-the-clock eyes on your infrastructure. NEX4's NOC monitors all network, server, storage and cloud endpoints 24/7 — classifying alerts by severity, resolving L1 faults immediately and escalating P1/P2 incidents within defined SLA windows.",
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/Canva-Shot-of-Corridor-in-Working-Data-Center-Full-of-Rack-Servers-and-Supercomputers-with-High-Security-Level-Icon-Visualization.-1024x576-1-e1580120277603.jpg',
  },
  capabilities: {
    sectionTitle: 'Key Capabilities',
    items: [
      'Real-time infra monitoring (net/server/cloud)',
      'Alert triage & P1–P4 severity classification',
      'L1 first-line fault diagnosis & resolution',
      '24/7 on-call escalation management',
      'Shift handover & NOC briefing log',
      'SLA breach notification & escalation',
    ],
  },
  partners: {
    sectionTitle: 'Our Support Partners',
    logos: [],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
