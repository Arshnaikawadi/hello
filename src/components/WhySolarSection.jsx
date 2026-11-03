import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Leaf, Cpu, Droplets, Globe } from 'lucide-react';

const iconMap = {
  Leaf: Leaf,
  Cpu: Cpu,
  Droplets: Droplets,
  Globe: Globe,
};

export const WhySolarSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
            ☀️ {t.whySolar.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {t.whySolar.title}
          </h2>
          <p className="mt-2 text-base text-emerald-200 font-medium">
            {t.whySolar.subtitle}
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whySolar.cards.map((card, idx) => {
            const IconComp = iconMap[card.icon] || Leaf;

            return (
              <div
                key={idx}
                className="bg-emerald-950/80 p-6 rounded-3xl border border-emerald-700/60 hover:border-amber-400 transition-all hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-emerald-800/80 text-[11px] text-amber-300 font-semibold">
                  Core Agricultural Pillar 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
