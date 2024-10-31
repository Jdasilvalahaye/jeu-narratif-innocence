import { player, displayStats } from "./player.js";
import { updateStoryText, displayScene, setCurrentScene } from "./gameEngine.js"; // Ajoute setCurrentScene
let currentEnemy = null; // Ennemi en cours de combat
let inBattle = false; // Indicateur de mode combat

// -- Fonction pour démarrer le combat
export function initiateBattle(enemy, nextScene) {
  currentEnemy = enemy;
  currentEnemy.nextScene = nextScene;
  inBattle = true;
  displayBattleInterface();
}

// -------------- Fonction pour lancer un dé à 12 faces
function rollDice() {
  return Math.floor(Math.random() * 12) + 1; // Retourne un nombre entre 1 et 12
}

// -------------- Fonction d'affichage de l'interface de combat
export function displayBattleInterface() {
  const textElement = document.getElementById("text");
  const choiceContainer = document.getElementById("choice");

  // Affiche les informations de l'ennemi
  textElement.innerHTML = `
    <p>Combat en cours contre ${currentEnemy.name}</p>
    <p>Satistiques de ${currentEnemy.name} : </p>
    <p>PV : ${currentEnemy.hp}, Force : ${currentEnemy.strength}, Défense : ${currentEnemy.physicalDefense}</p>
  `;

  // Ajoute un bouton pour lancer le dé, avec une classe pour le modifier en css
  choiceContainer.innerHTML = `
    <button class="dice-btn "onclick="rollDiceForBattle()">Lancer le dé</button>
  `;
}

// -------------- Fonction pour gérer le tour de combat du joueur
export function rollDiceForBattle() {
  const roll = rollDice();
  const { damage, message } = calculatePlayerDamage(roll, currentEnemy);
  currentEnemy.hp -= damage;

  updateStoryText(`Résultat du dé : ${roll}`);
  updateStoryText(message);

  // Affiche en texte le nombre de PV restants à l'ennemis.
  if (damage > 0) {
    updateStoryText(`${currentEnemy.name} a maintenant ${currentEnemy.hp} PV restants.`);
  }

  // Vérifie si l'ennemi est vaincu
  if (currentEnemy.hp <= 0) {
    updateStoryText(`${currentEnemy.name} est vaincu !`);
    endBattle();
    return;
  }

  // Si l'ennemi est encore en vie, il attaque
  executeEnemyTurn();
}

// -------------- Fonction pour calculer la chance de bloquer l'attaque de l'ennemi
function calculateBlockChance() {
  const blockChance = player.block; // Le pourcentage de chance de blocage
  const roll = Math.random() * 100; // Génère un nombre entre 0 et 99.99
  return roll < blockChance; // Si le roll est inférieur à la chance de blocage, l'attaque est bloquée
}

// -------------- Fonction qui gère le tour de l'ennemi
function executeEnemyTurn() {
  // Vérifie si l'attaque de l'ennemi est bloquée
  if (calculateBlockChance()) {
    updateStoryText("Vous avez bloqué l'attaque de l'ennemi !");
    return; // Terminer le tour de l'ennemi sans infliger de dégâts
  }

  // Si l'attaque n'est pas bloquée, calcule les dégâts de l'ennemi
  const enemyDamage = calculateEnemyDamage(currentEnemy);
  player.hp -= enemyDamage;

  if (enemyDamage > 0) {
    updateStoryText(
      `Tour ennemis : <span style="color: red">${currentEnemy.name} inflige ${enemyDamage} points de dégâts.</span>`
    );
  } else {
    updateStoryText(`Tour ennemis : ${currentEnemy.name} tente de vous attaquer, mais échoue.`);
  }

  displayStats(); // Rafraichit l'affichage des statistiques du joueur (perte de pv)

  // Vérifie si le joueur est vaincu
  if (player.hp <= 0) {
    updateStoryText("Vous avez été vaincu !");
    endBattle(true); // Fin du combat si le joueur est vaincu
  }
}

// -------------- Fonction Calcul des dégâts du joueur
function calculatePlayerDamage(roll, enemy) {
  let baseStat =
    player.classType === "warrior"
      ? player.strength
      : player.classType === "rogue"
      ? player.dexterity
      : player.intelligence;
  let damageMultiplier;
  let message;

  switch (true) {
    case roll === 1:
      message = "Échec total - Vous ratez votre attaque et tombez au sol !";
      return { damage: 0, message };
    case roll >= 2 && roll <= 3:
      message = "Échec - Vous ratez votre attaque, votre adversaire l'a esquivée";
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

  let baseDamage = baseStat * damageMultiplier;
  const damage =
    player.classType === "warrior" || player.classType === "rogue"
      ? Math.max(baseDamage - enemy.physicalDefense, 0) // Réduction par défense physique
      : Math.max(baseDamage - enemy.magicalDefense, 0); // Réduction par défense magique

  // Affiche la valeur absolue des dégâts infligés
  message = `<span style="color: green">Vous infligez ${damage} points de dégâts à ${enemy.name}.</span> `;

  return { damage, message };
}

// -------------- Fonction Calcul des dégâts de l'ennemi
function calculateEnemyDamage(enemy) {
  if (enemy.strength && !enemy.intelligence) {
    return Math.max(enemy.strength - player.physicalDefense, 0);
  } else if (enemy.intelligence && !enemy.strength) {
    return Math.max(enemy.intelligence - player.magicalDefense, 0);
  }
  return 0;
}

// -------------- Fonction Fin du combat
export function endBattle(playerDefeated = false) {
  inBattle = false;

  if (playerDefeated) {
    setCurrentScene("gameOver"); // Retourne à la scène de départ en cas de défaite
  } else {
    setCurrentScene(currentEnemy.nextScene); // Passe à la scène suivante en cas de victoire
  }

  currentEnemy = null;
  displayScene(); // Affiche la nouvelle scène
}

window.rollDiceForBattle = rollDiceForBattle;
