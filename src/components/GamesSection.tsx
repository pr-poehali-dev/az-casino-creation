import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { openRegistration } from "@/utils/referral";

const slots = [
  {
    id: 1,
    name: "Spin Master",
    image: "/img/77147fd9-2632-4555-984a-eae6df799c3a.jpg",
    rtp: "96.5%",
    description: "Klassik slot oyunu yüksək qaytarma nisbəti ilə",
    provider: "NetEnt"
  },
  {
    id: 2,
    name: "Aztec Treasures",
    image: "/img/b5c2b415-7a3e-49ba-bbd7-ea6ac828b95b.jpg",
    rtp: "97.2%",
    description: "Macəra mövzusunda yüksək ödənişli slot",
    provider: "Microgaming"
  },
  {
    id: 3,
    name: "Jackpot Bonanza",
    image: "/img/77147fd9-2632-4555-984a-eae6df799c3a.jpg",
    rtp: "98.1%",
    description: "Böyük jackpot imkanları ilə məşhur oyun",
    provider: "Play'n Go"
  },
  {
    id: 4,
    name: "Wild Wild West",
    image: "/img/b5c2b415-7a3e-49ba-bbd7-ea6ac828b95b.jpg",
    rtp: "97.8%",
    description: "Qərb mövzusunda həyəcanverici slot",
    provider: "Endorphina"
  }
];

const providers = [
  { name: "NetEnt", games: "200+ oyun", icon: "Diamond", color: "text-blue-500" },
  { name: "Microgaming", games: "150+ oyun", icon: "Gem", color: "text-green-500" },
  { name: "Igrosoft", games: "80+ oyun", icon: "Trophy", color: "text-orange-500" },
  { name: "Novomatic", games: "120+ oyun", icon: "Crown", color: "text-purple-500" },
  { name: "Play'n Go", games: "90+ oyun", icon: "Heart", color: "text-red-500" },
  { name: "Endorphina", games: "70+ oyun", icon: "Pen", color: "text-blue-600" },
  { name: "Evolution Gaming", games: "50+ oyun", icon: "Infinity", color: "text-gray-600" },
  { name: "NextGen Gaming", games: "60+ oyun", icon: "Zap", color: "text-yellow-500" }
];

const GamesSection = () => {
  return (
    <>
      {/* About Section - H2 */}
      <section id="about" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Vavada Casino Haqqında
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Vavada kazino oyunları oynamaq üçün etibarlı onlayn platformadır. 2010-cu ildə yaradılmış bu kazino, 
              8048/JAZ Curacao lisenziyası əsasında fəaliyyət göstərir və milyonlarla oyunçunun güvənini qazanmışdır. 
              Vavada kazinosunun rəsmi veb-saytı unikal dizaynı və dünyanın aparıcı oyun proqram təminatı 
              istehsalçılarının geniş kataloqunu təklif edir.
            </p>
          </div>

          {/* Advantages - H3 */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Əsas Üstünlüklər
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border/50 text-center p-6">
                <Icon name="ShieldCheck" size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Curacao lisenziyası ilə qanuni fəaliyyət</h4>
              </Card>
              <Card className="bg-card border-border/50 text-center p-6">
                <Icon name="Gamepad2" size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">1500-dən çox oyun növü</h4>
              </Card>
              <Card className="bg-card border-border/50 text-center p-6">
                <Icon name="Headphones" size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">24/7 texniki dəstək</h4>
              </Card>
              <Card className="bg-card border-border/50 text-center p-6">
                <Icon name="Zap" size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Sürətli ödənişlər və çıxarışlar</h4>
              </Card>
              <Card className="bg-card border-border/50 text-center p-6">
                <Icon name="Smartphone" size={48} className="mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">Mobil cihazlarda tam funksionallıq</h4>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section - H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Oyun Proqram Təminatı İstehsalçıları
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada kazinosunda dünyanın ən məşhur və etibarlı oyun proqram təminatı istehsalçılarının məhsulları təqdim edilir. 
              Hər bir oyun təsadüfi rəqəmlər generatoru ilə təsdiqlənib və ədalətli oyun təmin edilir.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {providers.map((provider, index) => (
              <Card key={index} className="text-center p-6 bg-card border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                <Icon name={provider.icon as any} size={48} className={`mx-auto mb-4 ${provider.color}`} />
                <div className="font-semibold text-lg text-foreground mb-2">{provider.name}</div>
                <div className="text-sm text-muted-foreground">{provider.games}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section - H2 */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Vavada Casino Qeydiyyat Prosesi
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada kazinosunda qeydiyyat prosesi sadə və sürətlidir. Yalnız bir neçə dəqiqə ərzində hesab yaradaraq 
              bütün oyunlara və bonuslara çıxış əldə edə bilərsiniz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Əlaqə Məlumatları</h3>
              <p className="text-muted-foreground">
                Telefon nömrəsi və ya e-poçt ünvanı daxil edin. Təsdiqlənmə kodu alacaqsınız.
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Güclü Parol</h3>
              <p className="text-muted-foreground">
                Hesabınızın təhlükəsizliyi üçün güclü parol yaradın.
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Valyuta Seçimi</h3>
              <p className="text-muted-foreground">
                Əlverişli valyuta seçin. Azərbaycan manatı (AZN) da dəstəklənir.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Games Section - H2 */}
      <section id="games" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Vavada Casino Oyunları
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada kazinosunda 1500-dən çox oyun növü mövcuddur. Hər oyun demo rejimində pulsuz test edilə bilər. 
              Oyunlar kategorialar üzrə təsnif edilib və axtarış funksiyası ilə asanlıqla tapıla bilər.
            </p>
          </div>

          {/* Popular Slots - H3 */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              Ən Populyar Slot Oyunları
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {slots.map((slot) => (
                <Card key={slot.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-in bg-card border-border/50">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={slot.image} 
                      alt={slot.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary/90 text-primary-foreground">
                        RTP {slot.rtp}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{slot.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {slot.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        {slot.description}
                      </p>
                      <div className="flex text-gold-400 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Demo
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={openRegistration}
                        rel="nofollow noopener noreferrer"
                      >
                        <Icon name="Play" className="mr-1" size={14} />
                        Oyna
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamesSection;