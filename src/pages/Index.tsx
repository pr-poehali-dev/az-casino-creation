import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const slots = [
    {
      id: 1,
      name: "Mega Fortune",
      image: "/img/77147fd9-2632-4555-984a-eae6df799c3a.jpg",
      jackpot: "₼15,234",
      provider: "NetEnt"
    },
    {
      id: 2,
      name: "Book of Ra",
      image: "/img/b5c2b415-7a3e-49ba-bbd7-ea6ac828b95b.jpg",
      jackpot: "₼8,765",
      provider: "Novomatic"
    },
    {
      id: 3,
      name: "Starburst",
      image: "/img/77147fd9-2632-4555-984a-eae6df799c3a.jpg",
      jackpot: "₼12,456",
      provider: "NetEnt"
    },
    {
      id: 4,
      name: "Gonzo's Quest",
      image: "/img/b5c2b415-7a3e-49ba-bbd7-ea6ac828b95b.jpg",
      jackpot: "₼9,876",
      provider: "NetEnt"
    }
  ];

  const bonuses = [
    {
      title: "Xoş Gəlmisiniz Bonusu",
      description: "İlk depozitə 100% bonus + 50 pulsuz fırlanma",
      amount: "₼500-ə qədər",
      code: "WELCOME100"
    },
    {
      title: "Həftəlik Bonus",
      description: "Hər həftə yenidən 50% bonus",
      amount: "₼300-ə qədər",
      code: "WEEKLY50"
    },
    {
      title: "VIP Proqram",
      description: "Ekskluziv bonuslar və xidmətlər",
      amount: "Fərdi təkliflər",
      code: "VIP"
    }
  ];

  const reviews = [
    {
      name: "Əli Məmmədov",
      rating: 5,
      text: "Əla kazino! Çox sürətli ödənişlər və gözəl oyunlar.",
      date: "5 gün əvvəl"
    },
    {
      name: "Leyla Həsənova",
      rating: 5,
      text: "Mobil versiya çox rahatdır, hər yerdə oynaya bilirəm.",
      date: "1 həftə əvvəl"
    },
    {
      name: "Rəşad Əliyev",
      rating: 4,
      text: "Bonuslar çox cəlbedicidir, dəstək komandası da əladır.",
      date: "2 həftə əvvəl"
    }
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
                AZ
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
            <span className="text-3xl md:text-4xl text-muted-foreground">Kazino</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Azərbaycanda ən yaxşı onlayn kazino təcrübəsi. Premium oyunlar, böyük bonuslar və sürətli ödənişlər.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
              <Icon name="Play" className="mr-2" />
              İndi Oyna
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <Icon name="Gift" className="mr-2" />
              Bonus Al
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              Oyun Kolleksiyası
            </h2>
            <p className="text-muted-foreground text-lg">
              Ən populyar slot maşınları və stolüstü oyunlar
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
                Canlı
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
                          Jackpot
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
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {slot.jackpot}
                        </span>
                        <div className="flex text-gold-400">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-current" />
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        <Icon name="Play" className="mr-2" size={16} />
                        Oyna
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="table">
              <div className="text-center py-16">
                <Icon name="Dice1" size={64} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">Stolüstü Oyunlar</h3>
                <p className="text-muted-foreground">Rulet, Blackjack, Poker və daha çox oyun tezliklə əlavə ediləcək</p>
              </div>
            </TabsContent>
            
            <TabsContent value="live">
              <div className="text-center py-16">
                <Icon name="Video" size={64} className="mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">Canlı Kazino</h3>
                <p className="text-muted-foreground">Real dilerlərlə canlı oyunlar tezliklə əlavə ediləcək</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gold-400 to-accent bg-clip-text text-transparent">
              Bonuslar və Təkliflər
            </h2>
            <p className="text-muted-foreground text-lg">
              Həftəlik yenilənən ekskluziv bonuslar
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
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Kod: {bonus.code}
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
      <section id="mobile" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mobil Versiya
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Vavada Casino-nun mobil versiyası ilə istədiyiniz yerdə oynayın. 
                Tətbiq yükləmək lazım deyil - sadəcə brauzerinizlə girin!
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Smartphone" className="text-primary" />
                  <span>Bütün mobil cihazlarda işləyir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" className="text-primary" />
                  <span>Sürətli yükləmə və oyun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" className="text-primary" />
                  <span>Tam təhlükəsizlik və konfidensiallik</span>
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
                <h3 className="text-2xl font-bold mb-4">QR Kod ilə Giriş</h3>
                <div className="bg-white/10 rounded-lg p-4 inline-block">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-gold-400 rounded-lg flex items-center justify-center">
                    <Icon name="QrCode" size={64} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
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
              Müştərilərimizin bizim haqqımızda dedikləri
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
              <p className="text-muted-foreground text-sm">
                Azərbaycanda ən etibarlı onlayn kazino platforması.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Oyunlar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Slot Maşınları</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Stolüstü Oyunlar</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Canlı Kazino</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Dəstək</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Əlaqə</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Qaydalar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Sosial Şəbəkələr</h4>
              <div className="flex space-x-4">
                <Icon name="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Vavada Casino. Bütün hüquqlar qorunur. 18+ Məsuliyyətlə oynayın.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;