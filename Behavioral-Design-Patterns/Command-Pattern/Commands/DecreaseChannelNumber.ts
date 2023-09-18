import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";

export class DecreaseChannelNumberCommand implements ICommand {
    
    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }
    
    public execute(): void {

        if(!this.device.getIsOn()) {
            return;
        }

        console.log("Decreasing channel number...");
        this.device.decreaseChannelNumber();
    }
    
    public undo(): void {

        if(!this.device.getIsOn()) {
            return;
        }

        console.log("Increasing channel number...");
        this.device.increaseChannelNumber();
    }
}