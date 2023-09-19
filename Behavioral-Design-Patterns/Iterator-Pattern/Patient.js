"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(_name, _appointmentNumber) {
        this.name = _name;
        this.appointmentNumber = _appointmentNumber;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.getAppointmentNumber = function () {
        return this.appointmentNumber;
    };
    return Patient;
}());
exports.Patient = Patient;
