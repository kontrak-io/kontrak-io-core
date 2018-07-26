"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const importCommand = require("./cmd/import");
const initCommand = require("./cmd/init");
const platformCommand = require("./cmd/platform");
exports.commands = [
    initCommand,
    importCommand,
    platformCommand,
];
