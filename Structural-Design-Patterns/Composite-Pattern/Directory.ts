import { IComponent } from "./IComponent";

export class Directory extends IComponent {

    private files: Array<IComponent>;

    public constructor(_name: string) {
        super(_name);

        this.files = new Array<IComponent>(); 
    }

    public inspect(): void {
        console.log("\n\n----------------------------------------");
        console.log(`Now inspecting Folder: ${this.getName()}`);
        console.log("This folder contains the following files");
        this.files.forEach(file => {
            console.log(`\t\t${file.getName()}`)
        });
        console.log("----------------------------------------");
    }

    public addFile(file:IComponent): void {
        this.files.push(file);
    }

    public removeFile(file:IComponent): void {
        let index = this.files.indexOf(file);

        this.files.splice(index, 1);
    }
}