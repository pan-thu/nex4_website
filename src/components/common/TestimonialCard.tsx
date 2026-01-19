import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/types';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="relative bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00A9E0]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#00C4FF]/10 to-transparent" />

      <CardContent className="p-10 md:p-16 relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00A9E0]/30"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            />
            <div className="relative w-16 h-16 bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg shadow-[#00A9E0]/25">
              <Quote className="text-white" size={28} />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg text-center mb-10 italic leading-relaxed max-w-2xl mx-auto"
        >
          "{testimonial.testimonial}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4"
        >
          {testimonial.image && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar className="w-16 h-16 border-2 border-[#00A9E0]/20 shadow-md">
                <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                <AvatarFallback className="bg-gradient-to-br from-[#00A9E0] to-[#00C4FF] text-white font-semibold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          )}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-[#1e3a4f]">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
              {testimonial.company}
            </p>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
