"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = ['ls', 'list'];
exports.summary = 'List platforms';
exports.options = [
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.usage = [
    {
        content: exports.summary,
    },
    {
        header: 'Usage',
        content: [
            '$ kontrak platform ls|list',
        ],
    },
    {
        header: 'Options',
        optionList: exports.options,
    },
];
function run(option) {
    console.log('ls options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
exports.run = run;
