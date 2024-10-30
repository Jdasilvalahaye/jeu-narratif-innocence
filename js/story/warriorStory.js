export const warriorScene = {
  warriorChoice: {
    text: "Revêtu de votre armure de plaque, épée en main et bouclier solidement attaché, vous sortez du refuge et commencez à arpenter le sentier enneigé. Les flocons tourbillonnent autour de vous et le silence de la forêt vous enveloppe. Après quelques minutes de marche, le chemin se divise en deux. À gauche, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À droite, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "warriorWolfEncounter1",
        effect: "warriorFirstBattleWolf",
      },
      {
        text: "Prendre le sentier de droite",
        nextScene: "warriorFarmerEncounter1",
      },
    ],
  },

  // Scène du loup 1
  warriorWolfEncounter1: {
    text: "Vous entrez dans une forêt dense où le blizzard réduit la visibilité à quelques mètres à peine. Les arbres craquent sous le vent glacial, et le silence pesant est rapidement brisé par un grondement sourd. Soudain, une ombre massive bondit hors des fourrés : un loup sauvage, immense et aux crocs acérés, se dresse sur le chemin, les yeux luisant de férocité.",
    choices: [
      {
        text: "Affronter le loup",
        nextScene: "warriorBattleWolf1",
      },
      {
        text: "Fuir et se cacher",
        nextScene: "warriorFleeWolf1",
      },
    ],
  },

  // Affronter le loup
  warriorBattleWolf1: {
    text: "Vous déguainez votre épée, maintenez votre bouclier près du torse, et vous vous préparez à votre premier affrontement",
    choices: [
      {
        text: "Lancer le dé",
        effect: "battle",
      },
    ],
  },

  // Victoire contre le loup
  warriorVictoryAgainstWolf1: {
    text: "Après une intense bataille, vous vous tenez victorieux au-dessus du cadavre du loup. Vous reprenez vos esprits et continuez votre chemin...",
    choices: [{ text: "Poursuivre votre chemin", nextScene: "nextsceneneedtobedefined" }],
  },

  // A définir, c'est juste pour avoir qq chose à afficher
  nextsceneneedtobedefined: {
    text: "Vous vous aventurez plus loin dans la forêt, avec un sentiment de triomphe",
    choices: [
      { text: "Pause pipi", nextScene: "attak" },
      { text: "Pause repas", nextScene: "digestion" },
    ],
  },
};
