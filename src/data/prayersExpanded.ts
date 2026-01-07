// Orações por tema (107+ orações) — cada oração com conteúdo único de 1000+ caracteres
import { saintsCategory } from './saintsPrayers';

type Prayer = { id: number; title: string; content: string };

type PrayerCategory = {
  name: string;
  description: string;
  icon: string;
  prayers: Prayer[];
};

const basePrayerCategories: Record<string, PrayerCategory> = {
  cura: {
    name: "Cura",
    description: "Cura física, emocional e espiritual",
    icon: "Heart",
    prayers: [
      {
        id: 1,
        title: "Oração de Cura Profunda",
        content: `Glorioso São Rafael Arcanjo, medicina de Deus, eu me coloco diante da tua presença reconhecendo minhas fragilidades e dores. Tu que acompanhaste Tobias em sua jornada e curaste a cegueira de Tobit, intercede por mim neste momento de necessidade.

Senhor Jesus, médico divino das almas e dos corpos, toca com tua mão misericordiosa cada parte de mim que precisa de cura. Cura as feridas que carrego no corpo, aquelas que a medicina humana conhece e aquelas que só tu podes ver. Cura as feridas da minha alma, os traumas escondidos, as memórias dolorosas que ainda ecoam em meu interior.

Eu te entrego cada célula do meu corpo, cada pensamento da minha mente, cada emoção do meu coração. Onde há doença, derrama tua saúde. Onde há dor, derrama teu alívio. Onde há desespero, derrama tua esperança.

São Rafael, caminha comigo neste processo de cura. Ajuda-me a confiar no tempo de Deus, mesmo quando a cura parece demorar. Fortalece minha fé para que eu não desanime, e dá-me paciência para aceitar o caminho que o Senhor traçou para mim.

Pai celestial, se for da tua vontade, restaura minha saúde completamente. Mas acima de tudo, dá-me a graça de aceitar tua vontade santa, sabendo que tu transformas todas as coisas para o bem daqueles que te amam. Amém.`
      },
      {
        id: 2,
        title: "Oração pela Cura da Ansiedade",
        content: `Senhor Jesus Cristo, Príncipe da Paz, eu venho a ti com o coração acelerado e a mente inquieta. A ansiedade tem roubado minha paz, meu sono, minha alegria de viver. Cada dia parece uma batalha contra pensamentos que não param, preocupações que se multiplicam, medos que parecem maiores que minha fé.

São Rafael Arcanjo, tu que és o curador enviado por Deus, intercede por minha mente cansada. Pede ao Senhor que derrame sobre mim o óleo da serenidade, que acalme as tempestades internas que me consomem.

Espírito Santo, Consolador divino, entra nos recantos mais profundos do meu ser. Toca cada nervo tenso, cada músculo contraído, cada pensamento acelerado. Ensina-me a respirar tua paz, a confiar no teu cuidado, a viver um dia de cada vez.

Eu renuncio a todo espírito de ansiedade, de medo, de preocupação excessiva. Em nome de Jesus, ordeno que a paz de Deus governe meu coração e minha mente. Escolho confiar nas promessas do Senhor: "Não andeis ansiosos por coisa alguma."

Maria, Mãe serena, ensina-me a contemplar as situações da vida com teu coração tranquilo. Ajuda-me a guardar as palavras de Deus e a meditar nelas, encontrando nelas minha fortaleza.

Senhor, transforma minha ansiedade em oração, meu medo em fé, minha inquietação em confiança plena em ti. Amém.`
      },
      {
        id: 3,
        title: "Oração pela Cura Interior",
        content: `Pai celestial, fonte de toda cura e restauração, eu me apresento diante de ti como sou: ferido por dentro, marcado por experiências dolorosas, carregando cicatrizes que ninguém vê. Tu conheces cada dor que guardo em segredo, cada lágrima que engoli, cada rejeição que sofri.

São Rafael Arcanjo, curador enviado do céu, guia Jesus até as profundezas do meu ser. Leva-o aos porões da minha alma onde escondi as memórias que me machucam, os sentimentos que me envergonham, as feridas que fingi não existirem.

Senhor Jesus, entra em cada sala do meu coração. Onde há amargura, planta perdão. Onde há rejeição, planta aceitação. Onde há abandono, planta tua presença fiel. Onde há vergonha, planta tua dignidade. Onde há medo, planta tua coragem.

Cura-me das palavras duras que ouvi e que ainda ecoam em minha mente. Cura-me das ausências que me marcaram, dos abandonos que me feriram, das traições que me endureceram. Cura-me da criança ferida que ainda chora dentro de mim.

Espírito Santo, reconstrói o que foi destruído. Restaura minha capacidade de confiar, de amar, de me entregar. Dá-me coragem para enfrentar meu passado sem ser prisioneiro dele, para olhar para frente com esperança renovada.

Maria, Mãe de ternura, acolhe-me em teus braços maternais. Consola-me como só uma mãe sabe fazer. Apresenta minhas dores a teu Filho e pede por minha cura completa. Amém.`
      },
      {
        id: 4,
        title: "Oração pela Cura do Corpo",
        content: `Senhor Deus, Criador de todo o meu ser, tu que formaste cada parte do meu corpo com amor e sabedoria infinita, eu venho a ti pedindo cura para esta enfermidade que me aflige. Tu conheces cada órgão, cada tecido, cada célula do meu organismo. Nada está oculto aos teus olhos.

São Rafael Arcanjo, cujo nome significa "Deus cura", intercede por mim junto ao trono da misericórdia. Tu que devolveste a visão a Tobit, pede ao Senhor que restaure minha saúde física, que cure esta doença que enfraquece meu corpo.

Jesus, tu que curaste cegos, paralíticos, leprosos e ressuscitaste mortos, eu creio que tens poder para me curar. Toca meu corpo com tuas mãos divinas. Onde há inflamação, traz paz. Onde há infecção, traz purificação. Onde há dor, traz alívio. Onde há fraqueza, traz força.

Eu entrego aos teus cuidados cada exame médico, cada diagnóstico, cada tratamento. Abençoa os médicos e profissionais de saúde que cuidam de mim. Dá-lhes sabedoria e discernimento para encontrarem o melhor caminho para minha recuperação.

Pai, eu sei que meu corpo é templo do Espírito Santo. Ajuda-me a cuidar dele com responsabilidade, a fazer minha parte no processo de cura, a ter paciência durante a recuperação.

Se for da tua vontade, restaura completamente minha saúde. Mas acima de tudo, fortalece minha fé para confiar em ti em todas as circunstâncias. Amém.`
      },
      {
        id: 5,
        title: "Oração pela Cura da Alma",
        content: `Deus misericordioso, médico das almas, eu venho a ti reconhecendo que minha alma está doente. Há uma tristeza profunda que não consigo explicar, um vazio que nada preenche, uma sede que nenhuma fonte terrena sacia. Minha alma está cansada, ferida, desanimada.

São Rafael Arcanjo, guia das almas peregrinas, conduz-me até as águas tranquilas onde o Bom Pastor restaura as forças dos seus. Intercede por minha alma aflita, pede ao Senhor que derrame sobre mim o bálsamo da sua consolação.

Senhor Jesus, tu que vieste para que tenhamos vida em abundância, devolve à minha alma a alegria da salvação. Restaura em mim o entusiasmo pela vida, o desejo de caminhar, a capacidade de sonhar. Cura a apatia que me paralisa, a indiferença que me isola, o desânimo que me rouba a esperança.

Espírito Santo, sopra sobre minha alma como sopraste sobre os ossos secos na visão de Ezequiel. Traz vida onde há morte, esperança onde há desespero, luz onde há trevas. Renova em mim a paixão pela vida, pelo bem, pela beleza.

Maria, Mãe das almas aflitas, intercede por mim. Tu que passaste pela dor mais profunda ao pé da cruz e permaneceste firme na fé, ensina-me a confiar mesmo quando tudo parece perdido.

Pai, cura minha alma, restaura meu espírito, renova minhas forças. Faz-me experimentar novamente a alegria de ser teu filho amado. Amém.`
      },
      {
        id: 6,
        title: "Oração pela Cura da Depressão",
        content: `Senhor Jesus, luz do mundo, eu clamo a ti das profundezas do meu ser. A escuridão da depressão me envolve, roubando as cores da vida, o sabor dos dias, a força para continuar. Há dias em que levantar da cama parece uma montanha impossível de escalar.

São Rafael Arcanjo, mensageiro da esperança divina, vem até mim neste vale de sombras. Segura minha mão quando eu não conseguir caminhar sozinho. Intercede junto a Deus para que Ele ilumine esta noite que parece não ter fim.

Pai celestial, tu vês o peso que carrego, a luta silenciosa que travo todos os dias. Tu conheces as lágrimas que derramo escondido, os pensamentos sombrios que me assaltam, a exaustão de fingir estar bem quando por dentro estou desmoronando.

Eu não te peço que removes instantaneamente esta dor, mas que caminhes comigo através dela. Dá-me forças para buscar ajuda, coragem para aceitar tratamento, paciência para o processo de recuperação. Abençoa os profissionais de saúde mental que podem me auxiliar nesta jornada.

Espírito Santo, Consolador divino, habita em mim. Quando os pensamentos negativos vierem, substitua-os por tua verdade. Quando a desesperança bater à porta, enche-me de tua presença que renova todas as coisas.

Senhor, eu creio que há luz no fim deste túnel, mesmo quando não consigo enxergá-la. Sustenta minha fé vacilante e guia-me para fora desta escuridão. Amém.`
      },
      {
        id: 7,
        title: "Oração pela Cura da Família",
        content: `Deus de amor, Pai de toda família no céu e na terra, eu te apresento minha família que precisa de cura. Há feridas abertas entre nós, mágoas antigas que nunca foram tratadas, palavras duras que ainda ecoam, silêncios que machucam mais que gritos.

São Rafael Arcanjo, que acompanhaste e curaste a família de Tobias, caminha conosco. Entra em nossa casa trazendo a paz de Deus, a reconciliação que só vem do alto, o perdão que liberta.

Senhor Jesus, tu que vieste para reunir os filhos dispersos, reúne nossa família novamente. Cura as divisões que nos separam, os ressentimentos que nos afastam, os orgulhos que impedem o diálogo. Onde há rancor, planta perdão. Onde há indiferença, planta amor. Onde há distância, planta proximidade.

Cura as feridas que pais causaram em filhos, as mágoas que irmãos guardam entre si, as decepções entre esposos. Restaura os laços que se romperam, reconstrói as pontes que caíram, reacende o amor que esfriou.

Maria, Rainha das famílias, intercede por nós. Tu que viveste em família com José e Jesus, ensina-nos a conviver com paciência, a perdoar com generosidade, a amar com fidelidade.

Pai, transforma nossa casa em um lar de paz, nossa família em uma escola de amor, nosso convívio em uma antecipação do céu. Cura-nos e une-nos para sempre em teu amor. Amém.`
      },
      {
        id: 8,
        title: "Oração pela Cura de Vícios",
        content: `Senhor Jesus Cristo, libertador dos cativos, eu venho a ti preso nas correntes de um vício que me escraviza. Já tentei me libertar por minhas próprias forças e falhei. Reconheço minha fraqueza e minha dependência da tua graça para ser livre.

São Rafael Arcanjo, médico das almas feridas, intercede por mim. Pede ao Senhor que quebre as correntes que me prendem, que cure a ferida interior que me leva a buscar refúgio naquilo que me destrói.

Pai misericordioso, tu conheces a origem deste vício, a dor que tentei anestesiar, o vazio que tentei preencher com aquilo que me faz mal. Cura a raiz do problema, não apenas os sintomas. Toca na ferida original que abriu porta para esta escravidão.

Eu renuncio a todo poder que este vício tem sobre minha vida. Em nome de Jesus, declaro que sou livre. Não pertenço mais a esta dependência, pertenço a Cristo que me comprou com seu sangue.

Espírito Santo, preenche o vazio que me levou a buscar satisfação onde não há. Dá-me a força para resistir às tentações, a sabedoria para evitar as ocasiões de queda, a humildade para pedir ajuda quando precisar.

Senhor, guia-me a buscar o tratamento adequado. Abençoa os grupos de apoio, os profissionais de saúde, as pessoas que podem me ajudar nesta caminhada para a liberdade. Creio que tu podes me curar completamente. Amém.`
      },
      {
        id: 9,
        title: "Oração pela Cura de Traumas",
        content: `Deus de toda consolação, eu trago a ti os traumas que marcaram minha história. Há eventos do passado que ainda me assombram, memórias que disparam dor mesmo depois de tanto tempo, feridas que pareciam cicatrizadas mas que ainda sangram por dentro.

São Rafael Arcanjo, curador enviado do céu, guia o Senhor Jesus até as cenas traumáticas da minha vida. Que Ele entre em cada memória dolorosa trazendo sua presença curadora, sua luz redentora, seu amor restaurador.

Senhor Jesus, tu não estavas ausente quando aquilo aconteceu. Tu estavas presente, chorando comigo, sofrendo comigo. Mostra-me onde estavas nos momentos mais difíceis. Revela-me teu olhar de compaixão, teus braços estendidos para me acolher.

Cura as memórias traumáticas que ainda me perseguem. Transforma as cenas de dor em oportunidades de encontrar teu amor. Onde vi abandono, mostra-me tua presença. Onde vi maldade, mostra-me tua proteção. Onde vi desespero, mostra-me tua esperança.

Espírito Santo, reconstrói minha capacidade de confiar, de me sentir seguro, de viver sem medo. Liberta-me dos gatilhos que disparam a dor, das reações automáticas de proteção que já não preciso mais.

Maria, Mãe de ternura, embala-me em teus braços como uma criança ferida. Consola-me, protege-me, apresenta-me a teu Filho para que Ele complete minha cura. Amém.`
      },
      {
        id: 10,
        title: "Oração por Exames e Diagnósticos",
        content: `Senhor Deus, Senhor da vida e da ciência, eu te entrego este momento de espera por resultados médicos. A ansiedade bate à porta do meu coração, o medo tenta roubar minha paz. Mas eu escolho confiar em ti, que tudo sabe e tudo pode.

São Rafael Arcanjo, patrono dos enfermos e dos profissionais de saúde, intercede por mim. Acompanha cada exame, cada análise, cada procedimento. Ilumina a mente dos médicos para que interpretem corretamente os resultados.

Senhor Jesus, médico divino, eu te peço: se houver algo errado em meu corpo, que seja detectado a tempo. Dá sabedoria aos profissionais de saúde para encontrarem o diagnóstico correto e o tratamento adequado.

Pai celestial, afasta de mim o medo paralisante da doença. Ajuda-me a confiar que, seja qual for o resultado, tu estarás comigo. Não me abandones na sala de espera, não me deixe sozinho na hora de receber a notícia, boa ou difícil.

Se os resultados forem bons, que eu te glorifique e cuide melhor da saúde que me deste. Se os resultados trouxerem desafios, que eu encontre em ti a força para enfrentá-los, a esperança para continuar lutando, a paz para aceitar o que não posso mudar.

Maria, Saúde dos Enfermos, permanece comigo nesta espera. Acalma meu coração e fortalece minha fé. Que eu entregue cada resultado nas mãos de Deus, confiando em sua providência amorosa. Amém.`
      },
      {
        id: 11,
        title: "Oração de Gratidão pela Cura",
        content: `Senhor Deus, fonte de toda cura e restauração, eu venho a ti hoje com o coração transbordando de gratidão. Tu me ouviste quando clamei, estendeste tua mão quando eu estava afundando, trouxeste cura quando tudo parecia perdido.

São Rafael Arcanjo, instrumento da cura divina, obrigado por interceder por mim. Obrigado por apresentar minhas dores ao trono de Deus, por acompanhar minha jornada de recuperação, por me dar esperança nos dias difíceis.

Senhor Jesus, médico divino das almas e dos corpos, tu tocaste em mim e fui curado. Tu olhaste para mim e fui restaurado. Tu falaste e a doença obedeceu. Como os dez leprosos, eu poderia ter seguido meu caminho sem olhar para trás. Mas hoje volto para agradecer, para testemunhar teu poder, para glorificar teu nome.

Pai celestial, eu reconheço que a cura veio de ti. Mesmo que tenhas usado médicos, remédios, tratamentos humanos, sei que a fonte de toda cura és tu. A ciência foi instrumento, mas tu foste o agente. Obrigado por cada profissional de saúde que cruzou meu caminho.

Maria, Saúde dos Enfermos, obrigado por tua intercessão maternal. Tu ouviste meu clamor e apresentaste a Jesus. Nunca me esquecerei desta graça.

Que minha vida curada seja um testemunho do teu amor. Que eu use minha saúde restaurada para servir a ti e ao próximo. Que eu nunca esqueça de onde vim e para onde tu me trouxeste. Glória a ti, Senhor, pelos séculos dos séculos. Amém.`
      }
    ]
  },
  trabalho: {
    name: "Trabalho",
    description: "Bênção na carreira, oportunidades e paz profissional",
    icon: "Briefcase",
    prayers: [
      {
        id: 1,
        title: "Oração Matinal pelo Trabalho",
        content: `Senhor Deus, Criador do universo e de todo trabalho honesto, eu te consagro este dia que começa. Antes de abrir o computador, antes de atender a primeira ligação, antes de iniciar qualquer tarefa, eu paro para colocar tudo em tuas mãos.

Santos Arcanjos Miguel, Gabriel e Rafael, acompanhai-me nesta jornada de trabalho. São Miguel, protegei-me de todo mal, de intrigas, de injustiças, de acidentes. São Gabriel, inspirai minha comunicação, minhas palavras, minhas decisões. São Rafael, guiai meus caminhos, minhas reuniões, minhas negociações.

Senhor Jesus, que trabalhaste como carpinteiro em Nazaré, abençoa minhas mãos para que produzam trabalho de qualidade. Abençoa minha mente para que tenha clareza e foco. Abençoa meu coração para que eu trabalhe com integridade e amor ao próximo.

Pai celestial, eu te peço sabedoria para tomar decisões difíceis, paciência para lidar com pessoas complicadas, humildade para reconhecer meus erros e aprender com eles. Livra-me da preguiça que paralisa e da ansiedade que consome.

Que meu trabalho hoje seja uma oferenda agradável a ti. Que eu veja em cada tarefa uma oportunidade de servir, em cada colega uma pessoa criada à tua imagem, em cada desafio uma chance de crescer.

Maria, Mãe trabalhadora de Nazaré, ensina-me a fazer o ordinário de forma extraordinária, a santificar o cotidiano com amor e dedicação. Amém.`
      },
      {
        id: 2,
        title: "Oração por Novo Emprego",
        content: `Deus de toda providência, Pai que alimenta as aves do céu e veste os lírios do campo, eu clamo a ti neste momento de desemprego. Tu conheces minhas necessidades, minhas contas, minhas responsabilidades. Tu vês o peso que carrego, a angústia de não saber como prover para minha família.

Santos Arcanjos, intercessores poderosos, apresentai minha causa ao trono de Deus. São Gabriel, levai minha súplica até o céu. São Miguel, combatei todo obstáculo que impede a chegada da minha bênção. São Rafael, guiai-me até a porta certa, a oportunidade preparada por Deus para mim.

Senhor Jesus, tu que chamaste pescadores para serem apóstolos, chama-me para um trabalho digno. Abre portas que ninguém pode fechar, cria oportunidades onde parecem não existir, conecta-me com as pessoas certas no momento certo.

Pai, enquanto espero, ajuda-me a manter a fé, a esperança, a dignidade. Não permitas que eu me desespere ou faça escolhas precipitadas. Dá-me sabedoria para me preparar, para melhorar minhas habilidades, para buscar ativamente sem ansiedade.

Abençoa meu currículo, minhas entrevistas, minhas negociações. Coloca favor sobre mim diante dos empregadores. Que eu encontre não apenas um emprego, mas uma vocação onde possa servir a ti e ao próximo.

Maria, Mãe providente, intercede por minha família neste tempo de espera. Sustenta nossa esperança e fortalece nossa união. Amém.`
      },
      {
        id: 3,
        title: "Oração contra Injustiças no Trabalho",
        content: `Senhor Deus, justo Juiz, eu clamo a ti diante das injustiças que sofro no trabalho. Tu vês o que acontece quando ninguém está olhando, ouves as palavras ditas às escondidas, conheces as intenções de cada coração. Nada te é oculto.

São Miguel Arcanjo, defensor dos injustiçados, ergue tua espada em minha defesa. Combate os que tramam contra mim, os que roubam meu crédito, os que mancham minha reputação. Não permitas que a injustiça prevaleça.

Senhor Jesus, tu que foste condenado injustamente, entende minha dor. Dá-me forças para suportar o que não posso mudar, sabedoria para lutar pelo que devo mudar, e discernimento para distinguir um do outro.

Pai celestial, guarda meu coração da amargura e do desejo de vingança. Não permitas que a injustiça que sofro me transforme em alguém injusto. Ajuda-me a manter minha integridade mesmo quando os outros agem com desonestidade.

Se eu devo confrontar, dá-me coragem e palavras certas. Se eu devo esperar, dá-me paciência. Se eu devo sair, abre-me outras portas. Guia-me em cada decisão.

Tu prometeste que um dia enxugarás toda lágrima e farás justiça. Enquanto esse dia não chega, sustenta-me com tua graça. Que eu possa um dia olhar para trás e ver tua mão conduzindo cada situação para o meu bem.

Maria, consoladora dos aflitos, permanece comigo nesta batalha. Amém.`
      },
      {
        id: 4,
        title: "Oração por Sabedoria nas Decisões",
        content: `Deus de infinita sabedoria, fonte de todo conhecimento e discernimento, eu venho a ti com decisões importantes pela frente. O caminho à minha frente se divide, e eu não sei qual direção tomar. Ilumina minha mente e guia meus passos.

São Gabriel Arcanjo, mensageiro de Deus que levas a palavra divina aos homens, transmite-me a sabedoria do alto. Ajuda-me a ouvir a voz de Deus no silêncio da oração, a discernir sua vontade em meio às opções que se apresentam.

Senhor Jesus, tu que és a Sabedoria encarnada, habita em meu coração e pensa através de mim. Quando eu não souber o que fazer, faz tu em mim. Quando eu não enxergar o caminho, sê tu minha luz.

Pai celestial, livra-me das decisões precipitadas, tomadas na emoção ou na pressão. Livra-me também da paralisia de quem nunca decide por medo de errar. Dá-me o equilíbrio de quem pondera com calma e age com determinação.

Ajuda-me a considerar não apenas meus interesses, mas os de todos os envolvidos. Que minhas decisões sejam justas, éticas, alinhadas com teus valores. Que eu não venda minha alma por sucesso passageiro.

Espírito Santo, dom de conselho, guia-me. Mostra-me os prós e contras que não estou vendo, as consequências que não consigo prever, as oportunidades que estou ignorando.

Maria, Sede da Sabedoria, intercede por mim. Que eu decida como tu decidiste: com fé, coragem e total entrega à vontade de Deus. Amém.`
      },
      {
        id: 5,
        title: "Oração por Favor e Portas Abertas",
        content: `Senhor Deus, que abres portas que nenhum homem pode fechar, eu clamo por teu favor sobre minha vida profissional. Tu que deste favor a José diante de Faraó, a Daniel diante do rei, a Ester diante de Assuero, derrama esse mesmo favor sobre mim.

Santos Arcanjos, mensageiros do trono de Deus, levai minha causa até o céu. Intercedei para que as portas certas se abram, as oportunidades certas surjam, as pessoas certas cruzem meu caminho.

Senhor Jesus, tu que prometeste que quem pede recebe, quem busca encontra, e a quem bate se abre, eu bato às portas do céu com fé. Abre para mim portas de oportunidade, de crescimento, de prosperidade. Não qualquer porta, mas as que tu preparaste especificamente para mim.

Pai celestial, coloca teu favor sobre mim diante de chefes, clientes, parceiros, investidores. Que eles vejam em mim algo especial, não por meus méritos, mas por tua graça derramada sobre minha vida.

Remove os obstáculos que impedem meu avanço. Derruba os muros que bloqueiam meu caminho. Aplaina os caminhos tortuosos. Onde há portas fechadas por mãos humanas, usa tuas mãos divinas para abri-las.

Mas também me dá sabedoria para reconhecer as portas que tu fechas para minha proteção. Nem toda porta fechada é inimiga; algumas são tua proteção. Ajuda-me a discernir.

Maria, porta do céu, intercede por mim. Que eu encontre em ti a porta que leva a Jesus, e nele, todas as bênçãos que o Pai preparou para mim. Amém.`
      },
      {
        id: 6,
        title: "Oração por Paz no Ambiente de Trabalho",
        content: `Senhor Jesus Cristo, Príncipe da Paz, eu te peço paz para meu ambiente de trabalho. Há tensões no ar, conflitos latentes, relacionamentos desgastados. O clima está pesado, e isso afeta minha produtividade, minha saúde, minha alegria de trabalhar.

São Rafael Arcanjo, curador das relações feridas, caminha pelos corredores do meu trabalho trazendo a paz de Deus. Toca o coração de cada pessoa, acalma os ânimos exaltados, cura as mágoas guardadas.

Pai celestial, onde há conflito, traz reconciliação. Onde há competição destrutiva, traz colaboração. Onde há fofoca, traz verdade. Onde há desrespeito, traz dignidade. Transforma meu ambiente de trabalho em um lugar de paz e cooperação.

Ajuda-me a ser instrumento da tua paz. Que eu não alimente conflitos, mas os resolva. Que eu não espalhe fofocas, mas as interrompa. Que eu não responda agressão com agressão, mas com mansidão que desarma.

Senhor, sei que não posso mudar as pessoas, mas posso mudar minhas reações. Dá-me autocontrole para não responder no calor da emoção, sabedoria para escolher minhas batalhas, humildade para reconhecer minha parte nos conflitos.

Abençoa cada colega de trabalho, mesmo os mais difíceis. Cada um carrega suas dores e lutas que eu desconheço. Dá-me compaixão para olhar além do comportamento e ver a pessoa ferida por trás dele.

Maria, Rainha da Paz, intercede por meu ambiente de trabalho. Que tua paz reine entre nós. Amém.`
      },
      {
        id: 7,
        title: "Oração por Proteção Contra Inveja",
        content: `Senhor Deus, meu escudo e proteção, eu clamo tua cobertura contra a inveja que me rodeia. Tu vês os olhares invejosos, ouves as palavras de ciúme, conheces os corações que desejam meu fracasso em vez do meu sucesso.

São Miguel Arcanjo, guerreiro celestial, protege-me de todo mal espiritual que a inveja atrai. A inveja não é apenas sentimento humano; ela abre portas para ataques espirituais. Fecha essas portas com tua espada de luz.

Senhor Jesus, tu que foste invejado pelos líderes religiosos de teu tempo, entende essa luta. Protege-me das armadilhas preparadas por mãos invejosas, das sabotagens planejadas em segredo, das calúnias espalhadas às escondidas.

Pai celestial, não permitas que a inveja alheia limite minhas bênçãos. O que tu preparaste para mim, ninguém pode roubar. O que tu abençoaste, ninguém pode amaldiçoar. Eu descanso na segurança de que estou sob tua proteção.

Ao mesmo tempo, guarda meu próprio coração da inveja. Que eu não inveje o sucesso dos outros, mas me alegre com eles. Que eu não deseje o mal a ninguém, mesmo aos que me desejam mal. Livra-me de retribuir inveja com inveja.

Transforma os invejosos em admiradores, os opositores em apoiadores. Mas se isso não for possível, dá-me graça para brilhar mesmo assim, sem me diminuir pelo medo do que dirão.

Maria, cheia de graça, protege-me sob teu manto. Amém.`
      },
      {
        id: 8,
        title: "Oração por Foco e Disciplina",
        content: `Senhor Deus, Deus de ordem e propósito, eu venho a ti reconhecendo minha dificuldade em manter o foco. As distrações me cercam por todos os lados, a procrastinação me seduz, a disciplina parece uma montanha impossível de escalar.

São Gabriel Arcanjo, mensageiro da palavra divina, ajuda-me a ouvir a voz de Deus acima do barulho das distrações. Que eu mantenha meus olhos fixos nas prioridades que Deus colocou diante de mim.

Senhor Jesus, tu que mantiveste o foco em tua missão mesmo diante das maiores tentações, ensina-me essa determinação. Quando a distração vier, traz minha mente de volta. Quando a preguiça bater, levanta-me para a ação.

Pai celestial, ordena meu dia, minhas prioridades, meu tempo. Ajuda-me a fazer primeiro o que é primeiro, a dizer não ao que não é essencial, a proteger meu tempo e minha energia para o que realmente importa.

Dá-me disciplina para cumprir compromissos, mesmo quando não tenho vontade. Dá-me consistência para manter rotinas saudáveis, mesmo quando o entusiasmo passar. Dá-me perseverança para continuar, mesmo quando os resultados demoram.

Espírito Santo, dom de fortaleza, habita em mim. Onde minha vontade é fraca, sê tu minha força. Onde minha carne é preguiçosa, sê tu meu impulso. Transforma minha procrastinação em ação, minha dispersão em foco.

Maria, mulher diligente de Nazaré, ensina-me a fazer cada tarefa com excelência e amor. Amém.`
      },
      {
        id: 9,
        title: "Oração por Bons Resultados",
        content: `Senhor Deus, Deus de toda bênção e sucesso, eu te entrego este trabalho que estou realizando. Eu fiz minha parte com dedicação; agora confio a ti os resultados. Tu que multiplicas pães e peixes, multiplica também os frutos do meu esforço.

Santos Arcanjos, intercessores poderosos, apresentai meu trabalho diante do trono de Deus. Pedi bênção sobre cada projeto, cada meta, cada objetivo. Que os resultados glorifiquem o nome do Senhor.

Senhor Jesus, tu que disseste que sem ti nada podemos fazer, eu reconheço minha dependência de ti. Não é minha capacidade que traz resultados, é tua bênção sobre minha capacidade. Abençoa minhas mãos, minha mente, meus esforços.

Pai celestial, dá-me resultados além do que mereço, não por mérito meu, mas por tua graça abundante. Surpreende-me com frutos que não plantei, com colheitas que não esperava, com bênçãos que não imaginava.

Ao mesmo tempo, ajuda-me a aceitar se os resultados não forem os que eu esperava. Ensina-me que nem todo esforço traz o retorno imediato, que algumas sementes demoram para germinar, que há vitórias que só se revelam com o tempo.

Se houver fracasso, que eu aprenda com ele. Se houver sucesso, que eu te glorifique por ele. Que meu coração esteja preparado para ambos, sempre ancorado em ti e não em resultados.

Maria, causa de nossa alegria, intercede por boas notícias e resultados abençoados. Amém.`
      },
      {
        id: 10,
        title: "Oração por Honestidade e Ética",
        content: `Senhor Deus, Deus de verdade e justiça, fortalece-me para trabalhar com integridade em um mundo onde a desonestidade parece prosperar. Quando a tentação de atalhos desonestos surgir, dá-me força para resistir. Quando todos ao redor estiverem trapaceando, dá-me coragem para permanecer honesto.

São Miguel Arcanjo, guerreiro da verdade, protege-me das armadilhas da corrupção. Não permitas que eu caia na mentira de que "todo mundo faz" ou que "não tem jeito". Ajuda-me a ser diferente, mesmo que isso custe caro.

Senhor Jesus, tu que és o Caminho, a Verdade e a Vida, sê meu modelo de integridade. Tu nunca mentiste, nunca enganaste, nunca tomaste atalhos desonestos, mesmo quando isso significou a cruz. Dá-me essa mesma fidelidade aos teus valores.

Pai celestial, eu prefiro fracassar com honestidade a vencer com desonestidade. Prefiro perder oportunidades mantendo minha integridade a ganhar o mundo e perder minha alma. Fortalece essa convicção em mim.

Quando eu for pressionado a mentir, dá-me a verdade. Quando eu for tentado a enganar, dá-me transparência. Quando eu for convidado a participar de esquemas desonestos, dá-me a coragem de recusar.

Que minha reputação seja de pessoa íntegra, confiável, reta. Que minha palavra tenha valor, meus contratos sejam honrados, minhas promessas sejam cumpridas. Que ao final da minha carreira, eu possa olhar para trás com a consciência limpa.

Maria, espelho de justiça, intercede por minha integridade profissional. Amém.`
      },
      {
        id: 11,
        title: "Oração de Fim de Expediente",
        content: `Senhor Deus, eu encerro este dia de trabalho em tua presença. Antes de fechar o computador, antes de guardar as ferramentas, eu paro para te agradecer e te entregar tudo o que aconteceu hoje.

Santos Arcanjos Miguel, Gabriel e Rafael, obrigado por me acompanharem nesta jornada. São Miguel, obrigado pela proteção. São Gabriel, obrigado pela inspiração. São Rafael, obrigado pela orientação. Permanecei comigo até amanhã.

Senhor Jesus, obrigado pelo trabalho de hoje. Obrigado pela oportunidade de servir, de contribuir, de produzir algo útil. Obrigado pelos desafios que me fizeram crescer, pelas pessoas que cruzaram meu caminho, pelas pequenas vitórias que muitas vezes passam despercebidas.

Pai celestial, eu te peço perdão pelos erros que cometi hoje. Pelas palavras que não deveria ter dito, pelas reações que não deveria ter tido, pelas oportunidades de ser melhor que desperdicei. Amanhã, com tua graça, farei melhor.

Abençoa os colegas que trabalharam comigo. Cuida especialmente daqueles que estão passando por dificuldades que eu desconheço. Dá descanso aos corpos cansados e paz às mentes preocupadas.

Agora, ajuda-me a desligar do trabalho. A deixar as preocupações profissionais no escritório e não levá-las para casa. A estar presente com minha família, a descansar, a me renovar para amanhã.

Maria, Mãe do repouso, guarda minha noite e prepara meu novo dia. Amém.`
      }
    ]
  },
  amor: {
    name: "Amor",
    description: "Relacionamentos, reconciliação e cura do coração",
    icon: "Heart",
    prayers: [
      {
        id: 1,
        title: "Oração pelo Amor Verdadeiro",
        content: `São Rafael Arcanjo, que guiaste Tobias até Sara, sua esposa destinada por Deus, guia-me também no caminho do amor verdadeiro. Eu desejo encontrar não qualquer pessoa, mas aquela que Deus preparou para mim desde a eternidade.

Senhor Jesus, que abençoaste o matrimônio nas bodas de Caná, abençoa minha busca por um amor santo. Livra-me das ilusões românticas que a mídia vende, das expectativas irreais que criei, dos padrões superficiais que adotei. Ensina-me a amar como tu amas: com fidelidade, sacrifício, paciência.

Pai celestial, prepara meu coração para receber o amor. Cura as feridas que me impedem de amar plenamente. Remove as barreiras que levantei para me proteger. Restaura em mim a capacidade de confiar, de me entregar, de ser vulnerável.

Enquanto espero, ajuda-me a me tornar a pessoa certa, não apenas a encontrar a pessoa certa. Trabalha em meu caráter, minha maturidade, minha espiritualidade. Que eu seja alguém que vale a pena encontrar.

Se eu já encontrei alguém, abençoa esse relacionamento. Revela se essa pessoa é de ti ou se é distração do teu plano. Dá-me discernimento para ver além das aparências, para avaliar não apenas sentimentos, mas compatibilidade, valores, fé.

Maria, Mãe do Belo Amor, intercede por mim. Pede a teu Filho que guie meu coração até o amor verdadeiro, aquele que vem do céu e leva ao céu. Amém.`
      },
      {
        id: 2,
        title: "Oração pela Cura do Coração",
        content: `Senhor Jesus, coração partido por nossa salvação, eu trago a ti meu coração ferido. Ele foi partido por decepções, traído por quem eu amava, abandonado por quem prometeu ficar. As cicatrizes ainda doem, e a confiança se foi.

São Rafael Arcanjo, curador das feridas do amor, toca meu coração com o bálsamo celestial. Fecha as feridas abertas, cicatriza o que ainda sangra, restaura o que foi destruído. Tu que curaste Tobias da cegueira, cura-me da cegueira que a dor causou.

Pai celestial, eu entreguei meu coração a quem não soube cuidar dele. Fiz escolhas que me machucaram, confiei em quem não merecia confiança. Reconheço minha parte na dor que carrego. Perdoa-me e ensina-me.

Cura a dor da rejeição. Cura a ferida do abandono. Cura o trauma da traição. Cura a vergonha de ter amado errado. Cura o medo de amar de novo. Cura a amargura que quer se instalar.

Não permitas que a dor me endureça. Não permitas que eu feche meu coração para sempre. Restaura em mim a capacidade de amar, de confiar, de me entregar novamente – com sabedoria, mas sem medo.

Espírito Santo, consolador dos corações partidos, habita em mim. Preenche os vazios que a perda deixou. Reconstrói as ruínas que restaram. Transforma as cinzas em beleza.

Maria, Mãe cujo coração foi traspassado, entende minha dor. Consola-me, cura-me, restaura-me. Amém.`
      },
      {
        id: 3,
        title: "Oração pela Reconciliação",
        content: `Senhor Jesus, que vieste para reconciliar o mundo com o Pai, eu te peço reconciliação neste relacionamento ferido. Há mágoas de ambos os lados, palavras que não deveriam ter sido ditas, atitudes que machucaram. O amor esfriou, e o silêncio se instalou.

São Rafael Arcanjo, curador das relações quebradas, intercede por nós. Cria pontes onde há muros. Abre caminhos de diálogo onde há silêncio. Derrama óleo de cura nas feridas que causamos um ao outro.

Pai celestial, eu reconheço minha parte neste conflito. Perdoa-me pelos meus erros, minhas palavras duras, minhas reações desproporcionais. Limpa meu coração do orgulho que impede o primeiro passo, da teimosia que recusa perdoar.

Ajuda-me a dar o primeiro passo, mesmo que eu me sinta injustiçado. Ensina-me a pedir perdão sem justificar, a perdoar sem exigir reparação imediata, a reconstruir sem cobrar garantias.

Toca também o coração da outra pessoa. Amolece o que está endurecido. Ilumina o que está na escuridão da mágoa. Desperta o amor que esfriou. Cria nela o desejo de reconciliação que eu tenho.

Se for da tua vontade, restaura completamente este relacionamento. Se não for possível reconciliação plena, dá-nos pelo menos paz, respeito, ausência de rancor. Que não haja inimizade entre nós.

Maria, reconciliadora dos corações, intercede por esta restauração. Amém.`
      },
      {
        id: 4,
        title: "Oração por Relacionamento Abençoado",
        content: `Senhor Deus, Deus do amor e da aliança, eu te consagro este relacionamento. Não quero construir sobre a areia de emoções passageiras, mas sobre a rocha da tua vontade. Abençoa esta união para que ela te glorifique.

São Rafael Arcanjo, guardião dos casais escolhidos por Deus, acompanha-nos nesta jornada. Tu que guiaste Tobias e Sara, guia-nos também. Protege nosso amor das armadilhas do inimigo, das tentações do mundo, das nossas próprias fraquezas.

Senhor Jesus, que elevaste o matrimônio à dignidade de sacramento, santifica nossa relação. Que não seja apenas paixão humana, mas amor que vem de ti e leva a ti. Que nossa união seja reflexo da tua aliança com a Igreja.

Pai celestial, ensina-nos a amar como tu amas. Ensina-nos a paciência quando estivermos irritados. Ensina-nos o perdão quando formos feridos. Ensina-nos a comunicação quando o silêncio se instalar. Ensina-nos a sacrifício quando o egoísmo aparecer.

Dá-nos sabedoria para resolver conflitos sem destruir a relação. Dá-nos generosidade para colocar o outro em primeiro lugar. Dá-nos fidelidade para honrar nosso compromisso em todos os momentos.

Protege-nos de tudo que pode nos separar: a rotina que entedia, a tentação que seduz, os terceiros que se intrometem, os problemas que desanimam. Que nada nos afaste do amor que tu colocaste entre nós.

Maria, modelo de esposa e mãe, intercede por nosso relacionamento. Amém.`
      },
      {
        id: 5,
        title: "Oração pela Fidelidade",
        content: `Senhor Jesus Cristo, fiel para sempre, fortalece-me para viver na fidelidade. Vivemos em tempos onde a traição é banalizada, a infidelidade é justificada, o compromisso é descartável. Ajuda-me a ser diferente.

São Miguel Arcanjo, defensor dos justos, protege-me das tentações contra a fidelidade. Quando a atração por outra pessoa surgir, dá-me força para resistir. Quando a oportunidade de trair aparecer, fecha as portas. Quando o pensamento infiel vier, captura-o antes que se enraíze.

Pai celestial, eu escolho a fidelidade não apenas como dever, mas como expressão de amor. Eu quero ser fiel porque amo, não apenas porque prometi. Renova em mim o amor que fez a promessa, para que a promessa seja sustentada pelo amor.

Guarda meus olhos de olhar com desejo para quem não é meu. Guarda minha mente de fantasias com pessoas que não me pertencem. Guarda meu coração de se apegar a quem não devo. Guarda minhas mãos de tocar quem não é lícito tocar.

Se meu relacionamento está passando por dificuldades que me fazem olhar para os lados, ajuda-me a resolver os problemas em vez de fugir deles. Se o amor esfriou, reacende-o. Se a intimidade se perdeu, restaura-a.

Protege também meu cônjuge das mesmas tentações. Guarda sua fidelidade, seu compromisso, seu amor por mim. Que sejamos fiéis um ao outro até que a morte nos separe.

Maria, esposa fiel de José, intercede pela nossa fidelidade conjugal. Amém.`
      },
      {
        id: 6,
        title: "Oração contra a Solidão",
        content: `Senhor Deus, que disseste "não é bom que o homem esteja só", eu clamo a ti do fundo da minha solidão. Há um vazio no meu coração que nenhuma atividade preenche, uma saudade de alguém que ainda não encontrei, uma dor de estar só em meio à multidão.

São Rafael Arcanjo, companheiro de viagem de Tobias, caminha comigo nesta solidão. Não me deixe só nesta espera. Consola-me com tua presença até que a pessoa certa chegue.

Senhor Jesus, que experimentaste a solidão no Getsêmani, entende minha dor. Tu sabes o que é estar cercado de pessoas e ainda assim sentir-se só. Entra nesta solidão e transforma-a em encontro contigo.

Pai celestial, enquanto espero uma companhia humana, sê tu minha companhia divina. Que eu não me torne dependente de alguém para ser feliz, mas que encontre em ti a fonte da minha alegria. Ao mesmo tempo, não desprezes meu desejo legítimo de amar e ser amado.

Ajuda-me a usar este tempo de solidão para me preparar. Para crescer em maturidade, para desenvolver meu caráter, para aprofundar minha relação contigo. Que eu não desperdice a espera.

Se a solidão está me levando a escolhas erradas, a relacionamentos apressados, a compromissos prematuros, liberta-me da pressa. Dá-me paciência para esperar o tempo certo, a pessoa certa, o amor certo.

Maria, que viveste momentos de solidão quando Jesus morreu, consola-me nesta espera. Amém.`
      },
      {
        id: 7,
        title: "Oração por Amor na Família",
        content: `Senhor Deus, Pai de quem toda família recebe o nome, derrama teu amor sobre minha família. Que nosso lar seja um lugar onde o amor é vivido, experimentado, multiplicado. Que cada membro da família se sinta amado, valorizado, acolhido.

Santos Arcanjos, guardiões das famílias, protegei nossa casa. São Miguel, defende-nos do mal que quer nos dividir. São Gabriel, traz mensagens de reconciliação e perdão. São Rafael, cura as feridas que causamos uns aos outros.

Senhor Jesus, que viveste em família com Maria e José, ensina-nos a conviver. Ensina-nos a suportar as fraquezas uns dos outros com paciência. Ensina-nos a celebrar as vitórias uns dos outros sem inveja. Ensina-nos a consolar nas dores sem julgar.

Pai celestial, onde há conflito entre nós, traz paz. Onde há mágoa guardada, traz perdão. Onde há distância emocional, traz proximidade. Onde há silêncio frio, traz diálogo afetuoso.

Ajuda-nos a expressar amor em palavras e ações. A dizer "eu te amo" com frequência. A demonstrar carinho com gestos. A dedicar tempo de qualidade uns aos outros. A estar presentes, não apenas fisicamente, mas emocionalmente.

Que nosso amor familiar seja testemunho do teu amor. Que ao verem nossa família, as pessoas vejam o que o amor de Deus pode fazer. Que nossa casa seja escola de amor para o mundo.

Maria, Rainha das famílias, intercede pelo amor em nosso lar. Amém.`
      },
      {
        id: 8,
        title: "Oração por Paciência no Amor",
        content: `Senhor Jesus, modelo de paciência que suportaste a traição de Judas, a negação de Pedro, a fuga dos apóstolos, ensina-me a ser paciente no amor. Amar é fácil nos dias bons; é nos difíceis que a paciência é testada.

São Rafael Arcanjo, que acompanhaste Tobias em sua longa jornada sem nunca desistir, dá-me essa mesma perseverança. Ajuda-me a não desistir do amor quando ele exigir paciência, sacrifício, espera.

Pai celestial, quando meu cônjuge me decepcionar, dá-me paciência para perdoar. Quando não me entender, dá-me paciência para explicar novamente. Quando errar repetidamente, dá-me paciência para confiar no processo de crescimento.

Eu reconheço que também sou imperfeito, também preciso da paciência do outro. Ensina-me a receber paciência com gratidão e a oferecer paciência com generosidade.

Remove de mim a impaciência que cobra resultados imediatos, que espera perfeição instantânea, que desiste ao primeiro obstáculo. O amor verdadeiro é construído com tempo, persistência, tolerância.

Quando eu quiser gritar, dá-me palavras suaves. Quando eu quiser cobrar, dá-me compreensão. Quando eu quiser desistir, dá-me esperança. Quando eu quiser punir, dá-me misericórdia.

Espírito Santo, fruto de paciência, habita em mim. Transforma minha impaciência em longanimidade, minhas cobranças em encorajamento, minhas críticas em edificação.

Maria, modelo de paciência que esperaste a ressurreição do Filho, intercede por minha paciência no amor. Amém.`
      },
      {
        id: 9,
        title: "Oração por Comunicação no Casal",
        content: `Senhor Deus, tu que te comunicas conosco através da criação, das Escrituras, do Filho, ensina-nos a nos comunicar bem. A comunicação em nosso relacionamento está falhando: há mal-entendidos constantes, palavras que machucam, silêncios que separam.

São Gabriel Arcanjo, mensageiro de Deus, ensina-nos a transmitir mensagens com clareza e amor. Ajuda-nos a dizer o que precisamos dizer de forma que o outro possa ouvir e entender.

Senhor Jesus, tu que sempre encontravas as palavras certas, habita em nossa comunicação. Quando formos falar, fala através de nós. Quando formos ouvir, ouve através de nós. Transforma nosso diálogo em encontro.

Pai celestial, ensina-me a ouvir antes de responder. A tentar entender antes de ser entendido. A perguntar em vez de presumir. A esclarecer em vez de acusar. A expressar sentimentos em vez de atacar a pessoa.

Guarda nossa língua de palavras que ferem, que humilham, que destroem. Palavras ditas em raiva não podem ser retiradas. Dá-nos autocontrole para calar quando for melhor calar, para falar quando for necessário falar.

Ajuda-nos a criar espaços seguros de conversa. Momentos onde podemos ser vulneráveis sem medo de julgamento. Onde podemos expressar necessidades sem parecer exigentes. Onde podemos discordar sem destruir a relação.

Espírito Santo, dá-nos a comunicação que edifica, que aproxima, que resolve. Transforma nossas conversas em pontes de amor.

Maria, que guardava tudo em seu coração, ensina-nos a comunicar com sabedoria. Amém.`
      },
      {
        id: 10,
        title: "Oração por Pureza do Coração",
        content: `Senhor Jesus, que disseste que os puros de coração verão a Deus, purifica meu coração para amar de forma santa. Vivemos em um mundo que contamina o amor com impureza, que confunde desejo com amor, que banaliza a intimidade.

São Miguel Arcanjo, guerreiro da pureza, combate em mim todo desejo impuro, todo pensamento que contamina, toda tentação que distorce o amor. Dá-me a castidade que liberta, não a que aprisiona.

Pai celestial, eu quero amar com pureza, não por medo, mas por escolha. Quero guardar minha intimidade não por repressão, mas por reverência. Quero viver a sexualidade como tu a criaste: santa, bela, expressão de amor total.

Perdoa-me pelas vezes que contaminei o amor com impureza. Pelas imagens que vi, pelos pensamentos que cultivei, pelas ações que cometi. Lava-me com o sangue de Jesus e restaura minha pureza.

Guarda meus olhos do que não devo ver. Guarda minha mente do que não devo imaginar. Guarda meu coração do que não devo desejar. Guarda meu corpo do que não devo fazer.

Se estou em um relacionamento, ajuda-nos a viver a intimidade na hora certa, da forma certa, segundo tua vontade. Se estou solteiro, ajuda-me a guardar minha pureza para o amor que virá.

Espírito Santo, templo que habitas em mim, santifica meu corpo e minha mente. Faz de mim vaso de honra para o amor puro.

Maria, Virgem puríssima, intercede pela pureza do meu coração. Amém.`
      },
      {
        id: 11,
        title: "Oração de Gratidão pelo Amor",
        content: `Senhor Deus, fonte de todo amor, eu venho a ti com o coração transbordando de gratidão pelo amor que colocaste em minha vida. Tu não me deixaste só; deste-me alguém para amar e para me amar. Isso não é mérito meu, é graça tua.

São Rafael Arcanjo, que conduziu Tobias até Sara, obrigado por interceder por mim. Obrigado por guiar meus passos até o amor verdadeiro, por proteger nossa união, por curar as feridas do caminho.

Senhor Jesus, obrigado por abençoar nosso amor. Obrigado por estar presente em nosso relacionamento, por nos sustentar nas dificuldades, por multiplicar nossa alegria. Sem ti, nosso amor seria apenas humano; contigo, é reflexo do céu.

Pai celestial, obrigado por esta pessoa ao meu lado. Obrigado por suas qualidades que me encantam, por seu amor que me sustenta, por sua presença que me completa. Obrigado também por suas imperfeições que me ensinam a amar como tu amas: incondicionalmente.

Obrigado pelos momentos de alegria que compartilhamos. Pelas risadas, pelas descobertas, pelas aventuras. Obrigado também pelos momentos difíceis que nos fortaleceram. Pelas crises que superamos, pelas lágrimas que secamos juntos, pelas perdas que enfrentamos de mãos dadas.

Que eu nunca me acostume com este amor a ponto de esquecê-lo. Que eu nunca tome como garantido o que tu me deste com tanta generosidade. Que minha gratidão seja expressa em palavras e ações todos os dias.

Maria, Mãe do Amor, obrigado por interceder por nossa união. Amém.`
      }
    ]
  },
  libertacao: {
    name: "Libertação",
    description: "Combate espiritual, renúncia e fortalecimento da fé",
    icon: "Shield",
    prayers: [
      {
        id: 1,
        title: "Oração de Proteção contra o Mal",
        content: `São Miguel Arcanjo, príncipe das milícias celestes, defensor do trono de Deus, terror dos demônios, eu clamo por tua proteção neste momento. Há forças do mal que me cercam, tentações que me assaltam, trevas que tentam me envolver.

Em nome de Jesus Cristo, nosso Senhor, e pelo poder de seu Sangue precioso, eu peço que estejas ao meu lado nesta batalha. Defende-me contra os assaltos e maquinações do maligno. Que tua espada de luz corte toda corrente invisível que me prende.

Senhor Jesus, que vieste para destruir as obras do diabo, cobre-me com teu Sangue redentor. Que nenhum mal me atinja, nenhuma maldição prospere, nenhum ataque prevaleça. Eu pertenço a ti; sou marcado com o selo do teu Santo Espírito.

Pai celestial, eu me refugio sob tuas asas. Coloca ao meu redor uma muralha de fogo que o inimigo não possa atravessar. Envia teus anjos para guardar meus caminhos, proteger minha casa, defender minha família.

Espírito Santo, discernimento de espíritos, abre meus olhos para ver as armadilhas do inimigo antes de cair nelas. Dá-me sabedoria para reconhecer a mentira disfarçada de verdade, o mal vestido de bem, o perigo camuflado de oportunidade.

Maria, serpente esmagadora, terror dos demônios, cobre-me com teu manto protetor. Que tua presença maternal afaste de mim todo espírito maligno.

São Miguel Arcanjo, defende-me no combate; sê meu auxílio contra a malícia e as ciladas do demônio. Amém.`
      },
      {
        id: 2,
        title: "Oração de Renúncia ao Pecado",
        content: `Senhor Jesus Cristo, Cordeiro de Deus que tiras o pecado do mundo, eu me apresento diante de ti para renunciar a todo pecado que me escraviza. Por muito tempo vivi nas trevas; hoje escolho a luz. Por muito tempo servi ao mal; hoje escolho servir a ti.

São Miguel Arcanjo, testemunha desta minha decisão, sê meu defensor contra qualquer ataque do inimigo que virá para me fazer voltar atrás. Fortalece minha resolução quando ela vacilar.

Pai celestial, eu renuncio a todo pecado que cometi: os que lembro e os que esqueci, os que escondi e os que mostrei, os que fiz por ação e os que fiz por omissão. Lava-me com o Sangue de Jesus e purifica-me completamente.

Eu renuncio a todo vício que me prende. A toda mentira que me conforta. A todo ódio que carrego. A toda impureza que contamina. A toda idolatria que compete contigo pelo primeiro lugar no meu coração.

Espírito Santo, fortalece minha vontade que é fraca. Dá-me o poder de resistir às tentações que virão, porque elas virão. Dá-me a perseverança para não voltar ao vômito, para não recair nas mesmas armadilhas.

Eu te peço, Senhor, não apenas que me perdoes, mas que me transformes. Muda meu coração, renovando meus desejos. Que eu não queira mais o que me destrói. Que eu ame o que tu amas e rejeite o que tu rejeitas.

Maria, refúgio dos pecadores, acolhe-me em teu coração maternal. Apresenta-me a Jesus purificado e pronto para uma nova vida. Amém.`
      },
      {
        id: 3,
        title: "Oração contra Pensamentos Obsessivos",
        content: `Senhor Deus, Deus de paz e ordem, eu clamo a ti em desespero. Minha mente está sendo invadida por pensamentos que não consigo controlar. Eles vêm como ondas, repetitivos, insistentes, torturantes. Eu quero paz, mas encontro tempestade.

São Miguel Arcanjo, guerreiro celeste, combate estas forças que atacam minha mente. Eu reconheço que nem todos os pensamentos vêm de mim; alguns são sugeridos pelo inimigo. Expulsa toda influência maligna sobre meus pensamentos.

Senhor Jesus, tu que acalmaste a tempestade no mar da Galileia, acalma a tempestade na minha mente. Fala "Calai-vos!" aos pensamentos que rugem dentro de mim. Que tua paz, que excede todo entendimento, guarde meu coração e minha mente.

Pai celestial, eu sei que devo "levar cativo todo pensamento à obediência de Cristo". Mas minha força é insuficiente. Os pensamentos parecem maiores que eu. Preciso do teu poder para vencê-los.

Quando os pensamentos obsessivos vierem, ajuda-me a não me apavorar, a não alimentá-los com atenção, a não crer nas mentiras que trazem. Ensina-me a substituí-los pela verdade da tua Palavra, a focar em "tudo o que é verdadeiro, respeitável, justo, puro, amável".

Se estes pensamentos têm origem em algum problema de saúde mental, guia-me ao tratamento adequado. Abençoa os profissionais que podem me ajudar. Não tenho vergonha de buscar ajuda; tenho sede de paz.

Maria, mãe de serenidade, intercede por minha mente atormentada. Traz paz onde há caos. Amém.`
      },
      {
        id: 4,
        title: "Oração para Quebrar Correntes",
        content: `Senhor Jesus Cristo, libertador dos cativos, quebra as correntes que me prendem. Há prisões invisíveis que me escravizam: correntes de pecado, de vício, de medo, de trauma. Eu não consigo me libertar sozinho; preciso do teu poder.

São Miguel Arcanjo, príncipe dos exércitos celestiais, ergue tua espada e corta toda corrente espiritual que me mantém cativo. Aquilo que o inimigo amarrou, que seja desatado pelo poder de Deus.

Pai celestial, eu clamo pela liberdade que Jesus conquistou na cruz. Ele já pagou o preço da minha libertação; eu reclamo o que já é meu por direito. Não aceito mais viver como escravo quando fui chamado para ser livre.

Quebra as correntes do pecado habitual que me prende há anos. Quebra as correntes do medo que paralisa minha vida. Quebra as correntes da vergonha que me impede de levantar a cabeça. Quebra as correntes do passado que não me deixa seguir em frente.

Espírito de liberdade, onde tu estás há liberdade. Entra nos lugares da minha alma onde ainda estou preso. Ilumina as celas escuras onde me escondi. Abre as portas que eu mesmo tranquei.

Eu declaro em nome de Jesus: eu sou livre! O Filho me libertou e sou verdadeiramente livre! Nenhuma corrente tem poder sobre mim porque o poder de Deus é maior.

Maria, desatadora dos nós, desata todo nó que me prende. Intercede pela minha libertação completa. Amém.`
      },
      {
        id: 5,
        title: "Oração para Afastar Inveja e Maledicência",
        content: `Senhor Deus, meu protetor e escudo, eu clamo contra a inveja e a maledicência que me cercam. Há pessoas que falam mal de mim, que desejam meu mal, cujos olhos invejosos me acompanham. Sei que isso abre portas para ataques espirituais.

São Miguel Arcanjo, defensor dos injustiçados, protege-me das línguas malditas que falam contra mim. Que suas palavras não tenham poder sobre minha vida. Que suas maldições voltem vazias.

Senhor Jesus, tu que foste caluniado e difamado, entende minha dor. Protege minha reputação do veneno das fofocas. Guarda minha paz quando souber que estão falando de mim. Dá-me a graça de não responder maldição com maldição.

Pai celestial, eu te peço não apenas proteção, mas também misericórdia para com aqueles que me invejam. Eles também estão feridos; a inveja vem de um coração doente. Cura-os, liberta-os, transforma-os.

Perdoa-me também pelas vezes que eu fui invejoso e maledicente. Pelas vezes que olhei para o sucesso alheio com ciúme, que falei mal de outros para me sentir melhor, que desejei o fracasso de alguém. Limpa meu coração desta sujeira.

Espírito Santo, cria em mim um coração generoso que celebra o sucesso dos outros, que fala bem até de quem fala mal de mim, que deseja o bem mesmo para quem deseja meu mal.

Maria, modelo de humildade, livre de toda inveja, intercede por minha proteção e transformação. Amém.`
      },
      {
        id: 6,
        title: "Oração pela Casa e Família",
        content: `Senhor Deus, Pai que guardas o teu povo, eu consagro minha casa e minha família à tua proteção. Que este lar seja território santo, coberto pelo Sangue de Jesus, guardado pelos teus anjos, impermeável ao mal.

São Miguel Arcanjo, guardião dos lares santos, coloca-te à porta da minha casa como sentinela. Não permitas que nenhum espírito maligno atravesse esta soleira. Que todo mal encontre aqui uma barreira intransponível.

Senhor Jesus, entra nesta casa e habita conosco. Onde tu estás presente, as trevas não podem permanecer. Purifica cada cômodo com tua luz. Expulsa toda influência negativa que tenha entrado por objetos, por visitas, por nós mesmos.

Pai celestial, protege cada membro desta família. Guarda nossos corações do pecado, nossas mentes da mentira, nossos corpos do perigo. Que nenhum mal nos atinja por onde passarmos.

Abençoa este teto que nos cobre, estas paredes que nos abrigam, este chão que nos sustenta. Que esta casa seja lugar de paz, de oração, de amor. Que quem entre sinta tua presença. Que quem saia leve tua bênção.

Eu renuncio a todo mal que possa ter entrado nesta casa: por minha culpa, por objetos amaldiçoados, por práticas esotéricas, por palavras de maldição. Em nome de Jesus, eu quebro todo poder maligno e declaro esta casa santa.

Maria, Rainha do lar, abençoa nossa casa como abençoaste a de Nazaré. Amém.`
      },
      {
        id: 7,
        title: "Oração contra Medo e Pânico",
        content: `Senhor Jesus, que disseste "Não tenhais medo", eu clamo a ti em meio ao medo que me paralisa. O pânico vem como ondas, tirando meu ar, acelerando meu coração, roubando minha razão. Eu sei que este medo não vem de ti, pois tu dás espírito de poder, amor e equilíbrio.

São Miguel Arcanjo, guerreiro sem medo, empresta-me tua coragem. Tu enfrentaste Lúcifer e seu exército sem vacilar. Ajuda-me a enfrentar meus medos com a mesma confiança em Deus.

Pai celestial, "não nos deste espírito de covardia, mas de poder, de amor e de equilíbrio". O medo excessivo que sinto é um ataque; rejeito-o em nome de Jesus. Escolho confiar em ti mesmo quando meu corpo treme.

Quando o pânico vier, ajuda-me a respirar, a orar, a me ancorar na realidade. Lembra-me de que tu estás presente, que eu estou seguro em tuas mãos, que nada pode me separar do teu amor.

Espírito Santo, Consolador, acalma meu sistema nervoso agitado. Traz paz ao meu corpo que reage ao perigo imaginário. Ensina-me técnicas de acalmia que posso usar nos momentos de crise.

Se este medo tem raízes em traumas passados, cura esses traumas. Se tem causas físicas ou psicológicas, guia-me ao tratamento adequado. Não tenho vergonha de buscar ajuda profissional; tu ages também através dela.

Maria, Mãe de ternura, acolhe-me em teus braços quando o medo vier. Diz-me que vai ficar tudo bem, porque Deus está no controle. Amém.`
      },
      {
        id: 8,
        title: "Oração por Libertação de Vícios",
        content: `Senhor Jesus, que vieste para libertar os cativos e proclamar liberdade aos prisioneiros, eu clamo por libertação deste vício que me escraviza. Já tentei parar por minhas próprias forças e falhei repetidamente. Reconheço que preciso de ti.

São Miguel Arcanjo, guerreiro contra as forças do mal, combate ao meu lado. Eu sei que por trás de todo vício há uma batalha espiritual. O inimigo quer me destruir através desta dependência. Ergue tua espada em minha defesa.

Pai celestial, eu renuncio a este vício em nome de Jesus. Renuncio ao prazer momentâneo que ele oferece, à falsa paz que proporciona, à ilusão de controle que vende. Eu escolho a liberdade, mesmo que doa.

Cura a ferida que abriu porta para este vício. Todo vício é uma tentativa de preencher um vazio, de anestesiar uma dor, de fugir de uma realidade. Qual dor estou tentando esconder? Qual vazio tentando preencher? Cura a raiz, não apenas o sintoma.

Espírito Santo, fortalece minha vontade enfraquecida. Nos momentos de tentação, sê minha força. Quando a abstinência for difícil, sê meu conforto. Quando eu cair, levanta-me sem condenação para tentar novamente.

Guia-me aos recursos de ajuda: grupos de apoio, profissionais de saúde, amigos fiéis. Não quero lutar sozinho. Dá-me humildade para pedir e aceitar ajuda.

Maria, refúgio dos pecadores, intercede pela minha libertação total. Amém.`
      },
      {
        id: 9,
        title: "Oração por Discernimento Espiritual",
        content: `Senhor Deus, Deus de luz e verdade, concede-me o dom do discernimento espiritual. Vivemos em tempos de confusão, onde o mal se disfarça de bem, a mentira se veste de verdade, e até mesmo os escolhidos correm risco de serem enganados.

São Gabriel Arcanjo, mensageiro da verdade divina, ilumina minha mente para distinguir a voz de Deus das vozes falsas. Ajuda-me a reconhecer o que vem do céu, o que vem da terra, e o que vem do inferno.

Senhor Jesus, tu que és a Verdade, habita em mim como critério de discernimento. Que tudo seja avaliado à luz da tua Palavra, do teu caráter, do teu Evangelho. O que não se alinha contigo, que eu rejeite sem hesitar.

Pai celestial, dá-me discernimento para avaliar profecias, visões, sonhos e palavras que dizem vir de ti. Nem tudo o que parece espiritual é de ti; o próprio Satanás se transfigura em anjo de luz. Ajuda-me a testar os espíritos.

Espírito Santo, dom de discernimento, revela a origem de cada influência sobre minha vida. Mostra-me quem está realmente ao meu lado: conselheiros divinos ou vozes enganadoras. Dá-me a coragem de rejeitar o que descobrir ser falso.

Protege-me das armadilhas religiosas: dos falsos mestres, das doutrinas de demônios, das práticas esotéricas disfarçadas de cristãs. Mantém-me na verdade simples e pura do Evangelho.

Maria, cheia de graça, que discerniste a voz do anjo verdadeiro, intercede pelo meu discernimento espiritual. Amém.`
      },
      {
        id: 10,
        title: "Oração de Consagração a São Miguel",
        content: `Glorioso São Miguel Arcanjo, príncipe das milícias celestes, terror dos demônios, guardião da Santa Igreja, eu me consagro hoje à tua proteção e intercessão. Coloco-me sob teu poderoso patrocínio.

Tu que clamaste "Quem como Deus?" e derrubaste Lúcifer e seus anjos rebeldes, ensina-me a mesma fidelidade inabalável ao Senhor. Que eu jamais me curve a outro deus, a outro senhor, a outra potência.

Senhor Jesus, por meio de São Miguel, fortalece-me para o combate espiritual. Eu não luto contra carne e sangue, mas contra principados e potestades. Sem armadura espiritual, sou derrotado. Reveste-me com tuas armas de luz.

São Miguel, sê meu defensor no combate; auxilia-me contra a malícia e as ciladas do demônio. Quando o inimigo me atacar, ergue teu escudo sobre mim. Quando a tentação me cercar, empunha tua espada em minha defesa.

Eu prometo honrar-te com oração regular, com devoção sincera, com vida de santidade. Não te invoco por magia ou superstição, mas como intercessor poderoso junto ao trono de Deus.

Apresenta-me ao Senhor como soldado disposto a servi-lo. Que eu lute as batalhas certas, com as armas certas, ao lado certo. Que eu não tema as forças do mal, pois maior é o que está em mim do que o que está no mundo.

Maria, Rainha dos Anjos, unida a São Miguel, intercede por minha proteção e santificação. Amém.`
      },
      {
        id: 11,
        title: "Oração de Gratidão pela Proteção",
        content: `Senhor Deus, todo-poderoso e misericordioso, eu venho a ti com o coração transbordando de gratidão pela tua proteção sobre minha vida. Tu me guardaste de perigos que eu conhecia e de muitos que eu sequer percebi.

São Miguel Arcanjo, agradeço-te pelas incontáveis vezes que me defendeste sem que eu soubesse. Pelas batalhas espirituais que travaste ao meu lado. Pelos ataques do inimigo que interceptaste antes de me atingirem.

Senhor Jesus, obrigado pelo teu Sangue que me protege, pelo teu nome que me defende, pela tua presença que afasta todo mal. Sem ti, eu seria presa fácil das forças das trevas. Contigo, sou mais que vencedor.

Pai celestial, obrigado por cada vez que me livraste do acidente que quase aconteceu, da doença que poderia ter sido fatal, da tentação que poderia ter me destruído, da pessoa que poderia ter me prejudicado.

Obrigado por colocar teus anjos ao meu redor. Por enviar pessoas certas nos momentos certos. Por fechar portas que eu queria abertas mas que me levariam à ruína. Tua proteção às vezes parece rejeição, mas depois eu entendo que era amor.

Espírito Santo, obrigado pela sensibilidade espiritual que me alertou de perigos ocultos. Pelos pressentimentos que me fizeram evitar armadilhas. Pela paz que me guiou por caminhos seguros.

Maria, Mãe protetora, obrigado por teu manto que me cobre, tua intercessão que me guarda. Toda glória ao Pai, ao Filho e ao Espírito Santo. Amém.`
      }
    ]
  },
  prosperidade: {
    name: "Prosperidade",
    description: "Provisão, sabedoria financeira e portas abertas",
    icon: "Coins",
    prayers: [
      {
        id: 1,
        title: "Oração pela Provisão Divina",
        content: `Senhor Deus, Pai providente, que alimentas as aves do céu e vestes os lírios do campo, eu confio a ti minhas necessidades materiais. Tu conheces o que preciso antes mesmo de eu pedir, e prometes cuidar de mim.

Santos Arcanjos, mensageiros da providência divina, intercedei por minhas necessidades. Apresentai ao Pai o peso que carrego, as contas que preciso pagar, o sustento que preciso garantir.

Senhor Jesus, que multiplicaste pães e peixes, multiplica também meus recursos escassos. Onde há falta, traz abundância. Onde há escassez, traz suficiência. Não peço luxo, peço o necessário com dignidade.

Pai celestial, eu creio que tu és Jeová Jiré, o Senhor que provê. Nunca faltou pão ao justo nem a seus descendentes. Mesmo nos tempos de fome, os que confiam em ti são sustentados.

Abre portas de provisão que eu não consigo enxergar. Cria oportunidades que não existiam. Conecta-me com as pessoas certas que podem ser canais da tua bênção. Surpreende-me com favor imerecido.

Enquanto espero, ajuda-me a administrar bem o pouco que tenho. Dá-me sabedoria para cortar gastos desnecessários, para priorizar o essencial, para confiar mesmo quando o dinheiro está curto.

Espírito Santo, traz paz ao meu coração ansioso pelas contas. Lembra-me de que minha segurança não está no saldo bancário, mas no Deus que nunca falha.

Maria, Mãe que experimentaste a pobreza de Belém, intercede por minha provisão. Amém.`
      },
      {
        id: 2,
        title: "Oração por Sabedoria Financeira",
        content: `Senhor Deus, Deus de toda sabedoria, eu peço discernimento para administrar bem os recursos que tu me confias. Reconheço que tudo o que tenho vem de ti; sou apenas administrador, não dono.

São Gabriel Arcanjo, mensageiro da sabedoria divina, ilumina minha mente para tomar decisões financeiras sábias. Ajuda-me a ver além do momento presente, a considerar consequências, a planejar com prudência.

Senhor Jesus, que denunciaste a avareza e a preocupação excessiva com dinheiro, ensina-me o equilíbrio. Nem a pobreza forçada por má administração, nem a riqueza buscada com obsessão. O caminho do meio onde uso bem sem idolatrar.

Pai celestial, livra-me dos extremos financeiros que me prejudicam. Do consumismo que gasta o que não tem. Da avareza que acumula o que deveria compartilhar. Da irresponsabilidade que ignora o futuro. Da ansiedade que não confia na providência.

Ensina-me a fazer orçamento, a distinguir necessidade de desejo, a poupar para emergências, a investir com sabedoria, a ser generoso com quem precisa. Transforma minha relação com dinheiro.

Se cometi erros financeiros no passado, ajuda-me a consertá-los. Dá-me humildade para aprender, disciplina para mudar, paciência para reconstruir. Não é tarde demais para começar de novo.

Espírito Santo, dom de conselho, guia cada decisão financeira que eu tomar. Que eu administre bem para ter e para dar.

Maria, administradora sábia do lar de Nazaré, intercede por minha sabedoria financeira. Amém.`
      },
      {
        id: 3,
        title: "Oração contra Dívidas",
        content: `Senhor Jesus, que pagaste a dívida que eu jamais poderia pagar, eu clamo a ti sob o peso das dívidas financeiras. Elas me sufocam, tiram meu sono, roubam minha paz. Eu reconheço minha parte nesta situação e peço tua ajuda para sair dela.

São Rafael Arcanjo, curador e guia, mostra-me o caminho para sair deste labirinto de dívidas. Guia meus passos para encontrar soluções que eu não consigo ver sozinho.

Pai celestial, eu me arrependo dos erros que cometi: das compras impulsivas, das decisões irresponsáveis, da falta de planejamento, do orgulho de não pedir ajuda a tempo. Perdoa-me e ajuda-me a recomeçar.

Abre portas de renda extra para acelerar o pagamento. Dá-me favor junto aos credores para negociar condições melhores. Mostra-me onde cortar gastos que ainda sangram meu orçamento. Dá-me disciplina para seguir o plano de quitação.

Quando a tentação de desistir vier, dá-me perseverança. Quando a vergonha quiser me paralisar, dá-me coragem para agir. Quando o desespero bater, dá-me esperança de que isso vai passar.

Liberta minha família do estresse financeiro que consome nossa paz. Protege nosso casamento, nossos relacionamentos, nossa saúde mental dos efeitos tóxicos desta crise.

Espírito Santo, traz clareza para ver prioridades, criatividade para gerar renda, força para persistir até a liberdade financeira.

Maria, Mãe que conheceste a escassez, intercede por minha libertação das dívidas. Amém.`
      },
      {
        id: 4,
        title: "Oração por Oportunidades",
        content: `Senhor Deus, Deus de novas possibilidades, que crias caminhos no deserto e rios no ermo, eu te peço oportunidades. Abra portas que parecem fechadas, cria possibilidades onde parecem não existir.

Santos Arcanjos, mensageiros das oportunidades divinas, intercedei por mim. São Gabriel, traz-me a boa notícia que espero. São Miguel, remove os obstáculos que bloqueiam meu caminho. São Rafael, guia-me até a porta certa.

Senhor Jesus, tu que prometeste que quem busca encontra e a quem bate se abre, eu bato às portas do céu. Estou buscando, estou batendo, estou esperando. Responde-me segundo a tua vontade.

Pai celestial, abre meus olhos para ver as oportunidades que já estão ao meu redor. Às vezes estou tão focado na porta que quero que se abra que não vejo as portas abertas ao meu lado. Dá-me percepção espiritual.

Coloca as pessoas certas no meu caminho. Conecta-me com quem pode me ajudar, me orientar, me abrir portas. Cria favor onde antes havia indiferença, interesse onde havia desatenção, confiança onde havia desconhecimento.

Ajuda-me a estar preparado para as oportunidades quando vierem. A ter as competências necessárias, a atitude correta, a disposição para trabalhar. Que eu não perca chances por não estar pronto.

Espírito Santo, timing perfeito de Deus, sincroniza minha preparação com a oportunidade. Que eu esteja no lugar certo, na hora certa, com a pessoa certa.

Maria, porta do céu, intercede por portas abertas para minha vida. Amém.`
      },
      {
        id: 5,
        title: "Oração por Negócios e Projetos",
        content: `Senhor Deus, Deus de todo sucesso e prosperidade, eu consagro a ti este negócio/projeto que empreendo. Reconheço que sem tua bênção, todo esforço é vão. Que tu sejas o sócio majoritário desta empreitada.

Santos Arcanjos, protetores e guias, acompanhai este empreendimento. São Miguel, protegei-o de ataques externos e sabotagens. São Gabriel, inspirai nossa comunicação e marketing. São Rafael, guiai nossas negociações e parcerias.

Senhor Jesus, que transformaste água em vinho nas bodas de Caná, transforma meu esforço em resultado abundante. Multiplica os frutos do meu trabalho, abençoa o trabalho das minhas mãos, prospera o que empreendo.

Pai celestial, dá-me sabedoria para tomar decisões de negócio acertadas. Para contratar as pessoas certas, fazer os investimentos certos, tomar os rumos certos. Livra-me de erros custosos e parceiros desonestos.

Abençoa meus clientes, fornecedores, parceiros e colaboradores. Que todos sejam beneficiados nesta cadeia. Que meu negócio não apenas me enriqueça, mas abençoe todos que dele participam.

Guarda-me da ganância que corrompe e da preguiça que estagna. Que eu trabalhe com excelência, cobre com justiça, entregue com integridade. Que meu testemunho comercial glorifique teu nome.

Espírito Santo, criatividade divina, inspira inovações, estratégias, soluções. Que este negócio seja frutífero e duradouro.

Maria, Mãe solícita que percebes as necessidades antes de serem ditas, intercede pelo sucesso deste projeto. Amém.`
      },
      {
        id: 6,
        title: "Oração por Estabilidade Financeira",
        content: `Senhor Deus, rocha firme e fundamento inabalável, eu te peço estabilidade financeira. Estou cansado de viver de susto em susto, de não saber se o salário vai durar o mês, de ter medo de emergências inesperadas.

São Rafael Arcanjo, guia para caminhos seguros, mostra-me o caminho para a estabilidade. Não peço riqueza súbita, peço fundamento sólido. Não peço loteria, peço consistência.

Senhor Jesus, tu que construíste sobre a rocha e não sobre a areia, ensina-me a construir uma vida financeira estável. Que eu não viva de aparências e ostentação, mas de realidade e prudência.

Pai celestial, ajuda-me a criar uma reserva de emergência. A ter poupança para imprevistos, a não viver no limite do cartão, a não depender de empréstimos para fechar o mês. Dá-me margem de segurança.

Abençoa minha fonte de renda para que seja constante. Se estou empregado, protege meu emprego. Se sou autônomo, traz clientes regulares. Se empreendo, estabiliza meu faturamento. Que eu possa planejar o futuro com alguma segurança.

Ensina-me a viver abaixo das minhas possibilidades, não acima. A guardar antes de gastar, a esperar antes de comprar, a pensar antes de decidir. Transforma meus hábitos financeiros.

Espírito Santo, paz que excede todo entendimento, traz serenidade sobre minha vida financeira. Que eu durma tranquilo sabendo que as contas estão pagas.

Maria, dona de casa prudente de Nazaré, intercede por minha estabilidade financeira. Amém.`
      },
      {
        id: 7,
        title: "Oração por Generosidade",
        content: `Senhor Jesus, que sendo rico te fizeste pobre para nos enriquecer, ensina-me a ser generoso. Meu coração às vezes se fecha diante da necessidade alheia, minha mão hesita em dar, meu medo de faltar me impede de compartilhar.

Santos Arcanjos, servos generosos de Deus, intercedei por minha transformação. Ajudai-me a ter um coração aberto, mãos generosas, espírito dadivoso.

Pai celestial, tu que deste teu Filho unigênito, o presente mais valioso do universo, ensina-me a dar. Não apenas do meu supérfluo, mas do meu necessário. Não apenas quando é conveniente, mas quando custa. Não apenas para quem me retribui, mas para quem nunca poderá pagar.

Liberta-me do medo de que dar vai me fazer ter menos. Tua economia é diferente: quem semeia pouco, pouco colhe; quem semeia com fartura, com fartura colherá. O que dou não me empobrece; me enriquece.

Abre meus olhos para ver as necessidades ao meu redor. O colega que está passando dificuldade, o vizinho que perdeu o emprego, o parente que não quer pedir ajuda. Dá-me sensibilidade para perceber e coragem para agir.

Mostra-me onde investir minha generosidade: na igreja, em instituições sérias, em pessoas específicas. Que minha doação seja bem aplicada, que faça diferença real, que glorifique teu nome.

Espírito Santo, transforma minha avareza em generosidade, meu medo em confiança, meu fechamento em abertura.

Maria, Mãe generosa que deste teu sim a Deus, intercede pela minha generosidade. Amém.`
      },
      {
        id: 8,
        title: "Oração por Organização Financeira",
        content: `Senhor Deus, Deus de ordem e não de confusão, ajuda-me a organizar minha vida financeira. Reconheço que vivo no caos: não sei quanto ganho, não sei quanto gasto, não sei para onde vai meu dinheiro. Preciso de ordem.

São Gabriel Arcanjo, mensageiro da clareza divina, ilumina minha mente para entender minha situação financeira real. Não quero mais viver na ignorância sobre meu próprio dinheiro.

Senhor Jesus, que multiplicaste pães e depois mandaste recolher as sobras para que nada se perdesse, ensina-me essa mesma organização. A não desperdiçar, a aproveitar bem, a valorizar cada recurso.

Pai celestial, dá-me disciplina para anotar gastos, fazer orçamento, planejar meses e anos. Transforma minha relação impulsiva com dinheiro em relação planejada. Que eu saiba para onde cada real vai.

Ajuda-me a categorizar minhas despesas: o que é essencial, o que é importante, o que é supérfluo. Dá-me sabedoria para cortar o desnecessário sem me tornar mesquinho, para economizar sem perder qualidade de vida.

Se preciso de ferramentas, aplicativos, planilhas, guia-me aos recursos certos. Se preciso de ajuda profissional, conecta-me com pessoas honestas e competentes. Dá-me humildade para reconhecer que não sei tudo.

Espírito Santo, traz ordem ao caos das minhas finanças. Que eu tenha controle sobre meu dinheiro, e não ele sobre mim.

Maria, dona de casa organizada, intercede por minha organização financeira. Amém.`
      },
      {
        id: 9,
        title: "Oração por Trabalho Frutífero",
        content: `Senhor Deus, Deus da colheita abundante, eu te peço que meu trabalho dê frutos. Eu tenho trabalhado, me esforçado, dedicado tempo e energia. Mas os resultados parecem não corresponder ao esforço.

Santos Arcanjos, intercessores junto ao trono da graça, apresentai meu trabalho ao Pai. Pedi que Ele abençoe o esforço das minhas mãos, multiplique os frutos do meu labor.

Senhor Jesus, tu que amaldiçoaste a figueira estéril e disseste que toda árvore que não dá frutos é cortada, não permitas que meu trabalho seja estéril. Que ele produza frutos abundantes para tua glória.

Pai celestial, examina meu trabalho. Se há algo errado que impede a frutificação, mostra-me. Se é método, ensina-me novo caminho. Se é atitude, transforma meu coração. Se é timing, dá-me paciência para esperar.

Abençoa cada projeto que empreendo, cada serviço que ofereço, cada produto que faço. Que tudo seja feito com excelência, entregue com integridade, recebido com satisfação. Que meus clientes voltem e me recomendem.

Se estou plantando na terra errada, mostra-me onde é o solo fértil. Se estou usando sementes erradas, mostra-me o que devo semear. Se estou regando demais ou de menos, ensina-me o equilíbrio.

Espírito Santo, criatividade e inspiração, revela o que está faltando no meu trabalho para que ele frutifique abundantemente.

Maria, Mãe do fruto bendito Jesus, intercede para que meu trabalho seja frutífero. Amém.`
      },
      {
        id: 10,
        title: "Oração por Paz com as Finanças",
        content: `Senhor Jesus, Príncipe da Paz, eu te peço paz sobre minha vida financeira. A preocupação com dinheiro tem roubado meu sono, minha alegria, minha saúde. Não quero mais viver em ansiedade por causa de finanças.

São Rafael Arcanjo, curador do estresse e da ansiedade, toca meu coração preocupado. Traz a paz que só Deus pode dar, a confiança que só a fé pode produzir.

Pai celestial, tu prometeste que se buscamos primeiro o teu Reino, todas as outras coisas nos serão acrescentadas. Ajuda-me a reordenar minhas prioridades. Primeiro tu, depois as necessidades materiais. Primeiro oração, depois trabalho.

Liberta-me da obsessão com dinheiro. Da preocupação excessiva que não muda nada mas rouba tudo. Da comparação com os outros que me faz sentir sempre em falta. Da corrida por mais quando o suficiente já chegou.

Ensina-me a viver contente em qualquer situação, como Paulo aprendeu. A estar satisfeito tanto na fartura quanto na escassez. A não basear minha paz no saldo bancário, mas na tua providência.

Quando a preocupação financeira vier, ajuda-me a transformá-la em oração. Em vez de me preocupar, eu oro. Em vez de angustiar, eu confio. Em vez de desesperar, eu espero.

Espírito Santo, paz que excede todo entendimento, guarda meu coração e mente em Cristo Jesus no que diz respeito a finanças.

Maria, Mãe serena mesmo na pobreza de Belém, intercede por minha paz financeira. Amém.`
      },
      {
        id: 11,
        title: "Oração de Gratidão pela Provisão",
        content: `Senhor Deus, Pai de toda boa dádiva, eu venho a ti com coração agradecido pela tua provisão sobre minha vida. Tu me sustentaste até aqui; nunca me faltou o necessário. Mesmo nas apertos, tua mão esteve presente.

Santos Arcanjos Miguel, Gabriel e Rafael, agradeço vossa intercessão. Agradeço por apresentarem minhas causas ao trono de Deus, por caminharem comigo nesta jornada, por me protegerem de males financeiros.

Senhor Jesus, obrigado pelo pão de cada dia. Pelo teto que me cobre, pela roupa que me veste, pelo alimento que me sustenta. O que tenho não é mérito meu, é graça tua.

Pai celestial, perdoa-me pelas vezes que reclamei em vez de agradecer. Pelas vezes que olhei para o que me falta em vez do que tenho. Pelas vezes que comparei minha situação com a de outros em vez de reconhecer tua bondade.

Obrigado por cada fonte de renda que tive: cada emprego, cada cliente, cada oportunidade. Obrigado por cada pessoa que foi canal da tua provisão. Obrigado por cada surpresa financeira que chegou na hora certa.

Que minha gratidão não seja apenas de palavras, mas de atitude. Que eu demonstre gratidão administrando bem o que recebo, sendo generoso com o que tenho, confiando em ti para o futuro.

Espírito Santo, mantém viva em mim a memória das providências passadas, para que eu confie nas futuras.

Maria, serva agradecida que cantou o Magnificat, ensina-me a gratidão contínua. Amém.`
      }
    ]
  },
  viagens: {
    name: "Viagens",
    description: "Proteção em deslocamentos e jornadas",
    icon: "Plane",
    prayers: [
      {
        id: 1,
        title: "Oração Antes de Viajar",
        content: `São Rafael Arcanjo, patrono dos viajantes, companheiro fiel de Tobias em sua jornada, eu me coloco sob tua proteção antes de iniciar esta viagem. Tu que conduziste Tobias em segurança por caminhos desconhecidos, conduz-me também.

Senhor Jesus, que caminhastes pelas estradas da Palestina, acompanha-me neste deslocamento. Sê meu guia invisível, meu protetor constante, meu companheiro de jornada. Não me deixes sozinho em nenhum trecho do caminho.

Pai celestial, eu te entrego esta viagem antes de ela começar. Entrego o veículo que usarei, a estrada que percorrerei, as pessoas que encontrarei no caminho. Abençoa cada detalhe, previne cada perigo.

Protege-me de acidentes de qualquer natureza. Guarda o carro dos problemas mecânicos, dos pneus furados, das falhas técnicas. Guarda a estrada dos buracos perigosos, das condições adversas, dos motoristas imprudentes.

Dá-me prudência ao volante, atenção aos sinais, paciência no trânsito. Livra-me da pressa que causa acidentes, da distração que não vê perigos, da sonolência que perde o controle.

Abençoa também todos os outros que viajam comigo. Protege minha família, meus amigos, meus companheiros de viagem. Que cheguemos todos em segurança ao nosso destino.

Maria, Nossa Senhora Aparecida, padroeira do Brasil, estende teu manto protetor sobre esta viagem. Amém.`
      },
      {
        id: 2,
        title: "Oração na Estrada",
        content: `Senhor Jesus, eu estou na estrada agora e elevo meu coração a ti. Enquanto os quilômetros passam, não permitas que minha atenção se disperse nem minha vigilância diminua. Sê meus olhos para ver o perigo antes que ele chegue.

São Rafael Arcanjo, tu que acompanhaste Tobias por semanas de caminhada, acompanha-me também nesta jornada. Vai à minha frente limpando o caminho, fica ao meu lado protegendo meus passos.

Pai celestial, guarda este veículo em funcionamento perfeito. Mantém os freios respondendo, o motor funcionando, os pneus firmes. Não permitas nenhuma falha mecânica que coloque em risco minha vida e a dos outros.

Protege-me dos outros motoristas na estrada. Dos que dirigem bêbados, dos que ultrapassam errado, dos que não respeitam regras. Dá-me reflexos para reagir a situações inesperadas.

Quando o cansaço vier, dá-me sabedoria para parar e descansar. Quando a pressa tentar me dominar, lembra-me de que é melhor chegar tarde do que não chegar. Quando a irritação surgir, dá-me paciência e calma.

Abençoa as pessoas que cruzam comigo nesta estrada. Protege as famílias nos outros carros, os caminhoneiros que trabalham, os motociclistas vulneráveis. Que todos cheguem bem aos seus destinos.

Maria, estrela que guias os navegantes, guia-me também nesta estrada até meu destino seguro. Amém.`
      },
      {
        id: 3,
        title: "Oração por Viagem Aérea",
        content: `Senhor Deus, que estendes os céus como uma cortina, eu te entrego este voo que vou fazer. Tu que deste asas às aves e as sustentas no ar, sustenta também esta aeronave que me levará.

São Rafael Arcanjo, mensageiro que viaja entre céu e terra, acompanha-me neste voo. Protege cada sistema do avião, cada decisão dos pilotos, cada momento desta viagem aérea.

Senhor Jesus, tu que acalmastes a tempestade no mar, acalma qualquer turbulência que enfrentarmos. Dá-me paz no coração para confiar na segurança do voo, mesmo quando meu corpo sentir medo.

Pai celestial, abençoa os pilotos que comandarão este avião. Dá-lhes sabedoria, atenção, experiência. Protege-os de distrações, de erros, de problemas de saúde durante o voo. Abençoa também toda a tripulação.

Protege a estrutura do avião: as asas, os motores, o trem de pouso, os sistemas de navegação. Que tudo funcione perfeitamente do takeoff ao pouso. Que nenhum defeito, nenhum fator externo comprometa nossa segurança.

Se eu sentir medo durante o voo, dá-me paz. Lembra-me de que estou nas tuas mãos, que nada acontece sem tua permissão, que tu és maior do que qualquer perigo. Substitui minha ansiedade por confiança.

Maria, Mãe cuja alma magnificou ao Senhor, dá-me a mesma paz que tu tinhas, a certeza de que Deus cuida de mim onde quer que eu esteja. Amém.`
      },
      {
        id: 4,
        title: "Oração por Viagem em Família",
        content: `Senhor Deus, Pai de toda família, eu te consagro esta viagem que faremos juntos. Protege cada membro da minha família neste deslocamento. Que saíamos em paz e cheguemos em segurança.

Santos Arcanjos, guardiões das famílias, acompanhai-nos nesta jornada. São Miguel, protegei-nos de todo perigo. São Gabriel, mantende a comunicação e harmonia entre nós. São Rafael, guiai nosso caminho.

Senhor Jesus, que viajavas com teus discípulos, viaja conosco também. Sê o centro desta viagem em família. Que não seja apenas deslocamento físico, mas oportunidade de união, de conversa, de criação de memórias.

Pai celestial, protege especialmente as crianças que viajam conosco. Guarda-as de acidentes, de doenças no caminho, de imprevistos. Dá-nos paciência com suas necessidades, seus pedidos, seu cansaço natural.

Dá-me calma para lidar com os estresses da viagem em família. A mala que foi esquecida, o horário que atrasou, a criança que está irritada, o cônjuge que está cansado. Que nada roube a alegria de estarmos juntos.

Abençoa nosso destino. Que seja tempo de descanso, de alegria, de renovação. Que voltemos mais unidos, mais descansados, mais gratos. Que esta viagem fortaleça nossos laços familiares.

Maria, que viajavas com José e Jesus, viaja conosco também. Protege nossa família como protegeste a tua. Amém.`
      },
      {
        id: 5,
        title: "Oração por Viagem de Trabalho",
        content: `Senhor Deus, que abençoas todo trabalho honesto, eu te entrego esta viagem profissional que vou fazer. Não viajo por lazer, mas por responsabilidade. Abençoa meu deslocamento e os objetivos que preciso cumprir.

São Rafael Arcanjo, que acompanhaste Tobias em sua missão, acompanha-me também. Tu sabes que viajo para trabalhar, para prover, para cumprir compromissos. Protege-me no caminho e abençoa meus objetivos.

Senhor Jesus, que enviavas teus discípulos em missão, envia-me também com tua bênção. Que esta viagem de trabalho seja produtiva, que eu cumpra bem meus objetivos, que eu retorne com resultados.

Pai celestial, abençoa as reuniões que terei, as pessoas que encontrarei, as negociações que farei. Dá-me sabedoria para falar, discernimento para decidir, favor diante de clientes e parceiros.

Protege-me do cansaço excessivo que viagens de trabalho causam. Do acúmulo de estresse, da alimentação irregular, do sono interrompido. Dá-me equilíbrio para cuidar de mim mesmo enquanto trabalho.

Cuida da minha família que fica. Protege meu cônjuge, meus filhos, minha casa enquanto estou ausente. Que a distância não enfraqueça nossos laços, que minha ausência não cause problemas.

Maria, Mãe trabalhadora de Nazaré, intercede por esta viagem de trabalho. Que eu vá em paz e volte em paz, com missão cumprida. Amém.`
      },
      {
        id: 6,
        title: "Oração por Chegada Segura",
        content: `Senhor Deus, eu estou chegando ao meu destino e meu coração já transborda de gratidão. Tu me guardaste durante todo o trajeto. Cada quilômetro percorrido foi sob tua proteção. Obrigado, Senhor.

São Rafael Arcanjo, obrigado por me acompanhares nesta viagem. Tu caminhaste ao meu lado em cada trecho, guardaste cada curva, protegeste cada momento. Tua presença me deu segurança.

Senhor Jesus, obrigado por seres meu companheiro de jornada. Mesmo quando eu não percebia, tu estavas comigo. Nas horas de cansaço, me sustentaste. Nos momentos de perigo, me protegeste.

Pai celestial, eu reconheço que chegar em segurança não foi sorte, foi providência. Tantas coisas poderiam ter dado errado, mas tua mão me guardou. Acidentes que não aconteceram, problemas que foram evitados, perigos que passaram ao largo.

Agora que chego, abençoa este lugar que me recebe. Abençoa as pessoas que me esperam. Que minha chegada traga alegria, que minha presença seja bênção, que esta estada seja proveitosa.

Se viajei a trabalho, abençoa meus compromissos. Se viajei por lazer, abençoa meu descanso. Se viajei por necessidade, atende o propósito desta viagem. Que tudo seja para tua glória.

Maria, estrela que guiou os magos até Belém, obrigado por me guiares até aqui. Tu me trouxeste em paz ao meu destino. Amém.`
      },
      {
        id: 7,
        title: "Oração por Proteção do Veículo",
        content: `Senhor Deus, eu consagro este veículo à tua proteção. Ele é ferramenta de trabalho, meio de transporte, instrumento que uso para cumprir minhas responsabilidades. Abençoa-o e guarda-o.

São Rafael Arcanjo, guarda este carro como guardaste Tobias em sua jornada. Protege cada peça, cada sistema, cada componente. Que ele funcione bem e me leve seguro aonde preciso ir.

Senhor Jesus, eu te peço bênção sobre este veículo. Afasta dele todo defeito mecânico, todo problema elétrico, toda falha que possa causar acidente. Que ele responda bem quando eu precisar.

Pai celestial, protege este carro de acidentes. De batidas, de colisões, de capotamentos. Guarda-o quando estiver em movimento e quando estiver parado. Protege-o de roubos, de furtos, de vandalismos.

Dá-me sabedoria para cuidar bem deste veículo. Para fazer as manutenções necessárias, para não negligenciar revisões, para trocar o que precisa ser trocado. Que eu seja bom administrador do que tu me confiaste.

Se algum problema surgir, que seja pequeno e de fácil solução. Se algum acidente acontecer, que não haja feridos. Se algum roubo ocorrer, que não haja violência. Mas prefiro que nada disso aconteça; guarda-me completamente.

Maria, Nossa Senhora do Caminho, abençoa este veículo que me leva por tantos caminhos. Amém.`
      },
      {
        id: 8,
        title: "Oração por Paz Durante o Caminho",
        content: `Senhor Jesus, Príncipe da Paz, concede-me paz durante esta viagem. Não apenas segurança física, mas paz interior. Que meu coração esteja tranquilo, minha mente serena, meu espírito descansado.

São Rafael Arcanjo, companheiro de viagem que trouxe alegria a Tobias, traz paz à minha jornada. Afasta a ansiedade do trânsito, o estresse dos atrasos, a irritação dos imprevistos.

Pai celestial, o caminho pode ser longo, o trânsito pode ser intenso, os outros motoristas podem ser difíceis. Ajuda-me a manter a calma em todas as situações. Que nada roube minha paz.

Quando o trânsito estiver parado, dá-me paciência. Quando alguém me fechar no trânsito, dá-me calma. Quando os atrasos se acumularem, dá-me serenidade. Que eu não deixe o estresse externo contaminar minha paz interior.

Esta viagem pode ser oportunidade de oração, de reflexão, de conversa com Deus. Ajuda-me a usar bem este tempo, não apenas para chegar, mas para encontrar-me contigo no caminho.

Se viajo com outros, que nossa convivência seja pacífica. Que não haja brigas, discussões, irritações. Que a viagem fortaleça nossos relacionamentos em vez de desgastá-los.

Espírito Santo, paz que excede todo entendimento, habita em mim durante todo este trajeto. Que eu chegue mais sereno do que saí.

Maria, Mãe de paz, acompanha-me com tua presença tranquilizadora. Amém.`
      },
      {
        id: 9,
        title: "Oração contra Acidentes",
        content: `Senhor Deus, protetor da vida, eu clamo tua proteção contra acidentes nesta viagem. Tu que guardas Israel e nunca dormitas, guarda-me também. Que nenhum mal me atinja, nenhum acidente me alcance.

São Miguel Arcanjo, guerreiro defensor, coloca-te como escudo ao redor deste veículo. Desvia de mim todo perigo iminente, todo risco invisível, toda ameaça escondida.

Senhor Jesus, tu que caminhastes sobre as águas sem afundar, não permitas que eu afunde em acidentes. Guarda-me de colisões, atropelamentos, capotamentos. Que nenhum mal aconteça comigo nem com ninguém por minha causa.

Pai celestial, eu te peço reflexos rápidos para reagir a perigos. Visão clara para enxergar obstáculos. Atenção constante para não me distrair. Prudência para não arriscar. Humildade para reconhecer meus limites.

Protege-me dos fatores externos que não posso controlar. Do motorista bêbado que cruza meu caminho. Do animal que atravessa a estrada. Do buraco que não vi. Da chuva que reduz a visibilidade. De tudo que pode causar acidente.

Se por algum motivo um acidente acontecer, minimiza os danos. Que não haja mortes, que não haja feridos graves, que as consequências sejam as menores possíveis. Mas prefiro que nada aconteça; guarda-me completamente.

Maria, Nossa Senhora da Boa Viagem, cobre-me com teu manto protetor contra todo acidente. Amém.`
      },
      {
        id: 10,
        title: "Oração por Retorno Seguro",
        content: `Senhor Deus, a viagem de ida foi segura; agora eu te peço pela volta. Não há vitória completa enquanto eu não chegar em casa são e salvo. Completa tua proteção sobre mim até o final.

São Rafael Arcanjo, que trouxeste Tobias de volta para casa com bênçãos, traz-me também. Acompanha meu retorno como acompanhaste minha ida. Que eu volte em paz para minha família.

Senhor Jesus, há saudade de casa no meu coração. Minha família me espera, minha rotina me aguarda, meu lar me chama. Leva-me de volta com segurança para os que me amam.

Pai celestial, o retorno às vezes é mais perigoso que a ida. O cansaço se acumula, a pressa aumenta, a atenção diminui. Protege-me especialmente agora. Renova minhas forças, mantém minha atenção, guarda-me da pressa.

Se estou cansado, dá-me sabedoria para parar e descansar. É melhor chegar mais tarde do que não chegar. Não permitas que a ansiedade de voltar para casa me faça arriscar a segurança.

Prepara o coração de quem me espera. Que minha família esteja em paz, minha casa esteja segura, tudo esteja bem ao meu redor. Que o reencontro seja alegre e cheio de gratidão.

Maria, Mãe que esperou tantas vezes o retorno de Jesus, espera por mim também com tua proteção maternal até que eu chegue em casa. Amém.`
      },
      {
        id: 11,
        title: "Oração de Gratidão pela Proteção na Viagem",
        content: `Senhor Deus, eu cheguei em segurança e meu primeiro impulso é agradecer. Antes de desfazer as malas, antes de retomar a rotina, eu paro para reconhecer tua mão protetora sobre minha viagem.

São Rafael Arcanjo, obrigado por seres meu companheiro de jornada. Desde a saída até o retorno, tu caminhaste comigo. Nos momentos que vi e nos que não percebi, tu estavas me guardando. Obrigado.

Senhor Jesus, obrigado por cada quilômetro percorrido em segurança. Por cada curva que fiz sem problemas. Por cada ultrapassagem que deu certo. Por cada momento de cansaço que não resultou em acidente. Tu me guardaste.

Pai celestial, quantos perigos passaram ao meu lado sem me tocar! Quantos acidentes quase aconteceram e não aconteceram! Quantas vezes teus anjos intervieram sem que eu soubesse! Eu só saberei no céu todas as vezes que fui protegido.

Obrigado pela vida preservada. A minha e a de todos que viajaram comigo. Obrigado pelo veículo que funcionou bem. Pela estrada que nos levou. Pelo tempo que colaborou. Por cada detalhe que deu certo.

Que esta gratidão não seja apenas de momento. Que eu me lembre desta proteção quando planejar a próxima viagem. Que minha confiança em ti cresça a cada viagem segura. Que eu testemunhe tua bondade a quem quiser ouvir.

Maria, Nossa Senhora Aparecida, minha gratidão também a ti por tua intercessão maternal. Amém.`
      }
    ]
  },
  familia: {
    name: "Família",
    description: "Harmonia no lar, proteção e reconciliação",
    icon: "Users",
    prayers: [
      {
        id: 1,
        title: "Oração pela Família",
        content: `Senhor Deus, Pai de quem toda família no céu e na terra recebe o nome, eu te consagro minha família. Cada membro, cada relacionamento, cada desafio que enfrentamos juntos. Abençoa nossa casa e todos os que nela habitam.

Santos Arcanjos Miguel, Gabriel e Rafael, protegei nossa família. São Miguel, defende-nos de todo mal. São Gabriel, traz mensagens de paz entre nós. São Rafael, cura as feridas que carregamos.

Senhor Jesus, tu que cresceste em família com Maria e José, santifica nossa família. Ensina-nos a conviver com amor, a suportar com paciência, a perdoar com generosidade. Que nosso lar seja uma pequena igreja doméstica.

Pai celestial, olha para cada membro da minha família com misericórdia. Para os que estão perto e para os que estão longe. Para os que caminhamos juntos e para os que se afastaram. Para os que te conhecem e para os que ainda não te encontraram.

Onde há conflito entre nós, traz paz. Onde há distância, traz proximidade. Onde há mágoa, traz perdão. Onde há silêncio frio, traz diálogo afetuoso. Reconstrói o que foi quebrado, restaura o que foi perdido.

Protege nossa família das ameaças externas: da violência, da criminalidade, das influências negativas. Protege-nos também das ameaças internas: do egoísmo, da falta de comunicação, da negligência.

Maria, Rainha das famílias, intercede pela nossa família. Que sejamos um reflexo da Sagrada Família de Nazaré. Amém.`
      },
      {
        id: 2,
        title: "Oração pelos Filhos",
        content: `Senhor Deus, tu que me confiaste estes filhos, eu tos devolvo em oração. Eles são teus antes de serem meus. Tu os formaste no ventre, tu os conheces profundamente, tu tens planos para suas vidas.

Santos Arcanjos, guardiões das crianças e jovens, protegei meus filhos. São Miguel, defende-os do mal em todas as suas formas. São Gabriel, inspira-os com boas palavras e decisões. São Rafael, cura suas feridas e guia seus caminhos.

Senhor Jesus, que acolheste as crianças e disseste que delas é o Reino dos Céus, acolhe meus filhos em teu coração. Guarda-os na inocência enquanto puderem, fortalece-os na fé quando forem testados.

Pai celestial, eu me preocupo com meus filhos. Com sua saúde, sua educação, seu futuro, sua salvação. Às vezes a preocupação me sufoca, o medo me paralisa, a ansiedade me consome. Ajuda-me a confiar em ti.

Dá-me sabedoria para educá-los. Para saber quando ser firme e quando ser flexível. Quando falar e quando calar. Quando proteger e quando deixar enfrentar. Que eu não os sufoque nem os abandone.

Guarda-os quando eu não puder estar presente. Na escola, com os amigos, na internet, na rua. Coloca anjos ao redor deles. Afasta más companhias e influências negativas. Cerca-os de pessoas que os ajudem a crescer.

Maria, Mãe de Jesus, sê também mãe dos meus filhos. Protege-os com teu amor maternal. Amém.`
      },
      {
        id: 3,
        title: "Oração pelos Pais",
        content: `Senhor Deus, eu te agradeço pelo dom dos meus pais. Através deles tu me deste a vida, o cuidado, a educação. Mesmo com suas imperfeições, eles foram instrumentos de tua providência para mim.

Santos Arcanjos, intercessores pelos pais, abençoai meus genitores. São Miguel, protegei-os em sua velhice. São Gabriel, levai-lhes palavras de conforto e esperança. São Rafael, curai suas enfermidades e fraquezas.

Senhor Jesus, que honraste Maria e José, ensina-me a honrar meus pais. Mesmo quando for difícil, mesmo quando houver desentendimentos, mesmo quando eu não concordar com eles. Dá-me um coração grato e respeitoso.

Pai celestial, abençoa meus pais com saúde, paz e alegria. Se ainda estão conosco, prolonga seus dias com qualidade de vida. Se já partiram, recebe-os em teu Reino e consola-me na saudade.

Se minha relação com meus pais é difícil, cura as feridas entre nós. Se há mágoas antigas, ajuda-me a perdoar. Se há distância, aproxima-nos. Se há conflito, traz reconciliação. Não quero chegar ao fim carregando ressentimentos.

Se meus pais não te conhecem, trabalha em seus corações. Se estão distantes da fé, traz-os de volta. Usa-me como instrumento de testemunho, não de julgamento. Que minha vida os atraia para ti.

Maria, filha obediente de Joaquim e Ana, ensina-me a ser bom filho para meus pais. Amém.`
      },
      {
        id: 4,
        title: "Oração pelo Casamento",
        content: `Senhor Deus, que instituíste o matrimônio e o abençoaste em Caná, eu te consagro meu casamento. Esta aliança que firmei diante de ti e diante das testemunhas, renovo-a agora em oração.

Santos Arcanjos, protetores do amor conjugal, guardai nosso matrimônio. São Miguel, defende-nos das forças que querem nos separar. São Gabriel, traz mensagens de amor entre nós quando as palavras faltarem. São Rafael, cura as feridas que causamos um ao outro.

Senhor Jesus, noivo da Igreja, sê o modelo do amor em nosso casamento. Ensina-nos a nos entregar um ao outro como tu te entregaste por nós. Amor que sacrifica, que perdoa, que persevera.

Pai celestial, eu reconheço que meu casamento precisa de ti para funcionar. Nossas forças humanas são insuficientes. Os desafios são muitos: a rotina que entedia, os conflitos que ferem, as tentações que seduzem, as diferenças que irritam.

Renova nosso amor. Se esfriou com o tempo, reacende-o. Se foi ferido por traições ou negligências, cura-o. Se está ameaçado por terceiros, protege-o. Não permitas que o que tu uniste, o homem ou as circunstâncias separem.

Ajuda-nos a comunicar com respeito, a perdoar com generosidade, a cuidar um do outro com dedicação. Que nosso casamento seja testemunho do teu amor para o mundo.

Maria, esposa fiel de José, intercede pelo nosso casamento. Que ele dure até que a morte nos separe – e depois nos reencontremos no céu. Amém.`
      },
      {
        id: 5,
        title: "Oração pela Paz no Lar",
        content: `Senhor Jesus, Príncipe da Paz, entra em nossa casa trazendo tua paz. Há tensão no ar, conflitos latentes, palavras não ditas, ressentimentos guardados. Precisamos desesperadamente da tua paz.

Santos Arcanjos, mensageiros da paz divina, percorrei os cômodos da nossa casa. Onde há briga, trazei reconciliação. Onde há grito, trazei silêncio respeitoso. Onde há mágoa, trazei perdão. Transformai nosso lar em oásis de paz.

Pai celestial, nossa casa deveria ser refúgio, não campo de batalha. Deveria ser lugar de descanso, não de estresse. Deveria ser espaço de amor, não de conflito. Restaura nosso lar ao que deveria ser.

Eu reconheço minha parte nos conflitos. As vezes que fui agressivo, impaciente, insensível. As palavras que disse sem pensar, as atitudes que feriram sem querer, as negligências que magoaram. Perdoa-me e transforma-me.

Ajuda cada membro da família a fazer sua parte. Que ninguém espere que o outro mude primeiro. Que cada um assuma responsabilidade por suas ações. Que todos busquemos a paz antes de buscar ter razão.

Expulsa de nossa casa todo espírito de discórdia, de contenda, de divisão. Estes espíritos não têm lugar onde Cristo habita. Que tua presença seja tão forte que as trevas não resistam.

Maria, Rainha da Paz, habita conosco. Traze teu coração manso e humilde para nossa casa. Amém.`
      },
      {
        id: 6,
        title: "Oração pelos Avós",
        content: `Senhor Deus, eu te agradeço pelos meus avós, tesouros de sabedoria e amor. Eles são elo com o passado, exemplos de perseverança, fontes de histórias e tradições. Abençoa cada um deles.

Santos Arcanjos, guardiões dos idosos, protegei meus avós. São Miguel, defende-os em sua vulnerabilidade. São Gabriel, consolai-os em suas solidões. São Rafael, cura suas enfermidades e alivia suas dores.

Senhor Jesus, que honravas os anciãos e valorizavas sua sabedoria, ensina-me a valorizar meus avós. A visitá-los com frequência, a ouvi-los com paciência, a aprender com suas experiências. Que eu não os negligencie.

Pai celestial, meus avós estão envelhecendo. Suas forças diminuem, suas limitações aumentam, sua dependência cresce. Dá-lhes dignidade nesta fase da vida. Protege-os de doenças graves, de solidão extrema, de tratamentos indignos.

Se algum avô já partiu, consola-me na saudade e recebe-o em teu Reino. Se todos já partiram, agradeço pelo tempo que tive com eles e pela herança que deixaram. Que eu honre sua memória vivendo os valores que me ensinaram.

Dá-me oportunidades de retribuir tudo que meus avós fizeram por mim. De cuidar deles como eles cuidaram de mim. De estar presente como eles estiveram. De amá-los como fui amado.

Maria, que fostes avó de maneira espiritual da Igreja, intercede pelos meus avós. Amém.`
      },
      {
        id: 7,
        title: "Oração pela Reconciliação Familiar",
        content: `Senhor Jesus, que vieste para reconciliar o mundo com o Pai, eu te peço reconciliação em nossa família. Há rachaduras antigas entre nós, conflitos que viraram muros, mágoas que se cristalizaram em distância.

São Rafael Arcanjo, curador das feridas familiares, toca nossa família. Há corações endurecidos que precisam amolecer. Há memórias dolorosas que precisam curar. Há relacionamentos mortos que precisam ressuscitar.

Pai celestial, eu não sei nem por onde começar. O conflito é tão antigo, a mágoa tão profunda, a distância tão grande. Mas sei que para ti nada é impossível. Tu podes restaurar o que parece irrecuperável.

Trabalha no coração de cada membro da família. Nos que ofenderam, traz arrependimento. Nos que foram ofendidos, traz disposição para perdoar. Em todos, traz humildade para reconhecer a própria parte e dar o primeiro passo.

Usa-me como instrumento de reconciliação. Dá-me coragem para iniciar conversas difíceis. Sabedoria para escolher as palavras certas. Paciência para o processo demorado. Perseverança quando houver retrocessos.

Se a reconciliação completa não for possível por causa da recusa do outro, dá-me paz mesmo assim. Que eu faça minha parte e deixe o resto contigo. Que eu não carregue culpa pelo que não posso controlar.

Maria, reconciliadora dos corações, intercede por nossa família dividida. Amém.`
      },
      {
        id: 8,
        title: "Oração pela Proteção do Lar",
        content: `Senhor Deus, protetor de Israel, eu consagro minha casa à tua proteção. Este lar que me abriga, esta família que amo, tudo o que está sob este teto. Cobre-nos com teu manto protetor.

São Miguel Arcanjo, guerreiro celeste, coloca-te à porta da minha casa como sentinela. Não permitas que nenhum mal entre. Não permitas que forças das trevas atravessem esta soleira. Que nossa casa seja território sagrado.

Senhor Jesus, entra em nossa casa e faz dela tua morada. Onde tu habitas, o mal não pode permanecer. Purifica cada cômodo com tua luz. Expulsa toda influência negativa que tenha entrado por qualquer porta.

Pai celestial, protege minha casa de invasões, de roubos, de violência. Protege de incêndios, de inundações, de desastres. Protege de problemas estruturais, de acidentes domésticos, de doenças contagiosas.

Mais do que proteção física, eu peço proteção espiritual. Protege nossa casa de influências malignas que vêm pela mídia, pela internet, por visitas. Que nada entre que não seja para edificação.

Abençoa cada pessoa que cruza nossa porta. Que encontrem aqui paz, acolhimento, a presença de Deus. Que saiam melhores do que entraram. Que nossa casa seja extensão do céu na terra.

Maria, Rainha do lar, abençoa nossa casa como abençoaste a de Nazaré. Amém.`
      },
      {
        id: 9,
        title: "Oração pela Conversão dos Familiares",
        content: `Senhor Jesus, que vieste buscar e salvar o perdido, eu te trago meus familiares que ainda não te conhecem. Alguns são indiferentes, outros são hostis, outros estão confusos. Todos precisam de ti.

Santos Arcanjos, mensageiros da salvação, intercedei pelos meus familiares. São Miguel, combatei as forças que os mantêm cegos. São Gabriel, levai a mensagem do Evangelho aos seus corações. São Rafael, curai as feridas que os afastaram de Deus.

Pai celestial, meu coração dói por aqueles que amo e que não te amam. Que caminham para a eternidade sem conhecer o Caminho. Que vivem vazios sem saber que tu és a Plenitude.

Eu sei que não posso converter ninguém; isso é obra tua e do Espírito Santo. Mas eu posso orar, e oro com todo meu coração. Toca a vida deles. Usa circunstâncias, pessoas, até crises se for necessário. Faz o que for preciso para que eles te encontrem.

Usa-me como testemunho. Que minha vida fale mais do que minhas palavras. Que eles vejam em mim algo diferente, algo que os atraia para ti. Dá-me sabedoria para saber quando falar e quando calar.

Não me canso de orar por eles. Mesmo que demore anos, décadas, uma vida inteira. Não desistirei enquanto houver fôlego em mim. Acredito que um dia os verei no céu comigo.

Maria, Mãe que intercedes pelos pecadores, intercede por meus familiares que precisam de conversão. Amém.`
      },
      {
        id: 10,
        title: "Oração pela União Familiar",
        content: `Senhor Deus, que crias comunhão e não divisão, eu te peço união para minha família. Forças centrífugas tentam nos afastar: a distância geográfica, as diferenças de opinião, as agendas lotadas, as mágoas antigas.

Santos Arcanjos, servos da unidade divina, ajudai nossa família a permanecer unida. Criai pontes onde há abismos. Construí conexões onde há isolamento. Alimentai o senso de pertencimento que está morrendo.

Senhor Jesus, que oraste para que fossemos um como tu e o Pai são um, faz essa oração se cumprir em nossa família. Que sejamos unidos não apenas por laços de sangue, mas por laços de amor verdadeiro.

Pai celestial, eu sei que união não significa uniformidade. Somos diferentes, e está tudo bem. O desafio é sermos diferentes e ainda assim unidos. Ensina-nos a respeitar diferenças sem perder a comunhão.

Ajuda-nos a priorizar momentos juntos. A nos encontrar além das obrigações formais. A criar tradições que nos conectem. A manter contato mesmo na correria. A estar presentes não apenas fisicamente, mas emocionalmente.

Quando alguém da família estiver em dificuldade, que os outros corram para ajudar. Quando alguém tiver vitórias, que os outros celebrem junto. Que carreguemos os fardos uns dos outros e nos alegremos com as alegrias mútuas.

Maria, centro da Sagrada Família, sê o centro da nossa família também. Une-nos ao redor do teu Filho. Amém.`
      },
      {
        id: 11,
        title: "Oração de Consagração do Lar",
        content: `Senhor Jesus Cristo, Rei dos reis e Senhor dos senhores, eu consagro este lar a ti. Que tu sejas o Senhor desta casa, o centro desta família, o fundamento desta moradia.

Santos Arcanjos Miguel, Gabriel e Rafael, eu vos peço para guardarem esta casa. São Miguel, fica à porta como protetor. São Gabriel, habita em nossas conversas como inspirador. São Rafael, percorre os cômodos como curador.

Pai celestial, eu declaro que esta casa pertence a ti. Todo o que nela há: os móveis, os objetos, os espaços. Consagro cada cômodo: a sala onde nos reunimos, os quartos onde descansamos, a cozinha onde nos alimentamos, o banheiro onde nos purificamos.

Eu renuncio a qualquer presença ou influência maligna que tenha entrado nesta casa. Por objetos, por pessoas, por práticas, por mim mesmo. Em nome de Jesus, ordeno que toda força das trevas saia desta casa e não volte jamais.

Declaro sobre esta casa bênçãos de paz, de provisão, de saúde, de proteção. Que todos os que aqui habitam sejam abençoados. Que todos os que aqui entrarem sintam a presença de Deus. Que esta casa seja extensão do céu.

Assumo o compromisso de manter esta casa santa. De orar nela regularmente. De não permitir entrada do que é impuro. De cultivar um ambiente de amor, respeito e fé.

Maria, Rainha desta casa, habita conosco. Traz teu Filho para morar em nosso meio. Amém.`
      }
    ]
  },
  mente: {
    name: "Paz Mental",
    description: "Ansiedade, pensamentos negativos, descanso interior",
    icon: "Brain",
    prayers: [
      {
        id: 1,
        title: "Oração pela Paz Interior",
        content: `Senhor Jesus, Príncipe da Paz, eu clamo por paz interior. Minha alma está agitada, minha mente não para, meu coração está inquieto. Há uma tempestade dentro de mim que não consigo acalmar sozinho.

São Rafael Arcanjo, curador das almas aflitas, toca meu interior com o bálsamo da paz divina. Tu que conheces os caminhos de Deus, guia-me até as águas tranquilas onde minha alma pode repousar.

Pai celestial, eu busco paz em tantos lugares: no trabalho, no entretenimento, nos relacionamentos, nas conquistas. Mas a paz verdadeira só vem de ti. Só tu podes acalmar a tempestade mais profunda.

Jesus, tu disseste: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá." Eu quero essa paz que é diferente. Não a paz da ausência de problemas, mas a paz que permanece no meio da tormenta.

Ensina-me a encontrar paz nas pequenas coisas: numa respiração profunda, num momento de silêncio, numa oração murmurada. Ajuda-me a criar espaços de paz no meu dia a dia corrido.

Remove de mim a agitação que é fruto do pecado: a culpa não confessada, o ressentimento guardado, o medo alimentado. Purifica meu interior para que a paz possa habitar.

Espírito Santo, paz que excede todo entendimento, guarda meu coração e minha mente em Cristo Jesus. Que a paz de Deus reine em mim.

Maria, Mãe serena, ensina-me tua tranquilidade diante das provações. Amém.`
      },
      {
        id: 2,
        title: "Oração contra Ansiedade",
        content: `Senhor Deus, eu venho a ti ansioso, preocupado, oprimido pelo peso do amanhã. A ansiedade rouba meu presente, antecipa males que não vieram, imagina catástrofes que talvez nunca aconteçam. Eu preciso de libertação.

São Rafael Arcanjo, curador das mentes atormentadas, intercede por mim. A ansiedade não é apenas pensamento; é também sensação física, é opressão espiritual. Liberta-me em todos os níveis.

Senhor Jesus, tu disseste para não andarmos ansiosos por coisa alguma. Tu prometeste cuidar de nós como cuidas das aves e dos lírios. Eu quero crer, mas minha ansiedade é mais forte que minha fé. Aumenta minha fé!

Pai celestial, eu deposito diante de ti todas as minhas preocupações. O trabalho, as finanças, a saúde, a família, o futuro. Eu não tenho controle sobre tudo isso, mas tu tens. Ajuda-me a entregar de verdade, não apenas em palavras.

Quando a ansiedade atacar, ensina-me a respirar, a orar, a me ancorar no presente. A lembrar que o amanhã a Deus pertence, que suficiente a cada dia é seu próprio mal, que tua graça é renovada a cada manhã.

Se minha ansiedade tem raízes em traumas passados, cura-os. Se tem causas físicas, guia-me ao tratamento. Se é ataque espiritual, liberta-me. Faz o que for necessário para que eu viva em paz.

Maria, Mãe tranquila mesmo diante da cruz, ensina-me a confiar no meio da tempestade. Amém.`
      },
      {
        id: 3,
        title: "Oração contra Pensamentos Negativos",
        content: `Senhor Jesus, Luz do mundo, ilumina minha mente escurecida por pensamentos negativos. Há uma voz dentro de mim que só vê o pior, que antecipa fracassos, que repete mentiras destrutivas. Eu preciso de tua verdade.

São Miguel Arcanjo, guerreiro da verdade, combate as mentiras que habitam minha mente. Nem todos os pensamentos vêm de mim; alguns são sugeridos pelo inimigo. Expulsa toda influência maligna sobre meus pensamentos.

Pai celestial, minha mente parece um campo de batalha. Pensamentos de inadequação, de fracasso, de culpa, de medo. Eles vêm em ondas, repetitivos, insistentes, torturantes. Eu preciso de paz.

Tu disseste em tua Palavra que devo "levar cativo todo pensamento à obediência de Cristo". Mas sozinho não consigo. Os pensamentos parecem maiores que eu. Dá-me teu poder para vencê-los.

Ensina-me a substituir mentiras por verdade. Quando pensar "sou um fracasso", lembrar que sou tua obra-prima. Quando pensar "ninguém me ama", lembrar que tu me amas com amor eterno. Quando pensar "não há esperança", lembrar que tu fazes novas todas as coisas.

Espírito Santo, renova minha mente. Transforma meus padrões de pensamento. Planta em mim pensamentos que são verdadeiros, respeitáveis, justos, puros, amáveis, de boa fama.

Maria, cujo coração guardava e meditava as palavras de Deus, ensina-me a encher minha mente de verdade. Amém.`
      },
      {
        id: 4,
        title: "Oração pela Clareza Mental",
        content: `Senhor Deus, Deus de luz e entendimento, eu te peço clareza mental. Minha mente está nublada, confusa, incapaz de pensar com nitidez. Há decisões a tomar, problemas a resolver, e eu não consigo raciocinar direito.

São Gabriel Arcanjo, mensageiro da sabedoria divina, ilumina minha mente. Tu que levas a Palavra de Deus com clareza, traz clareza ao meu pensamento. Dissipa a névoa que obscurece meu entendimento.

Senhor Jesus, tu és a luz verdadeira que ilumina todo homem. Brilha sobre minha mente escurecida. Onde há confusão, traz ordem. Onde há caos, traz paz. Onde há obscuridade, traz luz.

Pai celestial, eu não sei se minha confusão mental vem de cansaço, de estresse, de problemas físicos, ou de influência espiritual. Só sei que preciso de clareza para funcionar. Intervém de acordo com a causa.

Se é cansaço, dá-me descanso. Se é estresse, dá-me paz. Se é problema físico, guia-me ao tratamento. Se é influência espiritual, liberta-me. Faz o que for necessário para restaurar minha capacidade de pensar.

Enquanto a clareza não vem plenamente, dá-me paciência comigo mesmo. Que eu não me desespere por não conseguir render como antes. Que eu aceite minha limitação temporária e confie em ti.

Espírito Santo, luz que ilumina os corações, penetra minha mente e traz a clareza que preciso.

Maria, Sede da Sabedoria, intercede pela luz na minha mente. Amém.`
      },
      {
        id: 5,
        title: "Oração contra a Insônia",
        content: `Senhor Deus, que dás sono aos teus amados, eu clamo a ti das minhas noites em claro. Enquanto outros dormem, eu me reviro na cama, lutando contra uma mente que não para e um corpo que não relaxa. Eu preciso de sono.

São Rafael Arcanjo, curador dos corpos cansados, intercede pelo meu descanso. A insônia está destruindo minha saúde, minha disposição, minha qualidade de vida. Traz cura para este mal.

Senhor Jesus, tu que dormiste tranquilamente no barco em meio à tempestade, dá-me essa capacidade de descansar mesmo quando há problemas ao redor. Ensina-me a soltar as preocupações e entregar-me ao sono.

Pai celestial, quando eu me deitar esta noite, acalma minha mente. Silencia os pensamentos que giram sem parar. Relaxa meu corpo tenso. Prepara-me para um sono reparador.

Se há algo me impedindo de dormir – preocupação, culpa, medo, dor – trata a causa. Não quero apenas dormir; quero descobrir e resolver o que me mantém acordado. Mostra-me a raiz do problema.

Abençoa meu quarto como lugar de descanso. Afasta toda perturbação espiritual que possa estar interferindo em meu sono. Que anjos guardem minha noite e demônios fujam da minha presença.

Espírito Santo, Consolador, deita-te ao meu lado e sussurra paz ao meu ouvido até que eu durma.

Maria, que velastes o sono do menino Jesus, vela também meu sono esta noite. Amém.`
      },
      {
        id: 6,
        title: "Oração por Serenidade",
        content: `Senhor Deus, concede-me a serenidade para aceitar as coisas que não posso mudar, coragem para mudar as que posso, e sabedoria para distinguir uma da outra. Esta oração eterna resume minha necessidade.

São Rafael Arcanjo, mensageiro da calma divina, derrama sobre mim o óleo da serenidade. Não quero viver na agitação constante, na reatividade compulsiva, no desespero por cada problema. Quero paz profunda.

Senhor Jesus, tu passaste pela vida com uma serenidade impressionante. Mesmo diante da morte, mantiveste a calma. Mesmo cercado de hostilidade, não te deixaste abalar. Eu quero aprender contigo.

Pai celestial, a vida me bombardeia com situações que me tiram a paz. Pessoas difíceis, problemas recorrentes, decepções constantes. Cada dia traz seus desafios. Como manter a serenidade?

A resposta está em ti, não nas circunstâncias. Se minha paz depende de tudo dar certo, nunca terei paz. Mas se minha paz está ancorada em ti, nada pode tirá-la. Ajuda-me a fazer essa transição.

Ensina-me a reagir com calma quando outros esperariam explosão. A manter a compostura quando outros entrariam em pânico. A confiar quando outros desesperariam. Que minha serenidade testemunhe teu poder.

Espírito Santo, fruto de paz, cresce em mim até que a serenidade seja minha marca registrada.

Maria, modelo de serenidade mesmo ao pé da cruz, intercede pela minha tranquilidade. Amém.`
      },
      {
        id: 7,
        title: "Oração por Descanso da Alma",
        content: `Senhor Jesus, tu disseste: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei." Eu venho a ti cansado, exausto, esgotado. Minha alma precisa de descanso.

São Rafael Arcanjo, guia para as águas tranquilas, leva-me até o lugar de repouso. Eu estou correndo há tanto tempo que esqueci como parar. Ensina-me novamente a descansar.

Pai celestial, o cansaço que sinto não é apenas físico; é da alma. Estou cansado de lutar, de me esforçar, de carregar pesos que talvez nem fossem meus. Preciso de alívio profundo.

Tu prometeste em tua Palavra que há um descanso para o povo de Deus. Que eu entraria nesse descanso se cresse. Eu quero crer e entrar. Não o descanso da preguiça, mas o descanso da confiança.

Ajuda-me a soltar os fardos que venho carregando. Os que tu nunca me pediste para carregar. Os que são grandes demais para mim. Os que pertencem a outros mas eu tomei para mim. Ensina-me a depositar aos teus pés.

Cria em minha vida espaços de descanso. Momentos de silêncio, de oração, de simplesmente estar contigo sem fazer nada. Que eu não me sinta culpado por descansar; tu mesmo descansaste no sétimo dia.

Espírito Santo, descanso para as almas cansadas, habita em mim e traz repouso.

Maria, que encontraste descanso no coração de Deus, intercede pelo descanso da minha alma. Amém.`
      },
      {
        id: 8,
        title: "Oração contra Pânico",
        content: `Senhor Jesus, eu clamo a ti no meio do pânico. Meu coração dispara, meu peito aperta, meu ar falta, meu corpo treme. Parece que vou morrer, mas sei que é pânico. Preciso de ti agora.

São Miguel Arcanjo, guerreiro contra o medo, vem em meu socorro. O pânico é uma mentira do corpo e da mente. Combate essa mentira com a verdade de Deus. Estou seguro, mesmo que não pareça.

Pai celestial, tu não me deste espírito de covardia, mas de poder, amor e equilíbrio. Este pânico não vem de ti. Eu rejeito o medo descontrolado e escolho confiar em ti, mesmo que meu corpo não obedeça.

Ajuda-me a respirar. Cada respiração é um lembrete de que estou vivo, de que vou sobreviver a isso, de que a crise vai passar. Inspira, expira. Tua presença está comigo a cada fôlego.

Quando o pânico me atacar, lembra-me de que já passei por isso antes e sobrevivi. Que os sintomas são assustadores mas não mortais. Que essa onda vai passar como todas as outras passaram.

Se estes ataques têm raízes mais profundas – traumas, ansiedade generalizada, problemas físicos – guia-me ao tratamento. Não há vergonha em buscar ajuda profissional. Usa médicos e terapeutas como teus instrumentos.

Espírito Santo, paz que transcende todo entendimento, acalma meu sistema nervoso desregulado.

Maria, Mãe de consolação, abraça-me até a crise passar. Amém.`
      },
      {
        id: 9,
        title: "Oração por Autocontrole",
        content: `Senhor Jesus, que mantiveste o autocontrole mesmo diante dos insultos, das tentações e da morte, ensina-me essa virtude. Eu sou impulsivo, reativo, escravo das minhas emoções. Preciso de domínio próprio.

São Miguel Arcanjo, disciplinado guerreiro celestial, intercede por meu autocontrole. Tu serves a Deus com foco e determinação. Ajuda-me a dominar meus impulsos e servir com a mesma disciplina.

Pai celestial, eu reconheço que perco o controle com frequência. Na raiva que explode, na tristeza que paralisa, no desejo que domina, no medo que imobiliza. Minhas emoções me governam em vez de eu governá-las.

Espírito Santo, fruto de domínio próprio, cresce em mim. Dá-me a capacidade de sentir emoções intensas sem ser dominado por elas. De pausar antes de reagir, de pensar antes de falar, de escolher antes de agir.

Ajuda-me a reconhecer os gatilhos que disparam minha perda de controle. A situação, a pessoa, o pensamento que antecede a explosão. Quando perceber o gatilho, dá-me estratégias para interromper a reação automática.

Se minhas explosões têm machucado pessoas, ajuda-me a pedir perdão e a reparar o dano. Que o autocontrole que desenvolvo seja não apenas para meu benefício, mas para proteção dos que me rodeiam.

Transforma minha impulsividade em espontaneidade saudável. Não quero ser frio e calculista, mas também não quero ser refém das emoções.

Maria, modelo de autocontrole mesmo na dor extrema, intercede por minha temperança. Amém.`
      },
      {
        id: 10,
        title: "Oração por Esperança",
        content: `Senhor Deus, Deus da esperança, eu venho a ti desanimado, sem perspectiva, lutando para ver luz no fim do túnel. A desesperança é peso que me afunda. Eu preciso de esperança para continuar.

São Rafael Arcanjo, mensageiro da esperança divina, traz uma palavra de alento ao meu coração cansado. Tu que acompanhaste Tobias em jornada que parecia impossível e a tornaste vitoriosa, acompanha-me também.

Senhor Jesus, tu és a esperança do mundo. Em ti, mortos ressuscitam, pecadores são perdoados, impossíveis se tornam possíveis. Se tu estás comigo, há esperança. Aumenta minha fé em ti.

Pai celestial, às vezes olho para minha situação e não vejo saída. Os problemas parecem maiores que as soluções. O caminho parece fechado por todos os lados. Onde está a esperança?

A esperança não está nas circunstâncias; está em ti. Tu és o Deus que abre mares, que derruba muralhas, que transforma desertos em jardins. O que parece impossível para mim é simples para ti.

Ajuda-me a lembrar das vezes que desesperei no passado e tu me surpreendeste. Das portas que se abriram quando não esperava. Das soluções que vieram de onde menos imaginava. Tu já me provaste que és fiel; ajuda-me a confiar de novo.

Espírito Santo, esperança que não decepciona, enche meu coração. Que eu espere contra toda esperança, como Abraão esperou.

Maria, Mãe da Esperança, intercede pela renovação da minha esperança. Amém.`
      }
    ]
  },
  protecao: {
    name: "Proteção",
    description: "Proteção diária, casa, trabalho e família",
    icon: "Shield",
    prayers: [
      {
        id: 1,
        title: "Oração de Proteção Diária",
        content: `São Miguel Arcanjo, príncipe das milícias celestes, eu me coloco sob tua proteção neste novo dia que começa. Tu que derrotaste Lúcifer e suas hostes, defende-me das forças do mal que buscam minha destruição.

Senhor Jesus, cobre-me com teu precioso Sangue. Que ele seja escudo contra todo mal visível e invisível. Que nenhum ataque do inimigo me alcance hoje. Que nenhuma maldição tenha efeito sobre minha vida.

Pai celestial, eu te entrego este dia antes de vivê-lo. Cada hora, cada encontro, cada decisão. Vai na minha frente preparando o caminho. Fica ao meu lado me protegendo. Guarda minhas costas dos ataques que não vejo vir.

Protege minha mente dos pensamentos que o inimigo quer plantar. Protege meu coração dos sentimentos que me afastam de ti. Protege meus olhos do que não devo ver. Protege meus ouvidos do que não devo ouvir.

Envia teus anjos para me acompanharem hoje. Que eles me guardem em todos os meus caminhos, que me livrem de acidentes, de violência, de doenças, de todo mal.

Se hoje eu enfrentar situações difíceis, dá-me sabedoria para atravessá-las. Se encontrar pessoas hostis, dá-me graça para lidar com elas. Se cair em tentação, dá-me força para resistir.

Espírito Santo, discernimento divino, alerta-me dos perigos antes que me atinjam.

Maria, Mãe protetora, estende teu manto sobre mim durante todo este dia. Amém.`
      },
      {
        id: 2,
        title: "Oração ao Sair de Casa",
        content: `Senhor Deus, eu abro esta porta para enfrentar o mundo lá fora. Antes de dar o primeiro passo, consagro a ti minha saída. Protege-me em cada metro que percorrer, em cada lugar que visitar, em cada pessoa que encontrar.

São Rafael Arcanjo, companheiro de viagem de Tobias, acompanha-me hoje. Do momento que saio até o momento que retorno, não me deixes só. Guia meus passos, protege meus caminhos.

Senhor Jesus, tu que caminhavas pelas estradas da Galileia, caminha comigo hoje. Sê meus olhos para ver o perigo antes que chegue. Sê meu escudo quando o perigo chegar. Sê minha força para enfrentá-lo.

Pai celestial, o mundo lá fora é imprevisível. Há trânsito perigoso, pessoas mal-intencionadas, vírus invisíveis, acidentes inesperados. Eu não tenho controle sobre nada disso, mas tu tens. Eu confio em ti.

Protege-me de acidentes de trânsito, de assaltos, de violência, de doenças contagiosas. Guarda-me dos perigos que conheço e dos que desconheço. Afasta de mim todo mal antes que me alcance.

Abençoa também todos os que vou encontrar hoje. Clientes, colegas, desconhecidos. Que meus encontros sejam pacíficos, que ninguém me faça mal, que eu não faça mal a ninguém.

E quando este dia terminar, traz-me de volta em segurança para minha casa e para minha família.

Maria, Nossa Senhora do Caminho, guia meus passos fora de casa. Amém.`
      },
      {
        id: 3,
        title: "Oração pela Proteção da Família",
        content: `Senhor Deus, Protetor das famílias, eu clamo tua cobertura sobre cada membro da minha família. Sobre meu cônjuge, meus filhos, meus pais, meus irmãos, meus parentes. Cada um deles é precioso para mim e para ti.

Santos Arcanjos Miguel, Gabriel e Rafael, protegei minha família. São Miguel, defende-os de todo ataque do mal. São Gabriel, traz mensagens de vida e não de morte. São Rafael, guarda-os em todos os caminhos.

Senhor Jesus, tu que protegeste a Sagrada Família fugindo para o Egito, protege também minha família das ameaças que nos cercam. Da violência, das doenças, dos acidentes, das más influências.

Pai celestial, eu te entrego especialmente as crianças da família. Elas são vulneráveis e dependem da nossa proteção e da tua. Guarda-as de todo mal: do abuso, da negligência, do perigo, das más companhias.

Protege os jovens das tentações que são muitas. Do vício, da promiscuidade, da violência, do desespero. Guia-os em caminhos de vida, não de morte.

Protege os mais velhos na sua fragilidade. Da doença, da solidão, do abandono, da morte prematura. Dá-lhes anos com qualidade e um fim em paz.

Espírito Santo, laço de amor, mantém nossa família unida e protegida. Que nenhum de nós pereça, mas todos cheguemos salvos à eternidade.

Maria, Rainha das famílias, protege a minha. Amém.`
      },
      {
        id: 4,
        title: "Oração pela Proteção no Trabalho",
        content: `Senhor Deus, eu consagro meu ambiente de trabalho à tua proteção. O lugar onde passo tantas horas, onde exerço minha profissão, onde enfrento desafios diários. Abençoa e protege este espaço.

Santos Arcanjos, guardiões dos trabalhadores, protegei-me no trabalho. São Miguel, defende-me de injustiças e perseguições. São Gabriel, inspira minha comunicação e criatividade. São Rafael, guarda-me de acidentes e doenças ocupacionais.

Senhor Jesus, que trabalhaste como carpinteiro, santifica meu trabalho. Protege minhas mãos para que não se machuquem. Protege minha mente para que tenha clareza. Protege meu corpo para que suporte a jornada.

Pai celestial, o ambiente de trabalho tem seus perigos. Acidentes físicos, pressão psicológica, conflitos interpessoais, tentações éticas. Guarda-me de todos eles.

Protege-me de colegas que querem me prejudicar. De chefes que abusam do poder. De clientes que são injustos. De situações que me colocam em risco. Dá-me sabedoria para navegar os perigos do mundo profissional.

Se trabalho em ambiente perigoso, protege-me especialmente. Que nenhum acidente me atinja. Que eu volte para casa íntegro todos os dias. Que minha família não sofra por causa do meu trabalho.

Espírito Santo, guia-me em todas as decisões no trabalho. Que eu aja com integridade e seja protegido pela minha retidão.

Maria, trabalhadora de Nazaré, intercede pela minha proteção no trabalho. Amém.`
      },
      {
        id: 5,
        title: "Oração pela Proteção da Casa",
        content: `Senhor Deus, eu consagro minha casa à tua proteção. Este teto que me cobre, estas paredes que me abrigam, este espaço que chamo de lar. Que tua presença habite aqui e afaste todo mal.

São Miguel Arcanjo, sentinela celeste, coloca-te à porta da minha casa. Não permitas que nenhum mal atravesse esta soleira. Nem ladrão, nem doença, nem espírito maligno. Que nossa casa seja fortaleza protegida.

Senhor Jesus, entra em nossa casa e faz dela teu lar. Onde tu habitas, as trevas não podem permanecer. Tua presença é nossa maior proteção. Fica conosco, Senhor.

Pai celestial, protege nossa casa de invasões e roubos. Guarda-a de incêndios e desastres naturais. Livra-a de problemas estruturais e acidentes domésticos. Que este lugar seja seguro para todos que nele habitam.

Mais do que proteção física, peço proteção espiritual. Que nenhuma influência maligna entre por qualquer porta: pela televisão, pelo computador, pelo celular, por visitas. Que esta casa seja território santo.

Abençoa cada cômodo desta casa. A sala onde nos reunimos, os quartos onde descansamos, a cozinha onde nos alimentamos. Que cada espaço seja preenchido pela tua paz.

Espírito Santo, habita nesta casa. Faz dela templo de tua presença, santuário de oração, refúgio de paz.

Maria, dona de casa de Nazaré, abençoa e protege nosso lar. Amém.`
      },
      {
        id: 6,
        title: "Oração contra Inveja",
        content: `Senhor Deus, eu clamo tua proteção contra a inveja que me rodeia. Tu vês os olhos que me olham com ciúme, os corações que desejam meu mal, as bocas que falam contra mim. Protege-me de suas consequências.

São Miguel Arcanjo, protetor contra o mal espiritual, combate os efeitos da inveja sobre minha vida. Eu sei que a inveja abre portas para ataques espirituais. Fecha essas portas com teu poder.

Senhor Jesus, tu foste invejado pelos líderes religiosos do teu tempo. A inveja os levou a te crucificar. Tu entendes esse mal. Protege-me de seus efeitos sobre minha vida, minha saúde, meu trabalho, minha família.

Pai celestial, eu entrego a ti o que as pessoas invejam em mim. Se é bênção tua, ninguém pode tirar. Se é fruto do meu esforço, é merecido. Não quero me encolher para não ser invejado; quero ser protegido para brilhar.

Que as energias negativas enviadas contra mim não tenham efeito. Que as palavras de maldição voltem vazias. Que os olhos invejosos não consigam me alcançar. Que eu esteja sob tua cobertura impenetrável.

Ao mesmo tempo, guarda meu coração da inveja. Que eu não faça a outros o que não quero que façam a mim. Que eu celebre o sucesso alheio em vez de invejá-lo.

Espírito Santo, preenche-me com gratidão pelo que tenho, em vez de olhar para o que outros têm.

Maria, livre de toda inveja, protege-me desse mal. Amém.`
      },
      {
        id: 7,
        title: "Oração contra Perigos",
        content: `Senhor Deus, eu clamo tua proteção contra os perigos que me cercam. Perigos visíveis e invisíveis, conhecidos e desconhecidos, naturais e sobrenaturais. Tu que vês tudo, guarda-me de tudo.

São Miguel Arcanjo, guerreiro protetor, ergue teu escudo sobre mim. Desvia de mim todo projétil do mal, toda ameaça à minha vida, todo perigo iminente. Sê minha defesa constante.

Senhor Jesus, tu que acalmastes a tempestade, acalma também as tormentas que ameaçam minha vida. Tu que andaste sobre as águas, caminha comigo sobre os perigos deste mundo.

Pai celestial, eu vivo em um mundo perigoso. Violência, doenças, acidentes, desastres. A qualquer momento, algo pode acontecer. Eu não vivo em medo, mas em alerta. E acima de tudo, eu confio em ti.

Dá-me discernimento para reconhecer perigos antes de me atingirem. Para evitar lugares perigosos, pessoas perigosas, situações perigosas. A melhor proteção é a prevenção.

Mas quando o perigo for inevitável, protege-me no meio dele. Quando eu atravessar o vale da sombra da morte, que eu não tema mal algum, porque tu estás comigo.

Se mesmo assim algum mal me alcançar, dá-me força para superá-lo, para aprender com ele, para sair mais forte do que entrei.

Espírito Santo, alerta-me dos perigos com tua intuição espiritual.

Maria, Mãe protetora, envolve-me em teu manto contra todo perigo. Amém.`
      },
      {
        id: 8,
        title: "Oração por Proteção Espiritual",
        content: `Senhor Deus, eu reconheço que minha maior necessidade de proteção é espiritual. Há forças invisíveis que querem minha destruição, não do corpo apenas, mas da alma. Protege-me no nível mais profundo.

São Miguel Arcanjo, príncipe dos exércitos celestiais, defende-me contra as forças do inferno. Tu que expulsaste Satanás e seus anjos do céu, expulsa de perto de mim toda presença demoníaca.

Senhor Jesus, pelo poder do teu Sangue derramado na cruz, eu me cubro de proteção espiritual. Que nenhum demônio ouse me tocar, nenhuma maldição tenha efeito, nenhum feitiço me alcance.

Pai celestial, eu renuncio a toda porta que possa ter aberto para o mal: pecados, práticas esotéricas, objetos amaldiçoados, pactos inconscientes. Se há brechas em minha proteção, fecha-as agora.

Envia teus anjos guerreiros para batalhar ao meu lado. Que eles combatam as forças que me atacam, que guardem meus sonhos à noite, que protejam minha mente durante o dia.

Reveste-me com a armadura de Deus: o cinto da verdade, a couraça da justiça, os calçados do evangelho, o escudo da fé, o capacete da salvação, a espada do Espírito. Que eu esteja totalmente protegido.

Espírito Santo, discernimento dos espíritos, alerta-me de todo ataque espiritual. Que eu reconheça a origem das influências sobre minha vida.

Maria, terror dos demônios, protege-me com tua presença que o mal não suporta. Amém.`
      },
      {
        id: 9,
        title: "Oração em Momentos de Medo",
        content: `Senhor Jesus, eu estou com medo agora e preciso de ti. O medo me paralisa, tira minha paz, rouba minha confiança. Mas tu disseste: "Não temas, apenas crê." Ajuda-me a crer quando o medo é forte.

São Miguel Arcanjo, guerreiro sem medo, empresta-me tua coragem. Tu enfrentaste o príncipe das trevas sem vacilar porque confiavas em Deus. Dá-me essa mesma confiança para enfrentar o que me assusta.

Pai celestial, tu não me deste espírito de covardia, mas de poder, amor e equilíbrio. O medo que sinto não vem de ti. Pode ser humano, pode ser demoníaco, mas não é de ti. Eu rejeito o medo e escolho a fé.

Mostra-me se meu medo é válido ou exagerado. Se há perigo real, dá-me sabedoria para enfrentá-lo ou evitá-lo. Se é apenas minha mente criando fantasmas, acalma-me com tua verdade.

Quando o medo vier em ondas, ajuda-me a respirar, a orar, a me ancorar em ti. Cada respiração é um lembrete de que estou vivo, de que tu estás comigo, de que vou superar isso.

Substitui meu medo por coragem, minha ansiedade por paz, meu pânico por confiança. Não tiro meus olhos de ti, Senhor. Tu és maior que qualquer coisa que eu tema.

Espírito Santo, Consolador, envolve-me com paz que excede o entendimento.

Maria, que tiveste medo ao ver o anjo mas disseste sim, dá-me coragem para prosseguir apesar do medo. Amém.`
      },
      {
        id: 10,
        title: "Oração de Consagração do Dia",
        content: `Senhor Deus, eu consagro este dia a ti antes de vivê-lo. Cada hora que virá, cada situação que enfrentarei, cada pessoa que encontrarei. Tudo é teu antes de ser meu. Abençoa e protege.

Santos Arcanjos Miguel, Gabriel e Rafael, acompanhai-me durante todo este dia. São Miguel, sede meu escudo. São Gabriel, sede minha inspiração. São Rafael, sede meu guia. Não me deixem só nem por um momento.

Senhor Jesus, eu me coloco em tuas mãos como o barro nas mãos do oleiro. Faz de mim e deste dia o que quiseres. Usa-me para tua glória, protege-me do mal, guia-me em tua vontade.

Pai celestial, eu não sei o que este dia reserva. Pode trazer alegrias ou dificuldades, vitórias ou desafios. Seja o que for, eu o enfrento contigo. Nada me surpreende que não te surpreenda primeiro.

Protege meus pensamentos hoje. Que eu pense o que é verdadeiro, nobre, justo, puro, amável. Protege minhas palavras. Que eu fale o que edifica, encoraja, abençoa. Protege minhas ações. Que eu faça o que é certo, mesmo quando difícil.

Quando a tentação vier hoje, dá-me força para resistir. Quando o desânimo bater, dá-me esperança para continuar. Quando o medo surgir, dá-me coragem para avançar.

E quando este dia terminar, que eu possa deitá-lo aos teus pés com gratidão, sem arrependimentos.

Espírito Santo, guia cada passo deste dia consagrado.

Maria, que vivestes cada dia para Deus, ensina-me a fazer o mesmo. Amém.`
      }
    ]
  },
  gratidao: {
    name: "Gratidão",
    description: "Agradecimento, alegria e reconhecimento das bênçãos",
    icon: "Star",
    prayers: [
      {
        id: 1,
        title: "Oração de Gratidão pelo Dia",
        content: `Senhor Deus, eu te agradeço por este dia que me deste. Mais um dia de vida, mais uma chance de recomeçar, mais uma página em branco para escrever. Obrigado pelo presente que é o presente.

Santos Arcanjos Miguel, Gabriel e Rafael, obrigado por vossa companhia invisível. Por me protegerdes, inspirardes, guiardes. Vocês são presentes de Deus que muitas vezes eu nem percebo.

Senhor Jesus, obrigado por estares vivo e presente. Por seres não apenas figura histórica, mas companheiro real. Por caminhares comigo mesmo quando não te vejo.

Pai celestial, eu quero agradecer pelo óbvio que deixei de notar. Pelo ar que respiro sem pensar, pelo coração que bate sem pedir, pelo sol que nasce sem cobrar. Tantos milagres cotidianos que vieram sem gratidão.

Obrigado pelas pessoas que cruzaram meu caminho hoje. Cada uma foi uma oportunidade de amar, de servir, de crescer. Mesmo as difíceis me ensinaram algo.

Obrigado pelas pequenas alegrias que tive hoje. O café da manhã, a conversa com um amigo, o momento de descanso. A vida é feita de pequenas coisas, e sou grato por elas.

Se houve dificuldades hoje, obrigado também. Elas me fortaleceram, me ensinaram, me aproximaram de ti. Até nas lágrimas há motivo de gratidão.

Espírito Santo, mantém viva em mim a chama da gratidão. Que eu termine cada dia mais grato do que comecei.

Maria, cujo Magnificat é canto de gratidão, ensina-me a agradecer sempre. Amém.`
      },
      {
        id: 2,
        title: "Oração de Gratidão pela Família",
        content: `Senhor Deus, eu te agradeço pela família que me deste. Imperfeita, complicada às vezes, mas minha. Não a escolhi, mas foi escolhida para mim por ti. E por isso sou grato.

Santos Arcanjos, obrigado por protegerdes minha família. Por guardarem meus pais, meus filhos, meu cônjuge, meus irmãos. Por manterem a família unida quando tantas forças tentam nos separar.

Senhor Jesus, obrigado por teres vivido em família. Por santificares a vida familiar com tua presença em Nazaré. Por mostrares que Deus habita onde há amor, mesmo nas casas mais simples.

Pai celestial, obrigado pelos meus pais. Por me darem a vida, por me criarem, por fazerem o melhor que podiam. Se erraram, eu perdoo; se acertaram, sou grato.

Obrigado pelo meu cônjuge, se tenho um. Por caminhar comigo, por me suportar, por construir vida junto. O casamento nem sempre é fácil, mas é bênção.

Obrigado pelos meus filhos, se os tenho. Por me ensinarem mais do que ensinei, por me amarem mesmo com minhas falhas, por serem extensão da minha vida. Eles são minha maior alegria.

Obrigado pelos meus irmãos, companheiros de infância e de vida. Pelos avós que tive, pelas memórias que deixaram. Pela família estendida que multiplica o amor.

Espírito Santo, ajuda-me a expressar gratidão à minha família todos os dias, não apenas em oração.

Maria, Mãe da Sagrada Família, abençoa a minha. Amém.`
      },
      {
        id: 3,
        title: "Oração de Gratidão pela Saúde",
        content: `Senhor Deus, eu te agradeço pela saúde que tenho. Talvez não seja perfeita, mas estou vivo, estou de pé, estou funcionando. Isso não é garantido; é graça.

São Rafael Arcanjo, medicina de Deus, obrigado por intercederes pela minha saúde. Por cada doença que foi curada, cada sintoma que passou, cada diagnóstico que deu bom.

Senhor Jesus, médico divino, obrigado pelas curas que operaste em minha vida. As que percebi e as que nem soube que aconteceram. Tu me guardas de males sem que eu saiba.

Pai celestial, obrigado por cada órgão do meu corpo que funciona bem. Pelo coração que bate, pelos pulmões que respiram, pelos rins que filtram. Pela complexidade milagrosa do corpo humano que tu criaste.

Obrigado pela mente que pensa, pela memória que guarda, pelos sentidos que percebem o mundo. Por poder ver cores, ouvir música, sentir abraços, saborear alimentos, cheirar flores. Cada sentido é presente.

Se minha saúde não é perfeita, ainda assim agradeço. Pelo que funciona, pelo tratamento disponível, pela esperança de melhora. E pelo que a limitação me ensinou sobre dependência de ti.

Espírito Santo, ajuda-me a cuidar desta saúde que tu me deste. A não abusar do corpo que é teu templo.

Maria, Saúde dos Enfermos, obrigado por intercederes pela minha saúde física e espiritual. Amém.`
      },
      {
        id: 4,
        title: "Oração de Gratidão pelo Trabalho",
        content: `Senhor Deus, eu te agradeço pelo trabalho que tenho. Nem todos têm, e eu tenho. Isso não é mérito apenas meu; é providência tua.

Santos Arcanjos, obrigado por me acompanhardes no trabalho. Por protegerdes minha atividade, inspirardes minha criatividade, guiardes minhas decisões profissionais.

Senhor Jesus, que trabalhaste como carpinteiro, obrigado por santificares o trabalho humano. Por mostrares que trabalhar é digno, é santo, é forma de servir a Deus e ao próximo.

Pai celestial, obrigado pela oportunidade de sustentar a mim e à minha família com trabalho honesto. Pelo salário que paga as contas, pelo propósito que dá sentido aos dias, pelas pessoas que conheço no ambiente profissional.

Obrigado pelas habilidades que tu me deste e que uso no trabalho. Pelos talentos que desenvolvi, pelas competências que adquiri. Tudo vem de ti.

Se meu trabalho não é o ideal, ainda assim agradeço. Por ter um enquanto busco melhor. Por aprender mesmo no que não gosto. Por desenvolver paciência nas dificuldades.

Obrigado pelos colegas de trabalho, pelos chefes, pelos clientes. Cada pessoa é oportunidade de praticar amor, paciência, serviço.

Espírito Santo, ajuda-me a trabalhar com excelência e gratidão, não com reclamação e má vontade.

Maria, trabalhadora de Nazaré, ensina-me a santificar meu trabalho como santificavas o teu. Amém.`
      },
      {
        id: 5,
        title: "Oração de Gratidão pela Proteção",
        content: `Senhor Deus, eu te agradeço pela proteção que nunca me faltou. Pelas vezes que fui guardado de acidentes, de violências, de doenças, de mortes prematuras. Tu me guardaste mais do que eu sei.

São Miguel Arcanjo, meu defensor, obrigado pelas batalhas que travaste ao meu lado sem que eu soubesse. Pelos perigos que desviaste, pelos ataques que interceptaste, pelos males que afastaste.

Senhor Jesus, obrigado pelo teu Sangue que me protege. Por me cobrir com escudo invisível que o mal não atravessa. Por me cercar de anjos guardiões.

Pai celestial, eu olho para trás e vejo tua mão em cada situação. No acidente que quase aconteceu mas não aconteceu. Na doença que poderia ter sido fatal mas foi curada. Na armadilha que estava montada mas foi desarmada.

Obrigado por proteger minha família quando eu não podia. Por guardar meus filhos na escola, meu cônjuge no trabalho, meus pais na velhice. Por proteger os que amo mesmo à distância.

Obrigado por proteger minha casa, meu trabalho, minhas finanças. Por fechar portas de perigo e abrir portas de segurança. Por me conduzir por caminhos seguros mesmo quando eu não via.

Espírito Santo, mantém-me grato pela proteção recebida. Que eu nunca me acostume com a segurança a ponto de esquecê-la.

Maria, Mãe protetora, obrigado pelo teu manto que me cobre. Amém.`
      },
      {
        id: 6,
        title: "Oração de Gratidão nas Dificuldades",
        content: `Senhor Deus, eu escolho te agradecer mesmo em meio às dificuldades. Não porque a dor seja boa, mas porque tu és bom. Não porque entendo tudo, mas porque confio em ti.

Santos Arcanjos, ajudai-me a ver a mão de Deus nas provações. A encontrar motivo de gratidão onde minha carne só vê motivo de queixa.

Senhor Jesus, tu sofreste mais do que eu jamais sofrerei, e ainda assim agradeceste ao Pai. Ensina-me esse mesmo coração. A dar graças em todas as circunstâncias, como Paulo ensinou.

Pai celestial, obrigado pelas dificuldades que me fizeram crescer. Pelas crises que fortaleceram minha fé. Pelos problemas que me aproximaram de ti. Pelo fogo que purificou meu caráter.

Obrigado pelo que as dificuldades me ensinaram. Humildade quando eu era orgulhoso. Dependência quando eu era autossuficiente. Compaixão quando eu era indiferente. Cada lição foi presente.

Obrigado pelas pessoas que surgiram para me ajudar nas dificuldades. Pelos amigos que não me abandonaram. Pela família que me sustentou. Por ti, que nunca me deixaste só.

Eu não entendo tudo, mas agradeço por tudo. Porque tu és Deus, e não há erro em ti. Porque tu me amas, e não há maldade em teu coração.

Espírito Santo, transforma minha reclamação em gratidão, minha amargura em louvor.

Maria, que agradeceste mesmo ao pé da cruz, ensina-me gratidão nas dificuldades. Amém.`
      },
      {
        id: 7,
        title: "Oração de Gratidão pela Fé",
        content: `Senhor Deus, eu te agradeço pelo dom da fé. Por eu crer em ti, conhecer teu amor, pertencer a ti. Milhões vivem sem fé, e eu tenho esse tesouro. Que graça!

Santos Arcanjos, obrigado por intercederdes pelo fortalecimento da minha fé. Por combaterdes as dúvidas que me atacam, por inspirarem verdades que me sustentam.

Senhor Jesus, obrigado por te revelares a mim. Por me chamares pelo nome, por me acolheres como filho, por me prometeres vida eterna. A fé em ti é o bem mais precioso que possuo.

Pai celestial, obrigado por cada meio pelo qual minha fé foi plantada e nutrida. Pelos pais que me ensinaram a rezar. Pela Igreja que me formou. Pelos pregadores que me inspiraram. Pelos livros que me instruíram.

Obrigado pela Bíblia, tua Palavra viva. Por cada versículo que me consolou, cada promessa que me sustentou, cada verdade que me transformou.

Obrigado pelos sacramentos que me fortalecem. Pelo batismo que me incorporou à Igreja. Pela Eucaristia que me alimenta. Pela confissão que me restaura.

Se minha fé é pequena às vezes, ainda assim agradeço. É fé. E tu prometeste que até fé do tamanho de grão de mostarda pode mover montanhas.

Espírito Santo, aumenta minha fé. E aumenta minha gratidão por tê-la.

Maria, modelo de fé, ensina-me a cultivar esse dom precioso. Amém.`
      },
      {
        id: 8,
        title: "Oração de Gratidão pelos Arcanjos",
        content: `Senhor Deus, eu te agradeço pelos Santos Arcanjos que colocaste em minha vida. Por São Miguel, São Gabriel e São Rafael. Esses príncipes celestiais que me servem, protegem e guiam.

São Miguel Arcanjo, obrigado por seres meu defensor. Por combateres ao meu lado nas batalhas espirituais. Por erguer tua espada contra meus inimigos e teu escudo sobre minha vida. Tu és presente precioso.

São Gabriel Arcanjo, obrigado por seres meu mensageiro. Por trazer palavras de Deus ao meu coração. Por anunciar boas novas quando preciso de esperança. Por inspirar minha comunicação e minha oração.

São Rafael Arcanjo, obrigado por seres meu curador e guia. Por me acompanhar nos caminhos como acompanhaste Tobias. Por trazer cura às minhas feridas, bálsamo às minhas dores, esperança às minhas enfermidades.

Pai celestial, obrigado por criares os anjos para nos servirem. Por não nos deixar sozinhos na luta espiritual. Por enviar esses poderosos guerreiros e servidores para estar conosco.

Obrigado pelo meu anjo da guarda, que me acompanha desde o primeiro suspiro. Que vela meu sono, protege meu despertar, inspira meus passos.

Espírito Santo, ajuda-me a cultivar devoção sincera aos santos anjos. A invocá-los com frequência, a agradecer sua companhia constante.

Maria, Rainha dos Anjos, ensina-me a honrar esses servos celestiais que tu mesma reverencias. Amém.`
      },
      {
        id: 9,
        title: "Oração de Gratidão por Recomeços",
        content: `Senhor Deus, eu te agradeço por cada recomeço que me deste. Por cada nova chance quando eu merecia ser descartado. Por cada porta aberta quando eu tinha fechado todas.

Santos Arcanjos, obrigado por intercederdes por meus recomeços. Por apresentarem minhas causas a Deus quando eu mesmo já tinha desistido de mim.

Senhor Jesus, obrigado por seres o Deus dos recomeços. Por levantares Pedro depois da negação, por restaurares Tomé depois da dúvida, por acolheres a mulher adúltera sem condenação. Tu és especialista em novas chances.

Pai celestial, obrigado por não desistires de mim. Por cada manhã que me deste como página em branco. Por cada "de novo" quando eu merecia "nunca mais".

Obrigado pelos recomeços grandes: o emprego novo depois do desemprego, o casamento restaurado depois da crise, a saúde recuperada depois da doença. Tu és Deus de ressurreição.

Obrigado pelos recomeços pequenos: cada confissão que me limpa, cada arrependimento que me renova, cada "bom dia" que é chance de fazer diferente.

Se hoje preciso de um recomeço, dou-te graças antecipadamente. Porque sei que tu és fiel. Que enquanto há vida, há esperança. Que o Deus que me levantou antes me levantará de novo.

Espírito Santo, mantém viva em mim a esperança dos recomeços. Que eu nunca desista, porque tu não desistes.

Maria, Mãe de misericórdia, intercede por cada recomeço que eu precisar. Amém.`
      },
      {
        id: 10,
        title: "Oração de Gratidão pela Paz",
        content: `Senhor Deus, eu te agradeço pela paz que habita em meu coração. Paz que o mundo não pode dar nem tirar. Paz que permanece mesmo quando há tormenta ao redor.

Santos Arcanjos, mensageiros da paz divina, obrigado por trazerem paz às minhas tempestades. Por acalmarem minha mente, sossegarem meu coração, tranquilizarem minha alma.

Senhor Jesus, tu és minha paz. Antes de te conhecer, eu não sabia o que era paz verdadeira. Eu buscava em coisas, em pessoas, em conquistas. Mas só tu dás paz que sacia.

Pai celestial, obrigado pela paz interior que me sustenta. Que me permite dormir tranquilo à noite, acordar sereno pela manhã, atravessar o dia sem angústia constante. Essa paz é presente teu.

Obrigado pela paz nos relacionamentos. Pela harmonia no lar, pela concórdia na família, pela amizade com pessoas de paz. A paz se multiplica quando é compartilhada.

Obrigado pela paz com meu passado. Por me ajudar a aceitar o que não posso mudar, a perdoar o que me feriram, a me perdoar pelo que errei. A paz com a história liberta para o futuro.

Se às vezes perco a paz, obrigado por me mostrares o caminho de volta. Por me lembrares de que a paz está em ti, não nas circunstâncias.

Espírito Santo, fruto de paz, permanece em mim para sempre.

Maria, Rainha da Paz, ensina-me a cultivar e espalhar a paz por onde eu for. Amém.`
      }
    ]
  }
};

// Exportar todas as categorias incluindo Santos
export const prayerCategories: Record<string, PrayerCategory> = {
  ...basePrayerCategories,
  santos: saintsCategory
};
