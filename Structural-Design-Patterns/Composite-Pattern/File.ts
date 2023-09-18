import { IComponent } from "./IComponent";

export class File extends IComponent {
    
    public constructor(_name: string) {
        super(_name);
    }

    public inspect(): void {
        console.log("----------------------------------------");
        console.log(`Now inspecting File: ${this.getName()}`);
        console.log("----------------------------------------");
    }
}