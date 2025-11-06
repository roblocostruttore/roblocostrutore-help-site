import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Gamepad2, Lightbulb, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  13 Membri • Community Attiva
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Benvenuto su <span className="text-primary">Roblocostrutore Help</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Un posto dove creatori di giochi e giocatori si possono aiutare a fare giochi oppure prendere spunto da altri giochi. Unitevi tutti!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="https://www.roblox.com/it/communities/624025985/Roblocostrutore-help" target="_blank" rel="noopener noreferrer">
                      Unisciti Ora <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#chi-siamo">
                      Scopri di Più
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
                  <img 
                    src="/logo.webp" 
                    alt="Roblocostrutore Help Community" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cosa Offriamo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La nostra community è dedicata a supportare creatori di tutti i livelli nella realizzazione dei loro giochi Roblox.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Supporto Comunitario</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Ricevi aiuto da altri creatori esperti e condividi le tue conoscenze con la community.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Gamepad2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Creazione Giochi</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Impara a creare giochi Roblox con tutorial, consigli e assistenza personalizzata.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Ispirazione</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Prendi spunto da altri giochi e scopri nuove idee per i tuoi progetti.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Condividi i tuoi giochi e ricevi commenti costruttivi dalla community.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="chi-siamo" className="py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Chi Siamo</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Roblocostrutore Help</strong> è una community Roblox fondata e gestita da <strong className="text-foreground">Misticenea</strong>, dedicata ad aiutare creatori di giochi e giocatori di tutti i livelli.
                  </p>
                  <p>
                    La nostra missione è creare un ambiente collaborativo dove tutti possono imparare, crescere e condividere le proprie esperienze nella creazione di giochi su Roblox. Che tu sia un principiante o un creatore esperto, qui troverai supporto e ispirazione.
                  </p>
                  <p>
                    Offriamo assistenza su vari aspetti dello sviluppo, dagli annunci con aiuti per creare icone personalizzate fino al supporto completo nella realizzazione del tuo gioco. Creiamo anche oggetti e contenuti elementari per aiutare i membri della community.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">13</div>
                      <div className="text-sm text-muted-foreground">Membri</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gamepad2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-2xl">1+</div>
                      <div className="text-sm text-muted-foreground">Esperienze</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <img src="/logo.webp" alt="Logo" className="h-10 w-10 rounded-full" />
                      Gestito da Misticenea
                    </CardTitle>
                    <CardDescription>Fondatore e amministratore della community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Misticenea è il creatore e gestore di questa community, dedicato ad aiutare i membri a realizzare i loro progetti su Roblox.
                    </p>
                    <Button variant="outline" asChild className="w-full">
                      <a href="https://www.roblox.com/users/6658691297/profile" target="_blank" rel="noopener noreferrer">
                        Visita Profilo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section id="esperienze" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Le Nostre Esperienze</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Esplora i giochi creati dalla nostra community e unisciti al divertimento!
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src="/f3x-battle.webp" 
                      alt="F3X Battle" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2">F3X Battle</CardTitle>
                  <CardDescription className="mb-4">
                    Un'esperienza di battaglia creativa dove puoi costruire e combattere con gli strumenti F3X.
                  </CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <a href="https://www.roblox.com/it/communities/624025985/Roblocostrutore-help#!/about" target="_blank" rel="noopener noreferrer">
                      Gioca Ora <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Placeholder for future games */}
              <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Gamepad2 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="mb-2">Prossimamente</CardTitle>
                  <CardDescription>
                    Nuove esperienze in arrivo! Unisciti alla community per essere il primo a scoprirle.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 border-dashed hover:border-primary/50 transition-colors">
                <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Lightbulb className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="mb-2">Il Tuo Gioco?</CardTitle>
                  <CardDescription>
                    Hai creato un gioco? Condividilo con la community e ricevi feedback!
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="unisciti" className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Come Unirsi</h2>
                <p className="text-lg text-muted-foreground">
                  Entrare a far parte della community è semplice e gratuito!
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <CardTitle>Visita la Pagina Community</CardTitle>
                        <CardDescription className="mt-2">
                          Vai alla pagina ufficiale della community su Roblox cliccando il pulsante qui sotto.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <CardTitle>Richiedi di Unirti</CardTitle>
                        <CardDescription className="mt-2">
                          Clicca sul pulsante "Unisciti" nella pagina della community. Tutti sono i benvenuti!
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <CardTitle>Inizia a Collaborare</CardTitle>
                        <CardDescription className="mt-2">
                          Una volta accettato, potrai iniziare a condividere, imparare e creare insieme agli altri membri!
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-12 text-center">
                <Card className="border-2 border-primary/50 bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Pronto a Iniziare?</h3>
                    <p className="text-muted-foreground mb-6">
                      Unisciti a noi oggi e inizia il tuo viaggio nella creazione di giochi Roblox!
                    </p>
                    <Button size="lg" asChild>
                      <a href="https://www.roblox.com/it/communities/624025985/Roblocostrutore-help" target="_blank" rel="noopener noreferrer">
                        Unisciti alla Community <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
