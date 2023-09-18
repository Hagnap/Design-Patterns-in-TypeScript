"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayChannelNumberCommand = void 0;
var DisplayChannelNumberCommand = /** @class */ (function () {
    function DisplayChannelNumberCommand(_device) {
        this.device = _device;
    }
    DisplayChannelNumberCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Displaying channel number...");
        this.device.displayChannelNumber();
    };
    DisplayChannelNumberCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Not displaying channel number...");
    };
    return DisplayChannelNumberCommand;
}());
exports.DisplayChannelNumberCommand = DisplayChannelNumberCommand;
