import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Menu, X, Globe, GraduationCap } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.solarEnergy, href: '#solar-energy' },
    { name: t.nav.solarPanels, href: '#solar-panels' },
    { name: t.nav.solarPump, href: '#solar-pump' },
    { name: t.nav.uses, href: '#uses' },
    { name: t.nav.benefits, href: '#benefits' },
    { name: t.nav.schemes, href: '#schemes' },
    { name: t.nav.calculator, href: '#calculator' },
    { name: t.nav.maintenance, href: '#maintenance' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-950 font-sans">
                  Solar<span className="text-amber-500">Saathi</span>
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 text-[11px] font-medium bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  <GraduationCap className="w-3 h-3" />
                  {t.nav.collegeProjectBadge}
                </span>
              </div>
              <p className="text-[11px] text-emerald-700 font-medium hidden sm:block leading-tight">
                {t.nav.brandTagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-2.5 py-1.5 rounded-lg text-sm font-medium text-emerald-900 hover:text-amber-600 hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher & Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language Selector Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-105"
              title="Switch Language / भाषा बदला"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-amber-300" />
              <span>{t.nav.language}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-emerald-900 hover:bg-emerald-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-emerald-100 bg-white rounded-2xl p-4 shadow-xl border">
            <div className="flex items-center justify-between mb-3 px-2">
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                🎓 {t.nav.collegeProjectBadge}
              </span>
              <span className="text-xs text-amber-700 font-medium">
                ☀️ Solar Energy Guide
              </span>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-emerald-950 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-emerald-400 text-xs">➔</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
