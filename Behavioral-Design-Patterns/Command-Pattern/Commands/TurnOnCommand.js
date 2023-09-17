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
    return TurnOnCommand;
}());
exports.TurnOnCommand = TurnOnCommand;
