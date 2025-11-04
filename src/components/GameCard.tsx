import { ReactNode, useState } from "react";

interface GameCardProps {
  name: string;
  provider: string;
  amount: string;
  image?: ReactNode;
  imageSrc?: string;
  gradient: string;
}

const GameCard = ({ name, provider, amount, image, imageSrc, gradient }: GameCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0 w-44 sm:w-48 md:w-56 group cursor-pointer" onClick={() => window.dispatchEvent(new Event("open-register"))}>
      <div className={`relative rounded-xl p-4 sm:p-6 h-64 sm:h-72 ${gradient} shadow-card transition-transform duration-300 origin-center hover:scale-[1.02] ${gradient.includes('red') ? 'hover:shadow-glow-red' : gradient.includes('purple') ? 'hover:shadow-glow-purple' : gradient.includes('orange') ? 'hover:shadow-glow-orange' : gradient.includes('blue') ? 'hover:shadow-glow-blue' : gradient.includes('green') ? 'hover:shadow-glow-green' : 'hover:shadow-glow-gold'} overflow-hidden`}>
        {/* Background image fill (stops at name area with fade) */}
        {imageSrc && !imageError && (
          <>
            <img 
              src={imageSrc} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
            {/* Bottom fade so image desaparece sob a área do nome/infos */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
          </>
        )}
        {/* Global dark overlay for readability when using gradient fallback */}
        {(!imageSrc || imageError) && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />}
        
        <div className="relative z-10 h-full">
          {(!imageSrc || imageError) && (
            <div className="p-6">
              <div className="text-6xl">{image}</div>
            </div>
          )}

          {/* Bottom info overlay, centered with same sizing */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-center">
            <h3 className="text-base font-semibold text-white mb-0.5">{name}</h3>
            <p className="text-xs text-white/80 mb-2">{provider}</p>
            <div className="bg-black/40 rounded-md px-2 py-1 backdrop-blur-sm inline-flex items-center gap-2">
              <span className="text-[10px] text-white/70">Já pagou</span>
              <span className="text-sm font-bold text-primary">R$ {amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
