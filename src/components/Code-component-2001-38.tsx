import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';

const collections = [
  {
    id: 'jewelry',
    name: 'Handmade Jewelry',
    nameAr: 'المجوهرات اليدوية',
    description: 'Exquisite pieces crafted with precious metals and stones',
    descriptionAr: 'قطع رائعة مصنوعة من المعادن الثمينة والأحجار الكريمة',
    image: '/api/placeholder/400/500',
    productCount: 124,
    featured: true,
    color: 'from-amber-500/20 to-amber-600/10'
  },
  {
    id: 'leather',
    name: 'Leather Goods',
    nameAr: 'المنتجات الجلدية',
    description: 'Premium leather accessories for modern lifestyle',
    descriptionAr: 'إكسسوارات جلدية فاخرة لنمط حياة عصري',
    image: '/api/placeholder/400/500',
    productCount: 87,
    featured: false,
    color: 'from-amber-800/20 to-amber-900/10'
  },
  {
    id: 'ceramics',
    name: 'Ceramics & Pottery',
    nameAr: 'السيراميك والفخار',
    description: 'Beautiful handcrafted ceramic pieces for your home',
    descriptionAr: 'قطع سيراميك يدوية جميلة لمنزلك',
    image: '/api/placeholder/400/500',
    productCount: 156,
    featured: true,
    color: 'from-blue-500/20 to-blue-600/10'
  },
  {
    id: 'textiles',
    name: 'Textiles & Fabrics',
    nameAr: 'المنسوجات والأقمشة',
    description: 'Traditional and modern textile artworks',
    descriptionAr: 'أعمال نسيجية تقليدية وعصرية',
    image: '/api/placeholder/400/500',
    productCount: 93,
    featured: false,
    color: 'from-green-500/20 to-green-600/10'
  },
  {
    id: 'homeDecor',
    name: 'Home Decor',
    nameAr: 'ديكور المنزل',
    description: 'Unique decorative pieces to enhance your space',
    descriptionAr: 'قطع ديكور فريدة لتجميل مساحتك',
    image: '/api/placeholder/400/500',
    productCount: 203,
    featured: true,
    color: 'from-purple-500/20 to-purple-600/10'
  },
  {
    id: 'artworks',
    name: 'Original Artworks',
    nameAr: 'الأعمال الفنية الأصلية',
    description: 'One-of-a-kind artistic creations',
    descriptionAr: 'إبداعات فنية فريدة من نوعها',
    image: '/api/placeholder/400/500',
    productCount: 67,
    featured: false,
    color: 'from-rose-500/20 to-rose-600/10'
  }
];

export default function CollectionsSection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'مجموعاتنا المميزة' : 'Our Featured Collections'}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'استكشف عالم الحرف اليدوية' : 'Explore the World of Handcrafts'}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'ar' 
                ? 'اكتشف مجموعاتنا المتنوعة من المنتجات اليدوية المصنوعة بعناية وحب من أمهر الحرفيين حول العالم'
                : 'Discover our diverse collections of handmade products crafted with care and love by the most skilled artisans around the world'
              }
            </p>
          </motion.div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                collection.featured ? 'lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Background Image */}
                <ImageWithFallback
                  src={collection.image}
                  alt={language === 'ar' ? collection.nameAr : collection.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent`}></div>
                
                {/* Color Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    {/* Featured Badge */}
                    {collection.featured && (
                      <motion.div
                        className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-3"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-3 h-3" />
                        {language === 'ar' ? 'مميز' : 'Featured'}
                      </motion.div>
                    )}

                    {/* Collection Info */}
                    <div className="text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary-foreground transition-colors duration-300">
                        {language === 'ar' ? collection.nameAr : collection.name}
                      </h3>
                      
                      <p className="text-white/90 text-sm mb-3 line-clamp-2">
                        {language === 'ar' ? collection.descriptionAr : collection.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">
                          {collection.productCount} {language === 'ar' ? 'منتج' : 'Products'}
                        </span>
                        
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:text-primary-foreground hover:bg-primary/20 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-1"
                        >
                          {language === 'ar' ? 'تصفح' : 'Browse'}
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'} transition-transform duration-300`} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect - Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Collections Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
          >
            {language === 'ar' ? 'عرض جميع المجموعات' : 'View All Collections'}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}