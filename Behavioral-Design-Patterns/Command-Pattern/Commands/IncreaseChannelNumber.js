"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseChannelNumberCommand = void 0;
var IncreaseChannelNumberCommand = /** @class */ (function () {
    function IncreaseChannelNumberCommand(_device) {
        this.device = _device;
    }
    IncreaseChannelNumberCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Increasing channel number...");
        this.device.increaseChannelNumber();
    };
    IncreaseChannelNumberCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Decreasing channel number...");
        this.device.decreaseChannelNumber();
    };
    return IncreaseChannelNumberCommand;
}());
exports.IncreaseChannelNumberCommand = IncreaseChannelNumberCommand;
