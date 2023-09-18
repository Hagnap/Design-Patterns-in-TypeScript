"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRemote = void 0;
var DeviceButton_1 = require("./DeviceButton");
var NoOpCommand_1 = require("./Commands/NoOpCommand");
var TurnOnCommand_1 = require("./Commands/TurnOnCommand");
var TurnOffCommand_1 = require("./Commands/TurnOffCommand");
var IncreaseVolumeCommand_1 = require("./Commands/IncreaseVolumeCommand");
var DecreaseVolumeCommand_1 = require("./Commands/DecreaseVolumeCommand");
var IncreaseChannelNumber_1 = require("./Commands/IncreaseChannelNumber");
var DecreaseChannelNumber_1 = require("./Commands/DecreaseChannelNumber");
var DeviceRemote = /** @class */ (function () {
    function DeviceRemote(_device) {
        this.device = _device;
        this.onButton = new DeviceButton_1.DeviceButton(new TurnOnCommand_1.TurnOnCommand(this.device));
        this.offButton = new DeviceButton_1.DeviceButton(new TurnOffCommand_1.TurnOffCommand(this.device));
        this.increaseVolumeButton = new DeviceButton_1.DeviceButton(new IncreaseVolumeCommand_1.IncreaseVolumeCommand(this.device));
        this.decreaseVolumeButton = new DeviceButton_1.DeviceButton(new DecreaseVolumeCommand_1.DecreaseVolumeCommand(this.device));
        this.increaseChannelButton = new DeviceButton_1.DeviceButton(new IncreaseChannelNumber_1.IncreaseChannelNumberCommand(this.device));
        this.decreaseChannelButton = new DeviceButton_1.DeviceButton(new DecreaseChannelNumber_1.DecreaseChannelNumberCommand(this.device));
        this.miscButtonOne = new DeviceButton_1.DeviceButton(new NoOpCommand_1.NoOpCommand(this.device));
        this.miscButtonTwo = new DeviceButton_1.DeviceButton(new NoOpCommand_1.NoOpCommand(this.device));
        this.miscButtonThree = new DeviceButton_1.DeviceButton(new NoOpCommand_1.NoOpCommand(this.device));
        this.miscButtonFour = new DeviceButton_1.DeviceButton(new NoOpCommand_1.NoOpCommand(this.device));
    }
    DeviceRemote.prototype.setMiscButtonOne = function (_btn) {
        this.miscButtonOne = _btn;
    };
    DeviceRemote.prototype.pressMiscButtonOne = function () {
        this.miscButtonOne.press();
    };
    DeviceRemote.prototype.setMiscButtonTwo = function (_btn) {
        this.miscButtonTwo = _btn;
    };
    DeviceRemote.prototype.setMiscButtonThree = function (_btn) {
        this.miscButtonThree = _btn;
    };
    DeviceRemote.prototype.setMiscButtonFour = function (_btn) {
        this.miscButtonFour = _btn;
    };
    DeviceRemote.prototype.getDevice = function () {
        return this.device;
    };
    return DeviceRemote;
}());
exports.DeviceRemote = DeviceRemote;
