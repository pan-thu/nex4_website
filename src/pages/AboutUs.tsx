import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, Heart, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { PageHeader } from '@/components/common/PageHeader';

export const AboutUs = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen">
      <PageHeader title="About Us" />

      {/* Company Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#00A9E0] font-semibold text-sm uppercase tracking-wider mb-4">
                ABOUT US
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                We are the leading company that delivers services that combine{' '}
                <span className="text-[#00A9E0]">quality, reliability and compliance!</span>
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                In today's digitally connected world, we believe it is essential for organizations to align every part of their strategy in order to become industry leaders. We are dedicated to helping our clients deal with this challenge and overcome the many obstacles they may face when connecting with new technologies.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our foundation in 2013, we have prided ourselves on being agile and tailor our projects to enhance the operational efficiency of our clients through our various service. Our team is built upon high expertise and is driven by strategic thinking and innovative ideas to build the bridge between business ambitions and IT infrastructure.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We work closely with industry leading vendors to deliver cutting edge services. Our expertise includes consulting in hybrid cloud, managed services, networking, security, IP telephony, big data, and data centers.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800">11+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#00A9E0]">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-800">100+</div>
                  <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Team Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/team-photo.jpg"
                  alt="NEX4 Team"
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = 'https://placehold.co/600x400/1A3A52/00A9E0?text=NEX4+Team';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-6">
              OUR TEAM
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our people are highly skilled and specialized in specific solutions from our vast offering. We work in collaboration to customize solutions and ensure the best outcome for our clients. Attentive, transparent, innovative, effective and approachable, we understand technology and are dedicated to helping you find the best way to overcome any integration barriers you may face when improving your IT environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Essential Qualities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Qualities List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-8">
                <span className="text-[#00A9E0]">Four</span> essential qualities
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Heart, color: 'text-green-500', text: 'Good for the Customers' },
                  { icon: Award, color: 'text-blue-500', text: 'Good for the Employees' },
                  { icon: Shield, color: 'text-purple-500', text: 'Good for the Community and Nation' },
                  { icon: Zap, color: 'text-orange-500', text: 'Good with the Technology and Professionalism' },
                ].map((quality, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center ${quality.color}`}>
                      <quality.icon size={24} />
                    </div>
                    <span className="text-lg font-medium text-gray-800">{quality.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-[#1A3A52] aspect-video">
                {!videoPlaying ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1A3A52] to-[#00A9E0] cursor-pointer group"
                    onClick={() => setVideoPlaying(true)}
                  >
                    {/* YouTube Thumbnail */}
                    <img
                      src="https://img.youtube.com/vi/fEC0eX4PBpI/maxresdefault.jpg"
                      alt="NEX4 Profile Video Thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if maxresdefault doesn't exist
                        e.currentTarget.src = 'https://img.youtube.com/vi/fEC0eX4PBpI/hqdefault.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                    <div className="relative text-center z-10">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:bg-white group-hover:scale-110 transition-all shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={32} className="text-[#00A9E0] ml-1" fill="currentColor" />
                      </motion.div>
                      <p className="text-white text-lg font-semibold drop-shadow-lg">NEX4 PROFILE</p>
                      <p className="text-white/90 text-sm mt-1 drop-shadow">Click to watch our story</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/fEC0eX4PBpI?autoplay=1"
                    title="NEX4 PROFILE"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              AWARDS
            </h2>
            <div className="w-24 h-1 bg-[#00A9E0] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* F5 Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F5</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">F5 Awards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Unity Gold Partner in Myanmar</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>F5 Networks High Five Award of the Year (2014)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Extra – Mile Effort Award</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>F5 Networks High Five Award of the Year (2015)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Top Partner of the Year ROSEAN (2016)</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Cisco Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1BA0D7] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CISCO</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Cisco Awards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Premier Partner</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Advanced Data Center Architecture Specialization</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Premier Partner of the Year Indochina (2016)</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* VMware Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">VM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">VMWare</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Enterprise Solution Provider in Myanmar</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Networking and Security Partner of the Year 2017</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            {/* Other Awards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Other Awards</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>EMC/Dell/Netapp Awards</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Multiple Oracle Excellence</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600">
                    <span className="text-[#00A9E0] mt-1">✓</span>
                    <span>Palo Alto Networks Awards</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'SPEED',
                description: 'Control network performance, acceleration, manageable network infrastructure',
                color: 'bg-blue-500',
              },
              {
                icon: Shield,
                title: 'SECURITY',
                description: 'Network, infrastructure, web application, enterprise access security',
                color: 'bg-cyan-500',
              },
              {
                icon: Award,
                title: 'RELIABILITY',
                description: 'Manageable, scalable, flexible redundancy and agile network infrastructure',
                color: 'bg-blue-600',
              },
              {
                icon: Heart,
                title: 'SATISFACTION',
                description: 'For both business and IT management',
                color: 'bg-cyan-600',
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 rounded-full ${pillar.color} mx-auto mb-6 flex items-center justify-center shadow-lg`}>
                  <pillar.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
