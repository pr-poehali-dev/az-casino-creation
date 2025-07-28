import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/img/27b2eb13-94bb-4124-bb0a-91ea58178bdd.jpg" 
          alt="Vavada Casino"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary via-gold-400 to-accent bg-clip-text text-transparent">
            Vavada Casino Azərbaycan - Rəsmi Onlayn Kazino
          </span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Lisenziyalı kazino, 100% xoş gəlmisiniz bonusu və 1500+ oyun
        </p>
        <div className="flex justify-center items-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="Shield" size={16} className="text-primary" />
            <span>8048/JAZ Curacao</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Gamepad2" size={16} className="text-primary" />
            <span>1500+ Oyun</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={16} className="text-primary" />
            <span>24/7 Dəstək</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
            <Icon name="Play" className="mr-2" />
            İndi Oyna
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4">
            <Icon name="Gift" className="mr-2" />
            100% Bonus Al
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;