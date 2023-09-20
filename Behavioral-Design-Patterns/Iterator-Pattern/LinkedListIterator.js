"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListIterator = void 0;
var LinkedListIterator = /** @class */ (function () {
    function LinkedListIterator(_node) {
        this.currPatientReference = _node; // Node is a reference within a linked list
        this.position = 0;
    }
    LinkedListIterator.prototype.next = function () {
        var _a;
        this.position++;
        this.currPatientReference = (_a = this.currPatientReference) === null || _a === void 0 ? void 0 : _a.getNext();
        return this.currPatientReference;
    };
    LinkedListIterator.prototype.currentItem = function () {
        return this.currPatientReference;
    };
    LinkedListIterator.prototype.hasNext = function () {
        var curr = this.currentItem();
        if (curr === null || curr === void 0 ? void 0 : curr.getNext()) {
            return true;
        }
        return false;
    };
    return LinkedListIterator;
}());
exports.LinkedListIterator = LinkedListIterator;
