import { player, displayStats } from "./player.js";
import { updateStoryText, displayScene, setCurrentScene } from "./gameEngine.js";

let currentEnemy = null; // Ennemi en cours de combat
let inBattle = false; // Indicateur de mode combat

// -------------- Fonction pour démarrer le combat
export function initiateBattle(enemy, nextScene) {
  currentEnemy = enemy;
  currentEnemy.nextScene = nextScene;
  inBattle = true;
  displayBattleInterface();
}

// -------------- Fonction pour lancer un dé à 12 faces (joueur)
function rollDice() {
  return Math.floor(Math.random() * 12) + 1;
}

// -------------- Fonction pour lancer un dé à 12 faces (ennemi)
function rollEnemyDice() {
  return Math.floor(Math.random() * 12) + 1;
}

// -------------- Fonction d'affichage de l'interface de combat
export function displayBattleInterface() {
  const textElement = document.getElementById("text");
  const choiceContainer = document.getElementById("choice");

  // Affiche les informations de l'ennemi
  textElement.innerHTML = `
    <p style="font-weight: bold; color: #FF5733">Combat en cours contre ${currentEnemy.name}</p>
    <p>Statistiques de ${currentEnemy.name} :</p>
    <p>PV : ${currentEnemy.hp}, Force : ${currentEnemy.strength}, Intelligence : ${currentEnemy.intelligence}, Défense physique: ${currentEnemy.physicalDefense}, Défense magique: ${currentEnemy.magicalDefense}</p>
  `;

  // Ajoute un bouton pour lancer le dé
  choiceContainer.innerHTML = `
    <button class="dice-btn" onclick="rollDiceForBattle()">Lancer le dé</button>
  `;
}

// -------------- Fonction Calcul des dégâts du joueur
function calculatePlayerDamage(roll, enemy) {
  let baseStat =
    player.class === "Guerrier" ? player.strength : player.class === "Rodeur" ? player.dexterity : player.intelligence;
  let damageMultiplier;
  let message;

  switch (true) {
    case roll === 1:
      message = "<span style='color: orange'>Échec total - Vous ratez votre attaque et tombez au sol !</span>";
      return { damage: 0, message };
    case roll >= 2 && roll <= 3:
      message = "<span style='color: orange'>Échec - Vous ratez votre attaque, votre adversaire l'a esquivée</span>";
      return { damage: 0, message };
    case roll >= 4 && roll <= 6:
      damageMultiplier = 0.5;
      break;
    case roll >= 7 && roll <= 11:
      damageMultiplier = 1;
      break;
    case roll === 12:
      damageMultiplier = 1.5;
      break;
  }

  const baseDamage = baseStat * damageMultiplier;
  const damage =
    player.class === "Guerrier" || player.class === "Rodeur"
      ? Math.max(baseDamage - enemy.physicalDefense, 0)
      : Math.max(baseDamage - enemy.magicalDefense, 0);

  message = `<span style="color: green">Vous infligez ${damage} points de dégâts à ${enemy.name}.</span>`;
  return { damage, message };
}

// -------------- Fonction pour gérer le tour de combat du joueur
export function rollDiceForBattle() {
  const roll = rollDice();
  const { damage, message } = calculatePlayerDamage(roll, currentEnemy);
  currentEnemy.hp -= damage;

  updateStoryText(`Résultat de votre dé : <span style="font-weight: bold; color: blue">${roll}</span>`);
  updateStoryText(message);

  if (damage > 0) {
    updateStoryText(
      `<span style="color: green">${currentEnemy.name} a maintenant ${currentEnemy.hp} PV restants.</span>`
    );
  }

  if (currentEnemy.hp <= 0) {
    updateStoryText(`<span style="color: green">${currentEnemy.name} est vaincu !</span>`);
    endBattle();
    return;
  }

  executeEnemyTurn();
}

// -------------- Fonction Calcul des dégâts de l'ennemi
function calculateEnemyDamage(roll, enemy) {
  let baseStat = enemy.type === "physical" ? enemy.strength : enemy.intelligence;
  let playerDefense = enemy.type === "physical" ? player.physicalDefense : player.magicalDefense;
  let damageMultiplier;
  let message;

  switch (true) {
    case roll === 1:
      message = `<span style="color: orange">${enemy.name} rate complètement son attaque !</span>`;
      return { damage: 0, message };
    case roll >= 2 && roll <= 3:
      message = `<span style="color: orange">${enemy.name} échoue dans son attaque.</span>`;
      return { damage: 0, message };
    case roll >= 4 && roll <= 6:
      damageMultiplier = 0.5;
      break;
    case roll >= 7 && roll <= 11:
      damageMultiplier = 1;
      break;
    case roll === 12:
      damageMultiplier = 1.5;
      break;
  }

  const baseDamage = baseStat * damageMultiplier;
  const damage = Math.max(baseDamage - playerDefense, 0);
  message = `<span style="color: red">${enemy.name} vous inflige ${damage} points de dégâts.</span>`;

  return { damage, message };
}

// -------------- Fonction pour gérer le tour de l'ennemi
function executeEnemyTurn() {
  const roll = rollEnemyDice();
  const isBlocked = calculateBlockChance();

  updateStoryText(
    `Résultat du dé de ${currentEnemy.name} : <span style="font-weight: bold; color: purple">${roll}</span>`
  );

  if (isBlocked) {
    updateStoryText("<span style='color: lightblue'>Vous avez bloqué l'attaque de l'ennemi !</span>");
    return;
  }

  const { damage, message } = calculateEnemyDamage(roll, currentEnemy);
  updateStoryText(`Tour de ${currentEnemy.name} : ${message}`);

  if (damage > 0) {
    player.hp -= damage;
  }

  displayStats();

  if (player.hp <= 0) {
    updateStoryText("<span style='color: red'>Vous avez été vaincu !</span>");
    endBattle(true);
  }
}

// -------------- Fonction pour calculer la chance de bloquer l'attaque de l'ennemi
function calculateBlockChance() {
  const blockChance = player.block;
  const roll = Math.random() * 100;
  return roll < blockChance;
}

// -------------- Fonction Fin du combat
export function endBattle(playerDefeated = false) {
  inBattle = false;

  if (playerDefeated) {
    setCurrentScene("gameOver");
  } else {
    setCurrentScene(currentEnemy.nextScene);
  }

  currentEnemy = null;
  displayScene();
}

window.rollDiceForBattle = rollDiceForBattle;
