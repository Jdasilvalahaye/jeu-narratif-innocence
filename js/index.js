import { displayScene } from "./gameEngine.js";
import { displayStats, displayInventory } from "./player.js";
import { closeBattleInstructionModal } from "./modal.js";

displayScene();
displayStats();
displayInventory();
closeBattleInstructionModal();
