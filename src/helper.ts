import commandLineArgs = require('command-line-args');
import commandLineUsage = require('command-line-usage');

export type CommandLineOptions = commandLineArgs.CommandLineOptions;
export type OptionDefinition = commandLineArgs.OptionDefinition;
export type Section = commandLineUsage.Section;
export type CommandListItem = {
    name: string;
    summary?: string;
};
export type CommandName = string | string[];
export type CommandListContent = CommandListItem[];
export type Command = {
    command: CommandName;
    options: OptionDefinition[];
    usage: Section[];
    summary?: string;
    subCommands?: Command[];
    defaultCommand?: Command;
    run?: Function;
};

export function commandListUsage (commandList: Command[]): CommandListContent {
    return commandList.map((cmd: Command) => {
        if (Array.isArray(cmd.command)) {
            return {name: cmd.command[0], summary: cmd.summary};
        } else {
            return {name: cmd.command, summary: cmd.summary};
        }
    });
}
