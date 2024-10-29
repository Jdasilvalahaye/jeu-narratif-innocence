import { displayInventory, player } from "./player.js";
import { story } from "./story.js";

let currentScene = "start";

export function displayScene() {
  const textElement = document.getElementById("text");
  const choiceContainer = document.getElementById("choice");

  textElement.textContent = story[currentScene].text;
  choiceContainer.innerHTML = "";

  story[currentScene].choices.forEach((choices, index) => {
    const button = document.createElement("button");
    button.textContent = choices.text;
    button.classList.add("choice-btn");
    button.onclick = () => makeAChoice(index);
    choiceContainer.appendChild(button);
  });
}

export function makeAChoice(index) {
  const choice = story[currentScene].choices[index];

  if (choice.effect === "warriorStuff" && choice.item) {
    choice.item.forEach((item) => player.inventory.push(item)); // Ajoute chaque élément du tableau d'items individuellement (il y en a 3)
    displayInventory();
  }
  currentScene = choice.nextScene;
  displayScene();
}
