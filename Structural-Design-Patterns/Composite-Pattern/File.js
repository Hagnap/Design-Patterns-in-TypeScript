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
exports.File = void 0;
var IComponent_1 = require("./IComponent");
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File(_name) {
        return _super.call(this, _name) || this;
    }
    File.prototype.inspect = function () {
        console.log("----------------------------------------");
        console.log("Now inspecting File: ".concat(this.getName()));
        console.log("----------------------------------------");
    };
    return File;
}(IComponent_1.IComponent));
exports.File = File;
