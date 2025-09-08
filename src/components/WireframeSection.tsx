import { AnimatedSection, AnimationType } from './AnimatedSection';

interface WireframeSectionProps {
  id: string;
  variant?: 'default' | 'gradient' | 'accent';
  backgroundColor?: string;
  children: React.ReactNode;
  animation?: AnimationType;
  animationDelay?: number;
}

export default function WireframeSection({ 
  id, 
  variant = 'default',
  backgroundColor = "bg-background",
  children,
  animation = 'fadeInUp',
  animationDelay = 0
}: WireframeSectionProps) {
  const getBackgroundClass = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-background via-muted/30 to-accent/20';
      case 'accent':
        return 'bg-gradient-to-tr from-accent/10 to-secondary/20';
      default:
        return backgroundColor;
    }
  };

  return (
    <section id={id} className={`py-8 px-4 sm:px-6 lg:px-8 ${getBackgroundClass()} relative overflow-hidden`}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-xl animate-float"></div>
        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-secondary/3 to-muted/3 rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection animation={animation} delay={animationDelay}>
          {children}
        </AnimatedSection>
      </div>
    </section>
  );
}