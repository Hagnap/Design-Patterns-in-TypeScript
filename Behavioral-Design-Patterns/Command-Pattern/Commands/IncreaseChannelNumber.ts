import { ICommand } from "../ICommand";
import { TVRemote } from "../TVRemote";

export class IncreaseChannelNumberCommand implements ICommand {
    
    private tvRemote: TVRemote;

    public constructor(_tvRemote: TVRemote) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Increasing channel number...");
        this.tvRemote.increaseChannelNumber();
    }
}