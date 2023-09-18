"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TV = void 0;
var TV = /** @class */ (function () {
    function TV() {
        this.minVolume = 0;
        this.maxVolume = 100;
        this.minChannelNumber = 0;
        this.maxChannelNumber = 100;
        this.volume = 0;
        this.channelNumber = 0;
        this.isOn = false;
    }
    TV.prototype.turnOff = function () {
        this.isOn = false;
    };
    TV.prototype.turnOn = function () {
        this.isOn = true;
    };
    TV.prototype.displayVolume = function () {
        console.log("Volume: ".concat(this.volume));
    };
    TV.prototype.decreaseVolume = function () {
        if (this.volume > this.minVolume) {
            this.volume--;
        }
        else {
            console.log("Min volume level has been reached...");
        }
    };
    TV.prototype.increaseVolume = function () {
        if (this.volume < this.maxVolume) {
            this.volume++;
        }
        else {
            console.log("Max volume level has been reached...");
        }
    };
    TV.prototype.displayChannelNumber = function () {
        console.log("Channel Number: ".concat(this.channelNumber));
    };
    TV.prototype.decreaseChannelNumber = function () {
        if (this.channelNumber > this.minChannelNumber) {
            this.channelNumber--;
        }
        else {
            console.log("Min channel number has been reached...");
        }
    };
    TV.prototype.increaseChannelNumber = function () {
        if (this.channelNumber < this.maxChannelNumber) {
            this.channelNumber++;
        }
        else {
            console.log("Max channel number has been reached...");
        }
    };
    TV.prototype.getIsOn = function () {
        return this.isOn;
    };
    return TV;
}());
exports.TV = TV;
