import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickFeatures } from './components/QuickFeatures';
import { SolarEnergySection } from './components/SolarEnergySection';
import { SolarPanelSection } from './components/SolarPanelSection';
import { SolarPumpSection } from './components/SolarPumpSection';
import { UsesSection } from './components/UsesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { Calculator } from './components/Calculator';
import { SchemesSection } from './components/SchemesSection';
import { MaintenanceSection } from './components/MaintenanceSection';
import { WhySolarSection } from './components/WhySolarSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-amber-200 selection:text-emerald-950">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <QuickFeatures />
          <SolarEnergySection />
          <SolarPanelSection />
          <SolarPumpSection />
          <UsesSection />
          <BenefitsSection />
          <Calculator />
          <SchemesSection />
          <MaintenanceSection />
          <WhySolarSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
