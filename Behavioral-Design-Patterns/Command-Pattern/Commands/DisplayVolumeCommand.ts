import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class DisplayVolumeCommand implements ICommand {

    private tvRemote: TV;
    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }

    public execute(): void {
        console.log("Displaying volume...");
        this.tvRemote.displayVolume();
    }
    
    public undo(): void {
        console.log("Not displaying volume...");
    }
}