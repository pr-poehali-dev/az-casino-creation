import { Card } from "@/components/ui/card";

const vipLevels = [
  { status: "Başlanğıc", turnover: "$0", cashback: "0%", bonuses: "Standart bonuslar" },
  { status: "Oyunçu", turnover: "$15", cashback: "0.5%", bonuses: "Əlavə təkliflər" },
  { status: "Bürünc", turnover: "$250", cashback: "1%", bonuses: "Eksklüziv bonuslar" },
  { status: "Gümüş", turnover: "$4,000", cashback: "1.5%", bonuses: "250 pulsuz spin" },
  { status: "Qızıl", turnover: "$8,000", cashback: "2%", bonuses: "VIP təkliflər" },
  { status: "Platinum", turnover: "$50,000", cashback: "3%", bonuses: "Eksklüziv VIP status" }
];

const BonusesSection = () => {
  return (
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
  );
};

export default BonusesSection;