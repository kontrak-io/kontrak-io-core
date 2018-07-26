"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addCommand = require("./platform_cmds/add");
const lsCommand = require("./platform_cmds/ls");
const rmCommand = require("./platform_cmds/rm");
const helper = require("../helper");
exports.command = ['platform', 'platforms'];
exports.summary = 'Platform management handler';
exports.options = [
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.subCommands = [
    lsCommand,
    addCommand,
    rmCommand,
];
exports.defaultCommand = lsCommand;
exports.usage = [
    {
        content: exports.summary,
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
        content: helper.commandListUsage(exports.subCommands),
    },
    {
        header: 'Options',
        optionList: exports.options,
    },
];
function run(option) {
    console.log('platform options=>', option);
}
exports.run = run;
