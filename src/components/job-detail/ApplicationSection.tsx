import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';

interface Props {
  applicationInstructions: {
    howToApply: string;
    deadline: string;
    requiredDocuments: string[];
    contactEmail: string;
  };
  jobTitle: string;
}

export const ApplicationSection = ({ applicationInstructions }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#1e3a4f] mb-6">How to Apply</h2>

      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          {applicationInstructions.howToApply}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold text-[#1e3a4f] mb-1">Application Deadline</p>
              <p className="text-gray-500">{applicationInstructions.deadline}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold text-[#1e3a4f] mb-1">Required Documents</p>
              <ul className="text-gray-500 text-sm space-y-1">
                {applicationInstructions.requiredDocuments.map((doc, index) => (
                  <li key={index}>• {doc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
