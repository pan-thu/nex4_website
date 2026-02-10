import type { ServicePageData } from '@/types';

export const networkServicesData: ServicePageData = {
  pageType: 'service',
  slug: 'network-services',
  breadcrumb: 'News',
  hero: {
    title: 'NETWORK SERVICES',
    titleHighlight: 'SERVICES',
    description: 'Monitor for growth and fluctuations of systems and assist when upgrades and updates are required. Provide a full time or part time services with utilities to monitor data storage, manipulation, presentation, communication or other capabilities.',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    image: '/images/services/network-services-1024x474-1-e1580120245334.jpg',
  },
  solutions: {
    sectionTitle: 'OUR SOLUTIONS',
    items: [
      {
        icon: 'dns-dhcp',
        title: 'Domain Name System/ Dynamic Host Configuration Protocol',
        description: 'Reduce manual workload and simplify the life of the IT admin.',
        image: '/images/services/Domain-Name-System-Dynamic-Host-Configuration-Protocol-e1580120683432-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
      {
        icon: 'adc',
        title: 'Application Delivery Control (LTM/ GTM)',
        description: 'Help sites direct user traffic to remove the excess load from servers.',
        image: '/images/services/Application-Delivery-Control--e1580120669476-on4kzo5d2iu4ysy0y8blzi7kpnnpv049chotb23n0c.png',
      },
    ],
  },
  partners: {
    sectionTitle: 'Our partners',
    logos: [
      {
        name: 'Palo Alto Networks',
        logo: '/images/partners/No.7-e1580118303711.png',
      },
      {
        name: 'F5',
        logo: '/images/partners/No.2-e1580118292784.png',
      },
      {
        name: 'Microsoft',
        logo: '/images/partners/No.3-e1580118211447.png',
      },
      {
        name: 'Arbor Networks',
        logo: '/images/partners/arbor-e1580119487847.png',
      },
      {
        name: 'Check Point',
        logo: '/images/partners/check_point-e1580119509168.png',
      },
      {
        name: 'Cisco',
        logo: '/images/partners/cisco-e1580119524886.png',
      },
      {
        name: 'Fortinet',
        logo: '/images/partners/fortinet-e1580122030279.png',
      },
      {
        name: 'VMware',
        logo: '/images/partners/No.4-e1580118255797.png',
      },
      {
        name: 'Infoblox',
        logo: '/images/partners/infoblox-e1580122007488.png',
      },
      {
        name: 'Genie Networks',
        logo: '/images/partners/genienetwork-e1580122040155.png',
      },
      {
        name: 'Dell EMC',
        logo: '/images/partners/No.6-e1580118282880.png',
      },
      {
        name: 'Imperva',
        logo: '/images/partners/imperva-e1580122020987.png',
      },
      {
        name: 'Nutanix',
        logo: '/images/partners/nutanix-e1580121998753.png',
      },
      {
        name: 'Rapid7',
        logo: '/images/partners/rapid-e1580121973852.png',
      },
      {
        name: 'Splunk',
        logo: '/images/partners/splunk-1-e1580121965592.png',
      },
      {
        name: 'Trend Micro',
        logo: '/images/partners/trend-e1580121953708.png',
      },
      {
        name: 'Oracle',
        logo: '/images/partners/No.5-e1580118269989.png',
      },
      {
        name: 'Zabbix',
        logo: '/images/partners/zabbix-e1580121944878.png',
      },
    ],
  },
  missions: [],
  contactSection: {
    title: 'Get In Touch With Our Awesome Team',
    showContactForm: true,
  },
};
