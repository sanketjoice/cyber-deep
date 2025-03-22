import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AdvancedFeaturesSection from "./components/AdvancedFeaturesSection";
import DeepfakeTypesSection from "./components/DeepfakeTypesSection";
import BenefitsTechnologySection from "./components/BenefitsTechnologySection";
import MobileAppSection from "./components/MobileAppSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#f7f9f8] pt-4">
      <Header />
      <HeroSection />
      <AdvancedFeaturesSection />
      <DeepfakeTypesSection />
      <BenefitsTechnologySection />
      <MobileAppSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
