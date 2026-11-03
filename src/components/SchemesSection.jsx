import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, ExternalLink, AlertCircle, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const SchemesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="schemes" className="py-16 bg-slate-50/70 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            📜 {t.schemes.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.schemes.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.schemes.subtitle}
          </p>
        </div>

        {/* Content Box */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Main Description & Scheme Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-emerald-950 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              {t.schemes.pmKusumTitle}
            </h3>
            <p className="text-emerald-900 text-sm sm:text-base leading-relaxed">
              {t.schemes.pmKusumDesc}
            </p>

            {/* Components Grid (Part A, Part B, Part C) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Component A
                </div>
                <p className="text-sm font-semibold text-emerald-950 mt-1">
                  {t.schemes.compA}
                </p>
              </div>

              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Component B
                </div>
                <p className="text-sm font-semibold text-emerald-950 mt-1">
                  {t.schemes.compB}
                </p>
              </div>

              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-100">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Component C
                </div>
                <p className="text-sm font-semibold text-emerald-950 mt-1">
                  {t.schemes.compC}
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Information */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-emerald-950">
              {t.schemes.eligibilityTitle}
            </h3>

            <div className="space-y-3">
              {t.schemes.eligibilityPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-900 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Guidance */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-emerald-100 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-700" />
              {t.schemes.applicationGuidanceTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.schemes.applicationSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-emerald-950 mb-1">
                      {step.step}
                    </h4>
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Button & Required Disclaimer */}
          <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl space-y-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">MNRE PM-KUSUM National Portal</h4>
                <p className="text-xs text-amber-300">
                  Access official government guidelines, state nodal agencies, and registration portals.
                </p>
              </div>

              <a
                href="https://pmkusum.mnre.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold text-sm transition-all hover:scale-105 shadow-md shrink-0"
              >
                <span>{t.schemes.officialBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Mandatory Required Disclaimer */}
            <div className="p-4 bg-emerald-950/90 rounded-2xl border border-emerald-700/60 flex items-start gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-emerald-100 font-bold leading-relaxed">
                {t.schemes.officialNoticeText}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
