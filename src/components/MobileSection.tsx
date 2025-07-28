import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MobileSection = () => {
  return (
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
  );
};

export default MobileSection;