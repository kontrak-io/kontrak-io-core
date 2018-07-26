"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const chalk_1 = require("chalk");
function parser(commands, defaultCommand, argv) {
    const mainDefinitions = [
        { name: 'command', defaultOption: true },
    ];
    let mainOptions;
    if (argv !== undefined) {
        mainOptions = commandLineArgs(mainDefinitions, { argv, camelCase: true, stopAtFirstUnknown: true });
    }
    else {
        mainOptions = commandLineArgs(mainDefinitions, { camelCase: true, stopAtFirstUnknown: true });
    }
    let lArgv = mainOptions._unknown || [];
    let command;
    const cmds = commands.filter((v) => {
        const cmd = Array.isArray(v.command) ? v.command : [v.command];
        return cmd.includes(mainOptions.command);
    });
    if (cmds.length < 1) {
        if (defaultCommand !== undefined) {
            if (mainOptions.command === undefined) {
                command = defaultCommand;
            }
            else {
                console.log(chalk_1.default.red(`Unknown command: ${mainOptions.command}`));
                console.log(commandLineUsage(defaultCommand.usage));
                process.exit(0);
            }
        }
        else {
            console.log(chalk_1.default.red(`Unknown command: ${mainOptions.command}`));
            process.exit(0);
        }
    }
    else {
        command = cmds[0];
    }
    let commandOptions;
    try {
        commandOptions = commandLineArgs(command.options, { argv: lArgv, camelCase: true, stopAtFirstUnknown: true });
    }
    catch (e) {
        console.log(chalk_1.default.red(e.toString()));
        process.exit();
    }
    lArgv = commandOptions._unknown || [];
    if (commandOptions.help) {
        console.log(commandLineUsage(command.usage));
    }
    else if (command.subCommands) {
        parser(command.subCommands, command.defaultCommand, lArgv);
    }
    else {
        command.run(commandOptions);
    }
}
exports.parser = parser;
