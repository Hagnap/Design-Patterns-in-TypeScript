"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientArray = void 0;
var PatientIterator_1 = require("./PatientIterator");
var PatientArray = /** @class */ (function () {
    function PatientArray() {
        this.patients = new Array();
    }
    PatientArray.prototype.iterator = function () {
        return new PatientIterator_1.PatientIterator(this.patients);
    };
    return PatientArray;
}());
exports.PatientArray = PatientArray;
