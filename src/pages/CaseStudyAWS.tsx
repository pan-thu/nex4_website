import { Download, Calendar, User, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { awsCaseStudyData } from '@/data/case-study-aws';
import { PageHeader } from '@/components/common/PageHeader';

export const CaseStudyAWS = () => {
  const downloadSection = awsCaseStudyData.sections.find((s) => s.type === 'download');

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader title="Case Study" />

      {/* Meta Information */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {awsCaseStudyData.title}
          </h2>
          <div className="flex flex-wrap gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>{awsCaseStudyData.publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <span>By {awsCaseStudyData.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              <span>{awsCaseStudyData.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 md:p-12"
        >
          {/* Text Section */}
          {awsCaseStudyData.sections
            .filter((s) => s.type === 'text')
            .map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </div>
            ))}

          {/* Download Section */}
          {downloadSection && (
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-lg border-2 border-primary/20">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{downloadSection.title}</h3>
                <p className="text-gray-600 mb-6 max-w-2xl">{downloadSection.description}</p>

                <a
                  href={downloadSection.downloadLink}
                  download
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5" />
                  Download {downloadSection.fileType} ({downloadSection.fileName})
                </a>

                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {awsCaseStudyData.metadata.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-primary text-sm font-medium rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Related Pages */}
          {awsCaseStudyData.metadata.relatedPages.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h3>
              <div className="flex flex-wrap gap-3">
                {awsCaseStudyData.metadata.relatedPages.map((page, index) => (
                  <a
                    key={index}
                    href={page}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                  >
                    {page.replace(/\//g, '').replace(/-/g, ' ').toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
