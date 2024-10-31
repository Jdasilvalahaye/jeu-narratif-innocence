export const warriorScene = {
  warriorChoice: {
    text: "Revêtu de votre armure de plaque, épée en main et bouclier solidement attaché, vous sortez du refuge et commencez à arpenter le sentier enneigé. Les flocons tourbillonnent autour de vous et le silence de la forêt vous enveloppe. Après quelques minutes de marche, le chemin se divise en deux. À gauche, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À droite, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "warriorWolfEncounter",
      },
      {
        text: "Prendre le sentier de droite",
        nextScene: "warriorTrap",
      },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie affrontement loup --------------------
  // ----------------------------------------
  // Scène du loup 1
  warriorWolfEncounter: {
    text: "Vous entrez dans une forêt dense où le blizzard réduit la visibilité à quelques mètres à peine. Les arbres craquent sous le vent glacial, et le silence pesant est rapidement brisé par un grondement sourd. Soudain, une ombre massive bondit hors des fourrés : un loup sauvage, immense et aux crocs acérés, se dresse sur le chemin, les yeux luisant de férocité.",
    choices: [
      {
        text: "Affronter le loup",
        nextScene: "warriorBattleWolf",
      },
      {
        text: "Fuir et se cacher",
        nextScene: "warriorFleeWolf",
      },
    ],
  },

  // Affronter le loup
  warriorBattleWolf: {
    text: "Vous dégainez lentement votre épée, le métal glacé vibrant dans votre main tandis que vous levez votre bouclier contre les ombres qui tourbillonnent autour de vous. Le loup apparaît à travers le blizzard, ses yeux luisant d’un éclat sauvage, ses crocs dévoilés dans un grognement menaçant qui se mêle au sifflement du vent. Votre cœur bat à tout rompre, et chaque muscle de votre corps se tend tandis que vous vous préparez pour votre premier affrontement. La neige crisse sous vos pieds ; chaque souffle de loup se condense en vapeur, comme une menace palpable. Il n'y a pas de fuite possible – le combat est inévitable.",
    choices: [
      {
        text: "Prêt au combat",
        effect: "warriorBattleWolf",
      },
    ],
  },

  // Scène de victoire contre le loup
  warriorVictoryWolf: {
    text: "Essoufflé mais victorieux, vous contemplez le corps inerte du loup. L'air glacial emplit vos poumons alors que vous reprenez votre souffle. Déterminé, vous poursuivez votre chemin et, après des heures de marche à travers les paysages enneigés, un petit hameau se dessine enfin à l'horizon. Les lueurs de ses modestes habitations vous invitent à faire halte.",
    choices: [
      { text: "Entrer dans la taverne", nextScene: "warriorTavern", effect: "endBattle" },
      { text: "Se joindre aux roturiers qui jouent aux cartes", nextScene: "warriorCardPlayers", effect: "endBattle" },
    ],
  },

  // Scène de fuite contre le loup
  warriorFleeWolf: {
    text: "Vous mettez toute votre energie à courrir le plus loin possible. L'air glacial emplit vos poumons alors que vous fuyez pour votre vie. Déterminé, vous poursuivez votre chemin et, après des heures de marche à travers les paysages enneigés, un petit hameau se dessine enfin à l'horizon. Les lueurs de ses modestes habitations vous invitent à faire halte.",
    choices: [
      { text: "Entrer dans la taverne", nextScene: "warriorTavern", effect: "endBattle" },
      { text: "Se joindre aux roturiers qui jouent aux cartes", nextScene: "warriorCardPlayers", effect: "endBattle" },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie piège --------------------
  // ----------------------------------------

  warriorTrap: {
    text: "Vous avancez prudemment sur le sentier dégagé, les yeux scrutant l'horizon. Mais soudain, le sol se dérobe sous vos pieds ! Vous chutez brusquement dans une fosse camouflée sous la neige, garnie de pieux acérés. La douleur irradie dans votre jambe alors qu'un pieu entaille profondément votre armure. Vous vous extirpez tant bien que mal du piège, mais votre corps est affaibli par cette blessure imprévue, vous perdez 30 points de vie.",
    choices: [
      { text: "Continuer malgré la douleur", nextScene: "warriorBackToFirstPath", effect: "warriorTrapDamage" },
    ],
  },

  warriorBackToFirstPath: {
    text: "Malgré la douleur, vous continuez à avancer, déterminé à atteindre votre destination. Mais, au bout de quelques minutes, un étrange sentiment d'angoisse s'empare de vous. Les arbres autour de vous deviennent familiers... À votre grande surprise, vous vous retrouvez exactement là où vous avez commencé, au croisement des sentiers. Comme si une force invisible vous empêchait de progresser plus avant. Inexplicablement, il semble que le seul chemin possible soit celui de gauche, là où le blizzard s’intensifie.",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "warriorWolfEncounter",
      },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie Taverne --------------------
  // ----------------------------------------
  // Scène dans la taverne
  warriorTavern: {
    text: "L'intérieur de la taverne est sombre et silencieux. Le tavernier est la seule âme qui vive, occupé à nettoyer des chopes en bois derrière le comptoir. À mesure que vous vous approchez, vous remarquez un détail étrange : ses yeux luisent d'un éclat rougeâtre. Une aura de menace émane de lui, et un sourire sinistre s'étire sur son visage – c'est un démon déguisé en tavernier.",
    choices: [
      { text: "Se battre contre le démon", nextScene: "warriorDemonBattle" },
      { text: "Fuir à l'extérieur", nextScene: "WarriorfleeTavern" },
    ],
  },

  // Affronter le démon
  warriorDemonBattle: {
    text: "Vous brandissez votre épée, prêt à affronter ce démon qui se dresse devant vous, un rictus malveillant aux lèvres. Le combat est acharné, chaque coup résonne dans le silence oppressant de la taverne.",
    choices: [{ text: "Prêt au combat", effect: "warriorBattleDemon" }],
  },

  // Fuite de la taverne
  WarriorfleeTavern: {
    text: "Vous sortez précipitamment de la taverne, le cœur battant. À l'extérieur, les roturiers qui jouaient aux cartes lèvent les yeux vers vous, intrigués par votre air agité. L'un d'eux s'exclame 'Une mauvaise surprise à la taverne peut-être ? Ne vous en faites, pas, on va bien prendre soin de vous et de vos affaires !'",
    choices: [{ text: "Vous défendre", nextScene: "warriorCommonerBattle" }],
  },

  // Victoire contre le démon
  warriorVictoryDemon: {
    text: "Le démon s'effondre dans un nuage de cendres. Vous sentez soudain la réalité vaciller, et lorsque vous ouvrez les yeux, vous réalisez que tout cela n'était qu'un rêve étrange et troublant.",
    choices: [{ text: "Se réveiler", nextScene: "warriorEnd", effect: "endBattle" }],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie Roturiers --------------------
  // ----------------------------------------
  // Rencontre avec les roturiers jouant aux cartes
  warriorCardPlayers: {
    text: "Les roturiers vous lancent un regard méfiant mais vous invitent à les rejoindre dans leur jeu de cartes. Les enjeux sont modestes, mais les sourires en coin et les échanges de regards vous mettent en garde.",
    choices: [
      { text: "Jouer aux cartes avec eux", nextScene: "warriorAccusedOfCheating" },
      { text: "Les laisser à leur jeu et entrer dans la taverne", nextScene: "warriorTavern" },
    ],
  },

  // Accusé de triche
  warriorAccusedOfCheating: {
    text: "En pleine partie, l'un des joueurs s'exclame brusquement : 'Tricheur !' D'autres acquiescent, et vous vous retrouvez entouré par des visages hostiles.",
    choices: [{ text: "Combattre les roturiers", nextScene: "warriorCommonerBattle" }],
  },

  // Affrontement contre les roturiers
  warriorCommonerBattle: {
    text: "Vous dégainez votre épée face aux roturiers, bien décidés à en découdre. La tension est palpable, et le combat s'engage sous les regards déterminés de vos adversaires.",
    choices: [{ text: "Prêt au combat", effect: "warriorBattleCommoners" }],
  },

  warriorVictoryCommoners: {
    text: "À l'instant où les roturiers s'effondrent, la réalité commence à se dissiper. Vous ouvrez les yeux, réalisant que ce n'était qu'un rêve étrange et envoûtant.",
    choices: [{ text: "Se réveiler", nextScene: "warriorEnd", effect: "endBattle" }],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie fin du jeu --------------------
  // ----------------------------------------
  warriorEnd: {
    text: "Vous vous tenez debout, le cœur battant, encore empreint de l’étrange intensité de votre rêve. Cette aventure fantasmagorique restera gravée en vous, comme un présage mystérieux.",
    choices: [{ text: "Recommencer l'aventure", nextScene: "start", effect: "newGame" }],
  },
};
