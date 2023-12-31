"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecreaseVolumeCommand = void 0;
var DecreaseVolumeCommand = /** @class */ (function () {
    function DecreaseVolumeCommand(_device) {
        this.device = _device;
    }
    DecreaseVolumeCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Decreasing volume...");
        this.device.decreaseVolume();
    };
    DecreaseVolumeCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Increasing volume...");
        this.device.increaseVolume();
    };
    return DecreaseVolumeCommand;
}());
exports.DecreaseVolumeCommand = DecreaseVolumeCommand;
