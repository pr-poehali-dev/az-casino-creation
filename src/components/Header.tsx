import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  return (
    <header className="relative border-b border-border sticky top-0 z-50 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/img/3dee1425-a1a3-41e8-8190-199ec5410858.jpg" 
          alt="Vavada Casino Header"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              VAVADA
            </div>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              Lisenziyalı
            </Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Haqqında</a>
            <a href="#games" className="text-muted-foreground hover:text-primary transition-colors">Oyunlar</a>
            <a href="#bonuses" className="text-muted-foreground hover:text-primary transition-colors">Bonuslar</a>
            <a href="#mobile" className="text-muted-foreground hover:text-primary transition-colors">Mobil</a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Dəstək</a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Giriş</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow">
              Qeydiyyat
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;