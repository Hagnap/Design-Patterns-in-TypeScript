"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientIterator = void 0;
var PatientIterator = /** @class */ (function () {
    function PatientIterator(_patients) {
        this.patients = _patients;
        this.position = 0;
    }
    PatientIterator.prototype.next = function () {
        // Update position & return patient at the new position
        this.position++;
        return this.patients[this.position];
    };
    PatientIterator.prototype.currentItem = function () {
        // Return patient at the current position
        return this.patients[this.position];
    };
    PatientIterator.prototype.hasNext = function () {
        // If position + 1 is less than the length of the patients array
        // then logically speaking there will be a patient after the 
        // current patient.
        if (this.position + 1 <= this.patients.length) {
            return true;
        }
        return false;
    };
    return PatientIterator;
}());
exports.PatientIterator = PatientIterator;
