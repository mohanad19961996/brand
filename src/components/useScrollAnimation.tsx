import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

// Helper function to detect mobile devices
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768 ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );
};

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    setIsMobile(isMobileDevice());
    
    // If mobile, immediately set visible to true to skip animations
    if (isMobileDevice()) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
              if (triggerOnce) setHasAnimated(true);
            }, delay);
          } else {
            setIsVisible(true);
            if (triggerOnce) setHasAnimated(true);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { ref: elementRef, isVisible, hasAnimated, isMobile };
}

// Animation variants
export const scrollAnimations = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out',
    mobileInitial: 'opacity-100 translate-y-0',
    mobileAnimate: 'opacity-100 translate-y-0',
    mobileTransition: 'transition-none'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out',
    mobileInitial: 'opacity-100 translate-y-0',
    mobileAnimate: 'opacity-100 translate-y-0',
    mobileTransition: 'transition-none'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out',
    mobileInitial: 'opacity-100 translate-x-0',
    mobileAnimate: 'opacity-100 translate-x-0',
    mobileTransition: 'transition-none'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out',
    mobileInitial: 'opacity-100 translate-x-0',
    mobileAnimate: 'opacity-100 translate-x-0',
    mobileTransition: 'transition-none'
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-700 ease-out',
    mobileInitial: 'opacity-100 scale-100',
    mobileAnimate: 'opacity-100 scale-100',
    mobileTransition: 'transition-none'
  },
  slideInBottom: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-800 ease-out',
    mobileInitial: 'opacity-100 translate-y-0',
    mobileAnimate: 'opacity-100 translate-y-0',
    mobileTransition: 'transition-none'
  },
  staggeredFadeIn: {
    initial: 'opacity-0 translate-y-6',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-600 ease-out',
    mobileInitial: 'opacity-100 translate-y-0',
    mobileAnimate: 'opacity-100 translate-y-0',
    mobileTransition: 'transition-none'
  },
  bounceIn: {
    initial: 'opacity-0 scale-90 translate-y-4',
    animate: 'opacity-100 scale-100 translate-y-0',
    transition: 'transition-all duration-800 cubic-bezier(0.34, 1.56, 0.64, 1)',
    mobileInitial: 'opacity-100 scale-100 translate-y-0',
    mobileAnimate: 'opacity-100 scale-100 translate-y-0',
    mobileTransition: 'transition-none'
  }
};

export type AnimationType = keyof typeof scrollAnimations;