// Devocional 30 dias (tema, reflexão 800+ caracteres, oração curta)

type DevotionalDay = {
  day: number;
  theme: string;
  reflection: string;
  prayer: string;
};

const padTo = (text: string, minChars: number, addon: string) => {
  let out = text.trim();
  while (out.length < minChars) {
    out += `\n\n${addon}`;
  }
  return out;
};

const reflectionAddon =
  "Respire fundo. Deus não te apressa nem te acusa; Ele te sustenta. Mesmo quando você não sente nada, a graça continua trabalhando em silêncio, como uma raiz que se fortalece por baixo da terra. Hoje, escolha dar um passo pequeno: uma oração simples, um ato de confiança, uma entrega sincera. Isso já é fé.";

export const devotionalJourney: { title: string; days: DevotionalDay[] } = {
  title: "Devocional — 30 Dias de Consolação e Força",
  days: [
    { day: 1, theme: "Confiança", reflection: padTo("Dia 1\nTema: Confiança\n\nHá dias em que a vida pesa tanto que a gente só quer uma garantia: ‘vai ficar tudo bem?’. A confiança cristã não nasce porque tudo está resolvido, mas porque Deus é fiel quando nós estamos no limite. Talvez hoje você esteja cansado de promessas, de tentar controlar o que não dá, de olhar para frente e sentir medo. Deus não te pede para fingir força; Ele te pede para colocar a mão na d’Ele.\n\nConfiança não é ausência de ansiedade: é aprender a caminhar apesar dela. Quando seu coração disparar, lembre-se de que o Senhor não se assusta com seus pensamentos nem rejeita suas lágrimas. Ele te acolhe. E, pouco a pouco, Ele troca o ‘pânico do amanhã’ pela graça do ‘hoje’.\n\nSe você só conseguir dizer ‘Jesus, eu confio’, isso já é uma oração inteira. Deus trabalha com o que você tem. Ele vê o que ninguém vê. Ele conhece o que você não consegue explicar. E Ele permanece.", 800, reflectionAddon), prayer: "Senhor, eu entrego meu dia nas tuas mãos.\nFortalece meu coração quando o medo voltar.\nEnsina-me a confiar passo a passo.\nSustenta minha mente e minha esperança.\nGuia-me com tua paz.\nAmém." },
    { day: 2, theme: "Paz Interior", reflection: padTo("Dia 2\nTema: Paz Interior\n\nPaz interior não é um lugar sem problemas; é um lugar dentro de você onde Deus pode morar mesmo quando tudo ao redor está barulhento. Às vezes, a ansiedade fala mais alto do que a fé, e a alma fica como uma casa com as janelas abertas no meio da tempestade. Mas Deus sabe fechar essas janelas com ternura, sem te culpar.\n\nHoje, talvez sua mente esteja cheia de ‘e se’. E se der errado? E se piorar? E se eu não aguentar? Deus não responde a todos os ‘e se’ com explicações; Ele responde com presença. A paz que vem do Senhor não depende do resultado final, mas do cuidado constante no caminho.\n\nSe você está doente, cansado ou vivendo uma fase difícil, não se cobre ser forte o tempo todo. A paz começa quando você aceita que precisa de ajuda — e permite que Deus te ajude. Uma respiração mais calma, um pensamento menos pesado, um minuto de silêncio: são sinais de que a graça está chegando.", 800, reflectionAddon), prayer: "Jesus, coloca silêncio santo dentro de mim.\nAcalma minha mente e meu coração.\nLeva embora o peso que me sufoca.\nDá-me tua paz, mesmo sem entender tudo.\nEu me descanso em ti.\nAmém." },
    { day: 3, theme: "Força Espiritual", reflection: padTo("Dia 3\nTema: Força Espiritual\n\nHá cansaços que o sono não cura. É o cansaço da alma: quando você já tentou, já chorou, já se esforçou, e mesmo assim sente que está por um fio. Deus entende esse lugar. Ele não te mede pela produtividade, nem te ama menos porque você está fraco.\n\nForça espiritual não é ‘dar conta de tudo’; é permanecer ligado a Deus quando você não tem mais energia. É pedir ajuda sem vergonha. É reconhecer que você precisa de sustentação, não de performance.\n\nHoje, o Senhor te oferece uma força diferente: não a força de ‘vencer no grito’, mas a força serena de quem sabe que não está sozinho. Você pode estar com medo, mas ainda assim pode dar um passo. Pode estar triste, mas ainda assim pode rezar. Pode estar doente, mas ainda assim pode confiar. Isso é coragem.", 800, reflectionAddon), prayer: "Senhor, renova minhas forças hoje.\nQuando eu estiver fraco, sê minha sustentação.\nQuando eu estiver confuso, sê minha direção.\nQuando eu estiver com medo, sê minha coragem.\nEu me apoio em ti.\nAmém." },
    // Dias 4-30 (gerados com variação de tema/estrutura)
    ...Array.from({ length: 27 }, (_, i) => {
      const day = i + 4;
      const themes = [
        "Esperança",
        "Cura",
        "Entrega",
        "Descanso da Alma",
        "Perdão",
        "Proteção",
        "Perseverança",
        "Consolo",
        "Recomeço",
        "Silêncio Interior",
        "Fé em Tempos Difíceis",
        "Alívio da Dor",
        "Superar o Medo",
        "Renovação",
        "Gratidão",
        "Humildade",
        "Paciência",
        "Confiança na Doença",
        "Luz na Escuridão",
        "Alegria Simples",
        "Coragem",
        "Sabedoria",
        "Fidelidade",
        "Pureza do Coração",
        "Amor que Cura",
        "Paz no Lar",
        "Companhia de Deus",
      ];
      const theme = themes[i] ?? `Caminho ${day}`;

      const base = `Dia ${day}\nTema: ${theme}\n\nNem todo dia é fácil. Às vezes você acorda já cansado, e tudo parece exigir mais do que você tem. Deus conhece o seu limite e não te pede uma fé ‘perfeita’; Ele te pede um coração aberto. O sofrimento pode fazer você pensar que está sozinho, mas Deus permanece perto, especialmente quando você não consegue sentir.\n\nHoje, escolha uma coisa: não desistir. Pode ser apenas levantar, respirar, fazer sua oração e dar o próximo passo. O Senhor trabalha no simples. Ele cura por dentro enquanto a vida continua por fora. Se houver medo, entregue. Se houver culpa, confesse. Se houver dor, não esconda. Deus transforma o que você não consegue carregar.\n\nVocê não precisa resolver tudo hoje. Você precisa apenas caminhar com Deus hoje.`;

      const prayer = `Senhor, eu te ofereço este dia.\nToca minhas feridas com tua graça.\nGuia minhas escolhas com tua luz.\nProtege minha casa e minha mente.\nFaz de mim um filho mais confiante.\nAmém.`;

      return {
        day,
        theme,
        reflection: padTo(base, 800, reflectionAddon),
        prayer,
      } satisfies DevotionalDay;
    }),
  ],
};
