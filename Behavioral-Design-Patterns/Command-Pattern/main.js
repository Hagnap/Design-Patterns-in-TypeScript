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
// Run commands
turnOnCommand.execute();
displayVolumeCommand.execute();
// Increase volume by 20 & Then display volume
for (var i = 0; i < 20; i++) {
    increaseVolumeCommand.execute();
}
displayVolumeCommand.execute();
// Decrease volume by 1
decreaseVolumeCommand.execute();
displayVolumeCommand.execute();
// Display the channel number
displayChannelNumberCommand.execute();
// Increase channel by 5 & display the channel number
for (var i = 0; i < 5; i++) {
    increaseChannelNumberCommand.execute();
}
displayChannelNumberCommand.execute();
// Decrease channel number and then display it
decreaseChannelNumberCommand.execute();
displayChannelNumberCommand.execute();
// Turn off the tv
turnOffCommand.execute();