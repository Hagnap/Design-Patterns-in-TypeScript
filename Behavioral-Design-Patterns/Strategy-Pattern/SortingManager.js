"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortingManager = void 0;
var NoSortStrategy_1 = require("./Strategies/NoSortStrategy");
var SortingManager = /** @class */ (function () {
    function SortingManager(_list) {
        this.list = _list;
        this.strategy = new NoSortStrategy_1.NoSortStrategy();
    }
    SortingManager.prototype.getSortingStrategy = function () {
        return this.strategy;
    };
    SortingManager.prototype.setSortingStrategy = function (_strategy) {
        this.strategy = _strategy;
    };
    SortingManager.prototype.getList = function () {
        return this.list;
    };
    SortingManager.prototype.setList = function (_list) {
        this.list = _list;
    };
    SortingManager.prototype.runSort = function () {
        this.strategy.sort(this.list);
    };
    return SortingManager;
}());
exports.SortingManager = SortingManager;
