import { motion } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Award } from 'lucide-react';

interface Props {
  jobInfo: {
    location: string;
    type: string;
    experienceLevel: string;
    salary: {
      range: string;
      negotiable: boolean;
    };
  };
}

export const JobMetadata = ({ jobInfo }: Props) => {
  const metadata = [
    {
      icon: MapPin,
      label: 'Location',
      value: jobInfo.location,
    },
    {
      icon: Briefcase,
      label: 'Type',
      value: jobInfo.type,
    },
    {
      icon: Award,
      label: 'Experience',
      value: jobInfo.experienceLevel,
    },
    {
      icon: DollarSign,
      label: 'Salary',
      value: `${jobInfo.salary.range}${jobInfo.salary.negotiable ? ' (Negotiable)' : ''}`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-xl p-6 shadow-md mb-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metadata.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
