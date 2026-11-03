import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Droplet,
  Sun,
  Sliders,
  Waves,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Pipette,
} from 'lucide-react';

const componentIcons = {
  Sun: Sun,
  Sliders: Sliders,
  Droplet: Droplet,
  Pipette: Pipette,
  Waves: Waves,
};

export const SolarPumpSection = () => {
  const { t } = useLanguage();

  return (
    <section id="solar-pump" className="py-16 bg-emerald-50/50 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full">
            💧 {t.solarPump.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.solarPump.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.solarPump.intro}
          </p>
        </div>

        {/* Agricultural Illustration & Working Flow Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Column: Full Agricultural Illustration Image */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 sm:p-5 rounded-3xl border border-emerald-200 shadow-xl overflow-hidden">
              <div className="rounded-2xl overflow-hidden border border-emerald-100 aspect-[16/9] bg-emerald-950">
                <img
                  src="/solar-pump-system.jpg"
                  alt="Complete agricultural solar water pump and irrigation system diagram"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-emerald-900">
                <span className="font-semibold">
                  🌱 Complete Solar Water Pumping & Drip Irrigation System
                </span>
                <span className="text-cyan-800 font-bold bg-cyan-50 px-2 py-0.5 rounded">
                  Farm Demonstration
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Working Diagram Sunlight → Solar Panels → Controller → Solar Pump → Water → Farm */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-emerald-200 shadow-md">
            <div className="text-center mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
                {t.solarPump.flowDiagramTitle}
              </h3>
              <p className="text-xs text-emerald-700 mt-0.5">
                Sunlight ➔ Solar Panels ➔ Controller ➔ Solar Pump ➔ Water ➔ Farm
              </p>
            </div>

            {/* Vertical Flow Diagram */}
            <div className="space-y-2">
              {t.solarPump.flowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="bg-gradient-to-r from-emerald-50 via-white to-cyan-50 p-3 rounded-2xl border border-emerald-200 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-700 text-amber-300 font-bold flex items-center justify-center text-xs shrink-0 shadow">
                      0{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-emerald-950">{step.name}</div>
                      <div className="text-[11px] text-emerald-800/80">{step.desc}</div>
                    </div>
                  </div>

                  {idx < t.solarPump.flowSteps.length - 1 && (
                    <div className="flex justify-center text-emerald-600 my-0.5">
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>

        {/* 5 Main Components: Solar Panel, Controller, Pump, Pipes, Water Storage */}
        <div className="mb-14 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-950">
              {t.solarPump.mainComponentsTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {t.solarPump.componentsList.map((comp, idx) => {
              const IconComp = componentIcons[comp.icon] || Droplet;

              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:border-emerald-400 transition-all card-shadow-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5 text-cyan-700" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
                      Part 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-emerald-950 mb-1.5">
                      {comp.name}
                    </h4>
                    <p className="text-xs text-emerald-800/85 leading-relaxed">
                      {comp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pump Types Breakdown: Submersible vs Surface */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-emerald-950 text-center">
            {t.solarPump.pumpTypesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Submersible Pump */}
            <div className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-sm space-y-4 hover:border-cyan-400 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xl">
                  💧
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    {t.solarPump.submersibleTitle}
                  </h4>
                  <span className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full">
                    Deep Borewell / Deep Well
                  </span>
                </div>
              </div>
              <p className="text-sm text-emerald-800/90 leading-relaxed">
                {t.solarPump.submersibleDesc}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border text-xs text-emerald-900 font-mono">
                📌 Typical Depth: 30m to 150m+ | Operates submerged directly in water
              </div>
            </div>

            {/* Surface Pump */}
            <div className="bg-white p-6 rounded-3xl border border-emerald-200 shadow-sm space-y-4 hover:border-amber-400 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl">
                  🌊
                </div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    {t.solarPump.surfaceTitle}
                  </h4>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                    Shallow Well / River / Pond
                  </span>
                </div>
              </div>
              <p className="text-sm text-emerald-800/90 leading-relaxed">
                {t.solarPump.surfaceDesc}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border text-xs text-emerald-900 font-mono">
                📌 Typical Suction Head: Up to 7m to 10m | Installed on dry ground surface
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
