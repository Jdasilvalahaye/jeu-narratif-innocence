// Fonction pour ouvrir le modal
export function openBattleInstructions() {
  const modal = document.getElementById("battle-instructions");
  modal.style.display = "block";
}

// Fonction pour fermer le modal
export function closeBattleInstructionModal() {
  const modal = document.getElementById("battle-instructions");
  modal.style.display = "none";
}
