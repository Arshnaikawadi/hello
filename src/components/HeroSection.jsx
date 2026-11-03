import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sun, ArrowRight, Calculator, Leaf, Sparkles, CheckCircle2, ShieldCheck, Droplet } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:py-20 bg-gradient-to-b from-emerald-50/70 via-white to-amber-50/30 overflow-hidden">
      {/* Decorative Background Blur Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
                <Leaf className="w-3.5 h-3.5 text-emerald-700" />
                {t.hero.badge1}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold border border-amber-200">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                {t.hero.badge2}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-950 text-xs font-bold border border-cyan-200">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                {t.hero.badge3}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-emerald-950 tracking-tight leading-[1.15]">
              {t.hero.heading}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-emerald-900/85 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.hero.subheading}
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('#solar-energy')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-700/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-5 h-5 text-amber-300" />
              </button>

              <button
                onClick={() => handleScrollTo('#calculator')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-base shadow-lg shadow-amber-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Calculator className="w-5 h-5 text-emerald-950" />
                <span>{t.hero.calculatorBtn}</span>
              </button>
            </div>

            {/* Quick Feature Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-emerald-100 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-sm text-center">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-1.5">
                  <Sun className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-xs font-bold text-emerald-950">{t.hero.solarFeature1Title}</div>
                <div className="text-[11px] text-emerald-700 mt-0.5">{t.hero.solarFeature1Desc}</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-sm text-center">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                </div>
                <div className="text-xs font-bold text-emerald-950">{t.hero.solarFeature2Title}</div>
                <div className="text-[11px] text-emerald-700 mt-0.5">{t.hero.solarFeature2Desc}</div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-sm text-center">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center mx-auto mb-1.5">
                  <Droplet className="w-4 h-4 text-cyan-700" />
                </div>
                <div className="text-xs font-bold text-emerald-950">{t.hero.solarFeature3Title}</div>
                <div className="text-[11px] text-emerald-700 mt-0.5">{t.hero.solarFeature3Desc}</div>
              </div>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 rounded-3xl opacity-30 blur-xl animate-pulse" />

              {/* Main Card with High-Quality Photo */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl border border-emerald-200 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-emerald-900">
                  <img
                    src="/farmer-solar-field.jpg"
                    alt="Indian farmer with solar panels and water pump in green agricultural field"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  
                  {/* Floating Badges Over Image */}
                  <div className="absolute top-3 left-3 bg-emerald-950/85 backdrop-blur-md text-white px-3 py-1.5 rounded-xl border border-emerald-700/60 shadow flex items-center gap-2">
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-semibold">100% Sun-Powered Irrigation</span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-amber-500/95 backdrop-blur-md text-emerald-950 px-3 py-1.5 rounded-xl border border-amber-300 shadow font-bold text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                    <span>Zero Electricity Bills</span>
                  </div>
                </div>

                {/* Subtitle / Caption beneath photo */}
                <div className="p-3 bg-emerald-50/70 rounded-xl mt-2 flex items-center justify-between text-xs text-emerald-900">
                  <span className="font-medium flex items-center gap-1.5">
                    🌾 {t.hero.farmerCaption}
                  </span>
                  <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md text-[10px] shrink-0">
                    Indian Agriculture
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
