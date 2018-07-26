import commandLineUsage = require('command-line-usage');

import * as helper from '../helper';

import {commands} from '../commands';

export const command = 'default';
export const options = [
    { name: 'version', alias: 'v', type: Boolean, description: 'Display kontrak version.' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];

export const usage = [
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
        content: helper.commandListUsage(commands),
    },
    {
        header: 'Options',
        optionList: options,
    },
    {
      content: 'Project home: {underline https://github.com/me/example}',
    },
];

export function run(option: helper.CommandLineOptions) {
    if (option !== undefined && option.version) {
        console.log('kontrak v 1.0.0');
    } else {
        console.log(commandLineUsage(usage));
    }
}
