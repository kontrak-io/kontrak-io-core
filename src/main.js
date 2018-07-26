"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultCommand = require("./cmd/default");
const commands_1 = require("./commands");
const command_parser_1 = require("./lib/command-parser");
command_parser_1.parser(commands_1.commands, defaultCommand);
