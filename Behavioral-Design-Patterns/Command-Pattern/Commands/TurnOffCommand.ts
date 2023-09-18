import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";

export class TurnOffCommand implements ICommand {
    
    private tvRemote: IDevice;

    public constructor(_tvRemote: IDevice) {
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