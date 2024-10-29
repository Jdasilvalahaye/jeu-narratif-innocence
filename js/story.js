export const story = {
  // Scène initiale
  start: {
    text: "Vous êtes un chevalier déchu du Royaume d'Azgoroth. Vous avez été injustement accusé du meurtre du duc de la Ménagerie. En cavale pour sauver votre vie, vous trouvez refuge dans l'un de vos repères secret. Vous n'avez plus qu'une idée en tête : vous venger et déjouer les complots qui se trament au sein du royaume. Êtes-vous prêt à démarrer cette aventure ? ",
    choices: [
      { text: "Désolé, je n'y arriverais pas", nextScene: "abandon" },
      { text: "Je suis prêt !", nextScene: "characterChoice" },
    ],
  },

  // Scène d'ababon
  abandon: {
    text: "Nul n'est tenu d'avoir le courage de faire face aux enfers",
    choices: [{ text: "Retour au début", nextScene: "start" }],
  },

  // Scène de création du personnage
  characterChoice: {
    text: "Arrivé dans votre repère, vous retrouvez vos équipements. Vous ne pouvez pas tout emmener avec vous et devez faire un choix. Face à vous se trouve un coffre contenant votre équipement de guerrier, vous l'avez souvent utiliser lors des batailles nécessitant des combats au corps à corps. Au fond de la pièce, vous trouvez votre arc et votre carquois accrochés à un mur, ainsi qu'un vetêment de cuir souple accompagné d'un petit couteau. Parfait pour des éliminations furtives. Dans votre armoire, votre baton de magie ainsi que votre fidèle cape ornée de runes de protections. Faites votre choix",
    choices: [
      {
        text: "Prendre l'épée, le bouclier et l'armure en plate lourde",
        nextScene: "warrior",
        effect: "warriorStarterStuff",
        item: [
          {
            name: "Épée de novice",
            type: "arme",
            strBonus: 3,
            imageUrl: "/public/images/stuff/warrior-start-sword.webp",
          },
          {
            name: "Armure de plate",
            type: "armure lourde",
            pdefBonus: 5,
            imageUrl: "/public/images/stuff/warrior-start-armor.webp",
          },
          {
            name: "Bouclier en bois",
            type: "bouclier",
            pdefBonus: 2,
            imageUrl: "/public/images/stuff/warrior-start-shield.webp",
          },
        ],
      },
      {
        text: "Prendre l'arc, la tenue légère et le couteau",
        nextScene: "rogue",
        effect: "rogueStarterStuff",
        item: [
          {
            name: "Arc d'initié",
            type: "arme",
            dexBonus: 3,
            imageUrl: "/public/images/stuff/rogue-start-bow.webp",
          },
          {
            name: "Tunique en cuir",
            type: "armure moyenne",
            pdefBonus: 2,
            imageUrl: "/public/images/stuff/rogue-start-leather-chest.webp",
          },
          {
            name: "Couteau de chasse",
            type: "arme",
            dexBonus: 1,
            imageUrl: "/public/images/stuff/rogue-start-knife.webp",
          },
        ],
      },
      {
        text: "Prendre le baton et la robe",
        nextScene: "sorcerer",
        effect: "sorcererStarterStuff",
        item: [
          {
            name: "Bâton d'adepte",
            type: "arme",
            intBonus: 4,
            imageUrl: "/public/images/stuff/sorcerer-start-stick.webp",
          },
          {
            name: "Cape d'adepte",
            type: "armure légère",
            mdefBonus: 4,
            imageUrl: "/public/images/stuff/sorcerer-start-cape.webp.webp",
          },
        ],
      },
    ],
  },

  // Choix du guerrier
  warrior: {
    text: "Vous vous équipez de l'armure de plate, de l'épée d'acier et du bouclier en bois. Vous sortez de votre cabane et avancez sur un sentier enneigé. Après quelques minutes de marche, le chemin se divise en deux. Sur votre droite, nous ne voyez rien à plus de 2 mètres, la densité des arbres et le blizard naissant vous en empêchant. A votre gauche, le chemin semble moins austère et vous appercevez une montagne à quelques heures de marche. Quel chemin prenez-vous ?",
  },
};
