import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, Sun, Layers, ShieldCheck, Box, ArrowRight } from 'lucide-react';

export const SolarPanelSection = () => {
  const { t } = useLanguage();

  return (
    <section id="solar-panels" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            🔋 {t.solarPanel.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.solarPanel.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.solarPanel.intro}
          </p>
        </div>

        {/* Working Principle Banner: Sunlight → Photovoltaic Cells → Electrical Energy */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 p-4 sm:p-5 rounded-3xl shadow-md text-emerald-950 text-center">
          <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-950/70 block mb-1">
            Fundamental Conversion Flow
          </span>
          <div className="text-base sm:text-xl font-extrabold tracking-wide">
            {t.solarPanel.diagramBanner}
          </div>
        </div>

        {/* Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Text Explanations */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Photovoltaic Cells in simple language */}
            <div className="bg-emerald-50/60 p-6 sm:p-7 rounded-3xl border border-emerald-100 space-y-3">
              <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <Sun className="w-6 h-6 text-amber-500" />
                {t.solarPanel.pvCellsTitle}
              </h3>
              <p className="text-emerald-900 text-sm sm:text-base leading-relaxed">
                {t.solarPanel.pvCellsText}
              </p>
            </div>

            {/* Electricity Generation Process */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-emerald-100 shadow-sm space-y-3">
              <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-500" />
                {t.solarPanel.elecGenTitle}
              </h3>
              <p className="text-emerald-900 text-sm sm:text-base leading-relaxed">
                {t.solarPanel.elecGenText}
              </p>
            </div>

          </div>

          {/* Right Column: Labeled Illustration of Solar Panel */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 p-4 sm:p-6 rounded-3xl shadow-xl border border-slate-800 text-white">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-sm sm:text-base text-white">
                    Photovoltaic Solar Panel Module
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                  Labeled Illustration
                </span>
              </div>

              {/* Labeled Generated Image */}
              <div className="rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
                <img
                  src="/solar-panel-diagram.jpg"
                  alt="Labeled diagram of photovoltaic solar panel components"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="text-center text-xs text-slate-300 mt-3 font-medium">
                {t.solarPanel.diagramCaption}
              </div>

            </div>
          </div>

        </div>

        {/* 4 Basic System Components Cards */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-emerald-950 text-center">
            {t.solarPanel.componentsTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.solarPanel.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:border-amber-400 transition-all card-shadow-hover flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                    Component 0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-emerald-950 mb-2">
                    {comp.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800/85 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
