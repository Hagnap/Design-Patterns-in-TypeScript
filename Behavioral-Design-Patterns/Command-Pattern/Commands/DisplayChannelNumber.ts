import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class DisplayChannelNumberCommand implements ICommand {
    
    private tvRemote: TV;

    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }
    
    public execute(): void {
        console.log("Displaying channel number...");
        this.tvRemote.displayChannelNumber();
    }
}