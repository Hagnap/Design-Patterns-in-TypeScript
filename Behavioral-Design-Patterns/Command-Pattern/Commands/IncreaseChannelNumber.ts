import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class IncreaseChannelNumberCommand implements ICommand {
    
    private tvRemote: TV;

    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Increasing channel number...");
        this.tvRemote.increaseChannelNumber();
    }
}