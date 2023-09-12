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
exports.SoyDecorator = void 0;
var CoffeeDecorator_1 = require("../CoffeeDecorator");
var SoyDecorator = /** @class */ (function (_super) {
    __extends(SoyDecorator, _super);
    function SoyDecorator(_coffee) {
        var _this = _super.call(this, _coffee) || this;
        _this.price = 0.75;
        _this.description = ", Soy";
        console.log("Adding soy");
        return _this;
    }
    SoyDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + this.description;
    };
    SoyDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + this.price;
    };
    return SoyDecorator;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.SoyDecorator = SoyDecorator;
