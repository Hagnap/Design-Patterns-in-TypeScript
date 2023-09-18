import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";

export class DisplayChannelNumberCommand implements ICommand {
    
    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }
    
    public execute(): void {
        console.log("Displaying channel number...");
        this.device.displayChannelNumber();
    }
    
    public undo(): void {
        console.log("Not displaying channel number...");
    }
}