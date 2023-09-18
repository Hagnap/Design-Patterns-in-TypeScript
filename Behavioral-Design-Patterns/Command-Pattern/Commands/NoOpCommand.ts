import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class NoOpCommand implements ICommand {
    
    private tvRemote: TV;

    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("No operation has been assigned...");
    }

    
    public undo(): void {
        console.log("No operation has been assigned...");
    }
}