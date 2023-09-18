"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseVolumeCommand = void 0;
var IncreaseVolumeCommand = /** @class */ (function () {
    function IncreaseVolumeCommand(_device) {
        this.device = _device;
    }
    IncreaseVolumeCommand.prototype.execute = function () {
        console.log("Increasing volume...");
        this.device.increaseVolume();
    };
    IncreaseVolumeCommand.prototype.undo = function () {
        console.log("Decreasing volume...");
        this.device.decreaseVolume();
    };
    return IncreaseVolumeCommand;
}());
exports.IncreaseVolumeCommand = IncreaseVolumeCommand;
