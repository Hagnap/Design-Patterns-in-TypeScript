import { ICommand } from "../ICommand";
import { TVRemote } from "../TVRemote";

export class TurnOnCommand implements ICommand {
    
    private tvRemote: TVRemote;

    public constructor(_tvRemote: TVRemote) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Turning TV on...");
        this.tvRemote.turnOn();
    }
}