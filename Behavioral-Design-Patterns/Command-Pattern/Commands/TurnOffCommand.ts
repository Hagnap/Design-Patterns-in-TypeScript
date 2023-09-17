import { ICommand } from "../ICommand";
import { TVRemote } from "../TVRemote";

export class TurnOffCommand implements ICommand {
    
    private tvRemote: TVRemote;

    public constructor(_tvRemote: TVRemote) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Turning TV off...");
        this.tvRemote.turnOff();
    }
}