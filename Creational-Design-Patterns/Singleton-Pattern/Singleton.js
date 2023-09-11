"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
        this.data = "";
        if (Singleton.instance == null) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    Singleton.getInstance = function () {
        if (Singleton.instance == null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getData = function () {
        return this.data;
    };
    Singleton.prototype.setData = function (_data) {
        this.data = _data;
    };
    Singleton.instance = null;
    return Singleton;
}());
exports.Singleton = Singleton;
