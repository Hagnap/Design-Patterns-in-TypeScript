import { TV } from "./TV";
import { IDevice } from "./IDevice";
import { DeviceRemote } from "./DeviceRemote";
import { DisplayVolumeCommand } from "./Commands/DisplayVolumeCommand";
import { DeviceButton } from "./DeviceButton";
import { DisplayChannelNumberCommand } from "./Commands/DisplayChannelNumber";

let myTV = new TV();
let myTVRemote = new DeviceRemote(myTV);

// Set misc buttons
myTVRemote.setMiscButtonOne(
    new DeviceButton(new DisplayVolumeCommand(myTVRemote.getDevice()))
);

myTVRemote.setMiscButtonTwo(
    new DeviceButton(new DisplayChannelNumberCommand(myTVRemote.getDevice()))
);

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
