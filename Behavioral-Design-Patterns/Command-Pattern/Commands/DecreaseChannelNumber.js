"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecreaseChannelNumberCommand = void 0;
var DecreaseChannelNumberCommand = /** @class */ (function () {
    function DecreaseChannelNumberCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    DecreaseChannelNumberCommand.prototype.execute = function () {
        console.log("Decreasing channel number...");
        this.tvRemote.decreaseChannelNumber();
    };
    return DecreaseChannelNumberCommand;
}());
exports.DecreaseChannelNumberCommand = DecreaseChannelNumberCommand;
