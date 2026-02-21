import React from "react";
import HeroSection from "../Components/HeroSection";
import TierConnectSection from "../Components/TierConnectSection";
import EndToEndSection from "../Components/EndToEndSection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <TierConnectSection />
      <EndToEndSection />
    </div>
  );
};

export default HomePage;

