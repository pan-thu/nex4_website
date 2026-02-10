import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import type { JobListing } from '@/types';

interface Props {
  job: JobListing;
  index: number;
}

export const JobCard = ({ job, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group w-full md:w-[calc(50%-1rem)]"
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 h-full"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00A9E0]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: '40%' }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#00A9E0]/20"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Briefcase className="text-white" size={24} />
          </motion.div>

          <h3 className="text-xl font-bold text-[#1e3a4f] mb-3 group-hover:text-[#00A9E0] transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-500 mb-6 leading-relaxed text-sm">
            {job.summary}
          </p>

          <Link to={`/careers/${job.slug}`}>
            <Button
              className="w-full bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] hover:brightness-110 text-white transition-all duration-300 rounded-xl font-semibold group/btn"
            >
              View Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
