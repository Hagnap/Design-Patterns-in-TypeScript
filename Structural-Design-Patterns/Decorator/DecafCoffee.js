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
exports.DecafCoffee = void 0;
var Coffee_1 = require("./Coffee");
var DecafCoffee = /** @class */ (function (_super) {
    __extends(DecafCoffee, _super);
    function DecafCoffee() {
        return _super.call(this) || this;
    }
    DecafCoffee.prototype.getDescription = function () {
        return "Decaf Coffee";
    };
    DecafCoffee.prototype.getCost = function () {
        return 2.00;
    };
    return DecafCoffee;
}(Coffee_1.Coffee));
exports.DecafCoffee = DecafCoffee;
