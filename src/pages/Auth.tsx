import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Mail, Lock, Shield, Sparkles, UserPlus, LogIn } from 'lucide-react';
import sacredPattern from '@/assets/sacred-pattern.jpg';
import threeArchangels from '@/assets/three-archangels.jpg';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp, user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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

    try {
      if (isSignUp) {
        const { error } = await signUp(email, password);
        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('Este email já está cadastrado. Tente fazer login.');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Conta criada! Bem-vindo à Milícia Celestial.');
          navigate('/dashboard');
        }
      } else {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login')) {
            toast.error('Email ou senha incorretos');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Bem-vindo! Que os Arcanjos te protejam.');
          navigate('/dashboard');
        }
      }
    } catch (err) {
      toast.error('Erro ao processar sua solicitação');
    }

    setIsLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark">
        <div className="animate-pulse text-gold font-display text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sacredPattern})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/90 to-brown/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero */}
          <div className="hidden lg:flex flex-col items-center text-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gold/20 blur-3xl animate-pulse-slow" />
              <img 
                src={threeArchangels} 
                alt="São Miguel, São Gabriel e São Rafael" 
                className="w-full max-w-lg rounded-3xl border-4 border-gold/50 shadow-2xl relative z-10"
              />
            </div>
            <h1 className="mt-8 text-4xl font-display font-bold text-gold-light">
              Milícia Celestial
            </h1>
            <p className="mt-2 text-gold/80 font-display text-lg">
              São Miguel • São Gabriel • São Rafael
            </p>
            <p className="mt-4 text-cream/80 text-lg font-body max-w-md italic">
              "Os três grandes Arcanjos, príncipes do céu, intercedem por nós diante do trono de Deus."
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold">
              <Sparkles className="w-5 h-5" />
              <span className="font-display text-sm uppercase tracking-wider">Guardiões da Fé</span>
            </div>
          </div>

          {/* Right side - Auth Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card variant="elevated" className="backdrop-blur-xl bg-card/95 border-gold/30">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-navy-dark" />
                </div>
                <CardTitle className="text-3xl text-foreground font-display">
                  {isSignUp ? 'Criar Conta' : 'Entrar'}
                </CardTitle>
                <CardDescription className="text-base mt-2 font-body">
                  {isSignUp 
                    ? 'Junte-se à Milícia Celestial dos Arcanjos'
                    : 'Acesse sua jornada espiritual com os Santos Arcanjos'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium font-body text-base">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground font-medium font-body text-base">
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
                        className="pl-12 text-base"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full text-lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Processando...'
                    ) : isSignUp ? (
                      <>
                        <UserPlus className="w-5 h-5 mr-2" />
                        Criar Conta
                      </>
                    ) : (
                      <>
                        <LogIn className="w-5 h-5 mr-2" />
                        Entrar
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-gold hover:text-gold-light transition-colors font-body text-base"
                  >
                    {isSignUp 
                      ? 'Já tem conta? Faça login'
                      : 'Não tem conta? Cadastre-se'
                    }
                  </button>
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground font-body">
                  Ao {isSignUp ? 'criar sua conta' : 'entrar'}, você se compromete a caminhar com fé e devoção.
                </p>
              </CardContent>
            </Card>

            {/* Mobile hero */}
            <div className="lg:hidden mt-8 text-center">
              <p className="text-cream/70 text-sm italic font-body">
                "São Miguel, São Gabriel e São Rafael - Príncipes da Milícia Celeste"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
