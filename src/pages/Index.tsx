import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

  const vipLevels = [
    { status: "Başlanğıc", turnover: "$0", cashback: "0%", bonuses: "Standart bonuslar" },
    { status: "Oyunçu", turnover: "$15", cashback: "0.5%", bonuses: "Əlavə təkliflər" },
    { status: "Bürünc", turnover: "$250", cashback: "1%", bonuses: "Eksklüziv bonuslar" },
    { status: "Gümüş", turnover: "$4,000", cashback: "1.5%", bonuses: "250 pulsuz spin" },
    { status: "Qızıl", turnover: "$8,000", cashback: "2%", bonuses: "VIP təkliflər" },
    { status: "Platinum", turnover: "$50,000", cashback: "3%", bonuses: "Eksklüziv VIP status" }
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

  const faqs = [
    {
      question: "Vavada casino təhlükəsizlimi?",
      answer: "Bəli, Vavada casino Curacao lisenziyası ilə fəaliyyət göstərir və SSL şifrələmə istifadə edir."
    },
    {
      question: "Bonusları necə əldə edə bilərəm?",
      answer: "Qeydiyyatdan sonra avtomatik olaraq xoş gəlmisiniz bonusu aktivləşir. Digər bonuslar üçün promosyonlar bölməsinə baxın."
    },
    {
      question: "Pul çıxarma nə qədər vaxt alır?",
      answer: "Adətən 24 saat ərzində emal edilir. Bəzi ödəniş üsulları daha sürətli ola bilər."
    },
    {
      question: "Mobil cihazlarda oyun mövcuddur?",
      answer: "Bəli, mobil brauzerdən bütün oyunlara tam çıxış əldə edə bilərsiniz."
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

      {/* Hero Section - H1 */}
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

      {/* Bonuses Section - H2 */}
      <section id="bonuses" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-accent bg-clip-text text-transparent">
              Vavada Casino Bonusları və Təkliflər
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-gradient-to-br from-primary/10 to-gold-400/10 border-primary/30">
              <div className="text-6xl font-bold text-primary mb-2">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Xoş Gəlmisiniz Bonusu</h3>
              <p className="text-muted-foreground">İlk depozitə bonus</p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
              <div className="text-6xl font-bold text-accent mb-2">250</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Pulsuz Spinlər</h3>
              <p className="text-muted-foreground">Qeydiyyat bonusu</p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-to-br from-gold-400/10 to-accent/10 border-gold-400/30">
              <div className="text-6xl font-bold text-gold-400 mb-2">15%</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Həftəlik Cashback</h3>
              <p className="text-muted-foreground">İtirilmiş məbləğdən</p>
            </Card>
          </div>

          {/* VIP Program - H3 */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">
              Oyunçu Statusları və VIP Proqramı
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Vavada kazinosunda loyallıq proqramı oyunçuların fəaliyyətini mükafatlandırır. 
              Hər yeni səviyyə ilə cashback artır və eksklüziv bonuslar açılır.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="p-4 text-left font-semibold">Status</th>
                    <th className="p-4 text-left font-semibold">Dövriyyə</th>
                    <th className="p-4 text-left font-semibold">Cashback</th>
                    <th className="p-4 text-left font-semibold">Əlavə Bonuslar</th>
                  </tr>
                </thead>
                <tbody>
                  {vipLevels.map((level, index) => (
                    <tr key={index} className="border-t border-border/20">
                      <td className="p-4 font-medium">{level.status}</td>
                      <td className="p-4 text-muted-foreground">{level.turnover}</td>
                      <td className="p-4 text-primary font-semibold">{level.cashback}</td>
                      <td className="p-4 text-muted-foreground">{level.bonuses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
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

      {/* Mobile Section - H2 */}
      <section id="mobile" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mobil Vavada Casino
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada kazinosunun mobil versiyası bütün funksiyaları dəstəkləyir. 
              Əlavə proqram yükləmədən brauzerdən istifadə edə bilərsiniz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="text-center p-4 bg-card border-border/50">
                  <Icon name="Smartphone" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-medium">Bütün oyunlara tam çıxış</p>
                </Card>
                <Card className="text-center p-4 bg-card border-border/50">
                  <Icon name="Zap" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-medium">Sürətli qeydiyyat və giriş</p>
                </Card>
                <Card className="text-center p-4 bg-card border-border/50">
                  <Icon name="Gift" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-medium">Mobil bonuslar</p>
                </Card>
                <Card className="text-center p-4 bg-card border-border/50">
                  <Icon name="Monitor" className="mx-auto mb-2 text-primary" size={32} />
                  <p className="text-sm font-medium">Responsiv dizayn</p>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Mobil Qeydiyyat Addımları</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">1</div>
                  <p className="text-muted-foreground">Mobil brauzerdən sayta daxil olun</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">2</div>
                  <p className="text-muted-foreground">Qeydiyyat düyməsini basın</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">3</div>
                  <p className="text-muted-foreground">Telefon nömrəsi və ya e-poçt daxil edin</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">4</div>
                  <p className="text-muted-foreground">Güclü parol yaradın</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">5</div>
                  <p className="text-muted-foreground">Valyuta seçin</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">6</div>
                  <p className="text-muted-foreground">Qeydiyyatı tamamlayın</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section - H2 */}
      <section id="support" className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Texniki Dəstək Xidməti
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada casino texniki dəstək komandası 24/7 xidmət göstərir. 
              Hər hansı sualınız və ya problemləriniz olduqda dərhal kömək ala bilərsiniz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="MessageCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Canlı Söhbət</h3>
              <p className="text-sm text-muted-foreground mb-2">Orta cavab müddəti:</p>
              <p className="text-primary font-semibold">2-3 dəqiqə</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">E-poçt Dəstəyi</h3>
              <p className="text-sm text-muted-foreground mb-2">Cavab müddəti:</p>
              <p className="text-primary font-semibold">24 saat ərzində</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">Telefon Dəstəyi</h3>
              <p className="text-sm text-muted-foreground mb-2">Qaynar xətt:</p>
              <p className="text-primary font-semibold">24/7 aktivdir</p>
            </Card>
            
            <Card className="text-center p-6 bg-card border-border/50">
              <Icon name="HelpCircle" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-semibold mb-2 text-foreground">FAQ Bölməsi</h3>
              <p className="text-sm text-muted-foreground mb-2">Çox verilən suallar</p>
              <p className="text-primary font-semibold">Dərhal cavab</p>
            </Card>
          </div>

          {/* Supported Languages - H3 */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Dəstəklənən Dillər</h3>
            <div className="flex justify-center flex-wrap gap-4">
              <Badge variant="outline" className="px-4 py-2">Azərbaycanca</Badge>
              <Badge variant="outline" className="px-4 py-2">Türkçe</Badge>
              <Badge variant="outline" className="px-4 py-2">Русский</Badge>
              <Badge variant="outline" className="px-4 py-2">English</Badge>
              <Badge variant="outline" className="px-4 py-2">Deutsch</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods - H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Ödəniş Üsulları və Çıxarış
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Depozit Üsulları</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <Icon name="CreditCard" className="text-primary" />
                  <span>Banka kartları (Visa, Mastercard)</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <Icon name="Smartphone" className="text-primary" />
                  <span>Mobil ödənişlər</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <Icon name="Building" className="text-primary" />
                  <span>Bank köçürmələri</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                  <Icon name="Coins" className="text-primary" />
                  <span>Kriptovalyutalar</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Çıxarış Şərtləri</h3>
              <div className="space-y-4">
                <div className="flex justify-between p-4 bg-card rounded-lg border border-border/50">
                  <span className="text-muted-foreground">Emal vaxtı:</span>
                  <span className="font-semibold">24 saat</span>
                </div>
                <div className="flex justify-between p-4 bg-card rounded-lg border border-border/50">
                  <span className="text-muted-foreground">Minimum çıxarış:</span>
                  <span className="font-semibold">$10</span>
                </div>
                <div className="flex justify-between p-4 bg-card rounded-lg border border-border/50">
                  <span className="text-muted-foreground">Təhlükəsiz prosessinq:</span>
                  <span className="font-semibold text-primary">✓</span>
                </div>
                <div className="flex justify-between p-4 bg-card rounded-lg border border-border/50">
                  <span className="text-muted-foreground">Komissiya:</span>
                  <span className="font-semibold text-primary">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section - H2 */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Təhlükəsizlik və Lisenziya
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Vavada casino 8048/JAZ Curacao lisenziyası əsasında fəaliyyət göstərir. 
              Bütün məlumatlar SSL şifrələmə ilə qorunur və oyunçuların təhlükəsizliyi prioritetdir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/30">
              <Icon name="Shield" size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Lisenziya</h3>
              <p className="text-muted-foreground">Curacao eGaming</p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
              <Icon name="Lock" size={64} className="mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">SSL Şifrələmə</h3>
              <p className="text-muted-foreground">256-bit qoruma</p>
            </Card>
            
            <Card className="text-center p-8 bg-gradient-to-br from-gold-400/10 to-transparent border-gold-400/30">
              <Icon name="CheckCircle" size={64} className="mx-auto mb-4 text-gold-400" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">RNG Sertifikası</h3>
              <p className="text-muted-foreground">Təsdiqlənmiş ədalətli oyun</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - H2 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Tez-tez Verilən Suallar
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Reviews Section - H2 */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Oyunçu Rəyləri
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Minlərlə oyunçu Vavada casino ilə öz təcrübələrini bölüşür və kazinonu tövsiyə edir.
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
          <div className="text-center mb-8">
            <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-gold-400 bg-clip-text text-transparent">
              Vavada Casino - Etibarlı Oyun Təcrübəsi
            </div>
            <p className="text-muted-foreground mb-4">
              2010-cu ildən bəri milyonlarla oyunçunun güvəndiyi onlayn kazino
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Lisenziyalı</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Lock" size={16} className="text-primary" />
                <span>Təhlükəsiz</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>24/7 Dəstək</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Vavada Casino. Məsuliyyətlə oynayın. 18+</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;