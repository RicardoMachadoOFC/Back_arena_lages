import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  ArrowLeft,
  Play,
  Pause,
  Volume2,
  Zap,
  MessageCircle,
  Users,
} from "lucide-react";
import { useLocation } from "wouter";

export default function RadioPage() {
  const [, setLocation] = useLocation();
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(70);

  const currentBroadcast = {
    title: "Leoas da Serra vs Santa Catarina",
    narrator: "Narrador João Silva",
    status: "AO VIVO",
    listeners: 1234,
    score: "2 x 1",
    time: "35 min",
    description:
      "Acompanhe a narração completa do jogo das Leoas da Serra contra Santa Catarina, com análise tática e comentários exclusivos.",
  };

  const upcomingBroadcasts = [
    {
      id: 1,
      title: "Vôlei Lages vs Blumenau",
      date: "23 Jun",
      time: "20:00",
      narrator: "Narrador Carlos",
    },
    {
      id: 2,
      title: "Tênis de Mesa - Semifinal",
      date: "24 Jun",
      time: "18:00",
      narrator: "Narrador Pedro",
    },
    {
      id: 3,
      title: "Futebol - Rodada 5",
      date: "25 Jun",
      time: "19:30",
      narrator: "Narrador João Silva",
    },
  ];

  const chatMessages = [
    { author: "Torcedor1", message: "Que jogo emocionante! 🔥" },
    { author: "Torcedor2", message: "Vamo que vamo!" },
    { author: "Narrador", message: "Gooooool das Leoas! 🎉" },
    { author: "Torcedor3", message: "Que defesa incrível!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-red-100">
        <div className="container max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/")}
              className="text-red-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-red-900 flex items-center gap-2">
                <Radio className="w-6 h-6 animate-pulse" />
                Torcida+
              </h1>
              <p className="text-xs text-red-600">
                Transmissão ao vivo dos eventos esportivos
              </p>
            </div>
          </div>
          <Badge className="bg-red-600 text-white animate-pulse">
            🔴 AO VIVO
          </Badge>
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Player */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Broadcast */}
            <Card className="border-0 overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <Badge className="bg-white text-red-600 font-bold mb-3">
                      🔴 AO VIVO AGORA
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">
                      {currentBroadcast.title}
                    </h2>
                    <p className="text-red-100 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {currentBroadcast.listeners.toLocaleString()} ouvintes
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold">{currentBroadcast.score}</p>
                    <p className="text-red-100">{currentBroadcast.time}</p>
                  </div>
                </div>

                <p className="text-red-100 mb-6">{currentBroadcast.description}</p>

                {/* Player Controls */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-red-600 hover:bg-red-50 rounded-full w-16 h-16 flex items-center justify-center"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8" />
                      )}
                    </Button>
                  </div>

                  {/* Volume Control */}
                  <div className="flex items-center gap-3 bg-white/20 p-4 rounded-lg">
                    <Volume2 className="w-5 h-5" />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="flex-1"
                    />
                    <span className="text-sm">{volume}%</span>
                  </div>

                  {/* Narrator Info */}
                  <div className="bg-white/20 p-4 rounded-lg">
                    <p className="text-sm text-red-100 mb-1">Narrador</p>
                    <p className="font-bold text-lg">
                      {currentBroadcast.narrator}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Upcoming Broadcasts */}
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Próximas Transmissões
              </h3>
              <div className="space-y-3">
                {upcomingBroadcasts.map((broadcast) => (
                  <Card
                    key={broadcast.id}
                    className="p-4 border-red-200 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-red-900 mb-1">
                          {broadcast.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          🎙️ {broadcast.narrator}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-red-700">
                          {broadcast.date}
                        </p>
                        <p className="text-sm text-gray-600">{broadcast.time}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Chat */}
            <Card className="p-4 border-red-200 flex flex-col h-96">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Chat ao Vivo
              </h3>
              <div className="flex-1 overflow-y-auto space-y-2 mb-3 bg-red-50 p-3 rounded">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-semibold text-red-700">
                      {msg.author}:
                    </span>
                    <span className="text-gray-700 ml-1">{msg.message}</span>
                  </div>
                ))}
              </div>
              <input
                type="text"
                placeholder="Envie uma mensagem..."
                className="w-full px-3 py-2 border border-red-200 rounded text-sm"
              />
            </Card>

            {/* Stats */}
            <Card className="p-4 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Estatísticas
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm text-gray-700">Ouvintes</span>
                  <span className="font-bold text-red-700">1.234</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm text-gray-700">Tempo Online</span>
                  <span className="font-bold text-red-700">35 min</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded">
                  <span className="text-sm text-gray-700">Qualidade</span>
                  <span className="font-bold text-red-700">128 kbps</span>
                </div>
              </div>
            </Card>

            {/* Share */}
            <Card className="p-4 border-red-200">
              <h3 className="font-bold text-red-900 mb-3">Compartilhar</h3>
              <div className="space-y-2">
                {["WhatsApp", "Facebook", "Copiar Link"].map((action) => (
                  <Button
                    key={action}
                    variant="outline"
                    size="sm"
                    className="w-full border-red-300 text-red-700 hover:bg-red-50"
                  >
                    {action}
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
