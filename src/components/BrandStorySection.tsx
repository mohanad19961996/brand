import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Play, Users, Award, Globe, Heart, ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    id: 'artisans',
    value: '500+',
    label: 'Master Artisans',
    labelAr: 'حرفي ماهر',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    id: 'countries',
    value: '25+',
    label: 'Countries',
    labelAr: 'دولة',
    icon: Globe,
    color: 'text-green-600'
  },
  {
    id: 'products',
    value: '10K+',
    label: 'Unique Products',
    labelAr: 'منتج فريد',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    id: 'customers',
    value: '50K+',
    label: 'Happy Customers',
    labelAr: 'عميل راضي',
    icon: Heart,
    color: 'text-red-600'
  }
];

const values = [
  {
    id: 'authenticity',
    title: 'Authenticity',
    titleAr: 'الأصالة',
    description: 'Every piece tells a genuine story of tradition and craftsmanship',
    descriptionAr: 'كل قطعة تحكي قصة حقيقية من التراث والصناعة اليدوية',
    icon: '🎨'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    titleAr: 'الاستدامة',
    description: 'We care for our planet using eco-friendly materials and processes',
    descriptionAr: 'نهتم بكوكبنا باستخدام مواد وعمليات صديقة للبيئة',
    icon: '🌱'
  },
  {
    id: 'community',
    title: 'Community',
    titleAr: 'المجتمع',
    description: 'Supporting local artisans and preserving cultural heritage',
    descriptionAr: 'دعم الحرفيين المحليين والحفاظ على التراث الثقافي',
    icon: '🤝'
  },
  {
    id: 'quality',
    title: 'Quality',
    titleAr: 'الجودة',
    description: 'Uncompromising standards in every handcrafted creation',
    descriptionAr: 'معايير لا تتنازل عن الجودة في كل إبداع مصنوع يدوياً',
    icon: '✨'
  }
];

export default function BrandStorySection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4 fill-current" />
                <span>{language === 'ar' ? 'قصتنا' : 'Our Story'}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'ar' 
                  ? 'رحلة من الشغف إلى الإبداع'
                  : 'A Journey from Passion to Creation'
                }
              </h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {language === 'ar' 
                    ? 'بدأت قصتنا في عام 2015 من حلم بسيط: إحياء فن الصناعة اليدوية في عالم تهيمن عليه الآلات. آمنا بأن كل منتج يجب أن يحمل روح صانعه وقصة فريدة تستحق أن تُحكى.'
                    : 'Our story began in 2015 with a simple dream: to revive the art of handcrafting in a machine-dominated world. We believed that every product should carry the soul of its maker and a unique story worth telling.'
                  }
                </p>
                <p>
                  {language === 'ar' 
                    ? 'اليوم، نفخر بشراكتنا مع أكثر من 500 حرفي ماهر من 25 دولة حول العالم، نجمعهم معاً في منصة واحدة تحتفي بالتنوع الثقافي والإبداع الإنساني.'
                    : 'Today, we proudly partner with over 500 master artisans from 25 countries worldwide, bringing them together on one platform that celebrates cultural diversity and human creativity.'
                  }
                </p>
                <p>
                  {language === 'ar' 
                    ? 'كل منتج في متجرنا ليس مجرد سلعة، بل هو تجسيد لتراث عريق وحرفية استثنائية، مصنوع بحب وعناية ليصل إليك محملاً بقصة ملهمة.'
                    : 'Every product in our store is not just a commodity, but an embodiment of rich heritage and exceptional craftsmanship, made with love and care to reach you carrying an inspiring story.'
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {language === 'ar' ? 'اقرأ قصتنا الكاملة' : 'Read Our Full Story'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                {language === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/3] max-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm border border-border/50">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpc2FuJTIwd29ya2luZyUyMGhhbmRtYWRlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU3MzI3OTMwfDA&ixlib=rb-4.1.0&q=80&w=400"
                  alt={language === 'ar' ? 'حرفي يعمل على منتج يدوي' : 'Artisan working on handmade product'}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2015</div>
                  <div className="text-xs text-muted-foreground">
                    {language === 'ar' ? 'بداية الرحلة' : 'Journey Started'}
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {language === 'ar' ? 'جودة مضمونة' : 'Quality Assured'}
                    </div>
                    <div className="text-xs text-muted-foreground">100% {language === 'ar' ? 'يدوي' : 'Handmade'}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {language === 'ar' ? stat.labelAr : stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar' 
              ? 'القيم التي توجه كل قرار نتخذه وكل منتج نختاره لمتجرنا'
              : 'The values that guide every decision we make and every product we choose for our store'
            }
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {language === 'ar' ? value.titleAr : value.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {language === 'ar' ? value.descriptionAr : value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}