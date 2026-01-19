import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CaseStudyDownloadSectionProps {
  title?: string;
  description?: string;
  downloadUrl: string;
  downloadLabel?: string;
}

export const CaseStudyDownloadSection = ({
  title = 'AWS Well-Architected Framework',
  description = 'Download our comprehensive case study to learn how NEX4 helps organizations optimize their AWS infrastructure using the Well-Architected Framework. Discover best practices for security, reliability, performance efficiency, cost optimization, and operational excellence.',
  downloadUrl,
  downloadLabel = 'Download Case Study',
}: CaseStudyDownloadSectionProps) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#00A9E0]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#00C4FF]/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(#00A9E0 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <p className="text-sm font-semibold text-[#00A9E0] tracking-widest uppercase">
              Case Study
            </p>
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1e3a4f] mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                {title.split(' ').slice(-1)[0]}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center gap-10"
          >

            {/* Description and Download */}
            <div className="lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {description}
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={downloadUrl}
                  download
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] text-white font-semibold px-8 py-6 rounded-full shadow-lg hover:shadow-xl shadow-[#00A9E0]/30 hover:shadow-[#00A9E0]/40 transition-all duration-300 text-lg"
                  >
                    <Download className="mr-2" size={20} />
                    {downloadLabel}
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
