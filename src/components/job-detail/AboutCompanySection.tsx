import { motion } from 'framer-motion';
import { Users, Briefcase } from 'lucide-react';

interface Props {
  aboutCompany: {
    description: string;
    culture: string;
    size: string;
    industry: string;
  };
}

export const AboutCompanySection = ({ aboutCompany }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 text-white sticky top-24"
    >
      <h3 className="text-2xl font-bold mb-6">About NEX4</h3>

      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed">
          {aboutCompany.description}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {aboutCompany.culture}
        </p>

        <div className="border-t border-gray-700 pt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Users className="text-primary" size={20} />
            <div>
              <p className="text-sm text-gray-400">Company Size</p>
              <p className="font-semibold">{aboutCompany.size}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase className="text-primary" size={20} />
            <div>
              <p className="text-sm text-gray-400">Industry</p>
              <p className="font-semibold">{aboutCompany.industry}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
