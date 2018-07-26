import * as helper from '../helper';

export const command = 'import';
export const summary = 'Import file to project';
export const options = [
    { name: 'verbose', alias: 'v', type: Boolean, description: 'Verbose import process'},
    { name: 'src', alias: 'y', type: String, defaultOption: true, description: 'source file' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];

export const usage = [
    {
        content: summary,
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak import',
            '$ kontrak import [--verbose|-v] [{bold --src} string]',
        ],
    },
    {
        header: 'Options',
        optionList: options,
    },
];

export function run(option: helper.CommandLineOptions) {
    console.log('init options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
