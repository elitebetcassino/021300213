import { Bell, Menu, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const menuItems = [
    "Esportes",
    "Esportes ao vivo",
    "Cassino",
    "Cassino ao vivo",
    "Aviator",
    "Fortune Tiger",
  ];

  const navigate = useNavigate();

  const [openRegister, setOpenRegister] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [openLogin, setOpenLogin] = React.useState(false);
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const [openMobile, setOpenMobile] = React.useState(false);

  const onSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const emailValid = /.+@.+\..+/.test(email);
    const strongLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);
    const passValid = strongLength && hasUpper && hasLower && hasNumber && hasSpecial;
    if (!emailValid || !passValid || password !== confirmPassword) {
      toast({
        title: "Verifique os dados",
        description: !emailValid
          ? "E-mail inválido."
          : !passValid
          ? "Senha fraca. Atenda aos requisitos."
          : "As senhas não coincidem.",
        duration: 2500,
      });
      return;
    }
    toast({
      title: "Cadastro realizado com sucesso",
      description: "Redirecionando para a página de pagamento...",
      duration: 1500,
    });
    setOpenRegister(false);
    setTimeout(() => navigate("/pagamento"), 1200);
  };

  const onSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Sempre retornar inválido, mostrar aviso vermelho e manter modal aberto
    toast({
      variant: "destructive",
      title: "Login inválido",
      description: "E-mail ou senha incorretos. Tente novamente.",
      duration: 2500,
    });
  };

  React.useEffect(() => {
    const open = () => setOpenRegister(true);
    // Listen for global request to open registration (from carousels)
    window.addEventListener("open-register" as any, open as EventListener);
    return () => window.removeEventListener("open-register" as any, open as EventListener);
  }, []);

  return (<>
    <header className="sticky top-0 z-50 bg-blue-dark/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
            >
              <span className="text-primary">ELITE</span>
              <span className="text-foreground">BET</span>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setOpenRegister(true)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() =>
                toast({
                  title: "Promoção relâmpago",
                  description:
                    "Deposite R$ 20 e ganhe + R$ 50 de bônus para apostar!",
                  duration: 5000,
                })
              }
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full" />
            </Button>

            <Button variant="outline" className="inline-flex" onClick={() => setOpenLogin(true)}>
              Entrar
            </Button>

            <Button onClick={() => setOpenRegister(true)} className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold">
              Cadastrar
            </Button>

            <Sheet open={openMobile} onOpenChange={setOpenMobile}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="p-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="p-4 pt-0 space-y-2">
                  {menuItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => { setOpenMobile(false); setOpenRegister(true); }}
                      className="w-full text-left rounded-lg border border-border bg-card hover:bg-muted px-3 py-2 text-sm transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    <Dialog open={openRegister} onOpenChange={setOpenRegister}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar conta</DialogTitle>
          <DialogDescription>Informe seu e-mail e defina uma senha.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmitRegister} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm" htmlFor="reg-email">E-mail</label>
            <Input id="reg-email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label className="text-sm" htmlFor="reg-pass">Senha</label>
            <Input id="reg-pass" type="password" placeholder="Mínimo 8 caracteres, maiúscula, minúscula, número e símbolo" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div className="rounded-md border border-border bg-card p-3">
              <p className="text-xs font-medium mb-2">Requisitos da senha</p>
              <ul className="space-y-1 text-xs">
                <li className="flex items-center gap-2">
                  {password.length >= 8 ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500" />
                  )}
                  Pelo menos 8 caracteres
                </li>
                <li className="flex items-center gap-2">
                  {/[A-Z]/.test(password) ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500" />
                  )}
                  1 letra maiúscula
                </li>
                <li className="flex items-center gap-2">
                  {/[a-z]/.test(password) ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500" />
                  )}
                  1 letra minúscula
                </li>
                <li className="flex items-center gap-2">
                  {/\d/.test(password) ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500" />
                  )}
                  1 número
                </li>
                <li className="flex items-center gap-2">
                  {/[^A-Za-z0-9]/.test(password) ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <XCircle className="h-3.5 w-3.5 text-red-500" />
                  )}
                  1 símbolo (ex.: ! @ # $ %)
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm" htmlFor="reg-pass2">Confirmar senha</label>
            <Input id="reg-pass2" type="password" placeholder="Repita a senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => setOpenRegister(false)}>Cancelar</Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Cadastrar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>

    <Dialog open={openLogin} onOpenChange={setOpenLogin}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Entrar</DialogTitle>
          <DialogDescription>Use seu e-mail e senha para acessar.</DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmitLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm" htmlFor="login-email">E-mail</label>
            <Input id="login-email" type="email" placeholder="seu@email.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label className="text-sm" htmlFor="login-pass">Senha</label>
            <Input id="login-pass" type="password" placeholder="Mínimo 6 caracteres" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => setOpenLogin(false)}>Cancelar</Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">Entrar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  </>);
};

export default Header;
