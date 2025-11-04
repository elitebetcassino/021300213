import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/home"), 1400);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <img src="/assets/logo/logo-normal.png" alt="EliteBet" className="h-24 w-24 sm:h-28 sm:w-28 animate-soft-pulse" />
    </div>
  );
};

export default Splash;




