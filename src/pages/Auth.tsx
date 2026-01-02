import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Mail, Lock, LogIn } from 'lucide-react';
import logoMilicia from '@/assets/logo-milicia-celestial.png';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp, user, loading } = useAuth();

  useEffect(() => {
    // Auto-fill
    const savedEmail = localStorage.getItem('mc_auth_email');
    const savedPassword = localStorage.getItem('mc_auth_password');
    const savedRemember = localStorage.getItem('mc_auth_remember');
    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
    if (savedRemember) setRemember(savedRemember === 'true');

    if (!loading && user) {
      navigate('/');
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
      // Try to sign in first
      const { error: signInError } = await signIn(email, password);

      if (signInError) {
        // If user doesn't exist, create account automatically
        if (signInError.message.includes('Invalid login')) {
          const { error: signUpError } = await signUp(email, password);
          if (signUpError) {
            if (signUpError.message.includes('already registered')) {
              toast.error('Email ou senha incorretos');
            } else {
              toast.error(signUpError.message);
            }
          } else {
            if (remember) {
              localStorage.setItem('mc_auth_email', email);
              localStorage.setItem('mc_auth_password', password);
              localStorage.setItem('mc_auth_remember', 'true');
            } else {
              localStorage.removeItem('mc_auth_email');
              localStorage.removeItem('mc_auth_password');
              localStorage.setItem('mc_auth_remember', 'false');
            }
            toast.success('Acesso liberado! Bem-vindo(a).');
            navigate('/');
          }
        } else {
          toast.error(signInError.message);
        }
      } else {
        if (remember) {
          localStorage.setItem('mc_auth_email', email);
          localStorage.setItem('mc_auth_password', password);
          localStorage.setItem('mc_auth_remember', 'true');
        } else {
          localStorage.removeItem('mc_auth_email');
          localStorage.removeItem('mc_auth_password');
          localStorage.setItem('mc_auth_remember', 'false');
        }
        toast.success('Bem-vindo! Que os Arcanjos te protejam.');
        navigate('/');
      }
    } catch {
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
    <div className="min-h-screen bg-gradient-to-br from-navy-dark via-navy to-brown flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="backdrop-blur-xl bg-card/95 border-gold/30 shadow-2xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-gold/50 shadow-lg">
              <img src={logoMilicia} alt="Milícia Celestial" className="w-full h-full object-cover" />
            </div>
            <CardTitle className="text-3xl text-gold-light font-display">
              Milícia Celestial
            </CardTitle>
            <CardDescription className="text-base mt-2 font-body text-cream/80">
              São Miguel • São Gabriel • São Rafael
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium font-body text-base">
                  Email de Acesso
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 text-base h-12"
                    autoComplete="email"
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
                    className="pl-12 text-base h-12"
                    autoComplete="current-password"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm text-muted-foreground font-body select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="h-4 w-4 rounded border-border"
                  />
                  Lembrar neste dispositivo
                </label>

                <p className="text-sm text-muted-foreground">
                  Use o email de compra. Na primeira vez, definimos sua senha automaticamente.
                </p>
              </div>

              <Button type="submit" variant="gold" size="xl" className="w-full text-lg" disabled={isLoading}>
                {isLoading ? (
                  'Entrando...'
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Entrar
                  </>
                )}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground font-body italic">
              "Que os Santos Arcanjos Miguel, Gabriel e Rafael vos protejam sempre."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
