import { ICommand } from "../ICommand";
import { TV } from "../TV";

export class IncreaseVolumeCommand implements ICommand {

    private tvRemote: TV;
    public constructor(_tvRemote: TV) {
        this.tvRemote = _tvRemote;
    }

    public execute(): void {
        console.log("Increasing volume...");
        this.tvRemote.increaseVolume();
    }
}