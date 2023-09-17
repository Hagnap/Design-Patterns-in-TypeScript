"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayChannelNumberCommand = void 0;
var DisplayChannelNumberCommand = /** @class */ (function () {
    function DisplayChannelNumberCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    DisplayChannelNumberCommand.prototype.execute = function () {
        console.log("Displaying channel number...");
        this.tvRemote.displayChannelNumber();
    };
    return DisplayChannelNumberCommand;
}());
exports.DisplayChannelNumberCommand = DisplayChannelNumberCommand;
