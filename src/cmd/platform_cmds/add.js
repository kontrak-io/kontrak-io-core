"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = 'add';
exports.summary = 'Add platform';
exports.options = [
    { name: 'platform', alias: 'p', type: String, defaultOption: true, multiple: true, description: 'Platform name' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.usage = [
    {
        content: exports.summary,
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
        optionList: exports.options,
    },
];
function run(option) {
    console.log('add options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
exports.run = run;
