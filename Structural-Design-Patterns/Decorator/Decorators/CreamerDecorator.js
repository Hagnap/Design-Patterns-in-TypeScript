"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreamerDecorator = void 0;
var CoffeeDecorator_1 = require("../CoffeeDecorator");
var CreamerDecorator = /** @class */ (function (_super) {
    __extends(CreamerDecorator, _super);
    function CreamerDecorator(_coffee) {
        var _this = _super.call(this, _coffee) || this;
        _this.discountPercent = 0.15;
        _this.price = 0.25;
        _this.description = ", Creamer";
        console.log("Adding creamer");
        return _this;
    }
    CreamerDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + this.description;
    };
    CreamerDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + this.price;
    };
    return CreamerDecorator;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.CreamerDecorator = CreamerDecorator;
