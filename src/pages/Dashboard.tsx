import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useUserProgress } from '@/hooks/useUserProgress';
import { prayerCategories } from '@/data/prayersExpanded';
import { readingCategories } from '@/data/readingsExpanded';
import { devotionalJourney } from '@/data/devotional30';
import { meditationCategories, novenas, rosary, liturgicalCalendar, archangelsInfo, dailyBiblePassages, dailyPrayers, dailyQuotes } from '@/data/religiousContent';
import { SearchFilter } from '@/components/SearchFilter';
import { ProgressButtons } from '@/components/ProgressButtons';
import { Carousel } from '@/components/Carousel';
import CentralMariana from '@/components/CentralMariana';

import { toast } from 'sonner';
import {
  User,
  LogOut,
  BookOpen,
  Heart,
  Sparkles,
  Shield,
  Cross,
  Menu,
  X,
  Clock,
  ChevronRight,
  Star,
  ArrowLeft,
  Calendar,
  BookHeart,
  Flower2,
  Check,
  ScrollText,
  Sun,
  Moon,
  Lock,
  Unlock,
  ShoppingCart,
  KeyRound,
  HandHeart,
  Flame,
  ShieldCheck,
  Gem,
} from 'lucide-react';
import archangelsHero from '@/assets/three-archangels.jpg';
import arcanjoMiguel from '@/assets/arcanjo-miguel.png';
import arcanjoGabriel from '@/assets/arcanjo-gabriel.png';
import arcanjoRafael from '@/assets/arcanjo-rafael.png';
import logoCaminho from '@/assets/caminho-da-santidade.png';
import nossaSenhoraImg from '@/assets/nossa-senhora.png';
import leiturasImg from '@/assets/leituras-espirituais.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [novenaProgress, setNovenaProgress] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  const navigate = useNavigate();
  const { user, profile, loading, signOut, updateProfile } = useAuth();
  const { toggleRead, toggleFavorite, isRead, isFavorite, getFavorites } = useUserProgress();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }
    if (profile?.name) {
      setUserName(profile.name);
    }
    const saved = localStorage.getItem('novenaProgress');
    if (saved) setNovenaProgress(JSON.parse(saved));
  }, [user, profile, loading, navigate]);

  const handleSaveName = async () => {
    if (tempName.trim()) {
      const { error } = await updateProfile(tempName.trim());
      if (!error) {
        setUserName(tempName.trim());
        setEditingName(false);
        toast.success('Nome salvo com sucesso!');
      } else {
        toast.error('Erro ao salvar nome');
      }
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast.success('Até logo! Que Deus te abençoe.');
    navigate('/auth');
  };

  const toggleNovenaDay = (day: number) => {
    const updated = novenaProgress.includes(day)
      ? novenaProgress.filter(d => d !== day)
      : [...novenaProgress, day];
    setNovenaProgress(updated);
    localStorage.setItem('novenaProgress', JSON.stringify(updated));
  };

  const goBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
    } else if (selectedCategory) {
      setSelectedCategory(null);
    } else {
      setActiveSection('home');
    }
    setSearchQuery('');
    setShowFavoritesOnly(false);
  };

  const today = new Date();
  const dayOfMonth = today.getDate();
  const dailyPassage = dailyBiblePassages[(dayOfMonth - 1) % dailyBiblePassages.length];
  const dailyPrayer = dailyPrayers[(dayOfMonth - 1) % dailyPrayers.length];
  const dailyQuote = dailyQuotes[dayOfMonth % dailyQuotes.length];
  const todayDevotional = devotionalJourney.days[(dayOfMonth - 1) % devotionalJourney.days.length];

  const menuItems = [
    { id: 'home', label: 'Início', icon: Shield },
    { id: 'central-mariana', label: 'Central Mariana', icon: Flower2 },
    { id: 'prayers', label: 'Orações', icon: Heart },
    { id: 'readings', label: 'Leituras', icon: BookOpen },
    { id: 'devotional', label: 'Devocional', icon: ScrollText },
    { id: 'meditation', label: 'Meditação', icon: Sparkles },
    { id: 'novenas', label: 'Novenas', icon: BookHeart },
    { id: 'rosary', label: 'Rosário', icon: Flower2 },
    { id: 'calendar', label: 'Calendário', icon: Calendar },
    { id: 'archangels', label: 'Arcanjos', icon: Cross },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-sacred">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gold font-display text-xl">Preparando sua jornada...</p>
        </motion.div>
      </div>
    );
  }

  const renderContent = () => {
    if (selectedItem) {
      return (
        <DetailView 
          item={selectedItem} 
          goBack={goBack} 
          section={activeSection}
          isRead={isRead}
          isFavorite={isFavorite}
          toggleRead={toggleRead}
          toggleFavorite={toggleFavorite}
        />
      );
    }

    switch (activeSection) {
      case 'prayers':
        return selectedCategory ? (
          <PrayersList 
            category={selectedCategory} 
            goBack={goBack} 
            onSelect={setSelectedItem}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
            isRead={isRead}
            isFavorite={isFavorite}
            toggleRead={toggleRead}
            toggleFavorite={toggleFavorite}
            getFavorites={getFavorites}
          />
        ) : (
          <PrayersCategories onSelect={setSelectedCategory} goBack={goBack} />
        );
      case 'readings':
        return selectedCategory ? (
          <ReadingsList 
            category={selectedCategory} 
            goBack={goBack} 
            onSelect={setSelectedItem}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
            isRead={isRead}
            isFavorite={isFavorite}
            toggleRead={toggleRead}
            toggleFavorite={toggleFavorite}
            getFavorites={getFavorites}
          />
        ) : (
          <ReadingsCategories onSelect={setSelectedCategory} goBack={goBack} />
        );
      case 'devotional':
        return selectedItem ? (
          <DevotionalDayView 
            day={selectedItem} 
            goBack={goBack}
            isRead={isRead}
            isFavorite={isFavorite}
            toggleRead={toggleRead}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <DevotionalList 
            goBack={goBack} 
            onSelect={setSelectedItem}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            showFavoritesOnly={showFavoritesOnly}
            setShowFavoritesOnly={setShowFavoritesOnly}
            isRead={isRead}
            isFavorite={isFavorite}
            getFavorites={getFavorites}
          />
        );
      case 'meditation':
        return selectedCategory ? (
          <MeditationsList category={selectedCategory} goBack={goBack} onSelect={setSelectedItem} />
        ) : (
          <MeditationsCategories onSelect={setSelectedCategory} goBack={goBack} />
        );
      case 'novenas':
        return selectedItem ? (
          <DetailView item={selectedItem} goBack={goBack} section="novenas" isRead={isRead} isFavorite={isFavorite} toggleRead={toggleRead} toggleFavorite={toggleFavorite} />
        ) : (
          <NovenasSection goBack={goBack} onSelect={setSelectedItem} progress={novenaProgress} toggleDay={toggleNovenaDay} />
        );
      case 'rosary':
        return selectedCategory ? (
          <RosaryDetail mystery={selectedCategory} goBack={goBack} />
        ) : (
          <RosarySection goBack={goBack} onSelect={setSelectedCategory} />
        );
      case 'calendar':
        return <CalendarSection goBack={goBack} />;
      case 'archangels':
        return <ArchangelsSection goBack={goBack} />;
      case 'central-mariana':
        return <CentralMariana goBack={goBack} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />;
      default:
        return (
          <HomeSection
            userName={userName}
            dailyPassage={dailyPassage}
            dailyPrayer={dailyPrayer}
            dailyQuote={dailyQuote}
            todayDevotional={todayDevotional}
            novenaProgress={novenaProgress}
            setActiveSection={setActiveSection}
            setSelectedItem={setSelectedItem}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-gradient-sacred backdrop-blur-lg border-b border-gold/15 px-6 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-lg animate-pulse-slow" />
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/50 shadow-glow-gold">
                <img src={logoCaminho} alt="Caminho da Santidade" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h1 className="font-decorative text-xl text-gold-light tracking-wider">Caminho da Santidade</h1>
            </div>
          </div>
          
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSelectedCategory(null); setSelectedItem(null); setSearchQuery(''); setShowFavoritesOnly(false); }}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-gold/20 text-gold shadow-sm border border-gold/20' 
                    : 'text-cream/70 hover:text-cream hover:bg-gold/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {editingName ? (
              <div className="flex gap-2">
                <Input value={tempName} onChange={(e) => setTempName(e.target.value)} placeholder="Seu nome" className="h-9 w-40 bg-navy-light/50 border-gold/30 text-cream text-sm" />
                <Button size="sm" onClick={handleSaveName} className="bg-gold hover:bg-gold-light text-navy-dark">OK</Button>
              </div>
            ) : (
              <button onClick={() => { setEditingName(true); setTempName(userName); }} className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                <User className="w-5 h-5" />
                <span className="font-body text-sm">{userName || 'Seu nome'}</span>
              </button>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-cream/70 hover:text-cream hover:bg-white/5">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-sacred backdrop-blur-lg border-b border-gold/15 px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setMobileMenuOpen(true)} className="text-gold-light p-2 hover:bg-gold/10 rounded-lg transition-colors">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-gold/50">
              <img src={logoCaminho} alt="Caminho da Santidade" className="w-full h-full object-cover" />
            </div>
            <h1 className="font-decorative text-gold-light text-lg tracking-wider">Caminho da Santidade</h1>
          </div>
          <button onClick={handleLogout} className="text-gold-light p-2 hover:bg-gold/10 rounded-lg transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-gradient-sacred p-6 lg:hidden border-r border-gold/15"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-decorative text-gold-light text-lg tracking-wide">Menu</h2>
                <button onClick={() => setMobileMenuOpen(false)} className="text-gold-light hover:text-gold transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <div className="mb-6 p-4 bg-gold/10 rounded-xl border border-gold/20">
                {editingName ? (
                  <div className="flex gap-2">
                    <Input value={tempName} onChange={(e) => setTempName(e.target.value)} placeholder="Seu nome" className="h-9 text-sm" />
                    <Button size="sm" onClick={() => { handleSaveName(); setMobileMenuOpen(false); }} className="bg-gold text-navy-dark">OK</Button>
                  </div>
                ) : (
                  <button onClick={() => { setEditingName(true); setTempName(userName); }} className="flex items-center gap-2 text-cream w-full">
                    <User className="w-5 h-5 text-gold" />
                    <span className="font-body">{userName || 'Adicionar nome'}</span>
                  </button>
                )}
              </div>
              <nav className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.button 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => { setActiveSection(item.id); setSelectedCategory(null); setSelectedItem(null); setMobileMenuOpen(false); setSearchQuery(''); setShowFavoritesOnly(false); }} 
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-gold/20 text-gold border border-gold/20' : 'text-cream/70 hover:bg-gold/10 hover:text-cream'}`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-body">{item.label}</span>
                  </motion.button>
                ))}
              </nav>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="min-h-screen pt-20 lg:pt-24 pb-20">
        <div className="max-w-7xl mx-auto p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div key={activeSection + (selectedCategory || '') + (selectedItem?.id || '')} {...fadeInUp}>
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

    </div>
  );
};

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button 
    onClick={onClick} 
    className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6 font-body group"
    whileHover={{ x: -4 }}
  >
    <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
    <span>Voltar</span>
  </motion.button>
);
const SPECIAL_MODULES = [
  {
    id: 'oracoes-ansiedade',
    title: 'Orações Contra Ansiedade',
    code: '2580',
    url: 'https://oracoescontraansiedade.netlify.app/',
    icon: HandHeart,
  },
  {
    id: '21-dias-nossa-senhora',
    title: '21 Dias com Nossa Senhora',
    code: '1914',
    url: 'https://devocionalnossasenhora.netlify.app/',
    icon: Flower2,
  },
  {
    id: 'blindagem-espiritual',
    title: 'Blindagem Espiritual Católica',
    code: '2304',
    url: 'https://blindagemespiritualcatolica.netlify.app/',
    icon: ShieldCheck,
  },
  {
    id: 'novena-sao-jose',
    title: 'Novena de São José para Prosperidade',
    code: '0312',
    url: 'https://novenaprosperidadesaojose.netlify.app/',
    icon: Gem,
  },
];

const SpecialContentSection = () => {
  const [unlockedModules, setUnlockedModules] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('specialModulesAccess');
    return saved ? JSON.parse(saved) : {};
  });
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [inputCode, setInputCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleUnlock = (moduleId: string, correctCode: string) => {
    if (inputCode === correctCode) {
      const updated = { ...unlockedModules, [moduleId]: true };
      setUnlockedModules(updated);
      localStorage.setItem('specialModulesAccess', JSON.stringify(updated));
      setActiveInput(null);
      setInputCode('');
      setError(null);
      toast.success('Acesso liberado!');
    } else {
      setError('Código incorreto. Tente novamente.');
    }
  };

  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <h2 className="text-lg font-display text-foreground tracking-wide">Conteúdos Especiais</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SPECIAL_MODULES.map((mod) => {
          const isUnlocked = unlockedModules[mod.id];
          const isInputActive = activeInput === mod.id;
          const IconComp = mod.icon;

          return (
            <Card key={mod.id} className={`transition-all duration-300 ${isUnlocked ? 'border-green-500/30 bg-gradient-to-br from-card to-green-500/5' : 'border-gold/15'}`}>
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className={`p-3 rounded-xl ${isUnlocked ? 'bg-green-500/10' : 'bg-gold/10'}`}>
                  <IconComp className={`w-6 h-6 ${isUnlocked ? 'text-green-400' : 'text-gold'}`} />
                </div>
                <h3 className="font-display text-base text-foreground leading-tight">{mod.title}</h3>

                {isUnlocked ? (
                  <div className="w-full space-y-2 mt-1">
                    <div className="flex items-center justify-center gap-1.5 text-green-400 text-xs font-body">
                      <Check className="w-3.5 h-3.5" />
                      <span>Acesso Liberado</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-gold hover:bg-gold-light text-navy-dark font-body"
                      onClick={() => window.open(mod.url, '_blank')}
                    >
                      Entrar
                    </Button>
                  </div>
                ) : isInputActive ? (
                  <div className="w-full space-y-2 mt-1">
                    <Input
                      placeholder="Código de 4 dígitos"
                      maxLength={4}
                      value={inputCode}
                      onChange={(e) => { setInputCode(e.target.value); setError(null); }}
                      className="h-9 text-center text-sm"
                      autoFocus
                    />
                    {error && <p className="text-destructive text-xs font-body">{error}</p>}
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="flex-1 text-xs" onClick={() => { setActiveInput(null); setInputCode(''); setError(null); }}>
                        Cancelar
                      </Button>
                      <Button size="sm" className="flex-1 bg-gold hover:bg-gold-light text-navy-dark text-xs" onClick={() => handleUnlock(mod.id, mod.code)}>
                        Confirmar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full space-y-2 mt-1">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs border-gold/30 text-gold hover:bg-gold/10"
                      onClick={() => { setActiveInput(mod.id); setInputCode(''); setError(null); }}
                    >
                      <KeyRound className="w-3.5 h-3.5 mr-1.5" />
                      Inserir Código
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-full text-xs text-muted-foreground hover:text-foreground"
                      onClick={() => window.open('#', '_blank')}
                    >
                      <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                      Comprar Acesso
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

const HomeSection = ({ userName, dailyPassage, dailyPrayer, dailyQuote, todayDevotional, novenaProgress, setActiveSection, setSelectedItem }: any) => {
  const completedNovenas = novenaProgress.length;

  const archangels = [
    { 
      name: 'São Miguel Arcanjo', 
      image: arcanjoMiguel, 
      phrase: 'Príncipe da milícia celestial, defensor contra as forças do mal.',
      color: 'from-red-500/20 to-amber-500/10'
    },
    { 
      name: 'São Gabriel Arcanjo', 
      image: arcanjoGabriel, 
      phrase: 'Mensageiro de Deus, portador da Boa Nova e da esperança.',
      color: 'from-blue-500/20 to-cyan-500/10'
    },
    { 
      name: 'São Rafael Arcanjo', 
      image: arcanjoRafael, 
      phrase: 'Medicina de Deus, guia dos peregrinos e curador das almas.',
      color: 'from-emerald-500/20 to-green-500/10'
    },
  ];
  
  return (
    <motion.div className="space-y-10" variants={staggerContainer} initial="initial" animate="animate">
      {/* Hero Carousel */}
      <Carousel className="rounded-2xl overflow-hidden shadow-3d">
        {/* Slide 1 - Welcome */}
        <div className="relative min-h-[360px] bg-gradient-celestial">
          <div className="absolute inset-0">
            <img src={archangelsHero} alt="Os Três Arcanjos" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/85 to-navy/70" />
          </div>
          <div className="relative h-full p-8 lg:p-12 flex flex-col justify-center min-h-[360px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <p className="text-gold/70 font-body text-sm tracking-[0.3em] mb-3 uppercase">Caminho da Santidade</p>
              <h1 className="text-3xl lg:text-5xl font-display text-cream mb-4 leading-tight">
                {userName ? `Seja bem-vindo, ${userName}.` : 'Paz e Bênçãos.'}
              </h1>
              <p className="text-cream/70 font-body text-lg max-w-xl">Hoje é mais um passo rumo à santidade.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button onClick={() => setActiveSection('devotional')} className="bg-gold hover:bg-gold-light text-navy-dark font-body px-6 py-3 text-base shadow-lg">
                  <ScrollText className="w-5 h-5 mr-2" />
                  Iniciar Jornada de 30 Dias
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide 2 - Devotional */}
        <div className="relative min-h-[360px] bg-gradient-to-br from-navy-dark via-navy to-brown/50 p-8 lg:p-12 flex flex-col justify-center">
          <div className="absolute top-4 right-4 px-3 py-1 bg-gold/20 rounded-full">
            <span className="text-gold text-xs font-body">Dia {todayDevotional.day}</span>
          </div>
          <p className="text-gold/70 font-body text-sm tracking-[0.3em] mb-3 uppercase">Devocional de Hoje</p>
          <h2 className="text-2xl lg:text-4xl font-display text-cream mb-4">{todayDevotional.theme}</h2>
          <p className="text-cream/65 font-body line-clamp-3 max-w-2xl mb-6 text-lg">{todayDevotional.reflection.substring(0, 200)}...</p>
          <Button onClick={() => { setActiveSection('devotional'); setSelectedItem(todayDevotional); }} className="bg-gold hover:bg-gold-light text-navy-dark font-body w-fit px-6">
            Ler Reflexão Completa
          </Button>
        </div>

        {/* Slide 3 - Daily Prayer */}
        <div className="relative min-h-[360px] bg-gradient-to-br from-brown/80 via-navy-dark to-navy p-8 lg:p-12 flex flex-col justify-center">
          <p className="text-gold/70 font-body text-sm tracking-[0.3em] mb-3 uppercase">Oração do Dia</p>
          <h2 className="text-2xl lg:text-4xl font-display text-cream mb-4">{dailyPrayer.title}</h2>
          <p className="text-cream/65 font-body line-clamp-4 max-w-2xl mb-6 text-lg">{dailyPrayer.content}</p>
          <Button onClick={() => setActiveSection('prayers')} className="bg-gold hover:bg-gold-light text-navy-dark font-body w-fit px-6">
            Ver Mais Orações
          </Button>
        </div>
      </Carousel>

      {/* Progresso Espiritual */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h2 className="text-lg font-display text-foreground tracking-wide">Seu Progresso Espiritual</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: ScrollText, label: 'Devocional', value: `Dia ${todayDevotional.day}`, color: 'text-gold', action: () => setActiveSection('devotional') },
            { icon: BookHeart, label: 'Novena', value: `${completedNovenas}/15 dias`, color: 'text-green-400', action: () => setActiveSection('novenas') },
            { icon: Heart, label: 'Orações', value: '119 disponíveis', color: 'text-pink-400', action: () => setActiveSection('prayers') },
            { icon: BookOpen, label: 'Leituras', value: '40 reflexões', color: 'text-blue-400', action: () => setActiveSection('readings') },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="cursor-pointer group hover:border-gold/30 transition-all duration-300 bg-card/80 backdrop-blur-sm" onClick={stat.action}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-muted ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs font-body">{stat.label}</p>
                    <p className="text-foreground font-display text-lg">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conteúdos Especiais */}
      <SpecialContentSection />

      {/* Hoje Para Você */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h2 className="text-lg font-display text-foreground tracking-wide">Hoje Para Você</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-card via-card to-muted/30 border-gold/10 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gold/10"><BookOpen className="w-5 h-5 text-gold" /></div>
                <CardTitle className="text-foreground text-lg font-display">Passagem do Dia</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="text-foreground/85 font-body text-base leading-relaxed italic border-l-2 border-gold/50 pl-4">"{dailyPassage.passage}"</blockquote>
              <p className="text-gold mt-4 font-display text-sm">{dailyPassage.reference}</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-card via-card to-muted/30 border-gold/10 overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gold/10"><Heart className="w-5 h-5 text-gold" /></div>
                <CardTitle className="text-foreground text-lg font-display">Oração do Dia</CardTitle>
              </div>
              <CardDescription className="font-body">{dailyPrayer.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/85 font-body text-base leading-relaxed line-clamp-4">{dailyPrayer.content}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Como Usar Este Guia */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="bg-gradient-to-br from-card via-card to-muted/30 border-gold/20 overflow-hidden">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gold/10"><BookOpen className="w-6 h-6 text-gold" /></div>
              <div>
                <CardTitle className="text-foreground text-xl font-display">Como Usar Este Guia</CardTitle>
                <CardDescription className="font-body">Para aproveitar ao máximo esta jornada espiritual</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Calendar, title: 'Reze durante 30 Dias Seguidos', description: 'Dedique-se a cada oração diariamente, seguindo a sequência recomendada.' },
                { icon: Clock, title: 'Reserve um Momento Tranquilo', description: 'Escolha um horário fixo do dia para sua oração em silêncio.' },
                { icon: Heart, title: 'Ore com o Coração', description: 'Entregue-se de coração aberto, permitindo que cada palavra transforme sua vida.' }
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }} className="p-5 rounded-xl bg-muted/30 border border-gold/10 hover:border-gold/30 transition-all">
                  <div className="p-3 rounded-lg bg-gold/10 w-fit mb-4"><item.icon className="w-6 h-6 text-gold" /></div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Caminhe com Maria */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h2 className="text-xl font-display text-foreground tracking-wide">Caminhe com Maria</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <p className="text-muted-foreground font-body text-center text-sm mb-6">Maria conduz cada passo rumo à santidade.</p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="cursor-pointer" onClick={() => setActiveSection('central-mariana')}>
          <Card className="overflow-hidden hover:border-gold/40 hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-card via-card to-navy/5 border-gold/15">
            <CardContent className="p-10 text-center">
              <div className="relative mx-auto w-56 h-56 mb-8">
                <div className="absolute inset-0 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all" />
                <img src={nossaSenhoraImg} alt="Nossa Senhora" className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-gold/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-foreground/85 font-body text-lg leading-relaxed max-w-xl mx-auto italic mb-6">
                "Nossa Senhora, modelo de fé, humildade e entrega. Caminhe com Maria rumo à santidade."
              </p>
              <Button className="bg-gold hover:bg-gold-light text-navy-dark font-body px-8 py-3 text-base shadow-lg">
                <Flower2 className="w-5 h-5 mr-2" />
                Entrar na Central Mariana
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Seus Protetores Celestiais */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h2 className="text-xl font-display text-foreground tracking-wide">Seus Protetores Celestiais</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <p className="text-muted-foreground font-body text-center text-sm mb-6">Miguel protege, Gabriel orienta, Rafael cura.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {archangels.map((archangel, i) => (
            <motion.div key={archangel.name} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}>
              <Card className={`overflow-hidden group hover:border-gold/40 transition-all duration-300 bg-gradient-to-br ${archangel.color} cursor-pointer`} onClick={() => setActiveSection('archangels')}>
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto w-32 h-32 mb-4">
                    <div className="absolute inset-0 bg-gold/10 rounded-full blur-xl group-hover:bg-gold/20 transition-all" />
                    <img src={archangel.image} alt={archangel.name} className="relative w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{archangel.name}</h3>
                  <p className="text-muted-foreground font-body text-sm italic leading-relaxed">"{archangel.phrase}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leituras Espirituais */}
      <section>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <h2 className="text-xl font-display text-foreground tracking-wide">Leituras Espirituais</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
        <Card className="bg-gradient-to-br from-card via-card to-amber-900/10 border-gold/20 overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="relative mx-auto max-w-md mb-6">
              <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-2xl" />
              <img src={leiturasImg} alt="Leituras Espirituais" className="relative w-full h-auto rounded-2xl shadow-2xl border border-gold/20" />
            </div>
            <p className="text-foreground/85 font-body text-lg leading-relaxed max-w-2xl mx-auto">
              Reflexões espirituais que transformam o coração. Leituras para crescer na fé, nas virtudes e no amor a Deus.
            </p>
            <Button onClick={() => setActiveSection('readings')} className="mt-6 bg-gold hover:bg-gold-light text-navy-dark font-body px-8">
              <BookOpen className="w-4 h-4 mr-2" />
              Explorar Leituras
            </Button>
          </CardContent>
        </Card>
      </section>
    </motion.div>
  );
};

const PrayersCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-gold/10">
        <Heart className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Orações por Tema</h2>
        <p className="text-muted-foreground font-body text-sm">Escolha uma categoria para explorar</p>
      </div>
    </div>
    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {Object.entries(prayerCategories).map(([key, cat], i) => (
        <motion.div key={key} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 hover:shadow-lg transition-all duration-300 group" onClick={() => onSelect(key)}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{cat.name}</h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">{cat.description}</p>
                  <span className="text-gold text-xs font-body bg-gold/10 px-2 py-1 rounded-full">{cat.prayers.length} orações</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const PrayersList = ({ category, goBack, onSelect, searchQuery, setSearchQuery, showFavoritesOnly, setShowFavoritesOnly, isRead, isFavorite, toggleRead, toggleFavorite, getFavorites }: any) => {
  const cat = prayerCategories[category as keyof typeof prayerCategories];
  const favoriteIds = getFavorites('prayer');
  
  const filteredPrayers = useMemo(() => {
    let prayers = cat.prayers;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      prayers = prayers.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.content.toLowerCase().includes(query)
      );
    }
    
    if (showFavoritesOnly) {
      prayers = prayers.filter(p => favoriteIds.includes(`${category}-${p.id}`));
    }
    
    return prayers;
  }, [cat.prayers, searchQuery, showFavoritesOnly, favoriteIds, category]);

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <Heart className="w-6 h-6 text-gold" />
        </div>
        <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      </div>
      
      <SearchFilter
        placeholder="Buscar orações..."
        onSearch={setSearchQuery}
        showFavoritesFilter
        favoritesActive={showFavoritesOnly}
        onFilterFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
      />

      <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
        {filteredPrayers.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground font-body">Nenhuma oração encontrada</p>
          </Card>
        ) : (
          filteredPrayers.map((prayer) => {
            const itemId = `${category}-${prayer.id}`;
            return (
              <motion.div key={prayer.id} variants={fadeInUp}>
                <Card className="cursor-pointer hover:border-gold/40 transition-all duration-300 group" onClick={() => onSelect({ ...prayer, category })}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {isRead('prayer', itemId) && (
                          <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Lido</span>
                        )}
                        <span className="font-body text-foreground group-hover:text-gold transition-colors">{prayer.title}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ProgressButtons
                        size="sm"
                        isRead={isRead('prayer', itemId)}
                        isFavorite={isFavorite('prayer', itemId)}
                        onToggleRead={() => toggleRead('prayer', itemId)}
                        onToggleFavorite={() => toggleFavorite('prayer', itemId)}
                      />
                      <ChevronRight className="w-5 h-5 text-gold" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

const ReadingsCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-gold/10">
        <BookOpen className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Leituras Espirituais</h2>
        <p className="text-muted-foreground font-body text-sm">Reflexões profundas para sua jornada</p>
      </div>
    </div>
    <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {Object.entries(readingCategories).map(([key, cat]) => (
        <motion.div key={key} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 hover:shadow-lg transition-all duration-300 group" onClick={() => onSelect(key)}>
            <CardContent className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{cat.name}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3">{cat.description}</p>
              <span className="text-gold text-xs font-body">{cat.readings.length} leituras</span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const ReadingsList = ({ category, goBack, onSelect, searchQuery, setSearchQuery, showFavoritesOnly, setShowFavoritesOnly, isRead, isFavorite, toggleRead, toggleFavorite, getFavorites }: any) => {
  const cat = readingCategories[category as keyof typeof readingCategories];
  const favoriteIds = getFavorites('reading');
  
  const filteredReadings = useMemo(() => {
    let readings = cat.readings;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      readings = readings.filter(r => 
        r.title.toLowerCase().includes(query) || 
        r.summary.toLowerCase().includes(query) ||
        r.content.toLowerCase().includes(query)
      );
    }
    
    if (showFavoritesOnly) {
      readings = readings.filter(r => favoriteIds.includes(`${category}-${r.id}`));
    }
    
    return readings;
  }, [cat.readings, searchQuery, showFavoritesOnly, favoriteIds, category]);

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      
      <SearchFilter
        placeholder="Buscar leituras..."
        onSearch={setSearchQuery}
        showFavoritesFilter
        favoritesActive={showFavoritesOnly}
        onFilterFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
      />

      <motion.div className="grid gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {filteredReadings.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground font-body">Nenhuma leitura encontrada</p>
          </Card>
        ) : (
          filteredReadings.map((reading) => {
            const itemId = `${category}-${reading.id}`;
            return (
              <motion.div key={reading.id} variants={fadeInUp}>
                <Card className="cursor-pointer hover:border-gold/40 transition-all duration-300" onClick={() => onSelect({ ...reading, category })}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {isRead('reading', itemId) && (
                            <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Lido</span>
                          )}
                          <h4 className="font-display text-lg text-foreground">{reading.title}</h4>
                        </div>
                        <p className="text-muted-foreground text-sm font-body line-clamp-2">{reading.summary}</p>
                      </div>
                      <ProgressButtons
                        size="sm"
                        isRead={isRead('reading', itemId)}
                        isFavorite={isFavorite('reading', itemId)}
                        onToggleRead={() => toggleRead('reading', itemId)}
                        onToggleFavorite={() => toggleFavorite('reading', itemId)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

const DevotionalList = ({ goBack, onSelect, searchQuery, setSearchQuery, showFavoritesOnly, setShowFavoritesOnly, isRead, isFavorite, getFavorites }: any) => {
  const favoriteIds = getFavorites('devotional');
  const today = new Date().getDate();
  
  const filteredDays = useMemo(() => {
    let days = devotionalJourney.days;
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      days = days.filter(d => 
        d.theme.toLowerCase().includes(query) || 
        d.reflection.toLowerCase().includes(query)
      );
    }
    
    if (showFavoritesOnly) {
      days = days.filter(d => favoriteIds.includes(`day-${d.day}`));
    }
    
    return days;
  }, [searchQuery, showFavoritesOnly, favoriteIds]);

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <ScrollText className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">{devotionalJourney.title}</h2>
          <p className="text-muted-foreground font-body text-sm">30 dias de reflexão e oração</p>
        </div>
      </div>

      <SearchFilter
        placeholder="Buscar por tema..."
        onSearch={setSearchQuery}
        showFavoritesFilter
        favoritesActive={showFavoritesOnly}
        onFilterFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
      />

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {filteredDays.length === 0 ? (
          <Card className="p-8 text-center col-span-full">
            <p className="text-muted-foreground font-body">Nenhum dia encontrado</p>
          </Card>
        ) : (
          filteredDays.map((d) => {
            const itemId = `day-${d.day}`;
            const isToday = d.day === ((today - 1) % 30) + 1;
            return (
              <motion.div key={d.day} variants={fadeInUp}>
                <Card 
                  className={`cursor-pointer hover:border-gold/40 transition-all duration-300 ${isToday ? 'border-gold/40 shadow-glow-gold' : ''}`} 
                  onClick={() => onSelect(d)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-display text-sm bg-gold/10 px-2 py-1 rounded-full">Dia {d.day}</span>
                        {isToday && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Hoje</span>}
                        {isRead('devotional', itemId) && <Check className="w-4 h-4 text-green-500" />}
                      </div>
                      <ProgressButtons
                        size="sm"
                        isRead={isRead('devotional', itemId)}
                        isFavorite={isFavorite('devotional', itemId)}
                        onToggleRead={() => {}}
                        onToggleFavorite={() => {}}
                      />
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-2">{d.theme}</h3>
                    <p className="text-muted-foreground text-sm font-body line-clamp-3">{d.reflection.substring(0, 120)}...</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        )}
      </motion.div>
    </div>
  );
};

const DevotionalDayView = ({ day, goBack, isRead, isFavorite, toggleRead, toggleFavorite }: any) => {
  const itemId = `day-${day.day}`;
  
  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-navy via-navy-dark to-brown/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gold/80 font-body text-sm">Dia {day.day} de 30</span>
              <h2 className="text-2xl font-display text-cream mt-1">{day.theme}</h2>
            </div>
            <ProgressButtons
              isRead={isRead('devotional', itemId)}
              isFavorite={isFavorite('devotional', itemId)}
              onToggleRead={() => toggleRead('devotional', itemId)}
              onToggleFavorite={() => toggleFavorite('devotional', itemId)}
            />
          </div>
        </div>
        <CardContent className="p-6 space-y-6">
          <div>
            <h4 className="font-display text-gold mb-4 text-lg flex items-center gap-2">
              <Sun className="w-5 h-5" />
              Reflexão
            </h4>
            <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line bg-muted/30 p-6 rounded-xl border border-border/50">
              {day.reflection}
            </div>
          </div>
          <div>
            <h4 className="font-display text-gold mb-4 text-lg flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Oração
            </h4>
            <div className="text-foreground/80 font-body italic whitespace-pre-line bg-gold/5 p-6 rounded-xl border border-gold/20">
              {day.prayer}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MeditationsCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => {
  const today = new Date().getDate();
  const recommendedKey = Object.keys(meditationCategories)[today % Object.keys(meditationCategories).length];
  
  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gold/10">
          <Sparkles className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">Meditações</h2>
          <p className="text-muted-foreground font-body text-sm">Práticas guiadas para paz interior</p>
        </div>
      </div>
      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {Object.entries(meditationCategories).map(([key, cat]) => (
          <motion.div key={key} variants={fadeInUp}>
            <Card 
              className={`cursor-pointer hover:border-gold/40 transition-all duration-300 ${key === recommendedKey ? 'border-gold/40 shadow-glow-gold' : ''}`} 
              onClick={() => onSelect(key)}
            >
              <CardContent className="p-6">
                {key === recommendedKey && (
                  <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full mb-3 inline-block">
                    <Star className="w-3 h-3 inline mr-1" />
                    Recomendado hoje
                  </span>
                )}
                <h3 className="font-display text-lg text-foreground mb-2">{cat.name}</h3>
                <p className="text-muted-foreground text-sm font-body">{cat.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const MeditationsList = ({ category, goBack, onSelect }: { category: string; goBack: () => void; onSelect: (item: any) => void }) => {
  const cat = meditationCategories[category as keyof typeof meditationCategories];
  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      <motion.div className="grid gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {cat.meditations.map((med) => (
          <motion.div key={med.id} variants={fadeInUp}>
            <Card className="cursor-pointer hover:border-gold/40 transition-all" onClick={() => onSelect(med)}>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-foreground text-lg">{med.title}</h4>
                  <span className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                    <Clock className="w-4 h-4" />{med.duration}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-gold" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const NovenasSection = ({ goBack, onSelect, progress, toggleDay }: { goBack: () => void; onSelect: (item: any) => void; progress: number[]; toggleDay: (day: number) => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 rounded-xl bg-gold/10">
        <BookHeart className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Novena aos Arcanjos</h2>
        <p className="text-muted-foreground font-body text-sm">{progress.length}/15 dias completos</p>
      </div>
    </div>
    
    {/* Progress bar */}
    <div className="bg-muted rounded-full h-3 overflow-hidden">
      <motion.div 
        className="bg-gradient-divine h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(progress.length / 15) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
    
    <p className="text-muted-foreground font-body">{novenas.description}</p>
    
    <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
      {novenas.days.map((day) => (
        <motion.div key={day.day} variants={fadeInUp}>
          <Card className={`transition-all duration-300 ${progress.includes(day.day) ? 'border-green-500/50 bg-green-500/5' : 'hover:border-gold/40'}`}>
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex-1 cursor-pointer" onClick={() => onSelect(day)}>
                <div className="flex items-center gap-2">
                  <span className="text-gold font-display text-sm">Dia {day.day}</span>
                  {progress.includes(day.day) && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Completo</span>}
                </div>
                <h4 className="font-display text-foreground mt-1">{day.title}</h4>
                <p className="text-muted-foreground text-sm">{day.archangel}</p>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); toggleDay(day.day); }} 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${progress.includes(day.day) ? 'bg-green-500 text-white' : 'bg-muted hover:bg-gold/20 border border-border'}`}
              >
                {progress.includes(day.day) && <Check className="w-5 h-5" />}
              </button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const RosarySection = ({ goBack, onSelect }: { goBack: () => void; onSelect: (mystery: string) => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-gold/10">
        <Flower2 className="w-6 h-6 text-gold" />
      </div>
      <h2 className="text-2xl font-display text-foreground">Santo Rosário</h2>
    </div>
    <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {Object.entries(rosary).filter(([key]) => key !== 'howToPray').map(([key, mystery]: [string, any]) => (
        <motion.div key={key} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 transition-all duration-300" onClick={() => onSelect(key)}>
            <CardContent className="p-6">
              <h3 className="font-display text-lg text-foreground mb-2">{mystery.name}</h3>
              <p className="text-gold text-sm font-body">{mystery.recommendation}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-foreground font-display">Como Rezar o Rosário</CardTitle>
      </CardHeader>
      <CardContent>
        <ol className="space-y-3">
          {rosary.howToPray.map((step, i) => (
            <li key={i} className="flex gap-4 text-foreground/80 font-body text-sm">
              <span className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs flex-shrink-0 font-display">{i + 1}</span>
              <span className="pt-1">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  </div>
);

const RosaryDetail = ({ mystery, goBack }: { mystery: string; goBack: () => void }) => {
  const data = rosary[mystery as keyof typeof rosary] as any;
  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <Flower2 className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">{data.name}</h2>
          <p className="text-gold font-body text-sm">{data.recommendation}</p>
        </div>
      </div>
      <motion.div className="grid gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {data.mysteries.map((m: any) => (
          <motion.div key={m.number} variants={fadeInUp}>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-display text-gold mb-3 text-lg">{m.number}º Mistério: {m.title}</h4>
                <p className="text-foreground/85 font-body mb-4 leading-relaxed">{m.reflection}</p>
                <p className="text-muted-foreground text-sm font-body italic bg-muted/30 p-4 rounded-lg">{m.meditation}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const CalendarSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-gold/10">
        <Calendar className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Calendário Litúrgico</h2>
        <p className="text-muted-foreground font-body text-sm">* Datas com asterisco variam conforme a Páscoa</p>
      </div>
    </div>
    <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {liturgicalCalendar.map((event, i) => (
        <motion.div key={i} variants={fadeInUp}>
          <Card>
            <CardContent className="p-5">
              <p className="text-gold font-display text-sm mb-2">{event.date}</p>
              <h3 className="text-foreground font-display text-lg mb-2">{event.feast}</h3>
              <p className="text-muted-foreground text-sm font-body mb-3 line-clamp-2">{event.description}</p>
              <span className={`px-3 py-1 rounded-full text-xs font-body ${
                event.type === 'Solenidade' ? 'bg-gold/20 text-gold' : 
                event.type === 'Festa' ? 'bg-blue-500/20 text-blue-400' : 
                'bg-muted text-muted-foreground'
              }`}>
                {event.type}
              </span>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const ArchangelsSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 rounded-xl bg-gold/10">
        <Cross className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Seus Guardiões Espirituais</h2>
        <p className="text-muted-foreground font-body text-sm">Guias práticos para sua jornada de fé</p>
      </div>
    </div>
    <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
      {Object.entries(archangelsInfo).map(([key, arch]: [string, any]) => (
        <motion.div key={key} variants={fadeInUp}>
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-navy via-navy-dark to-brown/30 p-6">
              <h3 className="text-2xl font-display text-gold">{arch.name}</h3>
              <p className="text-cream/90 font-body text-lg italic mt-1">"{arch.phrase}"</p>
            </div>
            <CardContent className="p-6 space-y-6">
              {/* Quem é */}
              <div>
                <h4 className="font-display text-gold text-lg mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5" /> Quem é
                </h4>
                <p className="text-foreground/85 font-body leading-relaxed">{arch.description}</p>
                <p className="text-foreground/80 font-body leading-relaxed mt-2">{arch.history}</p>
              </div>

              {/* Dia da Festa e Patrono */}
              <div className="grid sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                <div>
                  <span className="font-display text-sm text-gold block mb-1">📅 Dia da Festa</span>
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-foreground text-sm font-body">{arch.feast}</span>
                </div>
                <div>
                  <span className="font-display text-sm text-gold block mb-1">🙏 Patrono de</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {arch.patronOf.map((p: string, i: number) => (
                      <span key={i} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs font-body">{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quando recorrer */}
              {arch.whenToInvoke && (
                <div>
                  <h4 className="font-display text-gold text-lg mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" /> Quando Recorrer a Ele
                  </h4>
                  <p className="text-foreground/85 font-body leading-relaxed bg-gold/5 p-4 rounded-xl border border-gold/15">{arch.whenToInvoke}</p>
                </div>
              )}

              {/* Intenções Recomendadas */}
              {arch.intentions && (
                <div>
                  <h4 className="font-display text-gold text-lg mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5" /> Intenções Recomendadas
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {arch.intentions.map((intent: any, i: number) => (
                      <div key={i} className="p-4 rounded-xl bg-muted/40 border border-border/50 hover:border-gold/30 transition-all">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{intent.icon}</span>
                          <span className="font-display text-foreground text-sm">{intent.label}</span>
                        </div>
                        <p className="text-muted-foreground text-xs font-body leading-relaxed">{intent.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Oração Própria */}
              {arch.specialPrayer && (
                <div>
                  <h4 className="font-display text-gold text-lg mb-3 flex items-center gap-2">
                    <BookHeart className="w-5 h-5" /> Oração Própria
                  </h4>
                  <div className="text-foreground/80 font-body italic leading-relaxed bg-gold/5 p-5 rounded-xl border border-gold/20 whitespace-pre-line">
                    {arch.specialPrayer}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const DetailView = ({ item, goBack, section, isRead, isFavorite, toggleRead, toggleFavorite }: any) => {
  const getItemType = () => {
    if (section === 'prayers') return 'prayer';
    if (section === 'readings') return 'reading';
    if (section === 'devotional') return 'devotional';
    if (section === 'novenas') return 'novena';
    if (section === 'meditation') return 'meditation';
    return 'item';
  };
  
  const itemType = getItemType();
  const itemId = item.category ? `${item.category}-${item.id}` : `${item.id}`;

  // Check if this is a structured meditation
  const isMeditation = section === 'meditation' && item.preparation;

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-navy via-navy-dark to-brown/30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-display text-cream">{item.title}</h2>
              {item.archangel && <p className="text-gold/80 font-body mt-1">{item.archangel}</p>}
              {item.duration && (
                <p className="text-cream/70 font-body text-sm flex items-center gap-1 mt-2">
                  <Clock className="w-4 h-4" />{item.duration}
                </p>
              )}
            </div>
            {(section === 'prayers' || section === 'readings') && (
              <ProgressButtons
                isRead={isRead(itemType, itemId)}
                isFavorite={isFavorite(itemType, itemId)}
                onToggleRead={() => toggleRead(itemType, itemId)}
                onToggleFavorite={() => toggleFavorite(itemType, itemId)}
              />
            )}
          </div>
        </div>
        <CardContent className="p-6 space-y-6">
          {/* Structured meditation layout */}
          {isMeditation && (
            <>
              {/* Preparação */}
              <div className="p-5 bg-muted/30 rounded-xl border border-border/50">
                <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2">
                  🕯 Preparação
                </h4>
                <p className="text-foreground/85 font-body leading-relaxed">{item.preparation}</p>
              </div>

              {/* Respiração Guiada */}
              <div className="p-5 bg-blue-500/5 rounded-xl border border-blue-500/15">
                <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2">
                  🌬 Respiração Guiada
                </h4>
                <p className="text-foreground/85 font-body leading-relaxed">{item.breathing}</p>
              </div>

              {/* Reflexão / Visualização Principal */}
              <div>
                <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2">
                  ✨ Reflexão
                </h4>
                <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line bg-muted/20 p-6 rounded-xl border border-border/40">
                  {item.reflection}
                </div>
              </div>

              {/* Palavra-chave do Dia */}
              {item.keyword && (
                <div className="text-center py-4">
                  <p className="text-muted-foreground font-body text-sm mb-1">Palavra de hoje</p>
                  <span className="text-gold font-display text-2xl tracking-wide">{item.keyword}</span>
                </div>
              )}

              {/* Momento de Silêncio */}
              <div className="p-5 bg-gold/5 rounded-xl border border-gold/15 text-center">
                <h4 className="font-display text-gold mb-2 text-lg">🕊 Momento de Silêncio</h4>
                <p className="text-foreground/80 font-body italic leading-relaxed">{item.silence || "Permaneça em silêncio por alguns instantes."}</p>
              </div>

              {/* Oração Final */}
              <div>
                <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2">
                  🙏 Oração Final
                </h4>
                <div className="text-foreground/80 font-body italic whitespace-pre-line bg-gold/5 p-5 rounded-xl border border-gold/20">
                  {item.finalPrayer}
                </div>
              </div>

              {/* Aplicação Prática */}
              {item.practicalApplication && (
                <div className="p-5 bg-green-500/5 rounded-xl border border-green-500/15">
                  <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2">
                    🌱 Aplicação Prática
                  </h4>
                  <p className="text-foreground/85 font-body leading-relaxed">{item.practicalApplication}</p>
                </div>
              )}
            </>
          )}

          {/* Legacy content fallback */}
          {!isMeditation && item.content && (
            <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">
              {item.content}
            </div>
          )}
          {item.application && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">📌 Aplicação Prática</h4>
              <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.application}</p>
            </div>
          )}
          {!isMeditation && item.reflection && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">Reflexão</h4>
              <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.reflection}</p>
            </div>
          )}
          {item.prayer && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
              <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
            </div>
          )}
          {item.intention && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">Intenção</h4>
              <p className="text-gold/90 font-body bg-gold/10 p-4 rounded-xl">{item.intention}</p>
            </div>
          )}
          {item.continueReading && item.continueReading.length > 0 && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">📖 Continue Aprofundando</h4>
              <ul className="list-disc list-inside text-muted-foreground font-body space-y-1">
                {item.continueReading.map((b: string, i: number) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          )}
          {item.recommendedBooks && (
            <div>
              <h4 className="font-display text-gold mb-3 text-lg">Leituras Recomendadas</h4>
              <ul className="list-disc list-inside text-muted-foreground font-body space-y-1">
                {item.recommendedBooks.map((b: string, i: number) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
