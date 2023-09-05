"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoSortStrategy = void 0;
var NoSortStrategy = /** @class */ (function () {
    function NoSortStrategy() {
    }
    NoSortStrategy.prototype.sort = function (list) {
        console.log("NoSort-Strategy");
        console.log("No sort has been performed. Please assign a Sorting Strategy.");
        return list;
    };
    return NoSortStrategy;
}());
exports.NoSortStrategy = NoSortStrategy;
