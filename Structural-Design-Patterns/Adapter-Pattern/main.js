"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fighter_1 = require("./Fighter");
var wizardAdapter_1 = require("./wizardAdapter");
var wizard_1 = require("./wizard");
var wizard = new wizard_1.Wizard();
console.log("wizard.castDescructionSpell(): ".concat(wizard.castDescructionSpell()));
console.log("wizard.portal(): ".concat(wizard.portal()));
console.log("wizard.shield(): ".concat(wizard.shield()));
console.log();
var wizardWithAdapter = new wizardAdapter_1.WizardAdapter();
console.log("wizardWithAdapter.attack(): ".concat(wizardWithAdapter.attack()));
console.log("wizardWithAdapter.defend(): ".concat(wizardWithAdapter.defend()));
console.log("wizardWithAdapter.escape(): ".concat(wizardWithAdapter.escape()));
console.log();
var fighter = new Fighter_1.Fighter();
console.log("fighter.attack(): ".concat(fighter.attack()));
console.log("fighter.defend(): ".concat(fighter.defend()));
console.log("fighter.escape(): ".concat(fighter.escape()));