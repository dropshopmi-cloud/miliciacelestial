import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProgressButtons } from '@/components/ProgressButtons';
import {
  ArrowLeft, Heart, BookOpen, Crown, Sparkles, ChevronRight, Check, Star, Flower2, BookHeart, ScrollText, Sun
} from 'lucide-react';
import {
  mariaCaminhaComigo, titulosMarianos, historiaDeNossaSenhora,
  aparicoes, oracoesMariana, consagracao, virtudesMarianas
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
    { id: 'jornada', label: '🌹 Maria Caminha Comigo', desc: 'Jornada de 7 dias com Nossa Senhora', icon: Flower2 },
    { id: 'titulos', label: '👑 Títulos Marianos', desc: 'Aparecida, Fátima e mais', icon: Crown },
    { id: 'historia', label: '📖 História de Nossa Senhora', desc: 'Quem foi Maria e sua importância', icon: BookOpen },
    { id: 'aparicoes', label: '✨ Principais Aparições', desc: 'Fátima, Aparecida e Lourdes', icon: Sparkles },
    { id: 'oracoes', label: '📿 Orações Marianas', desc: 'Ave Maria, Salve Rainha e mais', icon: Heart },
    { id: 'consagracao', label: '👑 Consagração a Nossa Senhora', desc: 'Preparação e ato de consagração', icon: Star },
    { id: 'virtudes', label: '💙 Aprendendo com Maria', desc: 'Virtudes marianas para sua vida', icon: BookHeart },
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

  return (
    <div className="space-y-6">
      <BackButton onClick={handleBack} />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gold/10">
          <Flower2 className="w-6 h-6 text-gold" />
        </div>
        <div>
          <h2 className="text-2xl font-display text-foreground">Central Mariana</h2>
          <p className="text-muted-foreground font-body text-sm">Uma experiência mariana completa</p>
        </div>
      </div>

      <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
        {categories.map((cat) => (
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
    <h2 className="text-2xl font-display text-foreground">👑 Títulos Marianos</h2>
    <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {titulosMarianos.map((t) => (
        <motion.div key={t.id} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...t, type: 'titulo' })}>
            <CardContent className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{t.title}</h3>
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

const OracoesSection = ({ goBack, onSelect, isFavorite, toggleFavorite }: any) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground">📿 Orações Marianas</h2>
    <motion.div className="grid gap-3" variants={staggerContainer} initial="initial" animate="animate">
      {oracoesMariana.map((o) => {
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

const ConsagracaoSection = ({ goBack, onSelect }: any) => {
  const [prepProgress, setPrepProgress] = useState<number[]>(() => {
    const saved = localStorage.getItem('consagracaoProgress');
    return saved ? JSON.parse(saved) : [];
  });

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
        {consagracao.preparacao.map((day) => (
          <motion.div key={day.day} variants={fadeInUp}>
            <Card className={`transition-all ${prepProgress.includes(day.day) ? 'border-green-500/50 bg-green-500/5' : 'hover:border-gold/40'}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 cursor-pointer" onClick={() => onSelect({ ...day, type: 'consagracao-prep' })}>
                    <div className="flex items-center gap-2">
                      <span className="text-gold font-display text-sm">Dia {day.day}</span>
                      {prepProgress.includes(day.day) && <span className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">Completo</span>}
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
        ))}
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

const VirtudesSection = ({ goBack, onSelect }: any) => (
  <div className="space-y-6">
    <BackButton onClick={goBack} />
    <h2 className="text-2xl font-display text-foreground">💙 Aprendendo com Maria – Virtudes</h2>
    <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer} initial="initial" animate="animate">
      {virtudesMarianas.map((v) => (
        <motion.div key={v.id} variants={fadeInUp}>
          <Card className="cursor-pointer hover:border-gold/40 transition-all group" onClick={() => onSelect({ ...v, type: 'virtude' })}>
            <CardContent className="p-6">
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-gold transition-colors">{v.title}</h3>
              <p className="text-muted-foreground text-sm font-body line-clamp-2">{v.explanation.substring(0, 120)}...</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

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
          {type === 'jornada' && (
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
          )}
          {type === 'titulo' && (
            <>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Breve História</h4>
                <p className="text-foreground/90 font-body leading-relaxed">{item.history}</p>
              </div>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Mensagem Principal</h4>
                <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.message}</p>
              </div>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
                <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
              </div>
            </>
          )}
          {type === 'aparicao' && (
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
          )}
          {type === 'oracao' && (
            <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">{item.content}</div>
          )}
          {type === 'consagracao-prep' && (
            <div className="text-foreground/90 font-body text-base leading-relaxed whitespace-pre-line">{item.content}</div>
          )}
          {type === 'virtude' && (
            <>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Explicação</h4>
                <p className="text-foreground/90 font-body leading-relaxed">{item.explanation}</p>
              </div>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Aplicação Prática</h4>
                <p className="text-foreground/85 font-body leading-relaxed bg-muted/30 p-5 rounded-xl">{item.application}</p>
              </div>
              <div>
                <h4 className="font-display text-gold mb-3 text-lg">Oração</h4>
                <p className="text-foreground/80 font-body italic bg-gold/5 p-5 rounded-xl border border-gold/20">{item.prayer}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CentralMariana;
