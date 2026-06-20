import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Store,
  MapPin,
  Globe,
  Phone,
  Mail,
  ShoppingBag,
} from "lucide-react";
import { useLocation } from "wouter";

export default function TeamsShopPage() {
  const [, setLocation] = useLocation();
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  const teams = [
    {
      id: 1,
      name: "Leoas da Serra",
      sport: "Futebol",
      logo: "⚽",
      description: "Time oficial de futebol de Lages",
      physicalStore: "Ginásio Jones Minosso - Loja Física",
      address: "Rua Principal, 123 - Lages, SC",
      phone: "(49) 3222-1234",
      email: "leoas@lages.com.br",
      onlineStore: "https://loja.leoas.com.br",
      products: ["Camisetas", "Bonés", "Mochilas", "Garrafas"],
      image: "🟡",
    },
    {
      id: 2,
      name: "Vôlei Lages",
      sport: "Vôlei",
      logo: "🏐",
      description: "Time de vôlei feminino de Lages",
      physicalStore: "Ginásio Ivo Silveira - Loja Física",
      address: "Avenida Central, 456 - Lages, SC",
      phone: "(49) 3222-5678",
      email: "volei@lages.com.br",
      onlineStore: "https://loja.voleilages.com.br",
      products: ["Uniformes", "Acessórios", "Bolas", "Caneleiras"],
      image: "🔵",
    },
    {
      id: 3,
      name: "Tênis Clube Lages",
      sport: "Tênis de Mesa",
      logo: "🏓",
      description: "Clube de tênis de mesa da região",
      physicalStore: "Clube de Tênis Lages - Loja Física",
      address: "Rua do Esporte, 789 - Lages, SC",
      phone: "(49) 3222-9999",
      email: "tenis@lages.com.br",
      onlineStore: "https://loja.tenislages.com.br",
      products: ["Raquetes", "Bolas", "Mesas", "Roupas Esportivas"],
      image: "🔴",
    },
    {
      id: 4,
      name: "Lages Futsal",
      sport: "Futebol",
      logo: "⚽",
      description: "Time de futsal da Serra Catarinense",
      physicalStore: "Ginásio Jones Minosso - Loja Física",
      address: "Rua Principal, 123 - Lages, SC",
      phone: "(49) 3222-1111",
      email: "futsal@lages.com.br",
      onlineStore: "https://loja.futsal.com.br",
      products: ["Camisetas", "Chuteiras", "Meias", "Caneleiras"],
      image: "🟠",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200">
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
                <Store className="w-6 h-6" />
                Ajude seu Time
              </h1>
              <p className="text-xs text-amber-600">
                Lojas online e físicas das equipes
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* Info Banner */}
        <Card className="p-6 bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 mb-8">
          <h2 className="text-lg font-bold text-amber-900 mb-2">
            🧡 Apoie seus Times Favoritos
          </h2>
          <p className="text-amber-800">
            Compre produtos exclusivos nas lojas online ou visite nossas lojas
            físicas dentro dos eventos. Cada compra ajuda a fortalecer o esporte
            local!
          </p>
        </Card>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map((team) => (
            <Card
              key={team.id}
              className={`p-6 border-2 cursor-pointer transition-all ${
                selectedTeam === team.id
                  ? "border-amber-600 bg-amber-50 shadow-lg"
                  : "border-amber-200 hover:border-amber-400"
              }`}
              onClick={() =>
                setSelectedTeam(selectedTeam === team.id ? null : team.id)
              }
            >
              {/* Team Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{team.logo}</span>
                  <div>
                    <h3 className="font-bold text-amber-900 text-lg">
                      {team.name}
                    </h3>
                    <Badge className="bg-amber-100 text-amber-900 text-xs">
                      {team.sport}
                    </Badge>
                  </div>
                </div>
                <span className="text-2xl">{team.image}</span>
              </div>

              <p className="text-sm text-gray-600 mb-4">{team.description}</p>

              {/* Contact Info */}
              <div className="space-y-2 mb-4 text-sm">
                <p className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  {team.address}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4 text-amber-600" />
                  {team.phone}
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4 text-amber-600" />
                  {team.email}
                </p>
              </div>

              {/* Expandable Section */}
              {selectedTeam === team.id && (
                <div className="mt-4 pt-4 border-t border-amber-200 space-y-4">
                  {/* Physical Store */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <Store className="w-4 h-4" />
                      Loja Física
                    </h4>
                    <p className="text-sm text-amber-800 mb-2">
                      {team.physicalStore}
                    </p>
                    <p className="text-xs text-amber-700">
                      Visite durante os eventos para aproveitar promoções
                      exclusivas e conhecer nossos produtos!
                    </p>
                  </div>

                  {/* Online Store */}
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Loja Online
                    </h4>
                    <div className="space-y-2 mb-3">
                      <p className="text-xs text-orange-700 font-semibold">
                        Produtos disponíveis:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {team.products.map((product) => (
                          <Badge
                            key={product}
                            className="bg-orange-100 text-orange-900 text-xs"
                          >
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => window.open(team.onlineStore, "_blank")}
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Acessar Loja Online
                    </Button>
                  </div>
                </div>
              )}

              {/* Quick Action Buttons */}
              {selectedTeam !== team.id && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-amber-300 text-amber-700 hover:bg-amber-50"
                    onClick={() => window.open(team.onlineStore, "_blank")}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Loja Online
                  </Button>
                  <Button
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => setSelectedTeam(team.id)}
                  >
                    Detalhes
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Support Section */}
        <Card className="p-6 border-amber-300 mt-8">
          <h3 className="text-lg font-bold text-amber-900 mb-4">
            ❓ Como Funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🛍️</div>
              <p className="text-sm text-gray-700">
                <strong>Compre Online</strong> - Acesse a loja online do seu
                time favorito
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏪</div>
              <p className="text-sm text-gray-700">
                <strong>Visite a Loja Física</strong> - Encontre produtos
                exclusivos durante os eventos
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💪</div>
              <p className="text-sm text-gray-700">
                <strong>Apoie o Time</strong> - Cada compra fortalece o esporte
                local
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
