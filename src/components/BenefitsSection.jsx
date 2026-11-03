import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Sun,
  ZapOff,
  Droplets,
  Sprout,
  Wrench,
  MapPin,
} from 'lucide-react';

const iconMap = {
  Sun: Sun,
  ZapOff: ZapOff,
  Droplets: Droplets,
  Sprout: Sprout,
  Wrench: Wrench,
  MapPin: MapPin,
};

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="benefits" className="py-16 bg-slate-50/70 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            🌟 {t.benefits.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.benefits.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.list.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Sun;

            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm hover:border-amber-400 transition-all card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl mb-4">
                    <IconComp className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-emerald-800/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Advantage for Farmers</span>
                  <span className="bg-emerald-50 px-2.5 py-0.5 rounded-full text-emerald-800">
                    Benefit 0{idx + 1}
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
