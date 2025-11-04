import { Play } from "lucide-react";
import { ReactNode, useState } from "react";

interface LiveCasinoCardProps {
  name: string;
  provider: string;
  amount: string;
  image?: ReactNode;
  imageSrc?: string;
}

const LiveCasinoCard = ({ name, provider, amount, image, imageSrc }: LiveCasinoCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 w-56 sm:w-60 md:w-64 group cursor-pointer" onClick={() => window.dispatchEvent(new Event("open-register"))}>
      <div className="relative rounded-xl shadow-card hover:shadow-glow-red transition-transform duration-300 origin-center hover:scale-[1.02] overflow-hidden">
        {/* Top banner filled with image */}
        <div className="relative h-40 sm:h-44 md:h-48">
          {imageSrc && !imageError ? (
            <img 
              src={imageSrc} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover object-top"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-blue-card/50 flex items-center justify-center text-6xl">{image}</div>
          )}

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="h-8 w-8 text-primary-foreground" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="bg-card p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{name}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{provider}</p>
          <div className="flex items-center justify-between bg-muted rounded-lg px-2 sm:px-3 py-2">
            <span className="text-xs text-muted-foreground">Já pagou</span>
            <span className="text-sm font-bold text-primary">R$ {amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCasinoCard;
