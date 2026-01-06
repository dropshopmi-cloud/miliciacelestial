import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';
import { Mail, Lock, LogIn, Shield, Sparkles } from 'lucide-react';
import logoMilicia from '@/assets/arcanjos-logo.png';

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
            toast.success('Acesso liberado! Bem-vindo(a) à Milícia Celestial.');
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
      <div className="min-h-screen flex items-center justify-center bg-gradient-sacred">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gold font-display text-xl">Carregando...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-sacred flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.div 
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="backdrop-blur-xl bg-card/95 border-gold/30 shadow-glow-gold">
          <CardHeader className="text-center pb-4">
            {/* Logo with glow effect */}
            <motion.div 
              className="relative mx-auto mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-125 animate-pulse-slow" />
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-gold/50 shadow-glow-gold">
                <img src={logoMilicia} alt="Milícia Celestial" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CardTitle className="text-3xl text-gold-light font-decorative tracking-wide">
                Milícia Celestial
              </CardTitle>
              <CardDescription className="text-base mt-3 font-body text-cream/80 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-gold" />
                <span>São Miguel • São Gabriel • São Rafael</span>
                <Shield className="w-4 h-4 text-gold" />
              </CardDescription>
            </motion.div>
          </CardHeader>
          
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="email" className="text-foreground font-medium font-body text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold" />
                  Email de Acesso
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base h-12 bg-muted/50 border-gold/20 focus:border-gold/50 transition-colors"
                  autoComplete="email"
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="password" className="text-foreground font-medium font-body text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gold" />
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base h-12 bg-muted/50 border-gold/20 focus:border-gold/50 transition-colors"
                  autoComplete="current-password"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="flex items-center gap-3 text-sm text-muted-foreground font-body select-none cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all ${remember ? 'bg-gold border-gold' : 'border-gold/40 group-hover:border-gold/60'}`}>
                      {remember && (
                        <svg className="w-full h-full text-navy-dark p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                  Lembrar neste dispositivo
                </label>

                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Use o email de compra. Na primeira vez, definimos sua senha automaticamente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-body bg-gradient-divine hover:opacity-90 text-navy-dark shadow-glow-gold transition-all duration-300" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-navy-dark/30 border-t-navy-dark rounded-full animate-spin" />
                      Entrando...
                    </span>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5 mr-2" />
                      Entrar na Milícia
                    </>
                  )}
                </Button>
              </motion.div>
            </form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold/60 text-xs font-body tracking-widest">PROTEÇÃO CELESTIAL</span>
                <Sparkles className="w-4 h-4 text-gold" />
              </div>
              <p className="text-sm text-muted-foreground font-body italic leading-relaxed">
                "Que os Santos Arcanjos Miguel, Gabriel e Rafael vos protejam sempre."
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;