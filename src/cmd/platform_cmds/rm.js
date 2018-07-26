"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = ['rm', 'remove', 'del', 'delete'];
exports.summary = 'Remove platform from project';
exports.options = [
    { name: 'force', alias: 'f', type: Boolean, description: 'Pass all question' },
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
            '$ kontrak platform remove|rm|delete|del [--force|-f|--platform|-p] <platformName>',
        ],
    },
    {
        header: 'Options',
        optionList: exports.options,
    },
];
function run(option) {
    console.log('rm options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
exports.run = run;
