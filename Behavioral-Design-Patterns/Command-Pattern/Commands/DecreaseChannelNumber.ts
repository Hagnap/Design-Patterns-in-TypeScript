import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";

export class DecreaseChannelNumberCommand implements ICommand {
    
    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }
    
    public execute(): void {
        console.log("Decreasing channel number...");
        this.device.decreaseChannelNumber();
    }
    
    public undo(): void {
        console.log("Increasing channel number...");
        this.device.increaseChannelNumber();
    }
}