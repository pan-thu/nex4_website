import { motion } from 'framer-motion';
import { Shield, Lock, FileText, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <PageHeader title="Privacy Policy" />

      {/* Main Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Information We Collect */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A9E0] flex items-center justify-center">
                    <FileText className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                    Information We Collect
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-3">
                  <p>When you visit our website, NEX4 may collect the following data:</p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>
                      Personal Information: We collect personal information that you provide us when
                      you fill out forms on our website. This may include your name, email address,
                      company name, position, and any other contact information you provide.
                    </li>
                    <li>
                      Usage Data: We collect information about your interactions with our website,
                      including your IP address, browser type, operating system, referring URLs,
                      pages viewed, and the dates/times of your visits.
                    </li>
                  </ul>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A9E0] flex items-center justify-center">
                    <Shield className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                    How We Use Information
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-3">
                  <p>We collect and use your personal information for various ways, including to:</p>
                  <ul className="space-y-2 ml-5 list-disc">
                    <li>Provide information or services you have requested or show by NEX4</li>
                    <li>Send promotional material and updates about our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Improve our website and services based on your feedback</li>
                    <li>Comply with legal obligations and protect our legal rights</li>
                    <li>We will not share your data with others for marketing purposes</li>
                  </ul>
                </div>
              </div>

              {/* Data Security & Storage */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A9E0] flex items-center justify-center">
                    <Lock className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                    Data Security & Storage
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    NEX4 securely stores your data at Microsoft 365. We are committed to protecting
                    your data and have implemented appropriate technical and organizational security
                    measures to protect your personal information from unauthorized access, use, or
                    disclosure.
                  </p>
                </div>
              </div>

              {/* Privacy Policies of Other Websites */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A9E0] flex items-center justify-center">
                    <AlertCircle className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                    Privacy Policies of Other Websites
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    The NEX4 website contains links to other websites. Our privacy policy applies only
                    to our website. If you click on a link to another website, you should read their
                    privacy policy.
                  </p>
                </div>
              </div>

              {/* Changes to Our Privacy Policy */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#00A9E0] flex items-center justify-center">
                    <FileText className="text-white" size={20} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800">
                    Changes to Our Privacy Policy
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                  <p>
                    NEX4 keeps its privacy policy under regular review and places any updates on
                    this web page. This privacy policy was last updated on 29 September 2023.
                  </p>
                  <p className="mt-4">
                    If you have questions about NEX4's privacy policy, the data we hold on you, or you
                    would like to exercise one of your data protection rights, please do not hesitate to
                    contact us.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Information Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-2xl shadow-xl p-8 lg:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about our privacy policy or how we handle your data,
              please don't hesitate to reach out to us.
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-white text-[#00A9E0] px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
