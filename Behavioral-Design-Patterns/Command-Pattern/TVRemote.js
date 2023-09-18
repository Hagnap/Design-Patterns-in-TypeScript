"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TVRemote = void 0;
var NoOpCommand_1 = require("./Commands/NoOpCommand");
var TVRemote = /** @class */ (function () {
    function TVRemote() {
        this.numCommands = 8;
        this.minVolume = 0;
        this.maxVolume = 100;
        this.minChannelNumber = 0;
        this.maxChannelNumber = 100;
        this.volume = 0;
        this.channelNumber = 0;
        this.isOn = false;
        this.commands = new Array(this.numCommands);
        for (var i = 0; i < this.commands.length; i++) {
            this.commands[i] = new NoOpCommand_1.NoOpCommand(this);
        }
    }
    TVRemote.prototype.validateCommandNumberInput = function (input) {
        if (input >= this.numCommands || input < 0) {
            console.log("ERROR: Out of range. There are only ".concat(this.numCommands, " command slots"));
            return false;
        }
        return true;
    };
    TVRemote.prototype.addCommand = function (index, command) {
        if (this.validateCommandNumberInput(index)) {
            this.commands[index] = command;
        }
    };
    TVRemote.prototype.removeCommand = function (index) {
        if (this.validateCommandNumberInput(index)) {
            this.commands[index] = new NoOpCommand_1.NoOpCommand(this);
        }
    };
    TVRemote.prototype.runCommand = function (index) {
        if (this.validateCommandNumberInput(index)) {
            this.commands[index].execute();
        }
    };
    TVRemote.prototype.turnOff = function () {
        this.isOn = false;
    };
    TVRemote.prototype.turnOn = function () {
        this.isOn = false;
    };
    TVRemote.prototype.displayVolume = function () {
        console.log("Volume: ".concat(this.volume));
    };
    TVRemote.prototype.decreaseVolume = function () {
        if (this.volume > this.minVolume) {
            this.volume--;
        }
        else {
            console.log("Min volume level has been reached...");
        }
    };
    TVRemote.prototype.increaseVolume = function () {
        if (this.volume < this.maxVolume) {
            this.volume++;
        }
        else {
            console.log("Max volume level has been reached...");
        }
    };
    TVRemote.prototype.displayChannelNumber = function () {
        console.log("Channel Number: ".concat(this.channelNumber));
    };
    TVRemote.prototype.decreaseChannelNumber = function () {
        if (this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        }
        else {
            console.log("Min channel number has been reached...");
        }
    };
    TVRemote.prototype.increaseChannelNumber = function () {
        if (this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        }
        else {
            console.log("Max channel number has been reached...");
        }
    };
    return TVRemote;
}());
exports.TVRemote = TVRemote;
