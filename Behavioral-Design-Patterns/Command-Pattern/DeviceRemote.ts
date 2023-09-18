import { DeviceButton } from "./DeviceButton";
import { IDevice } from "./IDevice";
import { NoOpCommand } from "./Commands/NoOpCommand";
import { TurnOnCommand } from "./Commands/TurnOnCommand";
import { TurnOffCommand } from "./Commands/TurnOffCommand";
import { IncreaseVolumeCommand } from "./Commands/IncreaseVolumeCommand";
import { DecreaseVolumeCommand } from "./Commands/DecreaseVolumeCommand";
import { IncreaseChannelNumberCommand } from "./Commands/IncreaseChannelNumber";
import { DecreaseChannelNumberCommand } from "./Commands/DecreaseChannelNumber";

export class DeviceRemote {

    private device: IDevice;

    public onButton: DeviceButton;
    public offButton: DeviceButton;
    public increaseVolumeButton: DeviceButton;
    public decreaseVolumeButton: DeviceButton;
    public increaseChannelButton: DeviceButton;
    public decreaseChannelButton: DeviceButton;

    // Buttons that can be set to any command you want
    public miscButtonOne: DeviceButton;
    public miscButtonTwo: DeviceButton;
    public miscButtonThree: DeviceButton;
    public miscButtonFour: DeviceButton;

    public constructor(_device: IDevice) {
        this.device = _device;
      
        this.onButton = new DeviceButton(new TurnOnCommand(this.device));      
        this.offButton = new DeviceButton(new TurnOffCommand(this.device));       
        this.increaseVolumeButton = new DeviceButton(new IncreaseVolumeCommand(this.device)); 
        this.decreaseVolumeButton = new DeviceButton(new DecreaseVolumeCommand(this.device));
        this.increaseChannelButton = new DeviceButton(new IncreaseChannelNumberCommand(this.device));
        this.decreaseChannelButton = new DeviceButton(new DecreaseChannelNumberCommand(this.device));
        
        this.miscButtonOne = new DeviceButton(new NoOpCommand(this.device));
        this.miscButtonTwo = new DeviceButton(new NoOpCommand(this.device));
        this.miscButtonThree = new DeviceButton(new NoOpCommand(this.device));
        this.miscButtonFour = new DeviceButton(new NoOpCommand(this.device));
    }

    public setMiscButtonOne(_btn): void {
        this.miscButtonOne = _btn;
    }

    public pressMiscButtonOne(): void {
        this.miscButtonOne.press();
    }

    public setMiscButtonTwo(_btn): void {
        this.miscButtonTwo = _btn;
    }

    public setMiscButtonThree(_btn): void {
        this.miscButtonThree = _btn;
    }

    public setMiscButtonFour(_btn): void {
        this.miscButtonFour = _btn;
    }

    public getDevice(): IDevice {
        return this.device;
    }
}