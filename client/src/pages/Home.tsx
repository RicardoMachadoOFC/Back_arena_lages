import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Radio,
  Newspaper,
  Trophy,
  Users,
  Zap,
  Mountain,
  Volume2,
} from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  const sports = [
    {
      id: "futebol",
      name: "⚽ Futebol",
      teams: "Leoas da Serra, Lages Futsal",
      members: 342,
      activeNow: 45,
    },
    {
      id: "volei",
      name: "🏐 Vôlei",
      teams: "Vôlei Lages, Vôlei Serra",
      members: 218,
      activeNow: 28,
    },
    {
      id: "tenis-mesa",
      name: "🏓 Tênis de Mesa",
      teams: "Tênis Clube Lages",
      members: 156,
      activeNow: 12,
    },
  ];

  const upcomingGames = [
    {
      id: 1,
      sport: "Futebol",
      teams: "Leoas da Serra vs Santa Catarina",
      date: "22 Jun",
      time: "19:00",
      venue: "Ginásio Jones Minosso",
      status: "ao vivo em 2h",
    },
    {
      id: 2,
      sport: "Vôlei",
      teams: "Vôlei Lages vs Blumenau",
      date: "23 Jun",
      time: "20:00",
      venue: "Ginásio Ivo Silveira",
      status: "em 1 dia",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mountain className="w-7 h-7 text-amber-700" />
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Torcida+</h1>
              <p className="text-xs text-amber-600">Central de Comunicação Esportiva</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-800 animate-pulse">
            🔴 AO VIVO
          </Badge>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-amber-600 to-orange-600 border-0 text-white shadow-xl">
          <div className="p-8">
            <h2 className="text-4xl font-bold mb-3">
              Bem-vindo à Arena de Comunicação Lages
            </h2>
            <p className="text-lg text-amber-100 mb-6">
              Conecte-se com torcedores, acompanhe jogos ao vivo, participe de
              atividades e ouça a rádio oficial dos eventos esportivos da Serra
              Catarinense.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/chat/geral")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Geral
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/news")}
              >
                <Newspaper className="w-4 h-4 mr-2" />
                Notícias
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/radio")}
              >
                <Radio className="w-4 h-4 mr-2" />
                Rádio Ao Vivo
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/trainer")}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Atividades
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/tickets")}
              >
                🎟️ Ingressos
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/rewards")}
              >
                🎁 Recompensas
              </Button>
              <Button
                className="bg-white text-amber-700 hover:bg-amber-50 font-semibold"
                onClick={() => setLocation("/teams-shop")}
              >
                💪 Ajude seu Time
              </Button>
            </div>
          </div>
        </Card>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left: Canais por Esporte */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6" />
              Canais de Esportes
            </h3>
            {sports.map((sport) => (
              <Card
                key={sport.id}
                className="p-5 border-amber-200 hover:shadow-lg transition-all cursor-pointer hover:border-amber-400"
                onClick={() => setLocation(`/chat/${sport.id}`)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <Badge className="bg-amber-100 text-amber-900 mb-2">
                      {sport.name}
                    </Badge>
                    <h4 className="text-xl font-bold text-amber-900 mb-1">
                      {sport.teams}
                    </h4>
                  </div>
                  <Badge className="bg-green-100 text-green-900 ml-2">
                    {sport.activeNow} online
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {sport.members} membros
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    Chat ativo
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  Entrar no Chat
                </Button>
              </Card>
            ))}
          </div>

          {/* Right: Próximos Jogos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6" />
              Próximos Jogos
            </h3>
            {upcomingGames.map((game) => (
              <Card
                key={game.id}
                className="p-6 border-2 border-amber-300 hover:shadow-lg transition-all hover:border-amber-500 bg-gradient-to-br from-white to-amber-50"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-orange-100 text-orange-900 font-semibold">
                    {game.sport}
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 font-semibold">
                    {game.status}
                  </Badge>
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-amber-900 mb-1">
                    {game.date}
                  </p>
                  <p className="text-base font-semibold text-amber-700">
                    {game.time}
                  </p>
                </div>
                <h4 className="font-bold text-amber-900 text-base mb-3">
                  {game.teams}
                </h4>
                <div className="space-y-1 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    {game.venue}
                  </p>
                </div>
              </Card>
            ))}

            {/* Radio Widget */}
            <Card className="p-4 border-amber-200 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="flex items-center gap-2 mb-3">
                <Volume2 className="w-5 h-5 text-red-600" />
                <h4 className="font-bold text-red-900">Rádio Arena Lages</h4>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Acompanhe os jogos ao vivo com narração exclusiva
              </p>
              <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setLocation("/radio")}
              >
                <Radio className="w-4 h-4 mr-2" />
                Sintonizar Agora
              </Button>
            </Card>
          </div>
        </div>

        {/* Featured Section */}
        <Card className="p-6 bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">
                🎮 Sua Vez de Jogar!
              </h3>
              <p className="text-amber-800 mb-4">
                Participe de quizzes e desafios interativos. Teste seus conhecimentos
                sobre o esporte local e ganhe pontos!
              </p>
            </div>
            <Button
              className="bg-amber-700 hover:bg-amber-800 text-white whitespace-nowrap"
              onClick={() => setLocation("/trainer")}
            >
              Jogar Agora
            </Button>
          </div>
        </Card>

      </main>
    </div>
  );
}
