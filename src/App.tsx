import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import HeroSection from "./components/HeroSection";
import CollectionsSection from "./components/CollectionsSection";
import FeaturedProductsSection from "./components/FeaturedProductsSection";
import BrandStorySection from "./components/BrandStorySection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";

function AppContent() {
  const { language } = useLanguage();

  // Update document title based on language
  useEffect(() => {
    document.title = language === 'ar' 
      ? 'متجر الحرفيين - أصالة الصناعة اليدوية'
      : 'Artisan Store - Authentic Handcrafted Products';
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Collections Section */}
        <section id="collections">
          <CollectionsSection />
        </section>

        {/* Featured Products Section */}
        <section id="featured">
          <FeaturedProductsSection />
        </section>

        {/* Brand Story Section */}
        <section id="story">
          <BrandStorySection />
        </section>

        {/* Blog Section */}
        <section id="blog">
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}