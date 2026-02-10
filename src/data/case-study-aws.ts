import type { CaseStudyPageData } from '@/types';

export const awsCaseStudyData: CaseStudyPageData = {
  pageType: 'generic',
  slug: 'enhanced-business-critical-applications-security-on-public-cloud-case-study',
  breadcrumb: 'News',
  title: "Enhanced Business Critical Application's Security on Public Cloud",
  publishDate: 'March 4',
  author: {
    name: 'Minn Myat Soe',
    link: '/',
  },
  category: 'Public Cloud',
  sections: [
    {
      type: 'text',
      title: 'Download Full Case study for aws here :',
      content: 'This page provides access to a comprehensive case study on enhancing business critical application security on public cloud infrastructure.',
    },
    {
      type: 'download',
      title: 'Case Study Download',
      downloadLink: '/wp-content/uploads/2020/03/case-study-for-AWS-1.pdf',
      fileName: 'case-study-for-AWS',
      fileType: 'PDF',
      description: 'Download the full AWS case study detailing security enhancements for business critical applications on public cloud',
    },
  ],
  metadata: {
    category: 'Public Cloud',
    subcategory: 'Case Studies',
    format: 'Case Study',
    downloadable: true,
    relatedPages: ['/public-clouds', '/data-protection', '/private-cloud'],
    tags: ['AWS', 'Public Cloud', 'Security', 'Case Study', 'Business Critical Applications'],
  },
  postDetails: {
    date: {
      day: '4',
      month: 'Mar',
    },
    comments: 'No Comments',
  },
};
