"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coffee = void 0;
// Concrete class
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.getDescription = function () {
        return "Cup of coffee";
    };
    Coffee.prototype.getCost = function () {
        return 3.00;
    };
    return Coffee;
}());
exports.Coffee = Coffee;
