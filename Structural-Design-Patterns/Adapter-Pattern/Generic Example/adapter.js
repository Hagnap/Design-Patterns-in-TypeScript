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
exports.Adapter = void 0;
var adaptee_1 = require("./adaptee");
var target_1 = require("./target");
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        var _this = _super.call(this) || this;
        _this.adaptee = new adaptee_1.Adaptee();
        return _this;
    }
    Adapter.prototype.request = function () {
        this.adaptee.specificRequest();
    };
    return Adapter;
}(target_1.Target));
exports.Adapter = Adapter;
