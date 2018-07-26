import * as helper from '../../helper';

export const command = ['ls', 'list'];
export const summary = 'List platforms';
export const options = [
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.'},
];
export const usage = [
    {
        content: summary,
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak platform ls|list',
        ],
    },
    {
        header: 'Options',
        optionList: options,
    },
];

export function run(option: helper.CommandLineOptions) {
    console.log('ls options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
