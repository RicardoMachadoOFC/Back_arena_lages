import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Newspaper,
  ArrowLeft,
  Calendar,
  MapPin,
  TrendingUp,
  Share2,
} from "lucide-react";
import { useLocation } from "wouter";

export default function NewsPage() {
  const [, setLocation] = useLocation();

  const news = [
    {
      id: 1,
      title: "Leoas da Serra garantem vaga na semifinal com vitória emocionante",
      excerpt:
        "Em um jogo emocionante, as Leoas da Serra venceram Santa Catarina por 3x1 e garantem presença na semifinal do campeonato estadual.",
      image: "🏆",
      date: "20 Jun",
      sport: "Futebol",
      views: 342,
      featured: true,
    },
    {
      id: 2,
      title: "Vôlei Lages se prepara para enfrentar Blumenau",
      excerpt:
        "A equipe de vôlei realiza último treino antes do confronto decisivo contra Blumenau. Técnico confia na força do time.",
      image: "🏐",
      date: "20 Jun",
      sport: "Vôlei",
      views: 218,
      featured: false,
    },
    {
      id: 3,
      title: "Tênis de Mesa: Campeonato Regional começa amanhã",
      excerpt:
        "Atletas de toda a Serra Catarinense se reúnem em Lages para disputar o título regional de tênis de mesa.",
      image: "🏓",
      date: "19 Jun",
      sport: "Tênis de Mesa",
      views: 156,
      featured: false,
    },
    {
      id: 4,
      title: "Confira os resultados de todos os jogos da semana",
      excerpt:
        "Resumo completo dos resultados de futebol, vôlei e tênis de mesa realizados na semana em Lages.",
      image: "📊",
      date: "19 Jun",
      sport: "Geral",
      views: 89,
      featured: false,
    },
  ];

  const standings = [
    { sport: "Futebol", leader: "Leoas da Serra", points: 28 },
    { sport: "Vôlei", leader: "Vôlei Lages", points: 24 },
    { sport: "Tênis de Mesa", leader: "Tênis Clube", points: 18 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="text-amber-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-amber-900 flex items-center gap-2">
                <Newspaper className="w-6 h-6" />
                Notícias
              </h1>
              <p className="text-xs text-amber-600">
                Últimas atualizações do esporte em Lages
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured News */}
            {news
              .filter((n) => n.featured)
              .map((item) => (
                <Card
                  key={item.id}
                  className="border-amber-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className="bg-white text-amber-700 font-semibold">
                        {item.sport}
                      </Badge>
                      <span className="text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {item.views} views
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                    <p className="text-amber-100 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                      <Button
                        className="bg-white text-amber-700 hover:bg-amber-50"
                        size="sm"
                      >
                        Ler Mais
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}

            {/* Other News */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-amber-900">Outras Notícias</h3>
              {news
                .filter((n) => !n.featured)
                .map((item) => (
                  <Card
                    key={item.id}
                    className="p-4 border-amber-200 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div className="text-3xl">{item.image}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <Badge className="bg-amber-100 text-amber-900">
                            {item.sport}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="font-bold text-amber-900 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {item.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {item.views} views
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-amber-300 text-amber-700 hover:bg-amber-50"
                          >
                            Ler Mais
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Standings */}
            <Card className="p-4 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Classificação
              </h3>
              <div className="space-y-3">
                {standings.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <p className="text-xs text-gray-600 mb-1">{item.sport}</p>
                    <p className="font-bold text-amber-900">{item.leader}</p>
                    <p className="text-sm text-amber-700 font-semibold">
                      {item.points} pts
                    </p>
                  </div>
                ))}
              </div>
            </Card>



            {/* Share */}
            <Card className="p-4 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Compartilhar
              </h3>
              <div className="space-y-2">
                {["WhatsApp", "Facebook", "Instagram"].map((platform) => (
                  <Button
                    key={platform}
                    variant="outline"
                    size="sm"
                    className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    {platform}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
