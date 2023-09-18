"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOpCommand = void 0;
var NoOpCommand = /** @class */ (function () {
    function NoOpCommand(_device) {
        this.device = _device;
    }
    NoOpCommand.prototype.execute = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("No operation has been assigned...");
    };
    NoOpCommand.prototype.undo = function () {
        if (!this.device.getIsOn()) {
            return;
        }
        console.log("No operation has been assigned...");
    };
    return NoOpCommand;
}());
exports.NoOpCommand = NoOpCommand;
