import * as helper from '../../helper';

export const command = 'add';
export const summary = 'Add platform';
export const options = [
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
            '$ kontrak platform add [-p] <platformName> [ ...]',
        ],
    },
    {
        header: 'platformName List',
        content: [
            { name: 'hyperledger', summary: 'Add hyperledger blockchain platform' },
            { name: 'ethereum', summary: 'Add ethereum blockchain platform' },
        ],
    },
    {
        header: 'Options',
        optionList: options,
    },
];

export function run(option: helper.CommandLineOptions) {
    console.log('add options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
