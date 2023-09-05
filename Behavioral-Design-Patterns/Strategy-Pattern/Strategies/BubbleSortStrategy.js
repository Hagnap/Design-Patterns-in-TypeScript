"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSortStrategy = void 0;
var BubbleSortStrategy = /** @class */ (function () {
    function BubbleSortStrategy() {
    }
    BubbleSortStrategy.prototype.sort = function (list) {
        console.log("BubbleSort-Strategy");
        var temp;
        for (var i = 0; i < list.length; i++) {
            for (var j = 0; j < list.length - 1 - i; j++) {
                if (list[j] > list[j + 1]) {
                    temp = list[j + 1];
                    list[j + 1] = list[j];
                    list[j] = temp;
                }
            }
        }
        return list;
    };
    return BubbleSortStrategy;
}());
exports.BubbleSortStrategy = BubbleSortStrategy;
