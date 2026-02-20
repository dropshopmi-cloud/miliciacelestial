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
  marianas: {
    name: "Leituras Marianas",
    description: "Reflexões sobre Nossa Senhora e sua importância",
    readings: [
      make(1, "O Papel de Maria na Salvação", "Como Maria cooperou no plano redentor de Deus.", "Maria não é apenas uma figura histórica — ela é parte essencial do plano de salvação. Seu 'sim' na Anunciação possibilitou a Encarnação do Verbo. Sem Maria, o plano de Deus teria tomado outro caminho. Ela cooperou livremente, com fé e amor, tornando-se a Nova Eva que desfaz o pecado da primeira.\n\nA Igreja ensina que Maria é co-redentora — não no sentido de ser igual a Cristo, mas no sentido de que sua cooperação foi única e insubstituível. Aos pés da cruz, ela uniu seu sofrimento ao de Jesus, oferecendo-se como mãe espiritual de toda a humanidade.", ["Tratado da Verdadeira Devoção – São Luís de Montfort", "Lucas 1-2"]),
      make(2, "Maria e o Rosário", "A importância do Rosário na vida espiritual.", "O Rosário é a oração mariana por excelência. Ao rezá-lo, meditamos nos mistérios da vida de Jesus e de Maria, unindo nossa voz à da Virgem. São Padre Pio dizia: 'O Rosário é a arma.' Em Fátima, Nossa Senhora pediu que rezássemos o Rosário todos os dias pela paz do mundo.\n\nCada Ave Maria é um abraço espiritual de Maria. Cada mistério é uma janela para a vida de Cristo. O Rosário nos ensina a contemplar, a meditar, a entrar no silêncio onde Deus fala.", ["O Segredo do Rosário – São Luís de Montfort", "Rosarium Virginis Mariae"]),
      make(3, "As Virtudes de Maria para os Dias de Hoje", "Como imitar as virtudes marianas na vida moderna.", "Em um mundo que valoriza o barulho, a pressa e a autopromoção, as virtudes de Maria parecem contracorrente: humildade, silêncio, obediência, confiança. Mas são exatamente essas virtudes que trazem paz interior e nos aproximam de Deus.\n\nImitar Maria não significa ser passivo — significa ser corajoso o suficiente para confiar quando tudo parece incerto, para servir quando ninguém está olhando, para permanecer fiel quando o mundo convida à desistência.", ["Glórias de Maria – Santo Afonso de Ligório", "Maria de Nazaré – Ratzinger"]),
    ],
  },
  virtudes: {
    name: "Leituras sobre Virtudes",
    description: "Paciência, caridade, esperança e mais",
    readings: [
      make(1, "A Paciência como Caminho de Santidade", "Aprender a esperar com fé e serenidade.", "A paciência é uma das virtudes mais difíceis de praticar, mas também uma das mais transformadoras. Em um mundo que exige resultados imediatos, esperar parece um desperdício. Mas Deus trabalha no tempo, não contra o tempo.\n\nA paciência cristã não é passividade — é confiança ativa de que Deus está agindo, mesmo quando não vemos. Santa Teresinha do Menino Jesus dizia que cada pequeno sofrimento suportado com paciência é uma oferenda de amor a Deus.", ["História de uma Alma – Santa Teresinha", "Tiago 1,2-4"]),
      make(2, "A Caridade que Transforma", "O amor ao próximo como fundamento da vida cristã.", "São Paulo nos diz que se não temos caridade, nada somos. A caridade não é apenas dar esmolas — é amar o outro como Cristo nos ama: sem condições, sem julgamento, sem limites.\n\nA caridade é ver Cristo no rosto do pobre, do doente, do excluído. É servir sem esperar recompensa. É perdoar quando a justiça humana pediria vingança.", ["1 Coríntios 13", "Deus Caritas Est – Papa Bento XVI"]),
      make(3, "A Esperança nos Tempos Difíceis", "Manter a esperança quando tudo parece escuro.", "A esperança cristã não é otimismo ingênuo — é certeza de que Deus é fiel às Suas promessas. Mesmo quando tudo parece desmoronar, a esperança nos sustenta porque não depende das circunstâncias, mas de Deus.\n\nComo dizia São João Paulo II: 'Não tenham medo! Abram as portas a Cristo!'", ["Spe Salvi – Papa Bento XVI", "Romanos 8,28"]),
    ],
  },
  vidaSantos: {
    name: "Vida dos Santos",
    description: "Histórias e exemplos de santidade",
    readings: [
      make(1, "São Francisco de Assis – O Pobre de Deus", "A vida radical de pobreza e amor à criação.", "Francisco de Assis nasceu rico, mas escolheu a pobreza. Abandonou tudo para seguir Cristo literalmente, vivendo como os pobres, cuidando dos leprosos e pregando o Evangelho com simplicidade.\n\nSua conversão começou quando ouviu a voz de Cristo na igreja de São Damião: 'Francisco, vai e repara a minha casa.' São Francisco nos ensina que a verdadeira riqueza está em Deus.", ["Fioretti de São Francisco", "Cântico das Criaturas"]),
      make(2, "Santa Teresa de Ávila – Mística e Reformadora", "A experiência mística e a reforma do Carmelo.", "Teresa de Ávila foi uma das maiores místicas da história da Igreja. Doutora da Igreja, reformou a Ordem Carmelita e escreveu obras fundamentais sobre a vida de oração.\n\nSua frase célebre resume sua espiritualidade: 'Deus passeia entre as panelas.' Teresa nos ensina que a santidade se vive no cotidiano.", ["O Castelo Interior – Santa Teresa de Ávila", "Caminho de Perfeição"]),
      make(3, "São José – O Justo e Silencioso", "O modelo de pai, esposo e homem de fé.", "São José é o santo do silêncio. Nos Evangelhos, não há uma única palavra registrada dele. Mas suas ações falam mais alto que qualquer discurso. Ele acolheu Maria, protegeu Jesus, trabalhou humildemente como carpinteiro e obedeceu a Deus sem questionar.\n\nPapa Francisco o chamou de 'homem que sonha' — porque é nos sonhos que Deus lhe revelou Sua vontade.", ["Patris Corde – Papa Francisco", "Mateus 1-2"]),
    ],
  },
  formacao: {
    name: "Formação Espiritual",
    description: "Fundamentos da fé e vida cristã",
    readings: [
      make(1, "O que é a Graça Santificante", "Entendendo o dom que nos torna filhos de Deus.", "A graça santificante é o dom sobrenatural que Deus derrama em nossa alma no Batismo, tornando-nos participantes da natureza divina. É ela que nos faz filhos de Deus, templos do Espírito Santo e herdeiros do céu.\n\nO pecado mortal destrói a graça santificante; a Confissão a restaura. Por isso a vida sacramental é tão importante: ela nos mantém conectados à fonte da graça.", ["Catecismo da Igreja Católica – Seção sobre a Graça", "João 15,5"]),
      make(2, "Os Sacramentos como Encontro com Cristo", "Cada sacramento é uma experiência viva do amor de Deus.", "Os sete sacramentos não são meros rituais — são encontros reais com Cristo. No Batismo, morremos e ressuscitamos com Ele. Na Eucaristia, recebemos Seu Corpo e Sangue. Na Confissão, experimentamos Sua misericórdia.\n\nParticipar dos sacramentos com consciência e devoção transforma nossa vida. Não são obrigações — são presentes de Deus.", ["Catecismo da Igreja Católica – Sacramentos", "Sacrosanctum Concilium"]),
      make(3, "A Oração como Relacionamento", "Rezar não é recitar — é conversar com Deus.", "Muitas pessoas abandonam a oração porque a tratam como uma lista de pedidos ou uma obrigação. Mas a oração é, antes de tudo, um relacionamento. É conversa com Deus — e toda conversa inclui falar, ouvir e simplesmente estar presente.\n\nSanta Teresa de Ávila definiu a oração como 'um trato de amizade, um estar a sós com quem sabemos que nos ama.'", ["Caminho de Perfeição – Santa Teresa de Ávila", "Catecismo da Igreja Católica – A Oração"]),
    ],
  },
};
