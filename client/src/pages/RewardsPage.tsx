import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Gift,
  ArrowLeft,
  Zap,
  ShoppingBag,
  Percent,
  CheckCircle,
  Lock,
} from "lucide-react";
import { useLocation } from "wouter";

export default function RewardsPage() {
  const [, setLocation] = useLocation();
  const [userPoints, setUserPoints] = useState(1250);
  const [redeemed, setRedeemed] = useState<number[]>([]);

  const rewards = [
    {
      id: 1,
      category: "Desconto",
      name: "10% de Desconto no Próximo Ingresso",
      description: "Válido para qualquer evento nos próximos 30 dias",
      points: 200,
      icon: "🎟️",
      type: "discount",
      value: "10%",
    },
    {
      id: 2,
      category: "Brinde",
      name: "Camisa Oficial Leoas da Serra",
      description: "Camisa edição limitada com número do torcedor",
      points: 500,
      icon: "👕",
      type: "merchandise",
      value: "Edição Limitada",
    },
    {
      id: 3,
      category: "Desconto",
      name: "20% de Desconto em Ingressos VIP",
      description: "Acesso ao camarote premium com desconto especial",
      points: 350,
      icon: "🏆",
      type: "discount",
      value: "20%",
    },
    {
      id: 4,
      category: "Brinde",
      name: "Boné Tropeiro Arena Lages",
      description: "Boné oficial com logo bordado da Arena",
      points: 150,
      icon: "🧢",
      type: "merchandise",
      value: "Oficial",
    },
    {
      id: 5,
      category: "Experiência",
      name: "Meet & Greet com Técnico",
      description: "Encontro exclusivo com o técnico da equipe",
      points: 800,
      icon: "🤝",
      type: "experience",
      value: "VIP",
    },
    {
      id: 6,
      category: "Desconto",
      name: "Ingresso Grátis para 1 Jogo",
      description: "Ingresso cortesia para o próximo evento de sua escolha",
      points: 600,
      icon: "🎫",
      type: "discount",
      value: "Grátis",
    },
    {
      id: 7,
      category: "Brinde",
      name: "Kit Torcedor Completo",
      description: "Camisa + Boné + Lenço + Adesivos",
      points: 750,
      icon: "📦",
      type: "merchandise",
      value: "Kit Completo",
    },
    {
      id: 8,
      category: "Experiência",
      name: "Visita ao Vestiário",
      description: "Acesso exclusivo ao vestiário antes do jogo",
      points: 450,
      icon: "🚪",
      type: "experience",
      value: "Exclusivo",
    },
  ];

  const handleRedeem = (rewardId: number, points: number) => {
    if (userPoints >= points && !redeemed.includes(rewardId)) {
      setUserPoints(userPoints - points);
      setRedeemed([...redeemed, rewardId]);
    }
  };

  const categories = ["Todos", "Desconto", "Brinde", "Experiência"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-yellow-100">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="text-yellow-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-yellow-900 flex items-center gap-2">
                <Gift className="w-6 h-6" />
                Marketplace de Recompensas
              </h1>
              <p className="text-xs text-yellow-600">
                Converta seus pontos em brindes e descontos
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-yellow-600">Seus Pontos</p>
            <p className="text-2xl font-bold text-yellow-700 flex items-center gap-1">
              <Zap className="w-5 h-5" />
              {userPoints}
            </p>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Points Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-gradient-to-br from-yellow-600 to-amber-600 text-white border-0">
            <p className="text-sm text-yellow-100 mb-1">Pontos Disponíveis</p>
            <p className="text-3xl font-bold">{userPoints}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0">
            <p className="text-sm text-green-100 mb-1">Resgates Realizados</p>
            <p className="text-3xl font-bold">{redeemed.length}</p>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white border-0">
            <p className="text-sm text-blue-100 mb-1">Pontos Gastos</p>
            <p className="text-3xl font-bold">
              {rewards
                .filter((r) => redeemed.includes(r.id))
                .reduce((sum, r) => sum + r.points, 0)}
            </p>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant="outline"
              size="sm"
              className="border-yellow-300 text-yellow-700 hover:bg-yellow-50 whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Rewards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {rewards.map((reward) => (
            <Card
              key={reward.id}
              className={`p-4 border-2 transition-all ${
                redeemed.includes(reward.id)
                  ? "border-green-400 bg-green-50 opacity-75"
                  : "border-yellow-200 hover:border-yellow-400"
              }`}
            >
              <div className="flex flex-col h-full">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{reward.icon}</span>
                  <Badge
                    className={
                      reward.type === "discount"
                        ? "bg-blue-100 text-blue-900"
                        : reward.type === "merchandise"
                          ? "bg-purple-100 text-purple-900"
                          : "bg-pink-100 text-pink-900"
                    }
                  >
                    {reward.category}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="font-bold text-yellow-900 mb-1 text-sm">
                  {reward.name}
                </h3>
                <p className="text-xs text-gray-600 mb-3 flex-1">
                  {reward.description}
                </p>

                {/* Value */}
                <div className="mb-3 p-2 bg-yellow-50 rounded text-center">
                  <p className="text-xs text-gray-600">Valor</p>
                  <p className="font-bold text-yellow-700">{reward.value}</p>
                </div>

                {/* Points & Button */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-yellow-700 font-semibold">
                      <Zap className="w-4 h-4" />
                      {reward.points}
                    </span>
                    {userPoints >= reward.points && !redeemed.includes(reward.id) && (
                      <span className="text-xs text-green-600">✓ Disponível</span>
                    )}
                  </div>

                  <Button
                    className={`w-full text-sm ${
                      redeemed.includes(reward.id)
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : userPoints >= reward.points
                          ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={
                      userPoints < reward.points || redeemed.includes(reward.id)
                    }
                    onClick={() => handleRedeem(reward.id, reward.points)}
                  >
                    {redeemed.includes(reward.id) ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Resgatado
                      </>
                    ) : userPoints < reward.points ? (
                      <>
                        <Lock className="w-4 h-4 mr-1" />
                        Bloqueado
                      </>
                    ) : (
                      <>
                        <Gift className="w-4 h-4 mr-1" />
                        Resgatar
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="p-6 bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300">
          <h3 className="font-bold text-yellow-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Como Ganhar Mais Pontos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-yellow-900 mb-2">
                ✓ Participar de atividades gamificadas
              </p>
              <p className="text-sm text-yellow-900 mb-2">
                ✓ Assistir jogos ao vivo
              </p>
              <p className="text-sm text-yellow-900">
                ✓ Convidar amigos para a Arena
              </p>
            </div>
            <div>
              <p className="text-sm text-yellow-900 mb-2">
                ✓ Participar de enquetes e votações
              </p>
              <p className="text-sm text-yellow-900 mb-2">
                ✓ Compartilhar conteúdo nas redes
              </p>
              <p className="text-sm text-yellow-900">
                ✓ Completar desafios semanais
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
