import { ICommand } from "../ICommand";
import { TV } from "../TV";
import { IDevice } from "../IDevice";

export class DisplayVolumeCommand implements ICommand {

    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }

    public execute(): void {
        console.log("Displaying volume...");
        this.device.displayVolume();
    }
    
    public undo(): void {
        console.log("Not displaying volume...");
    }
}