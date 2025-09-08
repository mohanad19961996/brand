import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from './LanguageContext';
import { useTranslations } from './translations';

interface Product {
  id: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  rating: number;
  reviews: number;
  category: string;
  categoryAr: string;
  badge?: string;
  badgeAr?: string;
  description: string;
  descriptionAr: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export default function ProductCard({ 
  product, 
  className = '', 
  onQuickView, 
  onAddToCart, 
  onAddToWishlist 
}: ProductCardProps) {
  const { language, isRTL } = useLanguage();
  const t = useTranslations(language);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onAddToWishlist?.(product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.(product);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickView?.(product);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm border border-border/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30">
        {/* Image Container */}
        <div className="relative aspect-[4/3] max-h-[250px] overflow-hidden">
          {/* Main Image */}
          <img
            src={product.image}
            alt={language === 'ar' ? product.nameAr : product.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered && product.hoverImage ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            } ${imageLoaded ? 'blur-0' : 'blur-sm'}`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Hover Image */}
          {product.hoverImage && (
            <img
              src={product.hoverImage}
              alt={language === 'ar' ? product.nameAr : product.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
            />
          )}

          {/* Overlay with Actions */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {/* Action Buttons */}
            <div className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-3 flex flex-col gap-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}>
              <Button
                size="sm"
                variant="ghost"
                className="w-8 h-8 p-0 bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                onClick={handleWishlistToggle}
              >
                <Heart 
                  className={`w-4 h-4 transition-all duration-300 ${
                    isWishlisted ? 'fill-red-500 text-red-500 scale-110' : ''
                  }`} 
                />
              </Button>
              
              <Button
                size="sm"
                variant="ghost"
                className="w-8 h-8 p-0 bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                onClick={handleQuickView}
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>

            {/* Add to Cart Button */}
            <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <Button
                className="w-full bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground transition-all duration-300 hover:scale-105"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {t.addToCart}
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                {language === 'ar' ? product.badgeAr : product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
                -{discount}%
              </span>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            {language === 'ar' ? product.categoryAr : product.category}
          </p>

          {/* Product Name */}
          <h3 className="font-medium text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {language === 'ar' ? product.nameAr : product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : star <= product.rating
                      ? 'fill-yellow-400/50 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary">
              {product.price} {t.currency}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {product.originalPrice} {t.currency}
              </span>
            )}
          </div>

          {/* Quick Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {language === 'ar' ? product.descriptionAr : product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}