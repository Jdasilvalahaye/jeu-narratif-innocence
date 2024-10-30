import { displayInventory, displayStats, player } from "./player.js";
import { displayPlayerAvatar } from "./avatar.js";
import { story } from "./story.js";

let currentScene = "start";

// --- Fonction qui affiche la scène : met à jour l'html avec le texte de la scène en cours, vide les anciens boutons, parcours les choix de currentScene pour créer un btn par choix, appelle la fonction makeAChoice quand on clique sur un bouton
export function displayScene() {
  const textElement = document.getElementById("text");
  const choiceContainer = document.getElementById("choice");

  textElement.textContent = story[currentScene].text;
  choiceContainer.innerHTML = "";

  story[currentScene].choices.forEach((choices, index) => {
    const button = document.createElement("button");
    button.textContent = choices.text;
    button.classList.add("choice-btn");
    button.onclick = () => makeAChoice(index);
    choiceContainer.appendChild(button);
  });
}

// --- Fonction qui gère les choix : récupère le choix sélectionné, vérifie s'il y a un effet et l'applique (ajout/retrait objet inventaire, up/down d'une stat, etc), met à jour currentScene pour passer à la prochaine scène défini dans la nextScene associée au choix et fini en appellant la fonction displayScene()
export function makeAChoice(index) {
  const choice = story[currentScene].choices[index];

  if (choice.effect === "warriorStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item)); // Ajoute chaque élément du tableau d'items individuellement (il y en a 3). La condition && choice.item s'assure de la présence des objets et limite les erreurs
    displayInventory();
    player.strenght += 3;
    player.physicalDefense += 7;
    player.block += 2;
    displayStats();
    displayPlayerAvatar("/public/pictures/player/warrior-avatar.webp");
  } else if (choice.effect === "rogueStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item));
    displayInventory();
    player.dexterity += 4;
    player.physicalDefense += 2;
    displayStats();
    displayPlayerAvatar("/public/pictures/player/rogue-avatar.webp");
  } else if (choice.effect === "sorcererStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item));
    displayInventory();
    player.intelligence += 4;
    player.magicalDefense += 4;
    displayStats();
    displayPlayerAvatar("/public/pictures/player/sorcerer-avatar.webp");
  }

  currentScene = choice.nextScene;
  displayScene();
}
