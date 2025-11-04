import { Trophy } from "lucide-react";
import { ReactNode, useState } from "react";

interface WinnerCardProps {
  playerName: string;
  gameName: string;
  amount: string;
  avatar?: ReactNode;
  avatarSrc?: string;
}

const WinnerCard = ({ playerName, gameName, amount, avatar, avatarSrc }: WinnerCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 w-56 sm:w-60 md:w-64 bg-card rounded-xl p-3 sm:p-4 shadow-card hover:shadow-glow-gold transition-transform duration-300 origin-center hover:scale-[1.02]">
      <div className="flex items-center space-x-3">
        {avatarSrc && !imageError ? (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1 ring-white/10">
            <img 
              src={avatarSrc} 
              alt={gameName} 
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-gold flex items-center justify-center text-xl sm:text-2xl">
            {avatar}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-muted-foreground truncate">{playerName}</p>
          <p className="text-[10px] sm:text-xs text-muted-foreground truncate">{gameName}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
        <p className="text-lg sm:text-xl font-bold text-primary">R$ {amount}</p>
      </div>
    </div>
  );
};

export default WinnerCard;
