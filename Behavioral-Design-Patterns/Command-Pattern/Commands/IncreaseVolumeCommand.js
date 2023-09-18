"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseVolumeCommand = void 0;
var IncreaseVolumeCommand = /** @class */ (function () {
    function IncreaseVolumeCommand(_device) {
        this.device = _device;
    }
    IncreaseVolumeCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Increasing volume...");
        this.device.increaseVolume();
    };
    IncreaseVolumeCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Decreasing volume...");
        this.device.decreaseVolume();
    };
    return IncreaseVolumeCommand;
}());
exports.IncreaseVolumeCommand = IncreaseVolumeCommand;
