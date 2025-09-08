import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Star, Flame } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';
import ProductCard from './ProductCard';

// Mock product data
const products = [
  {
    id: '1',
    name: 'Handwoven Silk Scarf',
    nameAr: 'وشاح حريري منسوج يدوياً',
    price: 189,
    originalPrice: 249,
    image: 'https://images.unsplash.com/photo-1713328471111-4e4a89a29a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxrJTIwc2NhcmYlMjBoYW5kd292ZW4lMjB0ZXh0aWxlfGVufDF8fHx8MTc1NzMyNzk5MHww&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1593671186131-d58817e7dee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWF2aW5nJTIwdGV4dGlsZXMlMjB0cmFkaXRpb25hbCUyMGNyYWZ0c3xlbnwxfHx8fDE3NTczMjc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=300',
    rating: 4.8,
    reviews: 124,
    category: 'Textiles',
    categoryAr: 'المنسوجات',
    badge: 'Bestseller',
    badgeAr: 'الأكثر مبيعاً',
    description: 'Luxurious handwoven silk scarf with traditional patterns',
    descriptionAr: 'وشاح حريري فاخر منسوج يدوياً بأنماط تقليدية',
    tab: 'bestsellers'
  },
  {
    id: '2',
    name: 'Ceramic Vase - Blue',
    nameAr: 'مزهرية سيراميك زرقاء',
    price: 156,
    image: 'https://images.unsplash.com/photo-1629218091978-f70a20a43aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlJTIwY3JhZnRzfGVufDF8fHx8MTc1NzMyNzkxNnww&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1629218091978-f70a20a43aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlJTIwY3JhZnRzfGVufDF8fHx8MTc1NzMyNzkxNnww&ixlib=rb-4.1.0&q=80&w=300',
    rating: 4.9,
    reviews: 89,
    category: 'Ceramics',
    categoryAr: 'السيراميك',
    badge: 'New',
    badgeAr: 'جديد',
    description: 'Elegant ceramic vase perfect for home decoration',
    descriptionAr: 'مزهrية سيراميك أنيقة مثالية لديكور المنزل',
    tab: 'new'
  },
  {
    id: '3',
    name: 'Leather Wallet - Brown',
    nameAr: 'محفظة جلدية بنية',
    price: 78,
    originalPrice: 95,
    image: 'https://images.unsplash.com/photo-1662122233713-a302ca091776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsZWF0aGVyJTIwZ29vZHMlMjBoYW5kY3JhZnRlZCUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NzMyNzkyMXww&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1662122233713-a302ca091776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxsZWF0aGVyJTIwZ29vZHMlMjBoYW5kY3JhZnRlZCUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc1NzMyNzkyMXww&ixlib=rb-4.1.0&q=80&w=300',
    rating: 4.7,
    reviews: 156,
    category: 'Leather Goods',
    categoryAr: 'المنتجات الجلدية',
    description: 'Premium leather wallet with multiple card slots',
    descriptionAr: 'محفظة جلدية فاخرة مع عدة فتحات للبطاقات',
    tab: 'trending'
  },
  {
    id: '4',
    name: 'Silver Ring - Turquoise',
    nameAr: 'خاتم فضي بحجر الفيروز',
    price: 234,
    image: 'https://images.unsplash.com/photo-1722963295947-c6f8f1c50de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU3MzI3OTExfDA&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1722963295947-c6f8f1c50de2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc2FuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzU3MzI3OTExfDA&ixlib=rb-4.1.0&q=80&w=300',
    rating: 5.0,
    reviews: 67,
    category: 'Jewelry',
    categoryAr: 'المجوهرات',
    badge: 'Limited',
    badgeAr: 'محدود',
    description: 'Handcrafted silver ring with genuine turquoise stone',
    descriptionAr: 'خاتم فضي مصنوع يدوياً بحجر فيروز أصلي',
    tab: 'bestsellers'
  },
  {
    id: '5',
    name: 'Wooden Sculpture',
    nameAr: 'منحوتة خشبية',
    price: 312,
    image: 'https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpc2FuJTIwd29ya2luZyUyMGhhbmRtYWRlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU3MzI3OTMwfDA&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1606077089119-92075161bb60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcnRpc2FuJTIwd29ya2luZyUyMGhhbmRtYWRlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU3MzI3OTMwfDA&ixlib=rb-4.1.0&q=80&w=300',
    rating: 4.6,
    reviews: 43,
    category: 'Artworks',
    categoryAr: 'الأعمال الفنية',
    description: 'Unique wooden sculpture carved by master artisan',
    descriptionAr: 'منحوتة خشبية فريدة منحوتة من قبل حرفي ماهر',
    tab: 'new'
  },
  {
    id: '6',
    name: 'Embroidered Cushion',
    nameAr: 'وسادة مطرزة',
    price: 67,
    originalPrice: 84,
    image: 'https://images.unsplash.com/photo-1718939042031-6c6b5a99ebaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwZGVjb3IlMjBoYW5kY3JhZnRlZCUyMHdvb2RlbnxlbnwxfHx8fDE3NTczMjc5MzV8MA&ixlib=rb-4.1.0&q=80&w=300',
    hoverImage: 'https://images.unsplash.com/photo-1718939042031-6c6b5a99ebaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob21lJTIwZGVjb3IlMjBoYW5kY3JhZnRlZCUyMHdvb2RlbnxlbnwxfHx8fDE3NTczMjc5MzV8MA&ixlib=rb-4.1.0&q=80&w=300',
    rating: 4.4,
    reviews: 92,
    category: 'Home Decor',
    categoryAr: 'ديكور المنزل',
    description: 'Beautiful embroidered cushion with traditional motifs',
    descriptionAr: 'وسادة مطرزة جميلة بزخارف تقليدية',
    tab: 'trending'
  }
];

const tabs = [
  {
    id: 'bestsellers',
    label: 'Bestsellers',
    labelAr: 'الأكثر مبيعاً',
    icon: TrendingUp,
    color: 'text-green-600'
  },
  {
    id: 'new',
    label: 'New Arrivals',
    labelAr: 'الوافدين الجدد',
    icon: Star,
    color: 'text-blue-600'
  },
  {
    id: 'trending',
    label: 'Trending',
    labelAr: 'الرائج',
    icon: Flame,
    color: 'text-orange-600'
  }
];

export default function FeaturedProductsSection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);
  const [activeTab, setActiveTab] = useState('bestsellers');

  const getProductsByTab = (tabId: string) => {
    return products.filter(product => product.tab === tabId);
  };

  const handleQuickView = (product: any) => {
    console.log('Quick view:', product);
    // Implement quick view modal
  };

  const handleAddToCart = (product: any) => {
    console.log('Add to cart:', product);
    // Implement add to cart functionality
  };

  const handleAddToWishlist = (product: any) => {
    console.log('Add to wishlist:', product);
    // Implement wishlist functionality
  };

  return (
    <section className="py-20 bg-background">
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
            <Star className="w-4 h-4 fill-current" />
            <span>{language === 'ar' ? 'منتجاتنا المميزة' : 'Our Featured Products'}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'اكتشف الجودة الاستثنائية' : 'Discover Exceptional Quality'}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'مجموعة منتقاة بعناية من أفضل منتجاتنا اليدوية التي تجمع بين الجودة العالية والتصميم الفريد'
              : 'A carefully curated collection of our finest handmade products that combine high quality with unique design'
            }
          </p>
        </motion.div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-md h-14 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-xl p-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 data-[state=active]:bg-background data-[state=active]:shadow-md data-[state=active]:text-primary"
                    >
                      <Icon className={`w-4 h-4 ${activeTab === tab.id ? tab.color : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">
                        {language === 'ar' ? tab.labelAr : tab.label}
                      </span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Content */}
            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {getProductsByTab(tab.id).map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.1 
                      }}
                    >
                      <ProductCard
                        product={product}
                        onQuickView={handleQuickView}
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
          >
            {language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} transition-transform duration-300 group-hover:translate-x-1`} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}