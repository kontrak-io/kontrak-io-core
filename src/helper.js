"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function commandListUsage(commandList) {
    return commandList.map((cmd) => {
        if (Array.isArray(cmd.command)) {
            return { name: cmd.command[0], summary: cmd.summary };
        }
        else {
            return { name: cmd.command, summary: cmd.summary };
        }
    });
}
exports.commandListUsage = commandListUsage;
