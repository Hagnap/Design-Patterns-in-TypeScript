"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WizardAdapter = void 0;
var wizard_1 = require("./wizard");
var WizardAdapter = /** @class */ (function () {
    function WizardAdapter() {
        this.wizard = new wizard_1.Wizard();
    }
    WizardAdapter.prototype.attack = function () {
        return this.wizard.castDescructionSpell();
    };
    WizardAdapter.prototype.defend = function () {
        return this.wizard.shield();
    };
    WizardAdapter.prototype.escape = function () {
        return this.wizard.portal();
    };
    return WizardAdapter;
}());
exports.WizardAdapter = WizardAdapter;
