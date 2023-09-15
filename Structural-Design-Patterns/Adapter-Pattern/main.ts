import { Fighter } from "./Fighter";
import { WizardAdapter } from "./wizardAdapter";
import { Wizard } from "./wizard";

let wizard: Wizard = new Wizard();
console.log(`wizard.castDescructionSpell(): ${wizard.castDescructionSpell()}`);
console.log(`wizard.portal(): ${wizard.portal()}`);
console.log(`wizard.shield(): ${wizard.shield()}`);

console.log();

let wizardWithAdapter: WizardAdapter = new WizardAdapter();
console.log(`wizardWithAdapter.attack(): ${wizardWithAdapter.attack()}`);
console.log(`wizardWithAdapter.defend(): ${wizardWithAdapter.defend()}`);
console.log(`wizardWithAdapter.escape(): ${wizardWithAdapter.escape()}`);

console.log();

let fighter: Fighter = new Fighter();
console.log(`fighter.attack(): ${fighter.attack()}`);
console.log(`fighter.defend(): ${fighter.defend()}`);
console.log(`fighter.escape(): ${fighter.escape()}`);