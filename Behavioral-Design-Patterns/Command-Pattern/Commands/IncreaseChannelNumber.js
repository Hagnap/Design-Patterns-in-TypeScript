"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseChannelNumberCommand = void 0;
var IncreaseChannelNumberCommand = /** @class */ (function () {
    function IncreaseChannelNumberCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    IncreaseChannelNumberCommand.prototype.execute = function () {
        console.log("Increasing channel number...");
        this.tvRemote.increaseChannelNumber();
    };
    return IncreaseChannelNumberCommand;
}());
exports.IncreaseChannelNumberCommand = IncreaseChannelNumberCommand;
