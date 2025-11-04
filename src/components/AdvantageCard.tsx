import { ReactNode } from "react";

interface AdvantageCardProps {
  title: string;
  icon: ReactNode;
}

const AdvantageCard = ({ title, icon }: AdvantageCardProps) => {
  return (
    <div className="flex-shrink-0 w-56 group cursor-pointer" onClick={() => window.dispatchEvent(new Event("open-register"))}>
      <div className="bg-blue-lighter rounded-xl p-6 h-44 shadow-card transition-transform duration-300 origin-center hover:scale-[1.02] border border-border/50 hover:shadow-glow-blue">
        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
          <div className="text-5xl animate-float">{icon}</div>
          <h3 className="text-base font-bold text-foreground leading-tight">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default AdvantageCard;
