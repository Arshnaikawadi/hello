import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sun,
  Zap,
  Droplets,
  TrendingUp,
  ShieldCheck,
  Calculator,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';

const iconMap = {
  Sun: Sun,
  Zap: Zap,
  Droplets: Droplets,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck,
  Calculator: Calculator,
  Wrench: Wrench,
};

export const QuickFeatures = () => {
  const { t } = useLanguage();

  const handleCardClick = (id) => {
    const el = document.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            🚀 Quick Guide Index
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight mt-2">
            {t.quickFeatures.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800/90 font-normal">
            {t.quickFeatures.subtitle}
          </p>
        </div>

        {/* 7 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.quickFeatures.cards.map((card, idx) => {
            const IconComponent = iconMap[card.icon] || Sun;
            const isCalculator = card.id === 'calculator';

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`group relative p-6 rounded-3xl border transition-all cursor-pointer card-shadow-hover flex flex-col justify-between ${
                  isCalculator
                    ? 'border-amber-400 bg-gradient-to-br from-amber-50/60 via-white to-amber-100/40 hover:border-amber-500'
                    : 'bg-white border-emerald-100 hover:border-emerald-300'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isCalculator
                          ? 'bg-amber-500 text-emerald-950 shadow-md shadow-amber-500/20'
                          : 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-bold text-emerald-800/70 bg-emerald-50 px-2.5 py-1 rounded-full">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-800/80 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Action Button Link */}
                <div className="mt-6 pt-4 border-t border-emerald-50 flex items-center justify-between text-sm font-semibold text-emerald-800 group-hover:text-amber-600 transition-colors">
                  <span>{card.btnText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
