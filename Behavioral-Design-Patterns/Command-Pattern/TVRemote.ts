import { ICommand } from "./ICommand";
import { NoOpCommand } from "./Commands/NoOpCommand";

export class TVRemote {

    private volume: number;
    private channelNumber: number;
    private isOn: boolean;

    private minVolume: number = 0;
    private maxVolume: number = 100;

    private minChannelNumber: number = 0;
    private maxChannelNumber: number = 100;

    public constructor() {
        this.volume = 0;
        this.channelNumber = 0;
        this.isOn = false;
    }

    public turnOff(): void {
        this.isOn = false;
    }

    public turnOn(): void {
        this.isOn = false;
    }

    public displayVolume(): void {
        console.log(`Volume: ${this.volume}`);
    }

    public decreaseVolume(): void {
        if(this.volume > this.minVolume) {
            this.volume--;
        } else {
            console.log("Min volume level has been reached...");
        }
    }

    public increaseVolume(): void {
        if(this.volume < this.maxVolume) {
            this.volume++;
        } else {
            console.log("Max volume level has been reached...");
        }
    }

    public displayChannelNumber(): void {
        console.log(`Channel Number: ${this.channelNumber}`);
    }

    public decreaseChannelNumber(): void {
        if(this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        } else {
            console.log("Min channel number has been reached...");
        }
    }

    public increaseChannelNumber(): void {
        if(this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        } else {
            console.log("Max channel number has been reached...");
        }
    }
}