import * as helper from '../../helper';

export const command = ['rm', 'remove', 'del', 'delete'];
export const summary = 'Remove platform from project';
export const options = [
    { name: 'force', alias: 'f', type: Boolean, description: 'Pass all question'},
    { name: 'platform', alias: 'p', type: String, defaultOption: true, multiple: true, description: 'Platform name'},
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];

export const usage = [
    {
        content: summary,
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak platform remove|rm|delete|del [--force|-f|--platform|-p] <platformName>',
        ],
    },
    {
        header: 'Options',
        optionList: options,
    },
];

export function run(option: helper.CommandLineOptions) {
    console.log('rm options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
