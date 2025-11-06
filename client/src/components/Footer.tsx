import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="Roblocostrutore Help Logo" className="h-10 w-10 rounded-full" />
              <span className="text-lg font-bold text-primary">Roblocostrutore Help</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Una community dedicata ad aiutare i creatori di giochi Roblox, fornendo supporto, spunti e assistenza nella creazione di giochi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#chi-siamo" className="hover:text-primary transition-colors">Chi Siamo</a>
              </li>
              <li>
                <a href="#esperienze" className="hover:text-primary transition-colors">Esperienze</a>
              </li>
              <li>
                <a href="#unisciti" className="hover:text-primary transition-colors">Come Unirsi</a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.roblox.com/it/communities/624025985/Roblocostrutore-help" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Pagina Community Roblox
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.roblox.com/users/6658691297/profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Profilo Misticenea
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Roblocostrutore Help. Community Roblox gestita da Misticenea.</p>
        </div>
      </div>
    </footer>
  );
}
