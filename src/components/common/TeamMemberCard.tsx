import { motion } from 'framer-motion';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import type { Leader, Employee } from '@/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberCardProps {
  member: Leader | Employee;
  showSocial?: boolean;
  variant?: 'light' | 'dark';
}

export const TeamMemberCard = ({ member, showSocial = false, variant = 'light' }: TeamMemberCardProps) => {
  const hasSocial = 'social' in member;
  const social = hasSocial ? member.social : undefined;

  const isDark = variant === 'dark';

  return (
    <div className="text-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative mb-3 flex justify-center"
      >
        <Avatar className="w-24 h-24 rounded-3xl">
          <AvatarImage src={member.image} alt={member.name} className="object-cover" />
          <AvatarFallback className="text-xl bg-[#00A9E0] text-white rounded-3xl">
            {member.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
      </motion.div>

      <h3 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {member.name}
      </h3>
      <p className={`text-xs ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
        {member.position}
      </p>

      {/* Social icons below profile info */}
      {showSocial && social && (
        <div className="flex items-center justify-center gap-3 mt-4">
          {social.linkedin && (
            <motion.a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className={`w-9 h-9 flex items-center justify-center transition-colors ${
                isDark ? 'text-white/50 hover:text-[#00C4FF]' : 'text-gray-400 hover:text-[#00A9E0]'
              }`}
            >
              <Linkedin size={20} />
            </motion.a>
          )}
          {social.twitter && (
            <motion.a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className={`w-9 h-9 flex items-center justify-center transition-colors ${
                isDark ? 'text-white/50 hover:text-[#00C4FF]' : 'text-gray-400 hover:text-[#00A9E0]'
              }`}
            >
              <Twitter size={20} />
            </motion.a>
          )}
          {social.facebook && (
            <motion.a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className={`w-9 h-9 flex items-center justify-center transition-colors ${
                isDark ? 'text-white/50 hover:text-[#00C4FF]' : 'text-gray-400 hover:text-[#00A9E0]'
              }`}
            >
              <Facebook size={20} />
            </motion.a>
          )}
        </div>
      )}
    </div>
  );
};
