"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDecorator = void 0;
var CoffeeDecorator = /** @class */ (function () {
    function CoffeeDecorator(_coffee) {
        this.coffee = _coffee;
    }
    CoffeeDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription();
    };
    CoffeeDecorator.prototype.getCost = function () {
        return this.coffee.getCost();
    };
    return CoffeeDecorator;
}());
exports.CoffeeDecorator = CoffeeDecorator;
