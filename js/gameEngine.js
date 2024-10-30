import { displayInventory, displayStats, player } from "./player.js";
import { displayPlayerAvatar, displayNpcAvatar, displayNpcName } from "./avatar.js";
import { story } from "/js/story/story.js";
import { openBattleInstructions, closeBattleInstructionModal } from "./modal.js";
import { initiateBattle } from "./battle.js";
import { wolf } from "./npc.js";

export let currentScene = "start"; // Initialise la scène de départ

// --- Fonction pour mettre à jour la scène actuelle
export function setCurrentScene(scene) {
  currentScene = scene;
}

// -- Fonction pour obtenir la scène actuelle
export function getCurrentScene() {
  return story[currentScene];
}

// Rend la fonction closeBattleInstructionModal accessible dans le contexte global : sinon la fonction ne s'exécute pas dans le html
// Ca permet d'utiliser onlclick="closeBattleInstructionModal()" dans le html car la fonction est attachée à l'objet window
window.closeBattleInstructionModal = closeBattleInstructionModal;

// --- Fonction qui sert à ajouter du texte supplémentaire et contextuel aux scènes (comme le déroulé d'un combat)
export function updateStoryText(newText) {
  const textElement = document.getElementById("text");
  textElement.innerHTML += `<p>${newText}</p>`;
}

// --- Fonction qui affiche la scène : met à jour l'html avec le texte de la scène en cours, vide les anciens boutons, parcours les choix de currentScene pour créer un btn par choix, appelle la fonction makeAChoice quand on clique sur un bouton
export function displayScene() {
  const textElement = document.getElementById("text");
  const choiceContainer = document.getElementById("choice");

  const currentSceneData = getCurrentScene(); // Récpère la scène actuelle

  textElement.textContent = currentSceneData.text;
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
  const choice = getCurrentScene().choices[index];

  if (choice.effect === "warriorStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item)); // Ajoute chaque élément du tableau d'items individuellement (il y en a 3). La condition && choice.item s'assure de la présence des objets et limite les erreurs
    displayInventory();
    player.strenght += 3;
    player.physicalDefense += 7;
    player.block += 2;
    player.class = "Guerrier";
    displayStats();
    displayPlayerAvatar("/public/pictures/player/warrior-avatar.webp");
  } else if (choice.effect === "rogueStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item));
    displayInventory();
    player.dexterity += 4;
    player.physicalDefense += 2;
    player.class = "Rodeur";
    displayStats();
    displayPlayerAvatar("/public/pictures/player/rogue-avatar.webp");
  } else if (choice.effect === "sorcererStarterStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item));
    displayInventory();
    player.intelligence += 4;
    player.magicalDefense += 4;
    player.class = "Mage";
    displayStats();
    displayPlayerAvatar("/public/pictures/player/sorcerer-avatar.webp");
  } else if (choice.effect === "warriorFirstBattleWolf") {
    displayNpcAvatar("/public/pictures/npc/wolf.webp");
    displayNpcName("Loup sauvage");
    openBattleInstructions();
  } else if (choice.effect === "battle") {
    initiateBattle(wolf, "warriorVictoryAgainstWolf1"); // se bat contre un loup et si vitoire, passe à la scène warriorVictoryAgainstWolf1
    return; // Empêche le passage immédiat à une autre scène
  }

  setCurrentScene(choice.nextScene);
  displayScene();
}

window.onload = () => {
  displayScene();
};
