import { ICommand } from "../ICommand";
import { TV } from "../TV";
import { IDevice } from "../IDevice";

export class IncreaseChannelNumberCommand implements ICommand {
    
    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }
    
    public execute(): void {
        console.log("Increasing channel number...");
        this.device.increaseChannelNumber();
    }
    
    public undo(): void {
        console.log("Decreasing channel number...");
        this.device.decreaseChannelNumber();
    }
}