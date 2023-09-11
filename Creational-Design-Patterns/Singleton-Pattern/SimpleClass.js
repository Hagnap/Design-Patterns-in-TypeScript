"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleClass = void 0;
var Singleton_1 = require("./Singleton");
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
        this.value = Singleton_1.Singleton.getInstance().getData();
    }
    SimpleClass.prototype.getValue = function () {
        return this.value;
    };
    SimpleClass.prototype.setValue = function (_value) {
        this.value = _value;
    };
    return SimpleClass;
}());
exports.SimpleClass = SimpleClass;
