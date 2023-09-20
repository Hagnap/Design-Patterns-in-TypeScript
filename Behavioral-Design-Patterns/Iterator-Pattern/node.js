"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(_value, _next) {
        if (_next === void 0) { _next = undefined; }
        this.value = _value;
        this.next = _next;
    }
    Node.prototype.getValue = function () {
        return this.value;
    };
    Node.prototype.setValue = function (_value) {
        this.value = _value;
    };
    Node.prototype.getNext = function () {
        return this.next;
    };
    Node.prototype.setNext = function (_next) {
        this.next = _next;
    };
    return Node;
}());
exports.Node = Node;
