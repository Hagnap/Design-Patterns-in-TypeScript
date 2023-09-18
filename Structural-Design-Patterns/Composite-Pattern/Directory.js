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
exports.Directory = void 0;
var IComponent_1 = require("./IComponent");
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(_name) {
        var _this = _super.call(this, _name) || this;
        _this.files = new Array();
        return _this;
    }
    Directory.prototype.inspect = function () {
        console.log("\n\n----------------------------------------");
        console.log("Now inspecting Folder: ".concat(this.getName()));
        console.log("This folder contains the following files");
        this.files.forEach(function (file) {
            console.log("\t\t".concat(file.getName()));
        });
        console.log("----------------------------------------");
    };
    Directory.prototype.addFile = function (file) {
        this.files.push(file);
    };
    Directory.prototype.removeFile = function (file) {
        var index = this.files.indexOf(file);
        this.files.splice(index, 1);
    };
    return Directory;
}(IComponent_1.IComponent));
exports.Directory = Directory;
