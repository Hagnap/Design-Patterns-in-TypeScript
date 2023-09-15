"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wizard = void 0;
// Wizard: Adaptee
var Wizard = /** @class */ (function () {
    function Wizard() {
    }
    Wizard.prototype.castDescructionSpell = function () {
        return "Casting destruction spell...";
    };
    Wizard.prototype.shield = function () {
        return "Using shield...";
    };
    Wizard.prototype.portal = function () {
        return "Using a portal...";
    };
    return Wizard;
}());
exports.Wizard = Wizard;
