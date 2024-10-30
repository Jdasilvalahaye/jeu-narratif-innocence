// --- Fonction pour modifier l'avatar du joueur
export function displayPlayerAvatar(url) {
  const playerAvatarElement = document.getElementById("player-avatar");

  playerAvatarElement.src = url;
  playerAvatarElement.alt = "player-avatar";
  playerAvatarElement.style.width = "100%";
}

export function displayNpcAvatar(url) {
  const npcAvatarElement = document.getElementById("npc-avatar");

  npcAvatarElement.src = url;
  npcAvatarElement.alt = "npc-avatar";
  npcAvatarElement.style.width = "100%";
}

export function displayNpcName(name) {
  const h2NpcAvatarElement = document.getElementById("npc-name");
  h2NpcAvatarElement.textContent = name;
}
