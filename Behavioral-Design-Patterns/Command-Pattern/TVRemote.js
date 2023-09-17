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
    };
    TVRemote.prototype.increaseVolume = function () {
        if (this.volume < this.maxVolume) {
            this.volume++;
        }
    };
    TVRemote.prototype.displayChannelNumber = function () {
        console.log("Channel Number: ".concat(this.channelNumber));
    };
    TVRemote.prototype.decreaseChannelNumber = function () {
        if (this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        }
    };
    TVRemote.prototype.increaseChannelNumber = function () {
        if (this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        }
    };
    return TVRemote;
}());
exports.TVRemote = TVRemote;
