import { ReactNode } from "react";

interface SportCardProps {
  name: string;
  icon?: ReactNode;
  imageSrc?: string;
  gradient: string;
}

const SportCard = ({ name, icon, imageSrc, gradient }: SportCardProps) => {
  return (
    <div className="flex-shrink-0 w-36 sm:w-40 md:w-44 group cursor-pointer" onClick={() => window.dispatchEvent(new Event("open-register"))}>
      <div className={`relative rounded-xl p-4 sm:p-6 h-40 sm:h-48 ${gradient} shadow-card transition-transform duration-300 origin-center hover:scale-[1.02] ${gradient.includes('red') ? 'hover:shadow-glow-red' : gradient.includes('purple') ? 'hover:shadow-glow-purple' : gradient.includes('orange') ? 'hover:shadow-glow-orange' : gradient.includes('blue') ? 'hover:shadow-glow-blue' : gradient.includes('green') ? 'hover:shadow-glow-green' : 'hover:shadow-glow-gold'} overflow-hidden`}>
        {imageSrc && (
          <>
            <img
              src={imageSrc}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
          </>
        )}
        {!imageSrc && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />}
        
        <div className="relative z-10 h-full flex flex-col items-center justify-between">
          <div className="text-xs sm:text-sm font-bold text-white/80 mb-2">ELITEBET</div>
          {!imageSrc && (
            <div className="mb-2 flex items-center justify-center">
              <div className="text-5xl">{icon}</div>
            </div>
          )}
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
