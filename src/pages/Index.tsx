import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import BonusesSection from "@/components/BonusesSection";
import MobileSection from "@/components/MobileSection";
import SupportSection from "@/components/SupportSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground">
      <Header />
      <HeroSection />
      <GamesSection />
      <BonusesSection />
      <MobileSection />
      <SupportSection />
    </div>
  );
};

export default Index;