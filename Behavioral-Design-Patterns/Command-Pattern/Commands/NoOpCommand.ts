import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";
import { TV } from "../TV";

export class NoOpCommand implements ICommand {
    
    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }
    
    public execute(): void {
        console.log("No operation has been assigned...");
    }

    
    public undo(): void {
        console.log("No operation has been assigned...");
    }
}