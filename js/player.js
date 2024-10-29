export const player = {
  hp: 100,
  mana: 60,
  strenght: 10,
  intelligence: 10,
  physicalDefense: 0,
  magicalDefense: 0,
};

export function displayStats() {
  document.getElementById("hp").textContent = player.hp;
  document.getElementById("mana").textContent = player.mana;
  document.getElementById("str").textContent = player.strenght;
  document.getElementById("int").textContent = player.intelligence;
  document.getElementById("pdef").textContent = player.physicalDefense;
  document.getElementById("mdef").textContent = player.magicalDefense;
}
