import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowLeft, Heart, BookOpen, Crown, Sparkles, ChevronRight, Check, Star, Flower2, BookHeart, Sun, BookMarked, ScrollText
} from 'lucide-react';
import {
  mariaCaminhaComigo, titulosMarianos, historiaDeNossaSenhora,
  aparicoes, oracoesMariana, oracoesMarianaCategories, consagracao, virtudesMarianas
} from '@/data/marianContent';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
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

interface CentralMarianaProps {
  goBack: () => void;
  isFavorite: (type: string, id: string) => boolean;
  toggleFavorite: (type: string, id: string) => void;
}

const CentralMariana = ({ goBack, isFavorite, toggleFavorite }: CentralMarianaProps) => {
  const [subSection, setSubSection] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleBack = () => {
    if (selectedItem) {
      setSelectedItem(null);
    } else if (subSection) {
      setSubSection(null);
    } else {
      goBack();
    }
  };

  const categories = [
    { id: 'jornada', label: '🌹 Maria Caminha Comigo', desc: 'Sua jornada de 7 dias com Nossa Senhora', icon: Flower2, highlight: true },
    { id: 'consagracao', label: '👑 Consagração a Nossa Senhora', desc: 'Prepare-se para a entrega total a Maria', icon: Star },
    { id: 'virtudes', label: '💙 Aprendendo com Maria', desc: 'Aprenda a viver como Maria viveu', icon: BookHeart },
    { id: 'oracoes', label: '📿 Orações Marianas', desc: 'Biblioteca completa de orações a Maria', icon: Heart },
    { id: 'titulos', label: '👑 Títulos Marianos', desc: 'Aparecida, Fátima e mais', icon: Crown },
    { id: 'aparicoes', label: '✨ Principais Aparições', desc: 'Fátima, Aparecida e Lourdes', icon: Sparkles },
    { id: 'historia', label: '📖 História de Nossa Senhora', desc: 'Quem foi Maria e sua importância', icon: BookOpen },
  ];

  if (selectedItem) {
    return <DetailContent item={selectedItem} section={subSection!} goBack={handleBack} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />;
  }

  if (subSection) {
    return (
      <SubSectionContent
        section={subSection}
        goBack={handleBack}
        onSelect={setSelectedItem}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    );
  }

  // Get jornada progress for featured card
  const jornadaProgress = (() => {
    try {
      const saved = localStorage.getItem('mariaJornadaProgress');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  })();

  return (
    <div className="space-y-6">
      <BackButton onClick={handleBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <Flower2 className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">Central Mariana</h2>
          <p className="text-muted-foreground font-body text-sm">Uma experiência mariana completa</p>
        </div>
      </div>

      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-r from-navy/90 via-navy-dark to-gold/20 p-6 text-center border border-gold/20"
      >
        <p className="text-cream font-display text-lg leading-relaxed">
          "Caminhe com Maria rumo à santidade."
        </p>
        <p className="text-gold/80 font-body text-sm mt-1">
          Descubra, aprenda e viva a espiritualidade mariana.
        </p>
      </motion.div>

      {/* Featured card: Maria Caminha Comigo */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card
          className="cursor-pointer border-gold/40 hover:border-gold/60 hover:shadow-xl transition-all duration-300 group overflow-hidden"
          onClick={() => setSubSection('jornada')}
        >
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-transparent p-1">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-display bg-gold/20 text-gold px-3 py-1 rounded-full">✨ Comece por aqui</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-gold transition-colors">
                    🌹 Maria Caminha Comigo
                  </h3>
                  <p className="text-muted-foreground text-sm font-body mb-3">Sua jornada de 7 dias com Nossa Senhora</p>
                  {jornadaProgress.length > 0 && (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs text-gold font-body">
                        <span>{jornadaProgress.length}/7 dias completos</span>
                      </div>
                      <div className="bg-muted rounded-full h-2 w-48 overflow-hidden">
                        <motion.div
                          className="bg-gradient-divine h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${(jornadaProgress.length / 7) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-3 rounded-xl bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Flower2 className="w-8 h-8 text-gold" />
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>

      {/* Other categories */}
      <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {categories.filter(c => c.id !== 'jornada').map((cat) => (
          <motion.div key={cat.id} variants={fadeInUp}>
            <Card
              className="cursor-pointer hover:border-gold/40 hover:shadow-lg transition-all duration-300 group"
              onClick={() => setSubSection(cat.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{cat.label}</h3>
                    <p className="text-muted-foreground text-sm font-body">{cat.desc}</p>
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
};

const SubSectionContent = ({ section, goBack, onSelect, isFavorite, toggleFavorite }: any) => {
  switch (section) {
    case 'jornada': return <JornadaSection goBack={goBack} onSelect={onSelect} />;
    case 'titulos': return <TitulosSection goBack={goBack} onSelect={onSelect} />;
    case 'historia': return <HistoriaSection goBack={goBack} />;
    case 'aparicoes': return <AparicoesSection goBack={goBack} onSelect={onSelect} />;
    case 'oracoes': return <OracoesSection goBack={goBack} onSelect={onSelect} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />;
    case 'consagracao': return <ConsagracaoSection goBack={goBack} onSelect={onSelect} />;
    case 'virtudes': return <VirtudesSection goBack={goBack} onSelect={onSelect} />;
    default: return null;
  }
};

const JornadaSection = ({ goBack, onSelect }: any) => {
  const [progress, setProgress] = useState<number[]>(() => {
    const saved = localStorage.getItem('mariaJornadaProgress');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleDay = (day: number) => {
    const updated = progress.includes(day) ? progress.filter(d => d !== day) : [...progress, day];
    setProgress(updated);
    localStorage.setItem('mariaJornadaProgress', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <Flower2 className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">{mariaCaminhaComigo.title}</h2>
          <p className="text-muted-foreground font-body text-sm">{progress.length}/7 dias completos</p>
        </div>
      </div>

      <div className="bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-gradient-divine h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(progress.length / 7) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
        {mariaCaminhaComigo.days.map((day) => (
          <motion.div key={day.day} variants={fadeInUp}>
            <Card className={`transition-all duration-300 ${progress.includes(day.day) ? 'border-green-500/50 bg-green-500/5' : 'hover:border-gold/40'}`}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex-1 cursor-pointer" onClick={() => onSelect({ ...day, type: 'jornada' })}>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-display text-sm">Dia {day.day}</span>
                    {progress.includes(day.day) && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Completo</span>}
                  </div>
                  <h4 className="font-display text-foreground mt-1">{day.title}</h4>
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
};

const TitulosSection = ({ goBack, onSelect }: any) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <div className="flex items-center gap-3 mb-2">
      <div className="p-3 rounded-xl bg-gold/10">
        <Crown className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h2 className="text-2xl font-display text-foreground">Títulos Marianos</h2>
        <p className="text-muted-foreground font-body text-sm">{titulosMarianos.length} títulos para conhecer e venerar</p>
      </div>
    </div>
    <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {titulosMarianos.map((t) => (
        <motion.div key={t.id} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...t, type: 'titulo' })}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="w-4 h-4 text-gold/60" />
                <h3 className="font-display text-xl text-foreground group-hover:text-gold transition-colors">{t.title}</h3>
              </div>
              <p className="text-gold text-sm font-body">{t.date}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const HistoriaSection = ({ goBack }: any) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground">📖 {historiaDeNossaSenhora.title}</h2>
    <motion.div className="space-y-4" variants={staggerContainer} initial="initial" animate="animate">
      {historiaDeNossaSenhora.sections.map((s, i) => (
        <motion.div key={i} variants={fadeInUp}>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-display text-xl text-gold mb-3">{s.subtitle}</h3>
              <p className="text-foreground/85 font-body leading-relaxed whitespace-pre-line">{s.content}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const AparicoesSection = ({ goBack, onSelect }: any) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground">✨ Principais Aparições</h2>
    <motion.div className="grid gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {aparicoes.map((a) => (
        <motion.div key={a.id} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...a, type: 'aparicao' })}>
            <CardContent className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{a.title}</h3>
              <p className="text-muted-foreground text-sm font-body line-clamp-2">{a.context.substring(0, 150)}...</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

const OracoesSection = ({ goBack, onSelect, isFavorite, toggleFavorite }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (selectedCategory) {
    const filtered = oracoesMariana.filter(o => o.category === selectedCategory);
    const catLabel = oracoesMarianaCategories.find(c => c.id === selectedCategory)?.label || '';

    return (
      <div className="space-y-6">
        <BackButton onClick={() => setSelectedCategory(null)} />
        <h2 className="text-2xl font-display text-foreground">{catLabel}</h2>
        <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
          {filtered.map((o) => {
            const itemId = `mariana-${o.id}`;
            return (
              <motion.div key={o.id} variants={fadeInUp}>
                <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...o, type: 'oracao' })}>
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-body text-foreground group-hover:text-gold transition-colors">{o.title}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleFavorite('mariana-prayer', itemId); }}
                        className={`p-2 rounded-full transition-all ${isFavorite('mariana-prayer', itemId) ? 'text-gold' : 'text-muted-foreground hover:text-gold'}`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite('mariana-prayer', itemId) ? 'fill-current' : ''}`} />
                      </button>
                      <ChevronRight className="w-5 h-5 text-gold" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">📿 Orações Marianas</h2>
      <p className="text-muted-foreground font-body text-sm">Biblioteca completa organizada por categorias</p>
      <motion.div className="grid gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {oracoesMarianaCategories.map((cat) => {
          const count = oracoesMariana.filter(o => o.category === cat.id).length;
          return (
            <motion.div key={cat.id} variants={fadeInUp}>
              <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => setSelectedCategory(cat.id)}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-lg text-foreground mb-1 group-hover:text-gold transition-colors">{cat.label}</h3>
                      <p className="text-muted-foreground text-sm font-body">{cat.desc} · {count} orações</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const ConsagracaoSection = ({ goBack, onSelect }: any) => {
  const [prepProgress, setPrepProgress] = useState<number[]>(() => {
    const saved = localStorage.getItem('consagracaoProgress');
    return saved ? JSON.parse(saved) : [];
  });

  const diaryEntries = (() => {
    try {
      const saved = localStorage.getItem('consagracaoDiary');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  })();

  const toggleDay = (day: number) => {
    const updated = prepProgress.includes(day) ? prepProgress.filter(d => d !== day) : [...prepProgress, day];
    setPrepProgress(updated);
    localStorage.setItem('consagracaoProgress', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <h2 className="text-2xl font-display text-foreground">👑 {consagracao.title}</h2>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-display text-gold text-lg mb-3">Introdução</h3>
          <p className="text-foreground/85 font-body leading-relaxed">{consagracao.intro}</p>
        </CardContent>
      </Card>

      <div className="flex items-center gap-3">
        <h3 className="font-display text-xl text-foreground">Preparação – 7 Dias</h3>
        <span className="text-gold text-sm font-body">{prepProgress.length}/7</span>
      </div>

      <div className="bg-muted rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-gradient-divine h-full rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(prepProgress.length / 7) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
        {consagracao.preparacao.map((day) => {
          const hasDiary = diaryEntries[`day-${day.day}`] && Object.values(diaryEntries[`day-${day.day}`]).some((v: any) => v && v.trim());
          return (
            <motion.div key={day.day} variants={fadeInUp}>
              <Card className={`transition-all ${prepProgress.includes(day.day) ? 'border-green-500/50 bg-green-500/5' : 'hover:border-gold/40'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 cursor-pointer" onClick={() => onSelect({ ...day, type: 'consagracao-prep' })}>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gold font-display text-sm">Dia {day.day}</span>
                        {prepProgress.includes(day.day) && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Completo</span>}
                        {hasDiary && <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">📝 Reflexão registrada</span>}
                      </div>
                      <h4 className="font-display text-foreground mt-1">{day.title}</h4>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleDay(day.day); }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${prepProgress.includes(day.day) ? 'bg-green-500 text-white' : 'bg-muted hover:bg-gold/20 border border-border'}`}
                    >
                      {prepProgress.includes(day.day) && <Check className="w-5 h-5" />}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      <Card className="border-gold/30 bg-gold/5">
        <CardContent className="p-6">
          <h3 className="font-display text-gold text-xl mb-4">Ato de Consagração</h3>
          <p className="text-foreground/85 font-body leading-relaxed italic whitespace-pre-line">{consagracao.atoConsagracao}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const VirtudesSection = ({ goBack, onSelect }: any) => {
  const practiced = (() => {
    try {
      const saved = localStorage.getItem('virtudesPraticadas');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  })();

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <div className="flex items-center gap-3 mb-2">
        <div className="p-3 rounded-xl bg-gold/10">
          <BookHeart className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">Aprendendo com Maria</h2>
          <p className="text-muted-foreground font-body text-sm">Formação espiritual · 10-15 min por dia</p>
        </div>
      </div>
      <p className="text-foreground/70 font-body text-sm">{practiced.length}/{virtudesMarianas.length} virtudes praticadas</p>

      <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {virtudesMarianas.map((v, i) => (
          <motion.div key={v.id} variants={fadeInUp}>
            <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...v, type: 'virtude' })}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gold font-display">Capítulo {i + 1}</span>
                  {practiced.includes(v.id) && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Praticado</span>}
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{v.title}</h3>
                <p className="text-muted-foreground text-sm font-body line-clamp-2">{v.explanation.substring(0, 120)}...</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// =================== DETAIL CONTENT ===================

const DetailContent = ({ item, section, goBack, isFavorite, toggleFavorite }: any) => {
  const type = item.type;

  return (
    <div className="space-y-6">
      <BackButton onClick={goBack} />
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-navy via-navy-dark to-brown/30 p-6">
          <h2 className="text-2xl font-display text-cream">{item.title}</h2>
          {item.date && <p className="text-gold/80 font-body mt-1">{item.date}</p>}
          {item.day && <p className="text-gold/80 font-body mt-1">Dia {item.day}</p>}
        </div>
        <CardContent className="p-6 space-y-6">
          {type === 'jornada' && <JornadaDetail item={item} />}
          {type === 'titulo' && <TituloDetail item={item} />}
          {type === 'aparicao' && <AparicaoDetail item={item} />}
          {type === 'oracao' && <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">{item.content}</div>}
          {type === 'consagracao-prep' && <ConsagracaoDetail item={item} />}
          {type === 'virtude' && <VirtudeDetail item={item} />}
        </CardContent>
      </Card>
    </div>
  );
};

const JornadaDetail = ({ item }: { item: any }) => (
  <>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2"><Sun className="w-5 h-5" />Reflexão</h4>
      <p className="text-foreground/90 font-body leading-relaxed whitespace-pre-line bg-muted/30 p-6 rounded-xl border border-border/50">{item.reflection}</p>
    </div>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
      <p className="text-foreground/80 font-body italic whitespace-pre-line bg-gold/5 p-6 rounded-xl border border-gold/20">{item.prayer}</p>
    </div>
  </>
);

const TituloDetail = ({ item }: { item: any }) => (
  <>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Breve História</h4>
      <p className="text-foreground/90 font-body leading-relaxed whitespace-pre-line">{item.history}</p>
    </div>
    {item.significance && (
      <div>
        <h4 className="font-display text-gold mb-3 text-lg">Significado Espiritual</h4>
        <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.significance}</p>
      </div>
    )}
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Mensagem Principal</h4>
      <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.message}</p>
    </div>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
      <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
    </div>
  </>
);

const AparicaoDetail = ({ item }: { item: any }) => (
  <>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Contexto Histórico</h4>
      <p className="text-foreground/90 font-body leading-relaxed">{item.context}</p>
    </div>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Mensagem Central</h4>
      <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.message}</p>
    </div>
    <div>
      <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
      <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
    </div>
  </>
);

const ConsagracaoDetail = ({ item }: { item: any }) => {
  const [diary, setDiary] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('consagracaoDiary');
      const all = saved ? JSON.parse(saved) : {};
      return all[`day-${item.day}`] || {};
    } catch { return {}; }
  });
  const [saved, setSaved] = useState(false);

  const saveDiary = () => {
    const allDiary = (() => {
      try {
        const s = localStorage.getItem('consagracaoDiary');
        return s ? JSON.parse(s) : {};
      } catch { return {}; }
    })();
    allDiary[`day-${item.day}`] = diary;
    localStorage.setItem('consagracaoDiary', JSON.stringify(allDiary));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <>
      {/* Palavra Bíblica */}
      {item.biblicalWord && (
        <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 text-center">
          <BookMarked className="w-5 h-5 text-gold mx-auto mb-2" />
          <p className="text-foreground/90 font-body italic text-lg leading-relaxed">"{item.biblicalWord.text}"</p>
          <p className="text-gold font-display text-sm mt-2">{item.biblicalWord.reference}</p>
        </div>
      )}

      {/* Meditação */}
      {item.meditation && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg flex items-center gap-2"><ScrollText className="w-5 h-5" />Meditação Profunda</h4>
          <p className="text-foreground/90 font-body leading-relaxed whitespace-pre-line bg-muted/30 p-6 rounded-xl border border-border/50">{item.meditation}</p>
        </div>
      )}

      {/* Exame Interior */}
      {item.exameInterior && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg">Exame Interior</h4>
          <div className="space-y-3">
            {item.exameInterior.map((q: string, i: number) => (
              <div key={i} className="bg-muted/20 p-4 rounded-xl border border-border/30">
                <p className="text-foreground/85 font-body text-sm mb-2">{q}</p>
                <textarea
                  className="w-full bg-background border border-border rounded-lg p-3 text-sm font-body text-foreground resize-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50 outline-none"
                  rows={2}
                  placeholder="Escreva sua reflexão..."
                  value={diary[`q-${i}`] || ''}
                  onChange={(e) => setDiary(prev => ({ ...prev, [`q-${i}`]: e.target.value }))}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={saveDiary}
              className="px-4 py-2 bg-gold text-navy font-display text-sm rounded-lg hover:bg-gold-light transition-colors"
            >
              Salvar Reflexão
            </button>
            {saved && <span className="text-green-500 text-sm font-body">✅ Reflexão salva com sucesso!</span>}
          </div>
          <p className="text-muted-foreground text-xs font-body mt-2">Suas respostas ficam salvas apenas para você.</p>
        </div>
      )}

      {/* Ato Concreto */}
      {item.atoConcreto && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg">🎯 Ato Concreto do Dia</h4>
          <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.atoConcreto}</p>
        </div>
      )}

      {/* Oração */}
      <div>
        <h4 className="font-display text-gold mb-3 text-lg">Oração Final</h4>
        <p className="text-foreground/80 font-body italic whitespace-pre-line bg-gold/5 p-6 rounded-xl border border-gold/20">{item.prayer}</p>
      </div>

      {/* Fallback for old content field */}
      {!item.meditation && item.content && (
        <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">{item.content}</div>
      )}
    </>
  );
};

const VirtudeDetail = ({ item }: { item: any }) => {
  const [practiced, setPracticed] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('virtudesPraticadas');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const togglePracticed = () => {
    const updated = practiced.includes(item.id) ? practiced.filter((id: string) => id !== item.id) : [...practiced, item.id];
    setPracticed(updated);
    localStorage.setItem('virtudesPraticadas', JSON.stringify(updated));
  };

  const isPracticed = practiced.includes(item.id);

  return (
    <>
      {/* Palavra Bíblica */}
      {item.biblicalWord && (
        <div className="bg-gold/5 border border-gold/20 rounded-xl p-5 text-center">
          <BookMarked className="w-5 h-5 text-gold mx-auto mb-2" />
          <p className="text-foreground/90 font-body italic text-lg leading-relaxed">"{item.biblicalWord.text}"</p>
          <p className="text-gold font-display text-sm mt-2">{item.biblicalWord.reference}</p>
        </div>
      )}

      {/* Contexto Espiritual */}
      {item.contextualEspiritual && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg">Contexto Espiritual</h4>
          <p className="text-foreground/90 font-body leading-relaxed">{item.contextualEspiritual}</p>
        </div>
      )}

      {/* Formação Profunda */}
      {item.formacaoProfunda && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg">Formação Profunda</h4>
          <p className="text-foreground/90 font-body leading-relaxed bg-muted/30 p-6 rounded-xl border border-border/50">{item.formacaoProfunda}</p>
        </div>
      )}

      {/* Explicação */}
      <div>
        <h4 className="font-display text-gold mb-3 text-lg">Explicação</h4>
        <p className="text-foreground/90 font-body leading-relaxed">{item.explanation}</p>
      </div>

      {/* Exame de Consciência */}
      {item.exameDe && (
        <div>
          <h4 className="font-display text-gold mb-3 text-lg">Exame de Consciência</h4>
          <ul className="space-y-2">
            {item.exameDe.map((q: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-foreground/85 font-body text-sm">
                <span className="text-gold mt-0.5">•</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Aplicação Prática */}
      <div>
        <h4 className="font-display text-gold mb-3 text-lg">Aplicação Prática</h4>
        <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl whitespace-pre-line">{item.application}</p>
      </div>

      {/* Oração */}
      <div>
        <h4 className="font-display text-gold mb-3 text-lg">Oração Final</h4>
        <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
      </div>

      {/* Marcar como praticado */}
      <button
        onClick={togglePracticed}
        className={`w-full py-3 rounded-xl font-display text-sm transition-all ${isPracticed ? 'bg-green-500 text-white' : 'bg-gold/10 text-gold hover:bg-gold/20 border border-gold/30'}`}
      >
        {isPracticed ? '✅ Marcado como praticado' : 'Marcar como praticado'}
      </button>
    </>
  );
};

export default CentralMariana;
