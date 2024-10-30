import { warriorScene } from "./warriorStory.js";

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
            dexBonus: 3,
            imageUrl: "/public/pictures/stuff/rogue-start-bow.webp",
          },
          {
            name: "Tunique en cuir",
            type: "armure moyenne",
            pdefBonus: 2,
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
            intBonus: 4,
            imageUrl: "/public/pictures/stuff/sorcerer-start-stick.webp",
          },
          {
            name: "Cape d'adepte",
            type: "armure légère",
            mdefBonus: 4,
            imageUrl: "/public/pictures/stuff/sorcerer-start-cape.webp",
          },
        ],
      },
    ],
  },
  ...warriorScene,
};
