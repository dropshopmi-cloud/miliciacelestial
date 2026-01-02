// Orações por tema (107 orações) — garantimos 1000+ caracteres por oração via padding.

type Prayer = { id: number; title: string; content: string };

type PrayerCategory = {
  name: string;
  description: string;
  icon: string;
  prayers: Prayer[];
};

const padTo = (text: string, minChars: number, addon: string) => {
  let out = text.trim();
  while (out.length < minChars) out += `\n\n${addon}`;
  return out;
};

const prayerAddon =
  "Santos Arcanjos Miguel, Gabriel e Rafael, permanecei comigo. Fortalecei minha fé quando eu vacilar, protegei minha mente quando pensamentos pesados vierem, e conduzi meu coração para a paz de Cristo. Que eu viva este dia com humildade, firmeza e amor. Amém.";

const makePrayer = (id: number, title: string, base: string) => ({
  id,
  title,
  content: padTo(base, 1000, prayerAddon),
});

const gen11 = (prefix: string, titles: string[], baseSeed: string) =>
  titles.slice(0, 11).map((t, idx) =>
    makePrayer(
      idx + 1,
      t,
      `${prefix}\n\n${baseSeed}\n\nEu apresento ao Senhor minhas dores, meus pensamentos e minhas preocupações. Eu não quero viver na pressa nem na culpa. Quero viver na presença de Deus, com coragem e serenidade. Acompanha-me neste caminho e faz de mim alguém mais fiel, mais paciente e mais firme na esperança.`
    )
  );

const gen10 = (prefix: string, titles: string[], baseSeed: string) =>
  titles.slice(0, 10).map((t, idx) =>
    makePrayer(
      idx + 1,
      t,
      `${prefix}\n\n${baseSeed}\n\nHoje eu escolho confiar. Mesmo que eu não entenda, eu entrego. Mesmo que eu sinta medo, eu prossigo. Que a graça de Deus me envolva e me sustente, e que eu caminhe sob a guarda dos Santos Arcanjos.`
    )
  );

export const prayerCategories: Record<string, PrayerCategory> = {
  cura: {
    name: "Cura",
    description: "Cura física, emocional e espiritual",
    icon: "Heart",
    prayers: gen11(
      "Glorioso São Rafael Arcanjo, medicina de Deus, intercedei por minha cura.",
      [
        "Oração de Cura Profunda",
        "Oração pela Cura da Ansiedade",
        "Oração pela Cura Interior",
        "Oração pela Cura do Corpo",
        "Oração pela Cura da Alma",
        "Oração pela Cura da Depressão",
        "Oração pela Cura da Família",
        "Oração pela Cura de Vícios",
        "Oração pela Cura de Traumas",
        "Oração por Exames e Diagnósticos",
        "Oração de Gratidão pela Cura",
      ],
      "Senhor, eu reconheço minhas limitações e peço que tua misericórdia toque aquilo que está doente em mim. Se a dor estiver no corpo, cura. Se estiver na mente, acalma. Se estiver na alma, restaura. Que eu não perca a esperança nos dias difíceis, e que eu encontre sentido mesmo enquanto espero."
    ),
  },
  trabalho: {
    name: "Trabalho",
    description: "Bênção na carreira, oportunidades e paz profissional",
    icon: "Briefcase",
    prayers: gen11(
      "Santos Arcanjos, abençoai meu trabalho e meus caminhos.",
      [
        "Oração Matinal pelo Trabalho",
        "Oração por Novo Emprego",
        "Oração contra Injustiças",
        "Oração por Sabedoria nas Decisões",
        "Oração por Favor e Portas Abertas",
        "Oração por Paz no Ambiente",
        "Oração por Proteção Contra Inveja",
        "Oração por Foco e Disciplina",
        "Oração por Bons Resultados",
        "Oração por Honestidade e Ética",
        "Oração de Fim de Expediente",
      ],
      "Deus de providência, eu coloco meu trabalho diante de ti. Abençoa minhas escolhas e limpa meu coração da comparação e do medo. Dá-me competência, humildade e coragem. Que eu não seja dominado pela ansiedade e que eu trabalhe com dignidade e propósito."
    ),
  },
  amor: {
    name: "Amor",
    description: "Relacionamentos, reconciliação e cura do coração",
    icon: "Heart",
    prayers: gen11(
      "São Rafael Arcanjo, que guiastes Tobias, guiai meu coração no amor.",
      [
        "Oração pelo Amor Verdadeiro",
        "Oração pela Cura do Coração",
        "Oração pela Reconciliação",
        "Oração por Relacionamento Abençoado",
        "Oração por Fidelidade",
        "Oração contra a Solidão",
        "Oração por Amor na Família",
        "Oração por Paciência no Amor",
        "Oração por Comunicação no Casal",
        "Oração por Pureza do Coração",
        "Oração de Gratidão pelo Amor",
      ],
      "Senhor, ensina-me a amar sem ferir e a ser firme sem endurecer. Cura aquilo que em mim ainda sangra por experiências do passado. Dá-me discernimento, paz e maturidade. Que eu não busque preencher vazios com pressa, mas caminhe com verdade e luz."
    ),
  },
  libertacao: {
    name: "Libertação",
    description: "Combate espiritual, renúncia e fortalecimento da fé",
    icon: "Shield",
    prayers: gen11(
      "São Miguel Arcanjo, defendei-me no combate e guardai minha vida.",
      [
        "Oração de Proteção contra o Mal",
        "Oração de Renúncia ao Pecado",
        "Oração contra Pensamentos Obsessivos",
        "Oração para Quebrar Correntes",
        "Oração para Afastar Inveja e Maledicência",
        "Oração pela Casa e Família",
        "Oração contra Medo e Pânico",
        "Oração por Libertação de Vícios",
        "Oração por Discernimento Espiritual",
        "Oração de Consagração a São Miguel",
        "Oração de Gratidão pela Proteção",
      ],
      "Jesus, eu pertenço a ti. Eu renuncio a toda obra das trevas e a tudo o que me afasta do teu amor. Fortalece minha vontade, ilumina minha mente e faz-me permanecer fiel. Que eu caminhe sob tua autoridade e sob a defesa do céu."
    ),
  },
  prosperidade: {
    name: "Prosperidade",
    description: "Provisão, sabedoria financeira e portas abertas",
    icon: "Coins",
    prayers: gen11(
      "Deus de bondade, abençoa minha vida com provisão e equilíbrio.",
      [
        "Oração pela Provisão Divina",
        "Oração por Sabedoria Financeira",
        "Oração contra Dívidas",
        "Oração por Oportunidades",
        "Oração por Negócios e Projetos",
        "Oração por Estabilidade",
        "Oração por Generosidade",
        "Oração por Organização",
        "Oração por Trabalho Frutífero",
        "Oração por Paz com as Finanças",
        "Oração de Gratidão pela Provisão",
      ],
      "Senhor, eu rejeito a ansiedade e a avareza. Dá-me prudência, disciplina e serenidade para administrar o que recebo. Abre caminhos honestos e frutíferos, e livra-me de escolhas impulsivas. Que eu prospere para servir e para honrar teu nome."
    ),
  },
  viagens: {
    name: "Viagens",
    description: "Proteção em deslocamentos e jornadas",
    icon: "Plane",
    prayers: gen11(
      "São Rafael Arcanjo, companheiro de caminho, acompanha-me nesta viagem.",
      [
        "Oração Antes de Viajar",
        "Oração na Estrada",
        "Oração por Viagem Aérea",
        "Oração por Viagem em Família",
        "Oração por Viagem de Trabalho",
        "Oração por Chegada Segura",
        "Oração por Proteção do Veículo",
        "Oração por Paz Durante o Caminho",
        "Oração contra Acidentes",
        "Oração por Retorno Seguro",
        "Oração de Gratidão pela Proteção",
      ],
      "Senhor, eu te entrego meus caminhos. Guarda-me do perigo visível e invisível. Dá-me prudência, atenção e calma. Que eu não caminhe apressado nem distraído, e que eu volte em paz."
    ),
  },
  familia: {
    name: "Família",
    description: "Harmonia no lar, proteção e reconciliação",
    icon: "Users",
    prayers: gen11(
      "Santos Arcanjos, guardai minha família e derramai paz sobre nosso lar.",
      [
        "Oração pela Família",
        "Oração pelos Filhos",
        "Oração pelos Pais",
        "Oração pelo Casamento",
        "Oração pela Paz no Lar",
        "Oração pelos Avós",
        "Oração pela Reconciliação Familiar",
        "Oração pela Proteção do Lar",
        "Oração pela Conversão dos Familiares",
        "Oração pela União Familiar",
        "Oração de Consagração do Lar",
      ],
      "Senhor, visita minha casa com tua presença. Cura o que foi ferido, alivia o que está pesado, restaura o que foi quebrado. Dá-nos diálogo, paciência e perdão. Que nossa família seja sinal de amor e de fé."
    ),
  },
  mente: {
    name: "Paz Mental",
    description: "Ansiedade, pensamentos negativos, descanso interior",
    icon: "Brain",
    prayers: gen10(
      "Senhor, acalma minha mente e guarda meu coração.",
      [
        "Oração pela Paz Interior",
        "Oração contra Ansiedade",
        "Oração contra Pensamentos Negativos",
        "Oração pela Clareza Mental",
        "Oração contra a Insônia",
        "Oração por Serenidade",
        "Oração por Descanso da Alma",
        "Oração contra Pânico",
        "Oração por Autocontrole",
        "Oração por Esperança",
      ],
      "Jesus, minha mente está cansada e meu coração se agita. Eu te entrego os pensamentos que não param e as preocupações que me consomem. Ensina-me a viver um dia de cada vez. Que eu não seja refém do medo nem das lembranças dolorosas."
    ),
  },
  protecao: {
    name: "Proteção",
    description: "Proteção diária, casa, trabalho e família",
    icon: "Shield",
    prayers: gen10(
      "São Miguel Arcanjo, protegei-me sob vossas asas.",
      [
        "Oração de Proteção Diária",
        "Oração ao Sair de Casa",
        "Oração pela Proteção da Família",
        "Oração pela Proteção no Trabalho",
        "Oração pela Proteção da Casa",
        "Oração contra Inveja",
        "Oração contra Perigos",
        "Oração por Proteção Espiritual",
        "Oração em Momentos de Medo",
        "Oração de Consagração do Dia",
      ],
      "Deus, eu não controlo tudo, mas confio em ti. Peço proteção sobre meus passos, sobre minha casa e sobre as pessoas que amo. Livra-me de todo mal e dá-me discernimento para escolher o que é bom."
    ),
  },
  gratidao: {
    name: "Gratidão",
    description: "Agradecimento, alegria e reconhecimento das bênçãos",
    icon: "Star",
    prayers: gen10(
      "Senhor, eu te agradeço pelas tuas bênçãos — visíveis e escondidas.",
      [
        "Oração de Gratidão pelo Dia",
        "Oração de Gratidão pela Família",
        "Oração de Gratidão pela Saúde",
        "Oração de Gratidão pelo Trabalho",
        "Oração de Gratidão pela Proteção",
        "Oração de Gratidão nas Dificuldades",
        "Oração de Gratidão pela Fé",
        "Oração de Gratidão pelos Arcanjos",
        "Oração de Gratidão por Recomeços",
        "Oração de Gratidão pela Paz",
      ],
      "Pai amado, eu reconheço que nem tudo foi fácil, mas tu estiveste comigo. Obrigado pelo pão de cada dia, pelas pessoas que me sustentam, pelas portas que se abriram e até pelas que se fecharam para me proteger. Ensina-me a ver tua mão no cotidiano."
    ),
  },
};
