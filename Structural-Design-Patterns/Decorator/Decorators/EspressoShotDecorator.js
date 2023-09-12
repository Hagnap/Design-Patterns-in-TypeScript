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
exports.EspressoShotDecorator = void 0;
var CoffeeDecorator_1 = require("../CoffeeDecorator");
var EspressoShotDecorator = /** @class */ (function (_super) {
    __extends(EspressoShotDecorator, _super);
    function EspressoShotDecorator(_coffee) {
        var _this = _super.call(this, _coffee) || this;
        _this.price = 0.50;
        _this.description = ", Shot of Espresso";
        console.log("Adding shot of espresso");
        return _this;
    }
    EspressoShotDecorator.prototype.getDescription = function () {
        return this.coffee.getDescription() + this.description;
    };
    EspressoShotDecorator.prototype.getCost = function () {
        return this.coffee.getCost() + this.price;
    };
    return EspressoShotDecorator;
}(CoffeeDecorator_1.CoffeeDecorator));
exports.EspressoShotDecorator = EspressoShotDecorator;
