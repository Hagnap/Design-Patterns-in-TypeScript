import { ICommand } from "../ICommand";
import { TVRemote } from "../TVRemote";

export class NoOpCommand implements ICommand {
    
    private tvRemote: TVRemote;

    public constructor(_tvRemote: TVRemote) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("No operation has been assigned...");
    }
}