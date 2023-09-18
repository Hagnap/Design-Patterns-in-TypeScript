import { ICommand } from "../ICommand";
import { IDevice } from "../IDevice";

export class DecreaseVolumeCommand implements ICommand {

    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }

    public execute(): void {
        console.log("Decreasing volume...");
        this.device.decreaseVolume();
    }

    public undo(): void {
        console.log("Increasing volume...");
        this.device.increaseVolume();
    }
}