
import React from "react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Moon, Sun, Globe, Palette, Menu, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";



export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTheme, setCurrentTheme] = useState("purple");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();

  const themes = [
    {
      id: "default",
      name: "Default",
      colors: ["#030213", "#e9ebef", "#ececf0"]
    },
    {
      id: "ocean",
      name: "Ocean",
      colors: ["#0284c7", "#0ea5e9", "#7dd3fc"]
    },
    {
      id: "forest",
      name: "Forest",
      colors: ["#15803d", "#22c55e", "#86efac"]
    },
    {
      id: "sunset",
      name: "Sunset",
      colors: ["#dc2626", "#f97316", "#fbbf24"]
    },
    {
      id: "purple",
      name: "Purple",
      colors: ["#7c3aed", "#a855f7", "#c084fc"]
    },
    {
      id: "rose",
      name: "Rose",
      colors: ["#e11d48", "#f43f5e", "#fb7185"]
    }
  ];

  const applyTheme = (theme: typeof themes[0]) => {
    console.log('Applying theme:', theme.id);
    const root = document.documentElement;

    // Check if dark mode is active
    const isDark = document.documentElement.classList.contains('dark');
    console.log('Dark mode active:', isDark);

    // Remove ALL theme classes first
    themes.forEach(t => {
      root.classList.remove(`theme-${t.id}`);
    });
    console.log('All theme classes removed');

    // Force a reflow to ensure DOM updates on mobile
    root.offsetHeight; // Trigger reflow

    // Add the current theme class
    root.classList.add(`theme-${theme.id}`);
    console.log('Added theme class:', `theme-${theme.id}`);

    // Force another reflow and style recalculation
    root.offsetHeight;
    console.log('Final classes on root:', root.className);

    // Force style recalculation on mobile devices
    if ('ontouchstart' in window) {
      setTimeout(() => {
        window.getComputedStyle(root).getPropertyValue('--primary');
        console.log('Mobile style recalculation completed');
      }, 50);
    }

    switch (theme.id) {
      case "ocean":
        if (isDark) {
          root.style.setProperty('--primary', '#0ea5e9');
          root.style.setProperty('--accent', '#1e293b');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#0284c7');
          root.style.setProperty('--accent', '#e0f2fe');
          root.style.setProperty('--muted', '#f0f9ff');
        }
        break;
      case "forest":
        if (isDark) {
          root.style.setProperty('--primary', '#22c55e');
          root.style.setProperty('--accent', '#14532d');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#15803d');
          root.style.setProperty('--accent', '#dcfce7');
          root.style.setProperty('--muted', '#f0fdf4');
        }
        break;
      case "sunset":
        if (isDark) {
          root.style.setProperty('--primary', '#f97316');
          root.style.setProperty('--accent', '#451a03');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#dc2626');
          root.style.setProperty('--accent', '#fef2f2');
          root.style.setProperty('--muted', '#fef7f7');
        }
        break;
      case "purple":
        if (isDark) {
          root.style.setProperty('--primary', '#a855f7');
          root.style.setProperty('--accent', '#2e1065');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#7c3aed');
          root.style.setProperty('--accent', '#faf5ff');
          root.style.setProperty('--muted', '#fdfaff');
        }
        break;
      case "rose":
        if (isDark) {
          root.style.setProperty('--primary', '#f43f5e');
          root.style.setProperty('--accent', '#4c0519');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#e11d48');
          root.style.setProperty('--accent', '#fff1f2');
          root.style.setProperty('--muted', '#fef7f7');
        }
        break;
      default:
        if (isDark) {
          root.style.setProperty('--primary', '#a855f7');
          root.style.setProperty('--accent', '#2e1065');
          root.style.setProperty('--muted', '#0f172a');
        } else {
          root.style.setProperty('--primary', '#030213');
          root.style.setProperty('--accent', '#e9ebef');
          root.style.setProperty('--muted', '#ececf0');
        }
        break;
    }

    // Force a re-render by updating state
    setCurrentTheme(theme.id);
    console.log('Theme applied successfully:', theme.id);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Reapply current theme to get correct colors for new mode
    const currentThemeObj = themes.find(theme => theme.id === currentTheme);
    if (currentThemeObj) {
      applyTheme(currentThemeObj);
    }
  };

  useEffect(() => {
    // Check for saved dark mode preference or system preference
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedDarkMode ? savedDarkMode === 'true' : prefersDark;
    
    setIsDarkMode(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    }

    // Apply purple theme on mount
    const purpleTheme = themes.find(theme => theme.id === "purple");
    if (purpleTheme) {
      applyTheme(purpleTheme);
    }

    const handleScroll = () => {
      const sections = ["hero", "collections", "featured", "story", "blog", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isThemeDropdownOpen && !(event.target as Element).closest('.theme-dropdown')) {
        setIsThemeDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isThemeDropdownOpen]);

  const navItems = [
    { 
      id: "hero", 
      label: language === 'ar' ? "الرئيسية" : "Home" 
    },
    { 
      id: "collections", 
      label: language === 'ar' ? "المجموعات" : "Collections" 
    },
    { 
      id: "featured", 
      label: language === 'ar' ? "المنتجات المميزة" : "Featured" 
    },
    { 
      id: "story", 
      label: language === 'ar' ? "قصتنا" : "Our Story" 
    },
    { 
      id: "blog", 
      label: language === 'ar' ? "المدونة" : "Blog" 
    },
    { 
      id: "contact", 
      label: language === 'ar' ? "تواصل معنا" : "Contact" 
    }
  ];

  // Split navigation items: first 4 visible, rest in dropdown
  const visibleNavItems = navItems.slice(0, 4);
  const moreNavItems = navItems.slice(4);

  return (
    <nav className="fixed top-1 left-0 right-0 z-40 bg-primary/[0.075] backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed Left */}
          <div className="-ml-2 flex-shrink-0 cursor-pointer">
            <div className="flex items-center space-x-2 group hover:bg-primary/5 rounded-lg p-2 transition-all duration-300" style={{ marginRight: '30px' }}>
              <div className="w-7 h-7 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center transition-all duration-500 ease-in-out animate-pulse-rotate shadow-lg">
                <div className="w-2.5 h-2.5 bg-primary-foreground rounded-sm transition-all duration-300 group-hover:scale-125"></div>
              </div>
              <span 
                className="animate-logo-float text-lg font-semibold text-primary tracking-tight transition-all duration-300"
                style={{
                  transform: 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2) rotate(-8deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {language === 'ar' ? 'متجر الحرفيين' : 'Artisan Store'}
              </span>
            </div>
          </div>
          
          {/* Navigation Links - Always Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {/* Visible navigation items */}
                {visibleNavItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      relative px-2.5 py-1.5 rounded-md transition-all duration-300 text-sm font-medium cursor-pointer
                      hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10
                      ${activeSection === item.id 
                        ? 'text-black dark:text-white bg-gradient-to-br from-primary/5 to-primary/10' 
                        : 'text-black dark:text-white hover:text-primary hover:scale-105'
                      }
                    `}
                  >
                    {/* Active section top border */}
                    {activeSection === item.id && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        style={{
                          top: '0px',
                          width: '30px',
                          height: '2px'
                        }}
                      ></div>
                    )}
                    
                    {item.label}
                    
                    {/* Active section bottom border */}
                    {activeSection === item.id && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                        style={{
                          bottom: '0px',
                          width: '30px',
                          height: '2px'
                        }}
                      ></div>
                    )}
                  </a>
                ))}
                
                {/* More dropdown for remaining items */}
                {moreNavItems.length > 0 && (
                  <DropdownMenu 
                    onOpenChange={(open) => {
                      setIsMoreDropdownOpen(open);
                    }}
                  >
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`
                          relative px-2.5 py-1.5 rounded-md transition-all duration-300 text-sm font-medium cursor-pointer flex items-center gap-1
                          hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10
                          ${moreNavItems.some(item => activeSection === item.id)
                            ? 'text-black dark:text-white bg-gradient-to-br from-primary/5 to-primary/10' 
                            : 'text-black dark:text-white hover:text-primary hover:scale-105'
                          }
                        `}
                      >
                        {/* Active section indicator for dropdown */}
                        {moreNavItems.some(item => activeSection === item.id) && (
                          <>
                            <div 
                              className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                              style={{
                                top: '0px',
                                width: '30px',
                                height: '2px'
                              }}
                            ></div>
                            <div 
                              className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/70 rounded-full"
                              style={{
                                bottom: '0px',
                                width: '30px',
                                height: '2px'
                              }}
                            ></div>
                          </>
                        )}
                        
                        {language === 'ar' ? "المزيد" : "More"}
                        <ChevronDown className="w-3 h-3 transition-transform duration-200" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-40">
                      {moreNavItems.map((item) => (
                        <DropdownMenuItem key={item.id} asChild>
                          <a
                            href={`#${item.id}`}
                            className={`
                              w-full cursor-pointer transition-all duration-300 font-bold
                              ${activeSection === item.id 
                                ? 'text-primary bg-primary/10' 
                                : 'hover:text-primary'
                              }
                            `}
                          >
                            {item.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          </div>
          
          {/* Right side buttons - Always Visible */}
          <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'} flex-shrink-0`}  >
            {/* Language Toggle - Always Visible */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center space-x-1.5 px-2 py-1 text-xs font-medium cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:text-primary hover:shadow-sm group h-7 rounded-md border border-transparent hover:border-primary/20"
            >
              <Globe className="w-3 h-3 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <span className="text-xs transition-all duration-300 group-hover:text-primary">
                {language === 'ar' ? 'EN' : 'العربية'}
              </span>
              <div className="hidden xs:flex items-center space-x-0.5">
                <span className={`transition-all duration-300 text-xs ${language === 'ar' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  ع
                </span>
                <span className="text-muted-foreground/40 text-xs">|</span>
                <span className={`transition-all duration-300 text-xs ${language === 'en' ? 'text-primary font-semibold' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  EN
                </span>
              </div>
            </Button>

            {/* Theme Selector - Always Visible */}
            <div className="relative">
              <div className="group">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="flex items-center space-x-1.5 px-2 py-1 text-xs font-medium cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:text-primary hover:shadow-sm h-7 rounded-md border border-transparent hover:border-primary/20"
                >
                  <div className="flex items-center space-x-0.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="hidden xs:inline text-xs">{language === 'ar' ? 'المظهر' : 'Theme'}</span>
                </Button>
                
                {/* Theme Dropdown */}
                <div className={`theme-dropdown absolute top-full ${isRTL ? 'left-0' : 'right-0'} mt-2 w-48 bg-background/95 backdrop-blur-md border border-border/50 rounded-lg shadow-lg transition-all duration-300 z-50 ${
                  isThemeDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } group-hover:opacity-100 group-hover:visible`}>
                  <div className="p-3 space-y-2">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Theme button clicked on mobile:', theme.id);
                          console.log('Event type:', e.type);
                          console.log('Touch event?', 'touches' in e);
                          applyTheme(theme);
                          setIsThemeDropdownOpen(false);
                        }}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          console.log('Touch start on theme:', theme.id);
                          applyTheme(theme);
                          setIsThemeDropdownOpen(false);
                        }}
                        className={`
                          w-full flex items-center justify-between p-2 rounded-md transition-all duration-300 cursor-pointer
                          hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:scale-102 hover:shadow-sm hover:shadow-primary/5
                          ${currentTheme === theme.id ? 'bg-gradient-to-r from-primary/15 to-primary/10 text-primary shadow-sm' : 'hover:text-primary'}
                        `}
                      >
                        <span className="text-xs font-medium">
                          {language === 'ar' ? (
                            theme.id === 'default' ? 'افتراضي' :
                            theme.id === 'ocean' ? 'محيطي' :
                            theme.id === 'forest' ? 'غابة' :
                            theme.id === 'sunset' ? 'غروب' :
                            theme.id === 'purple' ? 'بنفسجي' :
                            theme.id === 'rose' ? 'وردي' : theme.name
                          ) : theme.name}
                        </span>
                        <div className="flex space-x-0.5">
                          {theme.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-2 h-2 rounded-full border border-border/20"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Toggle - Always Visible */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="p-1.5 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm hover:scale-105 hover:text-primary h-7 w-7 rounded-md border border-transparent hover:border-primary/20 group"
            >
              <div className="relative w-3 h-3">
                <Sun className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:rotate-12 ${isDarkMode ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                <Moon className={`absolute inset-0 w-3 h-3 transition-all duration-500 group-hover:-rotate-12 ${isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
              </div>
            </Button>
            
            {/* Mobile menu button - Only for navigation links */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                className="p-1.5 cursor-pointer hover:bg-primary/10 transition-all duration-300 hover:shadow-sm hover:scale-105 hover:text-primary h-7 w-7 rounded-md border border-transparent hover:border-primary/20 group"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className={`w-3.5 h-3.5 transition-all duration-300 group-hover:scale-110 ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Only for navigation links */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/50`}>
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                block px-4 py-3 rounded-lg transition-all duration-300 text-sm font-semibold cursor-pointer
                hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:translate-x-2 hover:shadow-md hover:shadow-primary/5
                ${activeSection === item.id 
                  ? 'text-foreground bg-gradient-to-r from-primary/15 to-primary/10 border-l-4 border-primary shadow-sm' 
                  : 'text-muted-foreground hover:text-primary hover:border-l-2 hover:border-primary/30'
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
