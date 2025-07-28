import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
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

  const bonuses = [
    {
      title: "Xoş Gəlmisiniz Bonusu",
      description: "İlk depozitə 100% bonus",
      amount: "100%",
      code: "WELCOME",
      extra: "+ 250 Pulsuz Spin"
    },
    {
      title: "Həftəlik Cashback",
      description: "İtirilmiş məbləğdən geri qaytarma",
      amount: "15%",
      code: "CASHBACK",
      extra: "Həftəlik ödəniş"
    },
    {
      title: "VIP Proqram",
      description: "Loyallıq proqramı - 6 səviyyə",
      amount: "3%-ə qədər",
      code: "VIP",
      extra: "Eksklüziv statuslar"
    }
  ];

  const reviews = [
    {
      name: "Əli Məmmədov",
      rating: 5,
      text: "2010-cu ildən bəri bu kazinoda oynayıram. Həmişə etibarlı ödənişlər və əla oyunlar.",
      date: "5 gün əvvəl"
    },
    {
      name: "Leyla Həsənova", 
      rating: 5,
      text: "Curacao lisenziyası ilə tam təhlükəsizlik. Mobil versiya çox rahatdır.",
      date: "1 həftə əvvəl"
    },
    {
      name: "Rəşad Əliyev",
      rating: 4,
      text: "1500+ oyun seçimi möhtəşəmdir. 24/7 dəstək komandası həmişə kömək edir.",
      date: "2 həftə əvvəl"
    }
  ];

  const providers = [
    { name: "NetEnt", games: "200+" },
    { name: "Microgaming", games: "150+" },
    { name: "Igrosoft", games: "80+" },
    { name: "Novomatic", games: "120+" },
    { name: "Play'n Go", games: "90+" },
    { name: "Endorphina", games: "70+" },
    { name: "Evolution Gaming", games: "50+" },
    { name: "NextGen Gaming", games: "60+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
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
              <a href="#games" className="text-muted-foreground hover:text-primary transition-colors">Oyunlar</a>
              <a href="#bonuses" className="text-muted-foreground hover:text-primary transition-colors">Bonuslar</a>
              <a href="#mobile" className="text-muted-foreground hover:text-primary transition-colors">Mobil</a>
              <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Rəylər</a>
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-gold-400 to-accent bg-clip-text text-transparent">
              VAVADA
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-muted-foreground">Casino Azərbaycan</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in">
            2010-cu ildən bəri fəaliyyət göstərən lisenziyalı kazino. 1500+ oyun, Curacao lisenziyası və 24/7 dəstək.
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

      {/* Providers Section */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Oyun Proqram Təminatı İstehsalçıları
            </h2>
            <p className="text-muted-foreground">
              Dünyanın ən məşhur və etibarlı oyun proqram təminatı istehsalçıları
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {providers.map((provider, index) => (
              <Card key={index} className="text-center p-4 bg-card/50 border-border/30 hover:border-primary/30 transition-all">
                <div className="font-semibold text-sm text-foreground mb-1">{provider.name}</div>
                <div className="text-xs text-muted-foreground">{provider.games} oyun</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              Ən Populyar Slot Oyunları
            </h2>
            <p className="text-muted-foreground text-lg">
              Yüksək RTP ilə ən çox oynanan slotlar
            </p>
          </div>
          
          <Tabs defaultValue="slots" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="slots">
                <Icon name="Zap" className="mr-2" />
                Slotlar
              </TabsTrigger>
              <TabsTrigger value="table">
                <Icon name="Dice1" className="mr-2" />
                Stolüstü
              </TabsTrigger>
              <TabsTrigger value="live">
                <Icon name="Video" className="mr-2" />
                Canlı Kazino
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="slots">
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
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          <Icon name="Play" className="mr-1" size={14} />
                          Oyna
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table">
              <div className="text-center py-16">
                <Icon name="Dice1" size={64} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Stolüstü Oyunlar</h3>
                <p className="text-muted-foreground">Blackjack, Rulet, Baccarat və digər klassik stolüstü oyunlar</p>
              </div>
            </TabsContent>
            
            <TabsContent value="live">
              <div className="text-center py-16">
                <Icon name="Video" size={64} className="mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">Canlı Kazino</h3>
                <p className="text-muted-foreground">Evolution Gaming tərəfindən təqdim edilən professional dilerlərlə canlı oyunlar</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-accent bg-clip-text text-transparent">
              Bonuslar və Təkliflər
            </h2>
            <p className="text-muted-foreground text-lg">
              Xoş Gəlmisiniz Bonusu və VIP Loyallıq Proqramı
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="relative overflow-hidden animate-fade-in bg-gradient-to-br from-card to-card/50 border-primary/30">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-12 -mt-12"></div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{bonus.title}</CardTitle>
                  <CardDescription className="text-base">
                    {bonus.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-gold-400 mb-2">
                      {bonus.amount}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {bonus.extra}
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {bonus.code}
                    </Badge>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-gold-500 hover:from-primary/90 hover:to-gold-400">
                    <Icon name="Gift" className="mr-2" size={16} />
                    Bonus Al
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section id="mobile" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mobil Vavada Casino
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Bütün funksiyaları dəstəkləyən mobil versiya. Əlavə proqram yükləmədən 
                brauzerinizlə istifadə edə bilərsiniz.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" className="text-primary" />
                  <span>Bütün oyunlara tam çıxış</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-primary" />
                  <span>Sürətli qeydiyyat və giriş</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Gift" className="text-primary" />
                  <span>Mobil bonuslar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Monitor" className="text-primary" />
                  <span>Responsiv dizayn</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Download" className="mr-2" />
                Mobil Versiyaya Keç
              </Button>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl p-8 text-center">
                <Icon name="Smartphone" size={120} className="mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-4">6 Addımda Qeydiyyat</h3>
                <div className="text-left space-y-2 text-sm text-muted-foreground">
                  <div>1. Mobil brauzerdən sayta daxil olun</div>
                  <div>2. Qeydiyyat düyməsini basın</div>
                  <div>3. Telefon və ya e-poçt daxil edin</div>
                  <div>4. Güclü parol yaradın</div>
                  <div>5. Valyuta seçin (AZN dəstəklənir)</div>
                  <div>6. Qeydiyyatı tamamlayın</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Texniki Dəstək Xidməti
            </h2>
            <p className="text-muted-foreground text-lg">
              24/7 xidmət göstərən professional dəstək komandası
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Canlı Söhbət</h3>
              <p className="text-sm text-muted-foreground mb-2">Orta cavab müddəti</p>
              <p className="text-primary font-semibold">2-3 dəqiqə</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">E-poçt Dəstəyi</h3>
              <p className="text-sm text-muted-foreground mb-2">Cavab müddəti</p>
              <p className="text-primary font-semibold">24 saat</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Telefon Dəstəyi</h3>
              <p className="text-sm text-muted-foreground mb-2">Qaynar xətt</p>
              <p className="text-primary font-semibold">24/7 aktiv</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="HelpCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2">FAQ Bölməsi</h3>
              <p className="text-sm text-muted-foreground mb-2">Cavablar</p>
              <p className="text-primary font-semibold">Dərhal</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Oyunçu Rəyləri
            </h2>
            <p className="text-muted-foreground text-lg">
              Minlərlə oyunçu Vavada casino ilə öz təcrübələrini bölüşür
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in bg-card border-border/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex text-gold-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
                VAVADA
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                2010-cu ildən bəri milyonlarla oyunçunun güvəndiyi onlayn kazino
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={14} />
                  <span>Lisenziyalı</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={14} />
                  <span>Təhlükəsiz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={14} />
                  <span>24/7 Dəstək</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Oyunlar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Slot Maşınları</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stolüstü Oyunlar</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Canlı Kazino</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Jackpot Oyunları</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Ödəniş Üsulları</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Banka Kartları</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobil Ödəniş</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Bank Köçürmə</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Kriptovalyuta</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Dəstəklənən Dillər</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>Azərbaycanca</div>
                <div>Türkçe</div>
                <div>Русский</div>
                <div>English</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Vavada Casino. Bütün hüquqlar qorunur. 18+ Məsuliyyətlə oynayın.</p>
            <p className="mt-2">Curacao eGaming 8048/JAZ lisenziyası • SSL 256-bit şifrələmə • RNG sertifikası</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;