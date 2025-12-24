import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { getUser, updateUserName, logout, isAuthenticated } from '@/lib/storage';
import { prayers, biblePassages, meditations, saintMichaelInfo, dailyQuotes } from '@/data/religiousContent';
import { toast } from 'sonner';
import { 
  User, LogOut, BookOpen, Heart, Sparkles, Shield, 
  Cross, Menu, X, Clock, ChevronRight, Star
} from 'lucide-react';
import saintMichael from '@/assets/saint-michael.jpg';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const [editingName, setEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dailyQuote, setDailyQuote] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }

    const user = getUser();
    if (user?.name) {
      setUserName(user.name);
    }

    // Random daily quote
    const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
    setDailyQuote(randomQuote);
  }, [navigate]);

  const handleSaveName = () => {
    if (tempName.trim()) {
      updateUserName(tempName.trim());
      setUserName(tempName.trim());
      setEditingName(false);
      toast.success('Nome atualizado com sucesso!');
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Até logo! Que São Miguel te proteja.');
    navigate('/');
  };

  const menuItems = [
    { id: 'home', label: 'Início', icon: Shield },
    { id: 'prayers', label: 'Orações', icon: Heart },
    { id: 'bible', label: 'Bíblia', icon: BookOpen },
    { id: 'meditation', label: 'Meditação', icon: Sparkles },
    { id: 'about', label: 'São Miguel', icon: Cross },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'prayers':
        return <PrayersSection />;
      case 'bible':
        return <BibleSection />;
      case 'meditation':
        return <MeditationSection />;
      case 'about':
        return <AboutSection />;
      default:
        return <HomeSection userName={userName} dailyQuote={dailyQuote} setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-lg border-b border-gold/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="text-gold-light">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-display text-gold-light text-lg">São Miguel Arcanjo</h1>
          <button onClick={handleLogout} className="text-gold-light">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-navy via-navy-dark to-brown transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 border-b border-gold/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                  <Shield className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <h2 className="font-display text-gold-light text-lg">São Miguel</h2>
                  <p className="text-cream/60 text-xs">Arcanjo</p>
                </div>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gold-light">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Profile Section */}
          <div className="p-4 border-b border-gold/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <User className="w-5 h-5 text-gold" />
              </div>
              {editingName ? (
                <div className="flex-1 flex gap-2">
                  <Input
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    placeholder="Seu nome"
                    className="h-8 text-sm bg-navy-light/50 border-gold/30 text-cream"
                  />
                  <Button size="sm" variant="gold" onClick={handleSaveName} className="h-8 px-3">
                    OK
                  </Button>
                </div>
              ) : (
                <div className="flex-1">
                  <p className="text-cream font-medium text-sm">
                    {userName || 'Adicionar nome'}
                  </p>
                  <button
                    onClick={() => { setEditingName(true); setTempName(userName); }}
                    className="text-gold/70 text-xs hover:text-gold transition-colors"
                  >
                    {userName ? 'Editar' : 'Clique para adicionar'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-gold/20 text-gold border border-gold/30' 
                    : 'text-cream/70 hover:bg-gold/10 hover:text-cream'}
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-body">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gold/20">
            <Button
              onClick={handleLogout}
              variant="sacred"
              className="w-full justify-start gap-3"
            >
              <LogOut className="w-5 h-5" />
              Sair
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-72 min-h-screen pt-16 lg:pt-0">
        <div className="p-4 lg:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

// Home Section
const HomeSection = ({ userName, dailyQuote, setActiveSection }: { userName: string; dailyQuote: string; setActiveSection: (s: string) => void }) => (
  <div className="space-y-8 animate-fade-in">
    {/* Welcome Banner */}
    <Card variant="elevated" className="overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-dark to-navy opacity-95" />
      <div className="relative p-8 flex flex-col md:flex-row items-center gap-6">
        <img 
          src={saintMichael} 
          alt="São Miguel Arcanjo" 
          className="w-32 h-32 rounded-full border-4 border-gold/50 shadow-xl object-cover"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl font-display text-gold-light mb-2">
            Bem-vindo{userName ? `, ${userName}` : ''}!
          </h1>
          <p className="text-cream/80 italic font-body text-lg">"{dailyQuote}"</p>
          <div className="mt-4 flex items-center gap-2 justify-center md:justify-start text-gold/80">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-body">Que este dia seja abençoado</span>
          </div>
        </div>
      </div>
    </Card>

    {/* Quick Actions */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { id: 'prayers', icon: Heart, title: 'Orações', desc: 'Fortaleça sua fé', color: 'from-gold to-gold-dark' },
        { id: 'bible', icon: BookOpen, title: 'Bíblia', desc: 'Palavra de Deus', color: 'from-navy to-navy-dark' },
        { id: 'meditation', icon: Sparkles, title: 'Meditação', desc: 'Paz interior', color: 'from-brown to-brown-light' },
        { id: 'about', icon: Cross, title: 'São Miguel', desc: 'Conheça mais', color: 'from-gold-dark to-brown' },
      ].map((item) => (
        <Card 
          key={item.id}
          variant="sacred" 
          className="cursor-pointer group"
          onClick={() => setActiveSection(item.id)}
        >
          <CardContent className="p-6">
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="w-7 h-7 text-cream" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
            <ChevronRight className="w-5 h-5 text-gold mt-3 group-hover:translate-x-1 transition-transform" />
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Featured Prayer */}
    <Card variant="sacred">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Heart className="w-5 h-5 text-gold" />
          Oração do Dia
        </CardTitle>
        <CardDescription>A poderosa oração de proteção a São Miguel</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/90 font-body leading-relaxed italic">
          "{prayers[0].content}"
        </p>
      </CardContent>
    </Card>
  </div>
);

// Prayers Section
const PrayersSection = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <Heart className="w-8 h-8 text-gold" />
      <h2 className="text-3xl font-display text-foreground">Orações</h2>
    </div>
    <div className="grid gap-4">
      {prayers.map((prayer, index) => (
        <Card key={prayer.id} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-foreground">{prayer.title}</CardTitle>
                <CardDescription>{prayer.description}</CardDescription>
              </div>
              <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
                {prayer.category}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 font-body leading-relaxed italic">
              "{prayer.content}"
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Bible Section
const BibleSection = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <BookOpen className="w-8 h-8 text-gold" />
      <h2 className="text-3xl font-display text-foreground">Passagens Bíblicas</h2>
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      {biblePassages.map((passage, index) => (
        <Card key={passage.id} variant="sacred" className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg text-foreground">{passage.title}</CardTitle>
                <CardDescription className="text-gold">{passage.reference}</CardDescription>
              </div>
              <span className="px-3 py-1 rounded-full bg-navy/10 text-navy dark:bg-gold/20 dark:text-gold text-xs font-medium">
                {passage.theme}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 font-body leading-relaxed">
              "{passage.content}"
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// Meditation Section
const MeditationSection = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <Sparkles className="w-8 h-8 text-gold" />
      <h2 className="text-3xl font-display text-foreground">Meditações</h2>
    </div>
    <div className="grid gap-6">
      {meditations.map((meditation, index) => (
        <Card key={meditation.id} variant="elevated" className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-foreground">{meditation.title}</CardTitle>
                <CardDescription>{meditation.description}</CardDescription>
              </div>
              <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium">
                <Clock className="w-3 h-3" />
                {meditation.duration}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              {meditation.steps.map((step, stepIndex) => (
                <li key={stepIndex} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-dark text-xs font-bold flex-shrink-0">
                    {stepIndex + 1}
                  </span>
                  <span className="text-foreground/80 font-body">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

// About Section
const AboutSection = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <Cross className="w-8 h-8 text-gold" />
      <h2 className="text-3xl font-display text-foreground">Sobre São Miguel Arcanjo</h2>
    </div>

    <Card variant="elevated" className="overflow-hidden">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={saintMichael} 
            alt="São Miguel Arcanjo"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="font-display text-2xl text-gold mb-2">{saintMichaelInfo.name}</h3>
          <p className="text-gold/70 text-sm mb-4">{saintMichaelInfo.title}</p>
          <p className="text-foreground/80 font-body leading-relaxed mb-4">
            {saintMichaelInfo.description}
          </p>
          <p className="text-foreground/80 font-body leading-relaxed">
            {saintMichaelInfo.history}
          </p>
        </div>
      </div>
    </Card>

    <div className="grid md:grid-cols-2 gap-4">
      <Card variant="sacred">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Star className="w-5 h-5 text-gold" />
            Festa Litúrgica
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-display text-gold">{saintMichaelInfo.feast}</p>
        </CardContent>
      </Card>

      <Card variant="sacred">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            Patrono de
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {saintMichaelInfo.patronOf.map((item, index) => (
              <span key={index} className="px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">
                {item}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    <Card variant="sacred">
      <CardHeader>
        <CardTitle className="text-foreground">Símbolos de São Miguel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {saintMichaelInfo.symbols.map((symbol, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-gold/10 border border-gold/20">
              <p className="font-body text-foreground/80">{symbol}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

export default Dashboard;
