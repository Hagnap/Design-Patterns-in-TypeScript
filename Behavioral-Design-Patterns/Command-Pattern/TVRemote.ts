import { ICommand } from "./ICommand";
import { NoOpCommand } from "./Commands/NoOpCommand";

export class TVRemote {

    private volume: number;
    private channelNumber: number;
    private isOn: boolean;

    private numCommands: number = 8;
    private commands: Array<ICommand>; 

    private minVolume: number = 0;
    private maxVolume: number = 100;

    private minChannelNumber: number = 0;
    private maxChannelNumber: number = 100;

    public constructor() {
        this.volume = 0;
        this.channelNumber = 0;
        this.isOn = false;
        this.commands = new Array<ICommand>(this.numCommands);

        for(let i = 0; i < this.commands.length; i++) {
            this.commands[i] = new NoOpCommand(this);
        }
    }

    public turnOff() {
        this.isOn = false;
    }

    public turnOn() {
        this.isOn = false;
    }

    public displayVolume() {
        console.log(`Volume: ${this.volume}`);
    }

    public decreaseVolume() {
        if(this.volume > this.minVolume) {
            this.volume--;
        }
    }

    public increaseVolume(){
        if(this.volume < this.maxVolume) {
            this.volume++;
        }
    }

    public displayChannelNumber() {
        console.log(`Channel Number: ${this.channelNumber}`);
    }

    public decreaseChannelNumber() {
        if(this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        }
    }

    public increaseChannelNumber(){
        if(this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        }
    }
}