import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

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

const SupportSection = () => {
  return (
    <>
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
    </>
  );
};

export default SupportSection;