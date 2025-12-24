import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { saveUser, getUser } from '@/lib/storage';
import { toast } from 'sonner';
import { Mail, Lock, Shield } from 'lucide-react';
import sacredBackground from '@/assets/sacred-background.jpg';
import saintMichael from '@/assets/saint-michael.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    // Check if user exists or create new
    const existingUser = getUser();
    if (existingUser && existingUser.email === email) {
      saveUser({ ...existingUser, isLoggedIn: true });
    } else {
      saveUser({ email, isLoggedIn: true });
    }

    toast.success('Bem-vindo! Que São Miguel Arcanjo te proteja.');
    navigate('/dashboard');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sacredBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-brown/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero */}
          <div className="hidden md:flex flex-col items-center text-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl animate-pulse-slow" />
              <img 
                src={saintMichael} 
                alt="São Miguel Arcanjo" 
                className="w-80 h-80 object-cover rounded-full border-4 border-gold/50 shadow-2xl relative z-10 animate-float"
              />
            </div>
            <h1 className="mt-8 text-4xl font-display font-bold text-gold-light">
              São Miguel Arcanjo
            </h1>
            <p className="mt-4 text-cream/80 text-lg font-body max-w-md italic">
              "São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra as maldades e ciladas do demônio."
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold">
              <Shield className="w-5 h-5" />
              <span className="font-display text-sm uppercase tracking-wider">Defensor da Fé</span>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card variant="elevated" className="backdrop-blur-xl bg-card/95 border-gold/30">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-navy-dark" />
                </div>
                <CardTitle className="text-3xl text-foreground">Entrar</CardTitle>
                <CardDescription className="text-base mt-2">
                  Acesse sua jornada espiritual com São Miguel Arcanjo
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email de Compra
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground font-medium">
                      Senha
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-12"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Entrando...' : 'Entrar na Jornada Sagrada'}
                  </Button>
                </form>

                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Ao entrar, você concorda em caminhar com fé e devoção.
                </p>
              </CardContent>
            </Card>

            {/* Mobile hero */}
            <div className="md:hidden mt-8 text-center">
              <p className="text-cream/70 text-sm italic">
                "Príncipe da milícia celeste, defendei-nos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
