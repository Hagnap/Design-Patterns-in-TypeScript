"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedListIterator_1 = require("./LinkedListIterator");
var LinkedList = /** @class */ (function () {
    function LinkedList(_head) {
        if (_head === void 0) { _head = undefined; }
        this.head = _head;
    }
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.clear = function () {
        this.head = undefined;
    };
    LinkedList.prototype.append = function (node) {
        if (this.head) {
            var current = this.head;
            while (current) {
                if (current.getNext()) {
                    current = current.getNext();
                }
                else {
                    current.setNext(node);
                    break;
                }
            }
        }
        else {
            this.head = node;
        }
    };
    LinkedList.prototype.iterator = function () {
        return new LinkedListIterator_1.LinkedListIterator(this.head);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
