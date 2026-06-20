import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Ticket,
  ArrowLeft,
  MapPin,
  Clock,
  Users,
  ShoppingCart,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { useLocation } from "wouter";

export default function TicketsPage() {
  const [, setLocation] = useLocation();
  const [cart, setCart] = useState<Array<{ id: number; quantity: number }>>([]);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const games = [
    {
      id: 1,
      sport: "Futebol",
      teams: "Leoas da Serra vs Santa Catarina",
      date: "22 Jun",
      time: "19:00",
      venue: "Ginásio Jones Minosso",
      capacity: 500,
      available: 145,
      prices: {
        inteira: 50,
        meia: 25,
        vip: 100,
      },
      image: "⚽",
    },
    {
      id: 2,
      sport: "Vôlei",
      teams: "Vôlei Lages vs Blumenau",
      date: "23 Jun",
      time: "20:00",
      venue: "Ginásio Ivo Silveira",
      capacity: 300,
      available: 89,
      prices: {
        inteira: 40,
        meia: 20,
        vip: 80,
      },
      image: "🏐",
    },
    {
      id: 3,
      sport: "Tênis de Mesa",
      teams: "Campeonato Regional - Semifinal",
      date: "24 Jun",
      time: "18:00",
      venue: "Clube de Tênis Lages",
      capacity: 200,
      available: 156,
      prices: {
        inteira: 30,
        meia: 15,
        vip: 60,
      },
      image: "🏓",
    },
    {
      id: 4,
      sport: "Futebol",
      teams: "Leoas da Serra vs Joinville",
      date: "25 Jun",
      time: "19:30",
      venue: "Ginásio Jones Minosso",
      capacity: 500,
      available: 234,
      prices: {
        inteira: 50,
        meia: 25,
        vip: 100,
      },
      image: "⚽",
    },
  ];

  const ticketTypes = [
    { id: "inteira", name: "Inteira", label: "Acesso Completo" },
    { id: "meia", name: "Meia-Entrada", label: "Estudante/Idoso" },
    { id: "vip", name: "VIP", label: "Camarote Premium" },
  ];

  const addToCart = (gameId: number, ticketType: string) => {
    const cartItem = cart.find((item) => item.id === gameId);
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === gameId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: gameId, quantity: 1 }]);
    }
  };

  const removeFromCart = (gameId: number) => {
    setCart(cart.filter((item) => item.id !== gameId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const game = games.find((g) => g.id === item.id);
      return total + (game?.prices.inteira || 0) * item.quantity;
    }, 0);
  };

  const selectedGameData = games.find((g) => g.id === selectedGame);

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
                <Ticket className="w-6 h-6" />
                Compra de Ingressos
              </h1>
              <p className="text-xs text-amber-600">
                Garanta seu lugar nos eventos de Lages
              </p>
            </div>
          </div>
          <Badge className="bg-amber-600 text-white">
            <ShoppingCart className="w-4 h-4 mr-1" />
            {cart.length} itens
          </Badge>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Games List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Próximos Eventos
            </h2>
            {games.map((game) => (
              <Card
                key={game.id}
                className={`p-5 border-2 cursor-pointer transition-all ${
                  selectedGame === game.id
                    ? "border-amber-600 bg-amber-50 shadow-lg"
                    : "border-amber-200 hover:border-amber-400"
                }`}
                onClick={() => setSelectedGame(game.id)}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{game.image}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <Badge className="bg-amber-100 text-amber-900 mb-2">
                          {game.sport}
                        </Badge>
                        <h3 className="font-bold text-amber-900 text-lg">
                          {game.teams}
                        </h3>
                      </div>
                      <Badge
                        className={
                          game.available > 100
                            ? "bg-amber-600 text-white"
                            : game.available > 50
                              ? "bg-yellow-600 text-white"
                              : "bg-red-600 text-white"
                        }
                      >
                        {game.available} disponíveis
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600 mb-3">
                      <p className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {game.date} às {game.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {game.venue}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Capacidade: {game.capacity}
                      </p>
                    </div>
                  </div>
                </div>

                {selectedGame === game.id && (
                  <div className="mt-4 pt-4 border-t border-amber-200 space-y-3">
                    <p className="font-semibold text-amber-900">
                      Selecione o tipo de ingresso:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {ticketTypes.map((type) => (
                        <Button
                          key={type.id}
                          variant="outline"
                          className="flex flex-col items-center gap-1 border-amber-300 text-amber-700 hover:bg-amber-100 h-auto py-3"
                          onClick={() => addToCart(game.id, type.id)}
                        >
                          <span className="font-bold">
                            R$ {game.prices[type.id as keyof typeof game.prices]}
                          </span>
                          <span className="text-xs">{type.name}</span>
                          <span className="text-xs text-gray-600">
                            {type.label}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Cart Sidebar */}
          <div className="space-y-4">
            <Card className="p-4 border-amber-200 sticky top-24">
              <h3 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Seu Carrinho
              </h3>

              {cart.length === 0 ? (
                <p className="text-sm text-gray-600 text-center py-4">
                  Nenhum ingresso selecionado
                </p>
              ) : (
                <div className="space-y-3 mb-4">
                  {cart.map((item) => {
                    const game = games.find((g) => g.id === item.id);
                    return (
                      <div
                        key={item.id}
                        className="p-3 bg-amber-50 rounded-lg border border-amber-200"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="font-semibold text-amber-900 text-sm">
                              {game?.teams}
                            </p>
                            <p className="text-xs text-gray-600">
                              {game?.date} às {game?.time}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            ✕
                          </Button>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            {item.quantity}x ingresso
                          </span>
                          <span className="font-bold text-amber-700">
                            R$ {(game?.prices.inteira || 0) * item.quantity}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Totals */}
              {cart.length > 0 && (
                <div className="space-y-2 pt-4 border-t border-amber-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>R$ {calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Taxa</span>
                    <span>R$ {(calculateTotal() * 0.05).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-amber-200">
                    <span>Total</span>
                    <span className="text-amber-700">
                      R$ {(calculateTotal() * 1.05).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              <Button
                className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white"
                disabled={cart.length === 0}
                onClick={() => setShowCheckout(true)}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Ir para Pagamento
              </Button>
            </Card>

            {/* Payment Info */}
            <Card className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Formas de Pagamento
              </h3>
              <div className="space-y-2 text-sm text-amber-800">
                <p>✓ Cartão de Crédito</p>
                <p>✓ Cartão de Débito</p>
                <p>✓ PIX</p>
                <p>✓ Boleto Bancário</p>
              </div>
            </Card>

            {/* Info */}
            <Card className="p-4 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-2">ℹ️ Informações</h3>
              <p className="text-xs text-gray-600">
                Os ingressos serão enviados por e-mail e WhatsApp após confirmação do pagamento.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
