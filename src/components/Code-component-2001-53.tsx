import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    id: '1',
    title: 'The Art of Traditional Pottery Making',
    titleAr: 'فن صناعة الفخار التقليدي',
    excerpt: 'Discover the ancient techniques passed down through generations...',
    excerptAr: 'اكتشف التقنيات القديمة المتناقلة عبر الأجيال...',
    content: 'Deep dive into the world of traditional pottery making and learn about the techniques that have been preserved for centuries.',
    contentAr: 'اغوص في عالم صناعة الفخار التقليدي وتعلم عن التقنيات التي حُفظت لقرون.',
    image: '/api/placeholder/600/400',
    category: 'Craftsmanship',
    categoryAr: 'الحرفية',
    author: 'Sarah Johnson',
    authorAr: 'سارة جونسون',
    publishDate: '2024-01-15',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Sustainable Materials in Modern Crafts',
    titleAr: 'المواد المستدامة في الحرف الحديثة',
    excerpt: 'How artisans are embracing eco-friendly practices...',
    excerptAr: 'كيف يتبنى الحرفيون الممارسات الصديقة للبيئة...',
    content: 'Explore how modern artisans are incorporating sustainable materials and practices into their traditional crafts.',
    contentAr: 'استكشف كيف يدمج الحرفيون الحديثون المواد والممارسات المستدامة في حرفهم التقليدية.',
    image: '/api/placeholder/600/400',
    category: 'Sustainability',
    categoryAr: 'الاستدامة',
    author: 'Michael Chen',
    authorAr: 'مايكل تشين',
    publishDate: '2024-01-12',
    readTime: 6,
    featured: false
  },
  {
    id: '3',
    title: 'The Revival of Ancient Weaving Techniques',
    titleAr: 'إحياء تقنيات النسيج القديمة',
    excerpt: 'Traditional weaving methods making a comeback in contemporary design...',
    excerptAr: 'طرق النسيج التقليدية تعود في التصميم المعاصر...',
    content: 'Learn about the renaissance of traditional weaving techniques and their impact on modern textile design.',
    contentAr: 'تعلم عن نهضة تقنيات النسيج التقليدية وتأثيرها على تصميم المنسوجات الحديثة.',
    image: '/api/placeholder/600/400',
    category: 'Textiles',
    categoryAr: 'المنسوجات',
    author: 'Emma Wilson',
    authorAr: 'إيما ويلسون',
    publishDate: '2024-01-10',
    readTime: 10,
    featured: true
  },
  {
    id: '4',
    title: 'Jewelry Making: From Sketch to Sparkle',
    titleAr: 'صناعة المجوهرات: من الرسم إلى البريق',
    excerpt: 'Behind the scenes of handcrafted jewelry creation...',
    excerptAr: 'خلف كواليس إبداع المجوهرات المصنوعة يدوياً...',
    content: 'Take a journey through the intricate process of creating handmade jewelry from initial design to finished piece.',
    contentAr: 'قم برحلة عبر العملية المعقدة لإنشاء المجوهرات المصنوعة يدوياً من التصميم الأولي إلى القطعة النهائية.',
    image: '/api/placeholder/600/400',
    category: 'Jewelry',
    categoryAr: 'المجوهرات',
    author: 'David Martinez',
    authorAr: 'ديفيد مارتينيز',
    publishDate: '2024-01-08',
    readTime: 7,
    featured: false
  }
];

export default function BlogSection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    if (language === 'ar') {
      return date.toLocaleDateString('ar-SA', options);
    }
    return date.toLocaleDateString('en-US', options);
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>{language === 'ar' ? 'مدونتنا' : 'Our Blog'}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'قصص من عالم الحرف' : 'Stories from the World of Crafts'}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'اكتشف أسرار الصناعات اليدوية وتعلم من خبرات الحرفيين حول العالم من خلال مقالاتنا الملهمة'
              : 'Discover the secrets of handcrafts and learn from artisans\' experiences around the world through our inspiring articles'
            }
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-primary text-primary-foreground">
                    {language === 'ar' ? 'مميز' : 'Featured'}
                  </Badge>
                </div>

                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={language === 'ar' ? post.titleAr : post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="text-xs">
                      {language === 'ar' ? post.categoryAr : post.category}
                    </Badge>
                    
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishDate)}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} {language === 'ar' ? 'دقائق' : 'min read'}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {language === 'ar' ? post.titleAr : post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground line-clamp-3">
                    {language === 'ar' ? post.contentAr : post.content}
                  </p>

                  {/* Author & Read More */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {language === 'ar' ? post.authorAr : post.author}
                      </span>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    >
                      {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} transition-transform duration-300 group-hover/btn:translate-x-1`} />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={language === 'ar' ? post.titleAr : post.title}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {language === 'ar' ? post.categoryAr : post.category}
                    </Badge>
                    <span>{formatDate(post.publishDate)}</span>
                    <span>{post.readTime} {language === 'ar' ? 'دقائق' : 'min'}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-semibold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {language === 'ar' ? post.titleAr : post.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {language === 'ar' ? post.excerptAr : post.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
          >
            {language === 'ar' ? 'عرض جميع المقالات' : 'View All Articles'}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}