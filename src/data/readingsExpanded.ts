// Leituras Espirituais — Reformuladas com 8 categorias existenciais

type Reading = {
  id: number;
  title: string;
  summary: string;
  content: string;
  application: string;
  continueReading: string[];
};

type ReadingCategory = {
  name: string;
  description: string;
  icon: string;
  readings: Reading[];
};

const make = (id: number, title: string, summary: string, content: string, application: string, continueReading: string[]): Reading => ({
  id, title, summary, content, application, continueReading
});

export const readingCategories: Record<string, ReadingCategory> = {
  vidaInterior: {
    name: "🌿 Vida Interior e Oração",
    description: "Silêncio, escuta de Deus, perseverança",
    icon: "🌿",
    readings: [
      make(1, "O Silêncio que Cura", "Aprender a ouvir Deus no silêncio interior.",
        "Vivemos em uma era de barulho constante. Redes sociais, notificações, opiniões — tudo compete pela nossa atenção. Mas Deus não grita. Ele fala no silêncio, como falou ao profeta Elias: não no terremoto, não no fogo, mas na brisa suave.\n\nO silêncio interior não é a ausência de pensamentos — é a decisão de criar espaço para Deus. É parar de tentar resolver tudo sozinho e simplesmente estar presente diante dEle.\n\nSanta Teresa de Ávila ensinava que a oração é \"um trato de amizade com quem sabemos que nos ama.\" Não precisa de palavras rebuscadas. Precisa de presença.\n\nQuando você se senta em silêncio, mesmo que pareça que nada acontece, algo profundo está sendo trabalhado. Deus está curando, purificando, fortalecendo. O silêncio é o solo onde a fé cresce.\n\nNão tenha medo do vazio interior. Às vezes, ele é o espaço que Deus precisava para habitar.",
        "Reserve 10 minutos hoje sem celular, sem música, sem distrações. Sente-se em um lugar tranquilo e diga: 'Senhor, estou aqui. Fala, porque Teu servo escuta.' Depois, apenas ouça.",
        ["Oração Quando Você Não Sente Nada", "O Caminho da Contemplação", "Maria e o Silêncio Interior"]),
      make(2, "Oração Quando Você Não Sente Nada", "Fidelidade no deserto espiritual.",
        "Existem fases em que a oração parece seca. Você reza e não sente. Você lê e não toca. Você tenta e parece inútil. Os místicos chamam isso de 'noite escura da alma' — e é uma das fases mais importantes do crescimento espiritual.\n\nA noite escura não é abandono de Deus. É purificação. Deus está removendo as muletas emocionais para que sua fé se apoie apenas nEle. Quando você reza sem sentir, está fazendo o ato mais puro de fé possível.\n\nSão João da Cruz escreveu que nessa noite, Deus está mais próximo do que nunca. Ele trabalha no invisível, como um cirurgião que opera sob anestesia — o paciente não sente nada, mas a cura está acontecendo.\n\nA tentação é desistir. Mas a fidelidade no deserto é preciosa aos olhos de Deus. É fácil rezar quando se sente consolação. O verdadeiro amor se prova quando se reza sem sentir nada.\n\nHoje, continue. Uma frase, um minuto, uma entrega. Deus honra a perseverança silenciosa.",
        "Mesmo que não sinta nada, reze hoje uma oração curta com sinceridade: 'Deus, eu acredito em Ti mesmo sem sentir. Minha fé não depende dos meus sentimentos.'",
        ["O Silêncio que Cura", "Perseverança: Um Passo por Dia", "A Fé que Sustenta na Escuridão"]),
      make(3, "O Caminho da Contemplação", "Quando a oração se torna encontro.",
        "A contemplação não é privilégio dos místicos — é convite para todos. Contemplar é olhar para Deus com amor e deixar-se olhar por Ele. Não exige técnica especial; exige disposição do coração.\n\nSão Francisco de Sales ensinava um método simples: colocar-se na presença de Deus, fazer uma leitura espiritual curta, e depois simplesmente ficar com Deus, como quem se aquece diante do fogo.\n\nA contemplação transforma porque nos expõe à luz de Deus. Assim como a planta cresce na luz sem esforço, a alma cresce na presença divina. Não precisamos fazer nada — apenas permanecer.\n\nMuitos abandonam a oração porque esperam resultados visíveis. Mas a contemplação age nas profundezas, mudando nossa forma de ver o mundo, os outros e a nós mesmos.\n\nComece com 5 minutos. Sente-se diante de um crucifixo ou de uma imagem sagrada. Olhe com amor. Deixe o silêncio falar.",
        "Hoje, escolha uma imagem sagrada e fique 5 minutos olhando para ela em silêncio. Não reze orações formais — apenas olhe com amor e deixe Deus falar ao seu coração.",
        ["O Silêncio que Cura", "Maria e o Silêncio Interior", "Perseverança: Um Passo por Dia"]),
      make(4, "Perseverança: Um Passo por Dia", "Como manter constância sem se violentar.",
        "Perseverar não é se esmagar. É aprender ritmo. Deus não te chama para uma vida espiritual que te destrói; Ele te chama para uma vida que te cura.\n\nO problema é que queremos resultados rápidos. Queremos sentir santidade instantânea. Mas a vida espiritual é como plantar uma árvore: invisível por meses, mas depois dá frutos por décadas.\n\nCrie pequenos hábitos: uma oração matinal de 3 minutos, uma leitura espiritual curta, uma gratidão antes de dormir. Melhor pouco com constância do que muito com culpa.\n\nSanta Teresinha do Menino Jesus chamava isso de 'caminhinho': pequenos atos de amor, feitos com fidelidade, transformam a vida inteira. Ela não fez milagres espetaculares em vida — fez pequenas coisas com grande amor.\n\nNão se compare com os santos dos livros. Compare-se com quem você era ontem. Se hoje rezou um minuto a mais, cresceu.",
        "Defina um micro-hábito espiritual para esta semana: 3 minutos de oração ao acordar, ou uma frase de gratidão antes de dormir. O segredo é começar pequeno.",
        ["Oração Quando Você Não Sente Nada", "O Caminho da Contemplação", "A Fidelidade nas Pequenas Coisas"]),
      make(5, "A Fidelidade nas Pequenas Coisas", "O extraordinário escondido no ordinário.",
        "A maioria de nós não será chamada para grandes gestos heroicos de fé. Não seremos mártires, não fundamos ordens religiosas, não faremos milagres visíveis. Mas somos chamados à santidade do cotidiano.\n\nJesus passou 30 dos 33 anos de sua vida em Nazaré, fazendo trabalho manual, ajudando na casa, convivendo com vizinhos. A maior parte da vida de Deus na terra foi 'ordinária'. Isso nos diz algo profundo: o ordinário é sagrado.\n\nLavar louça com amor é oração. Ouvir o outro com paciência é caridade. Cumprir o dever com alegria é obediência. Cada momento do dia pode ser oferecido a Deus.\n\nSão Josemaria Escrivá dizia: 'Santifique o trabalho, santifique-se no trabalho, santifique os outros com o trabalho.' A santidade não está nas grandes coisas, mas na forma como fazemos as pequenas.",
        "Hoje, ofereça cada atividade cotidiana a Deus. Antes de cada tarefa, diga mentalmente: 'Senhor, faço isso por amor a Ti.'",
        ["Perseverança: Um Passo por Dia", "O Caminho da Contemplação", "A Paciência que Santifica"]),
    ]
  },
  combateEspiritual: {
    name: "🔥 Combate Espiritual",
    description: "Discernimento, tentações, força espiritual",
    icon: "🔥",
    readings: [
      make(1, "Coragem para o Combate Interior", "Como resistir ao medo e permanecer fiel a Deus.",
        "Existem batalhas que ninguém vê. Você sorri por fora, mas por dentro está lutando para não desmoronar. São Miguel Arcanjo nos lembra que a fé não é ausência de combate; é presença de Deus no combate.\n\nQuando pensamentos de culpa, medo ou desânimo te visitarem, não negocie com eles como se fossem a verdade. Leve tudo para a luz, porque a luz enfraquece o que tenta te dominar.\n\nA coragem cristã não é arrogância. É humildade firme: 'Eu não consigo sozinho, mas com Deus eu não estou sozinho.' São Miguel aponta para o Senhor e diz: 'Quem como Deus?' — e essa pergunta quebra o orgulho do mal e também quebra o nosso pânico.\n\nO combate interior é vencido em pequenas fidelidades. Cada oração feita com sinceridade é uma vitória. Cada tentação resistida é um avanço. Cada recomeço após uma queda é prova de que a graça é mais forte que o pecado.",
        "Hoje, identifique um pensamento recorrente que te destrói. Não negocie com ele. Leve-o para Deus e diga: 'Senhor, eu entrego isso a Ti.'",
        ["A Armadura de Deus", "Discernir a Voz de Deus", "A Proteção que Não Depende do Humor"]),
      make(2, "A Armadura de Deus", "Protegendo-se espiritualmente no dia a dia.",
        "São Paulo, na carta aos Efésios, descreve uma armadura espiritual que todo cristão deve vestir: o cinturão da verdade, a couraça da justiça, o calçado da prontidão, o escudo da fé, o capacete da salvação e a espada do Espírito — que é a Palavra de Deus.\n\nEssa armadura não é metáfora vazia. É prática espiritual diária. O cinturão da verdade é viver em honestidade. A couraça da justiça é fazer o que é certo, mesmo quando custa. O escudo da fé é confiar em Deus quando tudo parece perdido.\n\nA batalha espiritual é real, mas não precisamos ter medo. 'Se Deus é por nós, quem será contra nós?' O cristão não luta sozinho — luta com o poder do Espírito Santo.\n\nVista sua armadura toda manhã com uma oração simples: 'Senhor, reveste-me com Tua proteção hoje.'",
        "Ao acordar amanhã, reze: 'Senhor, visto a armadura da fé. Protege-me com Tua verdade, Tua justiça e Teu amor.'",
        ["Coragem para o Combate Interior", "A Proteção que Não Depende do Humor", "Vencendo o Medo com a Fé"]),
      make(3, "Discernir a Voz de Deus", "Como distinguir a voz de Deus das vozes do mundo.",
        "Santo Inácio de Loyola ensinou regras práticas de discernimento que continuam atuais. A consolação — paz profunda, alegria duradoura, clareza — geralmente vem de Deus. A desolação — inquietação, confusão, ansiedade — geralmente vem do inimigo.\n\nMas atenção: às vezes Deus permite a desolação para nos purificar, e o inimigo pode oferecer falsas consolações para nos desviar. O critério mais seguro é observar os frutos: 'Pelos frutos os conhecereis.'\n\nA voz de Deus nunca humilha, nunca desespera, nunca paralisa. Ela pode ser firme, pode corrigir, mas sempre edifica, sempre dá esperança, sempre aponta para frente.\n\nPara discernir melhor: cultive o silêncio, frequente os sacramentos, busque direção espiritual e confie no tempo de Deus.",
        "Hoje, diante de uma decisão ou dúvida, pergunte-se: isso me dá paz ou ansiedade? Isso me aproxima ou me afasta de Deus?",
        ["O Silêncio que Cura", "Coragem para o Combate Interior", "A Fé que Sustenta na Escuridão"]),
      make(4, "A Proteção que Não Depende do Humor", "Proteção espiritual constante, mesmo em dias fracos.",
        "Há dias em que a gente não consegue rezar bonito, nem manter foco, nem sentir fervor. E aí vem o pensamento: 'Será que Deus está longe?' A verdade é que o amor de Deus não depende do seu humor. A proteção do céu não depende do seu desempenho.\n\nDeus guarda os seus. Mesmo quando você está no chão, Ele não deixa o inimigo fazer festa. Mesmo quando você está confuso, Ele ainda guia. Mesmo quando você se sente indigno, Ele ainda chama você pelo nome.\n\nA proteção espiritual é vivida com simplicidade: evitar o que te faz cair, escolher o bem, pedir perdão quando errar, recomeçar sem desespero.\n\nDeus não te convida ao medo; te convida à vigilância e à paz. A proteção não é resultado da sua performance — é fruto do Seu amor.",
        "Nos dias em que não conseguir rezar, diga apenas: 'Deus, estou aqui. Cuida de mim.' Isso é suficiente.",
        ["Coragem para o Combate Interior", "A Armadura de Deus", "Perseverança: Um Passo por Dia"]),
      make(5, "Vencendo o Medo com a Fé", "Quando o medo paralisa, a fé liberta.",
        "O medo é uma das armas mais eficazes do inimigo. Medo do futuro, medo de perder, medo de não ser suficiente, medo da morte. Jesus disse mais de 300 vezes nas Escrituras: 'Não temais.'\n\nO medo não é pecado — é humano. Mas alimentar o medo até ele controlar sua vida é ceder à mentira de que Deus não está no controle.\n\nA fé não elimina o medo instantaneamente. Ela nos dá coragem para agir apesar do medo. Coragem não é ausência de medo — é decidir que existe algo mais importante que o medo.\n\nMaria sentiu medo quando o anjo apareceu. Mas ela não deixou o medo decidir por ela. Disse 'sim' apesar do medo. E esse 'sim' mudou a história.",
        "Identifique seu maior medo hoje e entregue-o a Deus em oração: 'Senhor, eu tenho medo de ___. Mas confio em Ti mais do que no meu medo.'",
        ["A Armadura de Deus", "Discernir a Voz de Deus", "A Esperança nos Tempos Difíceis"]),
    ]
  },
  virtudesVida: {
    name: "❤️ Virtudes para a Vida",
    description: "Humildade, paciência, caridade, esperança",
    icon: "❤️",
    readings: [
      make(1, "A Paciência que Santifica", "Aprender a esperar com fé e serenidade.",
        "A paciência é uma das virtudes mais difíceis de praticar, mas também uma das mais transformadoras. Em um mundo que exige resultados imediatos, esperar parece um desperdício. Mas Deus trabalha no tempo, não contra o tempo.\n\nA paciência cristã não é passividade — é confiança ativa de que Deus está agindo, mesmo quando não vemos. É confiar que o atraso não é negação, mas preparação.\n\nSanta Teresinha do Menino Jesus dizia que cada pequeno sofrimento suportado com paciência é uma oferenda de amor a Deus. A paciência purifica a alma, fortalece o caráter e aprofunda a fé.\n\nSeja paciente consigo mesmo. Deus não desistiu de você — por que você desistiria?",
        "Hoje, quando sentir impaciência (no trânsito, na fila, com uma pessoa difícil), respire fundo e diga: 'Senhor, usa este momento para me santificar.'",
        ["A Caridade que Transforma Vidas", "A Humildade como Força", "Perseverança: Um Passo por Dia"]),
      make(2, "A Caridade que Transforma Vidas", "O amor ao próximo como caminho de santidade.",
        "São Paulo nos diz que se não temos caridade, nada somos. A caridade não é apenas dar esmolas — é amar o outro como Cristo nos ama: sem condições, sem julgamento, sem limites.\n\nA caridade é ver Cristo no rosto do pobre, do doente, do excluído. É servir sem esperar recompensa. É perdoar quando a justiça humana pediria vingança.\n\nA caridade transforma não apenas quem recebe, mas principalmente quem dá. Quando amamos de verdade, descobrimos que somos amados primeiro por Deus.\n\nMadre Teresa dizia: 'Não precisamos fazer grandes coisas. Apenas pequenas coisas com grande amor.'",
        "Faça hoje um ato de caridade anônimo: ajude alguém sem que a pessoa saiba que foi você.",
        ["A Paciência que Santifica", "A Humildade como Força", "A Alegria como Testemunho"]),
      make(3, "A Humildade como Força", "A virtude que abre a porta para todas as outras.",
        "O mundo vê a humildade como fraqueza. Mas na economia espiritual, a humildade é a virtude mais poderosa. Santo Agostinho dizia: 'Se me perguntais qual a primeira virtude do cristão, eu respondo: a humildade. E a segunda? A humildade. E a terceira? A humildade.'\n\nMaria é o modelo perfeito de humildade. Sendo a Mãe de Deus, se apresentou como 'a serva do Senhor'. Não buscou reconhecimento, fama ou poder. Viveu no silêncio de Nazaré, fazendo tarefas simples.\n\nA humildade não é se rebaixar artificialmente. É reconhecer a verdade: tudo o que tenho vem de Deus. Meus talentos são dons. Minhas conquistas são graças. Sem Ele, nada posso.\n\nQuando somos humildes, Deus nos exalta. Quando tentamos nos exaltar, caímos.",
        "Hoje, quando receber um elogio, agradeça e ofereça internamente a glória a Deus. Faça uma boa ação que ninguém veja.",
        ["A Caridade que Transforma Vidas", "A Paciência que Santifica", "A Fidelidade nas Pequenas Coisas"]),
      make(4, "A Esperança nos Tempos Difíceis", "Manter a esperança quando tudo parece escuro.",
        "A esperança cristã não é otimismo ingênuo — é certeza de que Deus é fiel às Suas promessas. Mesmo quando tudo parece desmoronar, a esperança nos sustenta porque não depende das circunstâncias, mas de Deus.\n\nOs tempos difíceis são provas de fé, oportunidades de crescimento, momentos em que somos convidados a confiar mais profundamente. A esperança não nega o sofrimento — ela o ilumina com a luz da eternidade.\n\nComo dizia São João Paulo II: 'Não tenham medo! Abram as portas a Cristo!' A esperança é a certeza de que a última palavra não pertence ao sofrimento, mas a Deus.\n\nEnquanto houver fé, há esperança. E enquanto houver esperança, há caminho.",
        "Escreva hoje três motivos de esperança em sua vida, mesmo pequenos. Releia-os quando a tristeza vier.",
        ["Vencendo o Medo com a Fé", "A Paciência que Santifica", "A Fé que Sustenta na Escuridão"]),
      make(5, "A Alegria como Testemunho", "A alegria cristã que o mundo não pode dar.",
        "A alegria cristã é diferente da felicidade do mundo. A felicidade depende das circunstâncias; a alegria depende de Deus. Você pode estar alegre mesmo no sofrimento, porque a alegria vem da certeza de que Deus está no controle.\n\nSão Paulo escreveu a carta aos Filipenses — a mais alegre de todas — estando na prisão. São Francisco de Assis cantava louvores a Deus mesmo doente e quase cego.\n\nA alegria não é fingir que está tudo bem. É saber que, mesmo quando não está, Deus está presente. É confiar que a Ressurreição sempre vem depois da Cruz.\n\nO cristão alegre é o melhor missionário. Ninguém quer seguir uma religião de pessoas tristes. A alegria atrai. A alegria contagia. A alegria evangeliza.",
        "Sorria hoje intencionalmente. Diga uma palavra de encorajamento a alguém. A alegria se multiplica quando é compartilhada.",
        ["A Caridade que Transforma Vidas", "A Fidelidade nas Pequenas Coisas", "Perseverança: Um Passo por Dia"]),
    ]
  },
  santos: {
    name: "👑 Santos que Transformaram o Mundo",
    description: "Histórias inspiradoras e aplicáveis",
    icon: "👑",
    readings: [
      make(1, "São Francisco de Assis – O Pobre que Enriqueceu o Mundo", "A vida radical de pobreza e amor à criação.",
        "Francisco nasceu rico, filho de um mercador de tecidos em Assis, Itália. Tinha tudo o que o mundo oferece: dinheiro, festas, amigos, ambição. Mas um encontro com um leproso mudou tudo. Naquele abraço repugnante, Francisco encontrou Cristo.\n\nAbandonou tudo. Literalmente. Devolveu até as roupas ao pai diante do bispo e disse: 'Agora tenho apenas um Pai — o Pai do Céu.' Começou a viver entre os pobres, cuidando dos doentes, pregando o Evangelho com simplicidade.\n\nSua conversão começou quando ouviu a voz de Cristo na igrejinha de São Damião: 'Francisco, vai e repara a minha casa.' Ele entendeu que não se tratava apenas do edifício, mas da Igreja inteira.\n\nSão Francisco nos ensina algo revolucionário: a verdadeira liberdade está no desapego. Quando soltamos o que o mundo oferece, abrimos as mãos para receber o que Deus dá.",
        "Doe hoje algo que você possui mas não precisa. Sinta a liberdade que o desapego traz.",
        ["Santa Teresa de Ávila – A Mística do Cotidiano", "São José – O Silêncio que Protege", "A Humildade como Força"]),
      make(2, "Santa Teresa de Ávila – A Mística do Cotidiano", "Encontrar Deus entre as panelas.",
        "Teresa de Ávila foi uma das maiores místicas da história da Igreja. Mas não era uma mulher distante e etérea. Era determinada, prática, bem-humorada e às vezes impaciente.\n\nDoutora da Igreja, reformou a Ordem Carmelita e escreveu obras fundamentais sobre a vida de oração: 'O Castelo Interior', 'Caminho de Perfeição', 'Livro da Vida'.\n\nSua frase mais célebre resume sua espiritualidade: 'Deus passeia entre as panelas.' Ou seja: não precisamos estar em uma capela para encontrar Deus. Ele está na cozinha, no trabalho, no trânsito, na conversa difícil.\n\nTeresa também dizia: 'Sejamos santos, mas não chatos.' A santidade não é rigidez — é amor vivido com alegria e liberdade.\n\nSua relação com Deus era tão pessoal que certa vez, após cair de um cavalo na lama, ela disse: 'Senhor, se é assim que tratas Teus amigos, não é de admirar que tenhas tão poucos!'",
        "Hoje, ao fazer suas tarefas cotidianas, lembre-se: Deus está ali com você. Ofereça cada atividade como oração.",
        ["São Francisco de Assis – O Pobre que Enriqueceu o Mundo", "São Padre Pio – O Santo das Chagas", "A Fidelidade nas Pequenas Coisas"]),
      make(3, "São José – O Silêncio que Protege", "O modelo de pai, esposo e homem de fé.",
        "São José é o santo do silêncio. Nos Evangelhos, não há uma única palavra registrada dele. Mas suas ações falam mais alto que qualquer discurso.\n\nEle acolheu Maria quando poderia tê-la denunciado. Protegeu Jesus quando Herodes queria matá-lo. Trabalhou como carpinteiro para sustentar a família. Obedeceu a Deus sem questionar, mesmo quando os sonhos que recebia pareciam impossíveis.\n\nPapa Francisco o chamou de 'homem que sonha' — porque é nos sonhos que Deus lhe revelou Sua vontade. E José obedeceu. Sempre.\n\nSão José nos ensina que a santidade não precisa de holofotes. O silêncio dele não era fraqueza — era força. Ele protegia com ações, não com palavras.",
        "Hoje, pratique o silêncio protetor de São José: faça algo bom por sua família sem dizer nada. Cuide em silêncio.",
        ["Santa Teresa de Ávila – A Mística do Cotidiano", "A Humildade como Força", "O Silêncio que Cura"]),
      make(4, "São Padre Pio – O Santo das Chagas", "A vida de sacrifício e intercessão.",
        "São Padre Pio de Pietrelcina recebeu os estigmas — as chagas de Cristo — em 1918, e os carregou por 50 anos até sua morte em 1968. Foi um dos santos mais extraordinários do século XX.\n\nCelebrava a Missa com tal fervor que chorava durante a consagração. Ouvia confissões por mais de 16 horas por dia. Lia os corações das pessoas e revelava pecados que elas haviam esquecido ou escondido.\n\nMas Padre Pio também sofreu intensamente: perseguição dentro da própria Igreja, noites de combate espiritual contra o demônio, dor física constante. Ele dizia: 'Reze, espere e não se preocupe. A preocupação é inútil.'\n\nSua vida nos ensina que o sofrimento unido ao de Cristo tem poder redentor. Não é sofrimento inútil — é oferenda.",
        "Quando sentir dor hoje (física ou emocional), ofereça-a a Deus: 'Senhor, uno meu sofrimento ao Teu, pela salvação das almas.'",
        ["São Francisco de Assis – O Pobre que Enriqueceu o Mundo", "Entendendo o Sofrimento como Caminho", "A Fé que Sustenta na Escuridão"]),
      make(5, "Santa Teresinha – O Caminhinho do Amor", "Grandes frutos de pequenos gestos.",
        "Santa Teresinha do Menino Jesus morreu com apenas 24 anos, em um convento carmelita na França. Não fez milagres espetaculares em vida, não pregou para multidões, não fundou nada visível.\n\nMas sua autobiografia, 'História de uma Alma', revolucionou a espiritualidade cristã. Ela propôs o 'Caminhinho': fazer pequenas coisas com grande amor. Um sorriso quando está cansada. Uma palavra gentil quando quer reclamar. Uma oração quando ninguém pede.\n\nTeresinha dizia: 'Minha vocação é o amor! No coração da Igreja, eu serei o amor.' Ela não era perfeita — era impaciente, sensível, às vezes imatura. Mas sua decisão de amar em tudo a tornou uma das maiores santas da história.\n\nO caminhinho nos mostra que a santidade está ao alcance de todos. Não são necessários grandes feitos — são necessários pequenos atos de amor constante.",
        "Escolha hoje 3 pequenos atos de amor: um sorriso, uma palavra gentil, um serviço silencioso. Ofereça cada um a Deus.",
        ["São Francisco de Assis – O Pobre que Enriqueceu o Mundo", "A Fidelidade nas Pequenas Coisas", "A Alegria como Testemunho"]),
    ]
  },
  caminhoMariano: {
    name: "🌹 Caminho Mariano",
    description: "Confiança, entrega, maternidade espiritual",
    icon: "🌹",
    readings: [
      make(1, "Maria e o Silêncio Interior", "A contemplação silenciosa de Maria.",
        "Nos Evangelhos, Maria fala pouquíssimas vezes. Mas cada palavra sua é profunda, essencial, transformadora. Maria é a mulher do silêncio — não do silêncio vazio, mas do silêncio cheio de Deus.\n\n'Maria guardava todas estas coisas, meditando-as em seu coração.' Essa frase do Evangelho revela o segredo da vida interior de Maria: ela não reagia impulsivamente, não falava por falar, não buscava atenção. Ela contemplava.\n\nEm um mundo de barulho constante, Maria nos ensina que o silêncio é o lugar onde Deus habita. É no silêncio que ouvimos Sua voz, discernimos Sua vontade, recebemos Sua paz.\n\nImitar o silêncio de Maria é uma decisão contra-cultural. Mas é também o caminho mais seguro para a paz interior.",
        "Hoje, antes de falar algo importante, pare 3 segundos e pergunte: 'Isso precisa ser dito? Isso edifica?' Pratique o silêncio de Maria.",
        ["O Papel de Maria na Salvação", "A Entrega Total a Maria", "O Silêncio que Cura"]),
      make(2, "O Papel de Maria na Salvação", "Como Maria cooperou no plano redentor de Deus.",
        "Maria não é apenas uma figura histórica — ela é parte essencial do plano de salvação. Seu 'sim' na Anunciação possibilitou a Encarnação do Verbo. Sem Maria, a história teria sido diferente.\n\nEla cooperou livremente, com fé e amor, tornando-se a Nova Eva que desfaz o nó do pecado original. Aos pés da cruz, uniu seu sofrimento ao de Jesus, oferecendo-se como mãe espiritual de toda a humanidade.\n\nA Igreja ensina que Maria é Medianeira de todas as graças — não por ser igual a Cristo, mas porque sua cooperação foi única e insubstituível. Toda graça passa por suas mãos maternas.\n\nHoje, Maria continua intercedendo por nós no céu, apresentando nossas preces a Jesus com ternura incomparável.",
        "Ao rezar hoje, comece pedindo a Maria que apresente suas orações a Jesus. Confie suas necessidades às mãos dela.",
        ["Maria e o Silêncio Interior", "A Entrega Total a Maria", "Maria e o Rosário"]),
      make(3, "A Entrega Total a Maria", "Consagração como caminho de liberdade.",
        "Consagrar-se a Maria não é perder a liberdade — é encontrá-la. São Luís de Montfort ensinava que a devoção a Maria é 'o caminho mais seguro, mais fácil e mais perfeito para chegar a Jesus Cristo.'\n\nEntregar-se a Maria significa reconhecer que ela é a Mãe mais amorosa, a intercessora mais poderosa, a guia mais segura. Quando colocamos tudo em suas mãos — nossos medos, esperanças, pecados e sonhos —, ela purifica e apresenta tudo a Jesus.\n\nA consagração não é um ato isolado — é um estilo de vida. É viver cada dia com consciência de que Maria caminha ao seu lado, protegendo, guiando, intercedendo.\n\nNão tenha medo de se entregar. Maria nunca decepciona quem confia nela.",
        "Reze hoje: 'Maria, eu me entrego totalmente a ti. Tudo o que tenho e sou, coloco em tuas mãos. Conduz-me a Jesus.'",
        ["O Papel de Maria na Salvação", "Maria e o Rosário", "Maria e o Silêncio Interior"]),
      make(4, "Maria e o Rosário", "A oração que transforma vidas.",
        "O Rosário é a oração mariana por excelência. Ao rezá-lo, meditamos nos mistérios da vida de Jesus e de Maria, unindo nossa voz à da Virgem.\n\nSão Padre Pio dizia: 'O Rosário é a arma.' Em Fátima, Nossa Senhora pediu que rezássemos o Rosário todos os dias pela paz do mundo.\n\nCada Ave Maria é um abraço espiritual de Maria. Cada mistério é uma janela para a vida de Cristo. O Rosário nos ensina a contemplar, a meditar, a entrar no silêncio onde Deus fala.\n\nNão é uma oração mecânica — quando rezado com o coração, é um encontro profundo com Maria e, através dela, com Jesus.\n\nSe você nunca rezou o Rosário, comece com uma dezena. Se já reza, peça a Maria que aprofunde sua meditação.",
        "Reze hoje ao menos uma dezena do Rosário com atenção. Medite no mistério enquanto reza cada Ave Maria.",
        ["A Entrega Total a Maria", "O Papel de Maria na Salvação", "Maria e o Silêncio Interior"]),
      make(5, "As Virtudes de Maria para Hoje", "Como imitar Maria na vida moderna.",
        "Em um mundo que valoriza o barulho, a pressa e a autopromoção, as virtudes de Maria parecem contracorrente: humildade, silêncio, obediência, confiança. Mas são exatamente essas virtudes que trazem paz interior.\n\nImitar Maria não significa ser passivo — significa ser corajoso o suficiente para confiar quando tudo parece incerto, para servir quando ninguém está olhando, para permanecer fiel quando o mundo convida à desistência.\n\nMaria viveu essas virtudes não em um convento, mas no meio da vida cotidiana: cozinhando, cuidando da casa, criando Jesus. A santidade não exige circunstâncias extraordinárias — exige amor extraordinário nas circunstâncias comuns.\n\nEscolha uma virtude de Maria para praticar esta semana. Comece pela que mais lhe falta.",
        "Escolha uma virtude de Maria (humildade, silêncio, confiança) e pratique-a conscientemente durante todo o dia de hoje.",
        ["A Entrega Total a Maria", "Maria e o Silêncio Interior", "A Humildade como Força"]),
    ]
  },
  sofrimento: {
    name: "✝ Entendendo o Sofrimento",
    description: "Dor, cruz, providência, sentido do sofrimento",
    icon: "✝",
    readings: [
      make(1, "Entendendo o Sofrimento como Caminho", "Quando a dor encontra sentido.",
        "O sofrimento é o maior mistério da existência humana. Por que sofremos? Por que Deus permite a dor? Essas perguntas não têm respostas simples, mas a fé cristã oferece uma luz única.\n\nJesus não veio eliminar o sofrimento — veio transformá-lo. Ao assumir a cruz, Ele deu ao sofrimento um sentido redentor. A dor unida à de Cristo não é desperdiçada — é oferenda que salva.\n\nSão Paulo escreveu: 'Completo na minha carne o que falta aos sofrimentos de Cristo, em favor do seu corpo, que é a Igreja.' Isso não significa que a redenção de Cristo seja incompleta, mas que Ele nos convida a participar de Sua obra salvífica.\n\nO sofrimento também nos purifica, nos amadurece, nos torna mais compassivos. Quem nunca sofreu não sabe consolar. Quem nunca chorou não sabe secar lágrimas.",
        "Se está sofrendo hoje, ofereça sua dor a Deus: 'Senhor, não entendo, mas confio. Usa meu sofrimento para o bem.'",
        ["A Cruz como Caminho de Ressurreição", "A Providência nos Momentos Escuros", "Maria aos Pés da Cruz"]),
      make(2, "A Cruz como Caminho de Ressurreição", "Sem Sexta-feira Santa, não há Domingo de Páscoa.",
        "A cruz é o símbolo mais paradoxal do cristianismo. Um instrumento de tortura se tornou sinal de esperança. A morte se tornou porta para a vida.\n\nJesus disse: 'Se alguém quer vir após mim, negue-se a si mesmo, tome a sua cruz e siga-me.' A cruz não é opcional — é parte do caminho. Mas não é o destino final. Depois da cruz, vem a ressurreição.\n\nMuitas vezes queremos a ressurreição sem a cruz. Queremos a glória sem o sofrimento. Mas Deus nos mostra que a transformação mais profunda acontece justamente no lugar da dor.\n\nA cruz que você carrega hoje — doença, perda, solidão, fracasso — não é o fim da história. É o capítulo difícil antes do capítulo glorioso.",
        "Identifique sua 'cruz' de hoje. Em vez de fugir dela, abrace-a com fé: 'Senhor, aceito esta cruz e confio na ressurreição que virá.'",
        ["Entendendo o Sofrimento como Caminho", "A Providência nos Momentos Escuros", "A Esperança nos Tempos Difíceis"]),
      make(3, "A Providência nos Momentos Escuros", "Quando Deus parece ausente.",
        "Há momentos em que Deus parece ausente. O céu parece de bronze, as orações parecem não chegar, e a dor parece infinita. Mas a Providência divina não depende do que sentimos — depende de quem Deus é.\n\nDeus não dorme. Ele não se esquece de nós. Às vezes, Seu silêncio é parte do plano. Jesus ficou três dias morto antes de ressuscitar. Três dias de silêncio total. Mas era justamente ali, no túmulo, que a maior vitória da história estava sendo preparada.\n\nA Providência age no invisível. Enquanto você espera, Deus trabalha. Enquanto você chora, Deus consola. Enquanto você duvida, Deus sustenta.\n\n'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus' (Rm 8,28). Todas. Até as que parecem más.",
        "Hoje, diante de uma situação que parece sem saída, diga: 'Deus, eu não entendo, mas sei que Tu estás agindo. Confio na Tua Providência.'",
        ["A Cruz como Caminho de Ressurreição", "Entendendo o Sofrimento como Caminho", "A Esperança nos Tempos Difíceis"]),
      make(4, "Maria aos Pés da Cruz", "O sofrimento que gera maternidade espiritual.",
        "Aos pés da cruz, Maria viveu a dor mais profunda que uma mãe pode experimentar: ver seu filho morrer. Mas ela não fugiu, não gritou, não amaldiçoou. Permaneceu de pé. Stabat Mater.\n\nNaquele momento, Jesus olhou para Maria e para João e disse: 'Mulher, eis aí o teu filho. Filho, eis aí a tua mãe.' Nessa hora, Maria se tornou Mãe de todos nós. Sua maternidade espiritual nasceu da dor.\n\nMaria nos ensina que o sofrimento aceito com fé gera frutos eternos. Sua presença silenciosa ao pé da cruz é o modelo de como devemos enfrentar nossas próprias cruzes: com fé, com dignidade, com entrega.\n\nQuando a dor parecer insuportável, lembre-se: Maria está ao seu lado, como esteve ao lado de Jesus.",
        "Quando a dor vier hoje, imagine Maria ao seu lado, segurando sua mão. Peça a ela: 'Mãe, fica comigo como ficaste com Jesus na cruz.'",
        ["Entendendo o Sofrimento como Caminho", "A Cruz como Caminho de Ressurreição", "A Entrega Total a Maria"]),
      make(5, "A Fé que Sustenta na Escuridão", "Quando acreditar é a única opção.",
        "No Sábado Santo — o dia entre a morte e a ressurreição de Jesus — Maria foi provavelmente a única pessoa no mundo que ainda acreditava. Todos os discípulos fugiram, se esconderam, duvidaram. Maria permaneceu na fé.\n\nEla não tinha provas. Não tinha sinais. Não tinha consolação. Tinha apenas a Palavra de Deus e sua decisão de acreditar. Essa é a fé mais pura que existe.\n\nMuitas vezes, somos chamados a viver nosso próprio 'Sábado Santo': dias em que tudo parece morto, em que Deus parece ausente, em que a esperança parece impossível. Mas é justamente nesses dias que a fé mais cresce.\n\nA fé não é um sentimento — é uma decisão. É escolher acreditar mesmo quando tudo grita o contrário.",
        "Diga hoje com sinceridade: 'Senhor, eu acredito em Ti. Mesmo sem ver, mesmo sem sentir, mesmo sem entender. Eu acredito.'",
        ["A Providência nos Momentos Escuros", "A Esperança nos Tempos Difíceis", "Vencendo o Medo com a Fé"]),
    ]
  },
  crescimentoFe: {
    name: "🕊 Crescimento na Fé",
    description: "Confiança, fidelidade, perseverança",
    icon: "🕊",
    readings: [
      make(1, "Confiança: A Entrega que Liberta", "Soltar o controle nas mãos de Deus.",
        "Confiar em Deus é o ato mais radical que um ser humano pode fazer. Porque significa abrir mão do controle — e nós amamos o controle. Queremos saber o que vai acontecer, queremos ter garantias, queremos segurança.\n\nMas Deus não nos oferece um mapa — Ele nos oferece Sua mão. A confiança não elimina o sofrimento, mas muda nossa relação com ele.\n\nMaria confiou quando não entendia. Nas bodas de Caná, disse: 'Fazei tudo o que Ele vos disser.' Não sabia o que Jesus faria, mas sabia que Ele faria.\n\nA ansiedade é filha da desconfiança. Quando confiamos verdadeiramente, a ansiedade perde força. Não desaparece instantaneamente, mas vai perdendo espaço para a paz.\n\nConfiar não é fácil. Mas é libertador.",
        "Entregue hoje uma preocupação específica a Deus. Escreva-a num papel e diga: 'Senhor, esta é Tua agora. Não vou mais carregar sozinho.'",
        ["Esperança que Não Engana", "Fidelidade: O Amor que Permanece", "Vencendo o Medo com a Fé"]),
      make(2, "Fidelidade: O Amor que Permanece", "Permanecer quando o mundo convida a desistir.",
        "A fidelidade é uma virtude rara. Vivemos na era do descartável: relacionamentos, promessas, compromissos — tudo parece provisório. Mas Deus não é provisório. E Sua aliança conosco é eterna.\n\nMaria foi fiel do primeiro ao último instante. Desde o 'sim' da Anunciação até os pés da cruz, nunca vacilou. Nunca desistiu. Nunca se arrependeu de ter dito 'sim'.\n\nA fidelidade não é algo que produzimos por esforço próprio. É uma graça que precisamos pedir todos os dias. Sem a graça de Deus, somos fracos, inconstantes, volúveis.\n\nSer fiel não significa ser perfeito. Significa recomeçar cada vez que cai. Significa renovar o compromisso cada manhã. Significa não desistir do caminho mesmo quando ele dói.",
        "Renove hoje um compromisso que você fez com Deus e que tem sido difícil manter. Diga: 'Senhor, eu renovo meu sim.'",
        ["Confiança: A Entrega que Liberta", "Perseverança: Um Passo por Dia", "A Fidelidade nas Pequenas Coisas"]),
      make(3, "Esperança que Não Engana", "Quando tudo parece atrasado.",
        "Às vezes você olha para a vida e pensa: 'Está demorando demais.' Demora dói. Mas esperança cristã não é otimismo ingênuo; é confiança em Deus no tempo de Deus.\n\nAbraão esperou 25 anos pelo filho prometido. Israel esperou 400 anos pela libertação do Egito. O mundo esperou milhares de anos pelo Messias. Deus não tem pressa, mas nunca se atrasa.\n\nEnquanto espera, cuide do que está ao seu alcance: sua saúde, sua casa, sua oração, seu perdão. Deus trabalha no intervalo.\n\nA esperança que não engana é aquela que se baseia nas promessas de Deus, não nas circunstâncias. As circunstâncias mudam. Deus não muda.\n\nHoje, diga com sinceridade: 'Senhor, eu espero em Ti.' E permaneça.",
        "Identifique algo pelo qual você tem esperado. Renove sua confiança: 'Senhor, eu espero no Teu tempo, não no meu.'",
        ["Confiança: A Entrega que Liberta", "A Esperança nos Tempos Difíceis", "A Providência nos Momentos Escuros"]),
      make(4, "Conversão: O Recomeço que Deus Oferece", "Nunca é tarde para voltar.",
        "A conversão não é um evento único — é um processo contínuo. Todo santo foi um pecador que não desistiu. Todo pecador é um santo em potencial.\n\nSão Paulo perseguia cristãos antes de se tornar o maior apóstolo. Santo Agostinho viveu anos em pecado antes de se converter. Maria Madalena era conhecida por seus pecados antes de se tornar a primeira testemunha da Ressurreição.\n\nDeus não espera que você seja perfeito para te aceitar. Ele te aceita como está e te transforma pelo caminho. A conversão começa com uma decisão simples: 'Eu quero mudar. Eu quero me aproximar de Deus.'\n\nNão importa quantas vezes você caiu. O que importa é que Deus está sempre de braços abertos, esperando sua volta.",
        "Examine sua consciência hoje. Identifique uma área que precisa de conversão. Peça perdão a Deus e dê o primeiro passo.",
        ["Fidelidade: O Amor que Permanece", "Confiança: A Entrega que Liberta", "A Cruz como Caminho de Ressurreição"]),
      make(5, "Santidade: O Chamado para Todos", "Você também é chamado à santidade.",
        "A santidade não é privilégio de poucos eleitos. O Concílio Vaticano II declarou: 'Todos os fiéis são chamados à santidade.' Todos. Sem exceção.\n\nSer santo não significa ser perfeito, não ter defeitos ou viver isolado do mundo. Significa viver em estado de graça, amando a Deus acima de tudo e ao próximo como a si mesmo.\n\nA santidade se vive no cotidiano: no trabalho honesto, no amor à família, no serviço ao próximo, na oração diária, na frequência aos sacramentos.\n\nVocê não precisa fazer milagres para ser santo. Precisa amar. Amar com constância, com paciência, com entrega. Amar mesmo quando é difícil. Amar mesmo quando não é correspondido.\n\nDeus te chama pelo nome. Ele tem um plano único para a sua santidade. Basta dizer 'sim'.",
        "Reze hoje: 'Senhor, eu aceito Teu chamado à santidade. Mostra-me o caminho e dá-me a graça de perseverar.'",
        ["Conversão: O Recomeço que Deus Oferece", "A Fidelidade nas Pequenas Coisas", "A Alegria como Testemunho"]),
    ]
  },
  fundamentos: {
    name: "📖 Fundamentos da Vida Cristã",
    description: "Sacramentos, oração, consciência, graça",
    icon: "📖",
    readings: [
      make(1, "O que é a Graça Santificante", "O dom que nos torna filhos de Deus.",
        "A graça santificante é o dom sobrenatural que Deus derrama em nossa alma no Batismo, tornando-nos participantes da natureza divina. É ela que nos faz filhos de Deus, templos do Espírito Santo e herdeiros do céu.\n\nSem a graça, não podemos fazer nada de sobrenatural. Com ela, até as ações mais simples ganham valor eterno. Lavar louça em estado de graça vale mais que mil boas obras feitas em pecado mortal.\n\nO pecado mortal destrói a graça santificante; a Confissão a restaura. Por isso a vida sacramental é tão importante: ela nos mantém conectados à fonte da graça.\n\nDeus oferece Sua graça gratuitamente, mas exige nossa cooperação. É como a chuva: ela cai igualmente sobre todas as terras, mas só germina onde o solo foi preparado.",
        "Examine se está em estado de graça. Se necessário, faça uma boa confissão. A graça é o maior tesouro que podemos possuir.",
        ["Os Sacramentos como Encontro com Cristo", "A Oração como Relacionamento", "Santidade: O Chamado para Todos"]),
      make(2, "Os Sacramentos como Encontro com Cristo", "Cada sacramento é experiência viva do amor de Deus.",
        "Os sete sacramentos não são meros rituais — são encontros reais com Cristo. No Batismo, morremos e ressuscitamos com Ele. Na Eucaristia, recebemos Seu Corpo e Sangue. Na Confissão, experimentamos Sua misericórdia.\n\nSanto Tomás de Aquino ensinava que os sacramentos são 'sinais eficazes da graça' — ou seja, não apenas representam a graça, mas realmente a comunicam. Quando o padre absolve seus pecados, é Cristo quem perdoa. Quando recebemos a Comunhão, é Cristo quem vem a nós.\n\nParticipar dos sacramentos com consciência e devoção transforma nossa vida. Não são obrigações burocráticas — são presentes de amor.\n\nA Eucaristia é 'fonte e cume de toda a vida cristã'. Quem comunga dignamente recebe o próprio Deus. Não existe encontro mais íntimo possível.",
        "Na próxima vez que participar de um sacramento (Missa, Confissão), vá com total consciência de que está encontrando Cristo pessoalmente.",
        ["O que é a Graça Santificante", "A Oração como Relacionamento", "Conversão: O Recomeço que Deus Oferece"]),
      make(3, "A Oração como Relacionamento", "Rezar não é recitar — é conversar com Deus.",
        "Muitas pessoas abandonam a oração porque a tratam como uma lista de pedidos ou uma obrigação. Mas a oração é, antes de tudo, um relacionamento.\n\nSanta Teresa de Ávila definiu a oração como 'um trato de amizade, um estar a sós com quem sabemos que nos ama.' Não é monólogo — é diálogo. Inclui falar, ouvir e simplesmente estar presente.\n\nExistem muitas formas de rezar: oração vocal (como o Rosário), oração mental (meditação), oração contemplativa (silêncio amoroso), oração do coração (como a Oração de Jesus). Cada pessoa é chamada a encontrar a forma que mais a conecta com Deus.\n\nO mais importante não é o quanto você reza, mas o quanto ama quando reza. Um Pai Nosso rezado com o coração vale mais que mil orações ditas mecanicamente.",
        "Hoje, antes de rezar, diga: 'Deus, eu não vim cumprir uma obrigação. Vim conversar com Tigo.' Depois, reze com o coração, não apenas com os lábios.",
        ["O Silêncio que Cura", "O Caminho da Contemplação", "Os Sacramentos como Encontro com Cristo"]),
      make(4, "Exame de Consciência: O Espelho da Alma", "A prática que transforma a vida moral.",
        "O exame de consciência é uma das práticas espirituais mais poderosas e mais negligenciadas. Consiste em, ao final do dia, olhar para trás e revisar: onde vi Deus hoje? Onde me afastei dEle? Pelo que sou grato? Pelo que preciso pedir perdão?\n\nSanto Inácio de Loyola considerava o exame de consciência mais importante que a própria meditação. Ele dizia que, se tivesse que escolher apenas uma prática espiritual, escolheria esta.\n\nO exame não é para se culpar. É para crescer. É olhar com honestidade e com esperança, sabendo que Deus não condena — Ele transforma.\n\n5 passos simples: 1) Agradeça. 2) Peça luz ao Espírito Santo. 3) Revise o dia. 4) Peça perdão. 5) Faça um propósito para amanhã.",
        "Antes de dormir hoje, faça um exame de consciência de 5 minutos seguindo os 5 passos. Comece por gratidão.",
        ["A Oração como Relacionamento", "O que é a Graça Santificante", "Conversão: O Recomeço que Deus Oferece"]),
      make(5, "A Palavra de Deus na Vida Diária", "A Bíblia como alimento espiritual.",
        "A Bíblia não é um livro de história — é a Palavra viva de Deus que fala diretamente ao seu coração hoje. São Jerônimo dizia: 'Ignorar as Escrituras é ignorar Cristo.'\n\nLer a Bíblia não é estudar um documento antigo. É ouvir Deus falando. Cada versículo pode ser luz para uma decisão, consolo para uma dor, força para uma tentação.\n\nA Lectio Divina (Leitura Orante) é um método antigo e eficaz: 1) Leia o texto lentamente. 2) Medite no que chama atenção. 3) Reze a partir do que meditou. 4) Contemple em silêncio.\n\nNão é necessário ler capítulos inteiros. Às vezes, um único versículo é suficiente para alimentar a alma por um dia inteiro.\n\nFaça da Palavra de Deus seu pão diário. Sem ela, a alma passa fome.",
        "Leia hoje o Salmo 23 lentamente, 3 vezes. Na primeira, apenas leia. Na segunda, medite. Na terceira, reze com as palavras do salmo.",
        ["A Oração como Relacionamento", "O Silêncio que Cura", "Os Sacramentos como Encontro com Cristo"]),
    ]
  },
};