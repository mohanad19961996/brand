import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
  Send,
  Shield,
  Truck,
  RefreshCw,
  CreditCard
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';

const footerLinks = {
  quickLinks: [
    { label: 'About Us', labelAr: 'من نحن', href: '#story' },
    { label: 'Collections', labelAr: 'المجموعات', href: '#collections' },
    { label: 'Blog', labelAr: 'المدونة', href: '#blog' },
    { label: 'Contact', labelAr: 'تواصل معنا', href: '#contact' }
  ],
  customerService: [
    { label: 'FAQ', labelAr: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'Shipping Info', labelAr: 'معلومات الشحن', href: '#shipping' },
    { label: 'Returns', labelAr: 'الإرجاع', href: '#returns' },
    { label: 'Size Guide', labelAr: 'دليل المقاسات', href: '#size-guide' },
    { label: 'Track Order', labelAr: 'تتبع الطلب', href: '#track' }
  ],
  legal: [
    { label: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '#privacy' },
    { label: 'Terms of Service', labelAr: 'شروط الخدمة', href: '#terms' },
    { label: 'Cookie Policy', labelAr: 'سياسة الكوكيز', href: '#cookies' }
  ]
};

const socialLinks = [
  { 
    icon: Instagram, 
    href: '#', 
    color: 'hover:text-pink-400',
    name: 'Instagram'
  },
  { 
    icon: Facebook, 
    href: '#', 
    color: 'hover:text-blue-400',
    name: 'Facebook'
  },
  { 
    icon: Twitter, 
    href: '#', 
    color: 'hover:text-sky-400',
    name: 'Twitter'
  },
  { 
    icon: Youtube, 
    href: '#', 
    color: 'hover:text-red-400',
    name: 'YouTube'
  }
];

const trustFeatures = [
  {
    icon: Shield,
    title: 'Secure Payment',
    titleAr: 'دفع آمن',
    color: 'text-green-500'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    titleAr: 'شحن مجاني',
    color: 'text-blue-500'
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    titleAr: 'إرجاع سهل',
    color: 'text-purple-500'
  },
  {
    icon: CreditCard,
    title: 'Payment Options',
    titleAr: 'خيارات الدفع',
    color: 'text-orange-500'
  }
];

export default function Footer() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);

  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border/50">
      {/* Trust Features */}
      <div className="border-b border-border/50 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon className={`w-5 h-5 ${feature.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {language === 'ar' ? feature.titleAr : feature.title}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-primary">
                {language === 'ar' ? 'متجر الحرفيين' : 'Artisan Store'}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {language === 'ar' 
                ? 'نحن متجر متخصص في المنتجات اليدوية الفاخرة، نؤمن بجودة الصناعة التقليدية والتصاميم الفريدة.'
                : 'We are a store specialized in luxury handmade products, believing in the quality of traditional craftsmanship and unique designs.'
              }
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@artisanstore.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Artisan Street, Craft City</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <nav className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {language === 'ar' ? link.labelAr : link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'خدمة العملاء' : 'Customer Service'}
            </h3>
            <nav className="space-y-3">
              {footerLinks.customerService.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {language === 'ar' ? link.labelAr : link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold">
              {language === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
            </h3>
            
            <p className="text-muted-foreground text-sm">
              {language === 'ar' 
                ? 'اشترك للحصول على آخر العروض والمنتجات الجديدة'
                : 'Subscribe to get the latest offers and new products'
              }
            </p>

            <div className="space-y-3">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email address'}
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
                <Button 
                  size="icon"
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground">
                {language === 'ar' 
                  ? 'نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'
                  : 'We respect your privacy. You can unsubscribe at any time.'
                }
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-muted-foreground"
          >
            <span>
              {language === 'ar' 
                ? `© ${new Date().getFullYear()} متجر الحرفيين. جميع الحقوق محفوظة. صُنع بحب`
                : `© ${new Date().getFullYear()} Artisan Store. All rights reserved. Made with`
              }
            </span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            {language === 'en' && <span>for artisans worldwide</span>}
            {language === 'ar' && <span>للحرفيين حول العالم</span>}
          </motion.div>

          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {footerLinks.legal.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {language === 'ar' ? link.labelAr : link.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </div>
    </footer>
  );
}