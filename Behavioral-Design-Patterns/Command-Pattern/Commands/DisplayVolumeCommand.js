"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayVolumeCommand = void 0;
var DisplayVolumeCommand = /** @class */ (function () {
    function DisplayVolumeCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    DisplayVolumeCommand.prototype.execute = function () {
        console.log("Displaying volume...");
        this.tvRemote.displayVolume();
    };
    return DisplayVolumeCommand;
}());
exports.DisplayVolumeCommand = DisplayVolumeCommand;
