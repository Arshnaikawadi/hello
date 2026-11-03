import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Grid, Zap, Tractor, CheckCircle2, ArrowRight, Lightbulb, RefreshCw, Sprout } from 'lucide-react';

const diagramIcons = {
  Sun: Sun,
  Grid: Grid,
  Zap: Zap,
  Tractor: Tractor,
};

export const SolarEnergySection = () => {
  const { t } = useLanguage();

  return (
    <section id="solar-energy" className="py-16 bg-slate-50/70 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            ☀️ {t.solarEnergy.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.solarEnergy.title}
          </h2>
        </div>

        {/* Core Definition Banner */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-300 shadow-md mb-12">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
              ☀️
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-950">
                {t.solarEnergy.title}
              </h3>
              <p className="text-base sm:text-lg text-emerald-900 leading-relaxed font-medium">
                {t.solarEnergy.definition}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Educational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Pillar 1: Why is it useful? */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">
                {t.solarEnergy.whyUsefulTitle}
              </h3>
              <p className="text-sm text-emerald-800/90 leading-relaxed">
                {t.solarEnergy.whyUsefulText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-50 text-xs font-semibold text-emerald-700">
              ✓ Reliable Daily Power
            </div>
          </div>

          {/* Pillar 2: Renewable Energy Concept */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">
                {t.solarEnergy.renewableTitle}
              </h3>
              <p className="text-sm text-emerald-800/90 leading-relaxed">
                {t.solarEnergy.renewableText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-50 text-xs font-semibold text-amber-700">
              ✓ 100% Endless & Clean
            </div>
          </div>

          {/* Pillar 3: Importance in Agriculture */}
          <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-900 flex items-center justify-center mb-4">
                <Sprout className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-lg font-bold text-emerald-950 mb-2">
                {t.solarEnergy.agriImportanceTitle}
              </h3>
              <p className="text-sm text-emerald-800/90 leading-relaxed">
                {t.solarEnergy.agriImportanceText}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-50 text-xs font-semibold text-cyan-700">
              ✓ High Crop Yields
            </div>
          </div>

        </div>

        {/* Simple Working Diagram: Sunlight → Solar Panel → Electricity → Farm Use */}
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 p-6 sm:p-10 rounded-3xl shadow-xl text-white">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {t.solarEnergy.diagramTitle}
            </h3>
            <p className="text-sm text-amber-300 mt-1">
              {t.solarEnergy.diagramSubtitle}
            </p>
          </div>

          {/* Diagram Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {t.solarEnergy.steps.map((step, idx) => {
              const IconComp = diagramIcons[step.icon] || Sun;

              return (
                <div key={idx} className="relative flex flex-col items-center">
                  <div className="w-full bg-emerald-950/90 p-5 rounded-2xl border border-emerald-700/60 text-center flex flex-col items-center space-y-3 hover:border-amber-400 transition-all hover:scale-105">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold shadow-md">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                        Step 0{idx + 1}
                      </span>
                      <h4 className="font-bold text-base text-white mt-1">
                        {step.label}
                      </h4>
                      <p className="text-xs text-emerald-200 mt-1 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {idx < t.solarEnergy.steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-amber-500 text-emerald-950 items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 font-bold" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-emerald-700/50 text-center text-xs text-amber-300 font-semibold tracking-wide">
            ☀️ Sunlight ➔ ⚡ Solar Panel ➔ 🔌 Electricity ➔ 🚜 Farm Use
          </div>
        </div>

      </div>
    </section>
  );
};
