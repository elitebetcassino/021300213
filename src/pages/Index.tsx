import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import WinnerCard from "@/components/WinnerCard";
import GameCard from "@/components/GameCard";
import SportCard from "@/components/SportCard";
import LiveCasinoCard from "@/components/LiveCasinoCard";
import AdvantageCard from "@/components/AdvantageCard";
import { Trophy, Flame, Circle, Spade, Star, Plane, Rocket, Zap, Gamepad2, Hand, Dice3, Club, CreditCard, Gift, Target, PenLine, BadgeDollarSign } from "lucide-react";

const Index = () => {
  const winners = [
    { playerName: "T***** A", gameName: "Fortune Tiger", amount: "15.234,50", avatarSrc: "/assets/bet/jogos/fortune-tiger.png" },
    { playerName: "M***** S", gameName: "Aviator", amount: "22.150,00", avatarSrc: "/assets/bet/jogos/aviaozinho.png" },
    { playerName: "R***** L", gameName: "Spaceman", amount: "8.975,30", avatarSrc: "/assets/bet/jogos/spaceman.png" },
    { playerName: "C***** P", gameName: "Fortune Ox", amount: "12.500,00", avatarSrc: "/assets/bet/jogos/fortune-ox.png" },
    { playerName: "A***** M", gameName: "Gates of Olympus", amount: "18.340,75", avatarSrc: "/assets/bet/jogos/gates-of-olympus.png" },
  ];

  const topGames = [
    { name: "Aviator", provider: "Spribe", amount: "2.5M", imageSrc: "/assets/bet/jogos/aviaozinho.png", gradient: "bg-gradient-red" },
    { name: "Spaceman", provider: "Pragmatic Play", amount: "1.8M", imageSrc: "/assets/bet/jogos/spaceman.png", gradient: "bg-gradient-purple" },
    { name: "Fortune Tiger", provider: "PG Soft", amount: "3.2M", imageSrc: "/assets/bet/jogos/fortune-tiger.png", gradient: "bg-gradient-orange" },
    { name: "Gates of Olympus", provider: "Pragmatic Play", amount: "2.1M", imageSrc: "/assets/bet/jogos/gates-of-olympus.png", gradient: "bg-gradient-blue" },
    { name: "Fortune Ox", provider: "PG Soft", amount: "1.5M", imageSrc: "/assets/bet/jogos/fortune-ox.png", gradient: "bg-gradient-green" },
    { name: "Sweet Bonanza", provider: "Pragmatic Play", amount: "2.8M", imageSrc: "/assets/bet/jogos/sweet-bonanza-1000.png", gradient: "bg-gradient-purple" },
  ];

  const sports = [
    { name: "Futebol", imageSrc: "/assets/bet/esportes/futebol.webp", gradient: "bg-gradient-green" },
    { name: "E-sports", imageSrc: "/assets/bet/esportes/e-sports.webp", gradient: "bg-gradient-purple" },
    { name: "Tênis", imageSrc: "/assets/bet/esportes/tenis.webp", gradient: "bg-gradient-blue" },
    { name: "Basquete", imageSrc: "/assets/bet/esportes/basquete.webp", gradient: "bg-gradient-orange" },
    { name: "Vôlei", imageSrc: "/assets/bet/esportes/volei.webp", gradient: "bg-gradient-red" },
    { name: "Handebol", imageSrc: "/assets/bet/esportes/handebol.webp", gradient: "bg-gradient-blue" },
  ];

  const liveCasino = [
    { name: "Speed Baccarat", provider: "Evolution", amount: "950K", imageSrc: "/assets/bet/cassinos/speed-baccarat-1.jpeg" },
    { name: "Roleta", provider: "Pragmatic Play", amount: "1.2M", imageSrc: "/assets/bet/cassinos/american-roulette-evl.jpeg" },
    { name: "Blackjack Clássico", provider: "Evolution", amount: "880K", imageSrc: "/assets/bet/cassinos/blackjack-16.jpeg" },
    { name: "Bac Bo", provider: "Evolution", amount: "720K", imageSrc: "/assets/bet/cassinos/bac-bo-2.png" },
    { name: "Auto-Roleta", provider: "Evolution", amount: "1.1M", imageSrc: "/assets/bet/cassinos/auto-roulette-evo.jpeg" },
    { name: "Lightning Roulette", provider: "Evolution", amount: "1.5M", imageSrc: "/assets/bet/cassinos/xxxtreme-lightning-roulette.jpeg" },
  ];

  const advantages = [
    { title: "Criar Aposta", icon: <PenLine className="h-8 w-8" /> },
    { title: "Pagamento Antecipado", icon: <CreditCard className="h-8 w-8" /> },
    { title: "Apostas Flash", icon: <Zap className="h-8 w-8" /> },
    { title: "Promoções de Esportes", icon: <Gift className="h-8 w-8" /> },
    { title: "Quiz Grátis", icon: <Target className="h-8 w-8" /> },
    { title: "Aposte em e-sports", icon: <Gamepad2 className="h-8 w-8" /> },
    { title: "Palpite no Futebingo", icon: <Circle className="h-8 w-8" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Maiores Ganhadores com background */}
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/assets/background/background-2.png')] bg-cover bg-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
          <Section title="Maiores ganhadores" icon={<Trophy className="text-primary" />}>
            {winners.map((winner, index) => (
              <WinnerCard key={index} {...winner} />
            ))}
          </Section>
        </div>

        {/* Mais Premiados */}
        <Section title="Mais premiados" icon={<Flame className="text-secondary" />}>
          {topGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </Section>

        {/* Apostas Esportivas */}
        <Section title="Apostas esportivas" icon={<Circle className="text-primary fill-primary" />}>
          {sports.map((sport, index) => (
            <SportCard key={index} {...sport} />
          ))}
        </Section>

        {/* Cassino ao Vivo */}
        <Section title="Cassino ao vivo" icon={<Spade className="text-secondary" />}>
          {liveCasino.map((game, index) => (
            <LiveCasinoCard key={index} {...game} />
          ))}
        </Section>

        {/* Vantagens EliteBet */}
        <Section title="Vantagens EliteBet" icon={<Star className="text-primary fill-primary" />}>
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
