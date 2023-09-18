"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IComponent = void 0;
var IComponent = /** @class */ (function () {
    function IComponent(_name) {
        this.name = _name;
    }
    IComponent.prototype.setName = function (_name) {
        this.name = _name;
    };
    IComponent.prototype.getName = function () {
        return this.name;
    };
    return IComponent;
}());
exports.IComponent = IComponent;
