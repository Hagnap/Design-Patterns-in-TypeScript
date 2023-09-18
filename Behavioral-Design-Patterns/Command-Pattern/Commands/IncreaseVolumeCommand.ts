import { ICommand } from "../ICommand";
import { TV } from "../TV";
import { IDevice } from "../IDevice";

export class IncreaseVolumeCommand implements ICommand {

    private device: IDevice;

    public constructor(_device: IDevice) {
        this.device = _device;
    }

    public execute(): void {
        console.log("Increasing volume...");
        this.device.increaseVolume();
    }

    public undo(): void {
        console.log("Decreasing volume...");
        this.device.decreaseVolume();
    }
}