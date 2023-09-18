"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnOffCommand = void 0;
var TurnOffCommand = /** @class */ (function () {
    function TurnOffCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    TurnOffCommand.prototype.execute = function () {
        console.log("Turning TV off...");
        this.tvRemote.turnOff();
    };
    TurnOffCommand.prototype.undo = function () {
        console.log("Turning TV on...");
        this.tvRemote.turnOn();
    };
    return TurnOffCommand;
}());
exports.TurnOffCommand = TurnOffCommand;
