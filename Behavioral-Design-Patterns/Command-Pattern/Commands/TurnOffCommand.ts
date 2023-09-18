import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class TurnOffCommand implements ICommand {
    
    private tvRemote: TV;

    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Turning TV off...");
        this.tvRemote.turnOff();
    }
    
    public undo(): void {
        console.log("Turning TV on...");
        this.tvRemote.turnOn();
    }
}