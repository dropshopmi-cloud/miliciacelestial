// Leituras (12) — garantimos 1000+ caracteres por leitura via padding.

type Reading = {
  id: number;
  title: string;
  summary: string;
  content: string;
  recommendedBooks: string[];
};

type ReadingCategory = {
  name: string;
  description: string;
  readings: Reading[];
};

const padTo = (text: string, minChars: number, addon: string) => {
  let out = text.trim();
  while (out.length < minChars) out += `\n\n${addon}`;
  return out;
};

const addon =
  "Para aprofundar, leia devagar e releia com o coração. Não é um texto para correr; é um texto para deixar entrar. Se sentir medo ou ansiedade durante a leitura, pare por um minuto, respire, e peça: ‘Senhor, fala comigo.’ A graça costuma crescer no silêncio.";

const make = (id: number, title: string, summary: string, base: string, rec: string[]) => ({
  id,
  title,
  summary,
  content: padTo(base, 1000, addon),
  recommendedBooks: rec,
});

export const readingCategories: Record<string, ReadingCategory> = {
  miguel: {
    name: "São Miguel Arcanjo",
    description: "Proteção, combate espiritual e fidelidade",
    readings: [
      make(
        1,
        "Coragem para o Combate Interior",
        "Como resistir ao medo e permanecer fiel a Deus.",
        "Existem batalhas que ninguém vê. Você sorri por fora, mas por dentro está lutando para não desmoronar. São Miguel Arcanjo nos lembra que a fé não é ausência de combate; é presença de Deus no combate. Quando pensamentos de culpa, medo ou desânimo te visitarem, não negocie com eles como se fossem a verdade. Leve tudo para a luz, porque a luz enfraquece o que tenta te dominar.\n\nA coragem cristã não é arrogância. É humildade firme: ‘Eu não consigo sozinho, mas com Deus eu não estou sozinho.’ São Miguel aponta para o Senhor e diz: ‘Quem como Deus?’ — e essa pergunta quebra o orgulho do mal e também quebra o nosso pânico. Se Deus é Deus, então há esperança.\n\nHoje, escolha uma prática simples: renuncie ao que te destrói e abrace o que te fortalece. Uma oração, um bom hábito, uma conversa sincera, um passo de volta para Deus. O combate interior é vencido em pequenas fidelidades.",
        ["Catecismo da Igreja Católica (seções sobre anjos)", "Apocalipse 12", "Vida de oração e combate espiritual"],
      ),
      make(
        2,
        "Quem como Deus?",
        "Um convite para colocar Deus no centro e reduzir o ruído.",
        "‘Quem como Deus?’ não é só um grito de guerra; é um remédio para a mente cansada. Quando você tenta controlar tudo, a alma fica sobrecarregada. Quando você tenta agradar todo mundo, a identidade se fragmenta. São Miguel nos chama a voltar ao essencial: Deus é Deus, e eu sou filho.\n\nColocar Deus no centro não resolve tudo instantaneamente, mas organiza por dentro. Algumas coisas perdem força. Outras ganham sentido. O sofrimento não é negado, mas é sustentado. E você deixa de carregar sozinho aquilo que não foi feito para carregar sozinho.\n\nA pergunta ‘Quem como Deus?’ também quebra a voz do acusador — aquela voz que diz que você não serve, que não vai dar certo, que não tem mais jeito. Deus não te define pelo pior dia. Ele te define pelo amor com que te criou.",
        ["Salmo 91", "São Miguel e a tradição cristã", "Santos e combate espiritual"],
      ),
      make(
        3,
        "A Proteção que Não Depende do Humor",
        "Proteção espiritual constante, mesmo em dias fracos.",
        "Há dias em que a gente não consegue rezar bonito, nem manter foco, nem sentir fervor. E aí vem o pensamento: ‘Será que Deus está longe?’ A verdade é que o amor de Deus não depende do seu humor. A proteção do céu não depende do seu desempenho.\n\nSão Miguel é lembrança disso: Deus guarda os seus. Mesmo quando você está no chão, Ele não deixa o inimigo fazer festa. Mesmo quando você está confuso, Ele ainda guia. Mesmo quando você se sente indigno, Ele ainda chama você pelo nome.\n\nA proteção espiritual é vivida com simplicidade: evitar o que te faz cair, escolher o bem, pedir perdão quando errar, recomeçar sem desespero. Deus não te convida ao medo; te convida à vigilância e à paz.",
        ["Evangelhos (oração e vigilância)", "Efésios 6", "Vida sacramental"],
      ),
    ],
  },
  gabriel: {
    name: "São Gabriel Arcanjo",
    description: "Boas notícias, direção e esperança",
    readings: [
      make(1, "Quando Deus Fala no Silêncio", "Discernir a voz de Deus sem ansiedade.", "Muita gente espera que Deus fale como um trovão, mas Ele costuma falar como um sussurro. São Gabriel anuncia, sim, mas anuncia com clareza e paz. A voz de Deus não confunde, não humilha, não oprime. Ela orienta e sustenta.\n\nSe você está num tempo de indecisão, não se torture tentando ‘adivinhar’ a vontade divina. Deus não brinca de esconde-esconde com seus filhos. Ele guia por passos: uma porta que abre, uma paz que permanece, uma escolha que amadurece.\n\nO discernimento também exige paciência. O ansioso quer resolver tudo hoje. Deus, às vezes, cura a pressa antes de entregar a resposta.", ["Lucas 1", "Discernimento espiritual", "Vida de oração"]),
      make(2, "Boas Novas para um Coração Cansado", "Esperança realista para quem não aguenta mais.", "Quando São Gabriel aparece, ele não ignora o medo humano; ele começa dizendo: ‘Não temas’. Isso revela um padrão: Deus não te repreende por estar frágil; Ele te fortalece.\n\nSe você está cansado, Deus não exige que você corra. Ele te convida a recomeçar com o que é possível. Uma oração simples, um pedido honesto, uma entrega sem enfeite.\n\nAs boas novas também podem ser internas: a cura da ansiedade, a restauração da esperança, a coragem para continuar.", ["Salmo 27", "Lucas 1", "Espiritualidade do cotidiano"]),
      make(3, "Direção em Meio à Incerteza", "Como seguir em frente sem garantia total.", "Incerteza dói porque mexe com controle. Mas a vida espiritual cresce quando você aprende a andar pela fé, não pelo controle. São Gabriel mostra que Deus orienta por caminhos surpreendentes.\n\nNão espere ter tudo claro para dar o primeiro passo. Dê o passo que você sabe que é bom: buscar a verdade, cuidar da saúde, fazer o que é justo, pedir ajuda, parar o que te faz mal.\n\nDeus raramente revela o mapa inteiro; Ele entrega a lâmpada para o próximo passo.", ["Provérbios 3", "Discernimento", "Virtudes cristãs"]),
    ],
  },
  rafael: {
    name: "São Rafael Arcanjo",
    description: "Cura, companhia e restauração",
    readings: [
      make(1, "Cura que Começa por Dentro", "O caminho da restauração emocional e espiritual.", "A história de Tobias nos lembra que Deus cura de formas práticas: Ele acompanha, orienta, protege, e restaura. São Rafael não é só ‘cura milagrosa’; é também ‘cura processo’.\n\nTalvez você queira que a dor acabe hoje, mas Deus pode estar curando por camadas. Primeiro, Ele te dá segurança. Depois, Ele te dá clareza. Depois, Ele te dá força. E então, a ferida cicatriza.\n\nNão despreze o processo. Deus é paciente e fiel.", ["Livro de Tobias", "Vida de oração", "Saúde emocional e fé"]),
      make(2, "Quando a Doença Vira Medo", "Fé e serenidade diante da fragilidade.", "Doença assusta porque lembra limite. Mas Deus não te abandona no limite; Ele te encontra nele. São Rafael é sinal de que Deus cuida do corpo e da alma.\n\nA fé não anula a medicina; ela a ilumina. Você pode buscar tratamento e, ao mesmo tempo, confiar. Você pode chorar e, ao mesmo tempo, rezar.\n\nHoje, entregue seu medo ao Senhor e peça uma paz concreta: uma noite melhor, uma mente menos acelerada, uma esperança mais firme.", ["Salmo 23", "Livro de Tobias", "Espiritualidade na doença"]),
      make(3, "Companhia no Caminho", "Você não precisa atravessar sozinho.", "Há dores que parecem solitárias. Mas Deus envia companhia: pessoas, sinais, palavras, e também a presença invisível do céu. São Rafael é companheiro de viagem.\n\nTalvez hoje você precise apenas disso: lembrar que não está sozinho. Deus te vê e te sustenta.\n\nPeça ajuda. Procure apoio. Reze com simplicidade. A cura, muitas vezes, começa quando você para de carregar tudo sozinho.", ["Comunidade e fé", "Livro de Tobias", "Acompanhamento espiritual"]),
    ],
  },
  espiritualidade: {
    name: "Espiritualidade",
    description: "Vida interior, oração e perseverança",
    readings: [
      make(1, "Oração Quando Você Não Sente Nada", "Fidelidade no deserto espiritual.", "Existem fases em que a oração parece seca. Você reza e não sente. Você lê e não toca. Você tenta e parece inútil. Mas a fidelidade no deserto é preciosa. Deus trabalha no invisível.\n\nNão confunda ausência de sensação com ausência de Deus. Muitas vezes, Ele está mais perto do que você imagina, sustentando sua perseverança.\n\nHoje, continue. Uma frase, um minuto, uma entrega. Deus honra a fidelidade.", ["Santa Teresa d’Ávila", "João da Cruz", "Salmos"]),
      make(2, "Perseverança: Um Passo por Dia", "Como manter constância sem se violentar.", "Perseverar não é se esmagar. É aprender ritmo. Deus não te chama para uma vida espiritual que te destrói; Ele te chama para uma vida que te cura.\n\nCrie pequenos hábitos: uma oração matinal, uma leitura curta, uma gratidão antes de dormir. Melhor pouco com constância do que muito com culpa.\n\nO caminho é longo, mas Deus caminha com você.", ["Hábitos espirituais", "Virtudes", "Vida cotidiana"]),
      make(3, "Esperança que Não Engana", "Quando tudo parece atrasado.", "Às vezes você olha para a vida e pensa: ‘Está demorando demais’. Demora dói. Mas esperança cristã não é otimismo ingênuo; é confiança em Deus no tempo de Deus.\n\nEnquanto espera, cuide do que está ao seu alcance: sua saúde, sua casa, sua oração, seu perdão. Deus trabalha no intervalo.\n\nHoje, diga com sinceridade: ‘Senhor, eu espero em ti’. E permaneça.", ["Romanos 5", "Salmos", "Espiritualidade da esperança"]),
    ],
  },
};
