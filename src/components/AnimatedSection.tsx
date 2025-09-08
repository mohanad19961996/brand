
import React from 'react';
import { useScrollAnimation, scrollAnimations, AnimationType } from './useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function AnimatedSection({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  staggerChildren = false,
  staggerDelay = 100
}: AnimatedSectionProps) {
  const { ref, isVisible, isMobile } = useScrollAnimation({ delay });
  const animationConfig = scrollAnimations[animation];

  // Use mobile-specific classes if on mobile device
  const getClasses = (isMobile: boolean, isVisible: boolean) => {
    if (isMobile) {
      return {
        transition: animationConfig.mobileTransition,
        state: animationConfig.mobileAnimate
      };
    }
    return {
      transition: animationConfig.transition,
      state: isVisible ? animationConfig.animate : animationConfig.initial
    };
  };

  const classes = getClasses(isMobile, isVisible);

  if (staggerChildren) {
    return (
      <div 
        ref={ref}
        className={`${classes.transition} ${className} ${classes.state}`}
      >
        {React.Children.map(children, (child, index) => {
          const childClasses = getClasses(isMobile, isVisible);
          return (
            <div
              key={index}
              className={`${childClasses.transition} ${childClasses.state}`}
              style={{
                transitionDelay: !isMobile && isVisible ? `${index * staggerDelay}ms` : '0ms'
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div 
      ref={ref}
      className={`${classes.transition} ${className} ${classes.state}`}
    >
      {children}
    </div>
  );
}

// Individual animation components for more granular control
export function FadeInUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInUp" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function FadeInLeft({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInLeft" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function FadeInRight({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="fadeInRight" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function ScaleIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="scaleIn" delay={delay} className={className}>{children}</AnimatedSection>;
}

export function BounceIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <AnimatedSection animation="bounceIn" delay={delay} className={className}>{children}</AnimatedSection>;
}
