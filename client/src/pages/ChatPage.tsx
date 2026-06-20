import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  Send,
  Users,
  Settings,
  ArrowLeft,
  Heart,
  Share2,
} from "lucide-react";
import { useLocation, useRoute } from "wouter";

export default function ChatPage() {
  const [, params] = useRoute("/chat/:channel");
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "João Torcedor",
      role: "torcedor",
      message: "Vamo que vamo! Leoas da Serra vai ganhar hoje! 🔥",
      timestamp: "14:32",
      likes: 12,
    },
    {
      id: 2,
      author: "Maria Silva",
      role: "torcedor",
      message: "Quem vai no jogo hoje? Vamos nos encontrar na entrada!",
      timestamp: "14:35",
      likes: 5,
    },

    {
      id: 4,
      author: "Pedro Lages",
      role: "torcedor",
      message: "Eu chuto 3x1 para as Leoas!",
      timestamp: "14:40",
      likes: 3,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const channelNames: Record<string, string> = {
    geral: "🌍 Chat Geral",
    futebol: "⚽ Futebol",
    volei: "🏐 Vôlei",
    "tenis-mesa": "🏓 Tênis de Mesa",
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        author: "Você",
        role: "torcedor",
        message: newMessage,
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        likes: 0,
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
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
              <h1 className="text-xl font-bold text-amber-900">
                {channelNames[params?.channel || "geral"]}
              </h1>
              <p className="text-xs text-amber-600">234 membros online</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-amber-700">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="container max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Messages */}
            <Card className="p-4 border-amber-200 h-96 overflow-y-auto space-y-3 bg-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`p-3 rounded-lg ${
                    msg.role === "trainer"
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500"
                      : "bg-amber-50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-amber-900">
                        {msg.author}
                      </span>
                      {msg.role === "trainer" && (
                        <Badge className="bg-blue-600 text-white text-xs">
                          Treinador
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-800 mb-2">{msg.message}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-600">
                    <button className="flex items-center gap-1 hover:text-red-600 transition">
                      <Heart className="w-3 h-3" />
                      {msg.likes}
                    </button>
                    <button className="flex items-center gap-1 hover:text-amber-600 transition">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </Card>

            {/* Input Area */}
            <Card className="p-4 border-amber-200 bg-white">
              <div className="flex gap-2">
                <Input
                  placeholder="Envie uma mensagem..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="border-amber-200"
                />
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={handleSendMessage}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 Dica: Use #hashtags para organizar conversas
              </p>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Channel Info */}
            <Card className="p-4 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Sobre o Canal
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Espaço para torcedores se conectarem, compartilharem estratégias
                de torcida e planejarem gritos de guerra.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
              >
                <Users className="w-4 h-4 mr-2" />
                Ver Membros
              </Button>
            </Card>

            {/* Trending Topics */}
            <Card className="p-4 border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3">Trending</h3>
              <div className="space-y-2">
                {["#VamoQueVamo", "#LeosGanham", "#SerraForte", "#Torcida"].map(
                  (tag) => (
                    <button
                      key={tag}
                      className="w-full text-left p-2 rounded hover:bg-amber-50 text-sm text-amber-700 font-medium transition"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </Card>

            {/* Próximo Jogo */}
            <Card className="p-4 border-amber-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="font-bold text-green-900 mb-3">📅 Próximo Jogo</h3>
              <div className="space-y-2 text-sm text-green-800">
                <p className="font-semibold">Leoas da Serra vs Santa Catarina</p>
                <p>22 Jun • 19:00</p>
                <p>Ginásio Jones Minosso</p>
              </div>
              <Button
                size="sm"
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white"
              >
                Confirmar Presença
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
