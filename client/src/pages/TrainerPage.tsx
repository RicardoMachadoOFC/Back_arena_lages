import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react";
import { useLocation } from "wouter";

export default function TrainerPage() {
  const [, setLocation] = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const quizzes = [
    {
      id: 1,
      title: "Quiz: Conhecimento Futebol Lages",
      description: "Teste seus conhecimentos sobre o futebol local",
      difficulty: "Médio",
      questions: 10,
      reward: 150,
      icon: "⚽",
    },
    {
      id: 2,
      title: "Quiz: História do Vôlei Serrano",
      description: "Você conhece a história do vôlei da região?",
      difficulty: "Difícil",
      questions: 8,
      reward: 200,
      icon: "🏐",
    },
    {
      id: 3,
      title: "Quiz: Tênis de Mesa Lages",
      description: "Desafio sobre o tênis de mesa local",
      difficulty: "Fácil",
      questions: 5,
      reward: 100,
      icon: "🏓",
    },
  ];

  const questions = [
    {
      question: "Qual é o recorde de vitórias das Leoas da Serra?",
      options: ["15", "18", "22", "25"],
      correct: 2,
    },
    {
      question: "Em que ano foi fundado o Vôlei Lages?",
      options: ["1998", "2001", "2005", "2010"],
      correct: 1,
    },
    {
      question: "Qual é o principal ginásio de Lages?",
      options: [
        "Ginásio Ivo Silveira",
        "Ginásio Jones Minosso",
        "Ginásio da Serra",
        "Ginásio Central",
      ],
      correct: 0,
    },
    {
      question: "Quantas vezes Lages foi campeã estadual de futebol?",
      options: ["5", "8", "12", "15"],
      correct: 2,
    },
    {
      question: "Qual é a cor oficial das Leoas da Serra?",
      options: ["Azul", "Vermelho", "Verde", "Amarelo"],
      correct: 1,
    },
    {
      question: "Em qual região fica Lages?",
      options: ["Vale do Itajaí", "Serra Catarinense", "Litoral", "Planalto"],
      correct: 1,
    },
    {
      question: "Qual esporte tem mais participantes em Lages?",
      options: ["Tênis de Mesa", "Vôlei", "Futebol", "Basquete"],
      correct: 2,
    },
    {
      question: "Qual é o apelido dos torcedores de Lages?",
      options: ["Serranos", "Tropeiros", "Lageanos", "Montanheses"],
      correct: 1,
    },
    {
      question: "Quantos ginásios principais tem Lages?",
      options: ["2", "3", "4", "5"],
      correct: 1,
    },
    {
      question: "Qual é a altitude aproximada de Lages?",
      options: ["500m", "800m", "1000m", "1200m"],
      correct: 2,
    },
  ];

  const handleAnswer = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    setAnswered(true);

    if (optionIndex === questions[currentQuestion].correct) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setAnswered(false);
  };

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
                <Brain className="w-6 h-6" />
                Torcida+
              </h1>
              <p className="text-xs text-amber-600">
                Teste seu conhecimento esportivo
              </p>
            </div>
          </div>
          {quizStarted && !quizCompleted && (
            <Badge className="bg-amber-600 text-white">
              Pergunta {currentQuestion + 1}/{questions.length}
            </Badge>
          )}
        </div>
      </header>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        {!quizStarted ? (
          <>
            {/* Quiz Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-amber-900 mb-4">
                Escolha um Quiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quizzes.map((quiz) => (
                  <Card
                    key={quiz.id}
                    className="p-6 border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer hover:shadow-lg flex flex-col h-full"
                    onClick={() => setQuizStarted(true)}
                  >
                    <div className="text-4xl mb-3">{quiz.icon}</div>
                    <h3 className="font-bold text-amber-900 mb-2">
                      {quiz.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {quiz.description}
                    </p>
                    <div className="space-y-2 mb-4 flex-grow">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Dificuldade:</span>
                        <Badge
                          className={
                            quiz.difficulty === "Fácil"
                              ? "bg-green-100 text-green-900"
                              : quiz.difficulty === "Médio"
                                ? "bg-yellow-100 text-yellow-900"
                                : "bg-red-100 text-red-900"
                          }
                        >
                          {quiz.difficulty}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Perguntas:</span>
                        <span className="font-semibold">{quiz.questions}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Recompensa:</span>
                        <span className="font-bold text-amber-600">
                          +{quiz.reward} pontos
                        </span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        Iniciar Quiz
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <Card className="p-6 border-2 border-amber-200">
              <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Ranking de Quizzadores
              </h3>
              <div className="space-y-2">
                {[
                  { rank: 1, name: "João Torcedor", points: 1250, badge: "🥇" },
                  { rank: 2, name: "Maria Silva", points: 1180, badge: "🥈" },
                  { rank: 3, name: "Pedro Lages", points: 1050, badge: "🥉" },
                  { rank: 4, name: "Ana Costa", points: 980, badge: "⭐" },
                  { rank: 5, name: "Carlos Futsal", points: 920, badge: "⭐" },
                ].map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{user.badge}</span>
                      <div>
                        <p className="font-semibold text-amber-900">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-600">
                          Posição #{user.rank}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-amber-600">
                      {user.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        ) : !quizCompleted ? (
          /* Quiz in Progress */
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-amber-200">
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-amber-900">
                    Progresso
                  </span>
                  <span className="text-sm text-gray-600">
                    {currentQuestion + 1}/{questions.length}
                  </span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-2">
                  <div
                    className="bg-amber-600 h-2 rounded-full transition-all"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-amber-900 mb-6">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className={`w-full justify-start p-4 text-left border-2 transition-all ${
                      selectedAnswer === index
                        ? index === questions[currentQuestion].correct
                          ? "border-green-500 bg-green-50"
                          : "border-red-500 bg-red-50"
                        : "border-amber-200 hover:border-amber-400"
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                  >
                    <span className="flex-1">{option}</span>
                    {answered && index === questions[currentQuestion].correct && (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    )}
                    {answered &&
                      selectedAnswer === index &&
                      index !== questions[currentQuestion].correct && (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                  </Button>
                ))}
              </div>

              {/* Score */}
              <div className="mb-6 p-4 bg-amber-100 rounded-lg">
                <p className="text-sm text-amber-900">Sua pontuação atual</p>
                <p className="text-2xl font-bold text-amber-600">{score}</p>
              </div>

              {/* Next Button */}
              {answered && (
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={handleNext}
                >
                  {currentQuestion + 1 === questions.length
                    ? "Finalizar Quiz"
                    : "Próxima Pergunta"}
                </Button>
              )}
            </Card>
          </div>
        ) : (
          /* Quiz Completed */
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-2 border-amber-200 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                Parabéns!
              </h2>
              <p className="text-gray-600 mb-6">Você completou o quiz</p>

              <div className="bg-amber-100 rounded-lg p-6 mb-6">
                <p className="text-sm text-amber-900 mb-2">Pontuação Final</p>
                <p className="text-4xl font-bold text-amber-600">{score}</p>
                <p className="text-xs text-amber-600 mt-2">
                  +{score} pontos adicionados à sua conta
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={resetQuiz}
                >
                  Fazer Outro Quiz
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                  onClick={() => setLocation("/")}
                >
                  Voltar para Home
                </Button>
              </div>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
