import { motion } from 'framer-motion';
import type { Partner } from '@/types';

interface PartnerLogoProps {
  partner: Partner;
}

export const PartnerLogo = ({ partner }: PartnerLogoProps) => {
  return (
    <motion.div
      className="relative group bg-white p-6 rounded-2xl shadow-md flex items-center justify-center flex-shrink-0 w-48 h-32 border border-gray-100 transition-all duration-300"
      whileHover={{
        y: -5,
        boxShadow: '0 20px 40px rgba(0, 169, 224, 0.15)',
      }}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00A9E0]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] rounded-full"
        initial={{ width: 0 }}
        whileHover={{ width: '60%' }}
        transition={{ duration: 0.3 }}
      />

      <img
        src={partner.logo}
        alt={partner.name}
        className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
      />
    </motion.div>
  );
};
