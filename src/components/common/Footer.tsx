import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Phone, Mail, Clock, Search, Shield, Building2, Cloud, Globe, Headphones } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const Footer = () => {
  return (
    <footer className="bg-[#1e3a4f] text-white relative overflow-hidden">
      {/* Decorative circle gradient on bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00A9E0]/20 to-transparent rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="/images/logo-white.png" alt="NEX4 ICT Solutions" className="h-12 mb-4" />
            <p className="text-gray-300 mb-6 text-sm">
              Everyday is a new day for us and we work really hard to satisfy our customer everywhere with innovative technology solutions.
            </p>
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="bg-white border-0 text-gray-800 placeholder:text-gray-400 pr-10 rounded-md"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions-services"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  Solutions & Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://nex4.blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  Blog
                </a>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#00A9E0]">▸</span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h6 className="text-lg font-semibold mb-4">Our Services</h6>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-center gap-2 text-sm">
                <Shield size={16} className="text-[#00A9E0] flex-shrink-0" />
                Cybersecurity
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm">
                <Building2 size={16} className="text-[#00A9E0] flex-shrink-0" />
                Infrastructure
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm">
                <Cloud size={16} className="text-[#00A9E0] flex-shrink-0" />
                Cloud Services
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm">
                <Globe size={16} className="text-[#00A9E0] flex-shrink-0" />
                Network Solutions
              </li>
              <li className="text-gray-300 flex items-center gap-2 text-sm">
                <Headphones size={16} className="text-[#00A9E0] flex-shrink-0" />
                24/7 Support
              </li>
            </ul>
          </motion.div>

          {/* Get In Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h6 className="text-lg font-semibold mb-4">Get In Touch</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#00A9E0] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{CONTACT_INFO.address}</p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#00A9E0] flex-shrink-0" />
                <p className="text-gray-300 text-sm">{CONTACT_INFO.phone}</p>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#00A9E0] flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-[#00A9E0] transition-colors text-sm"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#00A9E0] flex-shrink-0" />
                <p className="text-gray-300 text-sm">{CONTACT_INFO.hours}</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 NEX4 ICT Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: SOCIAL_LINKS.facebook },
                { icon: Twitter, href: SOCIAL_LINKS.twitter },
                { icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                { icon: Youtube, href: SOCIAL_LINKS.youtube },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 hover:text-[#00A9E0] transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
