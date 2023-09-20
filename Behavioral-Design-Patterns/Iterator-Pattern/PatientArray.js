"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientArray = void 0;
var PatientArrayIterator_1 = require("./PatientArrayIterator");
var PatientArray = /** @class */ (function () {
    function PatientArray() {
        this.patients = new Array();
    }
    PatientArray.prototype.iterator = function () {
        return new PatientArrayIterator_1.PatientArrayIterator(this.patients);
    };
    return PatientArray;
}());
exports.PatientArray = PatientArray;
