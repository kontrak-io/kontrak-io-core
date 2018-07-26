import commandLineArgs = require('command-line-args');
import commandLineUsage = require('command-line-usage');

import chalk from 'chalk';
import * as helper from '../helper';

export function parser(commands: helper.Command[], defaultCommand?: helper.Command, argv?: string[]): void {
    const mainDefinitions = [
        { name: 'command', defaultOption: true},
    ];
    let mainOptions: helper.CommandLineOptions;
    if (argv !== undefined) {
        mainOptions = commandLineArgs(mainDefinitions, {argv, camelCase: true, stopAtFirstUnknown: true });
    } else {
        mainOptions = commandLineArgs(mainDefinitions, { camelCase: true, stopAtFirstUnknown: true });
    }
    let lArgv: string[] = mainOptions._unknown || [];
    let command : helper.Command;

    const cmds = commands.filter((v: helper.Command) => {
        const cmd: string[] = Array.isArray(v.command) ? v.command : [v.command];

        return cmd.includes(mainOptions.command);
    });

    if (cmds.length < 1) {
        if (defaultCommand !== undefined) {
            if (mainOptions.command === undefined) {
                command = defaultCommand;
            } else {
                console.log(chalk.red(`Unknown command: ${mainOptions.command}`));
                console.log(commandLineUsage(defaultCommand.usage));
                process.exit(0);
            }
        } else {
            console.log(chalk.red(`Unknown command: ${mainOptions.command}`));
            process.exit(0);
        }
    } else {
        command = cmds[0];
    }

    let commandOptions: helper.CommandLineOptions;

    try {
        commandOptions = commandLineArgs(command.options, { argv: lArgv, camelCase: true, stopAtFirstUnknown: true });
    } catch (e) {
        console.log(chalk.red(e.toString()));
        process.exit();
    }
    lArgv = commandOptions._unknown || [];

    if (commandOptions.help) {
        console.log(commandLineUsage(command.usage));
    } else if (command.subCommands) {
        parser(command.subCommands, command.defaultCommand, lArgv);
    } else {
        command.run(commandOptions);
    }
}
