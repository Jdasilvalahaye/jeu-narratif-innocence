export const warriorScene = {
  warriorChoice: {
    text: "Revêtu de votre armure de plaque, épée en main et bouclier solidement attaché, vous sortez du refuge et commencez à arpenter le sentier enneigé. Les flocons tourbillonnent autour de vous et le silence de la forêt vous enveloppe. Après quelques minutes de marche, le chemin se divise en deux. À droite, le blizzard s’intensifie, obscurcissant la vue à quelques mètres. À gauche, le chemin semble plus dégagé, et vous distinguez au loin une montagne imposante, à plusieurs heures de marche. Quel sentier décidez-vous de suivre ?",
    choices: [
      {
        text: "Prendre le sentier de droite",
        nextScene: "rencontre loup",
      },
      {
        text: "Prendre le sentier de gauche",
        nextScene: "rencontre paysan",
      },
    ],
  },
};
