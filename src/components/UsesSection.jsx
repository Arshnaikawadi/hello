import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Droplet,
  Waves,
  Lightbulb,
  BatteryCharging,
  Cog,
  Zap,
} from 'lucide-react';

const iconMap = {
  Droplet: Droplet,
  Waves: Waves,
  Lightbulb: Lightbulb,
  BatteryCharging: BatteryCharging,
  Cog: Cog,
  Zap: Zap,
};

export const UsesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="uses" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            🚜 {t.uses.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.uses.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.uses.subtitle}
          </p>
        </div>

        {/* 6 Uses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.uses.cards.map((card, idx) => {
            const IconComp = iconMap[card.icon] || Droplet;

            return (
              <div
                key={idx}
                className="bg-emerald-50/40 p-6 rounded-3xl border border-emerald-100 hover:border-emerald-300 transition-all card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-amber-300 flex items-center justify-center shadow-md mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-800/85 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-emerald-100 text-xs font-semibold text-emerald-700 flex items-center justify-between">
                  <span>Farm Application</span>
                  <span className="bg-emerald-100 px-2 py-0.5 rounded-full text-emerald-800 font-bold">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
