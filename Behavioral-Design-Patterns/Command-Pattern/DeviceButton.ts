import { ICommand } from "./ICommand";

export class DeviceButton {
    
    private command: ICommand;

    public constructor(_command) {
        this.command = _command;
    }

    public press(): void {
        this.command.execute();
    }

    public pressUndo(): void {
        this.command.undo();
    }
}