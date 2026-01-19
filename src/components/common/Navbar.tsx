import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top bar with contact info */}
      <div className={`text-white transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100 bg-primary-dark/90'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>CALL US: {CONTACT_INFO.phone}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail size={14} />
                <span>{CONTACT_INFO.email}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Clock size={14} />
              <span>{CONTACT_INFO.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={isScrolled ? '/images/logo.png' : '/images/logo-white.png'}
                alt="NEX4 ICT Solutions"
                className="h-10"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const hasDropdown = link.dropdown || link.simpleDropdown;
              return (
                <div
                  key={link.href}
                  className="relative flex items-center"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <div>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-base leading-none hover:text-primary font-semibold transition-colors flex items-center gap-1 ${
                          isScrolled ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        {link.label}
                        {hasDropdown && (
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                              activeDropdown === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </a>
                    ) : (
                      <button
                        onClick={() => !hasDropdown && window.location.assign(link.href)}
                        className={`text-base leading-none hover:text-primary font-semibold transition-colors flex items-center gap-1 ${
                          isScrolled ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        {!hasDropdown ? (
                          <Link to={link.href}>{link.label}</Link>
                        ) : (
                          <>
                            {link.label}
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                activeDropdown === link.label ? 'rotate-180' : ''
                              }`}
                            />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Simple Dropdown Menu (two-layer) */}
                  {link.simpleDropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg shadow-[#00A9E0]/10 py-2 z-50 border-t-2 border-[#00A9E0]"
                        >
                          {link.simpleDropdown.map((item, itemIndex) => (
                            item.external ? (
                              <a
                                key={`${link.label}-${item.label}-${itemIndex}`}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#00A9E0]/10 hover:text-[#00A9E0] transition-all"
                              >
                                {item.label}
                              </a>
                            ) : (
                              <Link
                                key={`${link.label}-${item.label}-${itemIndex}`}
                                to={item.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-[#00A9E0]/10 hover:text-[#00A9E0] transition-all"
                              >
                                {item.label}
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}

                  {/* Dropdown Menu - Tree Style */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg shadow-[#00A9E0]/10 py-2 z-50 border-t-2 border-[#00A9E0]"
                          onMouseLeave={() => setExpandedCategory(null)}
                        >
                          {link.dropdown.map((category, catIndex) => (
                            <div
                              key={`${link.label}-cat-${catIndex}`}
                              className="relative"
                              onMouseEnter={() => setExpandedCategory(category.category)}
                            >
                              {/* Category Header */}
                              <Link
                                to={category.link || '#'}
                                className={`flex items-center justify-between px-4 py-2.5 cursor-pointer transition-all ${
                                  expandedCategory === category.category
                                    ? 'bg-[#00A9E0]/10 text-[#00A9E0]'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }`}
                              >
                                <span className="text-sm font-semibold">{category.category}</span>
                                <ChevronRight
                                  size={16}
                                  className={`transition-transform duration-200 ${
                                    expandedCategory === category.category ? 'rotate-90' : ''
                                  }`}
                                />
                              </Link>

                              {/* Sub-items */}
                              <AnimatePresence>
                                {expandedCategory === category.category && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden bg-gray-50/50"
                                  >
                                    {category.items.map((item, itemIndex) => (
                                      item.external ? (
                                        <a
                                          key={`${link.label}-${category.category}-${item.label}-${itemIndex}`}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:bg-[#00A9E0]/10 hover:text-[#00A9E0] transition-all border-l-2 border-transparent hover:border-[#00A9E0] ml-4"
                                        >
                                          {item.label}
                                        </a>
                                      ) : (
                                        <Link
                                          key={`${link.label}-${category.category}-${item.label}-${itemIndex}`}
                                          to={item.href}
                                          className="block pl-8 pr-4 py-2 text-sm text-gray-600 hover:bg-[#00A9E0]/10 hover:text-[#00A9E0] transition-all border-l-2 border-transparent hover:border-[#00A9E0] ml-4"
                                        >
                                          {item.label}
                                        </Link>
                                      )
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl shadow-[#00A9E0]/30 hover:shadow-[#00A9E0]/40 hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              {NAV_LINKS.map((link) => {
                const hasDropdown = link.dropdown || link.simpleDropdown;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="border-b last:border-b-0"
                  >
                    {/* Parent Link */}
                    <div className="py-3">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary font-medium transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ) : hasDropdown ? (
                        <button
                          onClick={() =>
                            setMobileExpandedCategory(
                              mobileExpandedCategory === link.label ? null : link.label
                            )
                          }
                          className={`w-full flex items-center justify-between font-medium transition-colors ${
                            mobileExpandedCategory === link.label
                              ? 'text-[#00A9E0]'
                              : 'text-gray-700'
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileExpandedCategory === link.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-gray-700 hover:text-primary font-medium transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>

                    {/* Simple Dropdown Items - Mobile */}
                    {link.simpleDropdown && (
                      <AnimatePresence>
                        {mobileExpandedCategory === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 pb-2"
                          >
                            {link.simpleDropdown.map((item, itemIndex) => (
                              item.external ? (
                                <a
                                  key={`mobile-${link.label}-${item.label}-${itemIndex}`}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block py-1.5 text-sm text-gray-600 hover:text-[#00A9E0] transition-colors pl-4 border-l-2 border-gray-200 hover:border-[#00A9E0] ml-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </a>
                              ) : (
                                <Link
                                  key={`mobile-${link.label}-${item.label}-${itemIndex}`}
                                  to={item.href}
                                  className="block py-1.5 text-sm text-gray-600 hover:text-[#00A9E0] transition-colors pl-4 border-l-2 border-gray-200 hover:border-[#00A9E0] ml-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* Dropdown Items - Mobile Tree Style */}
                    {link.dropdown && (
                      <div className="pl-4 pb-2">
                        {link.dropdown.map((category, catIndex) => (
                          <div key={`mobile-${link.label}-cat-${catIndex}`}>
                            {/* Category Header - Clickable */}
                            <div
                              className={`w-full flex items-center justify-between py-2 text-sm font-semibold transition-colors ${
                                mobileExpandedCategory === category.category
                                  ? 'text-[#00A9E0]'
                                  : 'text-gray-700'
                              }`}
                            >
                              <Link
                                to={category.link || '#'}
                                className="flex-1 hover:text-[#00A9E0]"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {category.category}
                              </Link>
                              <button
                                onClick={() =>
                                  setMobileExpandedCategory(
                                    mobileExpandedCategory === category.category ? null : category.category
                                  )
                                }
                                className="p-1"
                              >
                                <ChevronRight
                                  size={16}
                                  className={`transition-transform duration-200 ${
                                    mobileExpandedCategory === category.category ? 'rotate-90' : ''
                                  }`}
                                />
                              </button>
                            </div>

                            {/* Sub-items */}
                            <AnimatePresence>
                              {mobileExpandedCategory === category.category && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  {category.items.map((item, itemIndex) => (
                                    item.external ? (
                                      <a
                                        key={`mobile-${link.label}-${category.category}-${item.label}-${itemIndex}`}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-1.5 text-sm text-gray-600 hover:text-[#00A9E0] transition-colors pl-4 border-l-2 border-gray-200 hover:border-[#00A9E0] ml-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {item.label}
                                      </a>
                                    ) : (
                                      <Link
                                        key={`mobile-${link.label}-${category.category}-${item.label}-${itemIndex}`}
                                        to={item.href}
                                        className="block py-1.5 text-sm text-gray-600 hover:text-[#00A9E0] transition-colors pl-4 border-l-2 border-gray-200 hover:border-[#00A9E0] ml-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {item.label}
                                      </Link>
                                    )
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="py-3"
              >
                <Button
                  className="w-full bg-gradient-to-r from-[#00A9E0] to-[#00C4FF] text-white font-semibold"
                  onClick={() => {
                    navigate('/contact-us');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
