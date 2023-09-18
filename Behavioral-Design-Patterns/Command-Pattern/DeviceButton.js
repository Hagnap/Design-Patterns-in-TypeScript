"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceButton = void 0;
var DeviceButton = /** @class */ (function () {
    function DeviceButton(_command) {
        this.command = _command;
    }
    DeviceButton.prototype.press = function () {
        this.command.execute();
    };
    DeviceButton.prototype.pressUndo = function () {
        this.command.undo();
    };
    return DeviceButton;
}());
exports.DeviceButton = DeviceButton;
