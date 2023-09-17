import { ICommand } from "../ICommand";
import { TVRemote } from "../TVRemote";

export class DisplayVolumeCommand implements ICommand {

    private tvRemote: TVRemote;
    public constructor(_tvRemote: TVRemote) {
        this.tvRemote = _tvRemote;
    }

    public execute(): void {
        console.log("Displaying volume...");
        this.tvRemote.displayVolume();
    }
}