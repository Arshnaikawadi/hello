import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sun, GraduationCap } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.solarEnergy, href: '#solar-energy' },
    { name: t.nav.solarPanels, href: '#solar-panels' },
    { name: t.nav.solarPump, href: '#solar-pump' },
    { name: t.nav.benefits, href: '#benefits' },
    { name: t.nav.calculator, href: '#calculator' },
    { name: t.nav.schemes, href: '#schemes' },
    { name: t.nav.maintenance, href: '#maintenance' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-emerald-950 text-white pt-12 pb-8 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-emerald-900/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-xl shadow">
                ☀️
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Solar<span className="text-amber-400">Saathi</span>
                </span>
                <p className="text-xs text-amber-300 font-medium">
                  {t.footer.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-200/90 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-emerald-900/90 text-amber-300 px-3 py-1.5 rounded-full border border-emerald-700/60">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>{t.footer.academicTitle}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinksTitle}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-emerald-300 hover:text-amber-300 transition-colors py-1 flex items-center gap-1"
                >
                  <span className="text-amber-400">›</span> {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* College Project Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.academicTitle}
            </h4>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              {t.footer.academicDesc}
            </p>
            <div className="p-3 bg-emerald-900/60 rounded-xl border border-emerald-800 text-[11px] text-amber-300">
              🌱 Developed for Smart Farming, Sustainability, and Clean Energy Awareness.
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400 gap-4">
          <p>{t.footer.copyright}</p>
          <p className="flex items-center gap-1.5 text-emerald-300">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Academic Mini Project Presentation</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
