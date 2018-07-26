"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commandLineUsage = require("command-line-usage");
const helper = require("../helper");
const commands_1 = require("../commands");
exports.command = 'default';
exports.options = [
    { name: 'version', alias: 'v', type: Boolean, description: 'Display kontrak version.' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.usage = [
    {
        header: 'kontrak',
        content: 'app descriptions',
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak command [command_option ...]',
            '$ kontrak option',
        ],
    },
    {
        header: 'Command List',
        content: helper.commandListUsage(commands_1.commands),
    },
    {
        header: 'Options',
        optionList: exports.options,
    },
    {
        content: 'Project home: {underline https://github.com/me/example}',
    },
];
function run(option) {
    if (option !== undefined && option.version) {
        console.log('kontrak v 1.0.0');
    }
    else {
        console.log(commandLineUsage(exports.usage));
    }
}
exports.run = run;
