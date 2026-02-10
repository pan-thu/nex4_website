import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/common/ServiceCard';
import { servicesData } from '@/data/services';

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
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

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
            <p className="text-sm font-semibold text-[#00A9E0] tracking-widest uppercase">Our Solutions</p>
            <motion.div
              className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#00A9E0]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1e3a4f] mb-4">
            Comprehensive{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                ICT Services
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
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tailored technology solutions designed to accelerate your digital transformation journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
