// -- Fonction pour afficher l'avatar du joueur
export function displayPlayerAvatar(url) {
  const playerAvatarElement = document.getElementById("player-avatar");

  playerAvatarElement.src = url;
  playerAvatarElement.alt = "player-avatar";
  playerAvatarElement.style.width = "100%";
}

// -- Fonction pour afficher l'avatar du npc
export function displayNpcAvatar(url) {
  const npcAvatarElement = document.getElementById("npc-avatar");

  npcAvatarElement.src = url; // Change l'image source
  npcAvatarElement.alt = "npc-avatar";
  npcAvatarElement.style.width = "100%";
  npcAvatarElement.style.display = "block"; // Affiche l'avatar si masqué
}

// -- Fonction pour afficher le nom du npc
export function displayNpcName(name) {
  const h2NpcAvatarElement = document.getElementById("npc-name");
  h2NpcAvatarElement.textContent = name;
}

// -- Fonction pour cacher l'avatar du npc
export function hideNpcAvatar() {
  const npcAvatarElement = document.getElementById("npc-avatar");
  if (npcAvatarElement) {
    npcAvatarElement.style.display = "none"; // Masque l'avatar
  }
}
