"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TV_1 = require("./TV");
var DeviceRemote_1 = require("./DeviceRemote");
var DisplayVolumeCommand_1 = require("./Commands/DisplayVolumeCommand");
var DeviceButton_1 = require("./DeviceButton");
var DisplayChannelNumber_1 = require("./Commands/DisplayChannelNumber");
var myTV = new TV_1.TV();
var myTVRemote = new DeviceRemote_1.DeviceRemote(myTV);
// Set misc buttons
myTVRemote.setMiscButtonOne(new DeviceButton_1.DeviceButton(new DisplayVolumeCommand_1.DisplayVolumeCommand(myTVRemote.getDevice())));
myTVRemote.setMiscButtonTwo(new DeviceButton_1.DeviceButton(new DisplayChannelNumber_1.DisplayChannelNumberCommand(myTVRemote.getDevice())));
// Changes TV channel while it's off (does nothing)
myTVRemote.increaseChannelButton.press();
// Turns on TV
myTVRemote.onButton.press();
// Displays volume
myTVRemote.pressMiscButtonOne();
// Increase volume by 20 & Then display volume
for (var i = 0; i < 20; i++) {
    myTVRemote.increaseVolumeButton.press();
}
myTVRemote.miscButtonOne.press();
// Decrease volume by 1 and display it
myTVRemote.decreaseVolumeButton.press();
myTVRemote.miscButtonOne.press();
// Display the channel number
myTVRemote.miscButtonTwo.press();
// Increase channel by 5 & display the channel number
for (var i = 0; i < 5; i++) {
    myTVRemote.increaseChannelButton.press();
}
myTVRemote.miscButtonTwo.press();
// Decrease channel number and then display it
myTVRemote.decreaseChannelButton.press();
myTVRemote.miscButtonTwo.press();
// Calls buttons with NoOp
myTVRemote.miscButtonThree.press();
myTVRemote.miscButtonThree.pressUndo();
myTVRemote.miscButtonFour.press();
myTVRemote.miscButtonFour.pressUndo();
// Turn off the tv
myTVRemote.offButton.press();
// Demonstration of the undo's
myTVRemote.offButton.pressUndo();
myTVRemote.onButton.pressUndo();
