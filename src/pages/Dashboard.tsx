import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { prayerCategories, readingCategories, meditationCategories, novenas, rosary, liturgicalCalendar, archangelsInfo, dailyBiblePassages, dailyPrayers, dailyQuotes } from '@/data/religiousContent';
import { toast } from 'sonner';
import { 
  User, LogOut, BookOpen, Heart, Sparkles, Shield, 
  Cross, Menu, X, Clock, ChevronRight, Star, ArrowLeft,
  Calendar, BookHeart, Flower2, Check, Bell
} from 'lucide-react';
import logoMilicia from '@/assets/logo-milicia-celestial.png';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [novenaProgress, setNovenaProgress] = useState<number[]>([]);
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
    // Load novena progress from localStorage
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
    toast.success('Até logo! Que os Arcanjos te protejam.');
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-dark">
        <div className="animate-pulse text-gold font-display text-xl">Carregando...</div>
      </div>
    );
  }

  const renderContent = () => {
    if (selectedItem) {
      return <DetailView item={selectedItem} goBack={goBack} section={activeSection} />;
    }
    
    switch (activeSection) {
      case 'prayers': 
        return selectedCategory 
          ? <PrayersList category={selectedCategory} goBack={goBack} onSelect={setSelectedItem} />
          : <PrayersCategories onSelect={setSelectedCategory} goBack={goBack} />;
      case 'readings': 
        return selectedCategory 
          ? <ReadingsList category={selectedCategory} goBack={goBack} onSelect={setSelectedItem} />
          : <ReadingsCategories onSelect={setSelectedCategory} goBack={goBack} />;
      case 'meditation': 
        return selectedCategory 
          ? <MeditationsList category={selectedCategory} goBack={goBack} onSelect={setSelectedItem} />
          : <MeditationsCategories onSelect={setSelectedCategory} goBack={goBack} />;
      case 'novenas': 
        return selectedItem 
          ? <DetailView item={selectedItem} goBack={goBack} section="novenas" />
          : <NovenasSection goBack={goBack} onSelect={setSelectedItem} progress={novenaProgress} toggleDay={toggleNovenaDay} />;
      case 'rosary': 
        return selectedCategory 
          ? <RosaryDetail mystery={selectedCategory} goBack={goBack} />
          : <RosarySection goBack={goBack} onSelect={setSelectedCategory} />;
      case 'calendar': return <CalendarSection goBack={goBack} />;
      case 'archangels': return <ArchangelsSection goBack={goBack} />;
      default: return <HomeSection userName={userName} dailyPassage={dailyPassage} dailyPrayer={dailyPrayer} dailyQuote={dailyQuote} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Desktop Header */}
      <header className="hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-gold/20 px-6 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img src={logoMilicia} alt="Milícia Celestial" className="w-12 h-12 rounded-full border-2 border-gold/50" />
            <div>
              <h1 className="font-display text-xl text-gold-light">Milícia Celestial</h1>
              <p className="text-cream/60 text-xs font-body">Miguel • Gabriel • Rafael</p>
            </div>
          </div>
          
          <nav className="flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSelectedCategory(null); setSelectedItem(null); }}
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
          <div className="flex items-center gap-2">
            <img src={logoMilicia} alt="Logo" className="w-8 h-8 rounded-full" />
            <h1 className="font-display text-gold-light text-lg">Milícia Celestial</h1>
          </div>
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
            <div className="mb-6 p-4 bg-gold/10 rounded-lg">
              {editingName ? (
                <div className="flex gap-2">
                  <Input value={tempName} onChange={(e) => setTempName(e.target.value)} placeholder="Seu nome" className="h-9 text-sm" />
                  <Button size="sm" variant="gold" onClick={() => { handleSaveName(); setMobileMenuOpen(false); }}>OK</Button>
                </div>
              ) : (
                <button onClick={() => { setEditingName(true); setTempName(userName); }} className="flex items-center gap-2 text-cream">
                  <User className="w-5 h-5" />
                  <span className="font-body">{userName || 'Adicionar nome'}</span>
                </button>
              )}
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setSelectedCategory(null); setSelectedItem(null); setMobileMenuOpen(false); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'bg-gold/20 text-gold' : 'text-cream/70 hover:bg-gold/10'}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-body">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}

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
  <div className="space-y-6 animate-fade-in">
    <Card variant="sacred" className="bg-gradient-to-r from-navy/80 to-navy-dark/80">
      <CardContent className="p-6">
        <h1 className="text-2xl font-display text-gold-light mb-2">Bem-vindo{userName ? `, ${userName}` : ''}!</h1>
        <p className="text-cream/80 italic font-body">"{dailyQuote}"</p>
      </CardContent>
    </Card>

    <Card variant="sacred">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-foreground text-lg"><BookOpen className="w-5 h-5 text-gold" />Passagem do Dia</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 font-body text-base leading-relaxed italic">"{dailyPassage.passage}"</p>
        <p className="text-gold mt-2 font-body text-sm">{dailyPassage.reference}</p>
      </CardContent>
    </Card>

    <Card variant="sacred">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-foreground text-lg"><Heart className="w-5 h-5 text-gold" />Oração do Dia</CardTitle>
        <CardDescription>{dailyPrayer.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 font-body text-base leading-relaxed">{dailyPrayer.content}</p>
      </CardContent>
    </Card>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { id: 'prayers', icon: Heart, title: 'Orações', desc: '10 categorias' },
        { id: 'readings', icon: BookOpen, title: 'Leituras', desc: '4 temas' },
        { id: 'meditation', icon: Sparkles, title: 'Meditação', desc: '6 categorias' },
        { id: 'archangels', icon: Cross, title: 'Arcanjos', desc: 'Miguel, Gabriel, Rafael' },
      ].map((item) => (
        <Card key={item.id} variant="sacred" className="cursor-pointer group hover:border-gold/50" onClick={() => setActiveSection(item.id)}>
          <CardContent className="p-4">
            <item.icon className="w-8 h-8 text-gold mb-2" />
            <h3 className="font-display text-base text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
            <ChevronRight className="w-4 h-4 text-gold mt-2 group-hover:translate-x-1 transition-transform" />
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const PrayersCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><Heart className="w-6 h-6 text-gold" />Orações por Tema</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(prayerCategories).map(([key, cat]) => (
        <Card key={key} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(key)}>
          <CardContent className="p-5">
            <h3 className="font-display text-lg text-foreground mb-1">{cat.name}</h3>
            <p className="text-muted-foreground text-sm font-body mb-2">{cat.description}</p>
            <p className="text-gold text-xs">{cat.prayers.length} orações</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const PrayersList = ({ category, goBack, onSelect }: { category: string; goBack: () => void; onSelect: (item: any) => void }) => {
  const cat = prayerCategories[category as keyof typeof prayerCategories];
  return (
    <div className="space-y-4 animate-fade-in">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      <div className="grid gap-3">
        {cat.prayers.map((prayer) => (
          <Card key={prayer.id} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(prayer)}>
            <CardContent className="p-4 flex items-center justify-between">
              <span className="font-body text-foreground">{prayer.title}</span>
              <ChevronRight className="w-5 h-5 text-gold" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ReadingsCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><BookOpen className="w-6 h-6 text-gold" />Leituras Espirituais</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {Object.entries(readingCategories).map(([key, cat]) => (
        <Card key={key} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(key)}>
          <CardContent className="p-5">
            <h3 className="font-display text-lg text-foreground mb-1">{cat.name}</h3>
            <p className="text-muted-foreground text-sm font-body">{cat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ReadingsList = ({ category, goBack, onSelect }: { category: string; goBack: () => void; onSelect: (item: any) => void }) => {
  const cat = readingCategories[category as keyof typeof readingCategories];
  return (
    <div className="space-y-4 animate-fade-in">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      <div className="grid gap-3">
        {cat.readings.map((reading) => (
          <Card key={reading.id} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(reading)}>
            <CardContent className="p-4">
              <h4 className="font-display text-foreground mb-1">{reading.title}</h4>
              <p className="text-muted-foreground text-sm font-body">{reading.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const MeditationsCategories = ({ onSelect, goBack }: { onSelect: (cat: string) => void; goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><Sparkles className="w-6 h-6 text-gold" />Meditações</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(meditationCategories).map(([key, cat]) => (
        <Card key={key} variant="sacred" className={`cursor-pointer hover:border-gold/50 ${'recommended' in cat && cat.recommended ? 'border-gold/40' : ''}`} onClick={() => onSelect(key)}>
          <CardContent className="p-5">
            {'recommended' in cat && cat.recommended && <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded mb-2 inline-block">Recomendado hoje</span>}
            <h3 className="font-display text-lg text-foreground mb-1">{cat.name}</h3>
            <p className="text-muted-foreground text-sm font-body">{cat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const MeditationsList = ({ category, goBack, onSelect }: { category: string; goBack: () => void; onSelect: (item: any) => void }) => {
  const cat = meditationCategories[category as keyof typeof meditationCategories];
  return (
    <div className="space-y-4 animate-fade-in">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{cat.name}</h2>
      <div className="grid gap-3">
        {cat.meditations.map((med) => (
          <Card key={med.id} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(med)}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h4 className="font-display text-foreground">{med.title}</h4>
                <span className="text-muted-foreground text-sm flex items-center gap-1"><Clock className="w-3 h-3" />{med.duration}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gold" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const NovenasSection = ({ goBack, onSelect, progress, toggleDay }: { goBack: () => void; onSelect: (item: any) => void; progress: number[]; toggleDay: (day: number) => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><BookHeart className="w-6 h-6 text-gold" />Novena aos Arcanjos</h2>
    <p className="text-muted-foreground font-body">{novenas.description}</p>
    <div className="grid gap-3">
      {novenas.days.map((day) => (
        <Card key={day.day} variant="sacred" className={`${progress.includes(day.day) ? 'border-green-500/50 bg-green-500/5' : ''}`}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex-1 cursor-pointer" onClick={() => onSelect(day)}>
              <h4 className="font-display text-foreground">{day.title}</h4>
              <p className="text-muted-foreground text-sm">{day.archangel}</p>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleDay(day.day); }} className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${progress.includes(day.day) ? 'bg-green-500 text-white' : 'bg-muted hover:bg-gold/20'}`}>
              {progress.includes(day.day) && <Check className="w-5 h-5" />}
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const RosarySection = ({ goBack, onSelect }: { goBack: () => void; onSelect: (mystery: string) => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><Flower2 className="w-6 h-6 text-gold" />Santo Rosário</h2>
    <div className="grid md:grid-cols-2 gap-4">
      {Object.entries(rosary).filter(([key]) => key !== 'howToPray').map(([key, mystery]: [string, any]) => (
        <Card key={key} variant="sacred" className="cursor-pointer hover:border-gold/50" onClick={() => onSelect(key)}>
          <CardContent className="p-5">
            <h3 className="font-display text-lg text-foreground mb-1">{mystery.name}</h3>
            <p className="text-gold text-sm font-body">{mystery.recommendation}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <Card variant="sacred">
      <CardHeader><CardTitle className="text-foreground">Como Rezar o Rosário</CardTitle></CardHeader>
      <CardContent>
        <ol className="space-y-2">
          {rosary.howToPray.map((step, i) => (
            <li key={i} className="flex gap-3 text-foreground/80 font-body text-sm">
              <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs flex-shrink-0">{i + 1}</span>
              {step}
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
    <div className="space-y-4 animate-fade-in">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">{data.name}</h2>
      <p className="text-gold font-body">{data.recommendation}</p>
      <div className="grid gap-4">
        {data.mysteries.map((m: any) => (
          <Card key={m.number} variant="sacred">
            <CardContent className="p-5">
              <h4 className="font-display text-gold mb-2">{m.number}º Mistério: {m.title}</h4>
              <p className="text-foreground/80 font-body mb-3">{m.reflection}</p>
              <p className="text-muted-foreground text-sm font-body italic">{m.meditation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const CalendarSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><Calendar className="w-6 h-6 text-gold" />Calendário Litúrgico</h2>
    <p className="text-muted-foreground font-body text-sm">* Datas marcadas com asterisco variam conforme o calendário da Páscoa de cada ano.</p>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {liturgicalCalendar.map((event, i) => (
        <Card key={i} variant="sacred">
          <CardContent className="p-4">
            <p className="text-gold font-display text-sm mb-1">{event.date}</p>
            <h3 className="text-foreground font-display text-base mb-1">{event.feast}</h3>
            <p className="text-muted-foreground text-sm font-body mb-2">{event.description}</p>
            <span className={`px-2 py-1 rounded text-xs ${event.type === 'Solenidade' ? 'bg-gold/20 text-gold' : event.type === 'Festa' ? 'bg-navy/20 text-foreground' : 'bg-muted text-muted-foreground'}`}>{event.type}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const ArchangelsSection = ({ goBack }: { goBack: () => void }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground flex items-center gap-2"><Cross className="w-6 h-6 text-gold" />Os Três Arcanjos</h2>
    {Object.entries(archangelsInfo).map(([key, arch]) => (
      <Card key={key} variant="sacred">
        <CardHeader>
          <CardTitle className="text-gold text-xl">{arch.name}</CardTitle>
          <CardDescription>{arch.title} • "{arch.meaning}"</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/80 font-body leading-relaxed">{arch.description}</p>
          <p className="text-foreground/80 font-body leading-relaxed">{arch.history}</p>
          <div className="flex flex-wrap gap-2">
            <span className="font-display text-sm text-foreground">Festa:</span>
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">{arch.feast}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="font-display text-sm text-foreground">Patrono de:</span>
            {arch.patronOf.map((p, i) => <span key={i} className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">{p}</span>)}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const DetailView = ({ item, goBack, section }: { item: any; goBack: () => void; section: string }) => (
  <div className="space-y-6 animate-fade-in">
    <BackButton onClick={goBack} />
    <Card variant="sacred">
      <CardHeader>
        <CardTitle className="text-foreground text-xl">{item.title}</CardTitle>
        {item.archangel && <CardDescription>{item.archangel}</CardDescription>}
        {item.duration && <CardDescription className="flex items-center gap-1"><Clock className="w-4 h-4" />{item.duration}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        {item.content && <p className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">{item.content}</p>}
        {item.reflection && <div><h4 className="font-display text-gold mb-2">Reflexão</h4><p className="text-foreground/80 font-body">{item.reflection}</p></div>}
        {item.prayer && <div><h4 className="font-display text-gold mb-2">Oração</h4><p className="text-foreground/80 font-body italic">{item.prayer}</p></div>}
        {item.intention && <div><h4 className="font-display text-gold mb-2">Intenção</h4><p className="text-gold/80 font-body">{item.intention}</p></div>}
        {item.recommendedBooks && <div><h4 className="font-display text-gold mb-2">Leituras Recomendadas</h4><ul className="list-disc list-inside text-muted-foreground">{item.recommendedBooks.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul></div>}
      </CardContent>
    </Card>
  </div>
);

export default Dashboard;
