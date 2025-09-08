import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Play, Star, Shield, Truck, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

export default function HeroSection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>{language === 'ar' ? 'منتجات حرفية أصيلة' : 'Authentic Handcrafted Products'}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.2 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {t.heroTitle}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.3 }}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                {t.heroSubtitle}
              </p>
            </motion.div>

            {/* Description */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.4 }}>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                {t.heroDescription}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.5 }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
                >
                  {t.exploreProducts}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                  {t.ourStory}
                </Button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.6 }}>
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{language === 'ar' ? 'دفع آمن' : 'Secure Payment'}</p>
                    <p className="text-xs text-muted-foreground">{language === 'ar' ? '100% محمي' : '100% Protected'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{language === 'ar' ? 'شحن مجاني' : 'Free Shipping'}</p>
                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'فوق 200 ريال' : 'Over $50'}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{language === 'ar' ? 'صناعة يدوية' : 'Handmade'}</p>
                    <p className="text-xs text-muted-foreground">{language === 'ar' ? 'بحب وعناية' : 'With Love & Care'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div {...scaleIn} transition={{ ...scaleIn.transition, delay: 0.4 }}>
            <div className="relative">
              {/* Main Product Showcase */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm border border-border/50">
                <ImageWithFallback
                  src="/api/placeholder/600/600"
                  alt={language === 'ar' ? 'منتجات حرفية مميزة' : 'Featured Handcrafted Products'}
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Product Cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{language === 'ar' ? 'تقييم ممتاز' : 'Excellent Rating'}</p>
                      <p className="text-xs text-muted-foreground">4.9/5 (2,340 {language === 'ar' ? 'تقييم' : 'reviews'})</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-accent fill-current" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{language === 'ar' ? 'أكثر من' : 'Over'} 10K</p>
                      <p className="text-xs text-muted-foreground">{language === 'ar' ? 'عميل راضي' : 'Happy Customers'}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}