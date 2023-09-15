"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
var Fighter = /** @class */ (function () {
    function Fighter() {
    }
    Fighter.prototype.attack = function () {
        return "Attacking...";
    };
    Fighter.prototype.defend = function () {
        return "Defending...";
    };
    Fighter.prototype.escape = function () {
        return "Escaping...";
    };
    return Fighter;
}());
exports.Fighter = Fighter;
