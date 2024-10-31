export const story = {
  // Scène initiale
  start: {
    text: "Vous êtes un chevalier déchu du Royaume d'Azgoroth, accusé injustement du meurtre du duc de la Ménagerie. Contraint de fuir pour sauver votre vie, vous trouvez refuge dans un de vos repaires secrets. Une seule idée obsède désormais votre esprit : déjouer les complots qui gangrènent le royaume et laver votre honneur. Êtes-vous prêt à embrasser ce chemin périlleux ?",
    choices: [
      { text: "Désolé, je n'en ai pas la force", nextScene: "abandon" },
      { text: "Je suis prêt à affronter mon destin", nextScene: "characterChoice" },
    ],
  },

  // Scène d'ababon
  abandon: {
    text: "Nul n'est obligé de défier les ombres du destin. Vous décidez de tourner le dos à votre quête, laissant les intrigues du royaume se dénouer sans vous...",
    choices: [{ text: "Retour au début", nextScene: "start" }],
  },

  // Scène game over
  gameOver: {
    text: " Game over... Vos forces vous abandonnent, et un voile sombre s’abat sur votre esprit, vous plongeant dans un abîme sans fin. Les échos de votre quête inachevée résonnent faiblement alors que la lumière s’éteint peu à peu. Tout ce pour quoi vous vous êtes battu semble s’effacer, laissant le monde aux mains des ténèbres. Mais au plus profond de cet oubli, une étincelle demeure… un choix, une chance de réécrire votre destin.",
    choices: [
      {
        text: "Recommencer l'aventure",
        nextScene: "start",
        effect: "newGame",
      },
    ],
  },

  // Scène de création du personnage
  characterChoice: {
    text: "Dans votre refuge, vos vieux équipements reposent, rappelant les jours de gloire. Vous savez qu'il vous faudra faire un choix : chaque arme, chaque armure porte en elle un destin différent. Face à vous, un coffre renferme votre imposante armure de guerrier, forgée pour les batailles brutales en corps-à-corps. À l'arrière de la pièce, votre arc et votre carquois reposent sur le mur, accompagnés d’un vêtement de cuir discret, idéal pour les frappes furtives. Enfin, dans un coin sombre, votre bâton gravé de runes et une cape enchantée semblent murmurer les secrets des arts magiques. Quel équipement choisirez-vous ?",
    choices: [
      {
        text: "Prendre l'équipement du guerrier",
        nextScene: "warriorChoice",
        effect: "warriorStarterStuff",
        item: [
          {
            name: "Épée de novice",
            type: "arme",
            strBonus: 3,
            hpBonus: 30,
            imageUrl: "/public/pictures/stuff/warrior-start-sword.webp",
          },
          {
            name: "Armure de plate",
            type: "armure lourde",
            pdefBonus: 5,
            imageUrl: "/public/pictures/stuff/warrior-start-armor.webp",
          },
          {
            name: "Bouclier en bois",
            type: "bouclier",
            pdefBonus: 2,
            mdefBonus: 1,
            blockBonus: 2,
            imageUrl: "/public/pictures/stuff/warrior-start-shield.webp",
          },
        ],
      },
      {
        text: "Prendre l'équipement du rodeur",
        nextScene: "rogueChoice",
        effect: "rogueStarterStuff",
        item: [
          {
            name: "Arc d'initié",
            type: "arme",
            dexBonus: 4,
            imageUrl: "/public/pictures/stuff/rogue-start-bow.webp",
          },
          {
            name: "Tunique en cuir",
            type: "armure moyenne",
            pdefBonus: 2,
            mdefBonus: 2,
            hpBonus: 20,
            imageUrl: "/public/pictures/stuff/rogue-start-leather-chest.webp",
          },
          {
            name: "Couteau d'initié",
            type: "arme",
            dexBonus: 1,
            imageUrl: "/public/pictures/stuff/rogue-start-knife.webp",
          },
        ],
      },
      {
        text: "Prendre l'équipement du mage",
        nextScene: "sorcererChoice",
        effect: "sorcererStarterStuff",
        item: [
          {
            name: "Bâton d'adepte",
            type: "arme",
            intBonus: 7,
            imageUrl: "/public/pictures/stuff/sorcerer-start-stick.webp",
          },
          {
            name: "Cape d'adepte",
            type: "armure légère",
            mdefBonus: 10,
            pdefBonus: 1,
            hpBonus: 15,
            imageUrl: "/public/pictures/stuff/sorcerer-start-cape.webp",
          },
        ],
      },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie introduction du personnage --------------------
  // ----------------------------------------

  warriorChoice: {
    text: "Revêtu de votre armure de plaque, épée en main et bouclier solidement attaché, vous sortez du refuge et commencez à arpenter le sentier enneigé. Les flocons tourbillonnent autour de vous et le silence de la forêt vous enveloppe. Après quelques minutes de marche, le chemin se divise en deux. À gauche, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À droite, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "wolfEncounter",
      },
      {
        text: "Prendre le sentier de droite",
        nextScene: "trap",
      },
    ],
  },
  rogueChoice: {
    text: "Vous enfilez silencieusement la tunique en cuir, ajustant le carquois à votre épaule et passant vos doigts sur les flèches prêtes à l'usage. L'arc en main, vous ressentez l’agilité que procure cet équipement léger. Prêt à vous déplacer furtivement, vous sortez du refuge et vous fondez dans la forêt, chaque pas mesuré pour éviter de laisser la moindre trace. Après quelques instants, vous arrivez à une bifurcation. À gauche, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À droite, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "wolfEncounter",
      },
      {
        text: "Prendre le sentier de droite",
        nextScene: "trap",
      },
    ],
  },
  sorcererChoice: {
    text: "Vous saisissez le bâton gravé de runes anciennes, sentant une énergie mystique pulser sous vos doigts. La cape enchantée glisse sur vos épaules, imprégnée de magie qui murmure à vos oreilles. En sortant du refuge, une brise surnaturelle semble vous entourer, éveillant les forces arcanes autour de vous. Devant vous, deux chemins s'offrent : à gauche, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À droite, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "wolfEncounter",
      },
      {
        text: "Prendre le sentier de droite",
        nextScene: "trap",
      },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie affrontement loup --------------------
  // ----------------------------------------
  // Scène du loup 1
  wolfEncounter: {
    text: "Vous entrez dans une forêt dense où le blizzard réduit la visibilité à quelques mètres à peine. Les arbres craquent sous le vent glacial, et le silence pesant est rapidement brisé par un grondement sourd. Soudain, une ombre massive bondit hors des fourrés : un loup sauvage, immense et aux crocs acérés, se dresse sur le chemin, les yeux luisant de férocité.",
    choices: [
      {
        text: "Affronter le loup",
        nextScene: "battleWolf",
      },
      {
        text: "Fuir et se cacher",
        nextScene: "fleeWolf",
      },
    ],
  },

  // Affronter le loup
  battleWolf: {
    text: "Vous dégainez lentement votre épée, le métal glacé vibrant dans votre main tandis que vous levez votre bouclier contre les ombres qui tourbillonnent autour de vous. Le loup apparaît à travers le blizzard, ses yeux luisant d’un éclat sauvage, ses crocs dévoilés dans un grognement menaçant qui se mêle au sifflement du vent. Votre cœur bat à tout rompre, et chaque muscle de votre corps se tend tandis que vous vous préparez pour votre premier affrontement. La neige crisse sous vos pieds ; chaque souffle de loup se condense en vapeur, comme une menace palpable. Il n'y a pas de fuite possible – le combat est inévitable.",
    choices: [
      {
        text: "Prêt au combat",
        effect: "battleWolf",
      },
    ],
  },

  // Scène de victoire contre le loup
  victoryWolf: {
    text: "Essoufflé mais victorieux, vous contemplez le corps inerte du loup. L'air glacial emplit vos poumons alors que vous reprenez votre souffle. Déterminé, vous poursuivez votre chemin et, après des heures de marche à travers les paysages enneigés, un petit hameau se dessine enfin à l'horizon. Les lueurs de ses modestes habitations vous invitent à faire halte.",
    choices: [
      { text: "Entrer dans la taverne", nextScene: "tavern", effect: "endBattle" },
      { text: "Se joindre aux roturiers qui jouent aux cartes", nextScene: "cardPlayers", effect: "endBattle" },
    ],
  },

  // Scène de fuite contre le loup
  fleeWolf: {
    text: "Vous mettez toute votre energie à courrir le plus loin possible. L'air glacial emplit vos poumons alors que vous fuyez pour votre vie. Déterminé, vous poursuivez votre chemin et, après des heures de marche à travers les paysages enneigés, un petit hameau se dessine enfin à l'horizon. Les lueurs de ses modestes habitations vous invitent à faire halte.",
    choices: [
      { text: "Entrer dans la taverne", nextScene: "tavern", effect: "endBattle" },
      { text: "Se joindre aux roturiers qui jouent aux cartes", nextScene: "cardPlayers", effect: "endBattle" },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie piège --------------------
  // ----------------------------------------

  trap: {
    text: "Vous avancez prudemment sur le sentier dégagé, les yeux scrutant l'horizon. Mais soudain, le sol se dérobe sous vos pieds ! Vous chutez brusquement dans une fosse camouflée sous la neige, garnie de pieux acérés. La douleur irradie dans votre jambe alors qu'un pieu entaille profondément votre armure. Vous vous extirpez tant bien que mal du piège, mais votre corps est affaibli par cette blessure imprévue, vous perdez 30 points de vie.",
    choices: [{ text: "Continuer malgré la douleur", nextScene: "backToFirstPath", effect: "trapDamage" }],
  },

  backToFirstPath: {
    text: "Malgré la douleur, vous continuez à avancer, déterminé à atteindre votre destination. Mais, au bout de quelques minutes, un étrange sentiment d'angoisse s'empare de vous. Les arbres autour de vous deviennent familiers... À votre grande surprise, vous vous retrouvez exactement là où vous avez commencé, au croisement des sentiers. Comme si une force invisible vous empêchait de progresser plus avant. Inexplicablement, il semble que le seul chemin possible soit celui de gauche, là où le blizzard s’intensifie.",
    choices: [
      {
        text: "Prendre le sentier de gauche",
        nextScene: "wolfEncounter",
      },
    ],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie Taverne --------------------
  // ----------------------------------------
  // Scène dans la taverne
  tavern: {
    text: "L'intérieur de la taverne est sombre et silencieux. Le tavernier est la seule âme qui vive, occupé à nettoyer des chopes en bois derrière le comptoir. À mesure que vous vous approchez, vous remarquez un détail étrange : ses yeux luisent d'un éclat rougeâtre. Une aura de menace émane de lui, et un sourire sinistre s'étire sur son visage – c'est un démon déguisé en tavernier.",
    choices: [
      { text: "Se battre contre le démon", nextScene: "demonBattle" },
      { text: "Fuir à l'extérieur", nextScene: "fleeTavern" },
    ],
  },

  // Affronter le démon
  demonBattle: {
    text: "Vous brandissez votre épée, prêt à affronter ce démon qui se dresse devant vous, un rictus malveillant aux lèvres. Le combat est acharné, chaque coup résonne dans le silence oppressant de la taverne.",
    choices: [{ text: "Prêt au combat", effect: "battleDemon" }],
  },

  // Fuite de la taverne
  fleeTavern: {
    text: "Vous sortez précipitamment de la taverne, le cœur battant. À l'extérieur, les roturiers qui jouaient aux cartes lèvent les yeux vers vous, intrigués par votre air agité. L'un d'eux s'exclame 'Une mauvaise surprise à la taverne peut-être ? Ne vous en faites, pas, on va bien prendre soin de vous et de vos affaires !'",
    choices: [{ text: "Vous défendre", nextScene: "commonerBattle" }],
  },

  // Victoire contre le démon
  victoryDemon: {
    text: "Le démon s'effondre dans un nuage de cendres. Vous sentez soudain la réalité vaciller, et lorsque vous ouvrez les yeux, vous réalisez que tout cela n'était qu'un rêve étrange et troublant.",
    choices: [{ text: "Se réveiler", nextScene: "end", effect: "endBattle" }],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie Roturiers --------------------
  // ----------------------------------------
  // Rencontre avec les roturiers jouant aux cartes
  cardPlayers: {
    text: "Les roturiers vous lancent un regard méfiant mais vous invitent à les rejoindre dans leur jeu de cartes. Les enjeux sont modestes, mais les sourires en coin et les échanges de regards vous mettent en garde.",
    choices: [
      { text: "Jouer aux cartes avec eux", nextScene: "accusedOfCheating" },
      { text: "Les laisser à leur jeu et entrer dans la taverne", nextScene: "tavern" },
    ],
  },

  // Accusé de triche
  accusedOfCheating: {
    text: "En pleine partie, l'un des joueurs s'exclame brusquement : 'Tricheur !' D'autres acquiescent, et vous vous retrouvez entouré par des visages hostiles.",
    choices: [{ text: "Combattre les roturiers", nextScene: "commonerBattle" }],
  },

  // Affrontement contre les roturiers
  commonerBattle: {
    text: "Vous dégainez votre épée face aux roturiers, bien décidés à en découdre. La tension est palpable, et le combat s'engage sous les regards déterminés de vos adversaires.",
    choices: [{ text: "Prêt au combat", effect: "battleCommoners" }],
  },

  victoryCommoners: {
    text: "À l'instant où les roturiers s'effondrent, la réalité commence à se dissiper. Vous ouvrez les yeux, réalisant que ce n'était qu'un rêve étrange et envoûtant.",
    choices: [{ text: "Se réveiler", nextScene: "end", effect: "endBattle" }],
  },

  // ----------------------------------------
  // ---------------------------------------- Partie fin du jeu --------------------
  // ----------------------------------------
  end: {
    text: "Vous vous tenez debout, le cœur battant, encore empreint de l’étrange intensité de votre rêve. Cette aventure fantasmagorique restera gravée en vous, comme un présage mystérieux.",
    choices: [{ text: "Recommencer l'aventure", nextScene: "start", effect: "newGame" }],
  },
};
