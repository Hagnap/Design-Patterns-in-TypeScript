"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnOnCommand = void 0;
var TurnOnCommand = /** @class */ (function () {
    function TurnOnCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    TurnOnCommand.prototype.execute = function () {
        console.log("Turning TV on...");
        this.tvRemote.turnOn();
    };
    TurnOnCommand.prototype.undo = function () {
        console.log("Turning TV off...");
        this.tvRemote.turnOff();
    };
    return TurnOnCommand;
}());
exports.TurnOnCommand = TurnOnCommand;
