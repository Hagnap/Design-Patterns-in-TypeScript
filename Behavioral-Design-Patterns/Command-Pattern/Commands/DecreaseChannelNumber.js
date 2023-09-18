"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecreaseChannelNumberCommand = void 0;
var DecreaseChannelNumberCommand = /** @class */ (function () {
    function DecreaseChannelNumberCommand(_device) {
        this.device = _device;
    }
    DecreaseChannelNumberCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Decreasing channel number...");
        this.device.decreaseChannelNumber();
    };
    DecreaseChannelNumberCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("Increasing channel number...");
        this.device.increaseChannelNumber();
    };
    return DecreaseChannelNumberCommand;
}());
exports.DecreaseChannelNumberCommand = DecreaseChannelNumberCommand;
