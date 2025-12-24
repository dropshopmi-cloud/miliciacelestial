// Orações (20+)
export const prayers = [
  {
    id: 1,
    title: "Oração a São Miguel Arcanjo",
    description: "A poderosa oração de proteção contra o mal",
    content: `São Miguel Arcanjo, defendei-nos no combate, sede nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, Príncipe da milícia celeste, pela virtude divina, precipitai no inferno a Satanás e aos outros espíritos malignos que andam pelo mundo para perder as almas. Amém.`,
    category: "Proteção",
    archangel: "Miguel"
  },
  {
    id: 2,
    title: "Oração a São Gabriel Arcanjo",
    description: "Invocação ao mensageiro de Deus",
    content: `Ó glorioso São Gabriel Arcanjo, mensageiro celestial, que trazeis as boas novas do Senhor, iluminai minha mente para compreender a vontade divina. Ajudai-me a receber as mensagens de Deus com humildade e fé. Intercedei por mim junto ao Altíssimo. Amém.`,
    category: "Iluminação",
    archangel: "Gabriel"
  },
  {
    id: 3,
    title: "Oração a São Rafael Arcanjo",
    description: "Súplica ao anjo da cura",
    content: `Glorioso São Rafael Arcanjo, medicina de Deus, que acompanhastes Tobias em sua jornada, guiai meus passos pelos caminhos da vida. Curai meu corpo e minha alma de todas as enfermidades. Afastai de mim todo mal e conduzi-me à salvação eterna. Amém.`,
    category: "Cura",
    archangel: "Rafael"
  },
  {
    id: 4,
    title: "Oração do Pai Nosso",
    description: "A oração que Jesus nos ensinou",
    content: `Pai nosso que estais nos céus, santificado seja o vosso nome. Venha a nós o vosso reino. Seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje. Perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido. E não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.`,
    category: "Fundamental",
    archangel: "Todos"
  },
  {
    id: 5,
    title: "Ave Maria",
    description: "Saudação à Virgem Maria",
    content: `Ave Maria, cheia de graça, o Senhor é convosco. Bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.`,
    category: "Mariana",
    archangel: "Gabriel"
  },
  {
    id: 6,
    title: "Oração da Serenidade",
    description: "Para encontrar paz interior",
    content: `Senhor, concedei-me a serenidade necessária para aceitar as coisas que não posso mudar, coragem para mudar as que posso mudar e sabedoria para distinguir uma da outra. Vivendo um dia de cada vez, aproveitando um momento de cada vez. Aceitando as dificuldades como um caminho para a paz. Amém.`,
    category: "Paz",
    archangel: "Todos"
  },
  {
    id: 7,
    title: "Oração ao Anjo da Guarda",
    description: "Proteção do seu anjo guardião",
    content: `Santo Anjo do Senhor, meu zeloso guardador, se a ti me confiou a piedade divina, sempre me rege, guarda, governa e ilumina. Amém.`,
    category: "Proteção",
    archangel: "Todos"
  },
  {
    id: 8,
    title: "Glória ao Pai",
    description: "Louvor à Santíssima Trindade",
    content: `Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre, por todos os séculos dos séculos. Amém.`,
    category: "Louvor",
    archangel: "Todos"
  },
  {
    id: 9,
    title: "Oração de São Francisco",
    description: "Prece pela paz e instrumentos de Deus",
    content: `Senhor, fazei de mim um instrumento de vossa paz. Onde houver ódio, que eu leve o amor. Onde houver ofensa, que eu leve o perdão. Onde houver discórdia, que eu leve a união. Onde houver dúvida, que eu leve a fé. Onde houver erro, que eu leve a verdade. Onde houver desespero, que eu leve a esperança. Onde houver tristeza, que eu leve a alegria. Onde houver trevas, que eu leve a luz. Amém.`,
    category: "Paz",
    archangel: "Todos"
  },
  {
    id: 10,
    title: "Salve Rainha",
    description: "Súplica à Mãe de Misericórdia",
    content: `Salve, Rainha, mãe de misericórdia, vida, doçura, esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei. E depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria.`,
    category: "Mariana",
    archangel: "Gabriel"
  },
  {
    id: 11,
    title: "Oração de Proteção Noturna",
    description: "Para um sono tranquilo e protegido",
    content: `São Miguel Arcanjo, coloque sua espada de fogo ao pé da minha cama esta noite. Proteja-me de todo mal enquanto durmo. São Gabriel, traga-me sonhos de paz. São Rafael, cure meu corpo enquanto descanso. Que os três Arcanjos vigiem sobre mim até o amanhecer. Amém.`,
    category: "Proteção",
    archangel: "Todos"
  },
  {
    id: 12,
    title: "Credo",
    description: "Profissão de fé católica",
    content: `Creio em Deus Pai todo-poderoso, criador do céu e da terra. E em Jesus Cristo, seu único Filho, Nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, de onde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.`,
    category: "Fundamental",
    archangel: "Todos"
  },
  {
    id: 13,
    title: "Oração pela Família",
    description: "Proteção e bênção sobre o lar",
    content: `Santos Arcanjos Miguel, Gabriel e Rafael, protegei nossa família de todo mal. Cubri nossa casa com vossas asas celestiais. Afastai toda discórdia e tragam paz ao nosso lar. Que o amor de Deus reine em nossa família hoje e sempre. Amém.`,
    category: "Família",
    archangel: "Todos"
  },
  {
    id: 14,
    title: "Oração pela Cura Interior",
    description: "Cura das feridas da alma",
    content: `São Rafael Arcanjo, médico celestial, penetra nas profundezas da minha alma e cura todas as minhas feridas interiores. Remove todo trauma, mágoa e ressentimento. Preenche meu coração com a paz e o amor de Deus. Restaura minha alegria de viver. Amém.`,
    category: "Cura",
    archangel: "Rafael"
  },
  {
    id: 15,
    title: "Oração para Decisões",
    description: "Iluminação para escolhas importantes",
    content: `São Gabriel Arcanjo, mensageiro da luz divina, iluminai minha mente nesta hora de decisão. Mostrai-me o caminho que Deus deseja que eu siga. Dai-me sabedoria para discernir e coragem para agir conforme a vontade do Altíssimo. Amém.`,
    category: "Iluminação",
    archangel: "Gabriel"
  },
  {
    id: 16,
    title: "Oração Contra o Medo",
    description: "Força e coragem nos momentos difíceis",
    content: `São Miguel Arcanjo, guerreiro celestial, quando o medo me assombrar, coloca-te diante de mim com tua espada flamejante. Afasta de mim todo espírito de temor. Enche meu coração de coragem divina. Lembra-me que Deus está comigo e nada tenho a temer. Amém.`,
    category: "Força",
    archangel: "Miguel"
  },
  {
    id: 17,
    title: "Oração de Agradecimento",
    description: "Gratidão pelas bênçãos recebidas",
    content: `Pai Celestial, através dos vossos santos Arcanjos, agradeço por todas as bênçãos derramadas sobre minha vida. Obrigado por São Miguel que me protege, São Gabriel que me guia e São Rafael que me cura. Que meu coração transborde de gratidão hoje e sempre. Amém.`,
    category: "Gratidão",
    archangel: "Todos"
  },
  {
    id: 18,
    title: "Oração pelo Trabalho",
    description: "Bênção sobre as atividades profissionais",
    content: `Santos Arcanjos, abençoai meu trabalho neste dia. São Miguel, protegei-me de injustiças. São Gabriel, inspirai minhas ideias. São Rafael, preservai minha saúde. Que eu seja instrumento de Deus em meu ambiente de trabalho. Amém.`,
    category: "Trabalho",
    archangel: "Todos"
  },
  {
    id: 19,
    title: "Oração pela Paz Mundial",
    description: "Súplica pela harmonia entre os povos",
    content: `São Miguel Arcanjo, príncipe da paz celestial, intercedei junto a Deus pela paz em nosso mundo. Afastai os espíritos de guerra e divisão. Trazei harmonia entre os povos e nações. Que a luz divina dissipe as trevas do ódio e da violência. Amém.`,
    category: "Paz",
    archangel: "Miguel"
  },
  {
    id: 20,
    title: "Oração Matinal dos Três Arcanjos",
    description: "Para começar o dia com proteção celestial",
    content: `Neste novo dia que se inicia, invoco a proteção dos três grandes Arcanjos. São Miguel, proteja-me de todo mal. São Gabriel, guie meus passos e palavras. São Rafael, preserve minha saúde. Que este dia seja abençoado pela presença celestial. Amém.`,
    category: "Manhã",
    archangel: "Todos"
  },
  {
    id: 21,
    title: "Oração pelo Perdão",
    description: "Súplica pela misericórdia divina",
    content: `Senhor, através da intercessão dos vossos santos Arcanjos, peço perdão por todos os meus pecados. Purificai meu coração de toda maldade. Ajudai-me a perdoar aqueles que me ofenderam. Restaurai em mim a graça do batismo. Amém.`,
    category: "Perdão",
    archangel: "Todos"
  },
  {
    id: 22,
    title: "Ladainha dos Santos Arcanjos",
    description: "Invocações aos três Arcanjos",
    content: `São Miguel Arcanjo, defensor na batalha - Rogai por nós. São Gabriel Arcanjo, mensageiro de Deus - Rogai por nós. São Rafael Arcanjo, medicina divina - Rogai por nós. Santos Arcanjos, guardiões do céu - Protegei-nos. Príncipes celestiais, servos do Altíssimo - Intercedei por nós. Amém.`,
    category: "Ladainha",
    archangel: "Todos"
  }
];

// Leituras Temáticas (substituindo passagens bíblicas - 20+)
export const readings = [
  {
    id: 1,
    title: "A Batalha de São Miguel",
    theme: "Vitória Celestial",
    content: "São Miguel liderou os exércitos celestiais contra Lúcifer e seus seguidores rebeldes. Com sua espada flamejante, precipitou o dragão e seus anjos ao abismo, gritando 'Quem é como Deus?'. Esta vitória nos lembra que o bem sempre triunfará sobre o mal quando confiamos no poder divino.",
    archangel: "Miguel"
  },
  {
    id: 2,
    title: "A Anunciação",
    theme: "Mensagem Divina",
    content: "São Gabriel foi enviado a Nazaré para anunciar a Maria que ela seria a mãe do Salvador. Com as palavras 'Ave, cheia de graça', ele trouxe a maior notícia da história da humanidade. Gabriel nos ensina que Deus sempre tem planos maiores para nós.",
    archangel: "Gabriel"
  },
  {
    id: 3,
    title: "A Jornada de Tobias",
    theme: "Cura e Proteção",
    content: "São Rafael acompanhou Tobias em sua jornada, guiando-o pelos caminhos seguros, protegendo-o dos perigos e curando seu pai da cegueira. Esta história nos mostra que Deus envia seus anjos para nos acompanhar nas jornadas da vida.",
    archangel: "Rafael"
  },
  {
    id: 4,
    title: "Os Guardiões do Trono",
    theme: "Adoração Eterna",
    content: "Os Arcanjos estão diante do trono de Deus, cantando eternamente 'Santo, Santo, Santo é o Senhor dos Exércitos'. Eles nos inspiram a manter uma atitude de adoração e reverência constante ao Criador em todas as circunstâncias da vida.",
    archangel: "Todos"
  },
  {
    id: 5,
    title: "O Significado dos Nomes",
    theme: "Identidade Celestial",
    content: "Miguel significa 'Quem é como Deus?', Gabriel significa 'Força de Deus' e Rafael significa 'Deus cura'. Seus nomes revelam suas missões e nos lembram que toda verdadeira força, proteção e cura vêm de Deus.",
    archangel: "Todos"
  },
  {
    id: 6,
    title: "A Proteção dos Anjos",
    theme: "Guarda Celestial",
    content: "Deus deu ordem aos seus anjos para nos guardarem em todos os nossos caminhos. Eles nos sustentam em suas mãos para que não tropecemos. Esta promessa divina nos assegura que nunca estamos sozinhos em nossas jornadas.",
    archangel: "Todos"
  },
  {
    id: 7,
    title: "A Espada de Fogo",
    theme: "Combate Espiritual",
    content: "A espada flamejante de São Miguel representa a Palavra de Deus que penetra e divide. No combate espiritual, nossa arma mais poderosa é a verdade divina. Assim como Miguel venceu o dragão, podemos vencer nossas batalhas com a fé.",
    archangel: "Miguel"
  },
  {
    id: 8,
    title: "O Lírio de Gabriel",
    theme: "Pureza e Anunciação",
    content: "Gabriel é frequentemente representado com um lírio, símbolo de pureza. Ele traz mensagens a corações puros e preparados. Para recebermos as inspirações divinas, devemos purificar nossos corações e mentes.",
    archangel: "Gabriel"
  },
  {
    id: 9,
    title: "O Cajado de Rafael",
    theme: "Peregrinação",
    content: "O cajado de peregrino de São Rafael representa a jornada da vida. Ele nos acompanha em cada passo, guiando-nos pelos caminhos certos e curando nossas feridas ao longo do caminho. A vida é uma peregrinação rumo à eternidade.",
    archangel: "Rafael"
  },
  {
    id: 10,
    title: "A Hierarquia Angelical",
    theme: "Ordem Celestial",
    content: "Os Arcanjos estão entre as nove ordens angelicais, servindo como mensageiros principais de Deus. Sua posição intermediária os torna pontes entre o céu e a terra, levando nossas orações a Deus e trazendo-nos Suas respostas.",
    archangel: "Todos"
  },
  {
    id: 11,
    title: "O Dia 29 de Setembro",
    theme: "Festa Litúrgica",
    content: "A Igreja celebra a festa dos três Arcanjos em 29 de setembro. Neste dia especial, honramos Miguel, Gabriel e Rafael, pedindo sua intercessão e proteção. É um dia para renovar nossa devoção aos guardiões celestiais.",
    archangel: "Todos"
  },
  {
    id: 12,
    title: "A Balança da Justiça",
    theme: "Julgamento Divino",
    content: "São Miguel é frequentemente representado com uma balança, pesando as almas no juízo final. Isto nos lembra que nossas ações têm consequências eternas e devemos viver de acordo com a justiça e a misericórdia divinas.",
    archangel: "Miguel"
  },
  {
    id: 13,
    title: "O Anúncio a Zacarias",
    theme: "Fé e Dúvida",
    content: "Gabriel também anunciou a Zacarias o nascimento de João Batista. Quando Zacarias duvidou, ficou mudo até o nascimento. Esta história nos ensina sobre a importância de crer nas promessas de Deus sem hesitação.",
    archangel: "Gabriel"
  },
  {
    id: 14,
    title: "A Cura de Tobit",
    theme: "Restauração",
    content: "São Rafael instruiu Tobias a usar o fel do peixe para curar a cegueira de seu pai Tobit. A cura física representou também a cura espiritual da família. Rafael continua a trazer cura integral a quem invoca seu nome.",
    archangel: "Rafael"
  },
  {
    id: 15,
    title: "Os Sete que Estão diante de Deus",
    theme: "Presença Divina",
    content: "Rafael se apresentou como 'um dos sete que estão diante do Senhor'. Os três Arcanjos que conhecemos pelos nomes fazem parte deste grupo seleto que serve diretamente na presença de Deus.",
    archangel: "Todos"
  },
  {
    id: 16,
    title: "O Dragão Vencido",
    theme: "Triunfo sobre o Mal",
    content: "São Miguel é representado com um dragão sob seus pés, simbolizando a vitória sobre Satanás. Esta imagem nos dá esperança de que todo mal pode ser vencido quando lutamos sob a bandeira de Deus.",
    archangel: "Miguel"
  },
  {
    id: 17,
    title: "A Trombeta do Juízo",
    theme: "Fim dos Tempos",
    content: "Gabriel é associado à trombeta que anunciará o fim dos tempos. Como mensageiro divino, ele proclamará a segunda vinda de Cristo. Devemos viver preparados para este grande dia.",
    archangel: "Gabriel"
  },
  {
    id: 18,
    title: "O Casamento de Tobias e Sara",
    theme: "Amor Abençoado",
    content: "São Rafael auxiliou no casamento de Tobias e Sara, libertando-a do demônio Asmodeu. Ele é patrono dos casais e abençoa as uniões feitas sob a proteção de Deus.",
    archangel: "Rafael"
  },
  {
    id: 19,
    title: "A Armadura de Deus",
    theme: "Preparação Espiritual",
    content: "Assim como São Miguel veste armadura celestial, somos chamados a vestir a armadura de Deus: o cinto da verdade, a couraça da justiça, o escudo da fé, o capacete da salvação e a espada do Espírito.",
    archangel: "Miguel"
  },
  {
    id: 20,
    title: "Mensageiros da Esperança",
    theme: "Consolação",
    content: "Os Arcanjos trazem mensagens de esperança aos desesperados, cura aos enfermos e proteção aos vulneráveis. Em cada momento difícil, podemos invocar sua presença consoladora.",
    archangel: "Todos"
  },
  {
    id: 21,
    title: "A Intercessão Celestial",
    theme: "Mediação",
    content: "Os Arcanjos intercedem por nós diante de Deus, levando nossas orações ao trono celestial. Rafael disse a Tobit: 'Eu apresentei tua oração diante da glória do Senhor'. Eles são nossos advogados no céu.",
    archangel: "Todos"
  },
  {
    id: 22,
    title: "O Exército Celestial",
    theme: "Comunhão dos Santos",
    content: "São Miguel comanda legiões de anjos que lutam ao nosso lado. Não estamos sozinhos na batalha espiritual. Um exército invisível nos cerca, pronto para defender os filhos de Deus.",
    archangel: "Miguel"
  }
];

// Meditações (20+)
export const meditations = [
  {
    id: 1,
    title: "Meditação da Proteção Divina",
    duration: "10 minutos",
    description: "Invocar a proteção de São Miguel Arcanjo",
    archangel: "Miguel",
    steps: [
      "Encontre um lugar tranquilo e sente-se confortavelmente",
      "Feche os olhos e respire profundamente três vezes",
      "Visualize uma luz dourada envolvendo todo o seu corpo",
      "Imagine São Miguel Arcanjo ao seu lado, com sua espada flamejante",
      "Sinta a proteção divina afastando todo mal de sua vida",
      "Agradeça pela proteção celestial"
    ]
  },
  {
    id: 2,
    title: "Meditação da Paz Interior",
    duration: "15 minutos",
    description: "Encontrar serenidade através da conexão espiritual",
    archangel: "Todos",
    steps: [
      "Respire lentamente, inspirando paz e expirando tensão",
      "Concentre-se no batimento do seu coração",
      "Repita mentalmente: 'A paz de Deus está comigo'",
      "Deixe que pensamentos passem como nuvens no céu",
      "Permaneça neste estado de calma por alguns minutos",
      "Volte gradualmente à consciência normal"
    ]
  },
  {
    id: 3,
    title: "Meditação do Perdão",
    duration: "20 minutos",
    description: "Liberte seu coração através do perdão",
    archangel: "Todos",
    steps: [
      "Ore pedindo a graça do perdão",
      "Pense em alguém que você precisa perdoar",
      "Visualize essa pessoa diante de você",
      "Repita: 'Eu te perdoo e me liberto dessa mágoa'",
      "Sinta o peso sendo removido do seu coração",
      "Agradeça a Deus pela libertação"
    ]
  },
  {
    id: 4,
    title: "Meditação da Cura com São Rafael",
    duration: "15 minutos",
    description: "Invocar a cura divina através do Arcanjo",
    archangel: "Rafael",
    steps: [
      "Deite-se confortavelmente ou sente-se relaxado",
      "Visualize São Rafael com sua luz verde esmeralda",
      "Imagine essa luz entrando em seu corpo pela coroa",
      "Direcione a luz para áreas que precisam de cura",
      "Sinta a energia curativa preenchendo cada célula",
      "Agradeça a São Rafael pela cura recebida"
    ]
  },
  {
    id: 5,
    title: "Meditação da Mensagem Divina",
    duration: "12 minutos",
    description: "Receber orientação de São Gabriel",
    archangel: "Gabriel",
    steps: [
      "Aquiete sua mente e abra seu coração",
      "Peça a São Gabriel que traga clareza",
      "Visualize o Arcanjo com seu lírio brilhante",
      "Faça sua pergunta silenciosamente",
      "Permaneça em silêncio receptivo",
      "Anote qualquer insight que receber"
    ]
  },
  {
    id: 6,
    title: "Meditação dos Três Arcanjos",
    duration: "25 minutos",
    description: "Conexão com Miguel, Gabriel e Rafael",
    archangel: "Todos",
    steps: [
      "Entre em estado de relaxamento profundo",
      "Visualize São Miguel à sua direita com espada dourada",
      "Visualize São Gabriel à sua esquerda com lírio branco",
      "Visualize São Rafael atrás de você com luz verde",
      "Sinta-se protegido, guiado e curado",
      "Receba as bênçãos de cada Arcanjo"
    ]
  },
  {
    id: 7,
    title: "Meditação do Combate Espiritual",
    duration: "15 minutos",
    description: "Fortalecer-se para as batalhas da vida",
    archangel: "Miguel",
    steps: [
      "Visualize-se vestindo a armadura de Deus",
      "São Miguel coloca o capacete da salvação em você",
      "Ele lhe entrega o escudo da fé",
      "Receba a espada do Espírito",
      "Sinta-se forte e preparado para qualquer desafio",
      "Declare sua vitória em Cristo"
    ]
  },
  {
    id: 8,
    title: "Meditação da Gratidão",
    duration: "10 minutos",
    description: "Cultivar um coração agradecido",
    archangel: "Todos",
    steps: [
      "Liste mentalmente cinco bênçãos do dia",
      "Para cada uma, diga 'Obrigado, Senhor'",
      "Visualize os Arcanjos trazendo estas bênçãos",
      "Sinta a alegria da gratidão em seu coração",
      "Comprometa-se a viver com mais gratidão",
      "Encerre com uma oração de agradecimento"
    ]
  },
  {
    id: 9,
    title: "Meditação do Silêncio Interior",
    duration: "20 minutos",
    description: "Encontrar Deus no silêncio",
    archangel: "Gabriel",
    steps: [
      "Elimine todas as distrações ao seu redor",
      "Feche os olhos e respire conscientemente",
      "Deixe o silêncio envolver você",
      "Não tente pensar em nada específico",
      "Permita que Deus fale ao seu coração",
      "Permaneça neste silêncio sagrado"
    ]
  },
  {
    id: 10,
    title: "Meditação da Jornada de Cura",
    duration: "18 minutos",
    description: "Caminhar com São Rafael em busca de cura",
    archangel: "Rafael",
    steps: [
      "Imagine-se em um caminho belo e sereno",
      "São Rafael aparece como seu companheiro de viagem",
      "Caminhem juntos em silêncio amoroso",
      "Ele toca cada ferida em seu corpo e alma",
      "Sinta a cura acontecendo a cada passo",
      "Chegue ao destino renovado e curado"
    ]
  },
  {
    id: 11,
    title: "Meditação da Coragem",
    duration: "12 minutos",
    description: "Superar medos com ajuda celestial",
    archangel: "Miguel",
    steps: [
      "Identifique um medo que te paralisa",
      "Visualize este medo como uma sombra escura",
      "São Miguel surge com sua espada brilhante",
      "Ele corta a sombra do medo ao meio",
      "A luz invade o espaço onde havia trevas",
      "Sinta a coragem fluindo em você"
    ]
  },
  {
    id: 12,
    title: "Meditação da Vocação",
    duration: "15 minutos",
    description: "Descobrir seu chamado divino",
    archangel: "Gabriel",
    steps: [
      "Pergunte a Deus qual é sua missão",
      "São Gabriel aproxima-se como mensageiro",
      "Ele traz um pergaminho com sua vocação",
      "Abra o pergaminho em seu coração",
      "Reflita sobre o que foi revelado",
      "Comprometa-se a seguir este chamado"
    ]
  },
  {
    id: 13,
    title: "Meditação da Libertação",
    duration: "20 minutos",
    description: "Libertar-se de prisões espirituais",
    archangel: "Miguel",
    steps: [
      "Identifique o que te mantém aprisionado",
      "Visualize estas correntes em seu espírito",
      "São Miguel surge com sua espada flamejante",
      "Ele corta cada corrente uma a uma",
      "Sinta-se livre e leve",
      "Agradeça pela libertação recebida"
    ]
  },
  {
    id: 14,
    title: "Meditação da Família",
    duration: "15 minutos",
    description: "Proteger e abençoar sua família",
    archangel: "Todos",
    steps: [
      "Visualize cada membro de sua família",
      "Coloque cada um nas mãos dos Arcanjos",
      "São Miguel os protege com sua espada",
      "São Gabriel os ilumina com sua sabedoria",
      "São Rafael os cura de toda enfermidade",
      "Agradeça pela família que Deus lhe deu"
    ]
  },
  {
    id: 15,
    title: "Meditação do Amanhecer",
    duration: "8 minutos",
    description: "Começar o dia com bênção celestial",
    archangel: "Todos",
    steps: [
      "Ao acordar, agradeça pelo novo dia",
      "Invoque os três Arcanjos para este dia",
      "Peça proteção, orientação e saúde",
      "Visualize o dia sendo abençoado",
      "Comprometa-se a viver em santidade",
      "Levante-se com energia renovada"
    ]
  },
  {
    id: 16,
    title: "Meditação do Anoitecer",
    duration: "10 minutos",
    description: "Entregar o dia nas mãos de Deus",
    archangel: "Todos",
    steps: [
      "Revise seu dia com gratidão",
      "Peça perdão por falhas cometidas",
      "Agradeça pelas proteções recebidas",
      "Entregue seu sono aos Arcanjos",
      "Peça sonhos de paz e revelação",
      "Durma sob a guarda celestial"
    ]
  },
  {
    id: 17,
    title: "Meditação da Renovação",
    duration: "15 minutos",
    description: "Renovar forças espirituais",
    archangel: "Rafael",
    steps: [
      "Reconheça seu cansaço e esgotamento",
      "São Rafael derrama óleo curativo sobre você",
      "Sinta a energia divina restaurando suas forças",
      "Cada célula é renovada e revitalizada",
      "Levante-se com vigor renovado",
      "Agradeça pela restauração recebida"
    ]
  },
  {
    id: 18,
    title: "Meditação da Sabedoria",
    duration: "12 minutos",
    description: "Receber discernimento divino",
    archangel: "Gabriel",
    steps: [
      "Apresente uma situação que requer sabedoria",
      "São Gabriel ilumina sua mente",
      "Veja a situação de diferentes ângulos",
      "Receba insights e compreensão",
      "A solução começa a se formar",
      "Agradeça pela sabedoria recebida"
    ]
  },
  {
    id: 19,
    title: "Meditação do Amor",
    duration: "15 minutos",
    description: "Cultivar o amor divino no coração",
    archangel: "Todos",
    steps: [
      "Concentre-se no centro do seu peito",
      "Visualize uma chama de amor divino",
      "Os Arcanjos alimentam esta chama",
      "O amor se expande para todo seu ser",
      "Envie este amor para o mundo",
      "Viva a partir deste amor"
    ]
  },
  {
    id: 20,
    title: "Meditação da Confiança",
    duration: "10 minutos",
    description: "Confiar no plano de Deus",
    archangel: "Todos",
    steps: [
      "Entregue suas preocupações a Deus",
      "Os Arcanjos recebem cada fardo",
      "Visualize-se livre e confiante",
      "Repita: 'Confio no Senhor'",
      "Sinta a paz da confiança",
      "Descanse na providência divina"
    ]
  }
];

// Novenas (15 dias aos Três Arcanjos)
export const novenas = {
  title: "Novena aos Santos Arcanjos Miguel, Gabriel e Rafael",
  description: "15 dias de oração intensa aos três grandes Arcanjos",
  days: [
    {
      day: 1,
      title: "Dia 1 - A Grandeza dos Arcanjos",
      archangel: "Todos",
      reflection: "Os Arcanjos são príncipes celestiais, criados por Deus para servi-Lo e auxiliar a humanidade. Eles estão diante do trono divino e são enviados em missões especiais.",
      prayer: "Santíssimos Arcanjos Miguel, Gabriel e Rafael, príncipes do céu, eu vos saúdo com reverência. Intercedei por mim junto a Deus. Amém.",
      intention: "Peça a graça de reconhecer a presença angelical em sua vida."
    },
    {
      day: 2,
      title: "Dia 2 - São Miguel, o Defensor",
      archangel: "Miguel",
      reflection: "São Miguel significa 'Quem é como Deus?'. Ele é o grande defensor da honra divina e protetor contra todo mal.",
      prayer: "São Miguel Arcanjo, vós que defendestes a honra de Deus contra os anjos rebeldes, defendei-me de todo mal. Amém.",
      intention: "Peça proteção contra tentações e ataques espirituais."
    },
    {
      day: 3,
      title: "Dia 3 - São Gabriel, o Mensageiro",
      archangel: "Gabriel",
      reflection: "São Gabriel significa 'Força de Deus'. Ele foi enviado para anunciar as maiores notícias da história da salvação.",
      prayer: "São Gabriel Arcanjo, mensageiro fiel, ajudai-me a ouvir e compreender as mensagens de Deus em minha vida. Amém.",
      intention: "Peça clareza para discernir a vontade de Deus."
    },
    {
      day: 4,
      title: "Dia 4 - São Rafael, o Curador",
      archangel: "Rafael",
      reflection: "São Rafael significa 'Deus cura'. Ele acompanhou Tobias e trouxe cura à sua família.",
      prayer: "São Rafael Arcanjo, médico celestial, curai meu corpo e minha alma de todas as enfermidades. Amém.",
      intention: "Peça cura física, emocional e espiritual."
    },
    {
      day: 5,
      title: "Dia 5 - A Espada de Fogo",
      archangel: "Miguel",
      reflection: "A espada de São Miguel representa a verdade divina que vence toda mentira e engano do maligno.",
      prayer: "São Miguel, com vossa espada de fogo, cortai todo laço maligno que me prende. Libertai-me para servir a Deus. Amém.",
      intention: "Peça libertação de vícios, maus hábitos e prisões espirituais."
    },
    {
      day: 6,
      title: "Dia 6 - O Lírio da Pureza",
      archangel: "Gabriel",
      reflection: "O lírio de São Gabriel representa a pureza necessária para receber as mensagens divinas.",
      prayer: "São Gabriel, ajudai-me a purificar meu coração para ser digno das inspirações do Espírito Santo. Amém.",
      intention: "Peça pureza de coração, mente e intenções."
    },
    {
      day: 7,
      title: "Dia 7 - O Cajado do Peregrino",
      archangel: "Rafael",
      reflection: "O cajado de São Rafael representa a jornada da vida, onde ele nos guia e protege.",
      prayer: "São Rafael, acompanhai-me em minha peregrinação terrena, guiando-me ao destino eterno. Amém.",
      intention: "Peça orientação em suas decisões e caminhos."
    },
    {
      day: 8,
      title: "Dia 8 - Vitória sobre o Mal",
      archangel: "Miguel",
      reflection: "São Miguel venceu o dragão e seus anjos. Com ele, podemos vencer toda batalha espiritual.",
      prayer: "São Miguel Arcanjo, dai-me a vitória sobre todo mal que me assedia. Em vós confio. Amém.",
      intention: "Peça vitória em suas lutas espirituais atuais."
    },
    {
      day: 9,
      title: "Dia 9 - Ouvir a Voz de Deus",
      archangel: "Gabriel",
      reflection: "Gabriel nos ensina a estar atentos às mensagens divinas que chegam de muitas formas.",
      prayer: "São Gabriel, abri meus ouvidos espirituais para ouvir o que Deus quer me dizer. Amém.",
      intention: "Peça sensibilidade às inspirações do Espírito Santo."
    },
    {
      day: 10,
      title: "Dia 10 - Cura Integral",
      archangel: "Rafael",
      reflection: "A cura de Deus abrange corpo, mente, emoções e espírito. Rafael traz cura completa.",
      prayer: "São Rafael, tocai cada área da minha vida que precisa de cura. Restaurai-me integralmente. Amém.",
      intention: "Peça cura em todas as dimensões do seu ser."
    },
    {
      day: 11,
      title: "Dia 11 - A Proteção da Família",
      archangel: "Todos",
      reflection: "Os Arcanjos protegem não apenas indivíduos, mas famílias inteiras sob sua guarda.",
      prayer: "Santos Arcanjos, protegei minha família de todo mal. Abençoai nosso lar. Amém.",
      intention: "Peça proteção e bênção sobre sua família."
    },
    {
      day: 12,
      title: "Dia 12 - Coragem nas Adversidades",
      archangel: "Miguel",
      reflection: "São Miguel nos dá coragem para enfrentar os desafios da vida com fé.",
      prayer: "São Miguel, infundi em mim a coragem para enfrentar todas as dificuldades. Amém.",
      intention: "Peça fortaleza para situações difíceis que está enfrentando."
    },
    {
      day: 13,
      title: "Dia 13 - Sabedoria Divina",
      archangel: "Gabriel",
      reflection: "Gabriel traz a sabedoria do alto para iluminar nossas decisões.",
      prayer: "São Gabriel, iluminai minha mente com a sabedoria do céu. Amém.",
      intention: "Peça sabedoria para uma decisão importante."
    },
    {
      day: 14,
      title: "Dia 14 - Companheiro de Viagem",
      archangel: "Rafael",
      reflection: "Como acompanhou Tobias, Rafael caminha conosco em todas as jornadas da vida.",
      prayer: "São Rafael, sede meu companheiro fiel nesta jornada terrena. Amém.",
      intention: "Peça que São Rafael esteja presente em sua vida diária."
    },
    {
      day: 15,
      title: "Dia 15 - Consagração aos Três Arcanjos",
      archangel: "Todos",
      reflection: "Neste último dia, consagramos nossa vida aos cuidados dos três grandes Arcanjos.",
      prayer: "São Miguel, São Gabriel e São Rafael, consagro-vos minha vida. Protegei-me, guiai-me e curai-me sempre. Serei vosso devoto até o fim dos meus dias. Amém.",
      intention: "Renove sua devoção e compromisso com os Arcanjos."
    }
  ]
};

// Rosário (estrutura completa)
export const rosary = {
  title: "Santo Rosário com os Arcanjos",
  description: "O Rosário meditado com a intercessão dos três Arcanjos",
  mysteries: {
    gloriosos: {
      name: "Mistérios Gloriosos",
      dayRecommended: "Domingo e Quarta-feira",
      archangel: "Miguel",
      mysteries: [
        { number: 1, title: "A Ressurreição de Jesus", reflection: "Jesus ressuscitou glorioso, vencendo a morte. São Miguel nos protege nesta jornada rumo à ressurreição." },
        { number: 2, title: "A Ascensão do Senhor", reflection: "Jesus subiu aos céus onde os anjos O adoram. Gabriel anunciará Sua volta gloriosa." },
        { number: 3, title: "A Vinda do Espírito Santo", reflection: "O Espírito desceu sobre os apóstolos. Os Arcanjos nos ajudam a receber Seus dons." },
        { number: 4, title: "A Assunção de Nossa Senhora", reflection: "Maria foi elevada ao céu corpo e alma. Os Arcanjos a escoltaram em glória." },
        { number: 5, title: "A Coroação de Nossa Senhora", reflection: "Maria foi coroada Rainha do Céu. Os Arcanjos se inclinam diante dela." }
      ]
    },
    dolorosos: {
      name: "Mistérios Dolorosos",
      dayRecommended: "Terça-feira e Sexta-feira",
      archangel: "Rafael",
      mysteries: [
        { number: 1, title: "A Agonia de Jesus no Horto", reflection: "Um anjo confortou Jesus. São Rafael nos consola em nossas agonias." },
        { number: 2, title: "A Flagelação de Jesus", reflection: "Jesus sofreu por nossos pecados. Rafael cura nossas feridas interiores." },
        { number: 3, title: "A Coroação de Espinhos", reflection: "Jesus foi humilhado por nós. Os Arcanjos nos ajudam a oferecer nosso sofrimento." },
        { number: 4, title: "A Cruz às Costas", reflection: "Jesus carregou sua cruz. São Rafael nos fortalece para carregar as nossas." },
        { number: 5, title: "A Crucificação e Morte de Jesus", reflection: "Jesus morreu para nos salvar. Os Arcanjos nos acompanham na hora da morte." }
      ]
    },
    gozosos: {
      name: "Mistérios Gozosos",
      dayRecommended: "Segunda-feira e Sábado",
      archangel: "Gabriel",
      mysteries: [
        { number: 1, title: "A Anunciação do Anjo a Maria", reflection: "Gabriel anunciou a Maria a encarnação do Verbo. Ele nos traz as boas novas de Deus." },
        { number: 2, title: "A Visitação de Maria a Isabel", reflection: "Maria levou Jesus a Isabel. Gabriel nos inspira a levar Cristo aos outros." },
        { number: 3, title: "O Nascimento de Jesus", reflection: "Anjos anunciaram o nascimento aos pastores. Os Arcanjos celebram conosco o Natal." },
        { number: 4, title: "A Apresentação no Templo", reflection: "Jesus foi apresentado ao Pai. Os Arcanjos nos apresentam diante de Deus." },
        { number: 5, title: "O Menino Jesus no Templo", reflection: "Jesus crescia em sabedoria. Gabriel nos ilumina com a sabedoria divina." }
      ]
    },
    luminosos: {
      name: "Mistérios Luminosos",
      dayRecommended: "Quinta-feira",
      archangel: "Todos",
      mysteries: [
        { number: 1, title: "O Batismo de Jesus", reflection: "O Espírito desceu como pomba. Os Arcanjos estavam presentes neste momento sagrado." },
        { number: 2, title: "As Bodas de Caná", reflection: "Jesus fez seu primeiro milagre. Rafael abençoa os casamentos." },
        { number: 3, title: "O Anúncio do Reino de Deus", reflection: "Jesus pregou o Reino. Gabriel anuncia esta Boa Nova." },
        { number: 4, title: "A Transfiguração", reflection: "Jesus revelou Sua glória. Os Arcanjos contemplam esta glória eternamente." },
        { number: 5, title: "A Instituição da Eucaristia", reflection: "Jesus se deu em alimento. Miguel nos protege na comunhão sagrada." }
      ]
    }
  },
  howToPray: [
    "Faça o Sinal da Cruz",
    "Reze o Credo",
    "Reze o Pai Nosso",
    "Reze 3 Ave Marias pelas virtudes da fé, esperança e caridade",
    "Reze o Glória ao Pai",
    "Anuncie o primeiro mistério e medite nele",
    "Reze o Pai Nosso",
    "Reze 10 Ave Marias meditando no mistério",
    "Reze o Glória ao Pai",
    "Reze a jaculatória: 'Ó meu Jesus, perdoai-nos...'",
    "Repita os passos 6-10 para os próximos quatro mistérios",
    "Encerre com a Salve Rainha"
  ]
};

// Calendário Litúrgico
export const liturgicalCalendar = [
  { date: "1 de Janeiro", feast: "Santa Maria, Mãe de Deus", type: "Solenidade" },
  { date: "6 de Janeiro", feast: "Epifania do Senhor", type: "Solenidade" },
  { date: "2 de Fevereiro", feast: "Apresentação do Senhor", type: "Festa" },
  { date: "19 de Março", feast: "São José, Esposo de Maria", type: "Solenidade" },
  { date: "25 de Março", feast: "Anunciação do Senhor", type: "Solenidade" },
  { date: "Móvel", feast: "Domingo de Ramos", type: "Solene" },
  { date: "Móvel", feast: "Quinta-feira Santa", type: "Tríduo Pascal" },
  { date: "Móvel", feast: "Sexta-feira Santa", type: "Tríduo Pascal" },
  { date: "Móvel", feast: "Domingo de Páscoa", type: "Solenidade" },
  { date: "Móvel", feast: "Ascensão do Senhor", type: "Solenidade" },
  { date: "Móvel", feast: "Pentecostes", type: "Solenidade" },
  { date: "Móvel", feast: "Santíssima Trindade", type: "Solenidade" },
  { date: "Móvel", feast: "Corpus Christi", type: "Solenidade" },
  { date: "24 de Junho", feast: "Nascimento de São João Batista", type: "Solenidade" },
  { date: "29 de Junho", feast: "São Pedro e São Paulo", type: "Solenidade" },
  { date: "15 de Agosto", feast: "Assunção de Nossa Senhora", type: "Solenidade" },
  { date: "29 de Setembro", feast: "Santos Arcanjos Miguel, Gabriel e Rafael", type: "Festa" },
  { date: "2 de Outubro", feast: "Santos Anjos da Guarda", type: "Memória" },
  { date: "7 de Outubro", feast: "Nossa Senhora do Rosário", type: "Memória" },
  { date: "1 de Novembro", feast: "Todos os Santos", type: "Solenidade" },
  { date: "2 de Novembro", feast: "Finados", type: "Comemoração" },
  { date: "21 de Novembro", feast: "Apresentação de Nossa Senhora", type: "Memória" },
  { date: "Móvel", feast: "Cristo Rei do Universo", type: "Solenidade" },
  { date: "8 de Dezembro", feast: "Imaculada Conceição", type: "Solenidade" },
  { date: "25 de Dezembro", feast: "Natal do Senhor", type: "Solenidade" }
];

// Informações sobre os Três Arcanjos
export const archangelsInfo = {
  miguel: {
    name: "São Miguel Arcanjo",
    meaning: "Quem é como Deus?",
    title: "Príncipe da Milícia Celeste",
    feast: "29 de Setembro",
    patronOf: ["Soldados", "Policiais", "Enfermos", "Marinhos", "Paraquedistas"],
    description: "São Miguel Arcanjo é o líder dos exércitos celestiais e o grande defensor da Igreja. Seu nome é um grito de guerra espiritual contra Satanás. Ele é invocado para proteção contra o mal e é venerado em todo o mundo cristão como o poderoso príncipe do céu.",
    history: "Segundo a tradição católica, São Miguel liderou as forças celestiais contra Lúcifer e os anjos rebeldes, precipitando-os no inferno. Ele aparece nas Escrituras como protetor do povo de Deus e defensor da justiça divina. No Apocalipse, é descrito vencendo o grande dragão.",
    symbols: ["Espada flamejante", "Balança da justiça", "Armadura dourada", "Dragão sob os pés"],
    color: "Vermelho e Dourado"
  },
  gabriel: {
    name: "São Gabriel Arcanjo",
    meaning: "Força de Deus",
    title: "Mensageiro Celestial",
    feast: "29 de Setembro",
    patronOf: ["Comunicadores", "Diplomatas", "Carteiros", "Telecomunicações"],
    description: "São Gabriel é o grande mensageiro de Deus, encarregado de transmitir as mais importantes revelações divinas à humanidade. Foi ele quem anunciou a Maria que ela seria mãe do Salvador e a Zacarias o nascimento de João Batista.",
    history: "Gabriel aparece em momentos cruciais da história da salvação. No Antigo Testamento, explicou visões ao profeta Daniel. No Novo Testamento, anunciou a encarnação do Verbo. Seu papel como mensageiro o torna patrono dos meios de comunicação.",
    symbols: ["Lírio branco", "Trombeta", "Pergaminho", "Lanterna"],
    color: "Branco e Azul"
  },
  rafael: {
    name: "São Rafael Arcanjo",
    meaning: "Deus cura",
    title: "Medicina de Deus",
    feast: "29 de Setembro",
    patronOf: ["Médicos", "Enfermeiros", "Viajantes", "Jovens namorados"],
    description: "São Rafael é conhecido como o anjo da cura e dos viajantes. Sua missão é trazer a cura divina aos enfermos de corpo e alma, além de guiar os peregrinos em suas jornadas. Ele é a manifestação da misericórdia curadora de Deus.",
    history: "A história de Rafael é contada no Livro de Tobias. Disfarçado como um jovem, ele acompanhou Tobias em sua jornada, protegendo-o dos perigos, ajudando em seu casamento com Sara e curando a cegueira de seu pai Tobit. Ao final, revelou ser 'um dos sete que estão diante do Senhor'.",
    symbols: ["Cajado de peregrino", "Peixe", "Vaso de remédios", "Asas verdes"],
    color: "Verde e Dourado"
  }
};

// Passagens Bíblicas Diárias (31 para cada dia do mês)
export const dailyBiblePassages = [
  { day: 1, passage: "O Senhor é meu pastor, nada me faltará.", reference: "Salmo 23:1" },
  { day: 2, passage: "Entrega o teu caminho ao Senhor, confia nele, e ele tudo fará.", reference: "Salmo 37:5" },
  { day: 3, passage: "Posso todas as coisas naquele que me fortalece.", reference: "Filipenses 4:13" },
  { day: 4, passage: "O Senhor é a minha luz e a minha salvação; a quem temerei?", reference: "Salmo 27:1" },
  { day: 5, passage: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem.", reference: "Salmo 91:11" },
  { day: 6, passage: "Não temas, porque eu sou contigo; não te assombres.", reference: "Isaías 41:10" },
  { day: 7, passage: "A paz vos deixo, a minha paz vos dou.", reference: "João 14:27" },
  { day: 8, passage: "Buscai primeiro o Reino de Deus e a sua justiça.", reference: "Mateus 6:33" },
  { day: 9, passage: "Sede fortes e corajosos; não temais nem vos espanteis.", reference: "Josué 1:9" },
  { day: 10, passage: "Vinde a mim todos os que estais cansados e eu vos aliviarei.", reference: "Mateus 11:28" },
  { day: 11, passage: "Eu sou o caminho, a verdade e a vida.", reference: "João 14:6" },
  { day: 12, passage: "Tudo posso naquele que me fortalece.", reference: "Filipenses 4:13" },
  { day: 13, passage: "O Senhor é meu auxílio; não temerei.", reference: "Hebreus 13:6" },
  { day: 14, passage: "Permanecei em mim, e eu permanecerei em vós.", reference: "João 15:4" },
  { day: 15, passage: "Se Deus é por nós, quem será contra nós?", reference: "Romanos 8:31" },
  { day: 16, passage: "Aquele que está em vós é maior do que aquele que está no mundo.", reference: "1 João 4:4" },
  { day: 17, passage: "Alegrai-vos sempre no Senhor.", reference: "Filipenses 4:4" },
  { day: 18, passage: "A fé é a certeza das coisas que se esperam.", reference: "Hebreus 11:1" },
  { day: 19, passage: "Deus é o nosso refúgio e fortaleza.", reference: "Salmo 46:1" },
  { day: 20, passage: "Em tudo dai graças, porque esta é a vontade de Deus.", reference: "1 Tessalonicenses 5:18" },
  { day: 21, passage: "Lançando sobre ele toda a vossa ansiedade.", reference: "1 Pedro 5:7" },
  { day: 22, passage: "Eu estarei convosco todos os dias.", reference: "Mateus 28:20" },
  { day: 23, passage: "Confiai no Senhor para sempre.", reference: "Isaías 26:4" },
  { day: 24, passage: "Amados, amemo-nos uns aos outros.", reference: "1 João 4:7" },
  { day: 25, passage: "O amor é paciente, o amor é bondoso.", reference: "1 Coríntios 13:4" },
  { day: 26, passage: "Sede misericordiosos, como vosso Pai é misericordioso.", reference: "Lucas 6:36" },
  { day: 27, passage: "Eis que estou à porta e bato.", reference: "Apocalipse 3:20" },
  { day: 28, passage: "Eu vim para que tenham vida em abundância.", reference: "João 10:10" },
  { day: 29, passage: "Miguel e seus anjos lutaram contra o dragão.", reference: "Apocalipse 12:7" },
  { day: 30, passage: "O anjo do Senhor acampa ao redor dos que o temem.", reference: "Salmo 34:7" },
  { day: 31, passage: "Santo, Santo, Santo é o Senhor dos Exércitos.", reference: "Isaías 6:3" }
];

// Orações Diárias (31 para cada dia do mês)
export const dailyPrayers = [
  { day: 1, title: "Oração de Consagração", content: "Santos Arcanjos, consagro este dia a vós. Protegei-me, guiai-me, curai-me." },
  { day: 2, title: "Oração da Manhã", content: "Senhor, abençoai este novo dia. Que os Arcanjos caminhem comigo." },
  { day: 3, title: "Oração de Proteção", content: "São Miguel, cobri-me com vossa espada de luz. Afastai todo mal." },
  { day: 4, title: "Oração de Iluminação", content: "São Gabriel, iluminai minha mente com a sabedoria do céu." },
  { day: 5, title: "Oração de Cura", content: "São Rafael, tocai meu corpo e alma com vossa luz curativa." },
  { day: 6, title: "Oração de Gratidão", content: "Agradeço, Senhor, pelos Arcanjos que me guardam dia e noite." },
  { day: 7, title: "Oração pela Família", content: "Santos Arcanjos, protegei minha família de todo mal." },
  { day: 8, title: "Oração pelo Trabalho", content: "Abençoai minhas mãos e meu trabalho neste dia, Santos Arcanjos." },
  { day: 9, title: "Oração de Coragem", content: "São Miguel, dai-me coragem para enfrentar os desafios de hoje." },
  { day: 10, title: "Oração de Discernimento", content: "São Gabriel, ajudai-me a discernir a vontade de Deus." },
  { day: 11, title: "Oração pela Saúde", content: "São Rafael, restaurai minha saúde e vigor para servir a Deus." },
  { day: 12, title: "Oração contra o Medo", content: "Santos Arcanjos, afastai de mim todo espírito de temor." },
  { day: 13, title: "Oração de Entrega", content: "Entrego este dia nas mãos de Deus e dos Santos Arcanjos." },
  { day: 14, title: "Oração pela Paz", content: "Trazei a paz do céu ao meu coração, Santos Arcanjos." },
  { day: 15, title: "Oração de Louvor", content: "Uno-me aos Arcanjos para louvar: Santo, Santo, Santo é o Senhor!" },
  { day: 16, title: "Oração de Fortaleza", content: "Fortalecei minha fé, Santos Arcanjos, para não vacilar." },
  { day: 17, title: "Oração pela Vocação", content: "Ajudai-me a descobrir e viver minha vocação, Santos Arcanjos." },
  { day: 18, title: "Oração de Libertação", content: "São Miguel, libertai-me de toda prisão espiritual." },
  { day: 19, title: "Oração pela Igreja", content: "Protegei a Santa Igreja, Santos Arcanjos, em tempos de provação." },
  { day: 20, title: "Oração de Intercessão", content: "Levai minhas orações ao trono de Deus, Santos Arcanjos." },
  { day: 21, title: "Oração pela Conversão", content: "Ajudai-me a me converter cada dia mais, Santos Arcanjos." },
  { day: 22, title: "Oração de Adoração", content: "Com os Arcanjos, adoro o Deus três vezes Santo." },
  { day: 23, title: "Oração pela Perseverança", content: "Dai-me perseverar na fé até o fim, Santos Arcanjos." },
  { day: 24, title: "Oração de Esperança", content: "Renovai minha esperança na vida eterna, Santos Arcanjos." },
  { day: 25, title: "Oração pela Caridade", content: "Ensinai-me a amar como Cristo amou, Santos Arcanjos." },
  { day: 26, title: "Oração de Perdão", content: "Ajudai-me a perdoar de coração, Santos Arcanjos." },
  { day: 27, title: "Oração de Humildade", content: "Ensinai-me a ser humilde como vós sois, Santos Arcanjos." },
  { day: 28, title: "Oração pela Santidade", content: "Conduzi-me no caminho da santidade, Santos Arcanjos." },
  { day: 29, title: "Oração aos Três Arcanjos", content: "Miguel, Gabriel, Rafael, intercedei por mim hoje." },
  { day: 30, title: "Oração de Ação de Graças", content: "Obrigado por cada bênção deste mês, Santos Arcanjos." },
  { day: 31, title: "Oração de Renovação", content: "Renovai minha aliança convosco, Santos Arcanjos. Amém." }
];

// Citações Diárias
export const dailyQuotes = [
  "São Miguel Arcanjo, defendei-nos no combate!",
  "Com Deus, nada é impossível.",
  "A fé move montanhas.",
  "O Senhor é minha luz e salvação.",
  "Confie no Senhor de todo o seu coração.",
  "Sede fortes e corajosos.",
  "A oração é a chave do céu.",
  "Onde há fé, há vitória.",
  "Os anjos do Senhor nos guardam em todos os caminhos.",
  "Gabriel anuncia: Nada é impossível para Deus!",
  "Rafael cura: Deus é nossa medicina.",
  "Miguel protege: Quem é como Deus?",
  "Na presença dos anjos cantarei louvores.",
  "Anjos de Deus, nossos guardiões celestiais.",
  "Príncipes do céu, intercedei por nós.",
  "A vitória pertence ao Senhor dos Exércitos."
];
