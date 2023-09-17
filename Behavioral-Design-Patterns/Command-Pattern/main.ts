import { TVRemote } from "./TVRemote";
import { NoOpCommand } from "./Commands/NoOpCommand";
import { DecreaseVolumeCommand } from "./Commands/DecreaseVolumeCommand";
import { IncreaseVolumeCommand } from "./Commands/IncreaseVolumeCommand";
import { DisplayVolumeCommand } from "./Commands/DisplayVolumeCommand";
import { TurnOffCommand } from "./Commands/TurnOffCommand";
import { TurnOnCommand } from "./Commands/TurnOnCommand";
import { DecreaseChannelNumberCommand } from "./Commands/DecreaseChannelNumber";
import { IncreaseChannelNumberCommand } from "./Commands/IncreaseChannelNumber";
import { DisplayChannelNumberCommand } from "./Commands/DisplayChannelNumber";

let tvRemote = new TVRemote();

let noOpCommand:NoOpCommand = new NoOpCommand(tvRemote);
let increaseVolumeCommand:IncreaseVolumeCommand = new IncreaseVolumeCommand(tvRemote);
let decreaseVolumeCommand:DecreaseVolumeCommand = new DecreaseVolumeCommand(tvRemote);
let displayVolumeCommand:DisplayVolumeCommand = new DisplayVolumeCommand(tvRemote);
let turnOnCommand: TurnOnCommand = new TurnOnCommand(tvRemote);
let turnOffCommand: TurnOffCommand = new TurnOffCommand(tvRemote);
let displayChannelNumberCommand: DisplayChannelNumberCommand = new DisplayChannelNumberCommand(tvRemote);
let decreaseChannelNumberCommand: DecreaseChannelNumberCommand = new DecreaseChannelNumberCommand(tvRemote);
let increaseChannelNumberCommand: IncreaseChannelNumberCommand = new IncreaseChannelNumberCommand(tvRemote);


// Run commands
turnOnCommand.execute();

displayVolumeCommand.execute();

// Increase volume by 20 & Then display volume
for(let i = 0; i < 20; i++) { increaseVolumeCommand.execute(); }
displayVolumeCommand.execute();

// Decrease volume by 1
decreaseVolumeCommand.execute();
displayVolumeCommand.execute();

// Display the channel number
displayChannelNumberCommand.execute();

// Increase channel by 5 & display the channel number
for(let i = 0; i < 5; i++) {
    increaseChannelNumberCommand.execute();
}
displayChannelNumberCommand.execute();

// Decrease channel number and then display it
decreaseChannelNumberCommand.execute();
displayChannelNumberCommand.execute();

// Turn off the tv
turnOffCommand.execute();