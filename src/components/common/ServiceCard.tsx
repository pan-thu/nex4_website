import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import type { Service } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const colorStyles = {
  red: { backgroundColor: '#00A9E0' },
  green: { backgroundColor: '#00A9E0' },
  blue: { backgroundColor: '#00A9E0' },
  purple: { backgroundColor: '#00A9E0' },
};

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const Icon = Icons[service.icon as keyof typeof Icons] as any;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full min-h-[420px] max-w-[280px] mx-auto"
    >
      <Link to={service.link} className="block h-full">
        <motion.div
          className="relative h-full"
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          {/* Blue gradient background card */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#004080] via-[#0066CC] to-[#00BFFF] rounded-2xl"
            variants={{
              rest: { x: -6, y: 6, rotate: -2 },
              hover: { x: 8, y: 8, rotate: 2 }
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Main white card */}
          <motion.div
            className="relative h-full"
            variants={{
              rest: { y: 0 },
              hover: { y: -10 }
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative h-full transition-all duration-300 bg-white shadow-md border-0 rounded-2xl">
              <CardHeader className="pb-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={colorStyles[service.color]}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
                >
                  {Icon && <Icon className="text-white" size={28} />}
                </motion.div>
                <CardTitle className="text-xl font-heading font-bold mb-2 text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-base text-gray-500 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-0 pt-0">
              </CardContent>
              <CardFooter className="pt-4 pb-5">
                <Button variant="link" className="text-[#00BFFF] p-0 h-auto text-base font-semibold hover:text-[#00A9E0] underline underline-offset-4">
                  Learn More →
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
