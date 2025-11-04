import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Esportes",
    "Cassino",
    "Cassino ao vivo",
    "Aviator",
    "Promoções",
    "Blog",
  ];

  const support = [
    "Central de ajuda",
    "Termos e condições",
    "Política de privacidade",
    "Jogo responsável",
    "Perguntas frequentes",
    "Contato",
  ];

  // Removed payment methods emojis per requirements

  return (
    <footer className="bg-blue-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">ELITE</span>
              <span className="text-foreground">BET</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A melhor plataforma de apostas esportivas e cassino online do Brasil. 
              Diversão e emoção com segurança e responsabilidade.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">suporte@elitebet.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">0800 000 4546</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsors */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="text-foreground font-bold mb-4 text-center">PATROCINADOR OFICIAL</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <img src="/assets/patrocinador/imgi_128_format=webp.webp" alt="Patrocinador 1" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/patrocinador/imgi_129_format=webp.webp" alt="Patrocinador 2" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/patrocinador/imgi_134_format=webp.webp" alt="Patrocinador 3" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Elite Awards */}
        <div className="border-t border-border pt-8 mb-8">
          <h3 className="text-foreground font-bold mb-4 text-center">ELITE AWARDS</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <img src="/assets/elite-awards/imgi_48_format=webp&quality=70.webp" alt="Elite Awards 1" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/elite-awards/imgi_51_format=webp&quality=70.webp" alt="Elite Awards 2" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/elite-awards/imgi_49_format=webp&quality=70.webp" alt="Elite Awards 3" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Certificates & Security */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                {/* Lock icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">SSL Seguro</p>
                <p className="text-xs">Criptografia 256-bit</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                {/* Shield-check icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">Licenciado</p>
                <p className="text-xs">Regulamentado</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                {/* Target icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">+18</p>
                <p className="text-xs">Jogo Responsável</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2025 EliteBet. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right max-w-2xl">
              Jogue com responsabilidade. O jogo pode causar dependência. Proibido para menores de 18 anos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
