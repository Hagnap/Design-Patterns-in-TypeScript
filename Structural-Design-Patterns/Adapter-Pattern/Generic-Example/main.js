"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adapter_1 = require("./adapter");
var target_1 = require("./target");
var target = new target_1.Target();
target.request();
var targetWithAdapter = new adapter_1.Adapter();
targetWithAdapter.request();
