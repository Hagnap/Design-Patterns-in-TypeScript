import { IFighter } from "./ifighter";
import { Wizard } from "./wizard";

export class WizardAdapter implements IFighter {
    
    private wizard: Wizard;

    public constructor() {
        this.wizard = new Wizard();
    }
    
    attack(): string {
        return this.wizard.castDescructionSpell();
    }

    defend(): string {
        return this.wizard.shield();
    }

    escape(): string {
        return this.wizard.portal();
    }
}