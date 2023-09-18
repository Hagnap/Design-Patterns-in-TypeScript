"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayVolumeCommand = void 0;
var DisplayVolumeCommand = /** @class */ (function () {
    function DisplayVolumeCommand(_device) {
        this.device = _device;
    }
    DisplayVolumeCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Displaying volume...");
        this.device.displayVolume();
    };
    DisplayVolumeCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Not displaying volume...");
    };
    return DisplayVolumeCommand;
}());
exports.DisplayVolumeCommand = DisplayVolumeCommand;
