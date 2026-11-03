import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Eye, Activity, ShieldAlert, PhoneCall } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Eye: Eye,
  Activity: Activity,
  ShieldAlert: ShieldAlert,
  PhoneCall: PhoneCall,
};

export const MaintenanceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="maintenance" className="py-16 bg-white border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            🛠️ {t.maintenance.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-950 mt-3 tracking-tight">
            {t.maintenance.title}
          </h2>
          <p className="mt-2 text-base text-emerald-800 font-medium">
            {t.maintenance.subtitle}
          </p>
        </div>

        {/* 5 Maintenance Steps Stack */}
        <div className="max-w-4xl mx-auto space-y-4">
          {t.maintenance.steps.map((step, idx) => {
            const IconComp = iconMap[step.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-emerald-50/40 p-6 rounded-3xl border border-emerald-100 hover:border-emerald-300 transition-all card-shadow-hover flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-amber-300 flex items-center justify-center font-bold text-xl shrink-0 shadow">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-emerald-950">
                      {step.title}
                    </h3>
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      Step 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-800/90 leading-relaxed pt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
