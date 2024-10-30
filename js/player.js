export const player = {
  class: "Fugitif", // Sert pendant les combats à déterminer le type d'attaque
  hp: 100,
  stamina: 80,
  mana: 60,
  strenght: 10,
  dexterity: 10,
  intelligence: 10,
  physicalDefense: 0,
  block: 0,
  magicalDefense: 0,
  inventory: [],
};

// --- Fonction pour mettre à jour les statistiques
export function displayStats() {
  document.getElementById("class").textContent = player.class;
  document.getElementById("hp").textContent = player.hp;
  document.getElementById("stam").textContent = player.stamina;
  document.getElementById("mana").textContent = player.mana;
  document.getElementById("str").textContent = player.strenght;
  document.getElementById("dex").textContent = player.dexterity;
  document.getElementById("int").textContent = player.intelligence;
  document.getElementById("pdef").textContent = player.physicalDefense;
  document.getElementById("block").textContent = player.block;
  document.getElementById("mdef").textContent = player.magicalDefense;
}

// --- Fonction pour afficher et remplir l'inventaire
export function displayInventory() {
  const inventoryElement = document.getElementById("inventory");
  inventoryElement.innerHTML = ""; // Vider l'inventaire actuel

  player.inventory.forEach((item) => {
    const itemElement = document.createElement("li");

    // Créer l'élément image
    const image = document.createElement("img");
    image.src = item.imageUrl;
    image.alt = "item.name";
    image.style.width = "60px";
    image.style.height = "60px";
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
