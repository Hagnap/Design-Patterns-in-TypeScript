"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoOpCommand = void 0;
var NoOpCommand = /** @class */ (function () {
    function NoOpCommand(_tvRemote) {
        this.tvRemote = _tvRemote;
    }
    NoOpCommand.prototype.execute = function () {
        console.log("No operation has been assigned...");
    };
    return NoOpCommand;
}());
exports.NoOpCommand = NoOpCommand;
