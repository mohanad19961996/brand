import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';

const contactInfo = [
  {
    id: 'email',
    icon: Mail,
    title: 'Email Us',
    titleAr: 'راسلنا',
    value: 'hello@artisanstore.com',
    description: 'Send us an email anytime',
    descriptionAr: 'أرسل لنا بريد إلكتروني في أي وقت',
    color: 'text-blue-600'
  },
  {
    id: 'phone',
    icon: Phone,
    title: 'Call Us',
    titleAr: 'اتصل بنا',
    value: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 5pm',
    descriptionAr: 'الاثنين-الجمعة من 8ص إلى 5م',
    color: 'text-green-600'
  },
  {
    id: 'address',
    icon: MapPin,
    title: 'Visit Us',
    titleAr: 'زرنا',
    value: '123 Artisan Street, Craft City',
    description: 'Come see our workshop',
    descriptionAr: 'تعال لترى ورشتنا',
    color: 'text-purple-600'
  },
  {
    id: 'hours',
    icon: Clock,
    title: 'Working Hours',
    titleAr: 'ساعات العمل',
    value: 'Mon-Sat: 9AM - 6PM',
    description: 'Sunday: Closed',
    descriptionAr: 'الأحد: مغلق',
    color: 'text-orange-600'
  }
];

const socialLinks = [
  {
    id: 'instagram',
    icon: Instagram,
    href: '#',
    color: 'hover:text-pink-600'
  },
  {
    id: 'facebook',
    icon: Facebook,
    href: '#',
    color: 'hover:text-blue-600'
  },
  {
    id: 'twitter',
    icon: Twitter,
    href: '#',
    color: 'hover:text-sky-600'
  }
];

export default function ContactSection() {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
            <MessageCircle className="w-4 h-4" />
            <span>{language === 'ar' ? 'تواصل معنا' : 'Get in Touch'}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'نحن هنا لمساعدتك' : 'We\'re Here to Help'}
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {language === 'ar' 
              ? 'هل لديك سؤال حول منتجاتنا أو تحتاج مساعدة؟ تواصل معنا وسنكون سعداء لمساعدتك'
              : 'Have a question about our products or need assistance? Contact us and we\'ll be happy to help you'
            }
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                          <Icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                          {language === 'ar' ? info.titleAr : info.title}
                        </h4>
                        <p className="text-foreground font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {language === 'ar' ? info.descriptionAr : info.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-border/50"
            >
              <h4 className="text-lg font-semibold mb-4">
                {language === 'ar' ? 'تابعنا' : 'Follow Us'}
              </h4>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.id}
                      href={social.href}
                      className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-primary/20 hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/50">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder={language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">
                      {language === 'ar' ? 'الموضوع' : 'Subject'} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300"
                      placeholder={language === 'ar' ? 'أدخل موضوع الرسالة' : 'Enter message subject'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {language === 'ar' ? 'الرسالة' : 'Message'} *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary transition-all duration-300 resize-none"
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}