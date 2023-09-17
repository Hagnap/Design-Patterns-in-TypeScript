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


// Run commands --- Maps a command to an index (ex 0 is mapped to TurnOnCommand, 1 is mapped to TurnOffCommand, 6 is mapped to IncreaseVolumeCommand, and so on)
tvRemote.addCommand(0, new TurnOnCommand(tvRemote));
tvRemote.addCommand(1, new TurnOffCommand(tvRemote));
tvRemote.addCommand(2, new DisplayChannelNumberCommand(tvRemote));
tvRemote.addCommand(3, new IncreaseChannelNumberCommand(tvRemote));
tvRemote.addCommand(4, new DecreaseChannelNumberCommand(tvRemote));
tvRemote.addCommand(5, new DisplayVolumeCommand(tvRemote));
tvRemote.addCommand(6, new IncreaseVolumeCommand(tvRemote));
tvRemote.addCommand(7, new DecreaseVolumeCommand(tvRemote));

// Turns on TV
tvRemote.runCommand(0);

// Displays volume
tvRemote.runCommand(5);

// Increase volume by 20 & Then display volume
for(let i = 0; i < 20; i++) { tvRemote.runCommand(6); }
tvRemote.runCommand(5);

// Decrease volume by 1
tvRemote.runCommand(7);
tvRemote.runCommand(5);

// Display the channel number
tvRemote.runCommand(2);

// Increase channel by 5 & display the channel number
for(let i = 0; i < 5; i++) { tvRemote.runCommand(3); }
tvRemote.runCommand(2);

// Decrease channel number and then display it
tvRemote.runCommand(4);
tvRemote.runCommand(2);

// Turn off the tv
tvRemote.runCommand(1);