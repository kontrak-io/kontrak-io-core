import * as addCommand from './platform_cmds/add';
import * as lsCommand from './platform_cmds/ls';
import * as rmCommand from './platform_cmds/rm';

import * as helper from '../helper';

export const command = ['platform', 'platforms'];
export const summary = 'Platform management handler';
export const options = [
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];
export const subCommands = [
    lsCommand,
    addCommand,
    rmCommand,
];
export const defaultCommand = lsCommand;
export const usage = [
    {
        content: summary,
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak platform',
            '$ kontrak platform [<subCommand>] [<subCommandOptions>]',
        ],
    },
    {
        header: 'SubCommand List',
        content: helper.commandListUsage(subCommands),
    },
    {
        header: 'Options',
        optionList: options,
    },
];

export function run(option: helper.CommandLineOptions) {
    console.log('platform options=>', option);
}
