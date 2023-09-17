"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncreaseVolumeCommand = void 0;
var IncreaseVolumeCommand = /** @class */ (function () {
    function IncreaseVolumeCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    IncreaseVolumeCommand.prototype.execute = function () {
        console.log("Increasing volume...");
        this.tvRemote.increaseVolume();
    };
    return IncreaseVolumeCommand;
}());
exports.IncreaseVolumeCommand = IncreaseVolumeCommand;
