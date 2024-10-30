// --- Fonction pour modifier l'avatar du joueur
export function displayPlayerAvatar(url) {
  const playerAvatarElement = document.getElementById("player-avatar");

  playerAvatarElement.src = url;
  playerAvatarElement.alt = "player-avatar";
  playerAvatarElement.style.width = "100%";
}
