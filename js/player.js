export const player = {
  hp: 100,
  mana: 60,
  strenght: 10,
  intelligence: 10,
  physicalDefense: 0,
  magicalDefense: 0,
  inventory: [],
};

// Fonction pour mettre à jour les statistiques
export function displayStats() {
  document.getElementById("hp").textContent = player.hp;
  document.getElementById("mana").textContent = player.mana;
  document.getElementById("str").textContent = player.strenght;
  document.getElementById("int").textContent = player.intelligence;
  document.getElementById("pdef").textContent = player.physicalDefense;
  document.getElementById("mdef").textContent = player.magicalDefense;
}

// Fonction pour afficher l'inventaire
export function displayInventory() {
  const inventoryElement = document.getElementById("inventory");
  inventoryElement.innerHTML = ""; // Vider l'inventaire actuel

  player.inventory.forEach((item) => {
    const itemElement = document.createElement("li");

    // Créer l'élément image
    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = "item.name";
    image.style.width = "40px";
    image.style.height = "40px";
    image.style.borderRadius = "5px";

    // Créer l'élément de texte pour le nom de l'objet
    const nameElement = document.createElement("span");
    nameElement.textContent = item.name;
    nameElement.style.marginTop = "5px";

    itemElement.appendChild(image);
    itemElement.appendChild(nameElement);
    inventoryElement.appendChild(itemElement);
  });
}
