"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TVRemote_1 = require("./TVRemote");
var NoOpCommand_1 = require("./Commands/NoOpCommand");
var DecreaseVolumeCommand_1 = require("./Commands/DecreaseVolumeCommand");
var IncreaseVolumeCommand_1 = require("./Commands/IncreaseVolumeCommand");
var DisplayVolumeCommand_1 = require("./Commands/DisplayVolumeCommand");
var TurnOffCommand_1 = require("./Commands/TurnOffCommand");
var TurnOnCommand_1 = require("./Commands/TurnOnCommand");
var DecreaseChannelNumber_1 = require("./Commands/DecreaseChannelNumber");
var IncreaseChannelNumber_1 = require("./Commands/IncreaseChannelNumber");
var DisplayChannelNumber_1 = require("./Commands/DisplayChannelNumber");
var tvRemote = new TVRemote_1.TVRemote();
var noOpCommand = new NoOpCommand_1.NoOpCommand(tvRemote);
var increaseVolumeCommand = new IncreaseVolumeCommand_1.IncreaseVolumeCommand(tvRemote);
var decreaseVolumeCommand = new DecreaseVolumeCommand_1.DecreaseVolumeCommand(tvRemote);
var displayVolumeCommand = new DisplayVolumeCommand_1.DisplayVolumeCommand(tvRemote);
var turnOnCommand = new TurnOnCommand_1.TurnOnCommand(tvRemote);
var turnOffCommand = new TurnOffCommand_1.TurnOffCommand(tvRemote);
var displayChannelNumberCommand = new DisplayChannelNumber_1.DisplayChannelNumberCommand(tvRemote);
var decreaseChannelNumberCommand = new DecreaseChannelNumber_1.DecreaseChannelNumberCommand(tvRemote);
var increaseChannelNumberCommand = new IncreaseChannelNumber_1.IncreaseChannelNumberCommand(tvRemote);
// Run commands --- Maps a command to an index
tvRemote.addCommand(0, new TurnOnCommand_1.TurnOnCommand(tvRemote));
tvRemote.addCommand(1, new TurnOffCommand_1.TurnOffCommand(tvRemote));
tvRemote.addCommand(2, new DisplayChannelNumber_1.DisplayChannelNumberCommand(tvRemote));
tvRemote.addCommand(3, new IncreaseChannelNumber_1.IncreaseChannelNumberCommand(tvRemote));
tvRemote.addCommand(4, new DecreaseChannelNumber_1.DecreaseChannelNumberCommand(tvRemote));
tvRemote.addCommand(5, new DisplayVolumeCommand_1.DisplayVolumeCommand(tvRemote));
tvRemote.addCommand(6, new IncreaseVolumeCommand_1.IncreaseVolumeCommand(tvRemote));
tvRemote.addCommand(7, new DecreaseVolumeCommand_1.DecreaseVolumeCommand(tvRemote));
// Turns on TV
tvRemote.runCommand(0);
// Displays volume
tvRemote.runCommand(5);
// Increase volume by 20 & Then display volume
for (var i = 0; i < 20; i++) {
    tvRemote.runCommand(6);
}
tvRemote.runCommand(5);
// Decrease volume by 1
tvRemote.runCommand(7);
tvRemote.runCommand(5);
// Display the channel number
tvRemote.runCommand(2);
// Increase channel by 5 & display the channel number
for (var i = 0; i < 5; i++) {
    tvRemote.runCommand(3);
}
tvRemote.runCommand(2);
// Decrease channel number and then display it
tvRemote.runCommand(4);
tvRemote.runCommand(2);
// Turn off the tv
tvRemote.runCommand(1);
