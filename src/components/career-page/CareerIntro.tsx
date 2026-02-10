import { motion } from 'framer-motion';

interface Props {
  intro: {
    heading: string;
    headingHighlight?: string;
    description: string;
  };
}

export const CareerIntro = ({ intro }: Props) => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-20 w-72 h-72 bg-[#00A9E0]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 left-20 w-64 h-64 bg-[#00C4FF]/5 rounded-full blur-3xl"
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(#00A9E0 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1e3a4f] mb-6">
            {intro.headingHighlight ? (
              <>
                {intro.heading.split(intro.headingHighlight!).map((part, index) => (
                  <span key={index}>
                    {part}
                    {index < intro.heading.split(intro.headingHighlight!).length - 1 && (
                      <span className="relative">
                        <span className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] bg-clip-text text-transparent">
                          {intro.headingHighlight}
                        </span>
                      </span>
                    )}
                  </span>
                ))}
              </>
            ) : (
              intro.heading
            )}
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            {intro.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
