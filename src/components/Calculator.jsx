import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Calculator as CalcIcon,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Droplets,
  Layers,
  Info,
} from 'lucide-react';

export const Calculator = () => {
  const { t } = useLanguage();

  const [landSize, setLandSize] = useState('3.0');
  const [waterReq, setWaterReq] = useState('15000');
  const [usageHours, setUsageHours] = useState('6');
  const [pumpHP, setPumpHP] = useState('');

  const [result, setResult] = useState(null);

  const handlePreset = (amount) => {
    setWaterReq(amount.toString());
  };

  const handleCalculate = (e) => {
    e.preventDefault();

    const water = parseFloat(waterReq) || 15000;
    const hours = parseFloat(usageHours) || 6;
    const land = parseFloat(landSize) || 3.0;
    let hp = parseFloat(pumpHP);

    // If HP not manually specified, estimate from water requirement and sun hours
    if (!hp || isNaN(hp)) {
      if (water <= 8000) {
        hp = 2;
      } else if (water <= 20000) {
        hp = 3;
      } else if (water <= 45000) {
        hp = 5;
      } else if (water <= 80000) {
        hp = 7.5;
      } else {
        hp = 10;
      }
    }

    // Solar PV Array capacity (kWp) ≈ Pump HP * 1.2
    const kwp = (hp * 1.2).toFixed(1);
    const flowLitersPerHour = Math.round(water / hours);

    // Suggested system category
    let systemCategory = '';
    if (hp <= 3) {
      systemCategory = `${hp} HP DC Submersible Solar Pump System (Ideal for small-to-medium borewells / wells)`;
    } else if (hp <= 5) {
      systemCategory = `${hp} HP AC Submersible Solar Pump with Solar VFD Controller`;
    } else {
      systemCategory = `${hp} HP High-Capacity Solar Pump System for large agricultural holding`;
    }

    setResult({
      land: land,
      water: water.toLocaleString(),
      hp: hp,
      kwp: kwp,
      hourlyFlow: flowLitersPerHour.toLocaleString(),
      systemCategory: systemCategory,
    });
  };

  const handleReset = () => {
    setLandSize('');
    setWaterReq('');
    setUsageHours('6');
    setPumpHP('');
    setResult(null);
  };

  return (
    <section id="calculator" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            🧮 {t.calculator.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Main Interactive Form Container */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/40 p-6 sm:p-10 rounded-3xl border-2 border-emerald-200 shadow-xl">
          
          <form onSubmit={handleCalculate} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 1: Land Size */}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-1.5">
                  {t.calculator.landSizeLabel}
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  placeholder={t.calculator.landSizePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-emerald-950 bg-white shadow-sm font-medium"
                  required
                />
              </div>

              {/* Field 2: Daily Water Requirement */}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-1.5">
                  {t.calculator.waterLabel}
                </label>
                <input
                  type="number"
                  step="500"
                  min="1000"
                  value={waterReq}
                  onChange={(e) => setWaterReq(e.target.value)}
                  placeholder={t.calculator.waterPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-emerald-950 bg-white shadow-sm font-medium"
                  required
                />
                
                {/* Water presets buttons */}
                <div className="mt-2 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-emerald-800 font-medium">Quick Presets:</span>
                  <button
                    type="button"
                    onClick={() => handlePreset(5000)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold transition-colors"
                  >
                    5,000 L
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset(15000)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold transition-colors"
                  >
                    15,000 L
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePreset(30000)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold transition-colors"
                  >
                    30,000 L
                  </button>
                </div>
              </div>

              {/* Field 3: Pump Usage Hours */}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-1.5">
                  {t.calculator.hoursLabel}
                </label>
                <select
                  value={usageHours}
                  onChange={(e) => setUsageHours(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-emerald-950 bg-white shadow-sm font-medium"
                >
                  <option value="4">4 Hours (Winter / Overcast Sunlight)</option>
                  <option value="6">6 Hours (Standard Bright Farm Sunshine)</option>
                  <option value="8">8 Hours (Peak Summer Long Sunshine)</option>
                </select>
              </div>

              {/* Field 4: Pump Power (Optional) */}
              <div>
                <label className="block text-sm font-bold text-emerald-950 mb-1.5">
                  {t.calculator.powerLabel}
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="1"
                  max="20"
                  value={pumpHP}
                  onChange={(e) => setPumpHP(e.target.value)}
                  placeholder={t.calculator.powerPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-emerald-950 bg-white shadow-sm font-medium"
                />
                <span className="text-[11px] text-emerald-700 mt-1 block">
                  Leave blank to auto-calculate recommended pump HP.
                </span>
              </div>

            </div>

            {/* Buttons Row: Calculate & Reset */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-emerald-100">
              <button
                type="submit"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-base shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <CalcIcon className="w-5 h-5 text-emerald-950" />
                <span>{t.calculator.calculateBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-emerald-950 font-bold text-base transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t.calculator.resetBtn}</span>
              </button>
            </div>

          </form>

          {/* Results Output Section */}
          {result && (
            <div className="mt-8 pt-8 border-t-2 border-dashed border-emerald-200 space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  {t.calculator.resultHeading}
                </h3>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Educational Estimate
                </span>
              </div>

              {/* 3 Prominent Result Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* 1. Estimated Solar Requirement */}
                <div className="bg-amber-500 text-emerald-950 p-5 rounded-2xl text-center shadow-md">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-950/80">
                    {t.calculator.resultSolarReq}
                  </div>
                  <div className="text-3xl font-black mt-1">~{result.kwp} kWp</div>
                  <div className="text-[11px] font-semibold text-emerald-950/80 mt-1">
                    Solar PV Array (≈ {(result.kwp * 1000).toLocaleString()} Watts)
                  </div>
                </div>

                {/* 2. Suggested System Category */}
                <div className="bg-emerald-900 text-white p-5 rounded-2xl text-center shadow-md flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      {t.calculator.resultSystemCat}
                    </div>
                    <div className="text-2xl font-extrabold text-amber-400 mt-1">{result.hp} HP Pump</div>
                  </div>
                  <div className="text-[11px] text-emerald-200 mt-1">
                    Submersible / Surface Agri Pump
                  </div>
                </div>

                {/* Estimated Flow */}
                <div className="bg-cyan-900 text-white p-5 rounded-2xl text-center shadow-md">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                    Daily Water Output
                  </div>
                  <div className="text-2xl font-extrabold text-cyan-300 mt-1">~{result.water} L</div>
                  <div className="text-[11px] text-cyan-100 mt-1">
                    ~{result.hourlyFlow} Liters / hour
                  </div>
                </div>

              </div>

              {/* 3. Basic Recommendation */}
              <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-emerald-950 flex items-center gap-2">
                  <Info className="w-5 h-5 text-emerald-700" />
                  {t.calculator.resultRecTitle}:
                </h4>
                <p className="text-sm text-emerald-900 leading-relaxed">
                  {t.calculator.recTextTemplate
                    .replace('{land}', result.land)
                    .replace('{water}', result.water)
                    .replace('{kwp}', result.kwp)
                    .replace('{hp}', result.hp)}
                </p>
                <div className="pt-2 text-xs text-emerald-800 font-semibold">
                  📌 Suggested Category: {result.systemCategory}
                </div>
              </div>

            </div>
          )}

          {/* Mandatory Educational Disclaimer Note */}
          <div className="mt-8 p-4 bg-amber-50 rounded-2xl border border-amber-300 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 font-bold leading-relaxed">
              {t.calculator.disclaimerNote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
