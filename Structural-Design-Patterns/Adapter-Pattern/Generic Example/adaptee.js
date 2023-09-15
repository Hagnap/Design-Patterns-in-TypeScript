"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adaptee = void 0;
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        console.log("Specific Request...");
    };
    return Adaptee;
}());
exports.Adaptee = Adaptee;
