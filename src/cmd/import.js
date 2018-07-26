"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = 'import';
exports.summary = 'Import file to project';
exports.options = [
    { name: 'verbose', alias: 'v', type: Boolean, description: 'Verbose import process' },
    { name: 'src', alias: 'y', type: String, defaultOption: true, description: 'source file' },
    { name: 'help', alias: 'h', type: Boolean, description: 'Display this usage guide.' },
];
exports.usage = [
    {
        content: exports.summary,
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
        optionList: exports.options,
    },
];
function run(option) {
    console.log('init options==>', option);
    // if(option.version){
    //     console.log('kontrak v 1.0.0');
    // }
}
exports.run = run;
