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

  currentScene = choice.nextScene;
  displayScene();
}
