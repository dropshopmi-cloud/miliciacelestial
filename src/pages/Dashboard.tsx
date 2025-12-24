import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { prayers, readings, meditations, novenas, rosary, liturgicalCalendar, archangelsInfo, dailyBiblePassages, dailyPrayers, dailyQuotes } from '@/data/religiousContent';
import { toast } from 'sonner';
import { 
  User, LogOut, BookOpen, Heart, Sparkles, Shield, 
  Cross, Menu, X, Clock, ChevronRight, Star, ArrowLeft,
  Calendar, BookHeart, Flower2
} from 'lucide-react';
import threeArchangels from '@/assets/three-archangels.jpg';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const { user, profile, loading, signOut, updateProfile } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }
    if (profile?.name) {
      setUserName(profile.name);
    }
  }, [user, profile, loading, navigate]);

  const handleSaveName = async () => {
    if (tempName.trim()) {
      const { error } = await updateProfile(tempName.trim());
      if (!error) {
        setUserName(tempName.trim());
        setEditingName(false);
        toast.success('Nome atualizado com sucesso!');
      } else {
        toast.error('Erro ao atualizar nome');
      }
    }
  };

  const handleLogout = async () => {
    await signOut();
    toast.success('Até logo! Que os Arcanjos te protejam.');
    navigate('/auth');
  };

  const today = new Date();
  const dayOfMonth = today.getDate();
  const dailyPassage = dailyBiblePassages[(dayOfMonth - 1) % dailyBiblePassages.length];
  const dailyPrayer = dailyPrayers[(dayOfMonth - 1) % dailyPrayers.length];
  const dailyQuote = dailyQuotes[dayOfMonth % dailyQuotes.length];

  const menuItems = [
    { id: 'home', label: 'Início', icon: Shield },
    { id: 'prayers', label: 'Orações', icon: Heart },
    { id: 'readings', label: 'Leituras', icon: BookOpen },
    { id: 'meditation', label: 'Meditação', icon: Sparkles },
    { id: 'novenas', label: 'Novenas', icon: BookHeart },
    { id: 'rosary', label: 'Rosário', icon: Flower2 },
    { id: 'calendar', label: 'Calendário', icon: Calendar },
    { id: 'archangels', label: 'Arcanjos', icon: Cross },
  ];

  const goBack = () => setActiveSection('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'prayers': return <PrayersSection goBack={goBack} />;
      case 'readings': return <ReadingsSection goBack={goBack} />;
      case 'meditation': return <MeditationSection goBack={goBack} />;
      case 'novenas': return <NovenasSection goBack={goBack} />;
      case 'rosary': return <RosarySection goBack={goBack} />;
      case 'calendar': return <CalendarSection goBack={goBack} />;
      case 'archangels': return <ArchangelsSection goBack={goBack} />;
      default: return <HomeSection userName={userName} dailyPassage={dailyPassage} dailyPrayer={dailyPrayer} dailyQuote={dailyQuote} setActiveSection={setActiveSection} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark">
        <div className="animate-pulse text-gold font-display text-xl">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-gold/20 px-6 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
              <Shield className="w-6 h-6 text-navy-dark" />
            </div>
            <div>
              <h1 className="font-display text-xl text-gold-light">Milícia Celestial</h1>
              <p className="text-cream/60 text-xs font-body">Miguel • Gabriel • Rafael</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${
                  activeSection === item.id 
                    ? 'bg-gold/20 text-gold' 
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
                <Button size="sm" variant="gold" onClick={handleSaveName}>OK</Button>
              </div>
            ) : (
              <button onClick={() => { setEditingName(true); setTempName(userName); }} className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                <User className="w-5 h-5" />
                <span className="font-body text-sm">{userName || 'Seu nome'}</span>
              </button>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-cream/70 hover:text-cream">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-gold/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setMobileMenuOpen(true)} className="text-gold-light">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-display text-gold-light text-lg">Milícia Celestial</h1>
          <button onClick={handleLogout} className="text-gold-light">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-navy via-navy-dark to-brown p-6 lg:hidden">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-gold-light text-lg">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)} className="text-gold-light"><X className="w-5 h-5" /></button>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'bg-gold/20 text-gold' : 'text-cream/70 hover:bg-gold/10'}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-body">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="min-h-screen pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto p-4 lg:p-8">{renderContent()}</div>
      </main>
    </div>
  );
};

const BackButton = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-6 font-body">
    <ArrowLeft className="w-5 h-5" />
    <span>Voltar</span>
  </button>
);

const HomeSection = ({ userName, dailyPassage, dailyPrayer, dailyQuote, setActiveSection }: any) => (
  <div className="space-y-8 animate-fade-in">
    <Card variant="elevated" className="overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-dark to-navy opacity-95" />
      <div className="relative p-8 flex flex-col md:flex-row items-center gap-6">
        <img src={threeArchangels} alt="Santos Arcanjos" className="w-40 h-40 rounded-2xl border-4 border-gold/50 shadow-xl object-cover" />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-display text-gold-light mb-2">Bem-vindo{userName ? `, ${userName}` : ''}!</h1>
          <p className="text-cream/80 italic font-body text-lg">"{dailyQuote}"</p>
          <div className="mt-4 flex items-center gap-2 justify-center md:justify-start text-gold/80">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-body">Que este dia seja abençoado pelos Arcanjos</span>
          </div>
        </div>
      </div>
    </Card>

    <Card variant="sacred">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl"><BookOpen className="w-5 h-5 text-gold" />Passagem Bíblica do Dia</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 font-body text-lg leading-relaxed italic">"{dailyPassage.passage}"</p>
        <p className="text-gold mt-2 font-body text-base">{dailyPassage.reference}</p>
      </CardContent>
    </Card>

    <Card variant="sacred">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground text-xl"><Heart className="w-5 h-5 text-gold" />Oração do Dia - {dailyPrayer.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 font-body text-lg leading-relaxed italic">"{dailyPrayer.content}"</p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { id: 'prayers', icon: Heart, title: 'Orações', desc: '22 orações', color: 'from-gold to-gold-dark' },
        { id: 'readings', icon: BookOpen, title: 'Leituras', desc: '22 leituras', color: 'from-navy to-navy-dark' },
        { id: 'meditation', icon: Sparkles, title: 'Meditação', desc: '20 meditações', color: 'from-brown to-brown-light' },
        { id: 'archangels', icon: Cross, title: 'Arcanjos', desc: 'Miguel, Gabriel, Rafael', color: 'from-gold-dark to-brown' },
      ].map((item) => (
        <Card key={item.id} variant="sacred" className="cursor-pointer group" onClick={() => setActiveSection(item.id)}>
          <CardContent className="p-5">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-6 h-6 text-cream" />
            </div>
            <h3 className="font-display text-base text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            <ChevronRight className="w-4 h-4 text-gold mt-2 group-hover:translate-x-1 transition-transform" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const PrayersSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><Heart className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Orações</h2></div>
    <div className="grid gap-4">
      {prayers.map((prayer, i) => (
        <Card key={prayer.id} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div><CardTitle className="text-foreground text-lg">{prayer.title}</CardTitle><CardDescription className="font-body text-base">{prayer.description}</CardDescription></div>
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">{prayer.category}</span>
            </div>
          </CardHeader>
          <CardContent><p className="text-foreground/80 font-body text-base leading-relaxed">"{prayer.content}"</p></CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ReadingsSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><BookOpen className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Leituras Espirituais</h2></div>
    <div className="grid md:grid-cols-2 gap-4">
      {readings.map((r, i) => (
        <Card key={r.id} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-foreground text-lg">{r.title}</CardTitle>
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs">{r.theme}</span>
            </div>
          </CardHeader>
          <CardContent><p className="text-foreground/80 font-body text-base leading-relaxed">{r.content}</p></CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const MeditationSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><Sparkles className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Meditações</h2></div>
    <div className="grid gap-6">
      {meditations.map((m, i) => (
        <Card key={m.id} variant="elevated" className="animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div><CardTitle className="text-foreground text-lg">{m.title}</CardTitle><CardDescription className="font-body text-base">{m.description}</CardDescription></div>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs"><Clock className="w-3 h-3" />{m.duration}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {m.steps.map((step, si) => (
                <li key={si} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-xs font-bold flex-shrink-0">{si + 1}</span>
                  <span className="text-foreground/80 font-body text-base">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const NovenasSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><BookHeart className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Novena aos Santos Arcanjos</h2></div>
    <p className="text-foreground/80 font-body text-lg mb-6">{novenas.description}</p>
    <div className="grid gap-4">
      {novenas.days.map((day, i) => (
        <Card key={day.day} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${i * 0.03}s` }}>
          <CardHeader><CardTitle className="text-foreground text-lg">{day.title}</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <p className="text-foreground/80 font-body text-base"><strong>Reflexão:</strong> {day.reflection}</p>
            <p className="text-foreground/80 font-body text-base italic"><strong>Oração:</strong> {day.prayer}</p>
            <p className="text-gold font-body text-sm"><strong>Intenção:</strong> {day.intention}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const RosarySection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><Flower2 className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">{rosary.title}</h2></div>
    <p className="text-foreground/80 font-body text-lg mb-6">{rosary.description}</p>
    
    <Card variant="sacred" className="mb-6">
      <CardHeader><CardTitle className="text-foreground text-lg">Como Rezar o Rosário</CardTitle></CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {rosary.howToPray.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold flex-shrink-0">{i + 1}</span>
              <span className="text-foreground/80 font-body text-base">{step}</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>

    {Object.entries(rosary.mysteries).map(([key, mystery]) => (
      <Card key={key} variant="elevated" className="mb-4">
        <CardHeader>
          <CardTitle className="text-foreground text-xl">{mystery.name}</CardTitle>
          <CardDescription className="font-body text-base">Recomendado: {mystery.dayRecommended}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mystery.mysteries.map((m) => (
              <div key={m.number} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-display text-gold text-base mb-2">{m.number}º Mistério: {m.title}</h4>
                <p className="text-foreground/80 font-body text-sm">{m.reflection}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const CalendarSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><Calendar className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Calendário Litúrgico</h2></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {liturgicalCalendar.map((event, i) => (
        <Card key={i} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${i * 0.03}s` }}>
          <CardContent className="p-5">
            <p className="text-gold font-display text-sm mb-1">{event.date}</p>
            <h3 className="text-foreground font-display text-base mb-2">{event.feast}</h3>
            <span className={`px-2 py-1 rounded text-xs ${event.type === 'Solenidade' ? 'bg-gold/20 text-gold' : event.type === 'Festa' ? 'bg-navy/20 text-navy dark:text-gold' : 'bg-muted text-muted-foreground'}`}>{event.type}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ArchangelsSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-6"><Cross className="w-8 h-8 text-gold" /><h2 className="text-3xl font-display text-foreground">Os Três Arcanjos</h2></div>
    
    <Card variant="elevated" className="overflow-hidden mb-8">
      <img src={threeArchangels} alt="Santos Arcanjos" className="w-full h-64 object-cover" />
    </Card>

    {Object.entries(archangelsInfo).map(([key, arch]) => (
      <Card key={key} variant="sacred" className="mb-4">
        <CardHeader>
          <CardTitle className="text-gold text-2xl">{arch.name}</CardTitle>
          <CardDescription className="font-body text-base">{arch.title} • "{arch.meaning}"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 font-body text-base leading-relaxed">{arch.description}</p>
          <p className="text-foreground/80 font-body text-base leading-relaxed">{arch.history}</p>
          <div className="flex flex-wrap gap-2">
            <span className="font-display text-sm text-foreground">Festa:</span>
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">{arch.feast}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-display text-sm text-foreground">Patrono de:</span>
            {arch.patronOf.map((p, i) => <span key={i} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">{p}</span>)}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-display text-sm text-foreground">Símbolos:</span>
            {arch.symbols.map((s, i) => <span key={i} className="px-2 py-1 rounded bg-gold/10 text-gold text-xs">{s}</span>)}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

export default Dashboard;
