import type { Variants } from 'framer-motion';

// Reusable animation variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Transition presets
export const smoothTransition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 15,
};

export const quickTransition = {
  duration: 0.3,
  ease: 'easeOut' as const,
};

export const slowTransition = {
  duration: 0.8,
  ease: 'easeInOut' as const,
};

// Hover effects
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const hoverLift = {
  y: -10,
  transition: { duration: 0.3 },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};
