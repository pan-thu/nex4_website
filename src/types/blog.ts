export interface Author {
  name: string;
  link: string;
}

export interface PostDetails {
  date: {
    day: string;
    month: string;
  };
  comments: string;
}

export interface DownloadSection {
  title: string;
  downloadLink: string;
  fileName: string;
  fileType: string;
  description: string;
}

export interface CaseStudyPageData {
  pageType: 'generic';
  slug: string;
  breadcrumb: string;
  title: string;
  publishDate: string;
  author: Author;
  category: string;
  sections: {
    type: string;
    title?: string;
    content?: string;
    downloadLink?: string;
    fileName?: string;
    fileType?: string;
    description?: string;
  }[];
  metadata: {
    category: string;
    subcategory: string;
    format: string;
    downloadable: boolean;
    relatedPages: string[];
    tags: string[];
  };
  postDetails: PostDetails;
}
