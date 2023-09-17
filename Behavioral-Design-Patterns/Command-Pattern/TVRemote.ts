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

    private validateCommandNumberInput(input) {
        if(input >= this.numCommands || input < 0) {
            console.log(`ERROR: Out of range. There are only ${this.numCommands} command slots`);
            return false;
        }
        return true;
    }

    public addCommand(index: number, command:ICommand): void{
        if(this.validateCommandNumberInput(index)) {
            this.commands[index] = command;
        }

    }

    public removeCommand(index: number): void {
        if(this.validateCommandNumberInput(index)) {
            this.commands[index] = new NoOpCommand(this);
        }
    }

    public runCommand(index: number) {
        if(this.validateCommandNumberInput(index)) {
            this.commands[index].execute();
        }        
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
        }
    }

    public increaseVolume(): void {
        if(this.volume < this.maxVolume) {
            this.volume++;
        }
    }

    public displayChannelNumber(): void {
        console.log(`Channel Number: ${this.channelNumber}`);
    }

    public decreaseChannelNumber(): void {
        if(this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        }
    }

    public increaseChannelNumber(): void {
        if(this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        }
    }
}