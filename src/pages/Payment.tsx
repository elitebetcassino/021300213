import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import * as React from "react";

const amounts = [10.0, 20.0, 30.0, 40.0, 50.0, 60.0, 70.0, 80.0, 90.0, 100.0, 150.0, 200.0];

const Payment = () => {
  const navigate = useNavigate();
  const [referral, setReferral] = React.useState("");
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(null);

  const applyReferral = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Sempre inválido, pois não há indicadores cadastrados
    toast({
      variant: "destructive",
      title: "Código de indicação inválido",
      description: "Nenhum indicador encontrado para este código.",
      duration: 2500,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Pagamento</h1>
          <div className="rounded-xl bg-card border border-border px-4 py-2 shadow-card">
            <p className="text-xs text-muted-foreground">Saldo atual</p>
            <p className="text-lg font-bold text-primary">R$ 0,00</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-blue-card/40 p-5 shadow-card">
          <div className="mb-5 rounded-xl border border-primary bg-primary shadow-gold">
            <div className="promo-marquee relative py-3">
              <div className="promo-marquee-track items-center gap-8 px-4">
                <span className="text-base font-bold text-primary-foreground uppercase">
                  PROMOÇÃO ESPECIAL — após comprar R$ 30 ganha R$ 50 de bônus — R$ 50 ganha R$ 100 de bônus — promoção limitada
                </span>
                <span className="text-base font-bold text-primary-foreground uppercase">
                  PROMOÇÃO ESPECIAL — após comprar R$ 30 ganha R$ 50 de bônus — R$ 50 ganha R$ 100 de bônus — promoção limitada
                </span>
                <span className="text-base font-bold text-primary-foreground uppercase">
                  PROMOÇÃO ESPECIAL — após comprar R$ 30 ganha R$ 50 de bônus — R$ 50 ganha R$ 100 de bônus — promoção limitada
                </span>
                <span className="text-base font-bold text-primary-foreground uppercase">
                  PROMOÇÃO ESPECIAL — após comprar R$ 30 ganha R$ 50 de bônus — R$ 50 ganha R$ 100 de bônus — promoção limitada
                </span>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-sm font-semibold text-foreground mb-2">Indicação</h2>
            <form onSubmit={applyReferral} className="flex gap-2">
              <input
                type="text"
                value={referral}
                onChange={(e) => setReferral(e.target.value)}
                placeholder="Nome ou código de quem indicou"
                className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Aplicar
              </button>
            </form>
          </div>

          <p className="text-sm text-muted-foreground mb-4">Selecione um valor para continuar:</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {amounts.map((value) => {
              const active = selectedAmount === value;
              return (
                <button
                  key={value}
                  onClick={() => setSelectedAmount(value)}
                  className={`rounded-lg border px-4 py-3 transition-colors shadow-card ${
                    active
                      ? "bg-primary/15 border-primary text-foreground"
                      : "bg-card border-border hover:bg-primary/10 hover:border-primary text-foreground"
                  }`}
                >
                  R$ {value.toFixed(2)}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={() => navigate("/home")}
            className="rounded-lg px-4 py-2 border border-border text-sm hover:bg-muted"
          >
            Voltar para a página principal
          </button>

          <button
            disabled={selectedAmount === null || (selectedAmount ?? 0) < 10}
            onClick={() => {
              if (selectedAmount === null || selectedAmount < 10) {
                toast({ variant: "destructive", title: "Valor inválido", description: "O valor mínimo é R$ 10,00." });
                return;
              }
              navigate(`/pagamento/pix/${selectedAmount}`);
            }}
            className="rounded-lg px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-gold"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;


