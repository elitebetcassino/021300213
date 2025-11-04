import { useNavigate, useParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import * as React from "react";

const allowedAmounts = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200];

// PIX "copia e cola" por valor
const pixPayloadByAmount: Record<number, string> = {
  10: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402105802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63049FFA",
  20: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402205802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***6304ED2D",
  30: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402305802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***6304337F",
  40: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402405802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63040883",
  50: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402505802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***6304D6D1",
  60: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e520400005303986540560.005802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63047070",
  70: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402705802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63047A54",
  80: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e520400005303986540580.005802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***6304B780",
  90: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e5204000053039865402905802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63040DAC",
  100: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e52040000530398654031005802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***630498F0",
  150: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e52040000530398654031005802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***630498F0",
  200: "00020126580014BR.GOV.BCB.PIX0136dfb98362-a35d-4b93-9852-8c7656b1345e52040000530398654032005802BR5924Guilherme Silva de Souza6009SAO PAULO62070503***63041125",
};

const Pix = () => {
  const navigate = useNavigate();
  const { amount } = useParams();
  const amountNumber = Number(amount);
  const payload = pixPayloadByAmount[amountNumber];

  React.useEffect(() => {
    if (!amount || !allowedAmounts.includes(amountNumber)) {
      toast({ variant: "destructive", title: "Valor inválido", description: "Selecione um valor válido." });
      navigate("/pagamento", { replace: true });
    }
  }, [amount, amountNumber, navigate]);

  if (!amount || !allowedAmounts.includes(amountNumber)) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-start">
          <h1 className="text-2xl font-bold text-foreground">Pagamento via PIX</h1>
        </div>

        <div className="rounded-2xl border border-border bg-blue-card/40 p-5 shadow-card flex flex-col items-center gap-4">
          <p className="text-xl font-bold text-primary">R$ {amountNumber.toFixed(2)}</p>
          <p className="text-sm text-muted-foreground">Escaneie o QR Code com seu app do banco:</p>
          <img
            src={`/assets/pay/${amountNumber}.png`}
            alt={`PIX R$ ${amountNumber}`}
            className="w-full max-w-sm rounded-lg border border-border bg-card p-2"
          />
          {payload && (
            <div className="w-full max-w-sm flex flex-col gap-2">
              <p className="text-xs text-muted-foreground">Ou copie o código PIX (copia e cola):</p>
              <div className="relative w-full">
                <textarea
                  readOnly
                  value={payload}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-card px-3 pr-24 py-2 text-xs leading-relaxed text-foreground break-all"
                />
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(payload);
                      toast({ title: "Código copiado", description: "Cole no seu app do banco para pagar." });
                    } catch (e) {
                      toast({ variant: "destructive", title: "Não foi possível copiar", description: "Selecione e copie manualmente." });
                    }
                  }}
                  className="absolute top-2 right-2 rounded-lg px-3 py-2 bg-primary text-primary-foreground text-xs hover:bg-primary/90"
                >
                  Copiar PIX
                </button>
              </div>
            </div>
          )}
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/home")}
              className="rounded-lg px-4 py-2 border border-border text-sm hover:bg-muted"
            >
              Voltar para a página principal
            </button>
            <button
              onClick={() => navigate("/pagamento")}
              className="rounded-lg px-4 py-2 border border-border text-sm hover:bg-muted"
            >
              Escolher outro valor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pix;


