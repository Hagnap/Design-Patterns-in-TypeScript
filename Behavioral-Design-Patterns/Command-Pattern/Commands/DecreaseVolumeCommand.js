"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecreaseVolumeCommand = void 0;
var DecreaseVolumeCommand = /** @class */ (function () {
    function DecreaseVolumeCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    DecreaseVolumeCommand.prototype.execute = function () {
        console.log("Decreasing volume...");
        this.tvRemote.decreaseVolume();
    };
    return DecreaseVolumeCommand;
}());
exports.DecreaseVolumeCommand = DecreaseVolumeCommand;
